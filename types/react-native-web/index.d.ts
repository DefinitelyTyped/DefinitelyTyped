import type {
    ComponentClass,
    ComponentType,
    CSSProperties,
    FocusEventHandler,
    FunctionComponent,
    KeyboardEventHandler,
    MouseEventHandler,
    PointerEventHandler,
    ReactNode,
    RefAttributes,
    TouchEventHandler,
    UIEventHandler,
    WheelEventHandler,
} from "react";
import type {
    Animated as AnimatedRN,
    BackHandler as BackHandlerRN,
    DeviceEventEmitter as DeviceEventEmitterRN,
    Dimensions as DimensionsRN,
    DimensionValue,
    Easing as EasingRN,
    FlatList as FlatListRN,
    FlatListProps as FlatListPropsRN,
    GestureResponderEvent,
    InteractionManager as InteractionManagerRN,
    LayoutAnimation as LayoutAnimationRN,
    MeasureInWindowOnSuccessCallback,
    MeasureLayoutOnSuccessCallback,
    MeasureOnSuccessCallback,
    NativeEventEmitter as NativeEventEmitterRN,
    SectionList as SectionListRN,
    SectionListProps as SectionListPropsRN,
    StyleProp,
    StyleSheet as StyleSheetRN,
    TextStyle,
    ViewStyle,
    VirtualizedList as VirtualizedListRN,
    VirtualizedListProps as VirtualizedListPropsRN,
} from "react-native";

type GenericFunction = (...args: any[]) => void;
interface NativeEventSubscription {
    remove(): void;
}

type LayoutCallback = (
    x: number,
    y: number,
    width: number,
    height: number,
    left: number,
    top: number,
) => void;

type MeasureInWindowCallback = (
    left: number,
    top: number,
    width: number,
    height: number,
) => void;

interface PlatformMethods {
    blur: () => void;
    focus: () => void;
    measure: (callback: LayoutCallback) => void;
    measureInWindow: (callback: MeasureInWindowCallback) => void;
    measureLayout: (
        relativeToNativeNode: {},
        onSuccess: LayoutCallback,
        onFail: () => void,
    ) => void;
}

// Extracted from react-native-web, packages/react-native-web/src/exports/View/types.js
type idRef = string;
type idRefList = idRef | idRef[];

// https://necolas.github.io/react-native-web/docs/accessibility/#accessibility-props-api
// Extracted from react-native-web, packages/react-native-web/src/exports/View/types.js
interface AccessibilityPropsWeb {
    "aria-activedescendant"?: idRef;
    "aria-atomic"?: boolean;
    "aria-autocomplete"?: "none" | "list" | "inline" | "both";
    "aria-busy"?: boolean;
    "aria-checked"?: boolean | "mixed";
    "aria-colcount"?: number;
    "aria-colindex"?: number;
    "aria-colspan"?: number;
    "aria-controls"?: idRef;
    "aria-current"?: boolean | "page" | "step" | "location" | "date" | "time";
    "aria-describedby"?: idRef;
    "aria-details"?: idRef;
    "aria-disabled"?: boolean;
    "aria-errormessage"?: idRef;
    "aria-expanded"?: boolean;
    "aria-flowto"?: idRef;
    "aria-haspopup"?: "dialog" | "grid" | "listbox" | "menu" | "tree" | false;
    "aria-hidden"?: boolean;
    "aria-invalid"?: boolean;
    "aria-keyshortcuts"?: string;
    "aria-label"?: string;
    "aria-labelledby"?: idRef;
    "aria-level"?: number;
    "aria-live"?: "assertive" | "off" | "polite";
    "aria-modal"?: boolean;
    "aria-multiline"?: boolean;
    "aria-multiselectable"?: boolean;
    "aria-orientation"?: "horizontal" | "vertical";
    "aria-owns"?: idRef;
    "aria-placeholder"?: string;
    "aria-posinset"?: number;
    "aria-pressed"?: boolean | "mixed";
    "aria-readonly"?: boolean;
    "aria-required"?: boolean;
    "aria-roledescription"?: string;
    "aria-rowcount"?: number;
    "aria-rowindex"?: number;
    "aria-rowspan"?: number;
    "aria-selected"?: boolean;
    "aria-setsize"?: number;
    "aria-sort"?: "ascending" | "descending" | "none" | "other";
    "aria-valuemax"?: number;
    "aria-valuemin"?: number;
    "aria-valuenow"?: number;
    "aria-valuetext"?: string;

    // @deprecated
    accessibilityActiveDescendant?: idRef;
    accessibilityAtomic?: boolean;
    accessibilityAutoComplete?: "none" | "list" | "inline" | "both";
    accessibilityBusy?: boolean;
    accessibilityChecked?: boolean | "mixed";
    accessibilityColumnCount?: number;
    accessibilityColumnIndex?: number;
    accessibilityColumnSpan?: number;
    accessibilityControls?: idRefList;
    accessibilityCurrent?: boolean | "page" | "step" | "location" | "date" | "time";
    accessibilityDescribedBy?: idRefList;
    accessibilityDetails?: idRef;
    accessibilityDisabled?: boolean;
    accessibilityErrorMessage?: idRef;
    accessibilityExpanded?: boolean;
    accessibilityFlowTo?: idRefList;
    accessibilityHasPopup?: "dialog" | "grid" | "listbox" | "menu" | "tree" | false;
    accessibilityHidden?: boolean;
    accessibilityInvalid?: boolean;
    accessibilityKeyShortcuts?: string[];
    accessibilityLabel?: string;
    accessibilityLabelledBy?: idRef;
    accessibilityLevel?: number;
    accessibilityLiveRegion?: "assertive" | "none" | "polite";
    accessibilityModal?: boolean;
    accessibilityMultiline?: boolean;
    accessibilityMultiSelectable?: boolean;
    accessibilityOrientation?: "horizontal" | "vertical";
    accessibilityOwns?: idRefList;
    accessibilityPlaceholder?: string;
    accessibilityPosInSet?: number;
    accessibilityPressed?: boolean | "mixed";
    accessibilityReadOnly?: boolean;
    accessibilityRequired?: boolean;
    accessibilityRoleDescription?: string;
    accessibilityRowCount?: number;
    accessibilityRowIndex?: number;
    accessibilityRowSpan?: number;
    accessibilitySelected?: boolean;
    accessibilitySetSize?: number;
    accessibilitySort?: "ascending" | "descending" | "none" | "other";
    accessibilityValueMax?: number;
    accessibilityValueMin?: number;
    accessibilityValueNow?: number;
    accessibilityValueText?: string;
}

// https://necolas.github.io/react-native-web/docs/interactions/#pointerevent-props-api
// Extracted properties from react-native-web, packages/react-native-web/src/exports/View/types.js and packages/react-native-web/src/modules/forwardedProps/index.js
// Extracted types from @types/react, index.d.ts
export interface ClickProps {
    onClick?: MouseEventHandler;
    onAuxClick?: MouseEventHandler;
    onContextMenu?: MouseEventHandler;
    onGotPointerCapture?: PointerEventHandler;
    onLostPointerCapture?: PointerEventHandler;
    onPointerCancel?: PointerEventHandler;
    onPointerDown?: PointerEventHandler;
    onPointerEnter?: PointerEventHandler;
    onPointerMove?: PointerEventHandler;
    onPointerLeave?: PointerEventHandler;
    onPointerOut?: PointerEventHandler;
    onPointerOver?: PointerEventHandler;
    onPointerUp?: PointerEventHandler;
    onScroll?: UIEventHandler;
    onWheel?: WheelEventHandler;
}

// https://necolas.github.io/react-native-web/docs/interactions/#focusevent-props-api
// Extracted properties from react-native-web, packages/react-native-web/src/exports/View/types.js and packages/react-native-web/src/modules/forwardedProps/index.js
// Extracted types from @types/react, index.d.ts
export interface FocusProps {
    onBlur?: FocusEventHandler;
    onFocus?: FocusEventHandler;
}

// https://necolas.github.io/react-native-web/docs/interactions/#keyboardevent-props-api
// Extracted properties from react-native-web, packages/react-native-web/src/exports/View/types.js and packages/react-native-web/src/modules/forwardedProps/index.js
// Extracted types from @types/react, index.d.ts
export interface KeyboardProps {
    onKeyDown?: KeyboardEventHandler;
    onKeyDownCapture?: KeyboardEventHandler;
    onKeyUp?: KeyboardEventHandler;
    onKeyUpCapture?: KeyboardEventHandler;
}

// Extracted properties from react-native-web, packages/react-native-web/src/exports/View/types.js and packages/react-native-web/src/modules/forwardedProps/index.js
// Extracted types from @types/react, index.d.ts
export interface MouseProps {
    onMouseDown?: MouseEventHandler;
    onMouseEnter?: MouseEventHandler;
    onMouseLeave?: MouseEventHandler;
    onMouseMove?: MouseEventHandler;
    onMouseOver?: MouseEventHandler;
    onMouseOut?: MouseEventHandler;
    onMouseUp?: MouseEventHandler;
}

// Extracted properties from react-native-web, packages/react-native-web/src/exports/View/types.js and packages/react-native-web/src/modules/forwardedProps/index.js
// Extracted types from @types/react, index.d.ts
interface TouchProps {
    onTouchCancel?: TouchEventHandler;
    onTouchCancelCapture?: TouchEventHandler;
    onTouchEnd?: TouchEventHandler;
    onTouchEndCapture?: TouchEventHandler;
    onTouchMove?: TouchEventHandler;
    onTouchMoveCapture?: TouchEventHandler;
    onTouchStart?: TouchEventHandler;
    onTouchStartCapture?: TouchEventHandler;
}

// https://necolas.github.io/react-native-web/docs/interactions/#responderevent-props-api
// Extracted from react-native-web, packages/react-native-web/src/modules/useResponderEvents/ResponderTouchHistoryStore.js
interface TouchRecord {
    currentPageX: number;
    currentPageY: number;
    currentTimeStamp: number;
    previousPageX: number;
    previousPageY: number;
    previousTimeStamp: number;
    startPageX: number;
    startPageY: number;
    startTimeStamp: number;
    touchActive: boolean;
}

// https://necolas.github.io/react-native-web/docs/interactions/#responderevent-props-api
// Extracted from react-native-web, packages/react-native-web/src/modules/useResponderEvents/ResponderTouchHistoryStore.js
type TouchHistory = Readonly<{
    indexOfSingleActiveTouch: number;
    mostRecentTimeStamp: number;
    numberActiveTouches: number;
    touchBank: TouchRecord[];
}>;

// https://necolas.github.io/react-native-web/docs/interactions/#responderevent-props-api
// Extracted from react-native-web, packages/react-native-web/src/modules/useResponderEvents/createResponderEvent.js
interface ResponderEvent {
    bubbles: boolean;
    cancelable: boolean;
    currentTarget?: any;
    defaultPrevented?: boolean;
    dispatchConfig: {
        registrationName?: string;
        phasedRegistrationNames?: {
            bubbled: string;
            captured: string;
        };
    };
    eventPhase?: number;
    isDefaultPrevented: () => boolean;
    isPropagationStopped: () => boolean;
    isTrusted?: boolean;
    preventDefault: () => void;
    stopPropagation: () => void;
    nativeEvent: TouchEvent;
    persist: () => void;
    target?: any;
    timeStamp: number;
    touchHistory: TouchHistory;
}

// https://necolas.github.io/react-native-web/docs/interactions/#responderevent-props-api
// Extracted from react-native-web, packages/react-native-web/src/modules/useResponderEvents/ResponderSystem.js
interface ResponderProps {
    // Direct responder events dispatched directly to responder. Do not bubble.
    onResponderEnd?: (event: ResponderEvent) => void;
    onResponderGrant?: (event: ResponderEvent) => void;
    onResponderMove?: (event: ResponderEvent) => void;
    onResponderRelease?: (event: ResponderEvent) => void;
    onResponderReject?: (event: ResponderEvent) => void;
    onResponderStart?: (event: ResponderEvent) => void;
    onResponderTerminate?: (event: ResponderEvent) => void;
    onResponderTerminationRequest?: (event: ResponderEvent) => boolean;

    // On pointer down, should this element become the responder?
    onStartShouldSetResponder?: (event: ResponderEvent) => boolean;
    onStartShouldSetResponderCapture?: (event: ResponderEvent) => boolean;

    // On pointer move, should this element become the responder?
    onMoveShouldSetResponder?: (event: ResponderEvent) => boolean;
    onMoveShouldSetResponderCapture?: (event: ResponderEvent) => boolean;

    // On scroll, should this element become the responder? Do no bubble
    onScrollShouldSetResponder?: (event: ResponderEvent) => boolean;
    onScrollShouldSetResponderCapture?: (event: ResponderEvent) => boolean;

    // On text selection change, should this element become the responder?
    onSelectionChangeShouldSetResponder?: (event: ResponderEvent) => boolean;
    onSelectionChangeShouldSetResponderCapture?: (event: ResponderEvent) => boolean;
}

export interface EventProps extends ClickProps, FocusProps, KeyboardProps, MouseProps, TouchProps, ResponderProps {}

/**
 * Shared props
 * Extracted from react-native-web, packages/react-native-web/src/exports/View/types.js
 */
interface WebSharedProps extends AccessibilityPropsWeb, EventProps {
    dataSet?: Record<string, unknown>;
    href?: string;
    hrefAttrs?: {
        download?: boolean;
        rel?: string;
        target?: string;
    };
    tabIndex?: 0 | -1;
    lang?: string;
}

/**
 * View
 * Extracted from react-native-web, packages/react-native-web/src/exports/View/types.js
 */
interface WebViewProps extends WebSharedProps {
    dir?: "ltr" | "rtl";
}

/**
 * Styles
 */
// We extend CSSProperties (alias to "csstype" library) which provides all CSS style properties for Web,
// but properties that are already defined on RN won't be overrided / augmented.
export interface WebStyle extends CSSProperties {
    // https://necolas.github.io/react-native-web/docs/styling/#non-standard-properties
    // Exclusive to react-native-web, "pointerEvents" already included on RN
    animationKeyframes?: string | Record<string, ViewStyle>;
    writingDirection?: "auto" | "ltr" | "rtl";
    enableBackground?: string;
}

// APIs
export interface NativeModules {
    UIManager: UIManager;
}

export interface AccessibilityInfo {
    isScreenReaderEnabled: () => Promise<any>;
    isReduceMotionEnabled: () => Promise<any>;
    fetch: () => Promise<any>;
    addEventListener: (eventName: string, handler: GenericFunction) => NativeEventSubscription;
    setAccessibilityFocus: (reactTag: number) => void;
    announceForAccessibility: (announcement: string) => void;
    removeEventListener: (eventName: string, handler: GenericFunction) => void;
}

export interface Alert {
    alert: () => void;
}

export type Animated = typeof AnimatedRN;

export interface Appearance {
    getColorScheme(): "light" | "dark";
    addChangeListener(listener: (preferences: { colorScheme: "light" | "dark" }) => void): NativeEventSubscription;
}

export interface AppRegistry {
    getAppKeys(): string[];
    getApplication(appKey: string, appParameters: any): { element: Node; getStyleElement: (...args: any[]) => Node };
    registerComponent(
        appKey: string,
        getComponentFunc: () => ComponentType<any>,
    ): string;
    registerConfig(
        config: Array<{
            appKey: string;
            component?: () => ComponentType<any>;
            run?: (...args: any[]) => void;
            section?: boolean;
        }>,
    ): void;
    registerRunnable(appKey: string, func: {
        getApplication?: (AppParams: any) => {
            element: Element;
            getStyleElement: (any: any) => Element;
        };
        run: (AppParams: any) => any;
    }): string;
    runApplication(appKey: string, appParameters: any): void;
    setComponentProviderInstrumentationHook(
        hook: (component: () => ComponentType<any>) => ComponentType<any>,
    ): void;
    setWrapperComponentProvider(
        provider: (...args: any[]) => ComponentType<any>,
    ): void;
    unmountApplicationComponentAtRootTag(rootTag: number): void;
}

export interface AppState {
    currentState:
        | "active"
        | "background"
        | "inactive"
        | "unknown"
        | "extension";
    isAvailable: boolean;

    addEventListener(
        type: "change" | "memoryWarning" | "blur" | "focus",
        listener: (
            state:
                | "active"
                | "background"
                | "inactive"
                | "unknown"
                | "extension",
        ) => void,
    ): NativeEventSubscription;
}

export type BackHandler = BackHandlerRN;

export interface Clipboard {
    isAvailable(): boolean;
    getString(): Promise<string>;
    setString(text: string): boolean;
}

export interface Dimensions extends DimensionsRN {
    removeEventListener(type: "change", handler: (DimensionsValue: any) => void): void;
}

export type Easing = typeof EasingRN;

export interface I18nManager {
    allowRTL: (allowRTL: boolean) => void;
    forceRTL: (forceRTL: boolean) => void;
    getConstants: () => { isRTL: boolean };
}

export interface Keyboard {
    isVisible(): boolean;
    addListener(): NativeEventSubscription;
    dismiss(): void;
    removeAllListeners(): void;
    removeListener(): void;
}

export type InteractionManager = typeof InteractionManagerRN;

export type LayoutAnimation = typeof LayoutAnimationRN;

export interface Linking {
    /**
     * Add a handler to Linking changes by listening to the `url` event type
     * and providing the handler
     */
    addEventListener(
        type: string,
        handler: (event: { url: string }) => void,
    ): NativeEventSubscription;

    /**
     * Removes a previously added event listener for the specified event. The callback must
     * be the same object as the one passed to `addEventListener`.
     */
    removeEventListener(eventType: string, callback: GenericFunction): void;

    /**
     * Try to open the given url in a secure fashion. The method returns a Promise object.
     * If a target is passed (including undefined) that target will be used, otherwise '_blank'.
     * If the url opens, the promise is resolved. If not, the promise is rejected.
     * Dispatches the `onOpen` event if `url` is opened successfully.
     */
    openURL(url: string, target?: string): Promise<any>;

    /**
     * Determine whether or not an installed app can handle a given URL.
     * NOTE: For web URLs, the protocol ("http://", "https://") must be set accordingly!
     * NOTE: As of iOS 9, your app needs to provide the LSApplicationQueriesSchemes key inside Info.plist.
     * @param URL the URL to open
     */
    canOpenURL(): Promise<true>;

    /**
     * If the app launch was triggered by an app link with, it will give the link url, otherwise it will give null
     * NOTE: To support deep linking on Android, refer http://developer.android.com/training/app-indexing/deep-linking.html#handling-intents
     */
    getInitialURL(): Promise<string>;
}

export type NativeEventEmitter = typeof NativeEventEmitterRN;

interface PanResponderGestureState {
    /**
     *  ID of the gestureState- persisted as long as there at least one touch on
     */
    stateID: number;

    /**
     *  the latest screen coordinates of the recently-moved touch
     */
    moveX: number;

    /**
     *  the latest screen coordinates of the recently-moved touch
     */
    moveY: number;

    /**
     * the screen coordinates of the responder grant
     */
    x0: number;

    /**
     * the screen coordinates of the responder grant
     */
    y0: number;

    /**
     * accumulated distance of the gesture since the touch started
     */
    dx: number;

    /**
     * accumulated distance of the gesture since the touch started
     */
    dy: number;

    /**
     * current velocity of the gesture
     */
    vx: number;

    /**
     * current velocity of the gesture
     */
    vy: number;

    /**
     * Number of touches currently on screen
     */
    numberActiveTouches: number;

    // All `gestureState` accounts for timeStamps up until:
    _accountsForMovesUpTo: number;
}

interface PanResponderConfig {
    onMoveShouldSetPanResponder?:
        | ((
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState,
        ) => boolean)
        | undefined;
    onStartShouldSetPanResponder?:
        | ((
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState,
        ) => boolean)
        | undefined;
    onPanResponderGrant?:
        | ((
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState,
        ) => void)
        | undefined;
    onPanResponderMove?:
        | ((
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState,
        ) => void)
        | undefined;
    onPanResponderRelease?:
        | ((
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState,
        ) => void)
        | undefined;
    onPanResponderTerminate?:
        | ((
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState,
        ) => void)
        | undefined;

    onMoveShouldSetPanResponderCapture?:
        | ((
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState,
        ) => boolean)
        | undefined;
    onStartShouldSetPanResponderCapture?:
        | ((
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState,
        ) => boolean)
        | undefined;
    onPanResponderReject?:
        | ((
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState,
        ) => void)
        | undefined;
    onPanResponderStart?:
        | ((
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState,
        ) => void)
        | undefined;
    onPanResponderEnd?:
        | ((
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState,
        ) => void)
        | undefined;
    onPanResponderTerminationRequest?:
        | ((
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState,
        ) => boolean)
        | undefined;
    onShouldBlockNativeResponder?:
        | ((
            e: GestureResponderEvent,
            gestureState: PanResponderGestureState,
        ) => boolean)
        | undefined;
}

type SyntheticEvent = Readonly<{
    bubbles?: boolean;
    cancelable?: boolean;
    currentTarget: HTMLElement;
    defaultPrevented?: boolean;
    dispatchConfig: {
        registrationName: string;
    };
    eventPhase?: number;
    preventDefault: () => void;
    isDefaultPrevented: () => boolean;
    stopPropagation: () => void;
    isPropagationStopped: () => boolean;
    isTrusted?: boolean;
    persist: () => void;
    target?: HTMLElement;
    timeStamp: number;
    type?: string;
}>;

type ResponderSyntheticEvent<T> = SyntheticEvent & {
    nativeEvent: T;
    touchHistory: {
        indexOfSingleActiveTouch: number;
        mostRecentTimeStamp: number;
        numberActiveTouches: number;
        touchBank: Array<{
            touchActive: boolean;
            startPageX: number;
            startPageY: number;
            startTimeStamp: number;
            currentPageX: number;
            currentPageY: number;
            currentTimeStamp: number;
            previousPageX: number;
            previousPageY: number;
            previousTimeStamp: number;
        }>;
    };
};

type PressEvent = ResponderSyntheticEvent<{
    changedTouches: Array<Pick<PressEvent, "nativeEvent">>;
    force: number;
    identifier: number;
    locationX: number;
    locationY: number;
    pageX: number;
    pageY: number;
    target?: HTMLElement;
    timestamp: number;
    touches: Array<Pick<PressEvent, "nativeEvent">>;
}>;

interface GestureResponderHandlers {
    panHandlers: {
        onClickCapture: (event: any) => void;
        onMoveShouldSetResponder: (event: PressEvent) => boolean;
        onMoveShouldSetResponderCapture: (event: PressEvent) => boolean;
        onResponderEnd: (event: PressEvent) => void;
        onResponderGrant: (event: PressEvent) => boolean;
        onResponderMove: (event: PressEvent) => void;
        onResponderReject: (event: PressEvent) => void;
        onResponderRelease: (event: PressEvent) => void;
        onResponderStart: (event: PressEvent) => void;
        onResponderTerminate: (event: PressEvent) => void;
        onResponderTerminationRequest: (event: PressEvent) => boolean;
        onStartShouldSetResponder: (event: PressEvent) => boolean;
        onStartShouldSetResponderCapture: (event: PressEvent) => boolean;
    };
}

export interface PanResponder {
    /**
     * @param {object} config Enhanced versions of all of the responder callbacks
     * that provide not only the typical `ResponderSyntheticEvent`, but also the
     * `PanResponder` gesture state.  Simply replace the word `Responder` with
     * `PanResponder` in each of the typical `onResponder*` callbacks. For
     * example, the `config` object would look like:
     *
     *  - `onMoveShouldSetPanResponder: (e, gestureState) => {...}`
     *  - `onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}`
     *  - `onStartShouldSetPanResponder: (e, gestureState) => {...}`
     *  - `onStartShouldSetPanResponderCapture: (e, gestureState) => {...}`
     *  - `onPanResponderReject: (e, gestureState) => {...}`
     *  - `onPanResponderGrant: (e, gestureState) => {...}`
     *  - `onPanResponderStart: (e, gestureState) => {...}`
     *  - `onPanResponderEnd: (e, gestureState) => {...}`
     *  - `onPanResponderRelease: (e, gestureState) => {...}`
     *  - `onPanResponderMove: (e, gestureState) => {...}`
     *  - `onPanResponderTerminate: (e, gestureState) => {...}`
     *  - `onPanResponderTerminationRequest: (e, gestureState) => {...}`
     *  - `onShouldBlockNativeResponder: (e, gestureState) => {...}`
     *
     *  In general, for events that have capture equivalents, we update the
     *  gestureState once in the capture phase and can use it in the bubble phase
     *  as well.
     *
     *  Be careful with onStartShould* callbacks. They only reflect updated
     *  `gestureState` for start/end events that bubble/capture to the Node.
     *  Once the node is the responder, you can rely on every start/end event
     *  being processed by the gesture and `gestureState` being updated
     *  accordingly. (numberActiveTouches) may not be totally accurate unless you
     *  are the responder.
     */
    create(config: PanResponderConfig): GestureResponderHandlers;
}

export interface PixelRatio {
    get(): number;
    getFontScale(): number;
    getPixelSizeForLayoutSize(layoutSize: number): number;
    roundToNearestPixel(layoutSize: number): number;
}

export interface Platform {
    OS: "web";
    select: (obj: object) => any;
    readonly isTesting: boolean;
}

type Content =
    | { title?: string; message?: string; url: string }
    | { title?: string; message: string; url?: string };

export interface Share {
    share(content: Content, options?: object): Promise<object>;
    readonly sharedAction: string;
    readonly dismissedAction: string;
}

export type StyleSheet = typeof StyleSheetRN;

export interface UIManager {
    blur(node: number): void;
    focus(node: number): void;
    measure(node: number, callback: MeasureOnSuccessCallback): void;
    measureInWindow(node: number, callback: MeasureInWindowOnSuccessCallback): void;
    measureLayout(
        node: number,
        relativeToNativeNode: any,
        onFail: () => void,
        onSuccess: MeasureLayoutOnSuccessCallback,
    ): void;
    updateView(node: number, props: any): void;
    configureNextLayoutAnimation(config: any, onAnimationDidEnd: GenericFunction): void;
    setLayoutAnimationEnabledExperimental(value: boolean): void;
}

export interface Vibration {
    cancel(): void;
    vibrate(pattern?: VibratePattern): void;
}

// components

export interface ActivityIndicatorProps extends ViewProps {
    animating?: boolean;
    color?: string;
    hidesWhenStopped?: boolean;
    size?: "small" | "large" | number;
}
export const ActivityIndicator: FunctionComponent<ActivityIndicatorProps & RefAttributes<typeof View>>;

export interface ButtonProps {
    accessibilityLabel?: string;
    color?: string;
    disabled?: boolean;
    onPress?: (event: any) => void;
    testID?: string;
    title: string;
}
export const Button: FunctionComponent<ButtonProps & RefAttributes<typeof View>>;

export interface CheckBoxProps extends ViewProps {
    color?: string | null;
    disabled?: boolean;
    onChange?: (event: any) => void;
    onValueChange?: (event: any) => void;
    readOnly?: boolean;
    value?: boolean;
}
export const CheckBox: FunctionComponent<CheckBoxProps & RefAttributes<typeof View>>;

export type FlatListProps<ItemT> = FlatListPropsRN<ItemT>;
export const FlatList: typeof FlatListRN;

interface SourceObject {
    /**
     * `body` is the HTTP body to send with the request. This must be a valid
     * UTF-8 string, and will be sent exactly as specified, with no
     * additional encoding (e.g. URL-escaping or base64) applied.
     */
    body?: string;
    /**
     * `cache` determines how the requests handles potentially cached
     * responses.
     *
     * - `default`: Use the native platforms default strategy. `useProtocolCachePolicy` on iOS.
     *
     * - `reload`: The data for the URL will be loaded from the originating source.
     * No existing cache data should be used to satisfy a URL load request.
     *
     * - `force-cache`: The existing cached data will be used to satisfy the request,
     * regardless of its age or expiration date. If there is no existing data in the cache
     * corresponding the request, the data is loaded from the originating source.
     *
     * - `only-if-cached`: The existing cache data will be used to satisfy a request, regardless of
     * its age or expiration date. If there is no existing data in the cache corresponding
     * to a URL load request, no attempt is made to load the data from the originating source,
     * and the load is considered to have failed.
     *
     * @platform ios
     */
    cache?: "default" | "reload" | "force-cache" | "only-if-cached";
    /**
     * `headers` is an object representing the HTTP headers to send along with the
     * request for a remote image.
     */
    headers?: { [key: string]: string };
    /**
     * `method` is the HTTP Method to use. Defaults to GET if not specified.
     */
    method?: string;
    /**
     * `scale` is used to indicate the scale factor of the image. Defaults to 1.0 if
     * unspecified, meaning that one image pixel equates to one display point / DIP.
     */
    scale?: number;
    /**
     * `uri` is a string representing the resource identifier for the image, which
     * could be an http address, a local file path, or the name of a static image
     * resource (which should be wrapped in the `require('./path/to/image.png')`
     * function).
     */
    uri: string;
    /**
     * `width` and `height` can be specified if known at build time, in which case
     * these will be used to set the default `<Image/>` component dimensions.
     */
    height?: number;
    width?: number;
}

export interface ImageProps extends ViewProps {
    blurRadius?: number;
    defaultSource?: number | string | SourceObject | SourceObject[];
    draggable?: boolean;
    onError?: (event: any) => void;
    onLayout?: (event: any) => void;
    onLoad?: (event: any) => void;
    onLoadEnd?: (event: any) => void;
    onLoadStart?: (event: any) => void;
    onProgress?: (event: any) => void;
    resizeMode?:
        | "center"
        | "contain"
        | "cover"
        | "none"
        | "repeat"
        | "stretch";
    source?: number | string | SourceObject | SourceObject[];
    style?: StyleProp<ViewStyle>;
    tintColor?: string | null;
}
export const Image: FunctionComponent<ImageProps & RefAttributes<typeof View>>;

export interface ImageBackgroundProps extends ViewProps {
    animating?: boolean;
    imageRef?: any;
    imageStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
}
export const ImageBackground: FunctionComponent<ImageBackgroundProps & RefAttributes<typeof View>>;

export interface KeyboardAvoidingViewProps extends ViewProps {
    behavior?: "height" | "padding" | "position";
    contentContainerStyle?: StyleProp<ViewStyle>;
    keyboardVerticalOffset: number;
}
export const KeyboardAvoidingView: ComponentClass<KeyboardAvoidingViewProps>;

export interface ModalProps extends ViewProps {
    animationType?: "none" | "slide" | "fade";
    children: any;
    hardwareAccelerated?: boolean;
    onDismiss?: () => any;
    onOrientationChange?: (event: {
        orientation: "portrait" | "landscape";
    }) => void;
    onRequestClose?: () => void;
    onShow?: () => void;
    presentationStyle?:
        | "fullScreen"
        | "pageSheet"
        | "formSheet"
        | "overFullScreen";
    statusBarTranslucent?: boolean;
    supportedOrientations?: Array<
        | "portrait"
        | "portrait-upside-down"
        | "landscape"
        | "landscape-left"
        | "landscape-right"
    >;
    transparent?: boolean;
    visible?: boolean;
}
export const Modal: FunctionComponent<ModalProps & RefAttributes<typeof View>>;

export interface PickerProps extends ViewProps {
    children?: ReactNode;
    enabled?: boolean;
    onValueChange?: (value: number | string) => void;
    selectedValue?: number | string;
    style?: any;
    /* compat */
    itemStyle?: any;
    mode?: string;
    prompt?: string;
}
export const Picker: FunctionComponent<PickerProps & RefAttributes<HTMLElement & PlatformMethods>>;

export interface PressableProps extends ViewPropsWithoutStyle {
    children:
        | ReactNode
        | ((state: {
            pressed: boolean;
        }) => ReactNode);
    // Duration (in milliseconds) from `onPressIn` before `onLongPress` is called.
    delayLongPress?: number;
    // Duration (in milliseconds) from `onPressStart` is called after pointerdown
    delayPressIn?: number;
    // Duration (in milliseconds) from `onPressEnd` is called after pointerup.
    delayPressOut?: number;
    // Whether the press behavior is disabled.
    disabled?: boolean;
    // Called when the view is hovered
    onHoverIn?: (event: any) => void;
    // Called when the view is no longer hovered
    onHoverOut?: (event: any) => void;
    // Called when this view's layout changes
    onLayout?: (event: any) => void;
    // Called when a long press gesture has been triggered.
    onLongPress?: (event: any) => void;
    // Called when a press gestute has been triggered.
    onPress?: (event: any) => void;
    // Called when the press is activated to provide visual feedback.
    onPressIn?: (event: any) => void;
    // Called when the press location moves. (This should rarely be used.)
    onPressMove?: (event: any) => void;
    // Called when the press is deactivated to undo visual feedback.
    onPressOut?: (event: any) => void;
    style?:
        | StyleProp<ViewStyle>
        | ((state: {
            pressed: boolean;
        }) => StyleProp<ViewStyle>);
}
export const Pressable: FunctionComponent<PressableProps & RefAttributes<typeof View>>;

export interface ProgressBarProps extends ViewProps {
    color?: string | null;
    indeterminate?: boolean;
    progress?: number;
    trackColor?: string | null;
}
export const ProgressBar: FunctionComponent<ProgressBarProps & RefAttributes<typeof View>>;

export interface RefreshControlProps extends ViewProps {
    colors?: Array<string | null>;
    enabled?: boolean;
    onRefresh?: () => void;
    progressBackgroundColor?: string | null;
    progressViewOffset?: number;
    refreshing: boolean;
    size?: 0 | 1;
    tintColor?: string | null;
    title?: string;
    titleColor?: string | null;
}
export const RefreshControl: FunctionComponent<RefreshControlProps>;

export type SafeAreaViewProps = ViewProps;
export const SafeAreaView: FunctionComponent<SafeAreaViewProps>;

export interface ScrollViewProps extends ViewProps {
    centerContent?: boolean;
    contentContainerStyle?: ViewStyle;
    horizontal?: boolean;
    keyboardDismissMode?: "none" | "interactive" | "on-drag";
    onContentSizeChange?: (event: any) => void;
    onScroll?: (event: any) => void;
    pagingEnabled?: boolean;
    refreshControl?: any;
    scrollEnabled?: boolean;
    scrollEventThrottle?: number;
    stickyHeaderIndices?: number[];
}
export const ScrollView: FunctionComponent<ScrollViewProps & RefAttributes<typeof View>>;

export type SectionListProps<ItemT> = SectionListPropsRN<ItemT>;
export const SectionList: typeof SectionListRN;

export const StatusBar: FunctionComponent;

export interface SwitchProps extends ViewProps {
    activeThumbColor?: string | null;
    activeTrackColor?: string | null;
    disabled?: boolean;
    onValueChange?: (event: any) => void;
    thumbColor?: string | null;
    trackColor?: string | null | { false: string | null; true: string | null };
    value?: boolean;
}
export const Switch: FunctionComponent<SwitchProps & RefAttributes<typeof View>>;

export interface TextProps extends ViewPropsWithoutStyle {
    numberOfLines?: number;
    role?:
        | "button"
        | "header"
        | "heading"
        | "label"
        | "link"
        | "listitem"
        | "none"
        | "text";
    style?: StyleProp<TextStyle>;
    testID?: string;
    // @deprecated
    accessibilityRole?:
        | "button"
        | "header"
        | "heading"
        | "label"
        | "link"
        | "listitem"
        | "none"
        | "text";
    onPress?: (event: any) => void;
    selectable?: boolean;
}
export const Text: FunctionComponent<TextProps & RefAttributes<HTMLElement & PlatformMethods>>;

export interface TextInputProps extends ViewPropsWithoutStyle {
    autoCapitalize?: "characters" | "none" | "sentences" | "words";
    autoComplete?: string;
    autoCompleteType?: string; // Compat with React Native (Bug react-native#26003)
    autoCorrect?: boolean;
    autoFocus?: boolean;
    blurOnSubmit?: boolean;
    caretHidden?: boolean;
    clearTextOnFocus?: boolean;
    defaultValue?: string;
    disabled?: boolean;
    enterKeyHint?:
        | "enter"
        | "done"
        | "go"
        | "next"
        | "previous"
        | "search"
        | "send";
    inputAccessoryViewID?: string;
    inputMode?:
        | "decimal"
        | "email"
        | "none"
        | "numeric"
        | "search"
        | "tel"
        | "text"
        | "url";
    maxLength?: number;
    multiline?: boolean;
    onChange?: (event: any) => void;
    onChangeText?: (event: string) => void;
    onContentSizeChange?: (event: any) => void;
    onEndEditing?: (event: any) => void;
    onKeyPress?: (event: any) => void;
    onSelectionChange?: (event: any) => void;
    onScroll?: (event: any) => void;
    onSubmitEditing?: (event: any) => void;
    placeholder?: string;
    placeholderTextColor?: string | null;
    readOnly?: boolean;
    rows?: number;
    secureTextEntry?: boolean;
    selectTextOnFocus?: boolean;
    selection?: {
        start: number;
        end?: number;
    };
    selectionColor?: string | null;
    showSoftInputOnFocus?: boolean;
    spellCheck?: boolean;
    style?: StyleProp<TextStyle>;
    value?: string;
    // deprecated
    editable?: boolean;
    keyboardType?:
        | "default"
        | "email-address"
        | "number-pad"
        | "numbers-and-punctuation"
        | "numeric"
        | "phone-pad"
        | "search"
        | "url"
        | "web-search";
    numberOfLines?: number;
    returnKeyType?:
        | "enter"
        | "done"
        | "go"
        | "next"
        | "previous"
        | "search"
        | "send";
}
export const TextInput: FunctionComponent<TextInputProps & RefAttributes<HTMLElement & PlatformMethods>>;

export interface Touchable {
    TOUCH_TARGET_DEBUG: boolean;
    renderDebugView: (props: {
        color: string | number;
        hitSlop: object;
    }) => ReactNode;
}

export interface TouchableHighlightProps extends ViewProps {
    activeOpacity?: number;
    onHideUnderlay?: () => void;
    onShowUnderlay?: () => void;
    style?: ViewStyle;
    testOnly_pressed?: boolean;
    underlayColor?: string | null;
}
export const TouchableHighlight: FunctionComponent<TouchableHighlightProps & RefAttributes<typeof View>>;

export const TouchableNativeFeedback: ComponentClass;

export interface TouchableOpacityProps extends ViewProps {
    activeOpacity?: number;
    style?: StyleProp<ViewStyle>;
}
export const TouchableOpacity: FunctionComponent<TouchableOpacityProps & RefAttributes<typeof View>>;

export interface TouchableWithoutFeedbackProps extends ViewProps {
    children?: ReactNode;
    delayLongPress?: number;
    delayPressIn?: number;
    delayPressOut?: number;
    disabled?: boolean;
    focusable?: boolean;
    rejectResponderTermination?: boolean;
}
export const TouchableWithoutFeedback: FunctionComponent<TouchableWithoutFeedbackProps & RefAttributes<typeof View>>;

export interface ViewProps extends AccessibilityPropsWeb, EventProps {
    children?: any;
    dataSet?: Record<string, unknown>;
    dir?: "ltr" | "rtl";
    id?: string;
    lang?: string;
    style?: StyleProp<ViewStyle>;
    tabIndex?: 0 | -1;
    testID?: string;
    // unstable
    href?: string;
    hrefAttrs?: { download?: boolean; rel?: string; target?: string };
    // @deprecated
    focusable?: boolean;
    pointerEvents?: "box-none" | "none" | "box-only" | "auto";
    nativeID?: string;
}
type ViewPropsWithoutStyle = Omit<ViewProps, "style">;

export const View: FunctionComponent<ActivityIndicatorProps & RefAttributes<HTMLElement>>;

export type VirtualizedListProps<ItemT> = VirtualizedListPropsRN<ItemT>;
export const VirtualizedList: typeof VirtualizedListRN;

export const YellowBox: FunctionComponent<object>;

export interface LogBox {
    ignoreLogs(): void;
    ignoreAllLogs(): void;
    uninstall(): void;
    install(): void;
}

// plugins
export type DeviceEventEmitter = typeof DeviceEventEmitterRN;

// hooks
export function useColorScheme(): "light" | "dark";

export function useLocaleContext(): {
    direction: "ltr" | "rtl";
    locale: string | null;
};

export function useWindowDimensions(): {
    fontScale: number;
    height: number;
    scale: number;
    width: number;
};

export {};

declare module "react-native" {
    interface AccessibilityProps {
        "aria-activedescendant"?: idRef;
        "aria-atomic"?: boolean;
        "aria-autocomplete"?: "none" | "list" | "inline" | "both";
        "aria-busy"?: boolean;
        "aria-checked"?: boolean | "mixed";
        "aria-colcount"?: number;
        "aria-colindex"?: number;
        "aria-colspan"?: number;
        "aria-controls"?: idRef;
        "aria-current"?: boolean | "page" | "step" | "location" | "date" | "time";
        "aria-describedby"?: idRef;
        "aria-details"?: idRef;
        "aria-disabled"?: boolean;
        "aria-errormessage"?: idRef;
        "aria-expanded"?: boolean;
        "aria-flowto"?: idRef;
        "aria-haspopup"?: "dialog" | "grid" | "listbox" | "menu" | "tree" | false;
        "aria-hidden"?: boolean;
        "aria-invalid"?: boolean;
        "aria-keyshortcuts"?: string;
        "aria-label"?: string;
        "aria-labelledby"?: idRef;
        "aria-level"?: number;
        "aria-live"?: "assertive" | "off" | "polite";
        "aria-modal"?: boolean;
        "aria-multiline"?: boolean;
        "aria-multiselectable"?: boolean;
        "aria-orientation"?: "horizontal" | "vertical";
        "aria-owns"?: idRef;
        "aria-placeholder"?: string;
        "aria-posinset"?: number;
        "aria-pressed"?: boolean | "mixed";
        "aria-readonly"?: boolean;
        "aria-required"?: boolean;
        "aria-roledescription"?: string;
        "aria-rowcount"?: number;
        "aria-rowindex"?: number;
        "aria-rowspan"?: number;
        "aria-selected"?: boolean;
        "aria-setsize"?: number;
        "aria-sort"?: "ascending" | "descending" | "none" | "other";
        "aria-valuemax"?: number;
        "aria-valuemin"?: number;
        "aria-valuenow"?: number;
        "aria-valuetext"?: string;

        // @deprecated
        accessibilityActiveDescendant?: idRef;
        accessibilityAtomic?: boolean;
        accessibilityAutoComplete?: "none" | "list" | "inline" | "both";
        accessibilityBusy?: boolean;
        accessibilityChecked?: boolean | "mixed";
        accessibilityColumnCount?: number;
        accessibilityColumnIndex?: number;
        accessibilityColumnSpan?: number;
        accessibilityControls?: idRefList;
        accessibilityCurrent?: boolean | "page" | "step" | "location" | "date" | "time";
        accessibilityDescribedBy?: idRefList;
        accessibilityDetails?: idRef;
        accessibilityDisabled?: boolean;
        accessibilityErrorMessage?: idRef;
        accessibilityExpanded?: boolean;
        accessibilityFlowTo?: idRefList;
        accessibilityHasPopup?: "dialog" | "grid" | "listbox" | "menu" | "tree" | false;
        accessibilityHidden?: boolean;
        accessibilityInvalid?: boolean;
        accessibilityKeyShortcuts?: string[];
        accessibilityLabel?: string;
        accessibilityLabelledBy?: idRef;
        accessibilityLevel?: number;
        accessibilityLiveRegion?: "assertive" | "none" | "polite";
        accessibilityModal?: boolean;
        accessibilityMultiline?: boolean;
        accessibilityMultiSelectable?: boolean;
        accessibilityOrientation?: "horizontal" | "vertical";
        accessibilityOwns?: idRefList;
        accessibilityPlaceholder?: string;
        accessibilityPosInSet?: number;
        accessibilityPressed?: boolean | "mixed";
        accessibilityReadOnly?: boolean;
        accessibilityRequired?: boolean;
        accessibilityRoleDescription?: string;
        accessibilityRowCount?: number;
        accessibilityRowIndex?: number;
        accessibilityRowSpan?: number;
        accessibilitySelected?: boolean;
        accessibilitySetSize?: number;
        accessibilitySort?: "ascending" | "descending" | "none" | "other";
        accessibilityValueMax?: number;
        accessibilityValueMin?: number;
        accessibilityValueNow?: number;
        accessibilityValueText?: string;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ViewProps extends WebViewProps {}

    /**
     * Text
     * Extracted from react-native-web, packages/react-native-web/src/exports/Text/types.js
     */
    interface WebTextProps extends WebSharedProps {
        dir?: "auto" | "ltr" | "rtl";
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface TextProps extends WebTextProps {}

    /**
     * TextInput
     * Extracted from react-native-web, packages/react-native-web/src/exports/TextInput/types.js
     */
    interface WebTextInputProps extends WebSharedProps {
        dir?: "auto" | "ltr" | "rtl";
        disabled?: boolean;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface TextInputProps extends WebTextInputProps {}

    /**
     * Image
     * Extracted from react-native-web, packages/react-native-web/src/exports/Image/types.js
     */
    interface WebImageProps extends WebSharedProps {
        dir?: "ltr" | "rtl";
        draggable?: boolean;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ImageProps extends WebImageProps {}

    /**
     * ScrollView
     * Extracted from react-native-web, packages/react-native-web/src/exports/ScrollView/ScrollViewBase.js
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface WebScrollViewProps extends WebSharedProps {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ScrollViewProps extends WebScrollViewProps {}

    /**
     * Pressable
     */
    // https://necolas.github.io/react-native-web/docs/pressable/#interactionstate
    // Extracted from react-native-web, packages/react-native-web/src/exports/Pressable/index.js
    interface WebPressableStateCallbackType {
        readonly focused: boolean;
        readonly hovered: boolean;
        readonly pressed: boolean;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface PressableStateCallbackType extends WebPressableStateCallbackType {}

    // Extracted from react-native-web, packages/react-native-web/src/exports/Pressable/index.js
    interface WebPressableProps extends WebSharedProps {
        /** Duration (in milliseconds) from `onPressStart` is called after pointerdown. */
        delayPressIn?: number;
        /** Duration (in milliseconds) from `onPressEnd` is called after pointerup. */
        delayPressOut?: number;
        /** Called when a touch is moving, after `onPressIn`. */
        onPressMove?: (event: GestureResponderEvent) => void;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface PressableProps extends WebPressableProps {}

    interface ViewStyle extends WebStyle {
        // In order to overwrite properties from RN, we need to redefine them inside ViewStyle.
        zIndex?: CSSProperties["zIndex"] | undefined;
        overflow?: CSSProperties["overflow"] | undefined;
        display?: CSSProperties["display"] | undefined;
        position?: CSSProperties["position"] | undefined;
        top?: CSSProperties["top"] | DimensionValue | undefined;
        right?: CSSProperties["right"] | DimensionValue | undefined;
        bottom?: CSSProperties["bottom"] | DimensionValue | undefined;
        left?: CSSProperties["left"] | DimensionValue | undefined;
        height?: CSSProperties["height"] | DimensionValue | undefined;
        width?: CSSProperties["width"] | DimensionValue | undefined;
        maxHeight?: CSSProperties["maxHeight"] | DimensionValue | undefined;
        maxWidth?: CSSProperties["maxWidth"] | DimensionValue | undefined;
        minHeight?: CSSProperties["minHeight"] | DimensionValue | undefined;
        minWidth?: CSSProperties["minWidth"] | DimensionValue | undefined;
        margin?: CSSProperties["margin"] | DimensionValue | undefined;
        marginTop?: CSSProperties["marginTop"] | DimensionValue | undefined;
        marginRight?: CSSProperties["marginRight"] | DimensionValue | undefined;
        marginBottom?: CSSProperties["marginBottom"] | DimensionValue | undefined;
        marginLeft?: CSSProperties["marginLeft"] | DimensionValue | undefined;
        padding?: CSSProperties["padding"] | DimensionValue | undefined;
        paddingTop?: CSSProperties["paddingTop"] | DimensionValue | undefined;
        paddingRight?: CSSProperties["paddingRight"] | DimensionValue | undefined;
        paddingBottom?: CSSProperties["paddingBottom"] | DimensionValue | undefined;
        paddingLeft?: CSSProperties["paddingLeft"] | DimensionValue | undefined;
    }

    interface TextStyle extends WebStyle {
        // In order to overwrite properties from RN, we need to redefine them inside TextStyle.
        zIndex?: CSSProperties["zIndex"] | undefined;
        overflow?: CSSProperties["overflow"] | undefined;
        display?: CSSProperties["display"] | undefined;
        position?: CSSProperties["position"] | undefined;
        top?: CSSProperties["top"] | DimensionValue | undefined;
        right?: CSSProperties["right"] | DimensionValue | undefined;
        bottom?: CSSProperties["bottom"] | DimensionValue | undefined;
        left?: CSSProperties["left"] | DimensionValue | undefined;
        height?: CSSProperties["height"] | DimensionValue | undefined;
        width?: CSSProperties["width"] | DimensionValue | undefined;
        maxHeight?: CSSProperties["maxHeight"] | DimensionValue | undefined;
        maxWidth?: CSSProperties["maxWidth"] | DimensionValue | undefined;
        minHeight?: CSSProperties["minHeight"] | DimensionValue | undefined;
        minWidth?: CSSProperties["minWidth"] | DimensionValue | undefined;
        margin?: CSSProperties["margin"] | DimensionValue | undefined;
        marginTop?: CSSProperties["marginTop"] | DimensionValue | undefined;
        marginRight?: CSSProperties["marginRight"] | DimensionValue | undefined;
        marginBottom?: CSSProperties["marginBottom"] | DimensionValue | undefined;
        marginLeft?: CSSProperties["marginLeft"] | DimensionValue | undefined;
        padding?: CSSProperties["padding"] | DimensionValue | undefined;
        paddingTop?: CSSProperties["paddingTop"] | DimensionValue | undefined;
        paddingRight?: CSSProperties["paddingRight"] | DimensionValue | undefined;
        paddingBottom?: CSSProperties["paddingBottom"] | DimensionValue | undefined;
        paddingLeft?: CSSProperties["paddingLeft"] | DimensionValue | undefined;
    }

    interface ImageStyle extends WebStyle {
        // In order to overwrite properties from RN, we need to redefine them inside ImageStyle.
        zIndex?: CSSProperties["zIndex"] | undefined;
        display?: CSSProperties["display"] | undefined;
        position?: CSSProperties["position"] | undefined;
        top?: CSSProperties["top"] | DimensionValue | undefined;
        right?: CSSProperties["right"] | DimensionValue | undefined;
        bottom?: CSSProperties["bottom"] | DimensionValue | undefined;
        left?: CSSProperties["left"] | DimensionValue | undefined;
        height?: CSSProperties["height"] | DimensionValue | undefined;
        width?: CSSProperties["width"] | DimensionValue | undefined;
        maxHeight?: CSSProperties["maxHeight"] | DimensionValue | undefined;
        maxWidth?: CSSProperties["maxWidth"] | DimensionValue | undefined;
        minHeight?: CSSProperties["minHeight"] | DimensionValue | undefined;
        minWidth?: CSSProperties["minWidth"] | DimensionValue | undefined;
        margin?: CSSProperties["margin"] | DimensionValue | undefined;
        marginTop?: CSSProperties["marginTop"] | DimensionValue | undefined;
        marginRight?: CSSProperties["marginRight"] | DimensionValue | undefined;
        marginBottom?: CSSProperties["marginBottom"] | DimensionValue | undefined;
        marginLeft?: CSSProperties["marginLeft"] | DimensionValue | undefined;
        padding?: CSSProperties["padding"] | DimensionValue | undefined;
        paddingTop?: CSSProperties["paddingTop"] | DimensionValue | undefined;
        paddingRight?: CSSProperties["paddingRight"] | DimensionValue | undefined;
        paddingBottom?: CSSProperties["paddingBottom"] | DimensionValue | undefined;
        paddingLeft?: CSSProperties["paddingLeft"] | DimensionValue | undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface UIManagerStatic extends UIManager {}
}
