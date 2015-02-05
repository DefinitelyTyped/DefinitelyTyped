// Type definitions for React 0.13.0
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module React {
    //
    // React Elements 
    // ----------------------------------------------------------------------
    
    type ReactType = ComponentClass<any, any, any> | string;

    interface ReactElement<P> {
        type: ComponentClass<P, any, any> | string;
        props: P;
        key: number | string;
        ref: string;
    }

    interface ReactClassicElement<P> extends ReactElement<P> {
    }

    interface ReactHTMLElement extends ReactElement<HTMLAttributes> {}
    interface ReactSVGElement extends ReactElement<SVGAttributes> {}

    //
    // React Nodes 
    // http://facebook.github.io/react/docs/glossary.html
    // ----------------------------------------------------------------------

    type ReactText = string | number;
    type ReactChild = ReactElement<any> | ReactText;

    // Should be Array<ReactNode> but type aliases cannot be recursive
    type ReactFragment = Array<ReactChild | any[] | boolean>;
    type ReactNode = ReactChild | ReactFragment | boolean;

    //
    // React Components 
    // ----------------------------------------------------------------------

    interface ComponentLifecycle<P, S, C> {
        componentWillMount?(): void;
        componentDidMount?(): void;
        componentWillReceiveProps?(nextProps: P, nextContext: C): void;
        shouldComponentUpdate?(nextProps: P, nextState: S, nextContext: C): boolean;
        componentWillUpdate?(nextProps: P, nextState: S, nextContext: C): void;
        componentDidUpdate?(prevProps: P, prevState: S, prevContext: C): void;
        componentWillUnmount?(): void;
    }
    
    // "modern" ES6 classes
    class Component<P, S, C> implements ComponentLifecycle<P, S, C> {
        constructor(props: P, context: C);
        // static members can't be type checked with generics. However, see ComponentClass<P, S, C>
        static defaultProps: any;
        static propTypes: ValidationMap<any>;
        static contextTypes: ValidationMap<any>;
        static childContextTypes: ValidationMap<any>;
        static displayName: string;
        setState(state: S, callback?: () => any): void;
        forceUpdate(): void;
        props: P;
        state: S;
        context: C;
        refs: {
            [key: string]: Component<any, any, any>
        };
    }
    
    interface ComponentClass<P, S, C> {
        new (props: P, context: C): Component<P, S, C>;
        // can cast to get type checking for generics if desired
        defaultProps: P;
        getDefaultProps?(): P;
        propTypes: ValidationMap<P>;
        contextTypes: ValidationMap<C>;
        childContextTypes: ValidationMap<any>;
        displayName: string;
    }
    
    // "classic" createClass
    class ClassicComponent<P, S, C> extends Component<P, S, C> {
        replaceState(nextState: S, callback?: () => any): void;
        getDOMNode<TElement extends Element>(): TElement;
        getDOMNode(): Element;
        isMounted(): boolean;
        getInitialState(): S;
        setProps(nextProps: P, callback?: () => any): void;
        replaceProps(nextProps: P, callback?: () => any): void;
    }
    
    interface ClassicComponentClass<P, S, C> extends ComponentClass<P, S, C> {
        new (props: P, context: C): ClassicComponent<P, S, C>;
    }
    
    interface ChildContextProvider<C> {
        getChildContext: () => C;
    }
    
    //
    // ReactElement Factories
    // ----------------------------------------------------------------------

    interface ComponentFactory<P> {
        (props?: P, ...children: ReactNode[]): ReactElement<P>;
    }
    
    interface HTMLFactory extends ComponentFactory<HTMLAttributes> {}
    interface SVGFactory extends ComponentFactory<SVGAttributes> {}

    //
    // Top-Level API
    // ----------------------------------------------------------------------

    interface TopLevelAPI {
        createClass<P, S, C>(spec: ComponentSpec<P, S, C>): ClassicComponentClass<P, S, C>;
        createElement<P>(type: ClassicComponentClass<P, any, any>, props: P, ...children: ReactNode[]): ReactClassicElement<P>;
        createElement<P>(type: ComponentClass<P, any, any> | string, props: P, ...children: ReactNode[]): ReactElement<P>;
        createFactory<P>(type: ComponentClass<P, any, any> | string): ComponentFactory<P>;
        render<P, S>(element: ReactClassicElement<P>, container: Element, callback?: () => any): ClassicComponent<P, S, any>;
        render<P, S>(element: ReactElement<P>, container: Element, callback?: () => any): Component<P, S, any>;
        unmountComponentAtNode(container: Element): boolean;
        renderToString(element: ReactElement<any>): string;
        renderToStaticMarkup(element: ReactElement<any>): string;
        isValidElement(object: {}): boolean;
        initializeTouchEvents(shouldUseTouch: boolean): void;
        findDOMNode(component: Component<any, any, any>): Element;
        findDOMNode<TElement extends Element>(component: Component<any, any, any>): TElement;
    }

    //
    // Component API
    // ----------------------------------------------------------------------

    class DOMComponent<P> extends ClassicComponent<P, any, any> {
        tagName: string;
    }

    interface HTMLComponent extends DOMComponent<HTMLAttributes> {}
    interface SVGComponent extends DOMComponent<SVGAttributes> {}

    //
    // Component Specs and Lifecycle
    // ----------------------------------------------------------------------
    
    interface Mixin<P, S, C> extends ComponentLifecycle<P, S, C> {
        mixins?: Mixin<P, S, C>;
        statics?: {
            [key: string]: any;
        };

        displayName?: string;
        propTypes?: ValidationMap<any>;
        contextTypes?: ValidationMap<any>;
        childContextTypes?: ValidationMap<any>
        
        getInitialState?(): S;
        getDefaultProps?(): P;
    }

    interface ComponentSpec<P, S, C> extends Mixin<P, S, C> {
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
        changedTouches: TouchList;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        metaKey: boolean;
        shiftKey: boolean;
        targetTouches: TouchList;
        touches: TouchList;
    }

    interface UIEvent extends SyntheticEvent {
        detail: number;
        view: AbstractView;
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

    interface ReactAttributes {
        children?: ReactNode;
        key?: number | string;
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

        dangerouslySetInnerHTML?: {
            __html: string;
        };
    }

    interface CSSProperties {
        columnCount?: number;
        flex?: number | string;
        flexGrow?: number;
        flexShrink?: number;
        fontWeight?: number;
        lineClamp?: number;
        lineHeight?: number;
        opacity?: number;
        order?: number;
        orphans?: number;
        widows?: number;
        zIndex?: number;
        zoom?: number;

        // SVG-related properties
        fillOpacity?: number;
        strokeOpacity?: number;
    }

    interface HTMLAttributes extends ReactAttributes {
        accept?: string;
        acceptCharset?: string;
        accessKey?: string;
        action?: string;
        allowFullScreen?: boolean;
        allowTransparency?: boolean;
        alt?: string;
        async?: boolean;
        autoComplete?: boolean;
        autoFocus?: boolean;
        autoPlay?: boolean;
        cellPadding?: number | string;
        cellSpacing?: number | string;
        charSet?: string;
        checked?: boolean;
        classID?: string;
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
        frameBorder?: number | string;
        height?: number | string;
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
        manifest?: string;
        max?: number | string;
        maxLength?: number;
        media?: string;
        mediaGroup?: string;
        method?: string;
        min?: number | string;
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
        sizes?: string;
        span?: number;
        spellCheck?: boolean;
        src?: string;
        srcDoc?: string;
        srcSet?: string;
        start?: number;
        step?: number | string;
        style?: CSSProperties;
        tabIndex?: number;
        target?: string;
        title?: string;
        type?: string;
        useMap?: string;
        value?: string;
        width?: number | string;
        wmode?: string;

        // Non-standard Attributes
        autoCapitalize?: boolean;
        autoCorrect?: boolean;
        property?: string;
        itemProp?: string;
        itemScope?: boolean;
        itemType?: string;
    }

    interface SVGAttributes extends ReactAttributes {
        cx?: SVGLength | SVGAnimatedLength;
        cy?: any; 
        d?: string;
        dx?: SVGLength | SVGAnimatedLength;
        dy?: SVGLength | SVGAnimatedLength;
        fill?: any; // SVGPaint | string
        fillOpacity?: number | string;
        fontFamily?: string;
        fontSize?: number | string;
        fx?: SVGLength | SVGAnimatedLength;
        fy?: SVGLength | SVGAnimatedLength;
        gradientTransform?: SVGTransformList | SVGAnimatedTransformList;
        gradientUnits?: string;
        markerEnd?: string;
        markerMid?: string;
        markerStart?: string;
        offset?: number | string;
        opacity?: number | string;
        patternContentUnits?: string;
        patternUnits?: string;
        points?: string;
        preserveAspectRatio?: string;
        r?: SVGLength | SVGAnimatedLength;
        rx?: SVGLength | SVGAnimatedLength;
        ry?: SVGLength | SVGAnimatedLength;
        spreadMethod?: string;
        stopColor?: any; // SVGColor | string
        stopOpacity?: number | string;
        stroke?: any; // SVGPaint
        strokeDasharray?: string;
        strokeLinecap?: string;
        strokeOpacity?: number | string;
        strokeWidth?: SVGLength | SVGAnimatedLength;
        textAnchor?: string;
        transform?: SVGTransformList | SVGAnimatedTransformList;
        version?: string;
        viewBox?: string;
        x1?: SVGLength | SVGAnimatedLength;
        x2?: SVGLength | SVGAnimatedLength;
        x?: SVGLength | SVGAnimatedLength;
        y1?: SVGLength | SVGAnimatedLength;
        y2?: SVGLength | SVGAnimatedLength
        y?: SVGLength | SVGAnimatedLength;
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
        map<T>(children: ReactNode, fn: (child: ReactChild) => T): { [key:string]: T };
        forEach(children: ReactNode, fn: (child: ReactChild) => any): void;
        count(children: ReactNode): number;
        only(children: ReactNode): ReactChild;
    }

    //
    // React.addons
    // ----------------------------------------------------------------------

    interface ClassSet {
        [key: string]: boolean;
    }

    //
    // React.addons (Transitions)
    // ----------------------------------------------------------------------

    interface TransitionGroupProps {
        component?: ReactType;
        childFactory?: (child: ReactElement<any>) => ReactElement<any>;
    }

    interface CSSTransitionGroupProps extends TransitionGroupProps {
        transitionName: string;
        transitionAppear?: boolean;
        transitionEnter?: boolean;
        transitionLeave?: boolean;
    }

    interface CSSTransitionGroup extends ComponentClass<CSSTransitionGroupProps, any, any> {}
    interface TransitionGroup extends ComponentClass<TransitionGroupProps, any, any> {}

    //
    // React.addons (Mixins)
    // ----------------------------------------------------------------------

    interface ReactLink<T> {
        value: T;
        requestChange(newValue: T): void;
    }

    interface LinkedStateMixin extends Mixin<any, any, any> {
        linkState<T>(key: string): ReactLink<T>;
    }

    interface PureRenderMixin extends Mixin<any, any, any> {
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

    interface MockedComponentClass {
        new(): any;
    }

    interface ReactTestUtils {
        Simulate: Simulate;

        renderIntoDocument<P>(element: ReactElement<P>): Component<P, any, any>;
        renderIntoDocument<C extends Component<any, any, any>>(element: ReactElement<any>): C;

        mockComponent(mocked: MockedComponentClass, mockTagName?: string): ReactTestUtils;

        isElementOfType(element: ReactElement<any>, type: ReactType): boolean;
        isDOMComponent(instance: Component<any, any, any>): boolean;
        isCompositeComponent(instance: Component<any, any, any>): boolean;
        isCompositeComponentWithType(instance: Component<any, any, any>, type: ComponentClass<any, any, any>): boolean;
        isTextComponent(instance: Component<any, any, any>): boolean;

        findAllInRenderedTree(tree: Component<any, any, any>, fn: (i: Component<any, any, any>) => boolean): Component<any, any, any>;

        scryRenderedDOMComponentsWithClass(tree: Component<any, any, any>, className: string): DOMComponent<any>[];
        findRenderedDOMComponentWithClass(tree: Component<any, any, any>, className: string): DOMComponent<any>;

        scryRenderedDOMComponentsWithTag(tree: Component<any, any, any>, tagName: string): DOMComponent<any>[];
        findRenderedDOMComponentWithTag(tree: Component<any, any, any>, tagName: string): DOMComponent<any>;

        scryRenderedComponentsWithType<P, S, C>(
            tree: Component<any, any, any>, type: ComponentClass<P, S, C>): Component<P, S, C>[];
        scryRenderedComponentsWithType<C extends Component<any, any, any>>(
            tree: Component<any, any, any>, type: ComponentClass<any, any, any>): C[];

        findRenderedComponentWithType<P, S, C>(
            tree: Component<any, any, any>, type: ComponentClass<P, S, C>): Component<P, S, C>;
        findRenderedComponentWithType<C extends Component<any, any, any>>(
            tree: Component<any, any, any>, type: ComponentClass<any, any, any>): C;
    }

    interface SyntheticEventData {
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

    interface EventSimulator {
        (element: Element, eventData?: SyntheticEventData): void;
        (descriptor: Component<any, any, any>, eventData?: SyntheticEventData): void;
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
        Component: ComponentClass<any, any, any>;
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

            batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void;
            batchedUpdates<A>(callback: (a: A) => any, a: A): void;
            batchedUpdates(callback: () => any): void;

            classSet(cx: ClassSet): string;
            cloneWithProps<P>(element: ReactElement<P>, props: P): ReactElement<P>;

            update(value: any[], spec: UpdateArraySpec): any[];
            update(value: {}, spec: UpdateSpec): any;

            // Development tools
            Perf: ReactPerf;
            TestUtils: ReactTestUtils;
        };
    }

    //
    // Browser Interfaces
    // https://github.com/nikeee/2048-typescript/blob/master/2048/js/touch.d.ts
    // ----------------------------------------------------------------------

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

declare module "react" {
    var exports: React.Exports;
    export = exports;
}

declare module "react/addons" {
    var exports: React.AddonsExports;
    export = exports;
}

