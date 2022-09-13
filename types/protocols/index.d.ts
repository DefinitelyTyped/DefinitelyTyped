// Type definitions for protocols 1.4
// Project: https://github.com/IonicaBizau/protocols
// Definitions by: Florian Keller <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @param input The input url.
 * @param first If `true`, the first protocol will be returned. If number, it will represent the zero-based index of the protocols array.
 * @returns The array of protocols or the specified protocol.
 */
declare function protocols(input: string, first: true | number): string;
declare function protocols(input: string, first?: false): string[];

export = protocols;
