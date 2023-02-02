TRTC.Logger.setLogLevel(TRTC.Logger.LogLevel.INFO);

TRTC.Logger.enableUploadLog();

TRTC.Logger.disableUploadLog();

const version = TRTC.VERSION;

TRTC.checkSystemRequirements().then(checkResult => {
    if (!checkResult.result) {
        console.log('checkResult', checkResult.result, 'checkDetail', checkResult.detail);
    }
});

TRTC.isScreenShareSupported();

TRTC.getDevices().then(devices => {
    devices.forEach(device => {
        console.log(device.deviceId, device.kind);
    });
});

TRTC.getCameras().then(devices => {
    devices.forEach(device => {
        console.log(device.deviceId, device.kind);
    });
});

TRTC.getMicrophones().then(devices => {
    devices.forEach(device => {
        console.log(device.deviceId, device.kind);
    });
});

TRTC.getSpeakers().then(devices => {
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

const clientNotAutoSubscribed = TRTC.createClient({
    sdkAppId: 123,
    userId: '123',
    userSig: 'userSig',
    mode: 'live',
    autoSubscribe: false,
});

const stream = TRTC.createStream({
    userId: '123',
    audio: true,
    video: true,
});

const localStream = TRTC.createStream({
    userId: '456',
    audio: true,
    video: true,
});

stream
    .initialize()
    .then(() => {
        console.log('initialize localStream success');
        client.publish(stream).then(() => {
            // 本地流发布成功
        });
    })
    .catch(error => {
        console.error('failed initialize localStream ' + error);
    });

client.setProxyServer('wss://proxy.example.com:443');

client.setTurnServer({
    url: '192.168.0.110:3478',
    username: 'bob',
    credential: 'bobspassword',
});

client
    .join({ roomId: 8888, role: 'anchor' })
    .then(() => {
        // join room success
    })
    .catch(error => {
        console.error('Join room failed: ' + error);
    });

client.unpublish(stream).then(() => {
    // 取消发布本地流成功
});

client
    .leave()
    .then(() => {
        // leaving room success
    })
    .catch(error => {
        console.error('leaving room failed: ' + error);
    });

client.switchRole('anchor').then(() => {
    client.publish(stream);
});

client.on('stream-added', ({ stream }) => {
    stream.getType();

    client.subscribe(stream, { audio: true, video: true }).catch(e => {
        console.error('failed to unsubscribe remoteStream');
    });
});

client.on('stream-removed', ({ stream }) => {
    console.log(stream);
});

client.on('stream-updated', ({ stream }) => {
    console.log(stream);
});

client.on('stream-subscribed', ({ stream }) => {
    console.log(stream);
});

client.on('connection-state-changed', ({ prevState, state }) => {
    console.log(prevState, state);
});

client.on('peer-join', ({ userId }) => {
    console.log(userId);
});

client.on('peer-leave', ({ userId }) => {
    console.log(userId);
});

client.on('mute-audio', ({ userId }) => {
    console.log(userId);
});

client.on('mute-video', ({ userId }) => {
    console.log(userId);
});

client.on('unmute-audio', ({ userId }) => {
    console.log(userId);
});

client.on('unmute-video', ({ userId }) => {
    console.log(userId);
});

client.on('client-banned', error => {
    console.error('client-banned observed: ' + error);
});

client.on('network-quality', ({ uplinkNetworkQuality, downlinkNetworkQuality }) => {
    console.log(
        `network-quality, uplinkNetworkQuality:${uplinkNetworkQuality}, downlinkNetworkQuality: ${downlinkNetworkQuality}`,
    );
});

client.on('error', error => {
    console.error('client error observed: ' + error);
});

client.off('*');

client.getRemoteMutedState();

client.getTransportStats().then(({ rtt }) => {
    console.log('RTT: ' + rtt);
});

client.getLocalAudioStats().then(stats => {
    for (const userId in stats) {
        console.log(stats[userId].bytesSent, stats[userId].packetsSent);
    }
});

client.getLocalVideoStats().then(stats => {
    for (const userId in stats) {
        console.log(
            stats[userId].bytesSent,
            stats[userId].packetsSent,
            stats[userId].framesEncoded,
            stats[userId].framesSent,
            stats[userId].frameWidth,
            stats[userId].frameHeight,
        );
    }
});

client.getRemoteAudioStats().then(stats => {
    for (const userId in stats) {
        console.log(stats[userId].bytesReceived, stats[userId].packetsReceived, stats[userId].packetsLost);
    }
});

client.getRemoteVideoStats().then(stats => {
    for (const userId in stats) {
        console.log(
            stats[userId].bytesReceived,
            stats[userId].packetsReceived,
            stats[userId].packetsLost,
            stats[userId].framesDecoded,
            stats[userId].frameWidth,
            stats[userId].frameHeight,
        );
    }
});

client
    .startMixTranscode({
        streamId: '',
        videoWidth: 1280,
        videoHeight: 500,
        videoBitrate: 1500,
        videoFramerate: 15,
        videoGOP: 2,
        audioSampleRate: 48000,
        audioBitrate: 64,
        audioChannels: 1,
        backgroundColor: 0x000000,
        backgroundImage: '',
        mixUsers: [
            {
                userId: 'user_1',
                pureAudio: false,
                width: 640,
                height: 480,
                locationX: 0,
                locationY: 0,
                zOrder: 1,
            },
            {
                userId: 'user_2',
                pureAudio: true,
            },
        ],
    })
    .then(() => {
        console.log('开始混流转码');
    })
    .catch(error => {
        console.error('startMixTranscode fail', error);
    });

client
    .stopMixTranscode()
    .then(() => {
        console.log('停止混流转码');
    })
    .catch(error => {
        console.error('stopMixTranscode fail', error);
    });

stream
    .play('remote', { objectFit: 'contain', muted: false })
    .then(() => {
        // autoplay success
    })
    .catch(error => {
        const errorCode = error.getCode();
        if (errorCode === 0x4043) {
            // PLAY_NOT_ALLOWED,引导用户手势操作恢复音视频播放
            // stream.resume()
        }
    });

stream.stop();

stream.resume();

stream.close();

stream.muteAudio();

stream.muteVideo();

stream.unmuteAudio();

stream.unmuteVideo();

stream.getId();

stream.getUserId();

stream.setAudioOutput('123');

stream.setAudioVolume(1);

stream.getAudioLevel();

stream.hasAudio();

stream.hasVideo();

stream.getAudioTrack();

stream.getVideoTrack();

stream.getVideoFrame();

stream.on('player-state-changed', ({ type, state, reason }) => {
    console.log(`${type} player is ${state} because of ${reason}`);
});

stream.on('screen-sharing-stopped', () => {
    console.log('screen sharing was stopped');
});

localStream.setAudioProfile('standard');

localStream.setVideoProfile('120p');

localStream.setScreenProfile('1080p');

localStream.setVideoContentHint('detail');

localStream.switchDevice('video', '123').then(() => {
    // camera切换成功
});

const videoTrack = localStream.getVideoTrack();

if (videoTrack) {
    localStream.addTrack(videoTrack).then(() => {
        // 视频通话开启成功，远端流将会收到‘stream-updated’通知
    });

    localStream.removeTrack(videoTrack).then(() => {
        // 关闭视频通话成功，停止videoTrack并释放摄像头资源
    });

    localStream.replaceTrack(videoTrack).then(() => {
        // 更换音频或视频轨道
    });
}
