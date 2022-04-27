function dummyNumbers(a: number): void {}

const AC = new AudioContext();

const result = Meyda.extract('rms', []);
if (result) {
    if (result.zcr) {
        dummyNumbers(result.zcr);
    }
}

const analyzer = Meyda.createMeydaAnalyzer({
    audioContext: AC,
    source: AC.createOscillator(),
    bufferSize: 2048,
});

Meyda.windowing([], Meyda.windowingFunction);

analyzer.start();
analyzer.stop();
analyzer.get();

analyzer.start('rms');
analyzer.stop();
analyzer.get(['rms']);
