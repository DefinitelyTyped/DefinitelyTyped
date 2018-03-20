import * as React from "react";
import { i18n as I18n, TranslationFunction } from "i18next";
import { InjectedTranslateProps, InjectedI18nProps } from "./props";
import { setDefaults, setI18n } from "./context";

export interface TranslateOptions<TTranslateFuncName extends string = string> {
    withRef?: boolean;
    bindI18n?: string;
    bindStore?: string;
    translateFuncName?: TTranslateFuncName;
    wait?: boolean;
    nsMode?: string;
    i18n?: I18n;
}

export interface TranslateHocProps {
    i18n?: I18n;
    initialI18nStore?: object;
    initialLanguage?: string;
}

// Diff / Omit taken from https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
type Diff<T extends string, U extends string> = ({[P in T]: P } & {[P in U]: never } & { [x: string]: never })[T];
type Omit<T, K extends string> = Pick<T, Diff<keyof T, K>>;

type InjectedProps = InjectedI18nProps & InjectedTranslateProps;

export interface WrapperComponentClass<P = {}, PWrapped = {}> extends React.ComponentClass<P & TranslateHocProps> {
    new (props: P, context?: any): React.Component<P & TranslateHocProps, React.ComponentState> & { getWrappedInstance(): React.Component<PWrapped> };
}

// Injects props and removes them from the prop requirements.
// Adds the new properties t (or whatever the translation function is called) and i18n if needed.
export type InferableComponentEnhancerWithProps<TTranslateFunctionName extends string> =
    <P extends {}>(component: React.ComponentClass<P> | React.StatelessComponent<P>) =>
        React.ComponentClass<Omit<P, keyof InjectedI18nProps | TTranslateFunctionName> & TranslateHocProps>;

export type InferableComponentEnhancerWithPropsAndRef<TTranslateFunctionName extends string> =
    <P extends {}>(component: React.ComponentClass<P> | React.StatelessComponent<P>) =>
        WrapperComponentClass<Omit<P, keyof InjectedI18nProps | TTranslateFunctionName>, P>;

export interface Translate {
    <TNamespace extends string>
    (namespaces?: TNamespace | TNamespace[], options?: Omit<TranslateOptions, "translateFuncName"> & { withRef?: false }):
        InferableComponentEnhancerWithProps<"t">;

    <TNamespace extends string>
    (namespaces?: TNamespace | TNamespace[], options?: Omit<TranslateOptions, "translateFuncName"> & { withRef: true }):
        InferableComponentEnhancerWithPropsAndRef<"t">;

    <TNamespace extends string, TTranslateFunctionName extends string>
    (namespaces?: TNamespace | TNamespace[], options?: TranslateOptions<TTranslateFunctionName> & { withRef?: false }):
        InferableComponentEnhancerWithProps<TTranslateFunctionName>;

    <TNamespace extends string, TTranslateFunctionName extends string>
    (namespaces?: TNamespace | TNamespace[], options?: TranslateOptions<TTranslateFunctionName> & { withRef: true }):
        InferableComponentEnhancerWithPropsAndRef<TTranslateFunctionName>;

    setDefaults: typeof setDefaults;
    setI18n: typeof setI18n;
}

declare const translate: Translate;
export default translate;
