// Type definitions for ent 2.2.0
// Project: https://github.com/substack/node-ent
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * Options for the encode() function
 */
export interface EntOpts {
    /**
     * If opts.numeric is false or opts.named is true, encoding will used named codes like &pi;.
     */
    numeric?: boolean;

    /**
     * If opts.numeric is false or opts.named is true, encoding will used named codes like &pi;.
     */
    named?: boolean;
    
    /**
     * If opts.special is set to an Object, the key names will be forced to be encoded (defaults to forcing: <>'"&)
     */
    special?: any;
}

/**
 * Escape unsafe characters in str with html entities. By default, entities are encoded with numeric decimal codes
 */
export function encode(s: string, opts?: EntOpts): string;

/**
 * Convert html entities in str back to raw text.
 */
export function decode(s: string): string;
