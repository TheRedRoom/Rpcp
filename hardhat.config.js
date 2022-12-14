require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-etherscan');
require('hardhat-contract-sizer');
require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.15",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  paths: {
    artifacts: './artifacts'
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    mainnet: {
      url: "https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}",
      accounts: ['process.env.PRIVATE_KEY'],
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}",
      accounts: ['process.env.PRIVATE_KEY']
    }
  },
  etherscan: {
    apiKey: {
      rinkeby : "VKIXEWHMF5FAY1QYZMUZ5D14EPBA1XD3B4",
      mainnet : "VKIXEWHMF5FAY1QYZMUZ5D14EPBA1XD3B4"
    }
  },
};
