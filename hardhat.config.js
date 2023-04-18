/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.9",
    defaultNetwork: "ISLMT",
    networks: {
      hardhat: {},
      url: "https://haqq-chain-testnet.rpc.thirdweb.com",
      account: [`0x${process.env.PRIVATE_KEY}`],
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
