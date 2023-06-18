const hre = require("hardhat");

async function main() {

  const VendingMachineFactory = await hre.ethers.getContractFactory("VendingMachine");
  const vendingMachine = await VendingMachineFactory.deploy();
  await vendingMachine.deployed();

  console.log(
    `Cupcake vending machine deployed to ${vendingMachine.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});