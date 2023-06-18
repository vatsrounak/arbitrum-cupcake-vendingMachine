require("@nomicfoundation/hardhat-toolbox");

// NEVER record important private keys in your code - this is for demo purposes
const GOERLI_TESTNET_PRIVATE_KEY = "";
const ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY = "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      chainId: 1337
    },
    arbitrumGoerli: {
      url: "https://goerli-rollup.arbitrum.io/rpc",
      chainId: 421613,
      //accounts: [GOERLI_TESTNET_PRIVATE_KEY]
    },
    arbitrumOne: {
      url: "https://arb1.arbitrum.io/rpc",
      //accounts: [ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY]
    }
  }
};