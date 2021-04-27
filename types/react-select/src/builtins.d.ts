import { ReactNode } from 'react';
import { GroupTypeBase, OptionTypeBase } from './types';

export type formatGroupLabel<
    OptionType extends OptionTypeBase = any,
    GroupType extends GroupTypeBase<OptionType> = GroupTypeBase<OptionType>
> = (group: GroupType) => ReactNode;
export function formatGroupLabel(group: GroupTypeBase<any>): ReactNode;

export type getOptionLabel<OptionType extends OptionTypeBase = any> = (option: OptionType) => string;
export function getOptionLabel(option: any): string;

export type getOptionValue<OptionType extends OptionTypeBase = any> = (option: OptionType) => string;
export function getOptionValue(option: any): string;

export type isOptionDisabled<OptionType extends OptionTypeBase = any> = (option: OptionType) => boolean;
export function isOptionDisabled(option: any): boolean;
