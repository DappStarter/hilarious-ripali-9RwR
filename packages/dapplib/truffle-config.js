require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half enter blue tooth notice rival smile purity harvest loan force split'; 
let testAccounts = [
"0xa3dee526f074a57125fbbb0c0c23f4624d6a51d2947cd33eb4b9effd819588f8",
"0xb194fc0aa112a16883a7f63301f57fc4974e6fadaf4c4752e11399e5ccfdc4dd",
"0x096651c36de4731768da99ba5527e911ecae7329f8687b3114f8b04dffb047c2",
"0xdd8bd64f304eaec48835002b8c2e5c120073a6d70200a22660817460add49e6c",
"0xeaa5c36cb58ac7f1815016fffd419812754e4a89f055ad7dd0110f26f8621813",
"0xe4cc9e63bb4673881e941cf6d911d0bd8334dddefbe024cae3f48561691b7a24",
"0x4f23111e65e00f42958c660290dddc61f5fcbd287a5e835202cfdce2b8a3690e",
"0x7e885084de29ecbc8bb87665d9417ace0c8a0202fbd1df20974af81edeaef1e3",
"0x48a748acc26edcf6ca90d7e2eb2481a01e1519a04142e3c8147d8d011888cecc",
"0x2dfa7a1de88ea130e5524e356be7b2437bc3f02fdaf8f059da095669a7eba166"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

