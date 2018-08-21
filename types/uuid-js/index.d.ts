// Type definitions for uuid-js 0.7
// Project: https://github.com/pnegri/uuid-js
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = uuid;
declare class uuid {
    equals(uuid: uuid): boolean;
    fromParts(timeLow: any, timeMid: any, timeHiAndVersion: any, clockSeqHiAndReserved: any, clockSeqLow: any, node: any): uuid;
    toBytes(): any[];
    toString(): string;
    toURN(): string;
    static create(version?: number): uuid;
    static firstFromTime(time: number): uuid;
    static fromBinary(binary: any): uuid;
    static fromBytes(ints: number[]): uuid;
    static fromTime(time: number, last?: boolean): uuid;
    static fromURN(strId: any): uuid;
    static getTimeFieldValues(time: any): any;
    static lastFromTime(time: any): uuid;
    static limitUI04: number;
    static limitUI06: number;
    static limitUI08: number;
    static limitUI12: number;
    static limitUI14: number;
    static limitUI16: number;
    static limitUI32: number;
    static limitUI40: number;
    static limitUI48: number;
    static maxFromBits(bits: number): uuid;
    static newTS(): uuid;
    static paddedString(string: any, length: any, z: any): uuid;
    static randomUI04(): uuid;
    static randomUI06(): uuid;
    static randomUI08(): uuid;
    static randomUI12(): uuid;
    static randomUI14(): uuid;
    static randomUI16(): uuid;
    static randomUI32(): uuid;
    static randomUI40(): uuid;
    static randomUI48(): uuid;
}
