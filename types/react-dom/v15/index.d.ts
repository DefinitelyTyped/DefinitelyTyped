// Type definitions for React (react-dom) 15.5
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>
//                 AssureSign <http://www.assuresign.com>
//                 Microsoft <https://microsoft.com>
//                 MartynasZilinskas <https://github.com/MartynasZilinskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import {
    ReactInstance, Component, ComponentState,
    ReactElement, SFCElement, CElement
} from 'react';

// tslint:disable-next-line:export-just-namespace
export = ReactDOM;
export as namespace ReactDOM;

declare namespace ReactDOM {
    function findDOMNode<E extends Element>(instance: ReactInstance): E;
    function findDOMNode(instance: ReactInstance): Element;

    function render<P extends DOMAttributes<T>, T extends Element>(
        element: DOMElement<P, T>,
        container: Element | null,
        callback?: (element: T) => any
    ): T;
    function render<P>(
        element: SFCElement<P>,
        container: Element | null,
        callback?: () => any
    ): void;
    function render<P, T extends Component<P, ComponentState>>(
        element: CElement<P, T>,
        container: Element | null,
        callback?: (component: T) => any
    ): T;
    function render<P>(
        element: ReactElement<P>,
        container: Element | null,
        callback?: (component?: Component<P, ComponentState> | Element) => any
    ): Component<P, ComponentState> | Element | void;
    function render<P>(
        parentComponent: Component<any>,
        element: SFCElement<P>,
        container: Element,
        callback?: () => any
    ): void;

    function unmountComponentAtNode(container: Element): boolean;

    const version: string;

    function unstable_batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void;
    function unstable_batchedUpdates<A>(callback: (a: A) => any, a: A): void;
    function unstable_batchedUpdates(callback: () => any): void;

    function unstable_renderSubtreeIntoContainer<P extends DOMAttributes<T>, T extends Element>(
        parentComponent: Component<any>,
        element: DOMElement<P, T>,
        container: Element,
        callback?: (element: T) => any): T;
    function unstable_renderSubtreeIntoContainer<P, T extends Component<P, ComponentState>>(
        parentComponent: Component<any>,
        element: CElement<P, T>,
        container: Element,
        callback?: (component: T) => any): T;
    function unstable_renderSubtreeIntoContainer<P>(
        parentComponent: Component<any>,
        element: ReactElement<P>,
        container: Element,
        callback?: (component?: Component<P, ComponentState> | Element) => any): Component<P, ComponentState> | Element | void;
}

type NativeAnimationEvent = AnimationEvent;
type NativeClipboardEvent = ClipboardEvent;
type NativeCompositionEvent = CompositionEvent;
type NativeDragEvent = DragEvent;
type NativeFocusEvent = FocusEvent;
type NativeKeyboardEvent = KeyboardEvent;
type NativeMouseEvent = MouseEvent;
type NativeTouchEvent = TouchEvent;
type NativeTransitionEvent = TransitionEvent;
type NativeUIEvent = UIEvent;
type NativeWheelEvent = WheelEvent;

// tslint:disable-next-line:no-mergeable-namespace
declare namespace ReactDOM {
    //
    // React Elements
    // ----------------------------------------------------------------------

    // string fallback for custom web-components
    interface DOMElement<P extends HTMLAttributes<T> | SVGAttributes<T>, T extends Element> extends ReactElement<P> {
        type: string;
        ref: React.Ref<T>;
    }

    // ReactHTML for ReactHTMLElement
    // tslint:disable-next-line:no-empty-interface
    interface ReactHTMLElement<T extends HTMLElement> extends DetailedReactHTMLElement<AllHTMLAttributes<T>, T> { }

    interface DetailedReactHTMLElement<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMElement<P, T> {
        type: keyof ReactHTML;
    }

    // ReactSVG for ReactSVGElement
    interface ReactSVGElement extends DOMElement<SVGAttributes<SVGElement>, SVGElement> {
        type: keyof ReactSVG;
    }

    interface WebViewHTMLAttributes<T> extends HTMLAttributes<T> {
        allowFullScreen?: boolean;
        allowpopups?: boolean;
        autoFocus?: boolean;
        autosize?: boolean;
        blinkfeatures?: string;
        disableblinkfeatures?: string;
        disableguestresize?: boolean;
        disablewebsecurity?: boolean;
        guestinstance?: string;
        httpreferrer?: string;
        nodeintegration?: boolean;
        partition?: string;
        plugins?: boolean;
        preload?: string;
        src?: string;
        useragent?: string;
        webpreferences?: string;
    }

    //
    // Factories
    // ----------------------------------------------------------------------
    type DOMFactory<P extends DOMAttributes<T>, T extends Element> =
    (props?: React.ClassAttributes<T> & P | null, ...children: React.ReactNode[]) => DOMElement<P, T>;

    // tslint:disable-next-line:no-empty-interface
    interface HTMLFactory<T extends HTMLElement> extends DetailedHTMLFactory<AllHTMLAttributes<T>, T> {}

    interface DetailedHTMLFactory<P extends HTMLAttributes<T>, T extends HTMLElement> extends DOMFactory<P, T> {
        (props?: React.ClassAttributes<T> & P | null, ...children: React.ReactNode[]): DetailedReactHTMLElement<P, T>;
    }

    interface SVGFactory extends DOMFactory<SVGAttributes<SVGElement>, SVGElement> {
        (props?: React.ClassAttributes<SVGElement> & SVGAttributes<SVGElement> | null, ...children: React.ReactNode[]): ReactSVGElement;
    }

    const DOM: ReactDOM;

    //
    // Event System
    // ----------------------------------------------------------------------

    interface SyntheticEvent<T> {
        bubbles: boolean;
        currentTarget: EventTarget & T;
        cancelable: boolean;
        defaultPrevented: boolean;
        eventPhase: number;
        isTrusted: boolean;
        nativeEvent: Event;
        preventDefault(): void;
        isDefaultPrevented(): boolean;
        stopPropagation(): void;
        isPropagationStopped(): boolean;
        persist(): void;
        // If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/pull/12239
        target: EventTarget;
        timeStamp: number;
        type: string;
    }

    interface ClipboardEvent<T> extends SyntheticEvent<T> {
        clipboardData: DataTransfer;
        nativeEvent: NativeClipboardEvent;
    }

    interface CompositionEvent<T> extends SyntheticEvent<T> {
        data: string;
        nativeEvent: NativeCompositionEvent;
    }

    interface DragEvent<T> extends MouseEvent<T> {
        dataTransfer: DataTransfer;
        nativeEvent: NativeDragEvent;
    }

    interface FocusEvent<T> extends SyntheticEvent<T> {
        nativeEvent: NativeFocusEvent;
        relatedTarget: EventTarget;
    }

    // tslint:disable-next-line:no-empty-interface
    interface FormEvent<T> extends SyntheticEvent<T> {
    }

    interface InvalidEvent<T> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }

    interface ChangeEvent<T> extends SyntheticEvent<T> {
        target: EventTarget & T;
    }

    interface KeyboardEvent<T> extends SyntheticEvent<T> {
        altKey: boolean;
        charCode: number;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        key: string;
        keyCode: number;
        locale: string;
        location: number;
        metaKey: boolean;
        nativeEvent: NativeKeyboardEvent;
        repeat: boolean;
        shiftKey: boolean;
        which: number;
    }

    interface MouseEvent<T> extends SyntheticEvent<T> {
        altKey: boolean;
        button: number;
        buttons: number;
        clientX: number;
        clientY: number;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        metaKey: boolean;
        nativeEvent: NativeMouseEvent;
        pageX: number;
        pageY: number;
        relatedTarget: EventTarget;
        screenX: number;
        screenY: number;
        shiftKey: boolean;
    }

    interface TouchEvent<T> extends SyntheticEvent<T> {
        altKey: boolean;
        changedTouches: TouchList;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        metaKey: boolean;
        nativeEvent: NativeTouchEvent;
        shiftKey: boolean;
        targetTouches: TouchList;
        touches: TouchList;
    }

    interface UIEvent<T> extends SyntheticEvent<T> {
        detail: number;
        nativeEvent: NativeUIEvent;
        view: AbstractView;
    }

    interface WheelEvent<T> extends MouseEvent<T> {
        deltaMode: number;
        deltaX: number;
        deltaY: number;
        deltaZ: number;
        nativeEvent: NativeWheelEvent;
    }

    interface AnimationEvent<T> extends SyntheticEvent<T> {
        animationName: string;
        elapsedTime: number;
        nativeEvent: NativeAnimationEvent;
        pseudoElement: string;
    }

    interface TransitionEvent<T> extends SyntheticEvent<T> {
        elapsedTime: number;
        nativeEvent: NativeTransitionEvent;
        propertyName: string;
        pseudoElement: string;
    }

    //
    // Event Handler Types
    // ----------------------------------------------------------------------

    type EventHandler<E extends SyntheticEvent<any>> = { bivarianceHack(event: E): void }["bivarianceHack"];

    type ReactEventHandler<T> = EventHandler<SyntheticEvent<T>>;

    type ClipboardEventHandler<T> = EventHandler<ClipboardEvent<T>>;
    type CompositionEventHandler<T> = EventHandler<CompositionEvent<T>>;
    type DragEventHandler<T> = EventHandler<DragEvent<T>>;
    type FocusEventHandler<T> = EventHandler<FocusEvent<T>>;
    type FormEventHandler<T> = EventHandler<FormEvent<T>>;
    type ChangeEventHandler<T> = EventHandler<ChangeEvent<T>>;
    type KeyboardEventHandler<T> = EventHandler<KeyboardEvent<T>>;
    type MouseEventHandler<T> = EventHandler<MouseEvent<T>>;
    type TouchEventHandler<T> = EventHandler<TouchEvent<T>>;
    type UIEventHandler<T> = EventHandler<UIEvent<T>>;
    type WheelEventHandler<T> = EventHandler<WheelEvent<T>>;
    type AnimationEventHandler<T> = EventHandler<AnimationEvent<T>>;
    type TransitionEventHandler<T> = EventHandler<TransitionEvent<T>>;

    interface HTMLProps<T> extends AllHTMLAttributes<T>, React.ClassAttributes<T> {
    }

    type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = React.ClassAttributes<T> & E;

    interface SVGProps<T> extends SVGAttributes<T>, React.ClassAttributes<T> {
    }

    interface DOMAttributes<T> {
        children?: React.ReactNode;
        dangerouslySetInnerHTML?: {
            __html: string;
        };

        // Clipboard Events
        onCopy?: ClipboardEventHandler<T>;
        onCopyCapture?: ClipboardEventHandler<T>;
        onCut?: ClipboardEventHandler<T>;
        onCutCapture?: ClipboardEventHandler<T>;
        onPaste?: ClipboardEventHandler<T>;
        onPasteCapture?: ClipboardEventHandler<T>;

        // Composition Events
        onCompositionEnd?: CompositionEventHandler<T>;
        onCompositionEndCapture?: CompositionEventHandler<T>;
        onCompositionStart?: CompositionEventHandler<T>;
        onCompositionStartCapture?: CompositionEventHandler<T>;
        onCompositionUpdate?: CompositionEventHandler<T>;
        onCompositionUpdateCapture?: CompositionEventHandler<T>;

        // Focus Events
        onFocus?: FocusEventHandler<T>;
        onFocusCapture?: FocusEventHandler<T>;
        onBlur?: FocusEventHandler<T>;
        onBlurCapture?: FocusEventHandler<T>;

        // Form Events
        onChange?: FormEventHandler<T>;
        onChangeCapture?: FormEventHandler<T>;
        onInput?: FormEventHandler<T>;
        onInputCapture?: FormEventHandler<T>;
        onReset?: FormEventHandler<T>;
        onResetCapture?: FormEventHandler<T>;
        onSubmit?: FormEventHandler<T>;
        onSubmitCapture?: FormEventHandler<T>;
        onInvalid?: FormEventHandler<T>;
        onInvalidCapture?: FormEventHandler<T>;

        // Image Events
        onLoad?: ReactEventHandler<T>;
        onLoadCapture?: ReactEventHandler<T>;
        onError?: ReactEventHandler<T>; // also a Media Event
        onErrorCapture?: ReactEventHandler<T>; // also a Media Event

        // Keyboard Events
        onKeyDown?: KeyboardEventHandler<T>;
        onKeyDownCapture?: KeyboardEventHandler<T>;
        onKeyPress?: KeyboardEventHandler<T>;
        onKeyPressCapture?: KeyboardEventHandler<T>;
        onKeyUp?: KeyboardEventHandler<T>;
        onKeyUpCapture?: KeyboardEventHandler<T>;

        // Media Events
        onAbort?: ReactEventHandler<T>;
        onAbortCapture?: ReactEventHandler<T>;
        onCanPlay?: ReactEventHandler<T>;
        onCanPlayCapture?: ReactEventHandler<T>;
        onCanPlayThrough?: ReactEventHandler<T>;
        onCanPlayThroughCapture?: ReactEventHandler<T>;
        onDurationChange?: ReactEventHandler<T>;
        onDurationChangeCapture?: ReactEventHandler<T>;
        onEmptied?: ReactEventHandler<T>;
        onEmptiedCapture?: ReactEventHandler<T>;
        onEncrypted?: ReactEventHandler<T>;
        onEncryptedCapture?: ReactEventHandler<T>;
        onEnded?: ReactEventHandler<T>;
        onEndedCapture?: ReactEventHandler<T>;
        onLoadedData?: ReactEventHandler<T>;
        onLoadedDataCapture?: ReactEventHandler<T>;
        onLoadedMetadata?: ReactEventHandler<T>;
        onLoadedMetadataCapture?: ReactEventHandler<T>;
        onLoadStart?: ReactEventHandler<T>;
        onLoadStartCapture?: ReactEventHandler<T>;
        onPause?: ReactEventHandler<T>;
        onPauseCapture?: ReactEventHandler<T>;
        onPlay?: ReactEventHandler<T>;
        onPlayCapture?: ReactEventHandler<T>;
        onPlaying?: ReactEventHandler<T>;
        onPlayingCapture?: ReactEventHandler<T>;
        onProgress?: ReactEventHandler<T>;
        onProgressCapture?: ReactEventHandler<T>;
        onRateChange?: ReactEventHandler<T>;
        onRateChangeCapture?: ReactEventHandler<T>;
        onSeeked?: ReactEventHandler<T>;
        onSeekedCapture?: ReactEventHandler<T>;
        onSeeking?: ReactEventHandler<T>;
        onSeekingCapture?: ReactEventHandler<T>;
        onStalled?: ReactEventHandler<T>;
        onStalledCapture?: ReactEventHandler<T>;
        onSuspend?: ReactEventHandler<T>;
        onSuspendCapture?: ReactEventHandler<T>;
        onTimeUpdate?: ReactEventHandler<T>;
        onTimeUpdateCapture?: ReactEventHandler<T>;
        onVolumeChange?: ReactEventHandler<T>;
        onVolumeChangeCapture?: ReactEventHandler<T>;
        onWaiting?: ReactEventHandler<T>;
        onWaitingCapture?: ReactEventHandler<T>;

        // MouseEvents
        onClick?: MouseEventHandler<T>;
        onClickCapture?: MouseEventHandler<T>;
        onContextMenu?: MouseEventHandler<T>;
        onContextMenuCapture?: MouseEventHandler<T>;
        onDoubleClick?: MouseEventHandler<T>;
        onDoubleClickCapture?: MouseEventHandler<T>;
        onDrag?: DragEventHandler<T>;
        onDragCapture?: DragEventHandler<T>;
        onDragEnd?: DragEventHandler<T>;
        onDragEndCapture?: DragEventHandler<T>;
        onDragEnter?: DragEventHandler<T>;
        onDragEnterCapture?: DragEventHandler<T>;
        onDragExit?: DragEventHandler<T>;
        onDragExitCapture?: DragEventHandler<T>;
        onDragLeave?: DragEventHandler<T>;
        onDragLeaveCapture?: DragEventHandler<T>;
        onDragOver?: DragEventHandler<T>;
        onDragOverCapture?: DragEventHandler<T>;
        onDragStart?: DragEventHandler<T>;
        onDragStartCapture?: DragEventHandler<T>;
        onDrop?: DragEventHandler<T>;
        onDropCapture?: DragEventHandler<T>;
        onMouseDown?: MouseEventHandler<T>;
        onMouseDownCapture?: MouseEventHandler<T>;
        onMouseEnter?: MouseEventHandler<T>;
        onMouseLeave?: MouseEventHandler<T>;
        onMouseMove?: MouseEventHandler<T>;
        onMouseMoveCapture?: MouseEventHandler<T>;
        onMouseOut?: MouseEventHandler<T>;
        onMouseOutCapture?: MouseEventHandler<T>;
        onMouseOver?: MouseEventHandler<T>;
        onMouseOverCapture?: MouseEventHandler<T>;
        onMouseUp?: MouseEventHandler<T>;
        onMouseUpCapture?: MouseEventHandler<T>;

        // Selection Events
        onSelect?: ReactEventHandler<T>;
        onSelectCapture?: ReactEventHandler<T>;

        // Touch Events
        onTouchCancel?: TouchEventHandler<T>;
        onTouchCancelCapture?: TouchEventHandler<T>;
        onTouchEnd?: TouchEventHandler<T>;
        onTouchEndCapture?: TouchEventHandler<T>;
        onTouchMove?: TouchEventHandler<T>;
        onTouchMoveCapture?: TouchEventHandler<T>;
        onTouchStart?: TouchEventHandler<T>;
        onTouchStartCapture?: TouchEventHandler<T>;

        // UI Events
        onScroll?: UIEventHandler<T>;
        onScrollCapture?: UIEventHandler<T>;

        // Wheel Events
        onWheel?: WheelEventHandler<T>;
        onWheelCapture?: WheelEventHandler<T>;

        // Animation Events
        onAnimationStart?: AnimationEventHandler<T>;
        onAnimationStartCapture?: AnimationEventHandler<T>;
        onAnimationEnd?: AnimationEventHandler<T>;
        onAnimationEndCapture?: AnimationEventHandler<T>;
        onAnimationIteration?: AnimationEventHandler<T>;
        onAnimationIterationCapture?: AnimationEventHandler<T>;

        // Transition Events
        onTransitionEnd?: TransitionEventHandler<T>;
        onTransitionEndCapture?: TransitionEventHandler<T>;
    }

    // See CSS 3 CSS-wide keywords https://www.w3.org/TR/css3-values/#common-keywords
    // See CSS 3 Explicit Defaulting https://www.w3.org/TR/css-cascade-3/#defaulting-keywords
    // "all CSS properties can accept these values"
    type CSSWideKeyword = "initial" | "inherit" | "unset";

    // See CSS 3 <percentage> type https://drafts.csswg.org/css-values-3/#percentages
    type CSSPercentage = string;

    // See CSS 3 <length> type https://drafts.csswg.org/css-values-3/#lengths
    type CSSLength = number | string;

    // This interface is not complete. Only properties accepting
    // unitless numbers are listed here (see CSSProperty.js in React)
    // tslint:disable:no-any-union
    interface CSSProperties {
        /**
         * Aligns a flex container's lines within the flex container when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.
         */
        alignContent?: CSSWideKeyword | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch";

        /**
         * Sets the default alignment in the cross axis for all of the flex container's items, including anonymous flex items, similarly to how justify-content aligns items along the main axis.
         */
        alignItems?: CSSWideKeyword | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

        /**
         * Allows the default alignment to be overridden for individual flex items.
         */
        alignSelf?: CSSWideKeyword | "auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

        /**
         * This property allows precise alignment of elements, such as graphics,
         * that do not have a baseline-table or lack the desired baseline in their baseline-table.
         * With the alignment-adjust property, the position of the baseline identified by the alignment-baseline
         * can be explicitly determined. It also determines precisely the alignment point for each glyph within a textual element.
         */
        alignmentAdjust?: CSSWideKeyword | any;

        alignmentBaseline?: CSSWideKeyword | any;

        /**
         * Defines a length of time to elapse before an animation starts, allowing an animation to begin execution some time after it is applied.
         */
        animationDelay?: CSSWideKeyword | any;

        /**
         * Defines whether an animation should run in reverse on some or all cycles.
         */
        animationDirection?: CSSWideKeyword | any;

        /**
         * Specifies how many times an animation cycle should play.
         */
        animationIterationCount?: CSSWideKeyword | any;

        /**
         * Defines the list of animations that apply to the element.
         */
        animationName?: CSSWideKeyword | any;

        /**
         * Defines whether an animation is running or paused.
         */
        animationPlayState?: CSSWideKeyword | any;

        /**
         * Allows changing the style of any element to platform-based interface elements or vice versa.
         */
        appearance?: CSSWideKeyword | any;

        /**
         * Determines whether or not the “back” side of a transformed element is visible when facing the viewer.
         */
        backfaceVisibility?: CSSWideKeyword | any;

        /**
         * Shorthand property to set the values for one or more of:
         * background-clip, background-color, background-image,
         * background-origin, background-position, background-repeat,
         * background-size, and background-attachment.
         */
        background?: CSSWideKeyword | any;

        /**
         * If a background-image is specified, this property determines
         * whether that image's position is fixed within the viewport,
         * or scrolls along with its containing block.
         * See CSS 3 background-attachment property https://drafts.csswg.org/css-backgrounds-3/#the-background-attachment
         */
        backgroundAttachment?: CSSWideKeyword | "scroll" | "fixed" | "local";

        /**
         * This property describes how the element's background images should blend with each other and the element's background color.
         * The value is a list of blend modes that corresponds to each background image. Each element in the list will apply to the
         * corresponding element of background-image. If a property doesn’t have enough comma-separated values to match the number of layers,
         * the UA must calculate its used value by repeating the list of values until there are enough.
         */
        backgroundBlendMode?: CSSWideKeyword | any;

        /**
         * Sets the background color of an element.
         */
        backgroundColor?: CSSWideKeyword | any;

        backgroundComposite?: CSSWideKeyword | any;

        /**
         * Applies one or more background images to an element. These can be any valid CSS image, including url() paths to image files or CSS gradients.
         */
        backgroundImage?: CSSWideKeyword | any;

        /**
         * Specifies what the background-position property is relative to.
         */
        backgroundOrigin?: CSSWideKeyword | any;

        /**
         * Sets the position of a background image.
         */
        backgroundPosition?: CSSWideKeyword | any;

        /**
         * Background-repeat defines if and how background images will be repeated after they have been sized and positioned
         */
        backgroundRepeat?: CSSWideKeyword | any;

        /**
         * Obsolete - spec retired, not implemented.
         */
        baselineShift?: CSSWideKeyword | any;

        /**
         * Non standard. Sets or retrieves the location of the Dynamic HTML (DHTML) behavior.
         */
        behavior?: CSSWideKeyword | any;

        /**
         * Shorthand property that defines the different properties of all four sides of an element's border in a single declaration.
         * It can be used to set border-width, border-style and border-color, or a subset of these.
         */
        border?: CSSWideKeyword | any;

        /**
         * Shorthand that sets the values of border-bottom-color,
         * border-bottom-style, and border-bottom-width.
         */
        borderBottom?: CSSWideKeyword | any;

        /**
         * Sets the color of the bottom border of an element.
         */
        borderBottomColor?: CSSWideKeyword | any;

        /**
         * Defines the shape of the border of the bottom-left corner.
         */
        borderBottomLeftRadius?: CSSWideKeyword | any;

        /**
         * Defines the shape of the border of the bottom-right corner.
         */
        borderBottomRightRadius?: CSSWideKeyword | any;

        /**
         * Sets the line style of the bottom border of a box.
         */
        borderBottomStyle?: CSSWideKeyword | any;

        /**
         * Sets the width of an element's bottom border. To set all four borders,
         * use the border-width shorthand property which sets the values simultaneously for border-top-width,
         * border-right-width, border-bottom-width, and border-left-width.
         */
        borderBottomWidth?: CSSWideKeyword | any;

        /**
         * Border-collapse can be used for collapsing the borders between table cells
         */
        borderCollapse?: CSSWideKeyword | any;

        /**
         * The CSS border-color property sets the color of an element's four borders.
         * This property can have from one to four values, made up of the elementary properties:
         *      •       border-top-color
         *      •       border-right-color
         *      •       border-bottom-color
         *      •       border-left-color The default color is the currentColor of each of these values.
         * If you provide one value, it sets the color for the element. Two values set the horizontal and vertical values,
         * respectively. Providing three values sets the top, vertical, and bottom values, in that order.
         * Four values set all for sides: top, right, bottom, and left, in that order.
         */
        borderColor?: CSSWideKeyword | any;

        /**
         * Specifies different corner clipping effects, such as scoop (inner curves), bevel (straight cuts) or notch (cut-off rectangles).
         * Works along with border-radius to specify the size of each corner effect.
         */
        borderCornerShape?: CSSWideKeyword | any;

        /**
         * The property border-image-source is used to set the image to be used instead of the border style.
         * If this is set to none the border-style is used instead.
         */
        borderImageSource?: CSSWideKeyword | any;

        /**
         * The border-image-width CSS property defines the offset to use for dividing the border image in nine parts,
         * the top-left corner, central top edge, top-right-corner, central right edge, bottom-right corner, central bottom edge,
         * bottom-left corner, and central right edge. They represent inward distance from the top, right, bottom, and left edges.
         */
        borderImageWidth?: CSSWideKeyword | any;

        /**
         * Shorthand property that defines the border-width, border-style and border-color of an element's left border in a single declaration.
         * Note that you can use the corresponding longhand properties to set specific individual properties of the left border — border-left-width,
         * border-left-style and border-left-color.
         */
        borderLeft?: CSSWideKeyword | any;

        /**
         * The CSS border-left-color property sets the color of an element's left border. This page explains the border-left-color value,
         * but often you will find it more convenient to fix the border's left color as part of a shorthand set, either border-left or border-color.
         * Colors can be defined several ways. For more information, see Usage.
         */
        borderLeftColor?: CSSWideKeyword | any;

        /**
         * Sets the style of an element's left border. To set all four borders, use the shorthand property, border-style.
         * Otherwise, you can set the borders individually with border-top-style, border-right-style, border-bottom-style, border-left-style.
         */
        borderLeftStyle?: CSSWideKeyword | any;

        /**
         * Sets the width of an element's left border. To set all four borders,
         * use the border-width shorthand property which sets the values simultaneously for border-top-width,
         * border-right-width, border-bottom-width, and border-left-width.
         */
        borderLeftWidth?: CSSWideKeyword | any;

        /**
         * Shorthand property that defines the border-width, border-style and border-color of an element's right border
         * in a single declaration. Note that you can use the corresponding longhand properties to set specific
         * individual properties of the right border — border-right-width, border-right-style and border-right-color.
         */
        borderRight?: CSSWideKeyword | any;

        /**
         * Sets the color of an element's right border. This page explains the border-right-color value,
         * but often you will find it more convenient to fix the border's right color as part of a shorthand set,
         * either border-right or border-color.
         * Colors can be defined several ways. For more information, see Usage.
         */
        borderRightColor?: CSSWideKeyword | any;

        /**
         * Sets the style of an element's right border. To set all four borders, use the shorthand property,
         * border-style. Otherwise, you can set the borders individually with border-top-style, border-right-style,
         * border-bottom-style, border-left-style.
         */
        borderRightStyle?: CSSWideKeyword | any;

        /**
         * Sets the width of an element's right border. To set all four borders,
         * use the border-width shorthand property which sets the values simultaneously for border-top-width,
         * border-right-width, border-bottom-width, and border-left-width.
         */
        borderRightWidth?: CSSWideKeyword | any;

        /**
         * Specifies the distance between the borders of adjacent cells.
         */
        borderSpacing?: CSSWideKeyword | any;

        /**
         * Sets the style of an element's four borders. This property can have from one to four values.
         * With only one value, the value will be applied to all four borders;
         * otherwise, this works as a shorthand property for each of border-top-style, border-right-style,
         * border-bottom-style, border-left-style, where each border style may be assigned a separate value.
         */
        borderStyle?: CSSWideKeyword | any;

        /**
         * Shorthand property that defines the border-width, border-style and border-color of an element's top border
         * in a single declaration. Note that you can use the corresponding longhand properties to set specific
         * individual properties of the top border — border-top-width, border-top-style and border-top-color.
         */
        borderTop?: CSSWideKeyword | any;

        /**
         * Sets the color of an element's top border. This page explains the border-top-color value,
         * but often you will find it more convenient to fix the border's top color as part of a shorthand set,
         * either border-top or border-color.
         * Colors can be defined several ways. For more information, see Usage.
         */
        borderTopColor?: CSSWideKeyword | any;

        /**
         * Sets the rounding of the top-left corner of the element.
         */
        borderTopLeftRadius?: CSSWideKeyword | any;

        /**
         * Sets the rounding of the top-right corner of the element.
         */
        borderTopRightRadius?: CSSWideKeyword | any;

        /**
         * Sets the style of an element's top border. To set all four borders, use the shorthand property, border-style.
         * Otherwise, you can set the borders individually with border-top-style, border-right-style, border-bottom-style, border-left-style.
         */
        borderTopStyle?: CSSWideKeyword | any;

        /**
         * Sets the width of an element's top border. To set all four borders,
         * use the border-width shorthand property which sets the values simultaneously for border-top-width,
         * border-right-width, border-bottom-width, and border-left-width.
         */
        borderTopWidth?: CSSWideKeyword | any;

        /**
         * Sets the width of an element's four borders. This property can have from one to four values.
         * This is a shorthand property for setting values simultaneously for border-top-width,
         * border-right-width, border-bottom-width, and border-left-width.
         */
        borderWidth?: CSSWideKeyword | any;

        /**
         * This property specifies how far an absolutely positioned box's bottom margin edge
         * is offset above the bottom edge of the box's containing block. For relatively positioned boxes,
         * the offset is with respect to the bottom edges of the box itself
         * (i.e., the box is given a position in the normal flow, then offset from that position according to these properties).
         */
        bottom?: CSSWideKeyword | any;

        /**
         * Obsolete.
         */
        boxAlign?: CSSWideKeyword | any;

        /**
         * Breaks a box into fragments creating new borders,
         * padding and repeating backgrounds or lets it stay as a continuous box on a page break,
         * column break, or, for inline elements, at a line break.
         */
        boxDecorationBreak?: CSSWideKeyword | any;

        /**
         * Deprecated
         */
        boxDirection?: CSSWideKeyword | any;

        /**
         * Do not use. This property has been replaced by the flex-wrap property.
         * Gets or sets a value that specifies the direction to add successive rows or columns when the value of box-lines is set to multiple.
         */
        boxLineProgression?: CSSWideKeyword | any;

        /**
         * Do not use. This property has been replaced by the flex-wrap property.
         * Gets or sets a value that specifies whether child elements wrap onto multiple lines or columns based on the space available in the object.
         */
        boxLines?: CSSWideKeyword | any;

        /**
         * Do not use. This property has been replaced by flex-order.
         * Specifies the ordinal group that a child element of the object belongs to.
         * This ordinal value identifies the display order (along the axis defined by the box-orient property) for the group.
         */
        boxOrdinalGroup?: CSSWideKeyword | any;

        /**
         * Deprecated.
         */
        boxFlex?: CSSWideKeyword | number;

        /**
         * Deprecated.
         */
        boxFlexGroup?: CSSWideKeyword | number;

        /**
         * Cast a drop shadow from the frame of almost any element.
         * MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
         */
        boxShadow?: CSSWideKeyword | any;

        /**
         * The CSS break-after property allows you to force a break on multi-column layouts.
         * More specifically, it allows you to force a break after an element.
         * It allows you to determine if a break should occur, and what type of break it should be.
         * The break-after CSS property describes how the page, column or region break behaves after the generated box.
         * If there is no generated box, the property is ignored.
         */
        breakAfter?: CSSWideKeyword | any;

        /**
         * Control page/column/region breaks that fall above a block of content
         */
        breakBefore?: CSSWideKeyword | any;

        /**
         * Control page/column/region breaks that fall within a block of content
         */
        breakInside?: CSSWideKeyword | any;

        /**
         * The clear CSS property specifies if an element can be positioned next to
         * or must be positioned below the floating elements that precede it in the markup.
         */
        clear?: CSSWideKeyword | any;

        /**
         * Deprecated; see clip-path.
         * Lets you specify the dimensions of an absolutely positioned element that should be visible,
         * and the element is clipped into this shape, and displayed.
         */
        clip?: CSSWideKeyword | any;

        /**
         * Clipping crops an graphic, so that only a portion of the graphic is rendered, or filled.
         * This clip-rule property, when used with the clip-path property, defines which clip rule, or algorithm,
         * to use when filling the different parts of a graphics.
         */
        clipRule?: CSSWideKeyword | any;

        /**
         * The color property sets the color of an element's foreground content (usually text),
         * accepting any standard CSS color from keywords and hex values to RGB(a) and HSL(a).
         */
        color?: CSSWideKeyword | any;

        /**
         * Describes the number of columns of the element.
         * See CSS 3 column-count property https://www.w3.org/TR/css3-multicol/#cc
         */
        columnCount?: CSSWideKeyword | number | "auto";

        /**
         * Specifies how to fill columns (balanced or sequential).
         */
        columnFill?: CSSWideKeyword | any;

        /**
         * The column-gap property controls the width of the gap between columns in multi-column elements.
         */
        columnGap?: CSSWideKeyword | any;

        /**
         * Sets the width, style, and color of the rule between columns.
         */
        columnRule?: CSSWideKeyword | any;

        /**
         * Specifies the color of the rule between columns.
         */
        columnRuleColor?: CSSWideKeyword | any;

        /**
         * Specifies the width of the rule between columns.
         */
        columnRuleWidth?: CSSWideKeyword | any;

        /**
         * The column-span CSS property makes it possible for an element to span across all columns when its value is set to all.
         * An element that spans more than one column is called a spanning element.
         */
        columnSpan?: CSSWideKeyword | any;

        /**
         * Specifies the width of columns in multi-column elements.
         */
        columnWidth?: CSSWideKeyword | any;

        /**
         * This property is a shorthand property for setting column-width and/or column-count.
         */
        columns?: CSSWideKeyword | any;

        /**
         * The counter-increment property accepts one or more names of counters (identifiers),
         * each one optionally followed by an integer which specifies the value by which the counter should be incremented
         * (e.g. if the value is 2, the counter increases by 2 each time it is invoked).
         */
        counterIncrement?: CSSWideKeyword | any;

        /**
         * The counter-reset property contains a list of one or more names of counters,
         * each one optionally followed by an integer (otherwise, the integer defaults to 0.).
         * Each time the given element is invoked, the counters specified by the property are set to the given integer.
         */
        counterReset?: CSSWideKeyword | any;

        /**
         * The cue property specifies sound files (known as an "auditory icon") to be played by speech media agents
         * before and after presenting an element's content; if only one file is specified, it is played both before and after.
         * The volume at which the file(s) should be played, relative to the volume of the main element, may also be specified.
         * The icon files may also be set separately with the cue-before and cue-after properties.
         */
        cue?: CSSWideKeyword | any;

        /**
         * The cue-after property specifies a sound file (known as an "auditory icon") to be played by speech media agents
         * after presenting an element's content; the volume at which the file should be played may also be specified.
         * The shorthand property cue sets cue sounds for both before and after the element is presented.
         */
        cueAfter?: CSSWideKeyword | any;

        /**
         * Specifies the mouse cursor displayed when the mouse pointer is over an element.
         */
        cursor?: CSSWideKeyword | any;

        /**
         * The direction CSS property specifies the text direction/writing direction. The rtl is used for Hebrew or Arabic text, the ltr is for other languages.
         */
        direction?: CSSWideKeyword | any;

        /**
         * This property specifies the type of rendering box used for an element. It is a shorthand property for many other display properties.
         */
        display?: CSSWideKeyword | any;

        /**
         * The ‘fill’ property paints the interior of the given graphical element.
         * The area to be painted consists of any areas inside the outline of the shape.
         * To determine the inside of the shape, all subpaths are considered,
         * and the interior is determined according to the rules associated with the current value of the ‘fill-rule’ property.
         * The zero-width geometric outline of a shape is included in the area to be painted.
         */
        fill?: CSSWideKeyword | any;

        /**
         * SVG: Specifies the opacity of the color or the content the current object is filled with.
         * See SVG 1.1 https://www.w3.org/TR/SVG/painting.html#FillOpacityProperty
         */
        fillOpacity?: CSSWideKeyword | number;

        /**
         * The ‘fill-rule’ property indicates the algorithm which is to be used to determine what parts of the canvas are included inside the shape.
         * For a simple, non-intersecting path, it is intuitively clear what region lies "inside";
         * however, for a more complex path, such as a path that intersects itself or where one subpath encloses another,
         * the interpretation of "inside" is not so obvious.
         * The ‘fill-rule’ property provides two options for how the inside of a shape is determined:
         */
        fillRule?: CSSWideKeyword | any;

        /**
         * Applies various image processing effects. This property is largely unsupported. See Compatibility section for more information.
         */
        filter?: CSSWideKeyword | any;

        /**
         * Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
         */
        flex?: CSSWideKeyword | number | string;

        /**
         * Obsolete, do not use. This property has been renamed to align-items.
         * Specifies the alignment (perpendicular to the layout axis defined by the flex-direction property) of child elements of the object.
         */
        flexAlign?: CSSWideKeyword | any;

        /**
         * The flex-basis CSS property describes the initial main size of the flex item
         * before any free space is distributed according to the flex factors described in the flex property (flex-grow and flex-shrink).
         */
        flexBasis?: CSSWideKeyword | any;

        /**
         * The flex-direction CSS property describes how flex items are placed in the flex container, by setting the direction of the flex container's main axis.
         */
        flexDirection?: CSSWideKeyword | "row" | "row-reverse" | "column" | "column-reverse";

        /**
         * The flex-flow CSS property defines the flex container's main and cross axis. It is a shorthand property for the flex-direction and flex-wrap properties.
         */
        flexFlow?: CSSWideKeyword | string;

        /**
         * Specifies the flex grow factor of a flex item.
         * See CSS flex-grow property https://drafts.csswg.org/css-flexbox-1/#flex-grow-property
         */
        flexGrow?: CSSWideKeyword | number;

        /**
         * Do not use. This property has been renamed to align-self
         * Specifies the alignment (perpendicular to the layout axis defined by flex-direction) of child elements of the object.
         */
        flexItemAlign?: CSSWideKeyword | any;

        /**
         * Do not use. This property has been renamed to align-content.
         * Specifies how a flexbox's lines align within the flexbox when there is extra space along the axis that is perpendicular to the axis defined by the flex-direction property.
         */
        flexLinePack?: CSSWideKeyword | any;

        /**
         * Gets or sets a value that specifies the ordinal group that a flexbox element belongs to. This ordinal value identifies the display order for the group.
         */
        flexOrder?: CSSWideKeyword | any;

        /**
         * Specifies the flex shrink factor of a flex item.
         * See CSS flex-shrink property https://drafts.csswg.org/css-flexbox-1/#flex-shrink-property
         */
        flexShrink?: CSSWideKeyword | number;

        /**
         * Specifies whether flex items are forced into a single line or can be wrapped onto multiple lines.
         * If wrapping is allowed, this property also enables you to control the direction in which lines are stacked.
         * See CSS flex-wrap property https://drafts.csswg.org/css-flexbox-1/#flex-wrap-property
         */
        flexWrap?: CSSWideKeyword | "nowrap" | "wrap" | "wrap-reverse";

        /**
         * Elements which have the style float are floated horizontally.
         * These elements can move as far to the left or right of the containing element.
         * All elements after the floating element will flow around it, but elements before the floating element are not impacted.
         * If several floating elements are placed after each other, they will float next to each other as long as there is room.
         */
        float?: CSSWideKeyword | any;

        /**
         * Flows content from a named flow (specified by a corresponding flow-into) through selected elements to form a dynamic chain of layout regions.
         */
        flowFrom?: CSSWideKeyword | any;

        /**
         * The font property is shorthand that allows you to do one of two things: you can either set up six of the most mature font properties in one line,
         * or you can set one of a choice of keywords to adopt a system font setting.
         */
        font?: CSSWideKeyword | any;

        /**
         * The font-family property allows one or more font family names and/or generic family names to be specified for usage on the selected element(s)' text.
         * The browser then goes through the list; for each character in the selection it applies the first font family that has an available glyph for that character.
         */
        fontFamily?: CSSWideKeyword | any;

        /**
         * The font-kerning property allows contextual adjustment of inter-glyph spacing, i.e. the spaces between the characters in text.
         * This property controls <bold>metric kerning</bold> - that utilizes adjustment data contained in the font. Optical Kerning is not supported as yet.
         */
        fontKerning?: CSSWideKeyword | any;

        /**
         * Specifies the size of the font. Used to compute em and ex units.
         * See CSS 3 font-size property https://www.w3.org/TR/css-fonts-3/#propdef-font-size
         */
        fontSize?: CSSWideKeyword |
        "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large" |
        "larger" | "smaller" |
        CSSLength | CSSPercentage;

        /**
         * The font-size-adjust property adjusts the font-size of the fallback fonts defined with font-family,
         * so that the x-height is the same no matter what font is used.
         * This preserves the readability of the text when fallback happens.
         * See CSS 3 font-size-adjust property https://www.w3.org/TR/css-fonts-3/#propdef-font-size-adjust
         */
        fontSizeAdjust?: CSSWideKeyword | "none" | number;

        /**
         * Allows you to expand or condense the widths for a normal, condensed, or expanded font face.
         * See CSS 3 font-stretch property https://drafts.csswg.org/css-fonts-3/#propdef-font-stretch
         */
        fontStretch?: CSSWideKeyword |
        "normal" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" |
        "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded";

        /**
         * The font-style property allows normal, italic, or oblique faces to be selected.
         * Italic forms are generally cursive in nature while oblique faces are typically sloped versions of the regular face.
         * Oblique faces can be simulated by artificially sloping the glyphs of the regular face.
         * See CSS 3 font-style property https://www.w3.org/TR/css-fonts-3/#propdef-font-style
         */
        fontStyle?: CSSWideKeyword | "normal" | "italic" | "oblique";

        /**
         * This value specifies whether the user agent is allowed to synthesize bold or oblique font faces when a font family lacks bold or italic faces.
         */
        fontSynthesis?: CSSWideKeyword | any;

        /**
         * The font-variant property enables you to select the small-caps font within a font family.
         */
        fontVariant?: CSSWideKeyword | any;

        /**
         * Fonts can provide alternate glyphs in addition to default glyph for a character. This property provides control over the selection of these alternate glyphs.
         */
        fontVariantAlternates?: CSSWideKeyword | any;

        /**
         * Specifies the weight or boldness of the font.
         * See CSS 3 'font-weight' property https://www.w3.org/TR/css-fonts-3/#propdef-font-weight
         */
        fontWeight?: CSSWideKeyword | "normal" | "bold" | "bolder" | "lighter" | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

        /**
         * Lays out one or more grid items bound by 4 grid lines. Shorthand for setting grid-column-start, grid-column-end, grid-row-start, and grid-row-end in a single declaration.
         */
        gridArea?: CSSWideKeyword | any;

        /**
         * Controls a grid item's placement in a grid area, particularly grid position and a grid span. Shorthand for setting grid-column-start and grid-column-end in a single declaration.
         */
        gridColumn?: CSSWideKeyword | any;

        /**
         * Controls a grid item's placement in a grid area as well as grid position and a grid span.
         * The grid-column-end property (with grid-row-start, grid-row-end, and grid-column-start) determines a grid item's placement by specifying the grid lines of a grid item's grid area.
         */
        gridColumnEnd?: CSSWideKeyword | any;

        /**
         * Determines a grid item's placement by specifying the starting grid lines of a grid item's grid area.
         * A grid item's placement in a grid area consists of a grid position and a grid span.
         * See also ( grid-row-start, grid-row-end, and grid-column-end)
         */
        gridColumnStart?: CSSWideKeyword | any;

        /**
         * Gets or sets a value that indicates which row an element within a Grid should appear in. Shorthand for setting grid-row-start and grid-row-end in a single declaration.
         */
        gridRow?: CSSWideKeyword | any;

        /**
         * Determines a grid item’s placement by specifying the block-end. A grid item's placement in a grid area consists of a grid position and a grid span.
         * The grid-row-end property (with grid-row-start, grid-column-start, and grid-column-end) determines a grid item's placement by specifying the grid lines of a grid item's grid area.
         */
        gridRowEnd?: CSSWideKeyword | any;

        /**
         * Specifies a row position based upon an integer location, string value, or desired row size.
         * css/properties/grid-row is used as short-hand for grid-row-position and grid-row-position
         */
        gridRowPosition?: CSSWideKeyword | any;

        gridRowSpan?: CSSWideKeyword | any;

        /**
         * Specifies named grid areas which are not associated with any particular grid item, but can be referenced from the grid-placement properties.
         * The syntax of the grid-template-areas property also provides a visualization of the structure of the grid, making the overall layout of the grid container easier to understand.
         */
        gridTemplateAreas?: CSSWideKeyword | any;

        /**
         * Specifies (with grid-template-rows) the line names and track sizing functions of the grid.
         * Each sizing function can be specified as a length, a percentage of the grid container’s size,
         * a measurement of the contents occupying the column or row, or a fraction of the free space in the grid.
         */
        gridTemplateColumns?: CSSWideKeyword | any;

        /**
         * Specifies (with grid-template-columns) the line names and track sizing functions of the grid.
         * Each sizing function can be specified as a length, a percentage of the grid container’s size,
         * a measurement of the contents occupying the column or row, or a fraction of the free space in the grid.
         */
        gridTemplateRows?: CSSWideKeyword | any;

        /**
         * Sets the height of an element. The content area of the element height does not include the padding, border, and margin of the element.
         */
        height?: CSSWideKeyword | any;

        /**
         * Specifies the minimum number of characters in a hyphenated word
         */
        hyphenateLimitChars?: CSSWideKeyword | any;

        /**
         * Indicates the maximum number of successive hyphenated lines in an element. The ‘no-limit’ value means that there is no limit.
         */
        hyphenateLimitLines?: CSSWideKeyword | any;

        /**
         * Specifies the maximum amount of trailing whitespace (before justification) that may be left in a line before hyphenation is triggered
         * to pull part of a word from the next line back up into the current one.
         */
        hyphenateLimitZone?: CSSWideKeyword | any;

        /**
         * Specifies whether or not words in a sentence can be split by the use of a manual or automatic hyphenation mechanism.
         */
        hyphens?: CSSWideKeyword | any;

        imeMode?: CSSWideKeyword | any;

        /**
         * Defines how the browser distributes space between and around flex items
         * along the main-axis of their container.
         * See CSS justify-content property https://www.w3.org/TR/css-flexbox-1/#justify-content-property
         */
        justifyContent?: CSSWideKeyword | "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";

        layoutGrid?: CSSWideKeyword | any;

        layoutGridChar?: CSSWideKeyword | any;

        layoutGridLine?: CSSWideKeyword | any;

        layoutGridMode?: CSSWideKeyword | any;

        layoutGridType?: CSSWideKeyword | any;

        /**
         * Sets the left edge of an element
         */
        left?: CSSWideKeyword | any;

        /**
         * The letter-spacing CSS property specifies the spacing behavior between text characters.
         */
        letterSpacing?: CSSWideKeyword | any;

        /**
         * Deprecated. Gets or sets line-breaking rules for text in selected languages such as Japanese, Chinese, and Korean.
         */
        lineBreak?: CSSWideKeyword | any;

        lineClamp?: CSSWideKeyword | number;

        /**
         * Specifies the height of an inline block level element.
         * See CSS 2.1 line-height property https://www.w3.org/TR/CSS21/visudet.html#propdef-line-height
         */
        lineHeight?: CSSWideKeyword | "normal" | number | CSSLength | CSSPercentage;

        /**
         * Shorthand property that sets the list-style-type, list-style-position and list-style-image properties in one declaration.
         */
        listStyle?: CSSWideKeyword | any;

        /**
         * This property sets the image that will be used as the list item marker. When the image is available,
         * it will replace the marker set with the 'list-style-type' marker. That also means that if the image is not available,
         * it will show the style specified by list-style-property
         */
        listStyleImage?: CSSWideKeyword | any;

        /**
         * Specifies if the list-item markers should appear inside or outside the content flow.
         */
        listStylePosition?: CSSWideKeyword | any;

        /**
         * Specifies the type of list-item marker in a list.
         */
        listStyleType?: CSSWideKeyword | any;

        /**
         * The margin property is shorthand to allow you to set all four margins of an element at once.
         * Its equivalent longhand properties are margin-top, margin-right, margin-bottom and margin-left.
         * Negative values are also allowed.
         */
        margin?: CSSWideKeyword | any;

        /**
         * margin-bottom sets the bottom margin of an element.
         */
        marginBottom?: CSSWideKeyword | any;

        /**
         * margin-left sets the left margin of an element.
         */
        marginLeft?: CSSWideKeyword | any;

        /**
         * margin-right sets the right margin of an element.
         */
        marginRight?: CSSWideKeyword | any;

        /**
         * margin-top sets the top margin of an element.
         */
        marginTop?: CSSWideKeyword | any;

        /**
         * The marquee-direction determines the initial direction in which the marquee content moves.
         */
        marqueeDirection?: CSSWideKeyword | any;

        /**
         * The 'marquee-style' property determines a marquee's scrolling behavior.
         */
        marqueeStyle?: CSSWideKeyword | any;

        /**
         * This property is shorthand for setting mask-image, mask-mode, mask-repeat, mask-position, mask-clip, mask-origin, mask-composite and mask-size.
         * Omitted values are set to their original properties' initial values.
         */
        mask?: CSSWideKeyword | any;

        /**
         * This property is shorthand for setting mask-border-source, mask-border-slice, mask-border-width, mask-border-outset, and mask-border-repeat.
         * Omitted values are set to their original properties' initial values.
         */
        maskBorder?: CSSWideKeyword | any;

        /**
         * This property specifies how the images for the sides and the middle part of the mask image are scaled and tiled.
         * The first keyword applies to the horizontal sides, the second one applies to the vertical ones.
         * If the second keyword is absent, it is assumed to be the same as the first, similar to the CSS border-image-repeat property.
         */
        maskBorderRepeat?: CSSWideKeyword | any;

        /**
         * This property specifies inward offsets from the top, right, bottom, and left edges of the mask image,
         * dividing it into nine regions: four corners, four edges, and a middle.
         * The middle image part is discarded and treated as fully transparent black unless the fill keyword is present.
         * The four values set the top, right, bottom and left offsets in that order, similar to the CSS border-image-slice property.
         */
        maskBorderSlice?: CSSWideKeyword | any;

        /**
         * Specifies an image to be used as a mask. An image that is empty, fails to download, is non-existent, or cannot be displayed is ignored and does not mask the element.
         */
        maskBorderSource?: CSSWideKeyword | any;

        /**
         * This property sets the width of the mask box image, similar to the CSS border-image-width property.
         */
        maskBorderWidth?: CSSWideKeyword | any;

        /**
         * Determines the mask painting area, which defines the area that is affected by the mask.
         * The painted content of an element may be restricted to this area.
         */
        maskClip?: CSSWideKeyword | any;

        /**
         * For elements rendered as a single box, specifies the mask positioning area.
         * For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages)
         * specifies which boxes box-decoration-break operates on to determine the mask positioning area(s).
         */
        maskOrigin?: CSSWideKeyword | any;

        /**
         * This property must not be used. It is no longer included in any standard or standard track specification,
         * nor is it implemented in any browser. It is only used when the text-align-last property is set to size.
         * It controls allowed adjustments of font-size to fit line content.
         */
        maxFontSize?: CSSWideKeyword | any;

        /**
         * Sets the maximum height for an element. It prevents the height of the element to exceed the specified value.
         * If min-height is specified and is greater than max-height, max-height is overridden.
         */
        maxHeight?: CSSWideKeyword | any;

        /**
         * Sets the maximum width for an element. It limits the width property to be larger than the value specified in max-width.
         */
        maxWidth?: CSSWideKeyword | any;

        /**
         * Sets the minimum height for an element. It prevents the height of the element to be smaller than the specified value.
         * The value of min-height overrides both max-height and height.
         */
        minHeight?: CSSWideKeyword | any;

        /**
         * Sets the minimum width of an element. It limits the width property to be not smaller than the value specified in min-width.
         */
        minWidth?: CSSWideKeyword | any;

        /**
         * Specifies the transparency of an element.
         * See CSS 3 opacity property https://drafts.csswg.org/css-color-3/#opacity
         */
        opacity?: CSSWideKeyword | number;

        /**
         * Specifies the order used to lay out flex items in their flex container.
         * Elements are laid out in the ascending order of the order value.
         * See CSS order property https://drafts.csswg.org/css-flexbox-1/#order-property
         */
        order?: CSSWideKeyword | number;

        /**
         * In paged media, this property defines the minimum number of lines in
         * a block container that must be left at the bottom of the page.
         * See CSS 3 orphans, widows properties https://drafts.csswg.org/css-break-3/#widows-orphans
         */
        orphans?: CSSWideKeyword | number;

        /**
         * The CSS outline property is a shorthand property for setting one or more of the individual outline properties outline-style,
         * outline-width and outline-color in a single rule. In most cases the use of this shortcut is preferable and more convenient.
         * Outlines differ from borders in the following ways:
         *      •       Outlines do not take up space, they are drawn above the content.
         *      •       Outlines may be non-rectangular. They are rectangular in Gecko/Firefox.
         *              Internet Explorer attempts to place the smallest contiguous outline around all elements or shapes that are indicated to have an outline.
         *              Opera draws a non-rectangular shape around a construct.
         */
        outline?: CSSWideKeyword | any;

        /**
         * The outline-color property sets the color of the outline of an element. An outline is a line that is drawn around elements, outside the border edge, to make the element stand out.
         */
        outlineColor?: CSSWideKeyword | any;

        /**
         * The outline-offset property offsets the outline and draw it beyond the border edge.
         */
        outlineOffset?: CSSWideKeyword | any;

        /**
         * The overflow property controls how extra content exceeding the bounding box of an element is rendered.
         * It can be used in conjunction with an element that has a fixed width and height, to eliminate text-induced page distortion.
         */
        overflow?: CSSWideKeyword | "auto" | "hidden" | "scroll" | "visible";

        /**
         * Specifies the preferred scrolling methods for elements that overflow.
         */
        overflowStyle?: CSSWideKeyword | any;

        /**
         * Controls how extra content exceeding the x-axis of the bounding box of an element is rendered.
         */
        overflowX?: CSSWideKeyword | "auto" | "hidden" | "scroll" | "visible";

        /**
         * Controls how extra content exceeding the y-axis of the bounding box of an element is rendered.
         */
        overflowY?: CSSWideKeyword | "auto" | "hidden" | "scroll" | "visible";

        /**
         * The padding optional CSS property sets the required padding space on one to four sides of an element.
         * The padding area is the space between an element and its border. Negative values are not allowed but decimal values are permitted.
         * The element size is treated as fixed, and the content of the element shifts toward the center as padding is increased.
         * The padding property is a shorthand to avoid setting each side separately (padding-top, padding-right, padding-bottom, padding-left).
         */
        padding?: CSSWideKeyword | any;

        /**
         * The padding-bottom CSS property of an element sets the padding space required on the bottom of an element.
         * The padding area is the space between the content of the element and its border.
         * Contrary to margin-bottom values, negative values of padding-bottom are invalid.
         */
        paddingBottom?: CSSWideKeyword | any;

        /**
         * The padding-left CSS property of an element sets the padding space required on the left side of an element.
         * The padding area is the space between the content of the element and its border.
         * Contrary to margin-left values, negative values of padding-left are invalid.
         */
        paddingLeft?: CSSWideKeyword | any;

        /**
         * The padding-right CSS property of an element sets the padding space required on the right side of an element.
         * The padding area is the space between the content of the element and its border.
         * Contrary to margin-right values, negative values of padding-right are invalid.
         */
        paddingRight?: CSSWideKeyword | any;

        /**
         * The padding-top CSS property of an element sets the padding space required on the top of an element.
         * The padding area is the space between the content of the element and its border.
         * Contrary to margin-top values, negative values of padding-top are invalid.
         */
        paddingTop?: CSSWideKeyword | any;

        /**
         * The page-break-after property is supported in all major browsers. With CSS3, page-break-* properties are only aliases of the break-* properties.
         * The CSS3 Fragmentation spec defines breaks for all CSS box fragmentation.
         */
        pageBreakAfter?: CSSWideKeyword | any;

        /**
         * The page-break-before property sets the page-breaking behavior before an element.
         * With CSS3, page-break-* properties are only aliases of the break-* properties.
         * The CSS3 Fragmentation spec defines breaks for all CSS box fragmentation.
         */
        pageBreakBefore?: CSSWideKeyword | any;

        /**
         * Sets the page-breaking behavior inside an element. With CSS3, page-break-* properties are only aliases of the break-* properties.
         * The CSS3 Fragmentation spec defines breaks for all CSS box fragmentation.
         */
        pageBreakInside?: CSSWideKeyword | any;

        /**
         * The pause property determines how long a speech media agent should pause before and after presenting an element.
         * It is a shorthand for the pause-before and pause-after properties.
         */
        pause?: CSSWideKeyword | any;

        /**
         * The pause-after property determines how long a speech media agent should pause after presenting an element.
         * It may be replaced by the shorthand property pause, which sets pause time before and after.
         */
        pauseAfter?: CSSWideKeyword | any;

        /**
         * The pause-before property determines how long a speech media agent should pause before presenting an element.
         * It may be replaced by the shorthand property pause, which sets pause time before and after.
         */
        pauseBefore?: CSSWideKeyword | any;

        /**
         * The perspective property defines how far an element is placed from the view on the z-axis, from the screen to the viewer.
         * Perspective defines how an object is viewed. In graphic arts, perspective is the representation on a flat surface of what the viewer's eye would see in a 3D space.
         * (See Wikipedia for more information about graphical perspective and for related illustrations.)
         * The illusion of perspective on a flat surface, such as a computer screen,
         * is created by projecting points on the flat surface as they would appear if the flat surface were a window
         * through which the viewer was looking at the object. In discussion of virtual environments, this flat surface is called a projection plane.
         */
        perspective?: CSSWideKeyword | any;

        /**
         * The perspective-origin property establishes the origin for the perspective property.
         * It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.
         * When used with perspective, perspective-origin changes the appearance of an object,
         * as if a viewer were looking at it from a different origin.
         * An object appears differently if a viewer is looking directly at it versus looking at it from below, above, or from the side.
         * Thus, the perspective-origin is like a vanishing point.
         * The default value of perspective-origin is 50% 50%.
         * This displays an object as if the viewer's eye were positioned directly at the center of the screen, both top-to-bottom and left-to-right.
         * A value of 0% 0% changes the object as if the viewer was looking toward the top left angle.
         * A value of 100% 100% changes the appearance as if viewed toward the bottom right angle.
         */
        perspectiveOrigin?: CSSWideKeyword | any;

        /**
         * The pointer-events property allows you to control whether an element can be the target for the pointing device (e.g, mouse, pen) events.
         */
        pointerEvents?: CSSWideKeyword | any;

        /**
         * The position property controls the type of positioning used by an element within its parent elements.
         * The effect of the position property depends on a lot of factors, for example the position property of parent elements.
         */
        position?: CSSWideKeyword | "static" | "relative" | "absolute" | "fixed" | "sticky";

        /**
         * Obsolete: unsupported.
         * This property determines whether or not a full-width punctuation mark character should be trimmed if it appears at the beginning of a line,
         * so that its "ink" lines up with the first glyph in the line above and below.
         */
        punctuationTrim?: CSSWideKeyword | any;

        /**
         * Sets the type of quotation marks for embedded quotations.
         */
        quotes?: CSSWideKeyword | any;

        /**
         * Controls whether the last region in a chain displays additional 'overset' content according its default overflow property,
         * or if it displays a fragment of content as if it were flowing into a subsequent region.
         */
        regionFragment?: CSSWideKeyword | any;

        /**
         * The rest-after property determines how long a speech media agent should pause after presenting an element's main content,
         * before presenting that element's exit cue sound. It may be replaced by the shorthand property rest, which sets rest time before and after.
         */
        restAfter?: CSSWideKeyword | any;

        /**
         * The rest-before property determines how long a speech media agent should pause after presenting an intro cue sound for an element,
         * before presenting that element's main content. It may be replaced by the shorthand property rest, which sets rest time before and after.
         */
        restBefore?: CSSWideKeyword | any;

        /**
         * Specifies the position an element in relation to the right side of the containing element.
         */
        right?: CSSWideKeyword | any;

        rubyAlign?: CSSWideKeyword | any;

        rubyPosition?: CSSWideKeyword | any;

        /**
         * Defines the alpha channel threshold used to extract a shape from an image. Can be thought of as a "minimum opacity" threshold;
         * that is, a value of 0.5 means that the shape will enclose all the pixels that are more than 50% opaque.
         */
        shapeImageThreshold?: CSSWideKeyword | any;

        /**
         * A future level of CSS Shapes will define a shape-inside property, which will define a shape to wrap content within the element.
         * See Editor's Draft <http://dev.w3.org/csswg/css-shapes/> and CSSWG wiki page on next-level plans <http://wiki.csswg.org/spec/css-shapes>
         */
        shapeInside?: CSSWideKeyword | any;

        /**
         * Adds a margin to a shape-outside. In effect, defines a new shape that is the smallest contour around all the points
         * that are the shape-margin distance outward perpendicular to each point on the underlying shape.
         * For points where a perpendicular direction is not defined (e.g., a triangle corner),
         * takes all points on a circle centered at the point and with a radius of the shape-margin distance.
         * This property accepts only non-negative values.
         */
        shapeMargin?: CSSWideKeyword | any;

        /**
         * Declares a shape around which text should be wrapped, with possible modifications from the shape-margin property.
         * The shape defined by shape-outside and shape-margin changes the geometry of a float element's float area.
         */
        shapeOutside?: CSSWideKeyword | any;

        /**
         * The speak property determines whether or not a speech synthesizer will read aloud the contents of an element.
         */
        speak?: CSSWideKeyword | any;

        /**
         * The speak-as property determines how the speech synthesizer interprets the content: words as whole words or as a sequence of letters,
         * numbers as a numerical value or a sequence of digits, punctuation as pauses in speech or named punctuation characters.
         */
        speakAs?: CSSWideKeyword | any;

        /**
         * SVG: Specifies the opacity of the outline on the current object.
         * See SVG 1.1 https://www.w3.org/TR/SVG/painting.html#StrokeOpacityProperty
         */
        strokeOpacity?: CSSWideKeyword | number;

        /**
         * SVG: Specifies the width of the outline on the current object.
         * See SVG 1.1 https://www.w3.org/TR/SVG/painting.html#StrokeWidthProperty
         */
        strokeWidth?: CSSWideKeyword | CSSPercentage | CSSLength;

        /**
         * The tab-size CSS property is used to customise the width of a tab (U+0009) character.
         */
        tabSize?: CSSWideKeyword | any;

        /**
         * The 'table-layout' property controls the algorithm used to lay out the table cells, rows, and columns.
         */
        tableLayout?: CSSWideKeyword | any;

        /**
         * The text-align CSS property describes how inline content like text is aligned in its parent block element.
         * text-align does not control the alignment of block elements itself, only their inline content.
         */
        textAlign?: CSSWideKeyword | any;

        /**
         * The text-align-last CSS property describes how the last line of a block element or a line before line break is aligned in its parent block element.
         */
        textAlignLast?: CSSWideKeyword | any;

        /**
         * The text-decoration CSS property is used to set the text formatting to underline, overline, line-through or blink.
         * underline and overline decorations are positioned under the text, line-through over it.
         */
        textDecoration?: CSSWideKeyword | any;

        /**
         * Sets the color of any text decoration, such as underlines, overlines, and strike throughs.
         */
        textDecorationColor?: CSSWideKeyword | any;

        /**
         * Sets what kind of line decorations are added to an element, such as underlines, overlines, etc.
         */
        textDecorationLine?: CSSWideKeyword | any;

        textDecorationLineThrough?: CSSWideKeyword | any;

        textDecorationNone?: CSSWideKeyword | any;

        textDecorationOverline?: CSSWideKeyword | any;

        /**
         * Specifies what parts of an element’s content are skipped over when applying any text decoration.
         */
        textDecorationSkip?: CSSWideKeyword | any;

        /**
         * This property specifies the style of the text decoration line drawn on the specified element.
         * The intended meaning for the values are the same as those of the border-style-properties.
         */
        textDecorationStyle?: CSSWideKeyword | any;

        textDecorationUnderline?: CSSWideKeyword | any;

        /**
         * The text-emphasis property will apply special emphasis marks to the elements text.
         * Slightly similar to the text-decoration property only that this property can have affect on the line-height.
         * It also is noted that this is shorthand for text-emphasis-style and for text-emphasis-color.
         */
        textEmphasis?: CSSWideKeyword | any;

        /**
         * The text-emphasis-color property specifies the foreground color of the emphasis marks.
         */
        textEmphasisColor?: CSSWideKeyword | any;

        /**
         * The text-emphasis-style property applies special emphasis marks to an element's text.
         */
        textEmphasisStyle?: CSSWideKeyword | any;

        /**
         * This property helps determine an inline box's block-progression dimension,
         * derived from the text-height and font-size properties for non-replaced elements,
         * the height or the width for replaced elements, and the stacked block-progression dimension for inline-block elements.
         * The block-progression dimension determines the position of the padding, border and margin for the element.
         */
        textHeight?: CSSWideKeyword | any;

        /**
         * Specifies the amount of space horizontally that should be left on the first line of the text of an element.
         * This horizontal spacing is at the beginning of the first line and is in respect to the left edge of the containing block box.
         */
        textIndent?: CSSWideKeyword | any;

        textJustifyTrim?: CSSWideKeyword | any;

        textKashidaSpace?: CSSWideKeyword | any;

        /**
         * The text-line-through property is a shorthand property for text-line-through-style, text-line-through-color and text-line-through-mode.
         * (Considered obsolete; use text-decoration instead.)
         */
        textLineThrough?: CSSWideKeyword | any;

        /**
         * Specifies the line colors for the line-through text decoration.
         * (Considered obsolete; use text-decoration-color instead.)
         */
        textLineThroughColor?: CSSWideKeyword | any;

        /**
         * Sets the mode for the line-through text decoration, determining whether the text decoration affects the space characters or not.
         * (Considered obsolete; use text-decoration-skip instead.)
         */
        textLineThroughMode?: CSSWideKeyword | any;

        /**
         * Specifies the line style for line-through text decoration.
         * (Considered obsolete; use text-decoration-style instead.)
         */
        textLineThroughStyle?: CSSWideKeyword | any;

        /**
         * Specifies the line width for the line-through text decoration.
         */
        textLineThroughWidth?: CSSWideKeyword | any;

        /**
         * The text-overflow shorthand CSS property determines how overflowed content that is not displayed is signaled to the users.
         * It can be clipped, display an ellipsis ('…', U+2026 HORIZONTAL ELLIPSIS) or a Web author-defined string.
         * It covers the two long-hand properties text-overflow-mode and text-overflow-ellipsis
         */
        textOverflow?: CSSWideKeyword | any;

        /**
         * The text-overline property is the shorthand for the text-overline-style, text-overline-width, text-overline-color, and text-overline-mode properties.
         */
        textOverline?: CSSWideKeyword | any;

        /**
         * Specifies the line color for the overline text decoration.
         */
        textOverlineColor?: CSSWideKeyword | any;

        /**
         * Sets the mode for the overline text decoration, determining whether the text decoration affects the space characters or not.
         */
        textOverlineMode?: CSSWideKeyword | any;

        /**
         * Specifies the line style for overline text decoration.
         */
        textOverlineStyle?: CSSWideKeyword | any;

        /**
         * Specifies the line width for the overline text decoration.
         */
        textOverlineWidth?: CSSWideKeyword | any;

        /**
         * The text-rendering CSS property provides information to the browser about how to optimize when rendering text.
         * Options are: legibility, speed or geometric precision.
         */
        textRendering?: CSSWideKeyword | any;

        /**
         * Obsolete: unsupported.
         */
        textScript?: CSSWideKeyword | any;

        /**
         * The CSS text-shadow property applies one or more drop shadows to the text and <text-decorations> of an element.
         * Each shadow is specified as an offset from the text, along with optional color and blur radius values.
         */
        textShadow?: CSSWideKeyword | any;

        /**
         * This property transforms text for styling purposes. (It has no effect on the underlying content.)
         */
        textTransform?: CSSWideKeyword | any;

        /**
         * Unsupported.
         * This property will add a underline position value to the element that has an underline defined.
         */
        textUnderlinePosition?: CSSWideKeyword | any;

        /**
         * After review this should be replaced by text-decoration should it not?
         * This property will set the underline style for text with a line value for underline, overline, and line-through.
         */
        textUnderlineStyle?: CSSWideKeyword | any;

        /**
         * This property specifies how far an absolutely positioned box's top margin edge is offset below the top edge of the box's containing block.
         * For relatively positioned boxes, the offset is with respect to the top edges of the box itself (i.e., the box is given a position in the normal flow,
         * then offset from that position according to these properties).
         */
        top?: CSSWideKeyword | any;

        /**
         * Determines whether touch input may trigger default behavior supplied by the user agent, such as panning or zooming.
         */
        touchAction?: CSSWideKeyword | any;

        /**
         * CSS transforms allow elements styled with CSS to be transformed in two-dimensional or three-dimensional space.
         * Using this property, elements can be translated, rotated, scaled, and skewed. The value list may consist of 2D and/or 3D transform values.
         */
        transform?: CSSWideKeyword | any;

        /**
         * This property defines the origin of the transformation axes relative to the element to which the transformation is applied.
         */
        transformOrigin?: CSSWideKeyword | any;

        /**
         * This property allows you to define the relative position of the origin of the transformation grid along the z-axis.
         */
        transformOriginZ?: CSSWideKeyword | any;

        /**
         * This property specifies how nested elements are rendered in 3D space relative to their parent.
         */
        transformStyle?: CSSWideKeyword | any;

        /**
         * The transition CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function,
         * and transition-delay. It allows to define the transition between two states of an element.
         */
        transition?: CSSWideKeyword | any;

        /**
         * Defines when the transition will start. A value of ‘0s’ means the transition will execute as soon as the property is changed.
         * Otherwise, the value specifies an offset from the moment the property is changed, and the transition will delay execution by that offset.
         */
        transitionDelay?: CSSWideKeyword | any;

        /**
         * The 'transition-duration' property specifies the length of time a transition animation takes to complete.
         */
        transitionDuration?: CSSWideKeyword | any;

        /**
         * The 'transition-property' property specifies the name of the CSS property to which the transition is applied.
         */
        transitionProperty?: CSSWideKeyword | any;

        /**
         * Sets the pace of action within a transition
         */
        transitionTimingFunction?: CSSWideKeyword | any;

        /**
         * The unicode-bidi CSS property specifies the level of embedding with respect to the bidirectional algorithm.
         */
        unicodeBidi?: CSSWideKeyword | any;

        /**
         * unicode-range allows you to set a specific range of characters to be downloaded from a font (embedded using @font-face) and made available for use on the current page.
         */
        unicodeRange?: CSSWideKeyword | any;

        /**
         * This is for all the high level UX stuff.
         */
        userFocus?: CSSWideKeyword | any;

        /**
         * For inputing user content
         */
        userInput?: CSSWideKeyword | any;

        /**
         * The vertical-align property controls how inline elements or text are vertically aligned compared to the baseline.
         * If this property is used on table-cells it controls the vertical alignment of content of the table cell.
         */
        verticalAlign?: CSSWideKeyword | any;

        /**
         * The visibility property specifies whether the boxes generated by an element are rendered.
         */
        visibility?: CSSWideKeyword | any;

        /**
         * The voice-balance property sets the apparent position (in stereo sound) of the synthesized voice for spoken media.
         */
        voiceBalance?: CSSWideKeyword | any;

        /**
         * The voice-duration property allows the author to explicitly set the amount of time it should take a speech synthesizer to read an element's content,
         * for example to allow the speech to be synchronized with other media.
         * With a value of auto (the default) the length of time it takes to read the content is determined by the content itself and the voice-rate property.
         */
        voiceDuration?: CSSWideKeyword | any;

        /**
         * The voice-family property sets the speaker's voice used by a speech media agent to read an element.
         * The speaker may be specified as a named character (to match a voice option in the speech reading software)
         * or as a generic description of the age and gender of the voice.
         * Similar to the font-family property for visual media,
         * a comma-separated list of fallback options may be given in case the speech reader does not recognize the character name
         * or cannot synthesize the requested combination of generic properties.
         */
        voiceFamily?: CSSWideKeyword | any;

        /**
         * The voice-pitch property sets pitch or tone (high or low) for the synthesized speech when reading an element;
         * the pitch may be specified absolutely or relative to the normal pitch for the voice-family used to read the text.
         */
        voicePitch?: CSSWideKeyword | any;

        /**
         * The voice-range property determines how much variation in pitch or tone will be created by the speech synthesize when reading an element.
         * Emphasized text, grammatical structures and punctuation may all be rendered as changes in pitch,
         * this property determines how strong or obvious those changes are;
         * large ranges are associated with enthusiastic or emotional speech,
         * while small ranges are associated with flat or mechanical speech.
         */
        voiceRange?: CSSWideKeyword | any;

        /**
         * The voice-rate property sets the speed at which the voice synthesized by a speech media agent will read content.
         */
        voiceRate?: CSSWideKeyword | any;

        /**
         * The voice-stress property sets the level of vocal emphasis to be used for synthesized speech reading the element.
         */
        voiceStress?: CSSWideKeyword | any;

        /**
         * The voice-volume property sets the volume for spoken content in speech media. It replaces the deprecated volume property.
         */
        voiceVolume?: CSSWideKeyword | any;

        /**
         * The white-space property controls whether and how white space inside the element is collapsed, and whether lines may wrap at unforced "soft wrap" opportunities.
         */
        whiteSpace?: CSSWideKeyword | any;

        /**
         * Obsolete: unsupported.
         */
        whiteSpaceTreatment?: CSSWideKeyword | any;

        /**
         * In paged media, this property defines the mimimum number of lines
         * that must be left at the top of the second page.
         * See CSS 3 orphans, widows properties https://drafts.csswg.org/css-break-3/#widows-orphans
         */
        widows?: CSSWideKeyword | number;

        /**
         * Specifies the width of the content area of an element. The content area of the element width does not include the padding, border, and margin of the element.
         */
        width?: CSSWideKeyword | any;

        /**
         * The word-break property is often used when there is long generated content that is strung together without and spaces or hyphens to beak apart.
         * A common case of this is when there is a long URL that does not have any hyphens. This case could potentially cause the breaking of the layout as it could extend past the parent element.
         */
        wordBreak?: CSSWideKeyword | any;

        /**
         * The word-spacing CSS property specifies the spacing behavior between "words".
         */
        wordSpacing?: CSSWideKeyword | any;

        /**
         * An alias of css/properties/overflow-wrap, word-wrap defines whether to break words when the content exceeds the boundaries of its container.
         */
        wordWrap?: CSSWideKeyword | any;

        /**
         * Specifies how exclusions affect inline content within block-level elements. Elements lay out their inline content in their content area but wrap around exclusion areas.
         */
        wrapFlow?: CSSWideKeyword | any;

        /**
         * Set the value that is used to offset the inner wrap shape from other shapes. Inline content that intersects a shape with this property will be pushed by this shape's margin.
         */
        wrapMargin?: CSSWideKeyword | any;

        /**
         * Obsolete and unsupported. Do not use.
         * This CSS property controls the text when it reaches the end of the block in which it is enclosed.
         */
        wrapOption?: CSSWideKeyword | any;

        /**
         * writing-mode specifies if lines of text are laid out horizontally or vertically, and the direction which lines of text and blocks progress.
         */
        writingMode?: CSSWideKeyword | any;

        /**
         * The z-index property specifies the z-order of an element and its descendants.
         * When elements overlap, z-order determines which one covers the other.
         * See CSS 2 z-index property https://www.w3.org/TR/CSS2/visuren.html#z-index
         */
        zIndex?: CSSWideKeyword | "auto" | number;

        /**
         * Sets the initial zoom factor of a document defined by @viewport.
         * See CSS zoom descriptor https://drafts.csswg.org/css-device-adapt/#zoom-desc
         */
        zoom?: CSSWideKeyword | "auto" | number | CSSPercentage;

        [propertyName: string]: any;
    }
    // tslint:enable:no-any-union

    interface HTMLAttributes<T> extends DOMAttributes<T> {
        // React-specific Attributes
        defaultChecked?: boolean;
        defaultValue?: string | string[];
        suppressContentEditableWarning?: boolean;

        // Standard HTML Attributes
        accessKey?: string;
        className?: string;
        contentEditable?: boolean;
        contextMenu?: string;
        dir?: string;
        draggable?: boolean;
        hidden?: boolean;
        id?: string;
        lang?: string;
        slot?: string;
        spellCheck?: boolean;
        style?: CSSProperties;
        tabIndex?: number;
        title?: string;

        // Unknown
        inputMode?: string;
        is?: string;
        radioGroup?: string; // <command>, <menuitem>

        // WAI-ARIA
        role?: string;

        // RDFa Attributes
        about?: string;
        datatype?: string;
        inlist?: any;
        prefix?: string;
        property?: string;
        resource?: string;
        typeof?: string;
        vocab?: string;

        // Non-standard Attributes
        autoCapitalize?: string;
        autoCorrect?: string;
        autoSave?: string;
        color?: string;
        itemProp?: string;
        itemScope?: boolean;
        itemType?: string;
        itemID?: string;
        itemRef?: string;
        results?: number;
        security?: string;
        unselectable?: boolean;
    }

    // All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
        'aria-activedescendant'?: string;
        /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
        'aria-atomic'?: boolean | 'false' | 'true';
        /**
         * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
         * presented if they are made.
         */
        'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
        /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
        'aria-busy'?: boolean | 'false' | 'true';
        /**
         * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
         * @see aria-pressed @see aria-selected.
         */
        'aria-checked'?: boolean | 'false' | 'mixed' | 'true';
        /**
         * Defines the total number of columns in a table, grid, or treegrid.
         * @see aria-colindex.
         */
        'aria-colcount'?: number;
        /**
         * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
         * @see aria-colcount @see aria-colspan.
         */
        'aria-colindex'?: number;
        /**
         * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-colindex @see aria-rowspan.
         */
        'aria-colspan'?: number;
        /**
         * Identifies the element (or elements) whose contents or presence are controlled by the current element.
         * @see aria-owns.
         */
        'aria-controls'?: string;
        /** Indicates the element that represents the current item within a container or set of related elements. */
        'aria-current'?: boolean | 'false' | 'true' | 'page' | 'step' | 'location' | 'date' | 'time';
        /**
         * Identifies the element (or elements) that describes the object.
         * @see aria-labelledby
         */
        'aria-describedby'?: string;
        /**
         * Identifies the element that provides a detailed, extended description for the object.
         * @see aria-describedby.
         */
        'aria-details'?: string;
        /**
         * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
         * @see aria-hidden @see aria-readonly.
         */
        'aria-disabled'?: boolean | 'false' | 'true';
        /**
         * Indicates what functions can be performed when a dragged object is released on the drop target.
         * @deprecated in ARIA 1.1
         */
        'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup';
        /**
         * Identifies the element that provides an error message for the object.
         * @see aria-invalid @see aria-describedby.
         */
        'aria-errormessage'?: string;
        /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
        'aria-expanded'?: boolean | 'false' | 'true';
        /**
         * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
         * allows assistive technology to override the general default of reading in document source order.
         */
        'aria-flowto'?: string;
        /**
         * Indicates an element's "grabbed" state in a drag-and-drop operation.
         * @deprecated in ARIA 1.1
         */
        'aria-grabbed'?: boolean | 'false' | 'true';
        /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
        'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
        /**
         * Indicates whether the element is exposed to an accessibility API.
         * @see aria-disabled.
         */
        'aria-hidden'?: boolean | 'false' | 'true';
        /**
         * Indicates the entered value does not conform to the format expected by the application.
         * @see aria-errormessage.
         */
        'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling';
        /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
        'aria-keyshortcuts'?: string;
        /**
         * Defines a string value that labels the current element.
         * @see aria-labelledby.
         */
        'aria-label'?: string;
        /**
         * Identifies the element (or elements) that labels the current element.
         * @see aria-describedby.
         */
        'aria-labelledby'?: string;
        /** Defines the hierarchical level of an element within a structure. */
        'aria-level'?: number;
        /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
        'aria-live'?: 'off' | 'assertive' | 'polite';
        /** Indicates whether an element is modal when displayed. */
        'aria-modal'?: boolean | 'false' | 'true';
        /** Indicates whether a text box accepts multiple lines of input or only a single line. */
        'aria-multiline'?: boolean | 'false' | 'true';
        /** Indicates that the user may select more than one item from the current selectable descendants. */
        'aria-multiselectable'?: boolean | 'false' | 'true';
        /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
        'aria-orientation'?: 'horizontal' | 'vertical';
        /**
         * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
         * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
         * @see aria-controls.
         */
        'aria-owns'?: string;
        /**
         * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
         * A hint could be a sample value or a brief description of the expected format.
         */
        'aria-placeholder'?: string;
        /**
         * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-setsize.
         */
        'aria-posinset'?: number;
        /**
         * Indicates the current "pressed" state of toggle buttons.
         * @see aria-checked @see aria-selected.
         */
        'aria-pressed'?: boolean | 'false' | 'mixed' | 'true';
        /**
         * Indicates that the element is not editable, but is otherwise operable.
         * @see aria-disabled.
         */
        'aria-readonly'?: boolean | 'false' | 'true';
        /**
         * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
         * @see aria-atomic.
         */
        'aria-relevant'?: 'additions' | 'additions text' | 'all' | 'removals' | 'text';
        /** Indicates that user input is required on the element before a form may be submitted. */
        'aria-required'?: boolean | 'false' | 'true';
        /** Defines a human-readable, author-localized description for the role of an element. */
        'aria-roledescription'?: string;
        /**
         * Defines the total number of rows in a table, grid, or treegrid.
         * @see aria-rowindex.
         */
        'aria-rowcount'?: number;
        /**
         * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
         * @see aria-rowcount @see aria-rowspan.
         */
        'aria-rowindex'?: number;
        /**
         * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
         * @see aria-rowindex @see aria-colspan.
         */
        'aria-rowspan'?: number;
        /**
         * Indicates the current "selected" state of various widgets.
         * @see aria-checked @see aria-pressed.
         */
        'aria-selected'?: boolean | 'false' | 'true';
        /**
         * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
         * @see aria-posinset.
         */
        'aria-setsize'?: number;
        /** Indicates if items in a table or grid are sorted in ascending or descending order. */
        'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other';
        /** Defines the maximum allowed value for a range widget. */
        'aria-valuemax'?: number;
        /** Defines the minimum allowed value for a range widget. */
        'aria-valuemin'?: number;
        /**
         * Defines the current value for a range widget.
         * @see aria-valuetext.
         */
        'aria-valuenow'?: number;
        /** Defines the human readable text alternative of aria-valuenow for a range widget. */
        'aria-valuetext'?: string;
    }

    interface AllHTMLAttributes<T> extends HTMLAttributes<T> {
        // Standard HTML Attributes
        accept?: string;
        acceptCharset?: string;
        action?: string;
        allowFullScreen?: boolean;
        allowTransparency?: boolean;
        alt?: string;
        as?: string;
        async?: boolean;
        autoComplete?: string;
        autoFocus?: boolean;
        autoPlay?: boolean;
        capture?: boolean;
        cellPadding?: number | string;
        cellSpacing?: number | string;
        charSet?: string;
        challenge?: string;
        checked?: boolean;
        cite?: string;
        classID?: string;
        cols?: number;
        colSpan?: number;
        content?: string;
        controls?: boolean;
        coords?: string;
        crossOrigin?: string;
        data?: string;
        dateTime?: string;
        default?: boolean;
        defer?: boolean;
        disabled?: boolean;
        download?: any;
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
        high?: number;
        href?: string;
        hrefLang?: string;
        htmlFor?: string;
        httpEquiv?: string;
        integrity?: string;
        keyParams?: string;
        keyType?: string;
        kind?: string;
        label?: string;
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
        minLength?: number;
        multiple?: boolean;
        muted?: boolean;
        name?: string;
        nonce?: string;
        noValidate?: boolean;
        open?: boolean;
        optimum?: number;
        pattern?: string;
        placeholder?: string;
        playsInline?: boolean;
        poster?: string;
        preload?: string;
        readOnly?: boolean;
        rel?: string;
        required?: boolean;
        reversed?: boolean;
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
        src?: string;
        srcDoc?: string;
        srcLang?: string;
        srcSet?: string;
        start?: number;
        step?: number | string;
        summary?: string;
        target?: string;
        type?: string;
        useMap?: string;
        value?: string | string[] | number;
        width?: number | string;
        wmode?: string;
        wrap?: string;
    }

    interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
        download?: any;
        href?: string;
        hrefLang?: string;
        media?: string;
        rel?: string;
        target?: string;
    }

    // tslint:disable-next-line:no-empty-interface
    interface AudioHTMLAttributes<T> extends MediaHTMLAttributes<T> {}

    interface AreaHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string;
        coords?: string;
        download?: any;
        href?: string;
        hrefLang?: string;
        media?: string;
        rel?: string;
        shape?: string;
        target?: string;
    }

    interface BaseHTMLAttributes<T> extends HTMLAttributes<T> {
        href?: string;
        target?: string;
    }

    interface BlockquoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string;
    }

    interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
        autoFocus?: boolean;
        disabled?: boolean;
        form?: string;
        formAction?: string;
        formEncType?: string;
        formMethod?: string;
        formNoValidate?: boolean;
        formTarget?: string;
        name?: string;
        type?: string;
        value?: string | string[] | number;
    }

    interface CanvasHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string;
        width?: number | string;
    }

    interface ColHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number;
    }

    interface ColgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        span?: number;
    }

    interface DetailsHTMLAttributes<T> extends HTMLAttributes<T> {
        open?: boolean;
    }

    interface DelHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string;
        dateTime?: string;
    }

    interface EmbedHTMLAttributes<T> extends HTMLAttributes<T> {
        height?: number | string;
        src?: string;
        type?: string;
        width?: number | string;
    }

    interface FieldsetHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean;
        form?: string;
        name?: string;
    }

    interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
        acceptCharset?: string;
        action?: string;
        autoComplete?: string;
        encType?: string;
        method?: string;
        name?: string;
        noValidate?: boolean;
        target?: string;
    }

    interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
        manifest?: string;
    }

    interface IframeHTMLAttributes<T> extends HTMLAttributes<T> {
        allowFullScreen?: boolean;
        allowTransparency?: boolean;
        frameBorder?: number | string;
        height?: number | string;
        marginHeight?: number;
        marginWidth?: number;
        name?: string;
        sandbox?: string;
        scrolling?: string;
        seamless?: boolean;
        src?: string;
        srcDoc?: string;
        width?: number | string;
    }

    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
        alt?: string;
        crossOrigin?: "anonymous" | "use-credentials" | "";
        height?: number | string;
        sizes?: string;
        src?: string;
        srcSet?: string;
        useMap?: string;
        width?: number | string;
    }

    interface InsHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string;
        dateTime?: string;
    }

    interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
        accept?: string;
        alt?: string;
        autoComplete?: string;
        autoFocus?: boolean;
        capture?: boolean; // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
        checked?: boolean;
        crossOrigin?: string;
        disabled?: boolean;
        form?: string;
        formAction?: string;
        formEncType?: string;
        formMethod?: string;
        formNoValidate?: boolean;
        formTarget?: string;
        height?: number | string;
        list?: string;
        max?: number | string;
        maxLength?: number;
        min?: number | string;
        minLength?: number;
        multiple?: boolean;
        name?: string;
        pattern?: string;
        placeholder?: string;
        readOnly?: boolean;
        required?: boolean;
        size?: number;
        src?: string;
        step?: number | string;
        type?: string;
        value?: string | string[] | number;
        width?: number | string;

        onChange?: ChangeEventHandler<T>;
    }

    interface KeygenHTMLAttributes<T> extends HTMLAttributes<T> {
        autoFocus?: boolean;
        challenge?: string;
        disabled?: boolean;
        form?: string;
        keyType?: string;
        keyParams?: string;
        name?: string;
    }

    interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string;
        htmlFor?: string;
    }

    interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
        value?: string | string[] | number;
    }

    interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
        as?: string;
        crossOrigin?: string;
        href?: string;
        hrefLang?: string;
        integrity?: string;
        media?: string;
        rel?: string;
        sizes?: string;
        type?: string;
    }

    interface MapHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string;
    }

    interface MenuHTMLAttributes<T> extends HTMLAttributes<T> {
        type?: string;
    }

    interface MediaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoPlay?: boolean;
        controls?: boolean;
        crossOrigin?: string;
        loop?: boolean;
        mediaGroup?: string;
        muted?: boolean;
        playsinline?: boolean;
        preload?: string;
        src?: string;
    }

    interface MetaHTMLAttributes<T> extends HTMLAttributes<T> {
        charSet?: string;
        content?: string;
        httpEquiv?: string;
        name?: string;
    }

    interface MeterHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string;
        high?: number;
        low?: number;
        max?: number | string;
        min?: number | string;
        optimum?: number;
        value?: string | string[] | number;
    }

    interface QuoteHTMLAttributes<T> extends HTMLAttributes<T> {
        cite?: string;
    }

    interface ObjectHTMLAttributes<T> extends HTMLAttributes<T> {
        classID?: string;
        data?: string;
        form?: string;
        height?: number | string;
        name?: string;
        type?: string;
        useMap?: string;
        width?: number | string;
        wmode?: string;
    }

    interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
        reversed?: boolean;
        start?: number;
    }

    interface OptgroupHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean;
        label?: string;
    }

    interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
        disabled?: boolean;
        label?: string;
        selected?: boolean;
        value?: string | string[] | number;
    }

    interface OutputHTMLAttributes<T> extends HTMLAttributes<T> {
        form?: string;
        htmlFor?: string;
        name?: string;
    }

    interface ParamHTMLAttributes<T> extends HTMLAttributes<T> {
        name?: string;
        value?: string | string[] | number;
    }

    interface ProgressHTMLAttributes<T> extends HTMLAttributes<T> {
        max?: number | string;
        value?: string | string[] | number;
    }

    interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
        async?: boolean;
        charSet?: string;
        crossOrigin?: string;
        defer?: boolean;
        integrity?: string;
        nonce?: string;
        src?: string;
        type?: string;
    }

    interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string;
        autoFocus?: boolean;
        disabled?: boolean;
        form?: string;
        multiple?: boolean;
        name?: string;
        required?: boolean;
        size?: number;
        value?: string | string[] | number;
        onChange?: ChangeEventHandler<T>;
    }

    interface SourceHTMLAttributes<T> extends HTMLAttributes<T> {
        media?: string;
        sizes?: string;
        src?: string;
        srcSet?: string;
        type?: string;
    }

    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        media?: string;
        nonce?: string;
        scoped?: boolean;
        type?: string;
    }

    interface TableHTMLAttributes<T> extends HTMLAttributes<T> {
        cellPadding?: number | string;
        cellSpacing?: number | string;
        summary?: string;
    }

    interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
        autoComplete?: string;
        autoFocus?: boolean;
        cols?: number;
        dirName?: string;
        disabled?: boolean;
        form?: string;
        maxLength?: number;
        minLength?: number;
        name?: string;
        placeholder?: string;
        readOnly?: boolean;
        required?: boolean;
        rows?: number;
        value?: string | string[] | number;
        wrap?: string;

        onChange?: ChangeEventHandler<T>;
    }

    interface TdHTMLAttributes<T> extends HTMLAttributes<T> {
        colSpan?: number;
        headers?: string;
        rowSpan?: number;
    }

    interface ThHTMLAttributes<T> extends HTMLAttributes<T> {
        colSpan?: number;
        headers?: string;
        rowSpan?: number;
        scope?: string;
    }

    interface TimeHTMLAttributes<T> extends HTMLAttributes<T> {
        dateTime?: string;
    }

    interface TrackHTMLAttributes<T> extends HTMLAttributes<T> {
        default?: boolean;
        kind?: string;
        label?: string;
        src?: string;
        srcLang?: string;
    }

    interface VideoHTMLAttributes<T> extends MediaHTMLAttributes<T> {
        height?: number | string;
        playsInline?: boolean;
        poster?: string;
        width?: number | string;
    }

    // this list is "complete" in that it contains every SVG attribute
    // that React supports, but the types can be improved.
    // Full list here: https://facebook.github.io/react/docs/dom-elements.html
    //
    // The three broad type categories are (in order of restrictiveness):
    //   - "number | string"
    //   - "string"
    //   - union of string literals
    interface SVGAttributes<T> extends DOMAttributes<T> {
        // Attributes which also defined in HTMLAttributes
        // See comment in SVGDOMPropertyConfig.js
        className?: string;
        color?: string;
        height?: number | string;
        id?: string;
        lang?: string;
        max?: number | string;
        media?: string;
        method?: string;
        min?: number | string;
        name?: string;
        style?: CSSProperties;
        target?: string;
        type?: string;
        width?: number | string;

        // Other HTML properties supported by SVG elements in browsers
        role?: string;
        tabIndex?: number;

        // SVG Specific attributes
        accentHeight?: number | string;
        accumulate?: "none" | "sum";
        additive?: "replace" | "sum";
        alignmentBaseline?: "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" |
        "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit";
        allowReorder?: "no" | "yes";
        alphabetic?: number | string;
        amplitude?: number | string;
        arabicForm?: "initial" | "medial" | "terminal" | "isolated";
        ascent?: number | string;
        attributeName?: string;
        attributeType?: string;
        autoReverse?: number | string;
        azimuth?: number | string;
        baseFrequency?: number | string;
        baselineShift?: number | string;
        baseProfile?: number | string;
        bbox?: number | string;
        begin?: number | string;
        bias?: number | string;
        by?: number | string;
        calcMode?: number | string;
        capHeight?: number | string;
        clip?: number | string;
        clipPath?: string;
        clipPathUnits?: number | string;
        clipRule?: number | string;
        colorInterpolation?: number | string;
        colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit";
        colorProfile?: number | string;
        colorRendering?: number | string;
        contentScriptType?: number | string;
        contentStyleType?: number | string;
        cursor?: number | string;
        cx?: number | string;
        cy?: number | string;
        d?: string;
        decelerate?: number | string;
        descent?: number | string;
        diffuseConstant?: number | string;
        direction?: number | string;
        display?: number | string;
        divisor?: number | string;
        dominantBaseline?: number | string;
        dur?: number | string;
        dx?: number | string;
        dy?: number | string;
        edgeMode?: number | string;
        elevation?: number | string;
        enableBackground?: number | string;
        end?: number | string;
        exponent?: number | string;
        externalResourcesRequired?: number | string;
        fill?: string;
        fillOpacity?: number | string;
        fillRule?: "nonzero" | "evenodd" | "inherit";
        filter?: string;
        filterRes?: number | string;
        filterUnits?: number | string;
        floodColor?: number | string;
        floodOpacity?: number | string;
        focusable?: number | string;
        fontFamily?: string;
        fontSize?: number | string;
        fontSizeAdjust?: number | string;
        fontStretch?: number | string;
        fontStyle?: number | string;
        fontVariant?: number | string;
        fontWeight?: number | string;
        format?: number | string;
        from?: number | string;
        fx?: number | string;
        fy?: number | string;
        g1?: number | string;
        g2?: number | string;
        glyphName?: number | string;
        glyphOrientationHorizontal?: number | string;
        glyphOrientationVertical?: number | string;
        glyphRef?: number | string;
        gradientTransform?: string;
        gradientUnits?: string;
        hanging?: number | string;
        horizAdvX?: number | string;
        horizOriginX?: number | string;
        href?: string;
        ideographic?: number | string;
        imageRendering?: number | string;
        in2?: number | string;
        in?: string;
        intercept?: number | string;
        k1?: number | string;
        k2?: number | string;
        k3?: number | string;
        k4?: number | string;
        k?: number | string;
        kernelMatrix?: number | string;
        kernelUnitLength?: number | string;
        kerning?: number | string;
        keyPoints?: number | string;
        keySplines?: number | string;
        keyTimes?: number | string;
        lengthAdjust?: number | string;
        letterSpacing?: number | string;
        lightingColor?: number | string;
        limitingConeAngle?: number | string;
        local?: number | string;
        markerEnd?: string;
        markerHeight?: number | string;
        markerMid?: string;
        markerStart?: string;
        markerUnits?: number | string;
        markerWidth?: number | string;
        mask?: string;
        maskContentUnits?: number | string;
        maskUnits?: number | string;
        mathematical?: number | string;
        mode?: number | string;
        numOctaves?: number | string;
        offset?: number | string;
        opacity?: number | string;
        operator?: number | string;
        order?: number | string;
        orient?: number | string;
        orientation?: number | string;
        origin?: number | string;
        overflow?: number | string;
        overlinePosition?: number | string;
        overlineThickness?: number | string;
        paintOrder?: number | string;
        panose1?: number | string;
        pathLength?: number | string;
        patternContentUnits?: string;
        patternTransform?: number | string;
        patternUnits?: string;
        pointerEvents?: number | string;
        points?: string;
        pointsAtX?: number | string;
        pointsAtY?: number | string;
        pointsAtZ?: number | string;
        preserveAlpha?: number | string;
        preserveAspectRatio?: string;
        primitiveUnits?: number | string;
        r?: number | string;
        radius?: number | string;
        refX?: number | string;
        refY?: number | string;
        renderingIntent?: number | string;
        repeatCount?: number | string;
        repeatDur?: number | string;
        requiredExtensions?: number | string;
        requiredFeatures?: number | string;
        restart?: number | string;
        result?: string;
        rotate?: number | string;
        rx?: number | string;
        ry?: number | string;
        scale?: number | string;
        seed?: number | string;
        shapeRendering?: number | string;
        slope?: number | string;
        spacing?: number | string;
        specularConstant?: number | string;
        specularExponent?: number | string;
        speed?: number | string;
        spreadMethod?: string;
        startOffset?: number | string;
        stdDeviation?: number | string;
        stemh?: number | string;
        stemv?: number | string;
        stitchTiles?: number | string;
        stopColor?: string;
        stopOpacity?: number | string;
        strikethroughPosition?: number | string;
        strikethroughThickness?: number | string;
        string?: number | string;
        stroke?: string;
        strokeDasharray?: string | number;
        strokeDashoffset?: string | number;
        strokeLinecap?: "butt" | "round" | "square" | "inherit";
        strokeLinejoin?: "miter" | "round" | "bevel" | "inherit";
        strokeMiterlimit?: number | string;
        strokeOpacity?: number | string;
        strokeWidth?: number | string;
        surfaceScale?: number | string;
        systemLanguage?: number | string;
        tableValues?: number | string;
        targetX?: number | string;
        targetY?: number | string;
        textAnchor?: string;
        textDecoration?: number | string;
        textLength?: number | string;
        textRendering?: number | string;
        to?: number | string;
        transform?: string;
        u1?: number | string;
        u2?: number | string;
        underlinePosition?: number | string;
        underlineThickness?: number | string;
        unicode?: number | string;
        unicodeBidi?: number | string;
        unicodeRange?: number | string;
        unitsPerEm?: number | string;
        vAlphabetic?: number | string;
        values?: string;
        vectorEffect?: number | string;
        version?: string;
        vertAdvY?: number | string;
        vertOriginX?: number | string;
        vertOriginY?: number | string;
        vHanging?: number | string;
        vIdeographic?: number | string;
        viewBox?: string;
        viewTarget?: number | string;
        visibility?: number | string;
        vMathematical?: number | string;
        widths?: number | string;
        wordSpacing?: number | string;
        writingMode?: number | string;
        x1?: number | string;
        x2?: number | string;
        x?: number | string;
        xChannelSelector?: string;
        xHeight?: number | string;
        xlinkActuate?: string;
        xlinkArcrole?: string;
        xlinkHref?: string;
        xlinkRole?: string;
        xlinkShow?: string;
        xlinkTitle?: string;
        xlinkType?: string;
        xmlBase?: string;
        xmlLang?: string;
        xmlns?: string;
        xmlnsXlink?: string;
        xmlSpace?: string;
        y1?: number | string;
        y2?: number | string;
        y?: number | string;
        yChannelSelector?: string;
        z?: number | string;
        zoomAndPan?: string;
    }

    //
    // React.DOM
    // ----------------------------------------------------------------------

    interface ReactHTML {
        a: DetailedHTMLFactory<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
        abbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        address: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        area: DetailedHTMLFactory<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
        article: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        aside: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        audio: DetailedHTMLFactory<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
        b: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        base: DetailedHTMLFactory<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
        bdi: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        bdo: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        big: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        blockquote: DetailedHTMLFactory<BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
        body: DetailedHTMLFactory<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
        br: DetailedHTMLFactory<HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
        button: DetailedHTMLFactory<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
        canvas: DetailedHTMLFactory<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
        caption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        cite: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        code: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        col: DetailedHTMLFactory<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
        colgroup: DetailedHTMLFactory<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
        data: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        datalist: DetailedHTMLFactory<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
        dd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        del: DetailedHTMLFactory<DelHTMLAttributes<HTMLElement>, HTMLElement>;
        details: DetailedHTMLFactory<DetailsHTMLAttributes<HTMLElement>, HTMLElement>;
        dfn: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        dialog: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        div: DetailedHTMLFactory<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        dl: DetailedHTMLFactory<HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
        dt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        em: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        embed: DetailedHTMLFactory<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
        fieldset: DetailedHTMLFactory<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
        figcaption: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        figure: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        footer: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        form: DetailedHTMLFactory<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
        h1: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h2: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h3: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h4: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h5: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        h6: DetailedHTMLFactory<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
        head: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLHeadElement>;
        header: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        hgroup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        hr: DetailedHTMLFactory<HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
        html: DetailedHTMLFactory<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
        i: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        iframe: DetailedHTMLFactory<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
        img: DetailedHTMLFactory<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
        input: DetailedHTMLFactory<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
        ins: DetailedHTMLFactory<InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
        kbd: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        keygen: DetailedHTMLFactory<KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
        label: DetailedHTMLFactory<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
        legend: DetailedHTMLFactory<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
        li: DetailedHTMLFactory<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
        link: DetailedHTMLFactory<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
        main: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        map: DetailedHTMLFactory<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
        mark: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        menu: DetailedHTMLFactory<MenuHTMLAttributes<HTMLElement>, HTMLElement>;
        menuitem: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        meta: DetailedHTMLFactory<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
        meter: DetailedHTMLFactory<MeterHTMLAttributes<HTMLElement>, HTMLElement>;
        nav: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        noscript: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        object: DetailedHTMLFactory<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
        ol: DetailedHTMLFactory<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
        optgroup: DetailedHTMLFactory<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
        option: DetailedHTMLFactory<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
        output: DetailedHTMLFactory<OutputHTMLAttributes<HTMLElement>, HTMLElement>;
        p: DetailedHTMLFactory<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
        param: DetailedHTMLFactory<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
        picture: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        pre: DetailedHTMLFactory<HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
        progress: DetailedHTMLFactory<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
        q: DetailedHTMLFactory<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
        rp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        rt: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        ruby: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        s: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        samp: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        script: DetailedHTMLFactory<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
        section: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        select: DetailedHTMLFactory<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
        small: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        source: DetailedHTMLFactory<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
        span: DetailedHTMLFactory<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
        strong: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        style: DetailedHTMLFactory<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
        sub: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        summary: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        sup: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        table: DetailedHTMLFactory<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
        tbody: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        td: DetailedHTMLFactory<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
        textarea: DetailedHTMLFactory<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
        tfoot: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        th: DetailedHTMLFactory<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
        thead: DetailedHTMLFactory<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
        time: DetailedHTMLFactory<TimeHTMLAttributes<HTMLElement>, HTMLElement>;
        title: DetailedHTMLFactory<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
        tr: DetailedHTMLFactory<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
        track: DetailedHTMLFactory<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
        u: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        ul: DetailedHTMLFactory<HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
        "var": DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        video: DetailedHTMLFactory<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
        wbr: DetailedHTMLFactory<HTMLAttributes<HTMLElement>, HTMLElement>;
        webview: DetailedHTMLFactory<WebViewHTMLAttributes<HTMLElement>, HTMLElement>;
    }

    interface ReactSVG {
        svg: SVGFactory;
        animate: SVGFactory;
        circle: SVGFactory;
        defs: SVGFactory;
        ellipse: SVGFactory;
        g: SVGFactory;
        image: SVGFactory;
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
        symbol: SVGFactory;
        text: SVGFactory;
        tspan: SVGFactory;
        use: SVGFactory;
    }

    interface ReactDOM extends ReactHTML, ReactSVG { }

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

declare module 'react' {
    //
    // Top Level API
    // ----------------------------------------------------------------------

    // DOM Elements
    function createFactory<T extends HTMLElement>(
        type: keyof ReactDOM.ReactHTML): ReactDOM.HTMLFactory<T>;
    function createFactory(
        type: keyof ReactDOM.ReactSVG): ReactDOM.SVGFactory;
    function createFactory<P extends ReactDOM.DOMAttributes<T>, T extends Element>(
        type: string): ReactDOM.DOMFactory<P, T>;

    // DOM Elements
    // TODO: generalize this to everything in `keyof ReactHTML`, not just "input"
    function createElement(
        type: "input",
        props?: ReactDOM.InputHTMLAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>,
        ...children: ReactNode[]): ReactDOM.DetailedReactHTMLElement<ReactDOM.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

    function createElement<P extends ReactDOM.HTMLAttributes<T>, T extends HTMLElement>(
        type: keyof ReactDOM.ReactHTML,
        props?: ClassAttributes<T> & P,
        ...children: ReactNode[]): ReactDOM.DetailedReactHTMLElement<P, T>;
    function createElement<P extends ReactDOM.SVGAttributes<T>, T extends SVGElement>(
        type: keyof ReactDOM.ReactSVG,
        props?: ClassAttributes<T> & P,
        ...children: ReactNode[]): ReactDOM.ReactSVGElement;
    function createElement<P extends ReactDOM.DOMAttributes<T>, T extends Element>(
        type: string,
        props?: ClassAttributes<T> & P,
        ...children: ReactNode[]): ReactDOM.DOMElement<P, T>;

    // DOM Elements
    // ReactHTMLElement
    function cloneElement<P extends ReactDOM.HTMLAttributes<T>, T extends HTMLElement>(
        element: ReactDOM.DetailedReactHTMLElement<P, T>,
        props?: P,
        ...children: ReactNode[]): ReactDOM.DetailedReactHTMLElement<P, T>;
    // ReactHTMLElement, less specific
    function cloneElement<P extends ReactDOM.HTMLAttributes<T>, T extends HTMLElement>(
        element: ReactDOM.ReactHTMLElement<T>,
        props?: P,
        ...children: ReactNode[]): ReactDOM.ReactHTMLElement<T>;
    // SVGElement
    function cloneElement<P extends ReactDOM.SVGAttributes<T>, T extends SVGElement>(
        element: ReactDOM.ReactSVGElement,
        props?: P,
        ...children: ReactNode[]): ReactDOM.ReactSVGElement;
    // DOM Element (has to be the last, because type checking stops at first overload that fits)
    function cloneElement<P extends ReactDOM.DOMAttributes<T>, T extends Element>(
        element: ReactDOM.DOMElement<P, T>,
        props?: ReactDOM.DOMAttributes<T> & P,
        ...children: ReactNode[]): ReactDOM.DOMElement<P, T>;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            // HTML
            a: ReactDOM.DetailedHTMLProps<ReactDOM.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
            abbr: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            address: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            area: ReactDOM.DetailedHTMLProps<ReactDOM.AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>;
            article: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            aside: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            audio: ReactDOM.DetailedHTMLProps<ReactDOM.AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>;
            b: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            base: ReactDOM.DetailedHTMLProps<ReactDOM.BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>;
            bdi: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            bdo: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            big: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            blockquote: ReactDOM.DetailedHTMLProps<ReactDOM.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>;
            body: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>;
            br: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLBRElement>, HTMLBRElement>;
            button: ReactDOM.DetailedHTMLProps<ReactDOM.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
            canvas: ReactDOM.DetailedHTMLProps<ReactDOM.CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>;
            caption: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            cite: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            code: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            col: ReactDOM.DetailedHTMLProps<ReactDOM.ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            colgroup: ReactDOM.DetailedHTMLProps<ReactDOM.ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>;
            data: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            datalist: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>;
            dd: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            del: ReactDOM.DetailedHTMLProps<ReactDOM.DelHTMLAttributes<HTMLElement>, HTMLElement>;
            details: ReactDOM.DetailedHTMLProps<ReactDOM.DetailsHTMLAttributes<HTMLElement>, HTMLElement>;
            dfn: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            dialog: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            div: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
            dl: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLDListElement>, HTMLDListElement>;
            dt: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            em: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            embed: ReactDOM.DetailedHTMLProps<ReactDOM.EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>;
            fieldset: ReactDOM.DetailedHTMLProps<ReactDOM.FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>;
            figcaption: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            figure: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            footer: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            form: ReactDOM.DetailedHTMLProps<ReactDOM.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
            h1: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h2: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h3: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h4: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h5: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            h6: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
            head: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>;
            header: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            hgroup: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            hr: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
            html: ReactDOM.DetailedHTMLProps<ReactDOM.HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;
            i: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            iframe: ReactDOM.DetailedHTMLProps<ReactDOM.IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>;
            img: ReactDOM.DetailedHTMLProps<ReactDOM.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
            input: ReactDOM.DetailedHTMLProps<ReactDOM.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
            ins: ReactDOM.DetailedHTMLProps<ReactDOM.InsHTMLAttributes<HTMLModElement>, HTMLModElement>;
            kbd: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            keygen: ReactDOM.DetailedHTMLProps<ReactDOM.KeygenHTMLAttributes<HTMLElement>, HTMLElement>;
            label: ReactDOM.DetailedHTMLProps<ReactDOM.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;
            legend: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>;
            li: ReactDOM.DetailedHTMLProps<ReactDOM.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;
            link: ReactDOM.DetailedHTMLProps<ReactDOM.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
            main: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            map: ReactDOM.DetailedHTMLProps<ReactDOM.MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>;
            mark: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            menu: ReactDOM.DetailedHTMLProps<ReactDOM.MenuHTMLAttributes<HTMLElement>, HTMLElement>;
            menuitem: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            meta: ReactDOM.DetailedHTMLProps<ReactDOM.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
            meter: ReactDOM.DetailedHTMLProps<ReactDOM.MeterHTMLAttributes<HTMLElement>, HTMLElement>;
            nav: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            noindex: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            noscript: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            object: ReactDOM.DetailedHTMLProps<ReactDOM.ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>;
            ol: ReactDOM.DetailedHTMLProps<ReactDOM.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>;
            optgroup: ReactDOM.DetailedHTMLProps<ReactDOM.OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>;
            option: ReactDOM.DetailedHTMLProps<ReactDOM.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>;
            output: ReactDOM.DetailedHTMLProps<ReactDOM.OutputHTMLAttributes<HTMLElement>, HTMLElement>;
            p: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
            param: ReactDOM.DetailedHTMLProps<ReactDOM.ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>;
            picture: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            pre: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLPreElement>, HTMLPreElement>;
            progress: ReactDOM.DetailedHTMLProps<ReactDOM.ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>;
            q: ReactDOM.DetailedHTMLProps<ReactDOM.QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;
            rp: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            rt: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            ruby: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            s: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            samp: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            script: ReactDOM.DetailedHTMLProps<ReactDOM.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
            section: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            select: ReactDOM.DetailedHTMLProps<ReactDOM.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>;
            small: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            source: ReactDOM.DetailedHTMLProps<ReactDOM.SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;
            span: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
            strong: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            style: ReactDOM.DetailedHTMLProps<ReactDOM.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
            sub: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            summary: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            sup: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            table: ReactDOM.DetailedHTMLProps<ReactDOM.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
            tbody: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            td: ReactDOM.DetailedHTMLProps<ReactDOM.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
            textarea: ReactDOM.DetailedHTMLProps<ReactDOM.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
            tfoot: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            th: ReactDOM.DetailedHTMLProps<ReactDOM.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
            thead: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
            time: ReactDOM.DetailedHTMLProps<ReactDOM.TimeHTMLAttributes<HTMLElement>, HTMLElement>;
            title: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
            tr: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
            track: ReactDOM.DetailedHTMLProps<ReactDOM.TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>;
            u: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            ul: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
            "var": ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            video: ReactDOM.DetailedHTMLProps<ReactDOM.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;
            wbr: ReactDOM.DetailedHTMLProps<ReactDOM.HTMLAttributes<HTMLElement>, HTMLElement>;
            webview: ReactDOM.DetailedHTMLProps<ReactDOM.WebViewHTMLAttributes<HTMLElement>, HTMLElement>;

            // SVG
            svg: ReactDOM.SVGProps<SVGSVGElement>;

            animate: ReactDOM.SVGProps<SVGElement>; // TODO: It is SVGAnimateElement but is not in TypeScript's lib.dom.d.ts for now.
            animateTransform: ReactDOM.SVGProps<SVGElement>; // TODO: It is SVGAnimateTransformElement but is not in TypeScript's lib.dom.d.ts for now.
            circle: ReactDOM.SVGProps<SVGCircleElement>;
            clipPath: ReactDOM.SVGProps<SVGClipPathElement>;
            defs: ReactDOM.SVGProps<SVGDefsElement>;
            desc: ReactDOM.SVGProps<SVGDescElement>;
            ellipse: ReactDOM.SVGProps<SVGEllipseElement>;
            feBlend: ReactDOM.SVGProps<SVGFEBlendElement>;
            feColorMatrix: ReactDOM.SVGProps<SVGFEColorMatrixElement>;
            feComponentTransfer: ReactDOM.SVGProps<SVGFEComponentTransferElement>;
            feComposite: ReactDOM.SVGProps<SVGFECompositeElement>;
            feConvolveMatrix: ReactDOM.SVGProps<SVGFEConvolveMatrixElement>;
            feDiffuseLighting: ReactDOM.SVGProps<SVGFEDiffuseLightingElement>;
            feDisplacementMap: ReactDOM.SVGProps<SVGFEDisplacementMapElement>;
            feDistantLight: ReactDOM.SVGProps<SVGFEDistantLightElement>;
            feFlood: ReactDOM.SVGProps<SVGFEFloodElement>;
            feFuncA: ReactDOM.SVGProps<SVGFEFuncAElement>;
            feFuncB: ReactDOM.SVGProps<SVGFEFuncBElement>;
            feFuncG: ReactDOM.SVGProps<SVGFEFuncGElement>;
            feFuncR: ReactDOM.SVGProps<SVGFEFuncRElement>;
            feGaussianBlur: ReactDOM.SVGProps<SVGFEGaussianBlurElement>;
            feImage: ReactDOM.SVGProps<SVGFEImageElement>;
            feMerge: ReactDOM.SVGProps<SVGFEMergeElement>;
            feMergeNode: ReactDOM.SVGProps<SVGFEMergeNodeElement>;
            feMorphology: ReactDOM.SVGProps<SVGFEMorphologyElement>;
            feOffset: ReactDOM.SVGProps<SVGFEOffsetElement>;
            fePointLight: ReactDOM.SVGProps<SVGFEPointLightElement>;
            feSpecularLighting: ReactDOM.SVGProps<SVGFESpecularLightingElement>;
            feSpotLight: ReactDOM.SVGProps<SVGFESpotLightElement>;
            feTile: ReactDOM.SVGProps<SVGFETileElement>;
            feTurbulence: ReactDOM.SVGProps<SVGFETurbulenceElement>;
            filter: ReactDOM.SVGProps<SVGFilterElement>;
            foreignObject: ReactDOM.SVGProps<SVGForeignObjectElement>;
            g: ReactDOM.SVGProps<SVGGElement>;
            image: ReactDOM.SVGProps<SVGImageElement>;
            line: ReactDOM.SVGProps<SVGLineElement>;
            linearGradient: ReactDOM.SVGProps<SVGLinearGradientElement>;
            marker: ReactDOM.SVGProps<SVGMarkerElement>;
            mask: ReactDOM.SVGProps<SVGMaskElement>;
            metadata: ReactDOM.SVGProps<SVGMetadataElement>;
            path: ReactDOM.SVGProps<SVGPathElement>;
            pattern: ReactDOM.SVGProps<SVGPatternElement>;
            polygon: ReactDOM.SVGProps<SVGPolygonElement>;
            polyline: ReactDOM.SVGProps<SVGPolylineElement>;
            radialGradient: ReactDOM.SVGProps<SVGRadialGradientElement>;
            rect: ReactDOM.SVGProps<SVGRectElement>;
            stop: ReactDOM.SVGProps<SVGStopElement>;
            switch: ReactDOM.SVGProps<SVGSwitchElement>;
            symbol: ReactDOM.SVGProps<SVGSymbolElement>;
            text: ReactDOM.SVGProps<SVGTextElement>;
            textPath: ReactDOM.SVGProps<SVGTextPathElement>;
            tspan: ReactDOM.SVGProps<SVGTSpanElement>;
            use: ReactDOM.SVGProps<SVGUseElement>;
            view: ReactDOM.SVGProps<SVGViewElement>;
        }
    }
}
