const { assert } = require('chai');
const  KryptoFlow = artifacts.require('./KryptoFlow');
require('chai')
.use(require('chai-as-promised'))
.should()

contract('KryptoFlow', (accounts) => {
    let contract;
    describe('deployment', async () => {
        it('deploys succesfully', async () => {
            contract = await KryptoFlow.deployed();
            const address = contract.address;
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
            assert.notEqual(address, 0x0);
        });
            it('has a name', async () => {
            const name = await contract.name();
            assert.equal(name, 'KryptoFlow');
        });
            it('has a symbol', async () => {
            const symbol = await contract.symbol();
            assert.equal(symbol, 'KPFLWS');
        });
    });
});