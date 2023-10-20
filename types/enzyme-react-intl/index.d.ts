import { MountRendererProps, ReactWrapper, ShallowRendererProps, ShallowWrapper } from "enzyme";
import { Component, ReactElement } from "react";
import { IntlProvider } from "react-intl";

// shallow methods

export function shallowWithIntl<C extends Component, P = C["props"], S = C["state"]>(
    node: ReactElement<P>,
    options?: ShallowRendererProps,
): ShallowWrapper<P, S, C>; // eslint-disable-line @definitelytyped/no-unnecessary-generics
export function shallowWithIntl<P>(node: ReactElement<P>, options?: ShallowRendererProps): ShallowWrapper<P, any>;
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function shallowWithIntl<P, S>(node: ReactElement<P>, options?: ShallowRendererProps): ShallowWrapper<P, S>;

// mount methods

export function mountWithIntl<C extends Component, P = C["props"], S = C["state"]>(
    node: ReactElement<P>,
    options?: MountRendererProps,
): ReactWrapper<P, S, C>; // eslint-disable-line @definitelytyped/no-unnecessary-generics
export function mountWithIntl<P>(node: ReactElement<P>, options?: MountRendererProps): ReactWrapper<P, any>;
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function mountWithIntl<P, S>(node: ReactElement<P>, options?: MountRendererProps): ReactWrapper<P, S>;

// render method

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function renderWithIntl<P, S>(node: ReactElement<P>, options?: any): cheerio.Cheerio;

// other methods

export function getIntl(): IntlProvider;
export function getLocale(): string;
export function setLocale(locale: string): void;
export function loadTranslation(translationFilePath: string): any;
export function loadTranslationObject<T extends { [key: string]: string }>(translations: T): T;
