// Type definitions for React 0.12.1
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "react" {
    var exports: React.ModuleExports;
    export = exports;
}

declare module "react/addons" {
    var exports: React.ModuleWithAddonsExports;
    export = exports;
}

declare module "react/lib/cloneWithProps" {
    interface exports<P> extends React.CloneWithProps<P> {}
    export = exports;
}

declare module "react/lib/cx" {
    var exports: React.ClassSet;
    export = exports;
}

declare module "react/lib/LinkedStateMixin" {
    interface exports<P, S> extends React.LinkedStateMixin<P, S> {}
    export = exports;
}

declare module "react/lib/ReactComponentWithPureRenderMixin" {
    var exports: React.PureRenderMixin;
    export = exports;
}

declare module "react/lib/ReactCSSTransitionGroup" {
    var exports: React.CSSTransitionGroup;
    export = exports;
}


declare module "react/lib/ReactDefaultPerf" {
    var exports: React.Perf;
    export = exports;
}

declare module "react/lib/ReactTestUtils" {
    var exports: React.TestUtils;
    export = exports;
}

declare module "react/lib/ReactTransitionGroup" {
    var exports: React.TransitionGroup;
    export = exports;
}

declare module "react/lib/update" {
    var exports: React.Update;
    export = exports;
}

declare module React {
    export interface ModuleExports {
        createClass<P, S>(specification: Specification<P, S>): ReactComponentFactory<P>;
        createFactory<P>(clazz: ReactComponentFactory<P>): ReactComponentFactory<P>;
        createElement<P>(clazz: ReactComponentFactory<P>, props: P, ...children: any[]): ReactComponentElement<P>;
        createElement(type: string, props: DomAttributes, ...children: any[]): ReactHTMLElement;
        createElement(type: string, props: SvgAttributes, ...children: any[]): ReactSVGElement;
        render<P>(component: ReactComponentElement<P>, container: Element, callback?: () => void): Component<P, {}>;
        render(component: ReactHTMLElement, container: Element, callback?: () => void): ReactHTMLElement;
        render(component: ReactSVGElement, container: Element, callback?: () => void): ReactSVGElement;
        unmountComponentAtNode(container: Element): boolean;
        renderToString<P>(component: ReactComponentElement<P>): string;
        renderToString(component: ReactHTMLElement): string;
        renderToString(component: ReactSVGElement): string;
        renderToStaticMarkup<P>(component: ReactComponentElement<P>): string;
        renderToStaticMarkup(component: ReactHTMLElement): string;
        renderToStaticMarkup(component: ReactSVGElement): string;
        isValidClass(factory: ReactComponentFactory<any>): boolean;
        isValidElement(component: ReactComponentElement<any>): boolean;
        isValidElement(component: ReactHTMLElement): boolean;
        isValidElement(component: ReactSVGElement): boolean;
        initializeTouchEvents(shouldUseTouch: boolean): void;
        DOM: DomConstructors;
        Children: Children;
        PropTypes: PropTypes;
    }

    export interface ReactComponentFactory<P> {
        (properties?: P, ...children: any[]): ReactComponentElement<P>;
    }

    export interface ReactElementFactory<P> {
        (properties?: P, ...children: any[]): ReactDOMElement<P>;
    }

    export interface DomElement extends ReactElementFactory<DomAttributes> {
    }

    export interface SvgElement extends ReactElementFactory<SvgAttributes> {
    }

    export interface ReactClass<P> {
        (props: P): ReactComponent<P>;
    }

    export interface ReactComponent<P> {
        props: P;
        render(): ReactElement<any, any>;
    }

    export interface ReactElement<T, P> {
        type: T;
        props: P;
        key: string;
        ref: string;
    }

    export interface ReactDOMElement<P> extends ReactElement<string, P> {
        props: P;
    }

    export interface ReactHTMLElement extends ReactDOMElement<DomAttributes> {
    }

    export interface ReactSVGElement extends ReactDOMElement<SvgAttributes> {
    }

    export interface ReactComponentElement<P> extends ReactElement<ReactClass<P>, P> {
        props: P;
    }

    export interface Mixin<P, S> {
        componentWillMount?(): void;
        componentDidMount?(): void;
        componentWillReceiveProps?(nextProps: P): void;
        shouldComponentUpdate?(nextProps: P, nextState: S): boolean;
        componentWillUpdate?(nextProps: P, nextState: S): void;
        componentDidUpdate?(prevProps: P, prevState: S): void;
        componentWillUnmount?(): void;
    }

    export interface Specification<P, S> extends Mixin<P, S> {
        displayName?: string;
        mixins?: Mixin<P, S>[];
        statics?: {
            [key: string]: Function;
        };
        propTypes?: ValidationMap<P>;
        getDefaultProps?(): P;
        getInitialState?(): S;
        render(): ReactElement<any, any>;
    }

    export interface DomReferencer {
        getDOMNode(): Element;
        /**
        * Use this overload to cast the returned element to a more specific type.
        * Eg: var name = this.refs['name'].getDOMNode<HTMLInputElement>().value
        */
        getDOMNode<TElement extends Element>(): TElement;
    }

    export interface Component<P, S> extends DomReferencer {
        refs: {
            [key: string]: DomReferencer
        };
        props: P;
        state: S;
        setState(nextState: S, callback?: () => void): void;
        replaceState(nextState: S, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        isMounted(): boolean;
        setProps(nextProps: P, callback?: () => void): void;
        replaceProps(nextProps: P, callback?: () => void): void;
    }

    export interface Constructable {
        new(): any;
    }

    export interface Validator<P> {
        (props: P, propName: string, componentName: string): Error;
    }

    export interface Requireable<P> extends Validator<P> {
        isRequired: Validator<P>;
    }

    export interface ValidationMap<P> {
        [key: string]: Validator<P>;
    }

    export interface PropTypes {
        any: Requireable<any>;
        array: Requireable<any>;
        bool: Requireable<any>;
        func: Requireable<any>;
        number: Requireable<any>;
        object: Requireable<any>;
        string: Requireable<any>;
        node: Requireable<any>;
        component: Requireable<any>;
        instanceOf: (clazz: Constructable) => Requireable<any>;
        oneOf: (types: any[]) => Requireable<any>
        oneOfType: (types: Validator<any>[]) => Requireable<any>;
        arrayOf: (type: Validator<any>) => Requireable<any>;
        objectOf: (type: Validator<any>) => Requireable<any>;
        shape: (type: ValidationMap<any>) => Requireable<any>;
    }

    export interface Children {
        map(children: any[], fn: (child: any) => any): any[];
        forEach(children: any[], fn: (child: any) => any): void;
        count(children: any[]): number;
        only(children: any[]): any;
    }

    // Browser Interfaces
    // Taken from https://github.com/nikeee/2048-typescript/blob/master/2048/js/touch.d.ts
    export interface AbstractView {
        styleMedia: StyleMedia;
        document: Document;
    }

    export interface Touch {
        identifier: number;
        target: EventTarget;
        screenX: number;
        screenY: number;
        clientX: number;
        clientY: number;
        pageX: number;
        pageY: number;
    }

    export interface TouchList {
        [index: number]: Touch;
        length: number;
        item(index: number): Touch;
        identifiedTouch(identifier: number): Touch;
    }

    // Events
    export interface SyntheticEvent {
        bubbles: boolean;
        cancelable: boolean;
        currentTarget: EventTarget;
        defaultPrevented: boolean;
        eventPhase: number;
        nativeEvent: Event;
        preventDefault(): void;
        stopPropagation(): void;
        target: EventTarget;
        timeStamp: Date;
        type: string;
    }

    export interface ClipboardEvent extends SyntheticEvent {
        clipboardData: DataTransfer;
    }

    export interface KeyboardEvent extends SyntheticEvent {
        altKey: boolean;
        charCode: number;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        key: string;
        keyCode: number;
        locale: string;
        location: number;
        metaKey: boolean;
        repeat: boolean;
        shiftKey: boolean;
        which: number;
    }

    export interface FocusEvent extends SyntheticEvent {
        relatedTarget: EventTarget;
    }

    export interface MouseEvent extends SyntheticEvent {
        altKey: boolean;
        button: number;
        buttons: number;
        clientX: number;
        clientY: number;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        metaKey: boolean;
        pageX: number;
        pageY: number;
        relatedTarget: EventTarget;
        screenX: number;
        screenY: number;
        shiftKey: boolean;
    }

    export interface TouchEvent extends SyntheticEvent {
        altKey: boolean;
        changedTouches: TouchList;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        metaKey: boolean;
        shiftKey: boolean;
        targetTouches: TouchList;
        touches: TouchList;
    }

    export interface UiEvent extends SyntheticEvent {
        detail: number;
        view: AbstractView;
    }

    export interface WheelEvent extends SyntheticEvent {
        deltaMode: number;
        deltaX: number;
        deltaY: number;
        deltaZ: number;
    }

    // Attributes
    export interface EventAttributes {
        onCopy?: (event: ClipboardEvent) => void;
        onCut?: (event: ClipboardEvent) => void;
        onPaste?: (event: ClipboardEvent) => void;
        onKeyDown?: (event: KeyboardEvent) => void;
        onKeyPress?: (event: KeyboardEvent) => void;
        onKeyUp?: (event: KeyboardEvent) => void;
        onFocus?: (event: FocusEvent) => void;
        onBlur?: (event: FocusEvent) => void;
        onChange?: (event: SyntheticEvent) => void;
        onInput?: (event: SyntheticEvent) => void;
        onSubmit?: (event: SyntheticEvent) => void;
        onClick?: (event: MouseEvent) => void;
        onDoubleClick?: (event: MouseEvent) => void;
        onDrag?: (event: MouseEvent) => void;
        onDragEnd?: (event: MouseEvent) => void;
        onDragEnter?: (event: MouseEvent) => void;
        onDragExit?: (event: MouseEvent) => void;
        onDragLeave?: (event: MouseEvent) => void;
        onDragOver?: (event: MouseEvent) => void;
        onDragStart?: (event: MouseEvent) => void;
        onDrop?: (event: MouseEvent) => void;
        onMouseDown?: (event: MouseEvent) => void;
        onMouseEnter?: (event: MouseEvent) => void;
        onMouseLeave?: (event: MouseEvent) => void;
        onMouseMove?: (event: MouseEvent) => void;
        onMouseOut?: (event: MouseEvent) => void;
        onMouseOver?: (event: MouseEvent) => void;
        onMouseUp?: (event: MouseEvent) => void;
        onTouchCancel?: (event: TouchEvent) => void;
        onTouchEnd?: (event: TouchEvent) => void;
        onTouchMove?: (event: TouchEvent) => void;
        onTouchStart?: (event: TouchEvent) => void;
        onScroll?: (event: UiEvent) => void;
        onWheel?: (event: WheelEvent) => void;
    }

    export interface ReactAttributes {
        dangerouslySetInnerHTML?: {
            __html: string;
        };
        children?: any[];
        key?: string;
        ref?: string;
    }

    export interface DomAttributes extends EventAttributes, ReactAttributes {
        // HTML Attributes
        accept?: any;
        accessKey?: any;
        action?: any;
        allowFullScreen?: any;
        allowTransparency?: any;
        alt?: any;
        async?: any;
        autoCapitalize?: any;
        autoComplete?: any;
        autoCorrect?: any;
        autoFocus?: any;
        autoPlay?: any;
        cellPadding?: any;
        cellSpacing?: any;
        charSet?: any;
        checked?: any;
        className?: any;
        cols?: any;
        colSpan?: any;
        content?: any;
        contentEditable?: any;
        contextMenu?: any;
        controls?: any;
        coords?: any;
        crossOrigin?: any;
        data?: any;
        dateTime?: any;
        defer?: any;
        dir?: any;
        disabled?: any;
        download?: any;
        draggable?: any;
        encType?: any;
        form?: any;
        formNoValidate?: any;
        frameBorder?: any;
        height?: any;
        hidden?: any;
        href?: any;
        hrefLang?: any;
        htmlFor?: any;
        httpEquiv?: any;
        icon?: any;
        id?: any;
        itemProp?: any;
        itemScope?: any;
        itemType?: any;
        label?: any;
        lang?: any;
        list?: any;
        loop?: any;
        max?: any;
        maxLength?: any;
        mediaGroup?: any;
        method?: any;
        min?: any;
        multiple?: any;
        muted?: any;
        name?: any;
        noValidate?: any;
        open?: any;
        pattern?: any;
        placeholder?: any;
        poster?: any;
        preload?: any;
        property?: any;
        radioGroup?: any;
        readOnly?: any;
        rel?: any;
        required?: any;
        role?: any;
        rows?: any;
        rowSpan?: any;
        sandbox?: any;
        scope?: any;
        scrollLeft?: any;
        scrolling?: any;
        scrollTop?: any;
        seamless?: any;
        selected?: any;
        shape?: any;
        size?: any;
        span?: any;
        spellCheck?: any;
        src?: any;
        srcDoc?: any;
        srcSet?: any;
        start?: any;
        step?: any;
        style?: any;
        tabIndex?: any;
        target?: any;
        title?: any;
        type?: any;
        useMap?: any;
        value?: any;
        width?: any;
        wmode?: any;
    }

    export interface SvgAttributes extends EventAttributes, ReactAttributes {
        cx?: any;
        cy?: any;
        d?: any;
        dx?: any;
        dy?: any;
        fill?: any;
        fillOpacity?: any;
        fontFamily?: any;
        fontSize?: any;
        fx?: any;
        fy?: any;
        gradientTransform?: any;
        gradientUnits?: any;
        markerEnd?: any;
        markerMid?: any;
        markerStart?: any;
        offset?: any;
        opacity?: any;
        patternContentUnits?: any;
        patternUnits?: any;
        points?: any;
        preserveAspectRatio?: any;
        r?: any;
        rx?: any;
        ry?: any;
        spreadMethod?: any;
        stopColor?: any;
        stopOpacity?: any;
        stroke?: any;
        strokeDasharray?: any;
        strokeLinecap?: any;
        strokeOpacity?: any;
        strokeWidth?: any;
        textAnchor?: any;
        transform?: any;
        version?: any;
        viewBox?: any;
        x1?: any;
        x2?: any;
        x?: any;
        y1?: any;
        y2?: any;
        y?: any;
    }

    export interface DomConstructors {
        // HTML
        a: DomElement;
        abbr: DomElement;
        address: DomElement;
        area: DomElement;
        article: DomElement;
        aside: DomElement;
        audio: DomElement;
        b: DomElement;
        base: DomElement;
        bdi: DomElement;
        bdo: DomElement;
        big: DomElement;
        blockquote: DomElement;
        body: DomElement;
        br: DomElement;
        button: DomElement;
        canvas: DomElement;
        caption: DomElement;
        cite: DomElement;
        code: DomElement;
        col: DomElement;
        colgroup: DomElement;
        data: DomElement;
        datalist: DomElement;
        dd: DomElement;
        del: DomElement;
        details: DomElement;
        dfn: DomElement;
        dialog: DomElement;
        div: DomElement;
        dl: DomElement;
        dt: DomElement;
        em: DomElement;
        embed: DomElement;
        fieldset: DomElement;
        figcaption: DomElement;
        figure: DomElement;
        footer: DomElement;
        form: DomElement;
        h1: DomElement;
        h2: DomElement;
        h3: DomElement;
        h4: DomElement;
        h5: DomElement;
        h6: DomElement;
        head: DomElement;
        header: DomElement;
        hr: DomElement;
        html: DomElement;
        i: DomElement;
        iframe: DomElement;
        img: DomElement;
        input: DomElement;
        ins: DomElement;
        kbd: DomElement;
        keygen: DomElement;
        label: DomElement;
        legend: DomElement;
        li: DomElement;
        link: DomElement;
        main: DomElement;
        map: DomElement;
        mark: DomElement;
        menu: DomElement;
        menuitem: DomElement;
        meta: DomElement;
        meter: DomElement;
        nav: DomElement;
        noscript: DomElement;
        object: DomElement;
        ol: DomElement;
        optgroup: DomElement;
        option: DomElement;
        output: DomElement;
        p: DomElement;
        param: DomElement;
        pre: DomElement;
        progress: DomElement;
        q: DomElement;
        rp: DomElement;
        rt: DomElement;
        ruby: DomElement;
        s: DomElement;
        samp: DomElement;
        script: DomElement;
        section: DomElement;
        select: DomElement;
        small: DomElement;
        source: DomElement;
        span: DomElement;
        strong: DomElement;
        style: DomElement;
        sub: DomElement;
        summary: DomElement;
        sup: DomElement;
        table: DomElement;
        tbody: DomElement;
        td: DomElement;
        textarea: DomElement;
        tfoot: DomElement;
        th: DomElement;
        thead: DomElement;
        time: DomElement;
        title: DomElement;
        tr: DomElement;
        track: DomElement;
        u: DomElement;
        ul: DomElement;
        "var": DomElement;
        video: DomElement;
        wbr: DomElement;
        // SVG
        circle: SvgElement;
        defs: SvgElement;
        ellipse: SvgElement;
        g: SvgElement;
        line: SvgElement;
        linearGradient: SvgElement;
        mask: SvgElement;
        path: SvgElement;
        pattern: SvgElement;
        polygon: SvgElement;
        polyline: SvgElement;
        radialGradient: SvgElement;
        rect: SvgElement;
        stop: SvgElement;
        svg: SvgElement;
        text: SvgElement;
        tspan: SvgElement;
    }

    // Addons
    export interface ModuleWithAddonsExports extends ModuleExports {
        addons: ReactAddons;
    }

    export interface ReactAddons {
        cloneWithProps<P>(instance: React.ReactComponentElement<P>, extraProps?: P): React.ReactComponentElement<P>;
        classSet: ClassSet;
        LinkedStateMixin: LinkedStateMixin<any, any>;
        PureRenderMixin: PureRenderMixin;
        CSSTransitionGroup: CSSTransitionGroup;
        Perf: Perf;
        TestUtils: TestUtils;
        TransitionGroup: TransitionGroup;
        update: Update;
    }

    export interface CloneWithProps<P> {
        (instance: React.ReactComponentElement<P>, extraProps?: P): React.ReactComponentElement<P>;
    }

    export interface ClassSet {
        (classes: {[key: string]: boolean}): string
    }

    export interface ReactLink<T> {
        value: T;
        requestChange(newValue: T): void;
    }

    export interface LinkedStateMixin<P, S> extends React.Mixin<P, S> {
        linkState<T>(key: string): ReactLink<T>;
    }

    export interface PureRenderMixin extends React.Mixin<any, any> {}

    export interface CSSTransitionGroup extends React.ReactComponentFactory<{
        transitionName: string;
    }> {}

    export interface ComponentPerfContext {
        current: string;
        owner: string;
    }

    export interface NumericPerfContext {
        [key: string]: number;
    }

    export interface Measurements {
        exclusive: NumericPerfContext;
        inclusive: NumericPerfContext;
        render: NumericPerfContext;
        counts: NumericPerfContext;
        writes: NumericPerfContext;
        displayNames: {
            [key: string]: ComponentPerfContext;
        };
        totalTime: number;
    }

    export interface Perf {
        start(): void;
        stop(): void;
        printInclusive(measurements: Measurements[]): void;
        printExclusive(measurements: Measurements[]): void;
        printWasted(measurements: Measurements[]): void;
        printDOM(measurements: Measurements[]): void;
        getLastMeasurements(): Measurements[];
    }

    export interface TestUtils {
        Simulate: Simulate;
        renderIntoDocument<P>(instance: ReactComponentElement<P>): ReactComponentElement<P>;
        renderIntoDocument(instance: ReactHTMLElement): ReactHTMLElement;
        renderIntoDocument(instance: ReactSVGElement): ReactSVGElement;
        mockComponent(componentClass: ReactComponentFactory<any>, mockTagName?: string): TestUtils;
        isDescriptorOfType(descriptor: ReactElement<any, any>, componentClass: ReactComponentFactory<any>): boolean;
        isDOMComponent(instance: ReactElement<any, any>): boolean;
        isCompositeComponent(instance: ReactElement<any, any>): boolean;
        isCompositeComponentWithType(instance: ReactElement<any, any>, componentClass: ReactComponentFactory<any>): boolean;
        isTextComponent(instance: ReactElement<any, any>): boolean;
        findAllInRenderedTree(tree: ReactElement<any, any>, test: (component: ReactElement<any, any>) => boolean): ReactElement<any, any>[];
        scryRenderedDOMComponentsWithClass(tree: ReactElement<any, any>, className: string): ReactElement<any, any>[];
        findRenderedDOMComponentWithClass(tree: ReactElement<any, any>, className: string): ReactElement<any, any>;
        scryRenderedDOMComponentsWithTag(tree: ReactElement<any, any>, tagName: string): ReactElement<any, any>[];
        findRenderedDOMComponentWithTag(tree: ReactElement<any, any>, tagName: string): ReactElement<any, any>;
        scryRenderedComponentsWithTag(tree: ReactElement<any, any>, componentClass: Function): ReactElement<any, any>[];
        findRenderedComponentWithType<P>(tree: ReactElement<any, any>, componentClass: ReactComponentFactory<P>): Component<P, any>;
        scryRenderedComponentsWithType<P>(tree: ReactElement<any, any>, componentClass: ReactComponentFactory<P>): Component<P, any>[];
    }

    export interface SyntheticEventData {
        altKey?: boolean;
        button?: number;
        buttons?: number;
        clientX?: number;
        clientY?: number;
        changedTouches?: TouchList;
        charCode?: boolean;
        clipboardData?: DataTransfer;
        ctrlKey?: boolean;
        deltaMode?: number;
        deltaX?: number;
        deltaY?: number;
        deltaZ?: number;
        detail?: number;
        getModifierState?(key: string): boolean;
        key?: string;
        keyCode?: number;
        locale?: string;
        location?: number;
        metaKey?: boolean;
        pageX?: number;
        pageY?: number;
        relatedTarget?: EventTarget;
        repeat?: boolean;
        screenX?: number;
        screenY?: number;
        shiftKey?: boolean;
        targetTouches?: TouchList;
        touches?: TouchList;
        view?: AbstractView;
        which?: number;
    }

    export interface EventSimulator {
        (element: Element, eventData?: SyntheticEventData): void;
        (descriptor: ReactElement<any, any>, eventData?: SyntheticEventData): void;
    }

    export interface Simulate {
        blur: EventSimulator;
        change: EventSimulator;
        click: EventSimulator;
        cut: EventSimulator;
        doubleClick: EventSimulator;
        drag: EventSimulator;
        dragEnd: EventSimulator;
        dragEnter: EventSimulator;
        dragExit: EventSimulator;
        dragLeave: EventSimulator;
        dragOver: EventSimulator;
        dragStart: EventSimulator;
        drop: EventSimulator;
        focus: EventSimulator;
        input: EventSimulator;
        keyDown: EventSimulator;
        keyPress: EventSimulator;
        keyUp: EventSimulator;
        mouseDown: EventSimulator;
        mouseEnter: EventSimulator;
        mouseLeave: EventSimulator;
        mouseMove: EventSimulator;
        mouseOut: EventSimulator;
        mouseOver: EventSimulator;
        mouseUp: EventSimulator;
        paste: EventSimulator;
        scroll: EventSimulator;
        submit: EventSimulator;
        touchCancel: EventSimulator;
        touchEnd: EventSimulator;
        touchMove: EventSimulator;
        touchStart: EventSimulator;
        wheel: EventSimulator;
    }

    export interface TransitionGroup extends ReactComponentFactory<any> {}

    export interface Update {
        (object: Object, changes: Object): Object
    }

}