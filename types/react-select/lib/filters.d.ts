export type Config = {
  ignoreCase?: boolean,
  ignoreAccents?: boolean,
  stringify?: (obj: any) => string,
  trim?: boolean,
  matchFrom?: 'any' | 'start',
};

import { stripDiacritics } from './diacritics';

export type Option = { label: string, value: string, data: any };

export function createFilter(config: Config | null): (
  option: Option,
  rawInput: string
) => boolean;
