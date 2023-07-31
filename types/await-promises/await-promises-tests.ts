import AwaitPromises, { wait } from 'await-promises';

async function classicUsage() {
    const waiter = new AwaitPromises();
    waiter.collect();
    waiter.stop();
    await waiter.wait();
}

async function waitHelperUsage() {
    // basic usage of wait helper
    await wait(() => {
        new Promise((resolve, reject) => {});
    });

    // async usage of wait helper
    await wait(async () => {
        await new Promise((resolve, reject) => {});

        new Promise((resolve, reject) => {});
    });
}
