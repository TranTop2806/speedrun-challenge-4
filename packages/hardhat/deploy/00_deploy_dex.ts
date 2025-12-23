import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { DEX } from "../typechain-types/contracts/DEX";
import { Balloons } from "../typechain-types/contracts/Balloons";

const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // 1. Deploy Balloons Token
  await deploy("Balloons", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  const balloons: Balloons = await hre.ethers.getContract("Balloons", deployer);
  const balloonsAddress = await balloons.getAddress();

  // 2. Deploy DEX
  await deploy("DEX", {
    from: deployer,
    args: [balloonsAddress],
    log: true,
    autoMine: true,
  });

  const dex = (await hre.ethers.getContract("DEX", deployer)) as DEX;
  const dexAddress = await dex.getAddress();

  // 3. Transfer Balloons to your Frontend address for testing
  // REPLACE "YOUR_FRONTEND_ADDRESS" with your actual wallet address (e.g., from Metamask)
  const frontendAddress = "0x8A5d6a69D94a13354A923f6C64e6B08081059fb6";

  // if (frontendAddress !== "0x8A5d6a69D94a13354A923f6C64e6B08081059fb6") {
  //   console.log(`\n Sending 10 Balloons to frontend address: ${frontendAddress}...`);
  //   await balloons.transfer(frontendAddress, hre.ethers.parseEther("10"));
  // }

  // 4. Initialize the DEX Pool
  // This provides 5 ETH and 5 Balloons to start the x*y=k curve
  console.log("\n Approving DEX to take Balloons from deployer...");
  await balloons.approve(dexAddress, hre.ethers.parseEther("100"));
  
  console.log(" INIT exchange with 0.005 ETH and 0.005 Balloons...");
  await dex.init(hre.ethers.parseEther("0.005"), {
    value: hre.ethers.parseEther("0.005"),
    gasLimit: 200000,
  });
};

export default deployYourContract;
deployYourContract.tags = ["Balloons", "DEX"];