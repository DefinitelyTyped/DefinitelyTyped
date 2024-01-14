/// <reference types="node"/>

import BN = require("bn.js");
import Stream = require("./stream.js");

/**
 * LEB128 encode an integer.
 */
export function encode(num: string | number): Buffer;

/**
 * Decode a LEB128 encoded integer.
 */
export function decode(buffer: Buffer): string;

export function write(number: string | number, stream: Stream): void;

export function read(stream: Stream): string;

export function readBn(stream: Stream): BN;
