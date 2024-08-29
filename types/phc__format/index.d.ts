/// <reference types="node" />

export interface PhcFormatObject {
    id: string;
    version?: number;
    params?: Record<string, string | number>;
    salt?: Buffer;
    hash?: Buffer;
}

/**
 * Generates a PHC string using the data provided.
 * @param  {PhcFormatObject} opts Object that holds the data needed to generate the PHC
 * string.
 * @param  {string} opts.id Symbolic name for the function.
 * @param  {Number} [opts.version] The version of the function.
 * @param  {Object} [opts.params] Parameters of the function.
 * @param  {Buffer} [opts.salt] The salt as a binary buffer.
 * @param  {Buffer} [opts.hash] The hash as a binary buffer.
 * @return {string} The hash string adhering to the PHC format.
 */
export function serialize(opts: PhcFormatObject): string;

/**
 * Parses data from a PHC string.
 * @param  {string} phcstr A PHC string to parse.
 * @return {Object} The object containing the data parsed from the PHC string.
 */
export function deserialize(phcstr: string): PhcFormatObject;
