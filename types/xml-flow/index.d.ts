// Type definitions for xml-flow 1.0
// Project: https://github.com/matthewmatician/xml-flow
// Definitions by: Chris Lount <https://github.com/Warerebel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

/// <reference types="node" />

import { EventEmitter } from "events";
import { Readable } from "stream";

declare function flow(infile: Readable, options?: flow.parserOptions): EventEmitter;

declare namespace flow {
    const NEVER = -1;
    const SOMETIMES = 0;
    const ALWAYS = 1;

    interface parserOptions {
        preserveMarkup?: typeof NEVER | typeof SOMETIMES | typeof ALWAYS | undefined;
        simplifyNodes?: boolean | undefined;
        useArrays?: typeof NEVER | typeof SOMETIMES | typeof ALWAYS | undefined;
        lowercase?: boolean | undefined;
        trim?: boolean | undefined;
        normalize?: boolean | undefined;
        cdataAsText?: boolean | undefined;
        strict?: boolean | undefined;
    }
    interface toXmlOptions {
        indent?: string | undefined;
        selfClosing?: boolean | undefined;
        escape?: ((s: string) => string) | undefined;
    }
    function toXml(obj: object, options?: toXmlOptions): string;
}

export = flow;
