// Type definitions for React 0.12.1
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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

    //
    // React Nodes 
    // ----------------------------------------------------------------------

    // type ReactText = string | number;
    // type Fragment = ReactNode[];
    // type ReactNode = ReactElement<any> | Fragment | ReactText | KeyMap;
    // interface KeyMap {
    //     [key: string]: ReactNode;
    // }

    //
    // React Components 
    // ----------------------------------------------------------------------

    interface ComponentStatics<P> {
        displayName?: string;
        getDefaultProps?(): P;
        propTypes?: ValidationMap<P>;
    }

    interface ComponentClassType<P> extends ComponentStatics<P> {
        new (): ComponentClass<P>;
    }

    interface ComponentClass<P> {
        // Deprecated in 0.12. See http://fb.me/react-legacyfactory
        // new(props: P): ReactElement<P>;
        // (props: P): ReactElement<P>;
    }

    //
    // ReactElement Factories
    // ----------------------------------------------------------------------

    interface ComponentFactory<P> {
        (props?: P, ...children: any/*ReactNode*/[]): ReactElement<P>;
    }
    
    interface HTMLFactory extends ComponentFactory<HTMLAttributes> {}
    interface SVGFactory extends ComponentFactory<SVGAttributes> {}

    //
    // Top-Level API
    // ----------------------------------------------------------------------

    interface TopLevelAPI {
        createClass<P>(spec: ComponentSpec<P, any>): ComponentClassType<P>;
        createElement<P>(type: any/*ReactType*/, props: P, ...children: any/*ReactNode*/[]): ReactElement<P>;
        createFactory<P>(componentClass: ComponentClassType<P>): ComponentFactory<P>;
        render<P>(element: ReactElement<P>, container: Element, callback?: () => any): Component<P>;
        unmountComponentAtNode(container: Element): boolean;
        renderToString(element: ReactElement<any>): string;
        renderToStaticMarkup(element: ReactElement<any>): string;
        isValidElement(object: {}): boolean;
        initializeTouchEvents(shouldUseTouch: boolean): void;
    }

    //
    // Component API
    // ----------------------------------------------------------------------

    interface Component<P> {
        // Use this overload to cast the returned element to a more specific type.
        // Eg: var name = this.refs['name'].getDOMNode<HTMLInputElement>().value;
        getDOMNode<TElement extends Element>(): TElement;
        getDOMNode(): Element;
        isMounted(): boolean;

        props: P;
        setProps(nextProps: P, callback?: () => any): void;
        replaceProps(nextProps: P, callback?: () => any): void;
    }

    interface DOMComponent<P> extends Component<P> {
        tagName: string;
    }

    interface HTMLComponent extends DOMComponent<HTMLAttributes> {}
    interface SVGComponent extends DOMComponent<SVGAttributes> {}
    
    interface CompositeComponent<P, S> extends Component<P>, ComponentSpec<P, S> {
        state: S;
        setState(nextState: S, callback?: () => any): void;
        replaceState(nextState: S, callback?: () => any): void;
        forceUpdate(callback?: () => any): void;
        refs: {
            [key: string]: Component<any>
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

    export interface ReactAttributes {
        children?: any; // ReactNode
        key?: any; // number | string
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
            __html: string
        };
    }

    interface CSSProperties {
        columnCount?: number;
        flex?: any; // number | string
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
        cellPadding?: any; // number | string
        cellSpacing?: any; // number | string
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
        manifest?: string;
        max?: any; // number | string
        maxLength?: number;
        media?: string;
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
        sizes?: string;
        span?: number;
        spellCheck?: boolean;
        src?: string;
        srcDoc?: string;
        srcSet?: string;
        start?: number;
        step?: any; // number | string
        style?: CSSProperties;
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
    }

    interface SVGAttributes extends ReactAttributes {
        cx?: any; // SVGLength | SVGAnimatedLength
        cy?: any; 
        d?: string;
        dx?: any; // SVGLength | SVGAnimatedLength
        dy?: any; // SVGLength | SVGAnimatedLength
        fill?: any; // SVGPaint | string
        fillOpacity?: any; // number | string
        fontFamily?: string;
        fontSize?: any; // number | string
        fx?: any; // SVGLength | SVGAnimatedLength
        fy?: any; // SVGLength | SVGAnimatedLength
        gradientTransform?: any; // SVGTransformList | SVGAnimatedTransformList
        gradientUnits?: string;
        markerEnd?: string;
        markerMid?: string;
        markerStart?: string;
        offset?: any; // number | string
        opacity?: any; // number | string
        patternContentUnits?: string;
        patternUnits?: string;
        points?: string;
        preserveAspectRatio?: string;
        r?: any; // SVGLength | SVGAnimatedLength
        rx?: any; // SVGLength | SVGAnimatedLength
        ry?: any; // SVGLength | SVGAnimatedLength
        spreadMethod?: string;
        stopColor?: any; // SVGColor | string
        stopOpacity?: any; // number | string
        stroke?: any; // SVGPaint
        strokeDasharray?: string;
        strokeLinecap?: string;
        strokeOpacity?: any; // number | string
        strokeWidth?: any; // SVGLength | SVGAnimatedLength
        textAnchor?: string;
        transform?: any; // SVGTransformList | SVGAnimatedTransformList
        version?: string;
        viewBox?: string;
        x1?: any; // SVGLength | SVGAnimatedLength
        x2?: any; // SVGLength | SVGAnimatedLength
        x?: any; // SVGLength | SVGAnimatedLength
        y1?: any; // SVGLength | SVGAnimatedLength
        y2?: any; // SVGLength | SVGAnimatedLength
        y?: any; // SVGLength | SVGAnimatedLength
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

    // type Child = ReactElement<any> | ReactText;

    interface ReactChildren {
        map<T>(children: any/*ReactNode*/, fn: (child: any/*Child*/) => T): { [key:string]: T };
        forEach(children: any/*ReactNode*/, fn: (child: any/*Child*/) => any): void;
        count(children: any/*ReactNode*/): number;
        only(children: any/*ReactNode*/): any/*Child*/;
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
        component?: any; // ReactType
        childFactory?: (child: ReactElement<any>) => ReactElement<any>;
    }

    interface CSSTransitionGroupProps extends TransitionGroupProps {
        transitionName: string;
        transitionAppear?: boolean;
        transitionEnter?: boolean;
        transitionLeave?: boolean;
    }

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

    interface MockedComponentClass {
        new(): any;
    }

    interface ReactTestUtils {
        Simulate: Simulate;

        renderIntoDocument<P>(element: ReactElement<P>): Component<P>;
        renderIntoDocument<C extends Component<any>>(element: ReactElement<any>): C;

        mockComponent(mocked: MockedComponentClass, mockTagName?: string): ReactTestUtils;

        isElementOfType(element: ReactElement<any>, type: any/*ReactType*/): boolean;
        isDOMComponent(instance: Component<any>): boolean;
        isCompositeComponent(instance: Component<any>): boolean;
        isCompositeComponentWithType(instance: Component<any>, type: ComponentClass<any>): boolean;
        isTextComponent(instance: Component<any>): boolean;

        findAllInRenderedTree(tree: Component<any>, fn: (i: Component<any>) => boolean): Component<any>;

        scryRenderedDOMComponentsWithClass(tree: Component<any>, className: string): DOMComponent<any>[];
        findRenderedDOMComponentWithClass(tree: Component<any>, className: string): DOMComponent<any>;

        scryRenderedDOMComponentsWithTag(tree: Component<any>, tagName: string): DOMComponent<any>[];
        findRenderedDOMComponentWithTag(tree: Component<any>, tagName: string): DOMComponent<any>;

        scryRenderedComponentsWithType<P, S>(
            tree: Component<any>, type: ComponentClass<P>): CompositeComponent<P, S>[];
        scryRenderedComponentsWithType<C extends CompositeComponent<any, any>>(
            tree: Component<any>, type: ComponentClass<any>): C[];

        findRenderedComponentWithType<P, S>(
            tree: Component<any>, type: ComponentClass<P>): CompositeComponent<P, S>;
        findRenderedComponentWithType<C extends CompositeComponent<any, any>>(
            tree: Component<any>, type: ComponentClass<any>): C;
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
        (descriptor: Component<any>, eventData?: SyntheticEventData): void;
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
            CSSTransitionGroup: ComponentClassType<CSSTransitionGroupProps>;
            LinkedStateMixin: LinkedStateMixin;
            PureRenderMixin: PureRenderMixin;
            TransitionGroup: ComponentClassType<TransitionGroupProps>;

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

