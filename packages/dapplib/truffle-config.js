require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile pulse grace forget tail sleep'; 
let testAccounts = [
"0xe306e253aaf3f8621ca26d66d13046f8c8ec651e92bccaca708958935e2b8310",
"0x8c5c11e2ea5a1ede3031ca5c1bef375e82b96927c04487ed95455df9a0950cc6",
"0x78477b29e817b9d1851ab053331e18548d8a8ade9726db132eb3629a80ac67ec",
"0xfd44c6fc5d06a6ab7771d52111228c458ae9c5eeb174d11f98125063e59f4fc3",
"0xc115944cb456cdae9d9a18d4ed662dba8278639445b8b599a97dcf5ce925803a",
"0x4c0c5542fe74efc47c0aa44c889c73baffa1604e2c77d44c7993b96e2ffb0ae2",
"0x2c8e9108da518ae5c595ed21a30abf07d20935eb92b117296d16d687ba5bf645",
"0x003f95958b6024b6cd2c8bd4286a4bc0a8b819262ed7a2657a1f6e88bd2f009e",
"0x38b5af347e927ec90a5501c5ceb5ab262ef9c9e2d5cd3d65c4fa5d122fc83ab3",
"0xa291693a24a38f52da6ba4c32a20709dc488af671d278a80b0f184324466fb7f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


