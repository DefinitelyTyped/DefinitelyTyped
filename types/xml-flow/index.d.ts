// Type definitions for xml-flow 1.0
// Project: https://github.com/matthewmatician/xml-flow
// Definitions by: Nazar Rohozhuk <https://github.com/kodexxx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

/// <reference types="node" />

import { Readable } from 'stream';
import { EventEmitter } from 'events';

declare enum FlowConstants {
    NEVER = -1,
    SOMETIMES = 0,
    ALWAYS = 1
}

declare interface FlowOptions {
    /**
     * Unknown entities will fail in strict mode, and in loose mode, will pass through unmolested.
     *
     * @default false
     */
    strict?: boolean;

    /**
     * When not in strict mode, all tags are lowercased, or uppercased when set to false.
     *
     * @default true
     */
    lowercase?: boolean;

    /**
     * Whether or not to trim leading and trailing whitespace from text
     *
     * @default true
     */
    trim?: boolean;

    /**
     * Turns all whitespace into a single space
     *
     * @default true
     */
    normalize?: boolean;

    /**
     * When set to ALWAYS, All subtags and text are stored in the $markup property with their original order preserved.
     * When set to NEVER, all subtags are collected as separate properties.
     * When set to SOMETIMES, markup is preserved only when subtags have non-contiguous repetition.
     *
     * @default flow.SOMETIMES
     */
    preserveMarkup?: FlowConstants;

    /**
     * Whether to drop empty $attrs, pull properties out of the $attrs when there are no subtags,
     * or to only use a String instead of an object when $text is the only property.
     *
     * @default true
     */
    simplifyNodes?: boolean;

    /**
     * When set to ALWAYS, All subtags and text are enclosed in arrays, even if there's only one found.
     * When set to NEVER, only the first instance of a subtag or text node are kept.
     * When set to SOMETIMES, arrays are used only when multiple items are found.
     * NOTE: When set to NEVER, preserveMarkup is ignored.
     *
     * @default flow.SOMETIMES
     */
    useArrays?: FlowConstants;

    /**
     * Appends CDATA text to other nearby text instead of putting it into its own $cdata property.
     * NOTE: If you plan to run the toXml() function on data that has CDATA in it, you might.
     * Consider a more robust escape function than what is provided. See below for more information.
     * @default false
     */
    cdataAsText?: boolean;
}

declare interface FlowToXmlOptions {
    /**
     * How to indent tags for pretty-printing, use ' ' for two-spaces, or '\t' for tabs.
     * If no indent value is provided, output will not be pretty-printed.
     */
    indent?: string;

    /**
     * Whether to self close tags (like <br/> instead of <br></br>) whenever possible.
     *
     * @default true
     */
    selfClosing?: boolean;

    /**
     * Optionally provide an escape function for all text, to prevent malformed XML.
     * As a default, a very simplistic escape function has been provided.
     * You can provide a more robust escape function that suits your needs.
     */
    escape?: (s: string) => string;
}

declare namespace flow {
    const NEVER = FlowConstants.NEVER;
    const SOMETIMES = FlowConstants.SOMETIMES;
    const ALWAYS = FlowConstants.ALWAYS;

    function toXml(obj: any, opts?: FlowToXmlOptions): string;
}

declare function flow(stream: Readable, options?: FlowOptions): EventEmitter;

export default flow;
