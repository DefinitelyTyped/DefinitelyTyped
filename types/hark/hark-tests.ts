import hark = require('hark');

navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(
    (stream) => {
        const option: hark.Option = {
            smoothing: 0.1,
            interval: 50,
            history: 10,
            threshold: -50
        };
        const h: hark.Harker = hark(stream, option);
        h.stop();
        h.resume();
        h.on('speaking', () => {
            console.log('speaking');
        });

        h.on('stopped_speaking', () => {
            console.log('stop speaking');
        });
    }
);
