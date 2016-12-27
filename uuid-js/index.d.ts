// Type definitions for uuid-js 0.7
// Project: http://github.com/pnegri/uuid-js
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = uuid_js;
declare class uuid_js {
    constructor();
    equals(uuid: uuid_js): boolean;
    fromParts(timeLow: any, timeMid: any, timeHiAndVersion: any, clockSeqHiAndReserved: any, clockSeqLow: any, node: any): uuid_js;
    toBytes(): any[];
    toString(): string;
    toURN(): string;
    static create(version?: number): uuid_js;
    static firstFromTime(time: number): uuid_js;
    static fromBinary(binary: any): uuid_js;
    static fromBytes(ints: number[]): uuid_js;
    static fromTime(time: number, last?: boolean): uuid_js;
    static fromURN(strId: any): uuid_js;
    static getTimeFieldValues(time: any): any;
    static lastFromTime(time: any): uuid_js;
    static limitUI04: number;
    static limitUI06: number;
    static limitUI08: number;
    static limitUI12: number;
    static limitUI14: number;
    static limitUI16: number;
    static limitUI32: number;
    static limitUI40: number;
    static limitUI48: number;
    static maxFromBits(bits: number): uuid_js;
    static newTS(): uuid_js;
    static paddedString(string: any, length: any, z: any): uuid_js;
    static randomUI04(): uuid_js;
    static randomUI06(): uuid_js;
    static randomUI08(): uuid_js;
    static randomUI12(): uuid_js;
    static randomUI14(): uuid_js;
    static randomUI16(): uuid_js;
    static randomUI32(): uuid_js;
    static randomUI40(): uuid_js;
    static randomUI48(): uuid_js;
}
