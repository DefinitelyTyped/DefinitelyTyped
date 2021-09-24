import { Readable } from 'readable-stream';

export function string(str: string): Readable;
export function object(obj: unknown): Readable;
