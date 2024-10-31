import Arena from "are.na";
const arena = new Arena();

const makeRequests = async () => {
    // Channel request
    const channel = await arena.channel("arena-influences").get();
    // Channel request with no identifier argument
    const channel2 = await arena.channel().get();
    // Block request
    const block = await arena.block(3088).get();
    // User request
    const user = await arena.user(16).get();
    // Search request
    const search = await arena.search("fruit").all();
    // Group request
    const group = await arena.group("are-na-team").get();
    // Group request with no identifier argument
    const group2 = await arena.group().get();

    return { channel, block, user, search, group };
};

Promise.resolve(makeRequests()).then(_ => {});
