import { ReactNode as Node } from 'react';
import { GroupType, OptionType } from './types';

export function formatGroupLabel(group: GroupType): Node;

export function getOptionLabel(option: OptionType): string;

export function getOptionValue(option: OptionType): string;

export function isOptionDisabled(option: OptionType): boolean;
