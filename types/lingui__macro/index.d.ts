// Type definitions for @lingui/macro 2.7
// Project: https://lingui.github.io/js-lingui/
// Definitions by: Jeow Li Huan <https://github.com/huan086>
// Definitions: https://github.com/huan086/lingui-typings
// TypeScript Version: 2.8

import { ComponentClass } from 'react';
import { FormatPropsWithoutI18n } from './createFormat';
import { SelectProps, PluralProps } from "./select";

// JS
export function t(strings: TemplateStringsArray, ...values: any[]): string;

export function t(id: string): (strings: TemplateStringsArray, ...values: any[]) => string;

export function select(config: SelectProps): string;

export function select(id: string, config: SelectProps): string;

export function plural(config: PluralProps): string;

export function plural(id: string, config: PluralProps): string;

export function selectOrdinal(config: PluralProps): string;

export function selectOrdinal(id: string, config: PluralProps): string;

export function date(value: Date, format?: Intl.DateTimeFormatOptions): string;

export function number(value: number, format?: Intl.NumberFormatOptions): string;

// JSX
export { default as Trans } from './Trans';

export { Plural, Select, SelectOrdinal } from './ReactSelect';

export const DateFormat: ComponentClass<FormatPropsWithoutI18n<Date, Intl.DateTimeFormatOptions>>;

export const NumberFormat: ComponentClass<FormatPropsWithoutI18n<number, Intl.NumberFormatOptions>>;
