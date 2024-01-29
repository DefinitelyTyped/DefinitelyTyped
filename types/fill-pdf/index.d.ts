/// <reference types="node" />

declare module "fill-pdf" {
    export interface FormData {
        [name: string]: string;
    }

    export function generatePdf(
        data: FormData,
        templatePath: string,
        extendArgs: string[],
        callback?: (err: Error, output: Buffer) => void,
    ): void;
    export function generateFdf(data: FormData): Buffer;
}
