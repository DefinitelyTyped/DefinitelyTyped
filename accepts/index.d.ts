// Type definitions for accepts 1.3
// Project: https://github.com/jshttp/accepts
// Definitions by: Stefan Reichel <https://github.com/bomret>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { IncomingMessage } from "http";

declare namespace accepts {
    export interface Accepts {
        charset(charsets: string[]): string | string[] | boolean;
        charset(...charsets: string[]): string | string[] | boolean;
        charsets(): string[];

        encoding(encodings: string[]): string | string[] | boolean;
        encoding(...encodings: string[]): string | string[] | boolean;
        encodings(): string[];

        language(languages: string[]): string | string[] | boolean;
        language(...languages: string[]): string | string[] | boolean;
        languages(): string[];

        type(types: string[]): string | string[] | boolean;
        type(...types: string[]): string | string[] | boolean;
        types(): string[];
    }
}

declare function accepts(req: IncomingMessage): accepts.Accepts;

export = accepts;
