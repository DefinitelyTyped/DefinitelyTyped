export interface Config {
    ignoreCase?: boolean | undefined;
    ignoreAccents?: boolean | undefined;
    stringify?: ((obj: any) => string) | undefined;
    trim?: boolean | undefined;
    matchFrom?: 'any' | 'start' | undefined;
}

import { stripDiacritics } from './diacritics';

export interface Option {
    label: string;
    value: string;
    data: any;
}

export function createFilter(config: Config | null): (option: Option, rawInput: string) => boolean;
