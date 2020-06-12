TRTC.Logger.setLogLevel(TRTC.Logger.LogLevel.INFO);

TRTC.getDevices().then(devices => {
    devices.forEach(device => {
        console.log(device.deviceId, device.kind);
    });
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
