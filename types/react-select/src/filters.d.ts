export interface Config<OptionType = any> {
  ignoreCase?: boolean;
  ignoreAccents?: boolean;
  stringify?: (obj: OptionType) => string;
  trim?: boolean;
  matchFrom?: 'any' | 'start';
}

import { stripDiacritics } from './diacritics';

export interface Option<OptionType = any> { label: string; value: string; data: OptionType; }

export function createFilter<OptionType = Option>(config: Config<OptionType> | null): (
  option: OptionType,
  rawInput: string
) => boolean;
