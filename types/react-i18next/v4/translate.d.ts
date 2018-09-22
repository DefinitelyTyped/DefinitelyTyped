import * as React from "react";
import { i18n } from "i18next";
import { InjectedTranslateProps } from "react-i18next";

export interface TranslateOptions {
    withRef?: boolean;
    bindI18n?: string;
    bindStore?: string;
    translateFuncName?: string;
    wait?: boolean;
    nsMode?: string;
    i18n?: i18n;
}

// Diff / Omit taken from https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
export type Omit<T, K extends keyof T> = Pick<T, ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never, [x: number]: never })[keyof T]>;

// Injects props and removes them from the prop requirements.
// Adds the new properties t (or whatever the translation function is called) and i18n if needed.
export type InferableComponentEnhancerWithProps<TTranslateFunctionName extends string> =
    <P extends { [key: string]: any }>(component: React.ComponentClass<P> | React.StatelessComponent<P>) =>
        React.ComponentClass<Omit<P, keyof InjectedTranslateProps | TTranslateFunctionName>>;

// tslint:disable-next-line:ban-types
export default function translate<TKey extends string = string>(namespaces?: TKey[] | TKey, options?: TranslateOptions): InferableComponentEnhancerWithProps<"t">;
