import { White } from './adapt';
import Color, { ColorObject, Coords } from './color';

export interface Format {
    type?: string | undefined;
    name?: string | undefined;
    id?: string | undefined;
    coordGrammar?: string[] | undefined;
    serializeCoords?: ((coords: Coords, precision: number) => [string, string, string]) | undefined;
}

export interface Options {
    id: string;
    name: string;
    base?: string | ColorSpace | null | undefined;
    fromBase?: ((coords: Coords) => number[]) | undefined;
    toBase?: ((coords: Coords) => number[]) | undefined;
    coords?: Coords | undefined;
    white?: string | White | undefined;
    cssId?: string | undefined;
    referred?: string | undefined;
    formats?: Record<string, Format>;
}

export type Ref = string | [string | ColorSpace, string] | { space: string | ColorSpace; coordId: string };

export default class ColorSpace {
    constructor(options: Options);

    static DEFAULT_FORMAT: { type: 'functions'; name: 'color' };

    /**
     * @throws {TypeError} If no matching color space is found
     */
    static get(space: ColorSpace | string, ...alternatives: Array<ColorSpace | string>): ColorSpace;

    /**
     * @throws {TypeError} If no space or an unknown space is provided
     */
    static resolveCoord(
        ref: Ref,
        workingSpace?: string | ColorSpace,
    ): {
        name: string;
        id: string;
        index: string | number;
        range: number[];
        space: ColorSpace;
    };

    /**
     * @throws {TypeError} If a space with the provided id already exists
     */
    static register(space: ColorSpace): ColorSpace;
    static register(id: string, space: ColorSpace): ColorSpace;

    static registry: Record<string, ColorSpace>;

    get all(): Set<ColorSpace>;
    get cssId(): string;
    get isPolar(): boolean;

    name: string;
    id: string;
    aliases?: string[] | undefined;
    base: ColorSpace | null;
    coords: Coords;
    fromBase?: ((coords: Coords) => number[]) | undefined;
    toBase?: ((coords: Coords) => number[]) | undefined;
    formats: Record<string, Format>;
    referred?: string | undefined;
    white: string;

    from(color: Color | ColorObject): Coords;
    from(space: string | ColorSpace, coords: Coords): Coords;

    getFormat(format?: string | Format): Format | null;

    getMinCoords(): Coords;

    inGamut(coords: Coords, options?: { epsilon?: number }): boolean;

    to(color: Color | ColorObject): Coords;
    to(space: string | ColorSpace, coords: Coords): Coords;

    toString(): string;
}
