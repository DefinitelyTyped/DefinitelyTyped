export interface Prediction {
    label: string;
    score: number;
    labels: { [name: string]: number };
}
export interface Option {
    modelURL?: string;
    configURL?: string;
}

export class Magika {
    constructor();
    load(config: Option): Promise<void>;
    identifyBytes(fileBytes: ArrayBuffer): Promise<Prediction>;
    identifyBytesFull(fileBytes: ArrayBuffer): Promise<Prediction>;
}
