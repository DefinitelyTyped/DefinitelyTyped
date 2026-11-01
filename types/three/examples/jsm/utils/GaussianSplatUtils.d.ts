import { BufferGeometry } from "three";

export const SH_C0: number;

export const SH_BAND_COMPONENTS: number[];

export const SH_BAND_WORDS: number[];

export function sigmoid(value: number): number;

export function sh0ToLinear(coefficient: number): number;

export function linearToSH0(color: number): number;

export function writeColorBytes(
    target: Uint8ClampedArray,
    offset: number,
    r: number,
    g: number,
    b: number,
    a: number,
): void;

export function writeColorBytesFromSH0(
    target: Uint8ClampedArray,
    offset: number,
    r: number,
    g: number,
    b: number,
    a: number,
): void;

export function writeCovariance(
    target: Float32Array,
    offset: number,
    sx: number,
    sy: number,
    sz: number,
    qx: number,
    qy: number,
    qz: number,
    qw: number,
): void;

export interface PackedSphericalHarmonicsBand {
    packed: Uint32Array;
    bytes: Uint8ClampedArray;
}

export function createPackedSphericalHarmonicsBand(count: number, degree: number): PackedSphericalHarmonicsBand;

export function getSphericalHarmonicsDegree(geometry?: BufferGeometry): number;

export interface GaussianSplatSphericalHarmonics {
    sh1?: Uint32Array | undefined;
    sh2?: Uint32Array | undefined;
    sh3?: Uint32Array | undefined;
    sphericalHarmonics1?: Uint32Array | undefined;
    sphericalHarmonics2?: Uint32Array | undefined;
    sphericalHarmonics3?: Uint32Array | undefined;
}

export function createGaussianSplatGeometry(
    centers: Float32Array,
    covariances: Float32Array,
    colors: Uint8Array | Uint8ClampedArray,
    sphericalHarmonics?: GaussianSplatSphericalHarmonics,
): BufferGeometry;
