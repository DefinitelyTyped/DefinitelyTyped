import * as React from "react";
import { i18n as I18n, TranslationFunction } from "i18next";
import { InjectedTranslateProps, InjectedI18nProps } from "./props";
import { setDefaults, setI18n } from "./context";

export interface TranslateOptions<TTranslateFuncName extends string = string> {
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
type Omit<T, K extends keyof T> = Pick<T, ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never, [x: number]: never })[keyof T]>;

type InjectedProps = InjectedI18nProps & InjectedTranslateProps;

type ComponentPropsWithInnerRef<T extends React.ComponentType<any>> =
    (T extends React.ComponentClass<infer P>
        ? P & { innerRef?: React.Ref<InstanceType<T>> }
        : T extends React.SFC<infer P>
            ? P
            : {}
    );

export type WrapperComponentClass<T extends React.ComponentType<any>> =
    React.ComponentClass<
        Omit<ComponentPropsWithInnerRef<T>, keyof InjectedProps> &
        React.ClassAttributes<never> &
        TranslateHocProps
    >;

// Injects props and removes them from the prop requirements.
// Adds the new properties t (or whatever the translation function is called) and i18n if needed.
export type InferableComponentEnhancerWithProps =
    <T extends React.ComponentType<any>>(component: T) => WrapperComponentClass<T>;

export interface WithNamespaces {
    <TNamespace extends string>
    (namespaces: TNamespace | TNamespace[] | undefined, options?: Omit<TranslateOptions, "translateFuncName">):
        InferableComponentEnhancerWithProps;

    setDefaults: typeof setDefaults;
    setI18n: typeof setI18n;
}

export let withNamespaces: WithNamespaces;
/**
 * @deprecated translate was renamed to "withNamespaces" to make it more clear what the HOC does.
 */
export let translate: typeof withNamespaces;
