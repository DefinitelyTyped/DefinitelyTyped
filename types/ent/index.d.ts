/**
 * Options for the encode() function
 */
export interface EntOpts {
    /**
     * If opts.numeric is false or opts.named is true, encoding will used named codes like &pi;.
     */
    numeric?: boolean | undefined;

    /**
     * If opts.numeric is false or opts.named is true, encoding will used named codes like &pi;.
     */
    named?: boolean | undefined;

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
