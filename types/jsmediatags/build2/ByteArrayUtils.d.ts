import {
    ByteArray
} from '../types';

export function bin(string: string): ByteArray;

export function pad(array: Array<any>, size: number): Array<any>;

export function getSynchsafeInteger32(number: number): ByteArray;

export function getInteger32(number: number): ByteArray;

export function getInteger24(number: number): ByteArray;
