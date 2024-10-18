/// <reference types="node" />

export function pad(data: Buffer, size?: number): Buffer;
export function pad(data: string, size?: number): string;
export function unpad(data: Buffer): Buffer;
export function unpad(data: string): string;
