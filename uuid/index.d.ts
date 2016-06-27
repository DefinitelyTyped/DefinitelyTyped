// Type definitions for UUID.js v3.3.0
// Project: https://github.com/LiosK/UUID.js
// Definitions by: Jason Jarrett <https://github.com/staxmanade/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



interface UUID {
    intFields: UUIDArray<number>;
    bitFields: UUIDArray<string>;
    hexFields: UUIDArray<string>;
    version: number;
    bitString: string;
    hexString: string;
    urn: string;


    /**
     * Tests if two {@link UUID} objects are equal.
     * @param {UUID} uuid
     * @returns {bool} True if two {@link UUID} objects are equal.
     */
    equals(uuid: UUID): boolean;

    /**
     * Returns UUID string representation.
     * @returns {string} {@link UUID#hexString}.
     */
    toString(): string;
}

interface UUIDArray<T> extends Array<T> {
    timeLow: string;
    timeMid: string;
    timeHiAndVersion: string;
    clockSeqHiAndReserved: string;
    clockSeqLow: string;
    node: string;
}

/**
 * The simplest function to get an UUID string.
 * @returns {string} A version 4 UUID string.
 */
export declare function generate(): string;

/**
 * Generates a version 4 {@link UUID}.
 * @returns {UUID} A version 4 {@link UUID} object.
 * @since 3.0
 */
export declare function genV4(): UUID;


/**
 * Generates a version 1 {@link UUID}.
 * @returns {UUID} A version 1 {@link UUID} object.
 * @since 3.0
 */
export declare function genV1(): UUID;

/**
 * Converts hexadecimal UUID string to an {@link UUID} object.
 * @param {string} uuid UUID hexadecimal string representation ("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx").
 * @returns {UUID} {@link UUID} object or null.
 * @since 3.0
 */
export declare function parse(uuid: string): UUID;


/**
 * Re-initializes version 1 UUID state.
 * @since 3.0
 */
export declare function resetState(): void;

/**
 * Reinstalls {@link UUID.generate} method to emulate the interface of UUID.js version 2.x.
 * @since 3.1
 * @deprecated Version 2.x. compatible interface is not recommended.
 */
export declare function makeBackwardCompatible(): void;
