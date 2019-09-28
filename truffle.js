const HDWalletProvider = require('truffle-hdwallet-provider');
//
const fs = require('fs');

const infuraKey = fs
  .readFileSync('.infura')
  .toString()
  .trim();
const mnemonic = fs
  .readFileSync('.secret')
  .toString()
  .trim();

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      gas: 6500000,
      network_id: '5777'
    },
    ropsten: {
      provider: new HDWalletProvider(
        mnemonic,
        `https://ropsten.infura.io/${infuraKey}`
      ),
      network_id: 3, // Ropsten's id
      gas: 5500000 // Ropsten has a lower block limit than mainnet
      // confirmations: 2, // # of confs to wait between deployments. (default: 0)
      //  timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true // Skip dry run before migrations? (default: false for public nets )
    }
  }
};
