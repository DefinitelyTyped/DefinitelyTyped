TRTC.Logger.setLogLevel(TRTC.Logger.LogLevel.INFO);

TRTC.getDevices().then(devices => {
    devices.forEach(device => {
        console.log(device.deviceId, device.kind);
    });
});

TRTC.checkSystemRequirements().then(checkResult => {
    if (!checkResult.result) {
        console.log('checkResult', checkResult.result, 'checkDetail', checkResult.detail);
    }
});

const client = TRTC.createClient({
    sdkAppId: 123,
    userId: '123',
    userSig: 'userSig',
    mode: 'live',
});

const stream = TRTC.createStream({
    audio: true,
    video: true,
});

stream.initialize().then(() => {
    client.publish(stream);
});

client.on('stream-subscribed', ({ stream }) => {
    stream.play('element-id');
});

client.off('*');
