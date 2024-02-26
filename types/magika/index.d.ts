/*
interface Prediction {
    label: string;
    score: number;
    labels: { [name: string]: number };
}
interface Config {
    modelURL?: string;
    configURL?: string;
}
*/

export class Magika {
    constructor();
    load(config: any): Promise<void>;
    identifyBytes(fileBytes: ArrayBuffer): Promise<any>;
    identifyBytesFull(fileBytes: ArrayBuffer): Promise<any>;
}
