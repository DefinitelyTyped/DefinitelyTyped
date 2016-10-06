// Type definitions for uuid v2.0.3
// Project: https://github.com/defunctzombie/node-uuid
// Definitions by: Oliver Hoffmann <https://github.com/iamolivinius/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module UUID {


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

declare const uuid: uuid.UuidStatic
export = uuid
