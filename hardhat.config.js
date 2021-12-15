require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require('hardhat-deploy');
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const { API_URL, PRIVATE_KEY, API_KEY } = process.env;

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey:  API_KEY
  }
};
