// Type definitions for freshy 1.0
// Project: https://github.com/krakenjs/freshy#readme, https://github.com/totherik/freshy
// Definitions by: Nikita Volodin <https://github.com/qlonik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function unload(module: string): boolean;
export function reload(module: string): any;
export function freshy(module: string, cb?: (module: any) => any): any;
