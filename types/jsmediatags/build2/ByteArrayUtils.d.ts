import {
    ByteArray
} from '../types';

export function bin(string: string): ByteArray;

export function pad(array: any[], size: number): any[];

export function getSynchsafeInteger32(number: number): ByteArray;

export function getInteger32(number: number): ByteArray;

export function getInteger24(number: number): ByteArray;
