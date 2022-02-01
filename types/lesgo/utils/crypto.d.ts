import { BinaryLike } from 'crypto';

export function encrypt(text: string): string;
export function decrypt(text: string): string;
export function hash(data: BinaryLike): string;
export function hashMD5(data: BinaryLike): string;
