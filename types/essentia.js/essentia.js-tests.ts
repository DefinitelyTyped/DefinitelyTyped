import Essentia from './index';

interface EssentiaWASM {
    cwrap: (name: string, returnType: string, argTypes: string[]) => Function;
    _malloc: (size: number) => number;
    _free: (ptr: number) => void;
    HEAPF32: Float32Array;
    HEAPU8: Uint8Array; 
}

const essentia = new Essentia(EssentiaWASM);

declare const EssentiaWASM: EssentiaWASM;
 
const dummySignal = new Float32Array(1024);
const dummySpectrum = new Float32Array(513);
 
function testAlgorithms() { 
    const windowingResult = essentia.Windowing(dummySignal);
    console.assert(windowingResult.frame instanceof Float32Array, 'Windowing should return Float32Array');
 
    const spectrumResult = essentia.Spectrum(dummySignal);
    console.assert(spectrumResult.spectrum instanceof Float32Array, 'Spectrum should return Float32Array');
 
    const mfccResult = essentia.MFCC(dummySpectrum);
    console.assert(mfccResult.mfcc instanceof Float32Array, 'MFCC should return Float32Array');
    console.assert(mfccResult.bands instanceof Float32Array, 'MFCC should return bands as Float32Array');
 
    const loudnessResult = essentia.Loudness(dummySignal);
    console.assert(typeof loudnessResult.loudness === 'number', 'Loudness should return a number');
}
 
function runTests() {
    console.log('Starting Essentia.js tests...');
    testAlgorithms();
    console.log('All tests completed.');
}
 
runTests();