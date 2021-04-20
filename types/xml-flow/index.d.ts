// Type definitions for xml-flow 1.0
// Project: https://github.com/matthewmatician/xml-flow
// Definitions by: Chris Lount <https://github.com/Warerebel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

/// <reference types="node" />

import { Readable } from "stream";
import { EventEmitter } from "events";

declare function flow(infile: Readable, options?: flow.parserOptions): EventEmitter;

declare namespace flow {
    const NEVER = -1;
    const SOMETIMES = 0;
    const ALWAYS = 1;

    interface parserOptions {
        preserveMarkup?: typeof NEVER | typeof SOMETIMES | typeof ALWAYS;
        simplifyNodes?: boolean;
        useArrays?: typeof NEVER | typeof SOMETIMES | typeof ALWAYS;
        lowercase?: boolean;
        trim?: boolean;
        normalize?: boolean;
        cdataAsText?: boolean;
        strict?: boolean;
    }
    interface toXmlOptions {
        indent?: string;
        selfClosing?: boolean;
        escape?: (s: string) => string;
    }
    function toXml(obj: object, options?: toXmlOptions): string;
}

export = flow;
