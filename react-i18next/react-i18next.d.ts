// Type definitions for react-i18next 1.6.3
// Project: https://github.com/i18next/react-i18next
// Definitions by: Kostya Esmukov <https://github.com/KostyaEsmukov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../react/react.d.ts"/>
///<reference path="../react-router/react-router.d.ts"/>
///<reference path="../i18next/i18next.d.ts" />


declare namespace ReactI18next {
    import React = __React;

    // Extend your component's Prop interface with this one to get access to `this.props.t`
    //
    // interface MyComponentProps extends ReactI18next.InjectedTranslateProps {}
    export interface InjectedTranslateProps {
        t?: I18next.TranslationFunction;
    }

    interface I18nextProviderProps {
        i18n: I18next.I18n;
        children?: React.ReactElement<any>;
    }

    export class I18nextProvider extends React.Component<I18nextProviderProps, {}> { }


    type InterpolateValue = string | JSX.Element;

    interface InterpolateProps {
        i18nKey: string;

        parent?: string;
        regexp?: RegExp;
        options?: I18next.TranslationOptions;

        [regexKey: string]: InterpolateValue | RegExp | I18next.TranslationOptions;
    }

    export class Interpolate extends React.Component<InterpolateProps, {}> { }

    interface TranslateOptions {
        withRef?: boolean;
        wait?: boolean;
    }

    export function translate(namespaces?: string[] | string, options?: TranslateOptions): <C extends Function>(WrappedComponent: C) => C;

    export function loadNamespaces({ components, i18n }: { components: ReactRouter.RouteComponent[], i18n: I18next.I18n }): Promise<void>;

}

declare module 'react-i18next' {
    export = ReactI18next;
}
