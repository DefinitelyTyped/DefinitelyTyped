import LGTV = require('lgtv2');

const lgtv: LGTV = LGTV({
    url: `ws://localhost:3000`,
    timeout: 6000,
    reconnect: 5000,
});

let pointerSocket: LGTV.SpecializedSocket;

lgtv.on('connect', () => {
    // Subscribe with callback
    lgtv.subscribe('ssap://audio/getVolume', (error, result) => {
        console.log(result.volume, error);
    });

    // Request without payload
    lgtv.request(`ssap://media.controls/play`);

    // Request with payload
    lgtv.request('ssap://system.notifications/createToast', { message: 'Hello World!' });

    // Request with callback
    lgtv.request('ssap://com.webos.applicationManager/getForegroundAppInfo', (error, result) => {
        console.log(result);
    });

    // Request with payload and callback
    lgtv.request('ssap://tv/openChannel', { channelId: '1' }, (error, result) => {
        console.log(result);
    });

    // getSocket with callback
    lgtv.getSocket('ssap://com.webos.service.networkinput/getPointerInputSocket', (error, socket) => {
        if (!error) {
            pointerSocket = socket;
            pointerSocket.send('button', { name: 'HOME' });
            pointerSocket.send('click');
        }
    });
});

lgtv.on('prompt', () => {
    console.log('prompt');
});

lgtv.on('connecting', (host) => {
    console.log(host);
});

lgtv.on('error', (error) => {
    console.log(error);
});

lgtv.on('close', (hasError) => {
    if (hasError) {
        console.log('closed with error');
    }
});
