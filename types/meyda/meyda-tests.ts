// import Meyda from 'meyda';

function dummyNumbers(a: number): void {}

const AC = new AudioContext();

const result = Meyda.extract('rms', []);
if (result) {
    if (result.zcr) {
        dummyNumbers(result.zcr);
    }
}

Meyda.createMeydaAnalyzer({
    audioContext: AC,
    source: AC.createOscillator(),
    bufferSize: 2048,
});

Meyda.windowing([], Meyda.windowingFunction);
