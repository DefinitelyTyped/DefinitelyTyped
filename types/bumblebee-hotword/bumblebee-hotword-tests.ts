import Bumblebee , { VoiceProcessor , SpectrumAnalyser } from 'bumblebee-hotword';

class MockVoiceProcessor implements VoiceProcessor {
    start(
        engines: Bumblebee.VoiceEngine[],
        volume: number,
        downsamplerScript: string,
        errorCallback: (e: Error) => void,
        audioProcessCallback: (data: any) => void,
        audioContextCallback: (analyzer: AnalyserNode, gainNode: GainNode) => void): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
}

const bumblebee = new Bumblebee();

bumblebee.addHotword('test');
bumblebee.setHotword('test');

bumblebee.setWorkersPath('/path/to/worker');

bumblebee.setVoiceProcessor(new MockVoiceProcessor());

bumblebee.setMicVolume(0);
bumblebee.setMuted(true);

bumblebee.audioProcessCallback(null, null);

const context = new AudioContext();

bumblebee.audioAnalyserCallback(context.createAnalyser(), context.createGain());

bumblebee.errorCallback(new Error());

bumblebee.start();

bumblebee.stop();

const analyzer = new SpectrumAnalyser(context.createAnalyser(), new HTMLCanvasElement());

analyzer.setLineColor('#000000');
analyzer.setBackgroundColor('#000000');
analyzer.setColors('#000000', '#000000');
analyzer.draw();
analyzer.start();
analyzer.stop();
analyzer.setMuted(true);
