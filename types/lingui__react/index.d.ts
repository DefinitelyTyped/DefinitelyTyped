// Type definitions for @lingui/react 2.8
// Project: https://lingui.github.io/js-lingui/, https://github.com/lingui/js-lingui
// Definitions by: Jeow Li Huan <https://github.com/huan086>
// Definitions: https://github.com/huan086/lingui-typings
// TypeScript Version: 2.8

import { ComponentClass } from 'react';

import { FormatPropsWithoutI18n } from './createFormat';

export { default as withI18n, withI18nProps } from './withI18n';
export { default as I18n } from './I18n';
export { default as I18nProvider } from './I18nProvider';
export { default as Trans } from './Trans';
export { Plural, Select, SelectOrdinal } from './Select';

export const DateFormat: ComponentClass<FormatPropsWithoutI18n<Date, Intl.DateTimeFormatOptions>>;
export const NumberFormat: ComponentClass<FormatPropsWithoutI18n<number, Intl.NumberFormatOptions>>;

export function i18nMark(id: string): string;
