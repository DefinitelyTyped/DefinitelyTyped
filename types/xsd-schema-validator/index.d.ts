/// <reference types="node" />

export function validateXML(
    xml: string | NodeJS.ReadableStream | { file: string },
    pathToXsd: string,
    callback: (err: Error, result: {
        valid: boolean;
        messages: string[];
        result: string;
    }) => void,
): void;
