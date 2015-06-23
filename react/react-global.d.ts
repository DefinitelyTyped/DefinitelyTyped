/// <reference path="react-jsx.d.ts" />

// Type definitions for React v0.13.1 (internal module)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module React {
    // Type re-imports from JSX
    export import ClassicComponent = JSX.React.ClassicComponent;
    export import ClassicComponentClass = JSX.React.ClassicComponentClass;
    export import ClassicElement = JSX.React.ClassicElement;
    export import ClassicFactory = JSX.React.ClassicFactory;
    export import Component = JSX.React.Component;
    export import ComponentClass = JSX.React.ComponentClass;
    export import ComponentSpec = JSX.React.ComponentSpec;
    export import DOMComponent = JSX.React.DOMComponent;
    export import DOMElement = JSX.React.DOMElement;
    export import DOMFactory = JSX.React.DOMFactory;
    export import Factory = JSX.React.Factory;
    export import ReactElement = JSX.React.ReactElement;
    export import ReactChild = JSX.React.ReactChild;
    export import ReactChildren = JSX.React.ReactChildren;
    export import ReactNode = JSX.React.ReactNode;
    export import ReactPropTypes = JSX.React.ReactPropTypes;
    export import Props = JSX.React.Props;
    export import HTMLFactory = JSX.React.HTMLFactory;
    export import SVGFactory = JSX.React.SVGFactory;

    export import SyntheticEvent = JSX.React.SyntheticEvent;
    export import DragEvent = JSX.React.DragEvent;
    export import ClipboardEvent = JSX.React.ClipboardEvent;
    export import KeyboardEvent = JSX.React.KeyboardEvent;
    export import FocusEvent = JSX.React.FocusEvent;
    export import FormEvent = JSX.React.FormEvent;
    export import MouseEvent = JSX.React.MouseEvent;
    export import TouchEvent = JSX.React.TouchEvent;
    export import UIEvent = JSX.React.UIEvent;
    export import WheelEvent = JSX.React.WheelEvent;

    //
    // Top Level API
    // ----------------------------------------------------------------------

    function createClass<P, S>(spec: ComponentSpec<P, S>): ClassicComponentClass<P>;

    function createFactory<P>(type: string): DOMFactory<P>;
    function createFactory<P>(type: ClassicComponentClass<P> | string): ClassicFactory<P>;
    function createFactory<P>(type: ComponentClass<P>): Factory<P>;

    function createElement<P>(
        type: string,
        props?: P,
        ...children: ReactNode[]): DOMElement<P>;
    function createElement<P>(
        type: ClassicComponentClass<P> | string,
        props?: P,
        ...children: ReactNode[]): ClassicElement<P>;
    function createElement<P>(
        type: ComponentClass<P>,
        props?: P,
        ...children: ReactNode[]): ReactElement<P>;

    function cloneElement<P>(
        element: DOMElement<P>,
        props?: P,
        ...children: ReactNode[]): DOMElement<P>;
    function cloneElement<P>(
        element: ClassicElement<P>,
        props?: P,
        ...children: ReactNode[]): ClassicElement<P>;
    function cloneElement<P>(
        element: ReactElement<P>,
        props?: P,
        ...children: ReactNode[]): ReactElement<P>;

    function render<P>(
        element: DOMElement<P>,
        container: Element,
        callback?: () => any): DOMComponent<P>;
    function render<P, S>(
        element: ClassicElement<P>,
        container: Element,
        callback?: () => any): ClassicComponent<P, S>;
    function render<P, S>(
        element: ReactElement<P>,
        container: Element,
        callback?: () => any): Component<P, S>;

    function unmountComponentAtNode(container: Element): boolean;
    function renderToString(element: ReactElement<any>): string;
    function renderToStaticMarkup(element: ReactElement<any>): string;
    function isValidElement(object: {}): boolean;
    function initializeTouchEvents(shouldUseTouch: boolean): void;

    function findDOMNode<TElement extends Element>(
        componentOrElement: Component<any, any> | Element): TElement;
    function findDOMNode(
        componentOrElement: Component<any, any> | Element): Element;

    var DOM: ReactDOM;
    var PropTypes: ReactPropTypes;
    var Children: ReactChildren;

    interface ChildContextProvider<CC> {
        getChildContext(): CC;
    }

    //
    // React.DOM
    // ----------------------------------------------------------------------

    interface ReactDOM {
        // HTML
        a: HTMLFactory;
        abbr: HTMLFactory;
        address: HTMLFactory;
        area: HTMLFactory;
        article: HTMLFactory;
        aside: HTMLFactory;
        audio: HTMLFactory;
        b: HTMLFactory;
        base: HTMLFactory;
        bdi: HTMLFactory;
        bdo: HTMLFactory;
        big: HTMLFactory;
        blockquote: HTMLFactory;
        body: HTMLFactory;
        br: HTMLFactory;
        button: HTMLFactory;
        canvas: HTMLFactory;
        caption: HTMLFactory;
        cite: HTMLFactory;
        code: HTMLFactory;
        col: HTMLFactory;
        colgroup: HTMLFactory;
        data: HTMLFactory;
        datalist: HTMLFactory;
        dd: HTMLFactory;
        del: HTMLFactory;
        details: HTMLFactory;
        dfn: HTMLFactory;
        dialog: HTMLFactory;
        div: HTMLFactory;
        dl: HTMLFactory;
        dt: HTMLFactory;
        em: HTMLFactory;
        embed: HTMLFactory;
        fieldset: HTMLFactory;
        figcaption: HTMLFactory;
        figure: HTMLFactory;
        footer: HTMLFactory;
        form: HTMLFactory;
        h1: HTMLFactory;
        h2: HTMLFactory;
        h3: HTMLFactory;
        h4: HTMLFactory;
        h5: HTMLFactory;
        h6: HTMLFactory;
        head: HTMLFactory;
        header: HTMLFactory;
        hr: HTMLFactory;
        html: HTMLFactory;
        i: HTMLFactory;
        iframe: HTMLFactory;
        img: HTMLFactory;
        input: HTMLFactory;
        ins: HTMLFactory;
        kbd: HTMLFactory;
        keygen: HTMLFactory;
        label: HTMLFactory;
        legend: HTMLFactory;
        li: HTMLFactory;
        link: HTMLFactory;
        main: HTMLFactory;
        map: HTMLFactory;
        mark: HTMLFactory;
        menu: HTMLFactory;
        menuitem: HTMLFactory;
        meta: HTMLFactory;
        meter: HTMLFactory;
        nav: HTMLFactory;
        noscript: HTMLFactory;
        object: HTMLFactory;
        ol: HTMLFactory;
        optgroup: HTMLFactory;
        option: HTMLFactory;
        output: HTMLFactory;
        p: HTMLFactory;
        param: HTMLFactory;
        picture: HTMLFactory;
        pre: HTMLFactory;
        progress: HTMLFactory;
        q: HTMLFactory;
        rp: HTMLFactory;
        rt: HTMLFactory;
        ruby: HTMLFactory;
        s: HTMLFactory;
        samp: HTMLFactory;
        script: HTMLFactory;
        section: HTMLFactory;
        select: HTMLFactory;
        small: HTMLFactory;
        source: HTMLFactory;
        span: HTMLFactory;
        strong: HTMLFactory;
        style: HTMLFactory;
        sub: HTMLFactory;
        summary: HTMLFactory;
        sup: HTMLFactory;
        table: HTMLFactory;
        tbody: HTMLFactory;
        td: HTMLFactory;
        textarea: HTMLFactory;
        tfoot: HTMLFactory;
        th: HTMLFactory;
        thead: HTMLFactory;
        time: HTMLFactory;
        title: HTMLFactory;
        tr: HTMLFactory;
        track: HTMLFactory;
        u: HTMLFactory;
        ul: HTMLFactory;
        "var": HTMLFactory;
        video: HTMLFactory;
        wbr: HTMLFactory;

        // SVG
        svg: HTMLFactory;

        circle: SVGFactory;
        defs: SVGFactory;
        ellipse: SVGFactory;
        g: SVGFactory;
        line: SVGFactory;
        linearGradient: SVGFactory;
        mask: SVGFactory;
        path: SVGFactory;
        pattern: SVGFactory;
        polygon: SVGFactory;
        polyline: SVGFactory;
        radialGradient: SVGFactory;
        rect: SVGFactory;
        stop: SVGFactory;
        text: SVGFactory;
        tspan: SVGFactory;
    }
}
