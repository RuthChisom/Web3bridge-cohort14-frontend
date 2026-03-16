const hre = require("hardhat");

async function main() {

  const PrimeChecker = await hre.ethers.getContractFactory("PrimeChecker");

  console.log("Deploying PrimeChecker contract...");

  const primeChecker = await PrimeChecker.deploy();

  await primeChecker.waitForDeployment();

  const address = await primeChecker.getAddress();

  console.log("PrimeChecker deployed to:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });