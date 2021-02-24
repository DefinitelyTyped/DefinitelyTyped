import Arena from 'are.na';
const arena = new Arena();

const makeRequests = async () => {
    // Channel request
    const channel = await arena.channel('arena-influences').get();
    // Block request
    const block = await arena.block(3088).get();
    // User request
    const user = await arena.user(16).get();
    // Search request
    const search = await arena.search('fruit').all();

    return { channel, block, user, search };
};

Promise.resolve(makeRequests()).then(_ => {});
