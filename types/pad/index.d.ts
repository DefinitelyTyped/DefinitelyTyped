// Type definitions for pad 1.0
// Project: https://github.com/wdavidw/node-pad#readme
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pad;

/** left pad */
declare function pad(length: number, text: string, options?: { char?: string, colors?: boolean, strip?: boolean }): string;
/** Right pad */
declare function pad(text: string, length: number, options?: { char?: string, colors?: boolean, strip?: boolean }): string;
