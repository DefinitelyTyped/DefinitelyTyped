import type * as React from "react";

import type { ReactElement, ReactHTML, ReactNode, ReactSVG, ReactSVGElement } from "react";

export = $;

type Children = ReactNode[] | number | string;

type HTMLElementType =
    | "a"
    | "abbr"
    | "address"
    | "area"
    | "article"
    | "aside"
    | "audio"
    | "b"
    | "base"
    | "bdi"
    | "bdo"
    | "big"
    | "blockquote"
    | "body"
    | "br"
    | "button"
    | "canvas"
    | "caption"
    | "center"
    | "cite"
    | "code"
    | "col"
    | "colgroup"
    | "data"
    | "datalist"
    | "dd"
    | "del"
    | "details"
    | "dfn"
    | "dialog"
    | "div"
    | "dl"
    | "dt"
    | "em"
    | "embed"
    | "fieldset"
    | "figcaption"
    | "figure"
    | "footer"
    | "form"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "head"
    | "header"
    | "hgroup"
    | "hr"
    | "html"
    | "i"
    | "iframe"
    | "img"
    | "input"
    | "ins"
    | "kbd"
    | "keygen"
    | "label"
    | "legend"
    | "li"
    | "link"
    | "main"
    | "map"
    | "mark"
    | "menu"
    | "menuitem"
    | "meta"
    | "meter"
    | "nav"
    | "noscript"
    | "object"
    | "ol"
    | "optgroup"
    | "option"
    | "output"
    | "p"
    | "param"
    | "picture"
    | "pre"
    | "progress"
    | "q"
    | "rp"
    | "rt"
    | "ruby"
    | "s"
    | "samp"
    | "search"
    | "slot"
    | "script"
    | "section"
    | "select"
    | "small"
    | "source"
    | "span"
    | "strong"
    | "style"
    | "sub"
    | "summary"
    | "sup"
    | "table"
    | "template"
    | "tbody"
    | "td"
    | "textarea"
    | "tfoot"
    | "th"
    | "thead"
    | "time"
    | "title"
    | "tr"
    | "track"
    | "u"
    | "ul"
    | "var"
    | "video"
    | "wbr"
    | "webview";

declare function $(
    children?: Children,
): ReactElement;

// dom elements without attributes

declare function $(
    tag: "input",
    children?: Children,
): React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

declare function $<T extends HTMLElement>(
    tag: HTMLElementType,
    children?: Children,
): React.DetailedReactHTMLElement<React.HTMLAttributes<T>, T>;

declare function $(
    tag: keyof ReactSVG,
    children?: Children,
): ReactSVGElement;

declare function $<T extends Element>(
    tag: string,
    children?: Children,
): React.DOMElement<React.DOMAttributes<T>, T>;

// dom elements with attributes

declare function $(
    tag: "input",
    attributes?: React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>,
    children?: Children,
): React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

declare function $<T extends HTMLElement, P extends React.HTMLAttributes<T>>(
    tag: HTMLElementType,
    attributes?: React.ClassAttributes<T> & P,
    children?: Children,
): React.DetailedReactHTMLElement<P, T>;

declare function $<T extends SVGElement>(
    tag: keyof ReactSVG,
    attributes?: React.ClassAttributes<T> & React.SVGAttributes<T>,
    children?: Children,
): ReactSVGElement;

declare function $<T extends Element, P extends React.DOMAttributes<T>>(
    tag: string,
    attributes?: React.ClassAttributes<T> & P,
    children?: Children,
): React.DOMElement<P, T>;

// react components without props

declare function $<P extends {}>(
    component: React.FunctionComponent<P>,
    children?: Children,
): React.FunctionComponentElement<P>;

declare function $<P extends {}>(
    component: React.ClassType<P, React.ClassicComponent<P, React.ComponentState>, React.ClassicComponentClass<P>>,
    children?: Children,
): React.ComponentElement<P, React.ClassicComponent<P, React.ComponentState>>;

declare function $<P extends {}, T extends React.Component<P, React.ComponentState>>(
    component: React.ClassType<P, T, React.ComponentClass<P>>,
    children?: Children,
): React.ComponentElement<P, T>;

declare function $<P extends {}>(
    component: React.FunctionComponent<P> | React.ComponentClass<P> | string,
    children?: Children,
): ReactElement<P>;

// react components with props

declare function $<P extends {}>(
    component: React.FunctionComponent<P>,
    props?: P & React.Attributes,
    children?: Children,
): React.FunctionComponentElement<P>;

declare function $<P extends {}>(
    component: React.ClassType<P, React.ClassicComponent<P, React.ComponentState>, React.ClassicComponentClass<P>>,
    props?: P & React.ClassAttributes<React.ClassicComponent<P, React.ComponentState>>,
    children?: Children,
): React.ComponentElement<P, React.ClassicComponent<P, React.ComponentState>>;

declare function $<P extends {}, T extends React.Component<P, React.ComponentState>>(
    component: React.ClassType<P, T, React.ComponentClass<P>>,
    props?: P & React.ClassAttributes<T>,
    children?: Children,
): React.ComponentElement<P, T>;

declare function $<P extends {}>(
    component: React.FunctionComponent<P> | React.ComponentClass<P> | string,
    props?: P & React.Attributes,
    children?: Children,
): ReactElement<P>;
