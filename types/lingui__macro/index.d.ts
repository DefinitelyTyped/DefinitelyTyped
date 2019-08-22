// Type definitions for @lingui/macro 2.7
// Project: https://lingui.github.io/js-lingui/, https://github.com/lingui/js-lingui
// Definitions by: Jeow Li Huan <https://github.com/huan086>
// Definitions: https://github.com/huan086/lingui-typings
// TypeScript Version: 2.8

import { MessageDescriptor } from '@lingui/core';
import { ComponentClass } from 'react';
import { FormatPropsWithoutI18n } from './createFormat';
import { SelectProps, PluralProps } from "./select";

// JS
export function t(strings: TemplateStringsArray, ...values: any[]): MessageDescriptor;

export function t(id: string): (strings: TemplateStringsArray, ...values: any[]) => MessageDescriptor;

export function select(config: SelectProps): MessageDescriptor;

export function select(id: string, config: SelectProps): MessageDescriptor;

export function plural(config: PluralProps): MessageDescriptor;

export function plural(id: string, config: PluralProps): MessageDescriptor;

export function selectOrdinal(config: PluralProps): MessageDescriptor;

export function selectOrdinal(id: string, config: PluralProps): MessageDescriptor;

export function date(value: Date, format?: Intl.DateTimeFormatOptions): MessageDescriptor;

export function number(value: number, format?: Intl.NumberFormatOptions): MessageDescriptor;

// JSX
export { default as Trans } from './Trans';

export { Plural, Select, SelectOrdinal } from './ReactSelect';

export const DateFormat: ComponentClass<FormatPropsWithoutI18n<Date, Intl.DateTimeFormatOptions>>;

export const NumberFormat: ComponentClass<FormatPropsWithoutI18n<number, Intl.NumberFormatOptions>>;
