import * as Spectrogram from "spectrogram";

// XHR
const canvas1 = document.createElement('canvas');
const spectro1 = Spectrogram(canvas1, {
    audio: {
        enable: false,
    },
});
const audioContext1 = new AudioContext();
const request = new XMLHttpRequest();
request.open('GET', 'audio.mp3', true);
request.responseType = 'arraybuffer';

request.onload = () => {
    audioContext1.decodeAudioData(request.response, (buffer) => {
        spectro1.connectSource(buffer, audioContext1);
        spectro1.start();
    });
};

request.send();

// User media stream
const canvas2 = document.createElement('canvas');
const spectro2 = new Spectrogram(canvas2, {
    canvas: {
        width: 1280,
        height: 720,
    },
    colors: (steps) => {
        const frequency = Math.PI / steps;
        const amplitude = 127;
        const center = 128;
        const slice = (Math.PI / 2) * 3.1;
        const colors = [];

        function toRGBString(v: number) {
            return `rgba(${[v, v, v, 1].toString()})`;
        }

        for (let i = 0; i < steps; i++) {
            const v = (Math.sin((frequency * i) + slice) * amplitude + center) >> 0;

            colors.push(toRGBString(v));
        }

        return colors;
    }
});

const audioContext2 = new AudioContext();
navigator.getUserMedia(
    {
        video: false,
        audio: true
    },
    (stream) => {
        const input = audioContext2.createMediaStreamSource(stream);
        const analyser = audioContext2.createAnalyser();

        analyser.smoothingTimeConstant = 0;
        analyser.fftSize = 2048;

        input.connect(analyser);

        spectro2.connectSource(analyser, audioContext2);
        spectro2.start();
    },
    (error) => {
        spectro2.stop();
    },
);
