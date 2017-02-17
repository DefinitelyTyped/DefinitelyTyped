// Type definitions for react-intl 2.2.1
// Project: http://formatjs.io/react/
// Definitions by: Bruno Grieder <https://github.com/bgrieder>, Christian Droulers <https://github.com/cdroulers>, Fedor Nezhivoi <https://github.com/gyzerok>, Till Wolff <https://github.com/tillwolff> 
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

///<reference types="react" />

declare namespace ReactIntl {

    interface Locale {
        locale: string;
        fields?: { [key: string]: string },
        pluralRuleFunction?: (n: number, ord: boolean) => string;
    }

    function injectIntl<T>(component: React.ComponentClass<InjectedIntlProps & T> | React.StatelessComponent<InjectedIntlProps & T>): React.ComponentClass<T>;

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

    interface InjectedIntl {
        formatDate: (date: Date, options?: FormattedDate.PropsBase) => string;
        formatTime: (date: Date, options?: FormattedTime.PropsBase) => string;
        formatRelative: (value: number, options?: FormattedRelative.PropsBase) => string;
        formatNumber: (value: number, options?: FormattedNumber.PropsBase) => string;
        formatPlural: (value: number, options?: FormattedPlural.PropsBase) => string;
        formatMessage: (messageDescriptor: FormattedMessage.MessageDescriptor, values?: Object) => string;
        formatHTMLMessage: (messageDescriptor: FormattedMessage.MessageDescriptor, values?: Object) => string;
    }

    interface InjectedIntlProps {
        intl: InjectedIntl
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

declare module "react-intl/locale-data/af" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/agq" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ak" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/am" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ar" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/as" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/asa" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ast" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/az" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bas" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/be" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bem" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bez" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bg" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bh" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bm" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bn" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bo" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/br" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/brx" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bs" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ca" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ce" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/cgg" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/chr" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ckb" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/cs" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/cu" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/cy" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/da" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/dav" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/de" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/dje" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/dsb" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/dua" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/dv" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/dyo" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/dz" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ebu" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ee" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/el" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/en" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/eo" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/es" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/et" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/eu" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ewo" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/fa" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ff" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/fi" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/fil" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/fo" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/fr" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/fur" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/fy" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ga" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/gd" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/gl" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/gsw" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/gu" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/guw" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/guz" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/gv" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ha" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/haw" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/he" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/hi" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/hr" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/hsb" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/hu" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/hy" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/id" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ig" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ii" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/in" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/is" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/it" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/iu" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/iw" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ja" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/jbo" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/jgo" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ji" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/jmc" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/jv" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/jw" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ka" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kab" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kaj" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kam" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kcg" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kde" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kea" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/khq" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ki" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kk" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kkj" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kl" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kln" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/km" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kn" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ko" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kok" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ks" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ksb" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ksf" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ksh" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ku" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kw" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ky" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lag" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lb" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lg" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lkt" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ln" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lo" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lrc" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lt" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lu" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/luo" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/luy" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lv" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mas" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mer" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mfe" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mg" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mgh" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mgo" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mk" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ml" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mn" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mo" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mr" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ms" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mt" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mua" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/my" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mzn" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nah" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/naq" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nb" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nd" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ne" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nl" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nmg" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nn" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nnh" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/no" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nqo" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nr" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nso" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nus" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ny" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nyn" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/om" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/or" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/os" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/pa" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/pap" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/pl" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/prg" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ps" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/pt" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/qu" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/rm" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/rn" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ro" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/rof" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ru" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/rw" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/rwk" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sah" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/saq" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sbp" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sdh" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/se" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/seh" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ses" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sg" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sh" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/shi" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/si" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sk" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sl" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sma" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/smi" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/smj" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/smn" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sms" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sn" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/so" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sq" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sr" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ss" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ssy" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/st" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sv" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sw" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/syr" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ta" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/te" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/teo" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/th" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ti" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/tig" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/tk" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/tl" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/tn" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/to" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/tr" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ts" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/twq" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/tzm" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ug" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/uk" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ur" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/uz" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/vai" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ve" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/vi" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/vo" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/vun" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/wa" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/wae" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/wo" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/xh" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/xog" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/yav" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/yi" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/yo" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/zgh" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/zh" {
    var data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/zu" {
    var data: ReactIntl.LocaleData;
    export = data;
}
