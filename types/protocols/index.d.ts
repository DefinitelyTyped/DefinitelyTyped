/// <reference types="node" />

import { URL } from "url";

/**
 * @param input The input url.
 * @param first If `true`, the first protocol will be returned. If number, it will represent the zero-based index of the protocols array.
 * @returns The array of protocols or the specified protocol.
 */
declare function protocols(input: string | URL, first: true | number): string;
declare function protocols(input: string | URL, first?: false): string[];

export = protocols;
