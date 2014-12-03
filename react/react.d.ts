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

    // type ReactType = ComponentClass<any> | string;

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

    // type ReactText = string | number;
    // type Fragment = ReactNode[];
    // type ReactNode = ReactElement<any, any> | Fragment | ReactText;

    //
    // React Components 
    // ----------------------------------------------------------------------

    interface ComponentStatics<P> {
        displayName?: string;
        getDefaultProps?(): P;
        propTypes?: ValidationMap<P>;
    }

    interface ComponentClass<P> extends ComponentStatics<P> {
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
    
    interface HTMLFactory extends Factory<HTMLAttributes> {}
    interface SVGFactory extends Factory<SVGAttributes> {}
    interface ComponentFactory<P> extends Factory<P> {}

    //
    // Top-Level API
    // ----------------------------------------------------------------------

    interface TopLevelAPI {
        createClass<P>(spec: ComponentSpec<P, any>): ComponentClass<P>;
        createElement<P>(type: any/*ReactType*/, props: P, ...children: any/*ReactNode*/[]): ReactElement<P>;
        createFactory<P>(type: any/*ReactType*/): Factory<P>;
        render<P>(element: ReactElement<P>, container: Element, callback?: () => void): Instance<P>;
        unmountComponentAtNode(container: Element): boolean;
        renderToString(element: ReactElement<any>): string;
        renderToStaticMarkup(element: ReactElement<any>): string;
        isValidElement(object: {}): boolean;
        initializeTouchEvents(shouldUseTouch: boolean): void;
    }

    //
    // Component API
    // ----------------------------------------------------------------------

    interface Instance<P> {
        // Use this overload to cast the returned element to a more specific type.
        // Eg: var name = this.refs['name'].getDOMNode<HTMLInputElement>().value;
        getDOMNode<TElement extends Element>(): TElement;
        getDOMNode(): Element;
        isMounted(): boolean;

        props: P;
        setProps(nextProps: P, callback?: () => void): void;
        replaceProps(nextProps: P, callback?: () => void): void;
    }
    
    interface ComponentInstance<P, S> extends Instance<P> {
        state: S;
        setState(nextState: S, callback?: () => void): void;
        replaceState(nextState: S, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        refs: {
            [key: string]: Instance<P>
        };
    }

    //
    // Component Specs and Lifecycle
    // ----------------------------------------------------------------------

    interface Mixin<P, S> extends ComponentStatics<P> {
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
        label?: string;
        lang?: string;
        list?: string;
        loop?: boolean;
        max?: any; // number | string
        maxLength?: number;
        mediaGroup?: string;
        method?: string;
        min?: any; // number | string
        multiple?: boolean;
        muted?: boolean;
        name?: string;
        noValidate?: boolean;
        open?: boolean;
        pattern?: string;
        placeholder?: string;
        poster?: string;
        preload?: string;
        radioGroup?: string;
        readOnly?: boolean;
        rel?: string;
        required?: boolean;
        role?: string;
        rows?: number;
        rowSpan?: number;
        sandbox?: string;
        scope?: string;
        scrollLeft?: number;
        scrolling?: string;
        scrollTop?: number;
        seamless?: boolean;
        selected?: boolean;
        shape?: string;
        size?: number;
        span?: number;
        spellCheck?: boolean;
        src?: string;
        srcDoc?: string;
        srcSet?: string;
        start?: number;
        step?: any; // number | string
        style?: string;
        tabIndex?: number;
        target?: string;
        title?: string;
        type?: string;
        useMap?: string;
        value?: string;
        width?: any; // number | string
        wmode?: string;

        // Non-standard Attributes
        autoCapitalize?: boolean;
        autoCorrect?: boolean;
        property?: string;
        itemProp?: string;
        itemScope?: boolean;
        itemType?: string;

        // React-specific Attributes
        dangerouslySetInnerHTML?: {
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
        svg: SVGFactory;
        text: SVGFactory;
        tspan: SVGFactory;
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
        childFactory?: (child: ReactElement<any>) => ReactElement<any>;
    }

    interface CSSTransitionGroup extends ComponentClass<CSSTransitionGroupProps> {}
    interface TransitionGroup extends ComponentClass<TransitionGroupProps> {}

    //
    // React.addons (Mixins)
    // ----------------------------------------------------------------------

    interface ReactLink<T> {
        value: T;
        requestChange(newValue: T): void;
    }

    interface LinkedStateMixin extends Mixin<any, any> {
        linkState<T>(key: string): ReactLink<T>;
    }

    interface PureRenderMixin extends Mixin<any, any> {
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

    interface ReactTestUtils {
        Simulate: Simulate;

        renderIntoDocument<P>(element: ReactElement<P>): Instance<P>;
        mockComponent(mocked: MockedComponent, mockTagName?: string): ReactTestUtils;

        isElementOfType(element: ReactElement<any>, type: any/*ReactType*/): boolean;
        isDOMComponent(instance: Instance<any>): boolean;
        isCompositeComponent(instance: Instance<any>): boolean;
        isCompositeComponentWithType(instance: Instance<any>, type: ComponentClass<any>): boolean;
        isTextComponent(instance: Instance<any>): boolean;

        findAllInRenderedTree(tree: Instance<any>, fn: (i: Instance<any>) => boolean): Instance<any>;

        scryRenderedDOMComponentsWithClass(tree: Instance<any>, className: string): Instance<any>[];
        findRenderedDOMComponentWithClass(tree: Instance<any>, className: string): Instance<any>;

        scryRenderedDOMComponentsWithTag(tree: Instance<any>, tagName: string): Instance<any>[];
        findRenderedDOMComponentWithTag(tree: Instance<any>, tagName: string): Instance<any>;

        scryRenderedComponentsWithType<P>(tree: Instance<any>, type: ComponentClass<P>): Instance<P>[];
        findRenderedComponentWithType<P>(tree: Instance<any>, type: ComponentClass<P>): Instance<P>;
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
            cloneWithProps<P>(element: ReactElement<P>, props: P): ReactElement<P>;

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

