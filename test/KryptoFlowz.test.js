const { assert } = require('chai');
const  KryptoFlow = artifacts.require('./KryptoFlow');
require('chai')
.use(require('chai-as-promised'))
.should()

contract('KryptoFlow', (accounts) => {
    let contract;
    before(async () => {
        contract = await KryptoFlow.deployed();
    });
    describe('deployment', async () => {
        it('deploys succesfully', async () => {
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

    describe('minting', async () => {
        it('creates new token', async () => {
            const result = await contract.mint('htpps...1');
            const totalSupply = await contract.totalSupply();
            assert.equal(totalSupply, 1, 'it is total supply');
            const event = result.logs[0].args;
            assert.equal(event._from, 0, 'sending token from');
            assert.equal(event._to, accounts[0], 'to is msg.sender');
            await contract.mint('htpps...1').should.be.rejected;
        });
    });

    
    describe('indexing', async ()=> {
        it('lists KryptoFlowz', async() => {
            // Mint three new tokens
            await contract.mint('https...2');
            await contract.mint('https...3');
            await contract.mint('https...4');
            const totalSupply = await contract.totalSupply();
            // Loop through list and grab KBirdz from list
            let result = [];
            let cryptoFlow;
            for(i = 1; i <= totalSupply; i++) {
                cryptoFlow = await contract.KryptoFlowz(i - 1);
                result.push(cryptoFlow);
            }
        });
    });
});