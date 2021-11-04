// Type definitions for react-global-configuration 1.3
// Project: https://github.com/morenofa/react-global-configuration#readme
// Definitions by: Ryo Kikuchi <https://github.com/ryokik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface Options {
    freeze: boolean;
    assign: boolean;
}

export function set(newConfiguration: any, newOptions?: Options): void;
export function get(key?: string): any;
export function get<Value = any>(key: string, fallbackValue: Value): Value;
export function serialize(): string;
