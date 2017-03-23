// Type definitions for react-intl 2.2
// Project: http://formatjs.io/react/
// Definitions by: Bruno Grieder <https://github.com/bgrieder>,
//                 Christian Droulers <https://github.com/cdroulers>,
//                 Fedor Nezhivoi <https://github.com/gyzerok>,
//                 Till Wolff <https://github.com/tillwolff>,
//                 Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { Component, ComponentClass, StatelessComponent, Requireable } from "react"

type ComponentConstructor<Props> = ComponentClass<Props> | StatelessComponent<Props>

/* Locale Data APIs */
export interface LocaleData {
    locale: string;
    [key: string]: any;
}

export type LocaleDataObject = Array<LocaleData>;

declare function addLocaleData(data: LocaleData | LocaleData[]): void;

export interface MessageDescriptor {
    id: string;
    defaultMessage?: string;
    description?: string | any;
}

export interface MessageDescriptorMap {
    [key: string]: MessageDescriptor
}

export declare function defineMessages(messageDescriptors: MessageDescriptorMap): MessageDescriptorMap;

/* Injection API */

export interface InjectIntlConfig {
    intlPropName?: string;
    withRef?: boolean;
}

declare function injectIntl<Props>(component: ComponentConstructor<Props>, options?: InjectIntlConfig): ComponentClass<Props & InjectedIntlProps>;

interface IntlConfig {
    locale: Requireable<any>;
    formats: Requireable<any>;
    messages: Requireable<any>;
    defaultLocale: Requireable<any>;
    defaultFormats: Requireable<any>;
}

interface IntlFormat {
    formatDate: Requireable<any>;
    formatTime: Requireable<any>;
    formatRelative: Requireable<any>;
    formatNumber: Requireable<any>;
    formatPlural: Requireable<any>;
    formatMessage: Requireable<any>;
    formatHTMLMessage: Requireable<any>;
}

interface IntlShape extends IntlConfig, IntlFormat {
    isRequired: Requireable<any>;
    now: Requireable<any>;
}

declare const intlShape: IntlShape;

export interface FormattedDateTimeOptions extends Intl.DateTimeFormatOptions {
    format?: string;
}

interface FormattedRelativeBase {
    units?: string;
    style?: string;
    format?: string;
}

export interface FormattedRelativeOptions extends FormattedRelativeBase {
    now?: any;
}

export interface FormattedNumberOptions extends Intl.NumberFormatOptions {
    format?: string;
}

export interface InjectedIntl {
    formatDate: (date: Date, options?: FormattedDateTimeOptions) => string;
    formatTime: (date: Date, options?: FormattedDateTimeOptions) => string;
    formatRelative: (value: number, options?: FormattedRelativeOptions) => string;
    formatNumber: (value: number, options?: FormattedNumberOptions) => string;
    formatPlural: (value: number, options?: FormattedPluralOptions) => string;
    formatMessage: (messageDescriptor: MessageDescriptor, values?: any) => string;
    formatHTMLMessage: (messageDescriptor: MessageDescriptor, values?: any) => string;
}

export interface InjectedIntlProps {
    intl?: InjectedIntl
}

/* Date Formatting APIs */

interface FormattedDateTimeProps extends FormattedDateTimeOptions {
    value: Date;
}

export type FormattedDateProps = FormattedDateTimeProps

declare class FormattedDate extends Component<FormattedDateProps, any> { }

export type FormattedTimeProps = FormattedDateTimeProps

declare class FormattedTime extends Component<FormattedTimeProps, any> { }

export interface FormattedRelativeProps extends FormattedRelativeBase  {
    updateInterval?: number;
    initialNow?: any;
    value: number;
}

declare class FormattedRelative extends Component<FormattedRelativeProps, any> {}

/* Number Formatting APIs */

export interface FormattedNumberProps extends FormattedNumberOptions {
    value: number;
}

declare class FormattedNumber extends Component<FormattedNumberProps, any> {}

export interface FormattedPluralOptions {
    style?: "cardinal" | "ordinal";
    other?: any;
    zero?: any;
    one?: any;
    two?: any;
    few?: any;
    many?: any;
}

export interface FormattedPluralProps extends FormattedPluralOptions {
    value: number;
}

declare class FormattedPlural extends Component<FormattedPluralProps, any> {}

/* String Formatting APIs */

export interface FormattedMessageProps {
    id: string;
    description?: string;
    defaultMessage?: string;
    values?: any;
    tagName?: string;
}

declare class FormattedMessage extends Component<FormattedMessageProps, any> {}

export type FormattedHTMLMessageProps = FormattedMessageProps

declare class FormattedHTMLMessage extends Component<FormattedHTMLMessageProps, any> {}

/* Intl Provider Component */

export interface IntlProviderProps {
    locale?: string;
    formats?: any;
    messages?: any;
    defaultLocale?: string;
    defaultFormats?: any;
    textComponent?: string;
    initialNow?: any;
}

declare class IntlProvider extends Component<IntlProviderProps, any> {}
