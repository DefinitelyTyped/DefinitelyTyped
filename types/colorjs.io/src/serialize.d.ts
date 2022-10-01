import { ColorTypes } from './color';

export interface Options {
    precision?: number | undefined;
    format?: string | undefined;
    /** @default true */
    inGamut?: boolean | undefined;
}

export default function serialize(color: ColorTypes, options?: Options & Record<string, any>): string;
