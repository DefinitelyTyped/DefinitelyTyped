// Type definitions for python-struct 1.0
// Project: https://github.com/danielgindi/node-python-struct
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as Long from 'long';

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
