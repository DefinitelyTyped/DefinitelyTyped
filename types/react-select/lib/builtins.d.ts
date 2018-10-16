import { ReactNode } from 'react';
import { GroupType } from './types';

export type formatGroupLabel<OptionType = any> = (group: GroupType<OptionType>) => ReactNode;
export function formatGroupLabel<OptionType = any>(group: GroupType<OptionType>): ReactNode;

export type getOptionLabel<OptionType = any> = (option: OptionType) => string;
export function getOptionLabel<OptionType = any>(option: OptionType): string;

export type getOptionValue<OptionType = any> = (option: OptionType) => string;
export function getOptionValue<OptionType = any>(option: OptionType): string;

export type isOptionDisabled<OptionType = any> = (option: OptionType) => boolean;
export function isOptionDisabled<OptionType = any>(option: OptionType): boolean;
