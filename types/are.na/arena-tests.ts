import Arena from 'are.na';
const arena = new Arena();

const makeRequests = async () => {
    const channel = await arena.channel('arena-influences').get();
    const block = await arena.block(3088).get();
    const user = arena.user(16).get();
    const search = arena.search('fruit').all();

    return { channel, block, user, search };
};

Promise.resolve(makeRequests()).then(_ => {});
