// Type definitions for react-hyperscript 3.0
// Project: https://github.com/mlmorg/react-hyperscript
// Definitions by: roshal <https://github.com/roshal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

import type {
    Attributes,
    ClassAttributes,
    ClassType,
    ClassicComponent,
    ClassicComponentClass,
    Component,
    ComponentClass,
    ComponentElement,
    ComponentState,
    DOMAttributes,
    DOMElement,
    DetailedReactHTMLElement,
    FunctionComponent,
    FunctionComponentElement,
    HTMLAttributes,
    InputHTMLAttributes,
    PropsWithChildren,
    ReactElement,
    ReactHTML,
    ReactNode,
    ReactSVG,
    ReactSVGElement,
    SVGAttributes,
} from 'react';

declare namespace $ {}

type Children = ReactNode | ReactNode[];

export = $;

declare function $(
    children?: Children,
): ReactElement;

// dom elements without attributes

declare function $(
    tag: 'input',
    children?: Children,
): DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

declare function $<T extends HTMLElement>(
    tag: keyof ReactHTML,
    children?: Children,
): DetailedReactHTMLElement<HTMLAttributes<T>, T>;

declare function $(
    tag: keyof ReactSVG,
    children?: Children,
): ReactSVGElement;

declare function $<T extends Element>(
    tag: string,
    children?: Children,
): DOMElement<DOMAttributes<T>, T>;

// dom elements with attributes

declare function $(
    tag: 'input',
    attributes?: null | InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>,
    children?: Children,
): DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

declare function $<P extends HTMLAttributes<T>, T extends HTMLElement>(
    tag: keyof ReactHTML,
    attributes?: null | ClassAttributes<T> & P,
    children?: Children,
): DetailedReactHTMLElement<P, T>;

declare function $<T extends SVGElement>(
    tag: keyof ReactSVG,
    attributes?: null | ClassAttributes<T> & SVGAttributes<T>,
    children?: Children,
): ReactSVGElement;

declare function $<P extends DOMAttributes<T>, T extends Element>(
    tag: string,
    attributes?: null | ClassAttributes<T> & P,
    children?: Children,
): DOMElement<P, T>;

// react components without props

declare function $<P extends {}>(
    component: FunctionComponent<P>,
    children?: Children,
): FunctionComponentElement<P>;

declare function $<P extends {}>(
    component: ClassType<P, ClassicComponent<P, ComponentState>, ClassicComponentClass<P>>,
    children?: Children,
): ComponentElement<P, ClassicComponent<P, ComponentState>>;

declare function $<P extends {}, T extends Component<P, ComponentState>>(
    component: ClassType<P, T, ComponentClass<P>>,
    children?: Children,
): ComponentElement<P, T>;

declare function $<P extends {}>(
    component: FunctionComponent<P> | string | ComponentClass<P>,
    children?: Children,
): ReactElement<P>;

// react components with props

declare function $<P extends {}>(
    component: FunctionComponent<P>,
    props?: Attributes,
    children?: Children,
): FunctionComponentElement<P>;

declare function $<P extends {}>(
    component: ClassType<P, ClassicComponent<P, ComponentState>, ClassicComponentClass<P>>,
    props?: null | ClassAttributes<ClassicComponent<P, ComponentState>> & P,
    children?: Children,
): ComponentElement<P, ClassicComponent<P, ComponentState>>;

declare function $<P extends {}, T extends Component<P, ComponentState>>(
    component: ClassType<P, T, ComponentClass<P>>,
    props?: null | ClassAttributes<T> & P,
    children?: Children,
): ComponentElement<P, T>;

declare function $<P extends {}>(
    component: FunctionComponent<P> | string | ComponentClass<P>,
    props?: null | Attributes & P,
    children?: Children,
): ReactElement<P>;

// others

declare function $<P extends {}, R = P extends PropsWithChildren<infer T> ? T : P>(
    component: FunctionComponent<P> | string | ComponentClass<P>,
    props: null | Attributes & R,
    children: Children,
): ReactElement<R>;
