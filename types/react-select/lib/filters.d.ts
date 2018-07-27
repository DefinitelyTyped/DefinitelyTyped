type Config = {
  ignoreCase?: boolean,
  ignoreAccents?: boolean,
  stringify?: (obj: Object) => string,
  trim?: boolean,
  matchFrom?: 'any' | 'start',
};

import { stripDiacritics } from './diacritics';

export type Option = { label: string, value: string, data: any };

export const createFilter: (config: Config | null) => (
  option: Option,
  rawInput: string
) => boolean;
