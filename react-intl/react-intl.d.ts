// Type definitions for react-intl 2.0.0-beta1
// Project: http://formatjs.io/react/
// Definitions by: Bruno Grieder <https://github.com/bgrieder>, Christian Droulers <https://github.com/cdroulers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path='../react/react.d.ts' />

declare namespace ReactIntl {
    import React = __React;

    interface Locale {
        locale: string;
        fields?: { [key: string]: string },
        pluralRuleFunction?: (n: number, ord: boolean) => string;
    }

    function injectIntl<T>(clazz: T): T;

    function addLocaleData(data: Locale[] | Locale): void;

    function hasLocaleData(localeName: string): boolean;

    interface Messages {
        [key: string]: FormattedMessage.MessageDescriptor
    }

    function defineMessages<T extends Messages>(messages: T): T;

    interface IntlShape extends React.Requireable<any> {
    }

    var intlShape: IntlShape;

    interface FormatConfig {
        locale?: string;
        formats?: any;
    }

    interface InjectedIntlProps {
        formatDate?: (date: Date, options?: FormattedDate.PropsBase) => string;
        formatTime?: (date: Date, options?: FormattedTime.PropsBase) => string;
        formatRelative?: (value: number, options?: FormattedRelative.PropsBase) => string;
        formatNumber?: (value: number, options?: FormattedNumber.PropsBase) => string;
        formatPlural?: (value: number, options?: FormattedPlural.PropsBase) => string;
        formatMessage?: (messageDescriptor: FormattedMessage.MessageDescriptor, values?: Object) => string;
        formatHTMLMessage?: (messageDescriptor: FormattedMessage.MessageDescriptor, values?: Object) => string;
    }

    namespace IntlComponent {
        interface DateTimeFormatProps {
            /*
            * one of "best fit" (default) | "lookup"
            */
            localeMatcher?: string;
            /*
            * one of "basic" (default) | "best fit"
            */
            formatMatcher?: string;
            timeZone?: string,
            hour12?: boolean;
            /*
            * one of "narrow" (default) | "short" | "long"
            */
            weekday?: string;
            /*
            * one of "narrow" (default) | "short" | "long"
            */
            era?: string;
            /*
            * one of "numeric" (default) | "2-digit"
            */
            year?: string;
            /*
            * one of "numeric" (default) | "2-digit" | "narrow" | "short" | "long"
            */
            month?: string;
            /*
            * one of "numeric" (default) | "2-digit"
            */
            day?: string;
            /*
            * one of "numeric" (default) | "2-digit"
            */
            hour?: string;
            /*
            * one of "numeric" (default) | "2-digit"
            */
            minute?: string;
            /*
            * one of "numeric" (default) | "2-digit"
            */
            second?: string;
            /*
            * one of "short" (default) | "long"
            */
            timeZoneName?: string;
        }
    }


    namespace FormattedDate {
        export interface PropsBase extends IntlComponent.DateTimeFormatProps {
            format?: string;
        }

        export interface Props extends PropsBase {
            value: Date;
        }
    }
    class FormattedDate extends React.Component<FormattedDate.Props, any> { }


    namespace FormattedTime {
        export interface PropsBase extends IntlComponent.DateTimeFormatProps {
            format?: string;
        }

        export interface Props extends PropsBase {
            value: Date;
        }
    }
    class FormattedTime extends React.Component<FormattedTime.Props, any> { }


    namespace FormattedRelative {
        export interface PropsBase {
            /*
            * one of "second", "minute", "hour", "day", "month" or "year"
            */
            units?: string;
            /*
            * one of "best fit" (default) | "numeric"
            */
            style?: string;
            format?: string;
            updateInterval?: number;
            initialNow?: any;
        }

        export interface Props extends PropsBase {
            value: number;
        }
    }
    class FormattedRelative extends React.Component<FormattedRelative.Props, any> { }


    namespace FormattedMessage {
        export interface MessageDescriptor {
            id: string;
            description?: string;
            defaultMessage?: string;
        }

        export interface Props extends MessageDescriptor {
            values?: Object;
            tagName?: string;
        }
    }
    class FormattedMessage extends React.Component<FormattedMessage.Props, any> { }


    class FormattedHTMLMessage extends React.Component<FormattedMessage.Props, any> { }


    namespace FormattedNumber {
        export interface PropsBase {
            format?: string;
            /*
            * one of "best fit" (default) | "lookup"
            */
            localeMatcher?: string;
            /*
            * one of "decimal" (default) | "currency" | "percent"
            */
            style?: string;
            currency?: string,
            /*
            * one of "symbol" (default) | "code" | "name"
            */
            currencyDisplay?: string;
            useGrouping?: boolean;
            minimumIntegerDigits?: number;
            minimumFractionDigits?: number;
            maximumFractionDigits?: number;
            minimumSignificantDigits?: number;
            maximumSignificantDigits?: number;
        }

        export interface Props extends PropsBase {
            value: number;
        }
    }
    class FormattedNumber extends React.Component<FormattedNumber.Props, any> { }


    namespace FormattedPlural {
        export interface PropsBase {
            /*
            * one of "cardinal" (default) | "ordinal"
            */
            style?: string;
            other?: any;
            zero?: any;
            one?: any;
            two?: any;
            few?: any;
            many?: any;
        }

        export interface Props extends PropsBase {
            value: number;
        }
    }
    class FormattedPlural extends React.Component<FormattedPlural.Props, any> { }


    namespace IntlProvider {
        export interface Props {
            locale?: string;
            formats?: Object;
            messages?: Object;
            defaultLocale?: string;
            defaultFormats?: Object;
        }
    }
    class IntlProvider extends React.Component<IntlProvider.Props, any> { }

    class LocaleData extends Array<Locale> {
    }
}

declare module "react-intl" {
    export = ReactIntl
}

declare module "react-intl/lib/locale-data/en" {
    var data: ReactIntl.LocaleData;
    export = data;
}
