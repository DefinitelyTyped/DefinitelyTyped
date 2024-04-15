/// <reference types="node"/>

export interface File {
    url?: string | undefined;
    content?: string | undefined;
}

export interface OptionsMargin {
    top?: string | number | undefined;
    right?: string | number | undefined;
    bottom?: string | number | undefined;
    left?: string | number | undefined;
}

export interface Options {
    args?: string[] | undefined;
    path?: string | undefined;
    scale?: number | undefined;
    displayHeaderFooter?: boolean | undefined;
    headerTemplate?: string | undefined;
    footerTemplate?: string | undefined;
    printBackground?: boolean | undefined;
    landscape?: boolean | undefined;
    pageRanges?: string | undefined;
    format?: string | undefined;
    width?: string | number | undefined;
    height?: string | number | undefined;
    margin?: OptionsMargin | undefined;
    preferCSSPageSize?: boolean | undefined;
}

export function generatePdf(
    file: File,
    options?: Options,
    callback?: (err: Error, buffer: Buffer) => void,
): void;

export function generatePdfs(
    files: File[],
    options?: Options,
    callback?: (err: Error, buffer: Buffer) => void,
): void;
