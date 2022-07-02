// Type definitions for OverlayScrollbars 1.12
// Project: https://kingsora.github.io/OverlayScrollbars
// Definitions by: KingSora <https://github.com/KingSora>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace OverlayScrollbars {
    type ResizeBehavior = "none" | "both" | "horizontal" | "vertical" | "n" | "b" | "h" | "v";

    type OverflowBehavior = "hidden" | "scroll" | "visible-hidden" | "visible-scroll" | "h" | "s" | "v-h" | "v-s";

    type VisibilityBehavior = "visible" | "hidden" | "auto" | "v" | "h" | "a";

    type AutoHideBehavior = "never" | "scroll" | "leave" | "move" | "n" | "s" | "l" | "m";

    type ScrollBehavior = "always" | "ifneeded" | "never";

    type BlockBehavior = "begin" | "end" | "center" | "nearest";

    type Easing = string | null | undefined;

    type Margin = number | boolean;

    type Position = number | string;

    type Extensions = string | ReadonlyArray<string> | { [extensionName: string]: {} };

    type BasicEventCallback = (this: OverlayScrollbars) => void;

    type ScrollEventCallback = (this: OverlayScrollbars, args?: UIEvent) => void;

    type OverflowChangedCallback = (this: OverlayScrollbars, args?: OverflowChangedArgs) => void;

    type OverflowAmountChangedCallback = (this: OverlayScrollbars, args?: OverflowAmountChangedArgs) => void;

    type DirectionChangedCallback = (this: OverlayScrollbars, args?: DirectionChangedArgs) => void;

    type SizeChangedCallback = (this: OverlayScrollbars, args?: SizeChangedArgs) => void;

    type UpdatedCallback = (this: OverlayScrollbars, args?: UpdatedArgs) => void;

    type Coordinates = { x?: Position | undefined; y?: Position | undefined }
        | { l?: Position | undefined; t?: Position | undefined }
        | { left?: Position | undefined; top?: Position | undefined }
        | [Position, Position]
        | Position
        | HTMLElement
        | JQuery
        | {
            el: HTMLElement | JQuery;
            scroll?: ScrollBehavior | { x?: ScrollBehavior | undefined; y?: ScrollBehavior | undefined } | [ScrollBehavior, ScrollBehavior] | undefined;
            block?: BlockBehavior | { x?: BlockBehavior | undefined; y?: BlockBehavior | undefined } | [BlockBehavior, BlockBehavior] | undefined;
            margin?: Margin
            | {
                top?: Margin | undefined;
                right?: Margin | undefined;
                bottom?: Margin | undefined;
                left?: Margin | undefined;
            }
            | [Margin, Margin]
            | [Margin, Margin, Margin, Margin] | undefined;
        };

    interface OverflowChangedArgs {
        x: boolean;
        y: boolean;
        xScrollable: boolean;
        yScrollable: boolean;
        clipped: boolean;
    }

    interface OverflowAmountChangedArgs {
        x: number;
        y: number;
    }

    interface DirectionChangedArgs {
        isRTL: number;
        dir: string;
    }

    interface SizeChangedArgs {
        width: number;
        height: number;
    }

    interface UpdatedArgs {
        forced: boolean;
    }

    interface Options {
        className?: string | null | undefined;
        resize?: ResizeBehavior | undefined;
        sizeAutoCapable?: boolean | undefined;
        clipAlways?: boolean | undefined;
        normalizeRTL?: boolean | undefined;
        paddingAbsolute?: boolean | undefined;
        autoUpdate?: boolean | null | undefined;
        autoUpdateInterval?: number | undefined;
        updateOnLoad?: string | ReadonlyArray<string> | null | undefined;
        nativeScrollbarsOverlaid?: {
            showNativeScrollbars?: boolean | undefined;
            initialize?: boolean | undefined;
        } | undefined;
        overflowBehavior?: {
            x?: OverflowBehavior | undefined;
            y?: OverflowBehavior | undefined;
        } | undefined;
        scrollbars?: {
            visibility?: VisibilityBehavior | undefined;
            autoHide?: AutoHideBehavior | undefined;
            autoHideDelay?: number | undefined;
            dragScrolling?: boolean | undefined;
            clickScrolling?: boolean | undefined;
            touchSupport?: boolean | undefined;
            snapHandle?: boolean | undefined;
        } | undefined;
        textarea?: {
            dynWidth?: boolean | undefined;
            dynHeight?: boolean | undefined;
            inheritedAttrs?: string | ReadonlyArray<string> | null | undefined;
        } | undefined;
        callbacks?: {
            onInitialized?: BasicEventCallback | null | undefined;
            onInitializationWithdrawn?: BasicEventCallback | null | undefined;
            onDestroyed?: BasicEventCallback | null | undefined;
            onScrollStart?: ScrollEventCallback | null | undefined;
            onScroll?: ScrollEventCallback | null | undefined;
            onScrollStop?: ScrollEventCallback | null | undefined;
            onOverflowChanged?: OverflowChangedCallback | null | undefined;
            onOverflowAmountChanged?: OverflowAmountChangedCallback | null | undefined;
            onDirectionChanged?: DirectionChangedCallback | null | undefined;
            onContentSizeChanged?: SizeChangedCallback | null | undefined;
            onHostSizeChanged?: SizeChangedCallback | null | undefined;
            onUpdated?: UpdatedCallback | null | undefined;
        } | undefined;
    }

    interface ScrollInfo {
        position: {
            x: number;
            y: number;
        };
        ratio: {
            x: number;
            y: number;
        };
        max: {
            x: number;
            y: number;
        };
        handleOffset: {
            x: number;
            y: number;
        };
        handleLength: {
            x: number;
            y: number;
        };
        handleLengthRatio: {
            x: number;
            y: number;
        };
        trackLength: {
            x: number;
            y: number;
        };
        snappedHandleOffset: {
            x: number;
            y: number;
        };
        isRTL: boolean;
        isRTLNormalized: boolean;
    }

    interface Elements {
        target: HTMLElement;
        host: HTMLElement;
        padding: HTMLElement;
        viewport: HTMLElement;
        content: HTMLElement;
        scrollbarHorizontal: {
            scrollbar: HTMLElement;
            track: HTMLElement;
            handle: HTMLElement;
        };
        scrollbarVertical: {
            scrollbar: HTMLElement;
            track: HTMLElement;
            handle: HTMLElement;
        };
        scrollbarCorner: HTMLElement;
    }

    interface State {
        destroyed: boolean;
        sleeping: boolean;
        autoUpdate: boolean;
        widthAuto: boolean;
        heightAuto: boolean;
        documentMixed: boolean;
        padding: {
            t: number;
            r: number;
            b: number;
            l: number;
        };
        overflowAmount: {
            x: number;
            y: number;
        };
        hideOverflow: {
            x: boolean;
            y: boolean;
            xs: boolean;
            ys: boolean;
        };
        hasOverflow: {
            x: boolean;
            y: boolean;
        };
        contentScrollSize: {
            width: number;
            height: number;
        };
        viewportSize: {
            width: number;
            height: number;
        };
        hostSize: {
            width: number;
            height: number;
        };
    }

    interface Extension {
        contract(global: any): boolean;

        added(options?: {}): void;

        removed(): void;

        on(callbackName: string, callbackArgs?: UIEvent | OverflowChangedArgs | OverflowAmountChangedArgs | DirectionChangedArgs | SizeChangedArgs | UpdatedArgs): void;
    }

    interface ExtensionInfo {
        name: string;
        extensionFactory: (this: OverlayScrollbars, defaultOptions: {}, compatibility: Compatibility, framework: any) => Extension;
        defaultOptions?: {} | undefined;
    }

    interface Globals {
        defaultOptions: {};
        autoUpdateLoop: boolean;
        autoUpdateRecommended: boolean;
        supportMutationObserver: boolean;
        supportResizeObserver: boolean;
        supportPassiveEvents: boolean;
        supportTransform: boolean;
        supportTransition: boolean;
        restrictedMeasuring: boolean;
        nativeScrollbarStyling: boolean;
        cssCalc: string | null;
        nativeScrollbarSize: {
            x: number;
            y: number;
        };
        nativeScrollbarIsOverlaid: {
            x: boolean;
            y: boolean;
        };
        overlayScrollbarDummySize: {
            x: number;
            y: number;
        };
        rtlScrollBehavior: {
            i: boolean;
            n: boolean;
        };
    }

    interface Compatibility {
        wW(): number;
        wH(): number;
        mO(): any;
        rO(): any;
        rAF(): (callback: (...args: any[]) => any) => number;
        cAF(): (requestID: number) => void;
        now(): number;
        stpP(event: Event): void;
        prvD(event: Event): void;
        page(event: MouseEvent): { x: number, y: number };
        mBtn(event: MouseEvent): number;
        inA<T>(item: T, array: T[]): number;
        isA(obj: any): boolean;
        type(obj: any): string;
        bind(func: (...args: any[]) => any, thisObj: any, ...args: any[]): any;
    }
}

interface OverlayScrollbars {
    options(): OverlayScrollbars.Options;
    options(options: OverlayScrollbars.Options): void;
    options(optionName: string): any;
    options(optionName: string, optionValue: {} | null): void;

    update(force?: boolean): void;

    sleep(): void;

    scroll(): OverlayScrollbars.ScrollInfo;
    scroll(
        coordinates: OverlayScrollbars.Coordinates,
        duration?: number,
        easing?: OverlayScrollbars.Easing | { x?: OverlayScrollbars.Easing | undefined; y?: OverlayScrollbars.Easing | undefined } | [OverlayScrollbars.Easing, OverlayScrollbars.Easing],
        complete?: (...args: any[]) => any
    ): void;
    scroll(coordinates: OverlayScrollbars.Coordinates, options: {}): void;

    scrollStop(): OverlayScrollbars;

    getElements(): OverlayScrollbars.Elements;
    getElements(elementName: string): any;

    getState(): OverlayScrollbars.State;
    getState(stateProperty: string): any;

    destroy(): void;

    ext(): {};
    ext(extensionName: string): OverlayScrollbars.Extension;

    addExt(extensionName: string, options: {}): OverlayScrollbars.Extension;

    removeExt(extensionName: string): boolean;
}

interface OverlayScrollbarsStatic {
    (
        element: HTMLElement | Element | JQuery,
        options: OverlayScrollbars.Options,
        extensions?: OverlayScrollbars.Extensions
    ): OverlayScrollbars;
    (
        element: HTMLElement | Element | JQuery | null
    ): OverlayScrollbars | undefined;

    (
        elements: NodeListOf<Element> | ReadonlyArray<Element> | JQuery,
        options: OverlayScrollbars.Options,
        extensions?: OverlayScrollbars.Extensions
    ): OverlayScrollbars | OverlayScrollbars[] | undefined;
    (
        elements: NodeListOf<Element> | ReadonlyArray<Element> | JQuery,
        filter?: string | ((element: Element, instance: OverlayScrollbars) => boolean)
    ): OverlayScrollbars | OverlayScrollbars[] | undefined;

    globals(): OverlayScrollbars.Globals;

    defaultOptions(): OverlayScrollbars.Options;
    defaultOptions(newDefaultOptions: OverlayScrollbars.Options): void;

    extension(): { [index: number]: OverlayScrollbars.ExtensionInfo; length: number };
    extension(extensionName: string): OverlayScrollbars.ExtensionInfo;
    extension(
        extensionName: string,
        extensionFactory: (this: OverlayScrollbars, defaultOptions: {},
            compatibility: OverlayScrollbars.Compatibility, framework: any) => OverlayScrollbars.Extension,
        defaultOptions?: {}
    ): void;
    extension(extensionName: string, extensionFactory: null | undefined): void;

    valid(osInstance: any): boolean;
}

interface JQuery {
    overlayScrollbars(
        options: OverlayScrollbars.Options,
        extensions?: OverlayScrollbars.Extensions
    ): JQuery;
    overlayScrollbars(
        filter?: string | ((element: Element, instance: OverlayScrollbars) => boolean)
    ): OverlayScrollbars | OverlayScrollbars[] | undefined;
}

export as namespace OverlayScrollbars;
export = OverlayScrollbars;
declare const OverlayScrollbars: OverlayScrollbarsStatic;
