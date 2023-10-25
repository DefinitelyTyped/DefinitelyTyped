/// <reference types="node" />

export function soliditySHA3(argTypes: string[], args: any[]): Buffer;
export function soliditySHA256(argTypes: string[], args: any[]): Buffer;
export function solidityRIPEMD160(argTypes: string[], args: any[]): Buffer;
export function eventID(name: string, types: string[]): Buffer;
export function methodID(name: string, types: string[]): Buffer;
export function simpleEncode(signature: string, ...args: any[]): Buffer;
export function simpleDecode(signature: string, data: Buffer): any[];
export function rawEncode(types: string[], values: any[]): Buffer;
export function rawDecode(types: string[], data: Buffer): any[];
export function stringify(types: string[], values: any[]): string;
export function solidityPack(types: string[], values: any[]): Buffer;
export function fromSerpent(signature: string): string[];
export function toSerpent(types: string[]): string;
