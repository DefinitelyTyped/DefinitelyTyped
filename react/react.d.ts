// Type definitions for React 0.12.1
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Browser {
    // Browser Interfaces
    // Taken from https://github.com/nikeee/2048-typescript/blob/master/2048/js/touch.d.ts

    interface AbstractView {
        styleMedia: StyleMedia;
        document: Document;
    }

    interface Touch {
        identifier: number;
        target: EventTarget;
        screenX: number;
        screenY: number;
        clientX: number;
        clientY: number;
        pageX: number;
        pageY: number;
    }

    interface TouchList {
        [index: number]: Touch;
        length: number;
        item(index: number): Touch;
        identifiedTouch(identifier: number): Touch;
    }
}

declare module React {

    //
    // React Elements 
    // ----------------------------------------------------------------------

    // type ReactType = ReactClass<any> | string;

    interface ReactElement<P> {
        type: any; // ReactType
        props: P;
        key: any; // number | string
        ref: string;
    }

    interface ReactHTMLElement extends ReactElement<HTMLAttributes> {}
    interface ReactSVGElement extends ReactElement<SVGAttributes> {}
    interface ComponentElement<P> extends ReactElement<P> {}

    //
    // React Nodes 
    // ----------------------------------------------------------------------

    // Typescript 1.4 (Union types, aliases)
    // type ReactText = string | number;
    // type ReactFragment = ReactNode[];
    // type ReactNode = ReactElement<any, any> | ReactFragment | ReactText;

    //
    // React Components 
    // ----------------------------------------------------------------------

    interface ReactStatics<P> {
        displayName?: string;
        getDefaultProps?(): P;
        propTypes?: React.ValidationMap<P>;
    }

    interface ReactClass<P> extends ReactStatics<P> {
        // Deprecated in 0.12. See http://fb.me/react-legacyfactory
        // new(props: P): ReactElement<P>;
        // (props: P): ReactElement<P>;
    }

    //
    // ReactElement Factories
    // ----------------------------------------------------------------------

    interface Factory<P> {
        (props?: P, ...children: any/*ReactNode*/[]): ReactElement<P>;
    }
    
    interface ComponentFactory<P> extends Factory<P> {}
    interface HTMLFactory extends Factory<HTMLAttributes> {}
    interface SVGFactory extends Factory<SVGAttributes> {}

    //
    // Top-Level API
    // ----------------------------------------------------------------------

    interface TopLevelAPI {
        createClass<P>(spec: ComponentSpec<P, any>): ReactClass<P>;
        createElement<P>(type: any/*ReactType*/, props: P, ...children: any/*ReactNode*/[]): ReactElement<P>;
        createFactory<P>(type: any/*ReactType*/): Factory<P>;
        render<P>(element: ReactElement<P>, container: Element, callback?: () => void): ReactInstance<P>;
        unmountComponentAtNode(container: Element): boolean;
        renderToString(element: ReactElement<any>): string;
        renderToStaticMarkup(element: ReactElement<any>): string;
        isValidElement(object: {}): boolean;
        initializeTouchEvents(shouldUseTouch: boolean): void;
    }

    //
    // Component API
    // ----------------------------------------------------------------------

    interface ReactInstance<P> {
        // Use this overload to cast the returned element to a more specific type.
        // Eg: var name = this.refs['name'].getDOMNode<HTMLInputElement>().value;
        getDOMNode<TElement extends Element>(): TElement;
        getDOMNode(): Element;
        isMounted(): boolean;

        props: P;
        setProps(nextProps: P, callback?: () => void): void;
        replaceProps(nextProps: P, callback?: () => void): void;
    }
    
    interface ComponentInstance<P, S> extends ReactInstance<P> {
        state: S;
        setState(nextState: S, callback?: () => void): void;
        replaceState(nextState: S, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        refs: {
            [key: string]: ReactInstance<P>
        };
    }

    //
    // Component Specs and Lifecycle
    // ----------------------------------------------------------------------

    interface Mixin<P, S> extends ReactStatics<P> {
        mixins?: Mixin<P, S>;
        statics?: {
            [key: string]: any;
        };

        // Definition methods
        getInitialState?(): S;

        // Delegate methods
        componentWillMount?(): void;
        componentDidMount?(): void;
        componentWillReceiveProps?(nextProps: P): void;
        shouldComponentUpdate?(nextProps: P, nextState: S): boolean;
        componentWillUpdate?(nextProps: P, nextState: S): void;
        componentDidUpdate?(prevProps: P, prevState: S): void;
        componentWillUnmount?(): void;
    }

    interface ComponentSpec<P, S> extends Mixin<P, S> {
        render(): ReactElement<any>;
    }

    //
    // Event System
    // ----------------------------------------------------------------------

    interface SyntheticEvent {
        bubbles: boolean;
        cancelable: boolean;
        currentTarget: EventTarget;
        defaultPrevented: boolean;
        eventPhase: number;
        isTrusted: boolean;
        nativeEvent: Event;
        preventDefault(): void;
        stopPropagation(): void;
        target: EventTarget;
        timeStamp: Date;
        type: string;
    }

    interface ClipboardEvent extends SyntheticEvent {
        clipboardData: DataTransfer;
    }

    interface KeyboardEvent extends SyntheticEvent {
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

    interface FocusEvent extends SyntheticEvent {
        relatedTarget: EventTarget;
    }

    interface FormEvent extends SyntheticEvent {
    }

    interface MouseEvent extends SyntheticEvent {
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

    interface TouchEvent extends SyntheticEvent {
        altKey: boolean;
        changedTouches: Browser.TouchList;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        metaKey: boolean;
        shiftKey: boolean;
        targetTouches: Browser.TouchList;
        touches: Browser.TouchList;
    }

    interface UIEvent extends SyntheticEvent {
        detail: number;
        view: Browser.AbstractView;
    }

    interface WheelEvent extends SyntheticEvent {
        deltaMode: number;
        deltaX: number;
        deltaY: number;
        deltaZ: number;
    }

    //
    // Event Handler Types
    // ----------------------------------------------------------------------

    interface EventHandler<E extends SyntheticEvent> {
        (event: E): void;
    }

    interface ClipboardEventHandler extends EventHandler<ClipboardEvent> {}
    interface KeyboardEventHandler extends EventHandler<KeyboardEvent> {}
    interface FocusEventHandler extends EventHandler<FocusEvent> {}
    interface FormEventHandler extends EventHandler<FormEvent> {}
    interface MouseEventHandler extends EventHandler<MouseEvent> {}
    interface TouchEventHandler extends EventHandler<TouchEvent> {}
    interface UIEventHandler extends EventHandler<UIEvent> {}
    interface WheelEventHandler extends EventHandler<WheelEvent> {}

    //
    // Attributes
    // ----------------------------------------------------------------------

    export interface ReactAttributes {
        children?: any; // ReactNode
        key?: string;
        ref?: string;

        // Event Attributes
        onCopy?: ClipboardEventHandler;
        onCut?: ClipboardEventHandler;
        onPaste?: ClipboardEventHandler;
        onKeyDown?: KeyboardEventHandler;
        onKeyPress?: KeyboardEventHandler;
        onKeyUp?: KeyboardEventHandler;
        onFocus?: FocusEventHandler;
        onBlur?: FocusEventHandler;
        onChange?: FormEventHandler;
        onInput?: FormEventHandler;
        onSubmit?: FormEventHandler;
        onClick?: MouseEventHandler;
        onDoubleClick?: MouseEventHandler;
        onDrag?: MouseEventHandler;
        onDragEnd?: MouseEventHandler;
        onDragEnter?: MouseEventHandler;
        onDragExit?: MouseEventHandler;
        onDragLeave?: MouseEventHandler;
        onDragOver?: MouseEventHandler;
        onDragStart?: MouseEventHandler;
        onDrop?: MouseEventHandler;
        onMouseDown?: MouseEventHandler;
        onMouseEnter?: MouseEventHandler;
        onMouseLeave?: MouseEventHandler;
        onMouseMove?: MouseEventHandler;
        onMouseOut?: MouseEventHandler;
        onMouseOver?: MouseEventHandler;
        onMouseUp?: MouseEventHandler;
        onTouchCancel?: TouchEventHandler;
        onTouchEnd?: TouchEventHandler;
        onTouchMove?: TouchEventHandler;
        onTouchStart?: TouchEventHandler;
        onScroll?: UIEventHandler;
        onWheel?: WheelEventHandler;
    }

    interface HTMLAttributes extends ReactAttributes {
        accept?: string;
        accessKey?: string;
        action?: string;
        allowFullScreen?: boolean;
        allowTransparency?: boolean;
        alt?: string;
        async?: boolean;
        autoComplete?: boolean;
        autoFocus?: boolean;
        autoPlay?: boolean;
        cellPadding?: any; // number | string
        cellSpacing?: any; // number | string
        charSet?: string;
        checked?: boolean;
        className?: string;
        cols?: number;
        colSpan?: number;
        content?: string;
        contentEditable?: boolean;
        contextMenu?: string;
        controls?: any;
        coords?: string;
        crossOrigin?: string;
        data?: string;
        dateTime?: string;
        defer?: boolean;
        dir?: string;
        disabled?: boolean;
        download?: any;
        draggable?: boolean;
        encType?: string;
        form?: string;
        formNoValidate?: boolean;
        frameBorder?: any; // number | string
        height?: any; // number | string
        hidden?: boolean;
        href?: string;
        hrefLang?: string;
        htmlFor?: string;
        httpEquiv?: string;
        icon?: string;
        id?: string;
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

        // Non-standard Attributes
        autoCapitalize?: boolean;
        autoCorrect?: boolean;
        property?: any;
        itemProp?: string;
        itemScope?: boolean;
        itemType?: string;

        // React-specific Attributes
        dangerouslySetInnerHTML: {
            __html: string
        };
    }

    interface SVGAttributes extends ReactAttributes {
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

    //
    // React.DOM 
    // ----------------------------------------------------------------------

    interface ReactDOM {
        // HTML
        a: React.HTMLFactory;
        abbr: React.HTMLFactory;
        address: React.HTMLFactory;
        area: React.HTMLFactory;
        article: React.HTMLFactory;
        aside: React.HTMLFactory;
        audio: React.HTMLFactory;
        b: React.HTMLFactory;
        base: React.HTMLFactory;
        bdi: React.HTMLFactory;
        bdo: React.HTMLFactory;
        big: React.HTMLFactory;
        blockquote: React.HTMLFactory;
        body: React.HTMLFactory;
        br: React.HTMLFactory;
        button: React.HTMLFactory;
        canvas: React.HTMLFactory;
        caption: React.HTMLFactory;
        cite: React.HTMLFactory;
        code: React.HTMLFactory;
        col: React.HTMLFactory;
        colgroup: React.HTMLFactory;
        data: React.HTMLFactory;
        datalist: React.HTMLFactory;
        dd: React.HTMLFactory;
        del: React.HTMLFactory;
        details: React.HTMLFactory;
        dfn: React.HTMLFactory;
        dialog: React.HTMLFactory;
        div: React.HTMLFactory;
        dl: React.HTMLFactory;
        dt: React.HTMLFactory;
        em: React.HTMLFactory;
        embed: React.HTMLFactory;
        fieldset: React.HTMLFactory;
        figcaption: React.HTMLFactory;
        figure: React.HTMLFactory;
        footer: React.HTMLFactory;
        form: React.HTMLFactory;
        h1: React.HTMLFactory;
        h2: React.HTMLFactory;
        h3: React.HTMLFactory;
        h4: React.HTMLFactory;
        h5: React.HTMLFactory;
        h6: React.HTMLFactory;
        head: React.HTMLFactory;
        header: React.HTMLFactory;
        hr: React.HTMLFactory;
        html: React.HTMLFactory;
        i: React.HTMLFactory;
        iframe: React.HTMLFactory;
        img: React.HTMLFactory;
        input: React.HTMLFactory;
        ins: React.HTMLFactory;
        kbd: React.HTMLFactory;
        keygen: React.HTMLFactory;
        label: React.HTMLFactory;
        legend: React.HTMLFactory;
        li: React.HTMLFactory;
        link: React.HTMLFactory;
        main: React.HTMLFactory;
        map: React.HTMLFactory;
        mark: React.HTMLFactory;
        menu: React.HTMLFactory;
        menuitem: React.HTMLFactory;
        meta: React.HTMLFactory;
        meter: React.HTMLFactory;
        nav: React.HTMLFactory;
        noscript: React.HTMLFactory;
        object: React.HTMLFactory;
        ol: React.HTMLFactory;
        optgroup: React.HTMLFactory;
        option: React.HTMLFactory;
        output: React.HTMLFactory;
        p: React.HTMLFactory;
        param: React.HTMLFactory;
        pre: React.HTMLFactory;
        progress: React.HTMLFactory;
        q: React.HTMLFactory;
        rp: React.HTMLFactory;
        rt: React.HTMLFactory;
        ruby: React.HTMLFactory;
        s: React.HTMLFactory;
        samp: React.HTMLFactory;
        script: React.HTMLFactory;
        section: React.HTMLFactory;
        select: React.HTMLFactory;
        small: React.HTMLFactory;
        source: React.HTMLFactory;
        span: React.HTMLFactory;
        strong: React.HTMLFactory;
        style: React.HTMLFactory;
        sub: React.HTMLFactory;
        summary: React.HTMLFactory;
        sup: React.HTMLFactory;
        table: React.HTMLFactory;
        tbody: React.HTMLFactory;
        td: React.HTMLFactory;
        textarea: React.HTMLFactory;
        tfoot: React.HTMLFactory;
        th: React.HTMLFactory;
        thead: React.HTMLFactory;
        time: React.HTMLFactory;
        title: React.HTMLFactory;
        tr: React.HTMLFactory;
        track: React.HTMLFactory;
        u: React.HTMLFactory;
        ul: React.HTMLFactory;
        "var": React.HTMLFactory;
        video: React.HTMLFactory;
        wbr: React.HTMLFactory;

        // SVG
        circle: React.SVGFactory;
        defs: React.SVGFactory;
        ellipse: React.SVGFactory;
        g: React.SVGFactory;
        line: React.SVGFactory;
        linearGradient: React.SVGFactory;
        mask: React.SVGFactory;
        path: React.SVGFactory;
        pattern: React.SVGFactory;
        polygon: React.SVGFactory;
        polyline: React.SVGFactory;
        radialGradient: React.SVGFactory;
        rect: React.SVGFactory;
        stop: React.SVGFactory;
        svg: React.SVGFactory;
        text: React.SVGFactory;
        tspan: React.SVGFactory;
    }

    //
    // React.PropTypes
    // ----------------------------------------------------------------------

    interface Validator<T> {
        (object: T, key: string, componentName: string): Error;
    }

    interface Requireable<T> extends Validator<T> {
        isRequired: Validator<T>;
    }

    interface ValidationMap<T> {
        [key: string]: Validator<T>;
    }

    interface ReactPropTypes {
        any: Requireable<any>;
        array: Requireable<any>;
        bool: Requireable<any>;
        func: Requireable<any>;
        number: Requireable<any>;
        object: Requireable<any>;
        string: Requireable<any>;
        node: Requireable<any>;
        element: Requireable<any>;
        instanceOf(expectedClass: {}): Requireable<any>;
        oneOf(types: any[]): Requireable<any>;
        oneOfType(types: Validator<any>[]): Requireable<any>;
        arrayOf(type: Validator<any>): Requireable<any>;
        objectOf(type: Validator<any>): Requireable<any>;
        shape(type: ValidationMap<any>): Requireable<any>;
    }

    //
    // React.Children
    // ----------------------------------------------------------------------

    interface ReactChildren {
        map<T>(children: any/*ReactNode*/, fn: (child: any/*ReactNode*/) => T): { [key:string]: T };
        forEach(children: any/*ReactNode*/, fn: (child: any/*ReactNode*/) => any): void;
        count(children: any/*ReactNode*/): number;
        only(children: any/*ReactNode*/): any;
    }

    //
    // React.addons (Transitions)
    // ----------------------------------------------------------------------

    interface CSSTransitionGroupProps {
        transitionName: string;
        transitionAppear?: boolean;
        transitionEnter?: boolean;
        transitionLeave?: boolean;
    }

    interface TransitionGroupProps {
        component?: any; // ReactType
        childFactory?: (child: React.ReactElement<any>) => React.ReactElement<any>;
    }

    interface CSSTransitionGroup extends React.ReactClass<CSSTransitionGroupProps> {}
    interface TransitionGroup extends React.ReactClass<TransitionGroupProps> {}

    //
    // React.addons (Mixins)
    // ----------------------------------------------------------------------

    interface ReactLink<T> {
        value: T;
        requestChange(newValue: T): void;
    }

    interface LinkedStateMixin extends React.Mixin<any, any> {
        linkState<T>(key: string): ReactLink<T>;
    }

    interface PureRenderMixin extends React.Mixin<any, any> {
    }

    //
    // Reat.addons.update
    // ----------------------------------------------------------------------

    interface UpdateSpec {
        $set: any;
        $merge: {};
        $apply(value: any): any;
        // [key: string]: UpdateSpec;
    }

    interface UpdateArraySpec extends UpdateSpec {
        $push?: any[];
        $unshift?: any[];
        $splice?: any[][];
    }

    //
    // React.addons.Perf
    // ----------------------------------------------------------------------

    interface ComponentPerfContext {
        current: string;
        owner: string;
    }

    interface NumericPerfContext {
        [key: string]: number;
    }

    interface Measurements {
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

    interface ReactPerf {
        start(): void;
        stop(): void;
        printInclusive(measurements: Measurements[]): void;
        printExclusive(measurements: Measurements[]): void;
        printWasted(measurements: Measurements[]): void;
        printDOM(measurements: Measurements[]): void;
        getLastMeasurements(): Measurements[];
    }

    //
    // React.addons.TestUtils
    // ----------------------------------------------------------------------

    interface MockedComponent {
        render: {
            mockImplementation(impl: () => any): void;
        };
    }

    // Alias for ReactTestUtils
    interface Instance<P> extends React.ReactInstance<P> {}

    interface ReactTestUtils {
        Simulate: Simulate;

        renderIntoDocument<P>(element: React.ReactElement<P>): Instance<P>;
        mockComponent(mocked: MockedComponent, mockTagName?: string): ReactTestUtils;
        isElementOfType(element: React.ReactElement<any>, type: any/*ReactType*/): boolean;
        isDOMComponent(instance: Instance<any>): boolean;
        isCompositeComponent(instance: Instance<any>): boolean;
        isCompositeComponentWithType(instance: Instance<any>, type: React.ReactClass<any>): boolean;
        isTextComponent(instance: Instance<any>): boolean;
        findAllInRenderedTree(tree: Instance<any>, fn: (i: Instance<any>) => boolean): Instance<any>;
        scryRenderedDOMComponentsWithClass(tree: Instance<any>, className: string): Instance<any>[];
        findRenderedDOMComponentWithClass(tree: Instance<any>, className: string): Instance<any>;
        scryRenderedDOMComponentsWithTag(tree: Instance<any>, tagName: string): Instance<any>[];
        findRenderedDOMComponentWithTag(tree: Instance<any>, tagName: string): Instance<any>;
        scryRenderedComponentsWithType<P, S>(
            tree: Instance<any>, type: React.ReactClass<P>): React.ComponentInstance<P, S>[];
        findRenderedComponentWithType<P, S>(
            tree: Instance<any>, type: React.ReactClass<P>): React.ComponentInstance<P, S>;
    }

    interface SyntheticEventData {
        altKey?: boolean;
        button?: number;
        buttons?: number;
        clientX?: number;
        clientY?: number;
        changedTouches?: Browser.TouchList;
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
        targetTouches?: Browser.TouchList;
        touches?: Browser.TouchList;
        view?: Browser.AbstractView;
        which?: number;
    }

    interface EventSimulator {
        (element: Element, eventData?: SyntheticEventData): void;
        (descriptor: Instance<any>, eventData?: SyntheticEventData): void;
    }

    interface Simulate {
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

    //
    // react Exports
    // ----------------------------------------------------------------------

    interface Exports extends TopLevelAPI {
        DOM: ReactDOM;
        PropTypes: ReactPropTypes;
        Children: ReactChildren;
    }

    //
    // react/addons Exports
    // ----------------------------------------------------------------------

    interface AddonsExports extends Exports {
        addons: {
            CSSTransitionGroup: CSSTransitionGroup;
            LinkedStateMixin: LinkedStateMixin;
            PureRenderMixin: PureRenderMixin;
            TransitionGroup: TransitionGroup;

            batchedUpdates<A, B>(callback: (a: A, b: B) => void, a: A, b: B): void;
            batchedUpdates<A>(callback: (a: A) => void, a: A): void;
            batchedUpdates(callback: () => void): void;

            classSet(cx: { [key: string]: boolean }): string;
            cloneWithProps<P>(element: React.ReactElement<P>, props: P): React.ReactElement<P>;

            update(value: any[], spec: UpdateArraySpec): any[];
            update(value: {}, spec: UpdateSpec): any;

            // Development tools
            Perf: ReactPerf;
            TestUtils: ReactTestUtils;
        };
    }
}

declare module "react" {
    var exports: React.Exports;
    export = exports;
}

declare module "react/addons" {
    var exports: React.AddonsExports;
    export = exports;
}

