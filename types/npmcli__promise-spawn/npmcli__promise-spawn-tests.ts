import promiseSpawn = require("@npmcli/promise-spawn");

(async () => {
    const {
        stdio,
        process,
    } = promiseSpawn("node", ["index.js"]);
    const {
        cmd,
        args,
        code,
        signal,
        stdout,
        foo,
    } = await promiseSpawn("node", ["index.js"], {}, { foo: "bar" });

    await promiseSpawn.open("https://google.com");
    await promiseSpawn.open(["https://google.com"]);

    const {
        stdout: o1,
        stderr: e1,
    }: { stdout: string; stderr: string } = await promiseSpawn("node", ["index.js"]);
    const {
        stdout: o2,
        stderr: e2,
    }: { stdout: Buffer; stderr: Buffer } = await promiseSpawn("node", ["index.js"], { stdioString: false });
})();
