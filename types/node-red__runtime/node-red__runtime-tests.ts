import runtime = require('@node-red/runtime');

async function runtimeTests() {
    await runtime.start();
    await runtime.stop();

    // $ExpectType boolean
    await runtime.isStarted();

    // $ExpectType string
    await runtime.version();
}
