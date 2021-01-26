// Type definitions for xml-flow 1.0
// Project: https://github.com/matthewmatician/xml-flow
// Definitions by: Chris Lount <https://github.com/Warerebel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

/// <reference types="node" />

import { Readable } from "stream";
import { EventEmitter } from "events";

export as namespace flow;

export function flow(infile: Readable, options?: flow.parserOptions): EventEmitter;

export namespace flow {
    enum frequency {
        NEVER = -1,
        SOMETIMES = 0,
        ALWAYS = 1
    }
    interface parserOptions {
        preserveMarkup?: frequency;
        simplifyNodes?: boolean;
        useArrays?: frequency;
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
