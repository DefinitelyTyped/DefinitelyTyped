// Type definitions for react-i18next 1.7.0
// Project: https://github.com/i18next/react-i18next
// Definitions by: Kostya Esmukov <https://github.com/KostyaEsmukov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as I18next from "i18next";
import * as React from "react";

export type TranslationFunction = I18next.TranslationFunction;

// Extend your component's Prop interface with this one to get access to `this.props.t`
//
// Please note that if you use the `translateFuncName` option, you should create
// your own interface just like this one, but with your name of the translation function.
//
// interface MyComponentProps extends ReactI18next.InjectedTranslateProps {}
export interface InjectedTranslateProps {
    t?: TranslationFunction;
}

interface I18nextProviderProps {
    i18n: I18next.I18n;
    children?: React.ReactElement<any>;
}

export class I18nextProvider extends React.Component<I18nextProviderProps> { }


type InterpolateValue = string | JSX.Element;

interface InterpolateProps {
    i18nKey: string;

    parent?: string;
    regexp?: RegExp;
    options?: I18next.TranslationOptions;

    useDangerouslySetInnerHTML?: boolean;
    dangerouslySetInnerHTMLPartElement?: string;

    [regexKey: string]: InterpolateValue | RegExp | I18next.TranslationOptions | boolean | undefined;
}

export class Interpolate extends React.Component<InterpolateProps> { }

interface TranslateOptions {
    withRef?: boolean;
    wait?: boolean;
    translateFuncName?: string;
}

export function translate(namespaces?: string[] | string, options?: TranslateOptions): <C extends Function>(WrappedComponent: C) => C;

export function loadNamespaces({ components, i18n }: { components: (React.ComponentClass<any> | React.StatelessComponent<any>)[], i18n: I18next.I18n }): Promise<void>;

export as namespace ReactI18Next;
