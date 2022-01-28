import EthereumEvents from 'ethereum-events';

const web3 = {};
const contract = { name: 'Something', address: '0x0000000000000000000000000000000000000000', abi: {} };
const pollOptions = {};

const listener = new EthereumEvents(web3, contract, pollOptions);
listener.on('block', async (blockNumber, events, done) => {
    blockNumber;
    events;
    done();
});
