/// <reference types="node"/>

import stream = require("stream");

export declare function inspector(options?: EyesOptions): InspectorFunction;
export declare function inspect(thing: any, label?: string): void;

export interface InspectorFunction {
    (thing: any, label?: string): string;
}

export interface EyesOptions {
    /** Styles applied to stdout */
    styles?: {
        /** Overall base style applied to everything */
        all?: string | undefined;
        /** Style when printing inspection labels, like 'array' in `array: [1, 2, 3]` */
        label?: string | undefined;
        /** Style when printing objects which don't have a literal representation, such as functions */
        other?: string | undefined;
        /** Style when printing the keys in object literals, like 'a' in `{a: 1}` */
        key?: string | undefined;
        /** Style when printing `null`, `undefined`, etc. */
        special?: string | undefined;
        /** Style when printing strings */
        string?: string | undefined;
        /** Style when printing numbers */
        number?: string | undefined;
        /** Style when printing booleans */
        bool?: string | undefined;
        /** Style when printing RegExps */
        regexp?: string | undefined;
    } | undefined;

    /** Indent object literals */
    pretty?: boolean | undefined;
    /** Don't output functions at all */
    hideFunctions?: boolean | undefined;
    /** Stream to write to, or null */
    stream?: NodeJS.WritableStream | undefined;
    /** Truncate output if longer */
    maxLength?: number | undefined;
}
