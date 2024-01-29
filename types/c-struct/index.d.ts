/// <reference types="node"/>

export type SchemaDefinition<TObject> = { [_ in keyof TObject]: string };

// tslint:disable:no-unnecessary-class
export class Schema {
    constructor(schemaDefinition: SchemaDefinition<any>);
}
export interface DataTypes {
    string(size?: number): string;

    boolean: "boolean";
    nibble: "nibble";

    uint8: "uint8";
    u8(size: number): string;

    uint16: "uint16";
    u16(size: number): string;

    uint24: "uint24";
    u24(size: number): string;

    uint32: "uint32";
    u32(size: number): string;

    uint40: "uint40";
    u40(size: number): string;

    uint48: "uint48";
    u48(size: number): string;

    int8: "int8";
    int16: "int16";
    int24: "int24";
    int32: "int32";
    int40: "int40";
    int48: "int48";

    double: "double";
    float: "float";

    le: "l";
    be: "b";
}

export const type: DataTypes;

export interface UnpackOptions {
    endian: DataTypes["le"] | DataTypes["be"];
}

export function unpackSync(name: string, buffer: Buffer, options?: UnpackOptions): {};

export interface PackOptions {
    endian: DataTypes["le"] | DataTypes["be"];
}

export function packSync(name: string, object: {}, options?: PackOptions): Buffer;

export function register(name: string, schema: Schema): Schema;
