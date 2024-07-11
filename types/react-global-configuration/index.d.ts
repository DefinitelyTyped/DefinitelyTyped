export interface Options {
    freeze: boolean;
    assign: boolean;
}

export function set(newConfiguration: any, newOptions?: Options): void;
export function get(key?: string): any;
export function get<Value = any>(key: string, fallbackValue: Value): Value;
export function serialize(): string;
