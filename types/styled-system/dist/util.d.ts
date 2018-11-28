export const defaultBreakpoints: string[];
export function is(n: any): boolean;
export function num(n: any): boolean;
export function px(n: any): string;

export function get(obj: any, ...paths: Array<string|number>): any;

export function themeGet(keys: string, fallback?: string): any;
export function cloneFunc(fn: (...args: any[]) => any): (...args: any[]) => any;

export function merge(a: any, b: any): any;

export function compose(...funcs: Array<(...args: any[]) => any>): (...args: any[]) => any;

export function createMediaQuery(n: string): string;

export interface LowLevelStylefunctionArguments {
    prop: string;
    cssProperty?: string;
    key?: string;
    getter?: () => any;
    transformValue?: (n: string|number) => any;
    scale?: Array<string|number>;
}

export function style(args: LowLevelStylefunctionArguments): any;
