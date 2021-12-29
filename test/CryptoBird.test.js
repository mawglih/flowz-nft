const { assert } = require('chai');
const  CryptoBird = artifacts.require('./Cryptobird');
require('chai')
.use(require('chai-as-promised'))
.should()

contract('CryptoBird', (accounts) => {
    let contract;
    // before
    before( async() => {
        contract = await CryptoBird.deployed();
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
            assert.equal(name, 'CryptoBird');
        });
            it('has a symbol', async () => {
            const symbol = await contract.symbol();
            assert.equal(symbol, 'CBIRDZ');
        });
    });

    describe('minting', async () => {
        it('creates new token', async () => {
            const result = await contract.mint('https...1');
            const totalSupply = await contract.totalSupply();
            assert.equal(totalSupply, 1, 'it is total supply');
            const event = result.logs[0].args;
            assert.equal(event._from, 0, 'sending token from');
            assert.equal(event._to, accounts[0], 'to is msg.sender');
            await contract.mint('https...1').should.be.rejected;
        });
    });

    describe('indexing', async ()=> {
        it('lists CryptoBirdz', async() => {
            // Mint three new tokens
            await contract.mint('https...2');
            await contract.mint('https...3');
            await contract.mint('https...4');
            const totalSupply = await contract.totalSupply();
            // Loop through list and grab KBirdz from list
            let result = [];
            let cryptoBird;
            for(i = 1; i <= totalSupply; i++) {
                cryptoBird = await contract.CryptoBirdz(i - 1);
                result.push(cryptoBird);
            }
        });
    });
});