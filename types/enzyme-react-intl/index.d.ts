// Type definitions for enzyme-react-intl 2.0
// Project: https://github.com/joetidee/enzyme-react-intl#readme
// Definitions by: Mateusz Meller <https://github.com/mateusz-meller>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { Component, ReactElement } from 'react';
import { ShallowRendererProps, MountRendererProps, ShallowWrapper, ReactWrapper } from 'enzyme';

// shallow methods

export function shallowWithIntl<C extends Component, P = C['props'], S = C['state']>(
    node: ReactElement<P>,
    options?: ShallowRendererProps,
): ShallowWrapper<P, S, C>; // tslint:disable-line no-unnecessary-generics
export function shallowWithIntl<P>(node: ReactElement<P>, options?: ShallowRendererProps): ShallowWrapper<P, any>;
// tslint:disable-next-line no-unnecessary-generics
export function shallowWithIntl<P, S>(node: ReactElement<P>, options?: ShallowRendererProps): ShallowWrapper<P, S>;

// mount methods

export function mountWithIntl<C extends Component, P = C['props'], S = C['state']>(
    node: ReactElement<P>,
    options?: MountRendererProps,
): ReactWrapper<P, S, C>; // tslint:disable-line no-unnecessary-generics
export function mountWithIntl<P>(node: ReactElement<P>, options?: MountRendererProps): ReactWrapper<P, any>;
// tslint:disable-next-line no-unnecessary-generics
export function mountWithIntl<P, S>(node: ReactElement<P>, options?: MountRendererProps): ReactWrapper<P, S>;

// render method

// tslint:disable-next-line no-unnecessary-generics
export function renderWithIntl<P, S>(node: ReactElement<P>, options?: any): cheerio.Cheerio;

// other methods

export function getLocale(): string;
export function setLocale(locale: string): void;
export function loadTranslation(translationFilePath: string): any;
