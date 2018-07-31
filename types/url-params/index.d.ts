// Type definitions for url-params 1.0
// Project: https://github.com/AtenDesignGroup/url-params
// Definitions by: Daniel Sogl <https://github.com/danielsogl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export function add(oldUrl: string, param: string, value: any): string;

export function createUrlObject(oldUrl: string): any;

export function remove(oldUrl: string, param: string, value: any): string;

export function set(oldUrl: string, param: string, value: any): string;
