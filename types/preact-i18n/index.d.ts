// Type definitions for preact-i18n 2.3
// Project: https://github.com/synacor/preact-i18n
// Definitions by:  Lukas Tetzlaff <https://github.com/ltetzlaff>
//                  Sascha Zarhuber <https://github.com/saschazar21>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { h, Component, Context, VNode, ComponentChild } from 'preact';

interface IntlContext {
    intl: {
        definition: {};
        mark: boolean;
        scope: string;
    };
}

interface IntlProviderProps {
    definition?: {};
    mark?: boolean;
    scope?: string;
}

interface LocalizerProps {
    context?: IntlContext;
}
interface TextProps {
    id: string;
    fields?: {};
    plural?: number;
}

interface MarkupTextProps extends TextProps {
    context?: IntlContext;
}

export const IntlContext: Context<IntlContext>;

export function IntlProvider(props: IntlProviderProps): Component;

export function Text(props: TextProps): Component;

export function MarkupText(props: MarkupTextProps): Component;

export function Localizer(props: LocalizerProps): Component;

export function translate(
    id: string,
    scope: string,
    dictionary: {},
    fields?: {},
    plural?: number,
    fallback?: string,
): string;

export function useText(mapping: { [key: string]: string | Component } | string | Component): { [key: string]: string };

// tslint:disable-next-line:no-unnecessary-generics
export function withText<Props, Context = IntlContext>(mapping: {}): (
    Child: ComponentChild,
// tslint:disable-next-line:no-unnecessary-generics
) => new (props?: Props, context?: Context) => any;

export function intl(Child: Component, options?: { scope?: string; definition?: {} }): VNode;

declare enum Intl {
    intl,
    IntlContext,
    IntlProvider,
    Text,
    MarkupText,
    Localizer,
    withText,
    useText,
    translate,
}

export default Intl;
