// Type definitions for react-intl 2.3
// Project: http://formatjs.io/react/
// Definitions by: Bruno Grieder <https://github.com/bgrieder>,
//                 Christian Droulers <https://github.com/cdroulers>,
//                 Fedor Nezhivoi <https://github.com/gyzerok>,
//                 Till Wolff <https://github.com/tillwolff>,
//                 Karol Janyst <https://github.com/LKay>,
//                 Brian Houser <https://github.com/bhouser>,
//                 Krister Kari <https://github.com/kristerkari>
//                 Martin Raedlinger <https://github.com/formatlos>
//                 Kanitkorn Sujautra <https://github.com/lukyth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare namespace ReactIntl {
    type DateSource = Date | string | number;
    type MessageValue = string | number | boolean | Date | null | undefined;

    interface Locale {
        locale: string;
        fields?: { [key: string]: string };
        pluralRuleFunction?(n: number, ord: boolean): string;
    }

    type LocaleData = Locale[];

    interface InjectIntlConfig {
        intlPropName?: string;
        withRef?: boolean;
    }

    function injectIntl<P extends InjectedIntlProps>(component: React.ComponentType<P>, options?: InjectIntlConfig):
        React.ComponentClass<Pick<P, Exclude<keyof P, keyof InjectedIntlProps>>> & { WrappedComponent: React.ComponentType<P> };

    function addLocaleData(data: Locale[] | Locale): void;

    interface Messages {
        [key: string]: FormattedMessage.MessageDescriptor;
    }

    function defineMessages<T extends Messages>(messages: T): T;

    interface IntlConfig {
        locale: React.Requireable<any>;
        formats: React.Requireable<any>;
        messages: React.Requireable<any>;
        defaultLocale: React.Requireable<any>;
        defaultFormats: React.Requireable<any>;
    }

    interface IntlFormat {
        formatDate: React.Requireable<any>;
        formatTime: React.Requireable<any>;
        formatRelative: React.Requireable<any>;
        formatNumber: React.Requireable<any>;
        formatPlural: React.Requireable<any>;
        formatMessage: React.Requireable<any>;
        formatHTMLMessage: React.Requireable<any>;
    }

    interface IntlShape extends IntlConfig, IntlFormat, React.Requireable<any> {
        now: React.Requireable<any>;
    }

    const intlShape: IntlShape;

    interface InjectedIntl {
        formatDate(value: DateSource, options?: FormattedDate.PropsBase): string;
        formatTime(value: DateSource, options?: FormattedTime.PropsBase): string;
        formatRelative(value: DateSource, options?: FormattedRelative.PropsBase & { now?: any }): string;
        formatNumber(value: number, options?: FormattedNumber.PropsBase): string;
        formatPlural(value: number, options?: FormattedPlural.Base): keyof FormattedPlural.PropsBase;
        formatMessage(messageDescriptor: FormattedMessage.MessageDescriptor, values?: {[key: string]: MessageValue}): string;
        formatHTMLMessage(messageDescriptor: FormattedMessage.MessageDescriptor, values?: {[key: string]: MessageValue}): string;
        locale: string;
        formats: any;
        messages: { [id: string]: string };
        defaultLocale: string;
        defaultFormats: any;
        now(): number;
    }

    interface InjectedIntlProps {
        intl: InjectedIntl;
    }

    namespace IntlComponent {
        interface DateTimeFormatProps extends Intl.DateTimeFormatOptions {
            format?: string;
        }
    }

    namespace FormattedDate {
        type PropsBase = IntlComponent.DateTimeFormatProps;

        interface Props extends PropsBase {
            value: DateSource;
            children?: (formattedDate: string) => React.ReactNode;
        }
    }

    class FormattedDate extends React.Component<FormattedDate.Props> { }

    namespace FormattedTime {
        type PropsBase = IntlComponent.DateTimeFormatProps;

        interface Props extends PropsBase {
            value: DateSource;
            children?: (formattedTime: string) => React.ReactNode;
        }
    }
    class FormattedTime extends React.Component<FormattedTime.Props> { }

    namespace FormattedRelative {
        interface PropsBase {
            /*
             * one of "second", "minute", "hour", "day", "month" or "year"
             */
            units?: "second" | "minute" | "hour" | "day" | "month" | "year";
            /*
             * one of "best fit" (default) | "numeric"
             */
            style?: "best-fit" | "numeric";
            format?: string;
            updateInterval?: number;
            initialNow?: any;
        }

        interface Props extends PropsBase {
            value: DateSource;
            children?: (formattedRelative: string) => React.ReactNode;
        }
    }

    class FormattedRelative extends React.Component<FormattedRelative.Props> { }

    namespace FormattedMessage {
        interface MessageDescriptor {
            id: string;
            description?: string;
            defaultMessage?: string;
        }

        interface Props extends MessageDescriptor {
            values?: {[key: string]: MessageValue | JSX.Element};
            tagName?: string;
            children?: (...formattedMessage: Array<string | JSX.Element>) => React.ReactNode;
        }
    }
    class FormattedMessage extends React.Component<FormattedMessage.Props> { }

    class FormattedHTMLMessage extends React.Component<FormattedMessage.Props> { }

    namespace FormattedNumber {
        interface PropsBase extends Intl.NumberFormatOptions {
            format?: string;
        }

        interface Props extends PropsBase {
            value: number;
            children?: (formattedNumber: string) => React.ReactNode;
        }
    }
    class FormattedNumber extends React.Component<FormattedNumber.Props> { }

    namespace FormattedPlural {
        interface Base {
            /*
             * one of "cardinal" (default) | "ordinal"
             */
            style?: "cardinal" | "ordinal";
        }

        interface PropsBase extends Base {
            other?: any;
            zero?: any;
            one?: any;
            two?: any;
            few?: any;
            many?: any;
        }

        interface Props extends PropsBase {
            value: number;
            children?: (formattedPlural: React.ReactNode) => React.ReactNode;
        }
    }
    class FormattedPlural extends React.Component<FormattedPlural.Props> { }

    namespace IntlProvider {
        interface Props {
            locale?: string;
            formats?: any;
            messages?: any;
            defaultLocale?: string;
            defaultFormats?: any;
            textComponent?: any;
            initialNow?: any;
        }
    }

    class IntlProvider extends React.Component<IntlProvider.Props> {
        getChildContext(): {
            intl: InjectedIntl;
        };
    }
}

declare module "react-intl" {
    export = ReactIntl;
}

declare module "react-intl/locale-data/af" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/agq" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ak" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/am" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ar" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/as" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/asa" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ast" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/az" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bas" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/be" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bem" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bez" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bg" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bm" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/br" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/brx" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/bs" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ca" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ce" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/cgg" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/chr" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ckb" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/cs" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/cu" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/cy" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/da" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/dav" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/de" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/dje" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/dsb" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/dua" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/dv" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/dyo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/dz" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ebu" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ee" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/el" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/en" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/eo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/es" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/et" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/eu" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ewo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/fa" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ff" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/fi" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/fil" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/fo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/fr" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/fur" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/fy" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ga" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/gd" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/gl" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/gsw" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/gu" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/guw" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/guz" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/gv" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ha" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/haw" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/he" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/hi" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/hr" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/hsb" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/hu" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/hy" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/id" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ig" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ii" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/in" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/is" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/it" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/iu" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/iw" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ja" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/jbo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/jgo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ji" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/jmc" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/jv" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/jw" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ka" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kab" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kaj" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kam" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kcg" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kde" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kea" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/khq" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ki" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kk" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kkj" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kl" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kln" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/km" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ko" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kok" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ks" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ksb" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ksf" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ksh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ku" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/kw" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ky" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lag" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lb" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lg" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lkt" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ln" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lrc" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lt" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lu" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/luo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/luy" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/lv" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mas" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mer" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mfe" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mg" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mgh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mgo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mk" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ml" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mr" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ms" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mt" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mua" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/my" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/mzn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nah" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/naq" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nb" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nd" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ne" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nl" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nmg" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nnh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/no" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nqo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nr" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nso" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nus" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ny" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/nyn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/om" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/or" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/os" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/pa" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/pap" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/pl" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/prg" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ps" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/pt" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/qu" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/rm" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/rn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ro" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/rof" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ru" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/rw" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/rwk" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sah" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/saq" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sbp" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sdh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/se" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/seh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ses" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sg" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/shi" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/si" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sk" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sl" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sma" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/smi" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/smj" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/smn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sms" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/so" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sq" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sr" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ss" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ssy" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/st" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sv" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/sw" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/syr" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ta" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/te" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/teo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/th" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ti" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/tig" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/tk" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/tl" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/tn" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/to" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/tr" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ts" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/twq" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/tzm" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ug" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/uk" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ur" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/uz" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/vai" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/ve" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/vi" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/vo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/vun" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/wa" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/wae" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/wo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/xh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/xog" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/yav" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/yi" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/yo" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/zgh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/zh" {
    const data: ReactIntl.LocaleData;
    export = data;
}

declare module "react-intl/locale-data/zu" {
    const data: ReactIntl.LocaleData;
    export = data;
}
