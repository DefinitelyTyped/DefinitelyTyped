// Type definitions for pad 1.1
// Project: https://github.com/wdavidw/node-pad#readme
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
//                 windware <https://github.com/windware>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pad;

/** left pad */
declare function pad(length: number, text: string, char?: string): string;
// tslint:disable-next-line unified-signatures
declare function pad(length: number, text: string, options?: { char?: string, colors?: boolean, strip?: boolean }): string;
/** Right pad */
declare function pad(text: string, length: number, char?: string): string;
// tslint:disable-next-line unified-signatures
declare function pad(text: string, length: number, options?: { char?: string, colors?: boolean, strip?: boolean }): string;

declare namespace pad {}
