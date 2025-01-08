/// <reference types="node" />

export interface PhcShared {
    /** Symbolic name for the function. */
    id: string;
    /** The version of the function. */
    version?: number;
    /** The salt as a binary buffer. */
    salt?: Buffer;
    /** The hash as a binary buffer. */
    hash?: Buffer;
}

export interface PhcInput extends PhcShared {
    /** Parameters of the function. */
    params?: Record<string, string | number | Buffer>;
}

export interface PhcOutput extends PhcShared {
    /** Parameters of the function. */
    params?: Record<string, string | number>;
}

/**
 * Generates a PHC string using the data provided.
 * @return The hash string adhering to the PHC format.
 */
export function serialize(opts: PhcInput): string;

/**
 * Parses data from a PHC string.
 * @return The object containing the data parsed from the PHC string.
 */
export function deserialize(phcstr: string): PhcOutput;
