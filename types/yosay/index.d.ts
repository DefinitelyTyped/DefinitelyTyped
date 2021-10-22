// Type definitions for yosay 2.0
// Project: https://github.com/yeoman/yosay
// Definitions by: Kentaro Okuno <https://github.com/armorik83>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Tell Yeoman what to say
 */
declare function yosay(message?: string, options?: { maxLength: number }): string;
export = yosay;
