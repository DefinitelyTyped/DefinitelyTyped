import {FFT} from "kissfft-js";
import {FFTR} from "kissfft-js";

const fft = new FFT(0); // $ExpectType FFT
fft.forward([1, 2, 3]); // $ExpectType number[]
fft.inverse([1, 2, 3]); // $ExpectType number[]
fft.dispose(); // $ExpectType void

const fftr = new FFTR(0); // $ExpectType FFTR
fftr.forward([1, 2, 3]); // $ExpectType number[]
fftr.inverse([1, 2, 3]); // $ExpectType number[]
fftr.dispose(); // $ExpectType void
