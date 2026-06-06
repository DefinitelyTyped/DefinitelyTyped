export = Ooura;

interface Info {
    type: "real" | "complex";
    radix: number;
}

interface realFFT {
    (dataBuffer: ArrayBuffer, reBuffer: ArrayBuffer, imBuffer: ArrayBuffer): void;
}

interface complexFFT {
    (reIpBuffer: ArrayBuffer, imIpBuffer: ArrayBuffer, reOpBuffer: ArrayBuffer, imOpBuffer: ArrayBuffer): void;
}

declare class Ooura {
    constructor(size: number, info?: Info);

    size: number;

    scalarArrayFactory(): Float64Array;
    vectorArrayFactory(): Float64Array;

    fft: complexFFT & realFFT;
    ifft: complexFFT & realFFT;
    fftInPlace: (dataBuffer: ArrayBuffer) => void;
    ifftInPlace: (dataBuffer: ArrayBuffer) => void;
}
