export interface LUTCurvePoint {
    x: number;
    y: number;
}

export interface LUTColorBalance {
    r: number;
    g: number;
    b: number;
    y?: number | undefined;
}

export interface LUTCubeData {
    title: string;
    size: number;
    data: [number, number, number][];
    dataLines: [number, number, number][];
}

export interface LUTImportedCube extends Partial<LUTCubeData> {
    size: number;
    weight?: number | undefined;
}

export interface LUTParams {
    exposure: number;
    brightness: number;
    contrast: number;
    contrastPivot: number;
    gamma: number;
    saturation: number;
    vibrance: number;
    temperature: number;
    tint: number;
    hueShift: number;
    lift: LUTColorBalance;
    gammaBal: LUTColorBalance;
    gain: LUTColorBalance;
    offset: LUTColorBalance;
    channelMixer: {
        red: { r: number; g: number; b: number };
        green: { r: number; g: number; b: number };
        blue: { r: number; g: number; b: number };
    };
    curves: {
        rgb: LUTCurvePoint[];
        red: LUTCurvePoint[];
        green: LUTCurvePoint[];
        blue: LUTCurvePoint[];
    };
    importedCubes?: { [step: string]: LUTImportedCube } | undefined;
}

export function evaluateSpline(t: number, points: LUTCurvePoint[] | null | undefined): number;

export function rgbToHsv(r: number, g: number, b: number): [number, number, number];

export function hsvToRgb(h: number, s: number, v: number): [number, number, number];

export function sample3DLUT(
    r: number,
    g: number,
    b: number,
    size: number,
    dataLines: [number, number, number][],
): [number, number, number];

export function applyColorTransform(
    r: number,
    g: number,
    b: number,
    params: LUTParams,
    pipelineOrder?: string[] | null,
): [number, number, number];

export function generate3DLUTData(
    params: LUTParams,
    size?: number,
    buffer?: Float32Array | null,
    pipelineOrder?: string[] | null,
): Float32Array;

export function exportCubeFormat(
    paramsOrBuffer: LUTParams | Float32Array,
    size?: number,
    title?: string,
    pipelineOrder?: string[] | null,
): string;

export function parseCubeFormat(text: string): LUTCubeData;

export function exportLUTCanvas(
    paramsOrBuffer: LUTParams | Float32Array,
    size?: number,
    pipelineOrder?: string[] | null,
): HTMLCanvasElement;

export function createDefaultParams(): LUTParams;

export const LUT_PRESETS: { [name: string]: LUTParams };
