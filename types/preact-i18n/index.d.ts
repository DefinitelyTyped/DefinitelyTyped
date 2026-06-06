import { Component, ComponentChild, Context, h, JSX, VNode } from "preact";

interface IntlContext {
    intl: {
        definition: {};
        mark: boolean;
        scope: string;
    };
}

interface IntlProviderProps {
    children: JSX.Element | JSX.Element[];
    definition?: {} | undefined;
    mark?: boolean | undefined;
    scope?: string | undefined;
}

interface LocalizerProps {
    children: JSX.Element | JSX.Element[];
}
interface TextProps {
    children?: string | undefined;
    id: string;
    fields?: {} | undefined;
    plural?: number | undefined;
}

export const IntlContext: Context<IntlContext>;

export function IntlProvider(props: IntlProviderProps): JSX.Element;

export function Text(props: TextProps): JSX.Element;

export function MarkupText(props: TextProps): JSX.Element;

export function Localizer(props: LocalizerProps): JSX.Element;

export function translate(
    id: string,
    scope: string,
    dictionary: {},
    fields?: {},
    plural?: number,
    fallback?: string,
): string;

export function useText(
    mapping: { [key: string]: string | JSX.Element } | string | JSX.Element,
): { [key: string]: string };

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function withText<Props, Context = IntlContext>(mapping: {}): (
    Child: ComponentChild,
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
) => new(props?: Props, context?: Context) => any;

export function intl(Child: Component, options?: { scope?: string | undefined; definition?: {} | undefined }): VNode;

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
