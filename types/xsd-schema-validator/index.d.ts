// Type definitions for xsd-schema-validator 0.5
// Project: https://github.com/nikku/node-xsd-schema-validator#readme
// Definitions by: Zlatko Andonovski <https://github.com/Goldsmith42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function validateXML(xml: string|NodeJS.ReadableStream|{file: string}, pathToXsd: string, callback: (err: Error, result: {
    valid: boolean;
    messages: string[];
    result: string;
}) => void): void;
