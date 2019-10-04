// Type definitions for html-pdf v2.2
// Project: https://github.com/marcbachmann/node-html-pdf
// Definitions by: Vladimir Grenaderov https://github.com/VladimirGrenaderov,
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function parse(htmlString: string, callbacks?: {}, regex?: {}): void;

export function parseFile(fileName: any, encoding: any, callbacks: any, callback: any): void;

export function sanitize(htmlString: any, removalCallbacks: any, ...args: any[]): any;
