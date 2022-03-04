import OvenPlayer from 'ovenplayer';

const player = OvenPlayer.create('player', {
    mute: true,
    playbackRates: [1, 2, 3, 3],
    waterMark: {
        image: '/path/to/watermark/image.png',
        position: 'top-left',
        y: '20px',
        x: '20px',
        width: '40px',
        height: '30px',
        opacity: 0.7
    },
    sources: [
        {
            type: 'hls',
            file: 'file'
        }
    ],
    webrtcConfig: {
        a: 1,
        b: 2
    }
});

player.on('ready', (data, data2) => {
});

player.getVersion();

player.getConfig();

player.load([
    {
        type: 'webrtc',
        file: 'file'
    },
    {
        type: 'webrtc',
        file: 'file'
    }
]);

player.load([
    [
        {
            type: 'webrtc',
            file: 'file'
        },
        {
            type: 'webrtc',
            file: 'file'
        }
    ],
    [
        {
            type: 'webrtc',
            file: 'file'
        },
        {
            type: 'webrtc',
            file: 'file'
        }
    ]
]);
