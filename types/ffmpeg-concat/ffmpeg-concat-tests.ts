import concat from 'ffmpeg-concat';

concat({
    audio: '',
    cleanupFrames: true,
    concurrency: 4,
    frameFormat: 'raw',
    log: () => {},
    output: '',
    tempDir: '',
    transition: {
        duration: 100,
        name: '',
        params: { direction: [1, -1] },
    },
    transitions: [
        {
            duration: 100,
            name: '',
            params: { direction: [1, -1] },
        },
        {
            duration: 100,
            name: '',
            params: { direction: [1, -1] },
        },
    ],
    videos: ['', ''],
});
