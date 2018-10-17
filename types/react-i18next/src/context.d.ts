import { i18n, TranslationFunction, ReactOptions } from "i18next";
import React = require('react');

export interface ReactI18NextOptions {
    wait?: boolean;
    withRef?: boolean;
    bindI18n?: string;
    bindStore?: string;
    /**
     * @deprecated This option is now ignored and the function name is always `t`
     */
    translateFuncName?: string;
    nsMode?: string;
    usePureComponent?: boolean;
    omitBoundRenderer?: boolean;
}

export function setDefaults(options: ReactI18NextOptions): void;

export function getDefaults(): ReactI18NextOptions;

export function setI18n(instance: i18n): void;

export function getI18n(): i18n;

export interface i18NextModule {
    type: string;

    init: (instance: i18n) => void;
}

export const reactI18nextModule: i18NextModule;

export interface ReactI18nContext {
    i18n: i18n;
    defaultNS?: string;
    reportNS?: string;
    lng: string;
    t: TranslationFunction;
}

export const I18nContext: React.Context<ReactI18nContext|undefined>;

// Diff / Omit taken from https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
type Omit<T, K extends keyof T> = Pick<T, ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never, [x: number]: never })[keyof T]>;

export type ContextInferableComponentEnhancerWithProps =
    <P extends { [key: string]: any }>(component: React.ComponentClass<P> | React.StatelessComponent<P>) =>
        React.ComponentClass<Omit<P, keyof ReactI18nContext> & React.ClassAttributes<never>>;

export function withContext(): ContextInferableComponentEnhancerWithProps;

export interface WithI18nProps {
    i18n: i18n;
    t: TranslationFunction;
    lng: string;
    i18nOptions: ReactOptions;
}

export interface WithI18nHocProps {
    i18nOptions?: ReactOptions;
}

type ComponentProps<T extends React.ComponentType<any>> =
    (T extends React.ComponentClass<infer P>
        ? P
        : T extends React.SFC<infer P>
            ? P
            : {}
    );

export type WithI18nInferableComponentEnhancerWithProps =
    <T extends React.ComponentType<any>>(component: T) =>
        React.ComponentClass<Omit<ComponentProps<T>, keyof WithI18nProps> & React.ClassAttributes<never> & WithI18nHocProps>;

export function withI18n(): WithI18nInferableComponentEnhancerWithProps;
