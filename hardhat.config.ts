import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const {RPC_URL, PRIVATE_KEY, ETHERSCAN_API_KEY} = process.env;
const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    liskSepolia: {
      url: `${RPC_URL}`,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 4202,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
   }
};

export default config;
