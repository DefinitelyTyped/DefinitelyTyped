// Type definitions for React v0.13.1 (internal module)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module JSX {
    interface Element extends React.ReactElement<any> { }
    interface ElementClass extends React.Component<any, any> { }
    interface ElementAttributesProperty { props: {}; }

    interface IntrinsicElements {
        // HTML
        a: React.HTMLAttributes;
        abbr: React.HTMLAttributes;
        address: React.HTMLAttributes;
        area: React.HTMLAttributes;
        article: React.HTMLAttributes;
        aside: React.HTMLAttributes;
        audio: React.HTMLAttributes;
        b: React.HTMLAttributes;
        base: React.HTMLAttributes;
        bdi: React.HTMLAttributes;
        bdo: React.HTMLAttributes;
        big: React.HTMLAttributes;
        blockquote: React.HTMLAttributes;
        body: React.HTMLAttributes;
        br: React.HTMLAttributes;
        button: React.HTMLAttributes;
        canvas: React.HTMLAttributes;
        caption: React.HTMLAttributes;
        cite: React.HTMLAttributes;
        code: React.HTMLAttributes;
        col: React.HTMLAttributes;
        colgroup: React.HTMLAttributes;
        data: React.HTMLAttributes;
        datalist: React.HTMLAttributes;
        dd: React.HTMLAttributes;
        del: React.HTMLAttributes;
        details: React.HTMLAttributes;
        dfn: React.HTMLAttributes;
        dialog: React.HTMLAttributes;
        div: React.HTMLAttributes;
        dl: React.HTMLAttributes;
        dt: React.HTMLAttributes;
        em: React.HTMLAttributes;
        embed: React.HTMLAttributes;
        fieldset: React.HTMLAttributes;
        figcaption: React.HTMLAttributes;
        figure: React.HTMLAttributes;
        footer: React.HTMLAttributes;
        form: React.HTMLAttributes;
        h1: React.HTMLAttributes;
        h2: React.HTMLAttributes;
        h3: React.HTMLAttributes;
        h4: React.HTMLAttributes;
        h5: React.HTMLAttributes;
        h6: React.HTMLAttributes;
        head: React.HTMLAttributes;
        header: React.HTMLAttributes;
        hr: React.HTMLAttributes;
        html: React.HTMLAttributes;
        i: React.HTMLAttributes;
        iframe: React.HTMLAttributes;
        img: React.HTMLAttributes;
        input: React.HTMLAttributes;
        ins: React.HTMLAttributes;
        kbd: React.HTMLAttributes;
        keygen: React.HTMLAttributes;
        label: React.HTMLAttributes;
        legend: React.HTMLAttributes;
        li: React.HTMLAttributes;
        link: React.HTMLAttributes;
        main: React.HTMLAttributes;
        map: React.HTMLAttributes;
        mark: React.HTMLAttributes;
        menu: React.HTMLAttributes;
        menuitem: React.HTMLAttributes;
        meta: React.HTMLAttributes;
        meter: React.HTMLAttributes;
        nav: React.HTMLAttributes;
        noscript: React.HTMLAttributes;
        object: React.HTMLAttributes;
        ol: React.HTMLAttributes;
        optgroup: React.HTMLAttributes;
        option: React.HTMLAttributes;
        output: React.HTMLAttributes;
        p: React.HTMLAttributes;
        param: React.HTMLAttributes;
        picture: React.HTMLAttributes;
        pre: React.HTMLAttributes;
        progress: React.HTMLAttributes;
        q: React.HTMLAttributes;
        rp: React.HTMLAttributes;
        rt: React.HTMLAttributes;
        ruby: React.HTMLAttributes;
        s: React.HTMLAttributes;
        samp: React.HTMLAttributes;
        script: React.HTMLAttributes;
        section: React.HTMLAttributes;
        select: React.HTMLAttributes;
        small: React.HTMLAttributes;
        source: React.HTMLAttributes;
        span: React.HTMLAttributes;
        strong: React.HTMLAttributes;
        style: React.HTMLAttributes;
        sub: React.HTMLAttributes;
        summary: React.HTMLAttributes;
        sup: React.HTMLAttributes;
        table: React.HTMLAttributes;
        tbody: React.HTMLAttributes;
        td: React.HTMLAttributes;
        textarea: React.HTMLAttributes;
        tfoot: React.HTMLAttributes;
        th: React.HTMLAttributes;
        thead: React.HTMLAttributes;
        time: React.HTMLAttributes;
        title: React.HTMLAttributes;
        tr: React.HTMLAttributes;
        track: React.HTMLAttributes;
        u: React.HTMLAttributes;
        ul: React.HTMLAttributes;
        "var": React.HTMLAttributes;
        video: React.HTMLAttributes;
        wbr: React.HTMLAttributes;

        // SVG
        svg: React.SVGElementAttributes;

        circle: React.SVGAttributes;
        defs: React.SVGAttributes;
        ellipse: React.SVGAttributes;
        g: React.SVGAttributes;
        line: React.SVGAttributes;
        linearGradient: React.SVGAttributes;
        mask: React.SVGAttributes;
        path: React.SVGAttributes;
        pattern: React.SVGAttributes;
        polygon: React.SVGAttributes;
        polyline: React.SVGAttributes;
        radialGradient: React.SVGAttributes;
        rect: React.SVGAttributes;
        stop: React.SVGAttributes;
        text: React.SVGAttributes;
        tspan: React.SVGAttributes;
    }

    module React {
        //
        // React Elements
        // ----------------------------------------------------------------------

        type ReactType = ComponentClass<any> | string;

        interface ReactProps {
            key?: any;
            ref?: any;
        }

        interface ReactElement<P extends ReactProps> {
            type: string | ComponentClass<P>;
            props: P;
            key: string | number;
            ref: string | ((component: Component<P, any>) => any);
        }

        interface ClassicElement<P> extends ReactElement<P> {
            type: string | ClassicComponentClass<P>;
            ref: string | ((component: ClassicComponent<P, any>) => any);
        }

        interface DOMElement<P> extends ClassicElement<P> {
            type: string;
            ref: string | ((component: DOMComponent<P>) => any);
        }

        import HTMLAttributes = JSX.React.HTMLAttributes;
        import SVGAttributes = JSX.React.SVGAttributes;

        type HTMLElement = DOMElement<HTMLAttributes>;
        type SVGElement = DOMElement<SVGAttributes>;

        //
        // Factories
        // ----------------------------------------------------------------------

        interface Factory<P> {
            (props?: P, ...children: ReactNode[]): ReactElement<P>;
        }

        interface ClassicFactory<P> extends Factory<P> {
            (props?: P, ...children: ReactNode[]): ClassicElement<P>;
        }

        interface DOMFactory<P> extends ClassicFactory<P> {
            (props?: P, ...children: ReactNode[]): DOMElement<P>;
        }

        type HTMLFactory = DOMFactory<HTMLAttributes>;
        type SVGFactory = DOMFactory<SVGAttributes>;

        //
        // React Nodes
        // http://facebook.github.io/react/docs/glossary.html
        // ----------------------------------------------------------------------

        type ReactText = string | number;
        type ReactChild = ReactElement<any> | ReactText;

        // Should be Array<ReactNode> but type aliases cannot be recursive
        type ReactFragment = {} | Array<ReactChild | any[]| boolean>;
        type ReactNode = ReactChild | ReactFragment | boolean;

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
            map<T>(children: ReactNode, fn: (child: ReactChild) => T): { [key: string]: T };
            forEach(children: ReactNode, fn: (child: ReactChild) => any): void;
            count(children: ReactNode): number;
            only(children: ReactNode): ReactChild;
        }

        //
        // Class Interfaces
        // ----------------------------------------------------------------------

        interface ComponentClass<P> {
            new (props?: P, context?: any): Component<P, any>;
            propTypes?: ValidationMap<P>;
            contextTypes?: ValidationMap<any>;
            childContextTypes?: ValidationMap<any>;
            defaultProps?: P;
        }

        interface ClassicComponentClass<P> extends ComponentClass<P> {
            new (props?: P, context?: any): ClassicComponent<P, any>;
            getDefaultProps?(): P;
            displayName?: string;
        }

        //
        // Component Specs and Lifecycle
        // ----------------------------------------------------------------------

        interface ComponentLifecycle<P, S> {
            componentWillMount?(): void;
            componentDidMount?(): void;
            componentWillReceiveProps?(nextProps: P, nextContext: any): void;
            shouldComponentUpdate?(nextProps: P, nextState: S, nextContext: any): boolean;
            componentWillUpdate?(nextProps: P, nextState: S, nextContext: any): void;
            componentDidUpdate?(prevProps: P, prevState: S, prevContext: any): void;
            componentWillUnmount?(): void;
        }

        interface Mixin<P, S> extends ComponentLifecycle<P, S> {
            mixins?: Mixin<P, S>;
            statics?: {
                [key: string]: any;
            };

            displayName?: string;
            propTypes?: ValidationMap<any>;
            contextTypes?: ValidationMap<any>;
            childContextTypes?: ValidationMap<any>

            getDefaultProps?(): P;
            getInitialState?(): S;
        }

        interface ComponentSpec<P, S> extends Mixin<P, S> {
            render(): ReactElement<any>;
        }

        //
        // Component API
        // ----------------------------------------------------------------------

        // Base component for plain JS classes
        class Component<P, S> implements ComponentLifecycle<P, S> {
            constructor(props?: P, context?: any);
            setState(f: (prevState: S, props: P) => S, callback?: () => any): void;
            setState(state: S, callback?: () => any): void;
            forceUpdate(): void;
            props: P;
            state: S;
            context: any;
            refs: {
                [key: string]: Component<any, any>
            };
        }

        interface ClassicComponent<P, S> extends Component<P, S> {
            replaceState(nextState: S, callback?: () => any): void;
            getDOMNode<TElement extends Element>(): TElement;
            getDOMNode(): Element;
            isMounted(): boolean;
            getInitialState?(): S;
            setProps(nextProps: P, callback?: () => any): void;
            replaceProps(nextProps: P, callback?: () => any): void;
        }

        interface DOMComponent<P> extends ClassicComponent<P, any> {
            tagName: string;
        }

        type HTMLComponent = DOMComponent<HTMLAttributes>;
        type SVGComponent = DOMComponent<SVGAttributes>;

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

        interface DragEvent extends SyntheticEvent {
            dataTransfer: DataTransfer;
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

        interface DragEventHandler extends EventHandler<DragEvent> { }
        interface ClipboardEventHandler extends EventHandler<ClipboardEvent> { }
        interface KeyboardEventHandler extends EventHandler<KeyboardEvent> { }
        interface FocusEventHandler extends EventHandler<FocusEvent> { }
        interface FormEventHandler extends EventHandler<FormEvent> { }
        interface MouseEventHandler extends EventHandler<MouseEvent> { }
        interface TouchEventHandler extends EventHandler<TouchEvent> { }
        interface UIEventHandler extends EventHandler<UIEvent> { }
        interface WheelEventHandler extends EventHandler<WheelEvent> { }


        //
        // Props / DOM Attributes
        // ----------------------------------------------------------------------


        interface Props<T> {
            key?: string | number;
            ref?: string | ((component: T) => any);
        }

        interface DOMAttributes extends Props<any> {
            onCopy?: ClipboardEventHandler;
            onCopyCapture?: ClipboardEventHandler;
            onCut?: ClipboardEventHandler;
            onCutCapture?: ClipboardEventHandler;
            onPaste?: ClipboardEventHandler;
            onPasteCapture?: ClipboardEventHandler;
            onKeyDown?: KeyboardEventHandler;
            onKeyDownCapture?: KeyboardEventHandler;
            onKeyPress?: KeyboardEventHandler;
            onKeyPressCapture?: KeyboardEventHandler;
            onKeyUp?: KeyboardEventHandler;
            onKeyUpCapture?: KeyboardEventHandler
            onFocus?: FocusEventHandler;
            onFocusCapture?: FocusEventHandler
            onBlur?: FocusEventHandler;
            onBlurCapture?: FocusEventHandler
            onChange?: FormEventHandler;
            onChangeCapture?: FormEventHandler
            onInput?: FormEventHandler;
            onInputCapture?: FormEventHandler
            onSubmit?: FormEventHandler;
            onSubmitCapture?: FormEventHandler
            onClick?: MouseEventHandler;
            onClickCapture?: MouseEventHandler
            onDoubleClick?: MouseEventHandler;
            onDoubleClickCapture?: MouseEventHandler
            onDrag?: DragEventHandler;
            onDragCapture?: DragEventHandler
            onDragEnd?: DragEventHandler;
            onDragEndCapture?: DragEventHandler
            onDragEnter?: DragEventHandler;
            onDragEnterCapture?: DragEventHandler
            onDragExit?: DragEventHandler;
            onDragExitCapture?: DragEventHandler
            onDragLeave?: DragEventHandler;
            onDragLeaveCapture?: DragEventHandler
            onDragOver?: DragEventHandler;
            onDragOverCapture?: DragEventHandler
            onDragStart?: DragEventHandler;
            onDragStartCapture?: DragEventHandler
            onDrop?: DragEventHandler;
            onDropCapture?: DragEventHandler
            onMouseDown?: MouseEventHandler;
            onMouseDownCapture?: MouseEventHandler
            onMouseEnter?: MouseEventHandler;
            onMouseEnterCapture?: MouseEventHandler
            onMouseLeave?: MouseEventHandler;
            onMouseLeaveCapture?: MouseEventHandler
            onMouseMove?: MouseEventHandler;
            onMouseMoveCapture?: MouseEventHandler
            onMouseOut?: MouseEventHandler;
            onMouseOutCapture?: MouseEventHandler
            onMouseOver?: MouseEventHandler;
            onMouseOverCapture?: MouseEventHandler
            onMouseUp?: MouseEventHandler;
            onMouseUpCapture?: MouseEventHandler
            onTouchCancel?: TouchEventHandler;
            onTouchCancelCapture?: TouchEventHandler
            onTouchEnd?: TouchEventHandler;
            onTouchEndCapture?: TouchEventHandler
            onTouchMove?: TouchEventHandler;
            onTouchMoveCapture?: TouchEventHandler
            onTouchStart?: TouchEventHandler;
            onTouchStartCapture?: TouchEventHandler
            onScroll?: UIEventHandler;
            onScrollCapture?: UIEventHandler
            onWheel?: WheelEventHandler;
            onWheelCapture?: WheelEventHandler

            dangerouslySetInnerHTML?: {
                __html: string;
            };
        }

        // This interface is not complete. Only properties accepting
        // unitless numbers are listed here (see CSSProperty.js in React)
        interface CSSProperties {
            boxFlex?: number;
            boxFlexGroup?: number;
            columnCount?: number;
            flex?: number | string;
            flexGrow?: number;
            flexShrink?: number;
            fontWeight?: number | string;
            lineClamp?: number;
            lineHeight?: number | string;
            opacity?: number;
            order?: number;
            orphans?: number;
            widows?: number;
            zIndex?: number;
            zoom?: number;

            // SVG-related properties
            fillOpacity?: number;
            strokeOpacity?: number;
            strokeWidth?: number;
        }

        interface HTMLAttributes extends DOMAttributes {
            ref?: string | ((component: HTMLComponent) => void);

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
            formAction?: string;
            formEncType?: string;
            formMethod?: string;
            formNoValidate?: boolean;
            formTarget?: string;
            frameBorder?: number | string;
            headers?: string;
            height?: number | string;
            hidden?: boolean;
            high?: number;
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
            low?: number;
            manifest?: string;
            marginHeight?: number;
            marginWidth?: number;
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
            optimum?: number;
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
            scoped?: boolean;
            scrolling?: string;
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
            unselectable?: boolean;
        }

        interface SVGElementAttributes extends HTMLAttributes {
            viewBox?: string;
            preserveAspectRatio?: string;
        }

        interface SVGAttributes extends DOMAttributes {
            ref?: string | ((component: SVGComponent) => void);

            cx?: number | string;
            cy?: number | string;
            d?: string;
            dx?: number | string;
            dy?: number | string;
            fill?: string;
            fillOpacity?: number | string;
            fontFamily?: string;
            fontSize?: number | string;
            fx?: number | string;
            fy?: number | string;
            gradientTransform?: string;
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
            r?: number | string;
            rx?: number | string;
            ry?: number | string;
            spreadMethod?: string;
            stopColor?: string;
            stopOpacity?: number | string;
            stroke?: string;
            strokeDasharray?: string;
            strokeLinecap?: string;
            strokeOpacity?: number | string;
            strokeWidth?: number | string;
            textAnchor?: string;
            transform?: string;
            version?: string;
            viewBox?: string;
            x1?: number | string;
            x2?: number | string;
            x?: number | string;
            y1?: number | string;
            y2?: number | string
            y?: number | string;
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
}
