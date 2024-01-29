import { WASI } from "node:wasi";
// import * as fs from 'node:fs';

{
    const wasi = new WASI({
        version: "preview1",
        args: process.argv,
        env: process.env,
        preopens: {
            "/sandbox": "/some/real/path/that/wasm/can/access",
        },
    });
    const importObject = wasi.getImportObject();
    (async () => {
        // TODO: Global WebAssembly types are not currently declared.; uncomment below when added.

        // const wasm = await WebAssembly.compile(fs.readFileSync('./demo.wasm'));
        // const instance = await WebAssembly.instantiate(wasm, importObject);
        const instance = {};

        const exitCode: number = wasi.start(instance);
    })();
}
