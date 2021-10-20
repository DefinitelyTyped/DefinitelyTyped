import runtime = require('@node-red/runtime');

async function runtimeTests() {
    await runtime.start();
    await runtime.stop();

    // $ExpectType boolean
    await runtime.isStarted();

    // $ExpectType string
    await runtime.version();

    //#region Hook payload types
    runtime.hooks.add('onSend', payload => {
        // $ExpectType SendEvent[]
        payload;
    });

    runtime.hooks.add('preRoute', payload => {
        // $ExpectType SendEvent
        payload;
    });

    runtime.hooks.add('preDeliver', payload => {
        // $ExpectType SendEvent
        payload;
    });

    runtime.hooks.add('postDeliver', payload => {
        // $ExpectType SendEvent
        payload;
    });

    runtime.hooks.add('onReceive', payload => {
        // $ExpectType ReceiveEvent
        payload;
    });

    runtime.hooks.add('postReceive', payload => {
        // $ExpectType ReceiveEvent
        payload;
    });

    runtime.hooks.add('onComplete', payload => {
        // $ExpectType CompleteEvent
        payload;
    });

    runtime.hooks.add('preInstall', payload => {
        // $ExpectType InstallEvent
        payload;
    });

    runtime.hooks.add('postInstall', payload => {
        // $ExpectType InstallEvent
        payload;
    });

    runtime.hooks.add('preUninstall', payload => {
        // $ExpectType UninstallEvent
        payload;
    });

    runtime.hooks.add('postUninstall', payload => {
        // $ExpectType UninstallEvent
        payload;
    });

    runtime.hooks.add('customEvent', payload => {
        // $ExpectType any
        payload;
    });

    runtime.hooks.add('customEvent', (payload: string) => {
        // $ExpectType string
        payload;
    });
    //#endregion

    //#region Hook handler finalization
    runtime.hooks.add('onSend', payload => {
        return;
    });

    runtime.hooks.add('onSend', (payload, done) => {
        done();
    });

    runtime.hooks.add('onSend', payload => {
        return new Promise(resolve => {
            resolve();
        });
    });

    runtime.hooks.add('onSend', payload => {
        return false;
    });

    runtime.hooks.add('onSend', (payload, done) => {
        done(false);
    });

    runtime.hooks.add('onSend', payload => {
        return new Promise(resolve => {
            resolve(false);
        });
    });

    runtime.hooks.add('onSend', async payload => {
        return false;
    });

    // any value in callback should be allowed
    runtime.hooks.add('onSend', (payload, done) => {
        done('Error');
        done(new Error('Error'));
    });

    //#endregion
}
