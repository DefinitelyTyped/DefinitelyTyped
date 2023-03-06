import Ooura = require("ooura");

// real fft
const inputR = new Float64Array([1, 2, 3, 4, 1, 2, 3, 4]);

const oouraReal = new Ooura(inputR.length, {type: "real", radix: 4}); // $ExpectType Ooura

const outputR = oouraReal.scalarArrayFactory(); // $ExpectType Float64Array
const backReR = oouraReal.vectorArrayFactory(); // $ExpectType Float64Array
const backImR = oouraReal.vectorArrayFactory(); // $ExpectType Float64Array

oouraReal.fft(inputR.buffer, backReR.buffer, backImR.buffer); // $ExpectType void
oouraReal.ifft(outputR.buffer, backReR.buffer, backImR.buffer); // $ExpectType void

// complex fft
const inputReC = new Float64Array([1, 2, 3, 4]);
const inputImC = new Float64Array([2, 3, 4, 5]);
const oouraComplex = new Ooura(inputReC.length * 2, {type: "complex", radix: 4}); // $ExpectType Ooura

const outputReC = oouraComplex.vectorArrayFactory(); // $ExpectType Float64Array
const outputImC = oouraComplex.vectorArrayFactory(); // $ExpectType Float64Array
const backReC = oouraComplex.vectorArrayFactory(); // $ExpectType Float64Array
const backImC = oouraComplex.vectorArrayFactory(); // $ExpectType Float64Array

oouraComplex.fft(inputReC.buffer, inputImC.buffer, outputReC.buffer, outputImC.buffer); // $ExpectType void
oouraComplex.ifft(outputReC.buffer, outputImC.buffer, backReC.buffer, backImC.buffer); // $ExpectType void

// in-place fft
const nfft = 32;
const oo = new Ooura(nfft, {type: "complex", radix: 4}); // $ExpectType Ooura
const data = Float64Array.from(Array(nfft), (e, i) => i + 1);
oo.fftInPlace(data.buffer); // $ExpectType void
oo.ifftInPlace(data.buffer); // $ExpectType void

// init with default arg ({type:"real", radix:4})
const oouraDefault = new Ooura(inputR.length); // $ExpectType Ooura

// init with invalid arg
// @ts-expect-error
const oouraInvalid1 = new Ooura();
// @ts-expect-error
const oouraInvalid2 = new Ooura(8, {radix: 4});
// @ts-expect-error
const oouraInvalid3 = new Ooura(8, {type: "real"});
// @ts-expect-error
const oouraInvalid4 = new Ooura(8, {type: "real", radix: "4"});
// @ts-expect-error
const oouraInvalid5 = new Ooura(8, {type: "invalid", radix: 4});

// invalid FFT call
// @ts-expect-error
oouraReal.fft();
// @ts-expect-error
oouraReal.fft(inputR.buffer);
// @ts-expect-error
oouraReal.fft(inputR.buffer, inputR.buffer);
// @ts-expect-error
oouraReal.fft(inputR.buffer, backReR.buffer, backImR.buffer, backImR.buffer, backImR.buffer);

// invalid inplace-fft call
// @ts-expect-error
oo.fftInPlace();
// @ts-expect-error
oo.fftInPlace(data.buffer, data.buffer);
// @ts-expect-error
oo.ifftInPlace();
// @ts-expect-error
oo.ifftInPlace(data.buffer, data.buffer);
