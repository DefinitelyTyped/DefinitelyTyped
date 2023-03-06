const instance = new PexRTC();

instance.onSetup = (stream, pinStatus) => {
    if (stream) {
        const video = document.createElement('video');
        if (typeof stream === 'string') {
            video.src = stream;
        } else if (stream instanceof MediaStream) {
            video.srcObject = stream;
        }
    }
};
instance.video_source = null;
instance.connect('123', '543');
instance.makeCall('example.com', 'confid', 'Hello', 1024, 'audioonly');
instance.onConnect = (a) => {
    return a;
};
