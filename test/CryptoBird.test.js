const { assert } = require('chai');
const  CryptoBird = artifacts.require('./Cryptobird');
require('chai')
.use(require('chai-as-promised'))
.should()

contract('CryptoBird', (accounts) => {
    let contract;
    describe('deployment', async () => {
        it('deploys succesfully', async () => {
            contract = await CryptoBird.deployed();
            const address = contract.address;
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
            assert.notEqual(address, 0x0);
        });
        it('has a name', async () => {
            const name = await contract.name();
            assert.equal(name, 'CryptoBird');
        });
            it('has a symbol', async () => {
            const symbol = await contract.symbol();
            assert.equal(symbol, 'CBIRDZ');
        });
    });
});