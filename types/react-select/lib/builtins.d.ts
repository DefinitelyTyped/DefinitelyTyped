import { ReactNode } from 'react';
import { GroupType } from './types';

export function formatGroupLabel(group: GroupType<any>): ReactNode;

export function getOptionLabel(option: any): string;

export function getOptionValue(option: any): string;

export function isOptionDisabled(option: any): boolean;
