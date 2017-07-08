// Type definitions for atpl
// Project: https://github.com/soywiz/atpl.js
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/atpl.d.ts


export declare function compile(templateString: string, options: any): (context: any) => string;
export declare function __express(filename: string, options: any, callback: Function): any;

export declare function registerExtension(items: any): void;
export declare function registerTags(items: any): void;
export declare function registerFunctions(items: any): void;
export declare function registerFilters(items: any): void;
export declare function registerTests(items: any): void;

export declare function renderFileSync(viewsPath: string, filename: string, parameters: any, cache: boolean): string;
export declare function renderFile(viewsPath: string, filename: string, parameters: any, cache: boolean, done: (err: Error, result?: string) => void): void;
