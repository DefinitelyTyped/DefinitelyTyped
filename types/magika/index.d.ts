export interface Prediction {
    label: string;
    score: number;
    labels: { [name: string]: number };
}
export interface Config {
    modelURL?: string;
    configURL?: string;
}

export class Magika {
    constructor();
    load(config: any): Promise<Config>;
    identifyBytes(fileBytes: ArrayBuffer): Promise<Prediction>;
    identifyBytesFull(fileBytes: ArrayBuffer): Promise<Prediction>;
}
