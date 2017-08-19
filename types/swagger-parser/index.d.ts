// Type definitions for swagger-parser 4.x
// Project: https://www.npmjs.com/package/swagger-parser
// Definitions by: Tobias Wolff <https://github.com/Tobias4872/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function parse(api: any, options?: any): Promise<any>;
export function parse(api: any, options: any, callback: (err: any, result?: any) => void): void;
