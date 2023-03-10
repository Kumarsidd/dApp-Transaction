require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/dMDMvpfy7sgvsbwxmzPGtYHC8T1crQEJ",
      accounts: [
        "0x48c15a0dc2d148c9745f270fde46bcf2debf7eb749c135938209b992bc316e5f",
      ],
    },
  },
};
