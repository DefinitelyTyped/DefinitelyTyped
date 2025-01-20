export type Reviver = (this: any, key: string, value: any) => any;

export interface ParseOptions {
    protoAction?: "error" | "remove" | "ignore" | undefined;
    constructorAction?: "error" | "remove" | undefined;
}

export function parse(input: string, reviver?: Reviver, options?: ParseOptions): any;
export function safeParse(input: string, reviver?: Reviver): any;
export function scan(input: any, options?: ParseOptions): void;
