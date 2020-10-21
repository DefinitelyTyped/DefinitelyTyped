export interface Config {
  ignoreCase?: boolean;
  ignoreAccents?: boolean;
  stringify?: (obj: any) => string;
  trim?: boolean;
  matchFrom?: 'any' | 'start';
}

import { stripDiacritics } from './diacritics';

export interface Option { label: string; value: string; data: any; }

/* tslint:disable-next-line:no-unnecessary-generics */
export function createFilter<T extends { value: any; label: any } = Option>(config: Config | null): (
  option: T,
  rawInput: string
) => boolean;
