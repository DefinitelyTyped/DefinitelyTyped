import { WHITES } from './adapt';
import defaults from './defaults';
import hooks from './hooks';
import * as util from './util';
import ColorSpace from './space';

import {
    to,
    parse,
    serialize,
    inGamut,
    toGamut,
    distance,
    equals,
    get,
    getAll,
    set,
    setAll,
    display,
} from './index-fn';

export type Coords = [number, number, number];

export interface ColorObject {
    space: ColorSpace;
    coords: Coords;
    alpha: number;
}

export type ColorTypes = Color | ColorObject | string;

export type DefineFuncionCode = (...args: any[]) => ColorTypes | ColorTypes[] | ((...args: any[]) => ColorTypes);

export interface DefineFunctionOptions {
    instance?: boolean | undefined;
    returns?: 'color' | 'function<color>' | 'array<color>' | undefined;
}

export type DefineFuncionHybrid = DefineFuncionCode & DefineFunctionOptions;

/** Remove the first element of an array type */
type RemoveFirstElement<T extends any[]> = T extends [infer _, ...infer R] ? R : T[number][];

/** Convert a function to a prototype for Color */
export type ToColorPrototype<T extends (...args: any[]) => any> = T extends (color: Color, ...args: infer A) => infer R
    ? (...args: A) => R
    : never;

declare namespace Color {
    export { util, hooks, WHITES, ColorSpace as Space, parse, defaults };
    export const spaces: typeof ColorSpace['registry'];
}

declare class Color {
    constructor(color: ColorTypes);
    constructor(space: string | ColorSpace, coords: Coords, alpha: number);

    // These signatures should always be the same as the constructor
    static get(color: ColorTypes): Color;
    static get(space: string | ColorSpace, coords: Coords, alpha: number): Color;

    static defineFunction(code: DefineFuncionHybrid): void;
    static defineFunction(name: string, code: DefineFuncionHybrid): void;
    static defineFunction(name: string, code: DefineFuncionCode, options: DefineFunctionOptions): void;

    static defineFunctions(objects: Record<string, DefineFuncionHybrid>): void;

    static extend(
        exports:
            | DefineFuncionHybrid
            | { register: (color: typeof Color) => void }
            | { default: DefineFuncionHybrid }
            | Record<string, DefineFuncionHybrid>,
    ): void;

    get space(): ColorSpace;
    get spaceId(): string;

    alpha: number;
    coords: Coords;

    clone(): this;

    // Copy parameter types from display function, except for the first one
    display(...args: RemoveFirstElement<Parameters<typeof display>>): string & { color: Color };

    toJSON(): { spaceId: string; coords: Coords; alpha: number };

    // Functions defined using Color.defineFunctions
    get: ToColorPrototype<typeof get>;
    getAll: ToColorPrototype<typeof getAll>;
    set: ToColorPrototype<typeof set>;
    setAll: ToColorPrototype<typeof setAll>;
    to: ToColorPrototype<typeof to>;
    equals: ToColorPrototype<typeof equals>;
    inGamut: ToColorPrototype<typeof inGamut>;
    toGamut: ToColorPrototype<typeof toGamut>;
    distance: ToColorPrototype<typeof distance>;
    toString: ToColorPrototype<typeof serialize>;
}

export default Color;
