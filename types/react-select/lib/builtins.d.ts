import { ReactNode as Node } from 'react';
import { GroupType, OptionType } from './types';

export const formatGroupLabel: (group: GroupType) => Node;

export const getOptionLabel: (option: OptionType) => string;

export const getOptionValue: (option: OptionType) => string;

export const isOptionDisabled: (option: OptionType) => boolean;
