import { ReactNode } from 'react';
import { GroupType } from './types';

export type formatGroupLabel<OptionType = any> = (group: GroupType<OptionType>) => ReactNode;
export function formatGroupLabel(group: GroupType<any>): ReactNode;

export type getOptionLabel<OptionType = any> = (option: OptionType) => string;
export function getOptionLabel(option: any): string;

export type getOptionValue<OptionType = any> = (option: OptionType) => string;
export function getOptionValue(option: any): string;

export type isOptionDisabled<OptionType = any> = (option: OptionType) => boolean;
export function isOptionDisabled(option: any): boolean;
