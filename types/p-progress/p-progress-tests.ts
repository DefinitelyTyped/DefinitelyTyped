import PProgress = require("p-progress");

new PProgress(async (resolve, reject, progress) => {
    try {
        await Promise.resolve("sindresorhus.com");
        progress(0.5);

        await Promise.resolve("ava.li");
        progress(1);

        resolve();
    } catch (e) {
        reject(e);
    }
}).onProgress(progress => {
    progress;
});

PProgress.all(
    [
        () => Promise.resolve("sindresorhus.com"),
        () => Promise.resolve("ava.li"),
        () => Promise.resolve(),
        () => Promise.resolve(1)
    ],
    { concurrency: 2 }
).then(result => {
    const str: string = result[0];
    const str2: string = result[1];
    const num: number = result[3];
});
