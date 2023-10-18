/// <reference types="node" />

import * as Long from "long";

export type DataType = number | Long | string | boolean;

export function pack(format: string, data: DataType[]): Buffer;
export function pack(format: string, ...data: DataType[]): Buffer;
export function sizeOf(format: string): number;
export function unpack(
    format: string,
    data: Buffer,
    checkBounds?: boolean,
): DataType[];
export function unpackFrom(
    format: string,
    data: Buffer,
    checkBounds: boolean | undefined,
    position: number,
): DataType;
