import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DeployModule = buildModule("DeployModule", (m) => {

  const primeChecker = m.contract("PrimeChecker");

  return { primeChecker };

});

export default DeployModule;