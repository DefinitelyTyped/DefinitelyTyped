// Type definitions for react-native 0.51
// Project: https://github.com/facebook/react-native
// Definitions by: Eloy Durán <https://github.com/alloy>
//                 HuHuanming <https://github.com/huhuanming>
//                 Kyle Roach <https://github.com/iRoachie>
//                 Tim Wang <https://github.com/timwangdev>
//                 Kamal Mahyuddin <https://github.com/kamal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// USING: these definitions are meant to be used with the TSC compiler target set to at least ES2015.
//
// USAGE EXAMPLES: check the RNTSExplorer project at https://github.com/bgrieder/RNTSExplorer
//
// CONTRIBUTING: please open pull requests
//
// CREDITS: This work is based on an original work made by Bernd Paradies: https://github.com/bparadie
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// <reference types="react" />

/// <reference path="globals.d.ts" />

export type MeasureOnSuccessCallback = (
    x: number,
    y: number,
    width: number,
    height: number,
    pageX: number,
    pageY: number
) => void;

export type MeasureInWindowOnSuccessCallback = (x: number, y: number, width: number, height: number) => void;

export type MeasureLayoutOnSuccessCallback = (left: number, top: number, width: number, height: number) => void;

/**
 * EventSubscription represents a subscription to a particular event. It can
 * remove its own subscription.
 */
interface EventSubscription {
    eventType: string;
    key: number;
    subscriber: EventSubscriptionVendor;

    /**
     * @param subscriber the subscriber that controls
     *   this subscription.
     */
    new (subscriber: EventSubscriptionVendor): EventSubscription;

    /**
     * Removes this subscription from the subscriber that controls it.
     */
    remove(): void;
}

/**
 * EventSubscriptionVendor stores a set of EventSubscriptions that are
 * subscribed to a particular event type.
 */
interface EventSubscriptionVendor {
    constructor(): EventSubscriptionVendor;

    /**
     * Adds a subscription keyed by an event type.
     *
     */
    addSubscription(eventType: string, subscription: EventSubscription): EventSubscription;

    /**
     * Removes a bulk set of the subscriptions.
     *
     * @param eventType - Optional name of the event type whose
     *   registered supscriptions to remove, if null remove all subscriptions.
     */
    removeAllSubscriptions(eventType?: string): void;

    /**
     * Removes a specific subscription. Instead of calling this function, call
     * `subscription.remove()` directly.
     *
     */
    removeSubscription(subscription: any): void;

    /**
     * Returns the array of subscriptions that are currently registered for the
     * given event type.
     *
     * Note: This array can be potentially sparse as subscriptions are deleted
     * from it when they are removed.
     *
     */
    getSubscriptionsForType(eventType: string): EventSubscription[];
}

/**
 * EmitterSubscription represents a subscription with listener and context data.
 */
interface EmitterSubscription extends EventSubscription {
    emitter: EventEmitter;
    listener: () => any;
    context: any;

    /**
     * @param emitter - The event emitter that registered this
     *   subscription
     * @param subscriber - The subscriber that controls
     *   this subscription
     * @param listener - Function to invoke when the specified event is
     *   emitted
     * @param context - Optional context object to use when invoking the
     *   listener
     */
    new (
        emitter: EventEmitter,
        subscriber: EventSubscriptionVendor,
        listener: () => any,
        context: any
    ): EmitterSubscription;

    /**
     * Removes this subscription from the emitter that registered it.
     * Note: we're overriding the `remove()` method of EventSubscription here
     * but deliberately not calling `super.remove()` as the responsibility
     * for removing the subscription lies with the EventEmitter.
     */
    remove(): void;
}

interface EventEmitterListener {
    /**
     * Adds a listener to be invoked when events of the specified type are
     * emitted. An optional calling context may be provided. The data arguments
     * emitted will be passed to the listener function.
     *
     * @param eventType - Name of the event to listen to
     * @param listener - Function to invoke when the specified event is
     *   emitted
     * @param context - Optional context object to use when invoking the
     *   listener
     */
    addListener(eventType: string, listener: (...args: any[]) => any, context?: any): EmitterSubscription;
}

interface EventEmitter extends EventEmitterListener {
    /**
     *
     * @param subscriber - Optional subscriber instance
     *   to use. If omitted, a new subscriber will be created for the emitter.
     */
    new (subscriber?: EventSubscriptionVendor): EventEmitter;

    /**
     * Similar to addListener, except that the listener is removed after it is
     * invoked once.
     *
     * @param eventType - Name of the event to listen to
     * @param listener - Function to invoke only once when the
     *   specified event is emitted
     * @param context - Optional context object to use when invoking the
     *   listener
     */
    once(eventType: string, listener: (...args: any[]) => any, context: any): EmitterSubscription;

    /**
     * Removes all of the registered listeners, including those registered as
     * listener maps.
     *
     * @param eventType - Optional name of the event whose registered
     *   listeners to remove
     */
    removeAllListeners(eventType?: string): void;

    /**
     * Provides an API that can be called during an eventing cycle to remove the
     * last listener that was invoked. This allows a developer to provide an event
     * object that can remove the listener (or listener map) during the
     * invocation.
     *
     * If it is called when not inside of an emitting cycle it will throw.
     *
     * @throws {Error} When called not during an eventing cycle
     *
     * @example
     *   var subscription = emitter.addListenerMap({
     *     someEvent: function(data, event) {
     *       console.log(data);
     *       emitter.removeCurrentListener();
     *     }
     *   });
     *
     *   emitter.emit('someEvent', 'abc'); // logs 'abc'
     *   emitter.emit('someEvent', 'def'); // does not log anything
     */
    removeCurrentListener(): void;

    /**
     * Removes a specific subscription. Called by the `remove()` method of the
     * subscription itself to ensure any necessary cleanup is performed.
     */
    removeSubscription(subscription: EmitterSubscription): void;

    /**
     * Returns an array of listeners that are currently registered for the given
     * event.
     *
     * @param eventType - Name of the event to query
     */
    listeners(eventType: string): EmitterSubscription[];

    /**
     * Emits an event of the given type with the given data. All handlers of that
     * particular type will be notified.
     *
     * @param eventType - Name of the event to emit
     * @param Arbitrary arguments to be passed to each registered listener
     *
     * @example
     *   emitter.addListener('someEvent', function(message) {
     *     console.log(message);
     *   });
     *
     *   emitter.emit('someEvent', 'abc'); // logs 'abc'
     */
    emit(eventType: string, ...params: any[]): void;

    /**
     * Removes the given listener for event of specific type.
     *
     * @param eventType - Name of the event to emit
     * @param listener - Function to invoke when the specified event is
     *   emitted
     *
     * @example
     *   emitter.removeListener('someEvent', function(message) {
     *     console.log(message);
     *   }); // removes the listener if already registered
     *
     */
    removeListener(eventType: string, listener: (...args: any[]) => any): void;
}

/** NativeMethodsMixin provides methods to access the underlying native component directly.
 * This can be useful in cases when you want to focus a view or measure its on-screen dimensions,
 * for example.
 * The methods described here are available on most of the default components provided by React Native.
 * Note, however, that they are not available on composite components that aren't directly backed by a
 * native view. This will generally include most components that you define in your own app.
 * For more information, see [Direct Manipulation](http://facebook.github.io/react-native/docs/direct-manipulation.html).
 * @see https://github.com/facebook/react-native/blob/master/Libraries/ReactIOS/NativeMethodsMixin.js
 */
export interface NativeMethodsMixinStatic {
    /**
     * Determines the location on screen, width, and height of the given view and
     * returns the values via an async callback. If successful, the callback will
     * be called with the following arguments:
     *
     *  - x
     *  - y
     *  - width
     *  - height
     *  - pageX
     *  - pageY
     *
     * Note that these measurements are not available until after the rendering
     * has been completed in native. If you need the measurements as soon as
     * possible, consider using the [`onLayout`
     * prop](docs/view.html#onlayout) instead.
     */
    measure(callback: MeasureOnSuccessCallback): void;

    /**
     * Determines the location of the given view in the window and returns the
     * values via an async callback. If the React root view is embedded in
     * another native view, this will give you the absolute coordinates. If
     * successful, the callback will be called with the following
     * arguments:
     *
     *  - x
     *  - y
     *  - width
     *  - height
     *
     * Note that these measurements are not available until after the rendering
     * has been completed in native.
     */
    measureInWindow(callback: MeasureInWindowOnSuccessCallback): void;

    /**
     * Like [`measure()`](#measure), but measures the view relative an ancestor,
     * specified as `relativeToNativeNode`. This means that the returned x, y
     * are relative to the origin x, y of the ancestor view.
     *
     * As always, to obtain a native node handle for a component, you can use
     * `React.findNodeHandle(component)`.
     */
    measureLayout(
        relativeToNativeNode: number,
        onSuccess: MeasureLayoutOnSuccessCallback,
        onFail: () => void /* currently unused */
    ): void;

    /**
     * This function sends props straight to native. They will not participate in
     * future diff process - this means that if you do not include them in the
     * next render, they will remain active (see [Direct
     * Manipulation](docs/direct-manipulation.html)).
     */
    setNativeProps(nativeProps: Object): void;

    /**
     * Requests focus for the given input or view. The exact behavior triggered
     * will depend on the platform and type of view.
     */
    focus(): void;

    /**
     * Removes focus from an input or view. This is the opposite of `focus()`.
     */
    blur(): void;

    refs: {
        [key: string]: React.Component<any, any>;
    };
}

// see react-jsx.d.ts
export function createElement<P>(
    type: React.ReactType,
    props?: P,
    ...children: React.ReactNode[]
): React.ReactElement<P>;

export type Runnable = (appParameters: any) => void;

type NodeHandle = number;

// Similar to React.SyntheticEvent except for nativeEvent
interface NativeSyntheticEvent<T> {
    bubbles: boolean;
    cancelable: boolean;
    currentTarget: NodeHandle;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    nativeEvent: T;
    preventDefault(): void;
    stopPropagation(): void;
    target: NodeHandle;
    timeStamp: number;
    type: string;
}

export interface NativeTouchEvent {
    /**
     * Array of all touch events that have changed since the last event
     */
    changedTouches: NativeTouchEvent[];

    /**
     * The ID of the touch
     */
    identifier: string;

    /**
     * The X position of the touch, relative to the element
     */
    locationX: number;

    /**
     * The Y position of the touch, relative to the element
     */
    locationY: number;

    /**
     * The X position of the touch, relative to the screen
     */
    pageX: number;

    /**
     * The Y position of the touch, relative to the screen
     */
    pageY: number;

    /**
     * The node id of the element receiving the touch event
     */
    target: string;

    /**
     * A time identifier for the touch, useful for velocity calculation
     */
    timestamp: number;

    /**
     * Array of all current touches on the screen
     */
    touches: NativeTouchEvent[];
}

export interface GestureResponderEvent extends NativeSyntheticEvent<NativeTouchEvent> {}

export interface PointProperties {
    x: number;
    y: number;
}

export interface Insets {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
}

/**
 * //FIXME: need to find documentation on which component is a TTouchable and can implement that interface
 * @see React.DOMAtributes
 */
export interface Touchable {
    onTouchStart?: (event: GestureResponderEvent) => void;
    onTouchMove?: (event: GestureResponderEvent) => void;
    onTouchEnd?: (event: GestureResponderEvent) => void;
    onTouchCancel?: (event: GestureResponderEvent) => void;
    onTouchEndCapture?: (event: GestureResponderEvent) => void;
}

export type ComponentProvider = () => React.ComponentType<any>;

export type AppConfig = {
    appKey: string;
    component?: ComponentProvider;
    run?: Runnable;
};

// https://github.com/facebook/react-native/blob/master/Libraries/AppRegistry/AppRegistry.js
/**
 * `AppRegistry` is the JS entry point to running all React Native apps.  App
 * root components should register themselves with
 * `AppRegistry.registerComponent`, then the native system can load the bundle
 * for the app and then actually run the app when it's ready by invoking
 * `AppRegistry.runApplication`.
 *
 * To "stop" an application when a view should be destroyed, call
 * `AppRegistry.unmountApplicationComponentAtRootTag` with the tag that was
 * pass into `runApplication`. These should always be used as a pair.
 *
 * `AppRegistry` should be `require`d early in the `require` sequence to make
 * sure the JS execution environment is setup before other modules are
 * `require`d.
 */
export namespace AppRegistry {
    function registerConfig(config: AppConfig[]): void;

    function registerComponent(appKey: string, getComponentFunc: ComponentProvider): string;

    function registerRunnable(appKey: string, func: Runnable): string;

    function getAppKeys(): string[];

    function unmountApplicationComponentAtRootTag(rootTag: number): void;

    function runApplication(appKey: string, appParameters: any): void;
}

export interface LayoutAnimationTypes {
    spring: string;
    linear: string;
    easeInEaseOut: string;
    easeIn: string;
    easeOut: string;
}

export interface LayoutAnimationProperties {
    opacity: string;
    scaleXY: string;
}

export interface LayoutAnimationAnim {
    duration?: number;
    delay?: number;
    springDamping?: number;
    initialVelocity?: number;
    type?: string; //LayoutAnimationTypes
    property?: string; //LayoutAnimationProperties
}

export interface LayoutAnimationConfig {
    duration: number;
    create?: LayoutAnimationAnim;
    update?: LayoutAnimationAnim;
    delete?: LayoutAnimationAnim;
}

/** Automatically animates views to their new positions when the next layout happens.
 * A common way to use this API is to call LayoutAnimation.configureNext before
 * calling setState. */
export interface LayoutAnimationStatic {
    /** Schedules an animation to happen on the next layout.
     * @param config Specifies animation properties:
     * `duration` in milliseconds
     * `create`, config for animating in new views (see Anim type)
     * `update`, config for animating views that have been updated (see Anim type)
     * @param onAnimationDidEnd Called when the animation finished. Only supported on iOS.
     */
    configureNext: (config: LayoutAnimationConfig, onAnimationDidEnd?: () => void) => void;
    /** Helper for creating a config for configureNext. */
    create: (duration: number, type?: string, creationProp?: string) => LayoutAnimationConfig;
    Types: LayoutAnimationTypes;
    Properties: LayoutAnimationProperties;
    configChecker: (shapeTypes: { [key: string]: any }) => any;
    Presets: {
        easeInEaseOut: LayoutAnimationConfig;
        linear: LayoutAnimationConfig;
        spring: LayoutAnimationConfig;
    };
    easeInEaseOut: (onAnimationDidEnd?: () => void) => void;
    linear: (onAnimationDidEnd?: () => void) => void;
    spring: (onAnimationDidEnd?: () => void) => void;
}

type FlexAlignType = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";

/**
 * Flex Prop Types
 * @see https://facebook.github.io/react-native/docs/flexbox.html#proptypes
 * @see LayoutPropTypes.js
 */
export interface FlexStyle {
    alignContent?: "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around";
    alignItems?: FlexAlignType;
    alignSelf?: "auto" | FlexAlignType;
    aspectRatio?: number;
    borderBottomWidth?: number;
    borderLeftWidth?: number;
    borderRightWidth?: number;
    borderTopWidth?: number;
    borderWidth?: number;
    bottom?: number | string;
    flex?: number;
    flexBasis?: number | string;
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
    flexGrow?: number;
    flexShrink?: number;
    flexWrap?: "wrap" | "nowrap";
    height?: number | string;
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
    left?: number | string;
    margin?: number | string;
    marginBottom?: number | string;
    marginHorizontal?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    marginTop?: number | string;
    marginVertical?: number | string;
    maxHeight?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    minWidth?: number | string;
    overflow?: "visible" | "hidden" | "scroll";
    padding?: number | string;
    paddingBottom?: number | string;
    paddingHorizontal?: number | string;
    paddingLeft?: number | string;
    paddingRight?: number | string;
    paddingTop?: number | string;
    paddingVertical?: number | string;
    position?: "absolute" | "relative";
    right?: number | string;
    top?: number | string;
    width?: number | string;
    zIndex?: number;

    /**
     * @platform ios
     */
    direction?: "inherit" | "ltr" | "rtl";
}

/**
 * @see ShadowPropTypesIOS.js
 */
export interface ShadowPropTypesIOSStatic {
    /**
     * Sets the drop shadow color
     * @platform ios
     */
    shadowColor: string;

    /**
     * Sets the drop shadow offset
     * @platform ios
     */
    shadowOffset: { width: number; height: number };

    /**
     * Sets the drop shadow opacity (multiplied by the color's alpha component)
     * @platform ios
     */
    shadowOpacity: number;

    /**
     * Sets the drop shadow blur radius
     * @platform ios
     */
    shadowRadius: number;
}

type GeoConfiguration = {
    skipPermissionRequests: boolean;
};

type GeoOptions = {
    timeout?: number;
    maximumAge?: number;
    enableHighAccuracy?: boolean;
    distanceFilter?: number;
    useSignificantChanges?: boolean;
};

type GeolocationReturnType = {
    coords: {
        latitude: number;
        longitude: number;
        altitude: number | null;
        accuracy: number;
        altitudeAccuracy: number | null;
        heading: number | null;
        speed: number | null;
    };
    timestamp: number;
};

type GeolocationError = {
    code: number;
    message: string;
    PERMISSION_DENIED: number;
    POSITION_UNAVAILABLE: number;
    TIMEOUT: number;
};

interface PerpectiveTransform {
    perspective: number;
}

interface RotateTransform {
    rotate: string;
}

interface RotateXTransform {
    rotateX: string;
}

interface RotateYTransform {
    rotateY: string;
}

interface RotateZTransform {
    rotateZ: string;
}

interface ScaleTransform {
    scale: number;
}

interface ScaleXTransform {
    scaleX: number;
}

interface ScaleYTransform {
    scaleY: number;
}

interface TranslateXTransform {
    translateX: number;
}

interface TranslateYTransform {
    translateY: number;
}

interface SkewXTransform {
    skewX: string;
}

interface SkewYTransform {
    skewY: string;
}

export interface TransformsStyle {
    transform?: (
        | PerpectiveTransform
        | RotateTransform
        | RotateXTransform
        | RotateYTransform
        | RotateZTransform
        | ScaleTransform
        | ScaleXTransform
        | ScaleYTransform
        | TranslateXTransform
        | TranslateYTransform
        | SkewXTransform
        | SkewYTransform)[];
    transformMatrix?: Array<number>;
    rotation?: number;
    scaleX?: number;
    scaleY?: number;
    translateX?: number;
    translateY?: number;
}

export interface StyleSheetProperties {
    hairlineWidth: number;
    flatten<T extends string>(style: T): T;
}

export interface LayoutRectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}

// @see TextProperties.onLayout
export interface LayoutChangeEvent {
    nativeEvent: {
        layout: LayoutRectangle;
    };
}

export interface TextStyleIOS extends ViewStyle {
    letterSpacing?: number;
    textDecorationColor?: string;
    textDecorationStyle?: "solid" | "double" | "dotted" | "dashed";
    writingDirection?: "auto" | "ltr" | "rtl";
}

export interface TextStyleAndroid extends ViewStyle {
    textAlignVertical?: "auto" | "top" | "bottom" | "center";
    includeFontPadding?: boolean;
}

// @see https://facebook.github.io/react-native/docs/text.html#style
export interface TextStyle extends TextStyleIOS, TextStyleAndroid, ViewStyle {
    color?: string;
    fontFamily?: string;
    fontSize?: number;
    fontStyle?: "normal" | "italic";
    /**
     * Specifies font weight. The values 'normal' and 'bold' are supported
     * for most fonts. Not all fonts have a variant for each of the numeric
     * values, in that case the closest one is chosen.
     */
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    letterSpacing?: number;
    lineHeight?: number;
    /**
     * Specifies text alignment.
     * The value 'justify' is only supported on iOS.
     */
    textAlign?: "auto" | "left" | "right" | "center";
    textDecorationLine?: "none" | "underline" | "line-through" | "underline line-through";
    textDecorationStyle?: "solid" | "double" | "dotted" | "dashed";
    textDecorationColor?: string;
    textShadowColor?: string;
    textShadowOffset?: { width: number; height: number };
    textShadowRadius?: number;
    testID?: string;
}

export interface TextPropertiesIOS {
    /**
     * Specifies whether fonts should scale to respect Text Size accessibility setting on iOS. The
     * default is `true`.
     */
    allowFontScaling?: boolean;

    /**
     * Specifies whether font should be scaled down automatically to fit given style constraints.
     */
    adjustsFontSizeToFit?: boolean;

    /**
     * Specifies smallest possible scale a font can reach when adjustsFontSizeToFit is enabled. (values 0.01-1.0).
     */
    minimumFontScale?: number;

    /**
     * When `true`, no visual change is made when text is pressed down. By
     * default, a gray oval highlights the text on press down.
     */
    suppressHighlighting?: boolean;
}

export interface TextPropertiesAndroid {
    /**
     * Lets the user select text, to use the native copy and paste functionality.
     */
    selectable?: boolean;

    /**
     * The highlight color of the text.
     */
    selectionColor?: string;

    /**
     * Set text break strategy on Android API Level 23+
     * default is `highQuality`.
     */
    textBreakStrategy?: "simple" | "highQuality" | "balanced";
}

// https://facebook.github.io/react-native/docs/text.html#props
export interface TextProperties extends TextPropertiesIOS, TextPropertiesAndroid, AccessibilityProperties {
    /**
     * This can be one of the following values:
     *
     * - `head` - The line is displayed so that the end fits in the container and the missing text
     * at the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"
     * - `middle` - The line is displayed so that the beginning and end fit in the container and the
     * missing text in the middle is indicated by an ellipsis glyph. "ab...yz"
     * - `tail` - The line is displayed so that the beginning fits in the container and the
     * missing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."
     * - `clip` - Lines are not drawn past the edge of the text container.
     *
     * The default is `tail`.
     *
     * `numberOfLines` must be set in conjunction with this prop.
     *
     * > `clip` is working only for iOS
     */
    ellipsizeMode?: "head" | "middle" | "tail" | "clip";

    /**
     * Line Break mode. Works only with numberOfLines.
     * clip is working only for iOS
     */
    lineBreakMode?: "head" | "middle" | "tail" | "clip";

    /**
     * Used to truncate the text with an ellipsis after computing the text
     * layout, including line wrapping, such that the total number of lines
     * does not exceed this number.
     *
     * This prop is commonly used with `ellipsizeMode`.
     */
    numberOfLines?: number;

    /**
     * Invoked on mount and layout changes with
     *
     * {nativeEvent: { layout: {x, y, width, height}}}.
     */
    onLayout?: (event: LayoutChangeEvent) => void;

    /**
     * This function is called on press.
     * Text intrinsically supports press handling with a default highlight state (which can be disabled with suppressHighlighting).
     */
    onPress?: (event: GestureResponderEvent) => void;

    /**
     * This function is called on long press.
     * e.g., `onLongPress={this.increaseSize}>``
     */
    onLongPress?: (event: GestureResponderEvent) => void;

    /**
     * @see https://facebook.github.io/react-native/docs/text.html#style
     */
    style?: StyleProp<TextStyle>;

    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string;
}

/**
 * A React component for displaying text which supports nesting, styling, and touch handling.
 */
export interface TextStatic extends NativeMethodsMixin, React.ClassicComponentClass<TextProperties> {}

type DataDetectorTypes = "phoneNumber" | "link" | "address" | "calendarEvent" | "none" | "all";

/**
 * DocumentSelectionState is responsible for maintaining selection information
 * for a document.
 *
 * It is intended for use by AbstractTextEditor-based components for
 * identifying the appropriate start/end positions to modify the
 * DocumentContent, and for programatically setting browser selection when
 * components re-render.
 */
export interface DocumentSelectionState extends EventEmitter {
    new (anchor: number, focus: number): DocumentSelectionState;

    /**
     * Apply an update to the state. If either offset value has changed,
     * set the values and emit the `change` event. Otherwise no-op.
     *
     */
    update(anchor: number, focus: number): void;

    /**
     * Given a max text length, constrain our selection offsets to ensure
     * that the selection remains strictly within the text range.
     *
     */
    constrainLength(maxLength: number): void;

    focus(): void;
    blur(): void;
    hasFocus(): boolean;
    isCollapsed(): boolean;
    isBackward(): boolean;

    getAnchorOffset(): number;
    getFocusOffset(): number;
    getStartOffset(): number;
    getEndOffset(): number;
    overlaps(start: number, end: number): boolean;
}

/**
 * IOS Specific properties for TextInput
 * @see https://facebook.github.io/react-native/docs/textinput.html#props
 */
export interface TextInputIOSProperties {
    /**
     * enum('never', 'while-editing', 'unless-editing', 'always')
     * When the clear button should appear on the right side of the text view
     */
    clearButtonMode?: "never" | "while-editing" | "unless-editing" | "always";

    /**
     * If true, clears the text field automatically when editing begins
     */
    clearTextOnFocus?: boolean;

    /**
     * Determines the types of data converted to clickable URLs in the text input.
     * Only valid if `multiline={true}` and `editable={false}`.
     * By default no data types are detected.
     *
     * You can provide one type or an array of many types.
     *
     * Possible values for `dataDetectorTypes` are:
     *
     * - `'phoneNumber'`
     * - `'link'`
     * - `'address'`
     * - `'calendarEvent'`
     * - `'none'`
     * - `'all'`
     */
    dataDetectorTypes?: DataDetectorTypes | DataDetectorTypes[];

    /**
     * If true, the keyboard disables the return key when there is no text and automatically enables it when there is text.
     * The default value is false.
     */
    enablesReturnKeyAutomatically?: boolean;

    /**
     * Determines the color of the keyboard.
     */
    keyboardAppearance?: "default" | "light" | "dark";

    /**
     * Callback that is called when a key is pressed.
     * Pressed key value is passed as an argument to the callback handler.
     * Fires before onChange callbacks.
     */
    onKeyPress?: (key: string) => void;

    /**
     * See DocumentSelectionState.js, some state that is responsible for maintaining selection information for a document
     */
    selectionState?: DocumentSelectionState;

    /**
     * If false, disables spell-check style (i.e. red underlines). The default value is inherited from autoCorrect
     */
    spellCheck?: boolean;
}

/**
 * Android Specific properties for TextInput
 * @see https://facebook.github.io/react-native/docs/textinput.html#props
 */
export interface TextInputAndroidProperties {
    /**
     * When false, if there is a small amount of space available around a text input (e.g. landscape orientation on a phone),
     *   the OS may choose to have the user edit the text inside of a full screen text input mode.
     * When true, this feature is disabled and users will always edit the text directly inside of the text input.
     * Defaults to false.
     */
    disableFullscreenUI?: boolean;

    /**
     * If defined, the provided image resource will be rendered on the left.
     */
    inlineImageLeft?: string;

    /**
     * Padding between the inline image, if any, and the text input itself.
     */
    inlineImagePadding?: number;

    /**
     * Sets the number of lines for a TextInput.
     * Use it with multiline set to true to be able to fill the lines.
     */
    numberOfLines?: number;

    /**
     * Sets the return key to the label. Use it instead of `returnKeyType`.
     * @platform android
     */
    returnKeyLabel?: string;

    /**
     * Set text break strategy on Android API Level 23+, possible values are simple, highQuality, balanced
     * The default value is simple.
     */
    textBreakStrategy?: "simple" | "highQuality" | "balanced";

    /**
     * The color of the textInput underline.
     */
    underlineColorAndroid?: string;
}

export type KeyboardType = "default" | "email-address" | "numeric" | "phone-pad";
export type KeyboardTypeIOS =
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "number-pad"
    | "name-phone-pad"
    | "decimal-pad"
    | "twitter"
    | "web-search";

export type ReturnKeyType = "done" | "go" | "next" | "search" | "send";
export type ReturnKeyTypeAndroid = "none" | "previous";
export type ReturnKeyTypeIOS = "default" | "google" | "join" | "route" | "yahoo" | "emergency-call";

/**
 * @see https://facebook.github.io/react-native/docs/textinput.html#props
 */
export interface TextInputProperties
    extends ViewProperties, TextInputIOSProperties, TextInputAndroidProperties, AccessibilityProperties {
    /**
     * Can tell TextInput to automatically capitalize certain characters.
     *      characters: all characters,
     *      words: first letter of each word
     *      sentences: first letter of each sentence (default)
     *      none: don't auto capitalize anything
     *
     * https://facebook.github.io/react-native/docs/textinput.html#autocapitalize
     */
    autoCapitalize?: "none" | "sentences" | "words" | "characters";

    /**
     * If false, disables auto-correct.
     * The default value is true.
     */
    autoCorrect?: boolean;

    /**
     * If true, focuses the input on componentDidMount.
     * The default value is false.
     */
    autoFocus?: boolean;

    /**
     * If true, the text field will blur when submitted.
     * The default value is true.
     */
    blurOnSubmit?: boolean;

    /**
     * Provides an initial value that will change when the user starts typing.
     * Useful for simple use-cases where you don't want to deal with listening to events
     * and updating the value prop to keep the controlled state in sync.
     */
    defaultValue?: string;

    /**
     * If false, text is not editable. The default value is true.
     */
    editable?: boolean;

    /**
     * enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search')
     * Determines which keyboard to open, e.g.numeric.
     * The following values work across platforms: - default - numeric - email-address - phone-pad
     */
    keyboardType?: KeyboardType | KeyboardTypeIOS;

    /**
     * Limits the maximum number of characters that can be entered.
     * Use this instead of implementing the logic in JS to avoid flicker.
     */
    maxLength?: number;

    /**
     * If true, the text input can be multiple lines. The default value is false.
     */
    multiline?: boolean;

    /**
     * Callback that is called when the text input is blurred
     */
    onBlur?: () => void;

    /**
     * Callback that is called when the text input's text changes.
     */
    onChange?: (
        event: {
            nativeEvent: {
                text: string;
                contentSize: { width: number; height: number };
                target: number;
                eventCount: number;
            };
        }
    ) => void;

    /**
     * Callback that is called when the text input's text changes.
     * Changed text is passed as an argument to the callback handler.
     */
    onChangeText?: (text: string) => void;

    /**
     * Callback that is called when the text input's content size changes.
     * This will be called with
     * `{ nativeEvent: { contentSize: { width, height } } }`.
     *
     * Only called for multiline text inputs.
     */
    onContentSizeChange?: (event: { nativeEvent: { contentSize: { width: number; height: number } } }) => void;

    /**
     * Callback that is called when text input ends.
     */
    onEndEditing?: (event: { nativeEvent: { text: string } }) => void;

    /**
     * Callback that is called when the text input is focused
     */
    onFocus?: () => void;

    /**
     * Callback that is called when the text input selection is changed.
     */
    onSelectionChange?: (event: { nativeEvent: { selection: { start: number; end: number }; target: number } }) => void;

    /**
     * Callback that is called when the text input's submit button is pressed.
     */
    onSubmitEditing?: (event: { nativeEvent: { text: string } }) => void;

    /**
     * The string that will be rendered before text input has been entered
     */
    placeholder?: string;

    /**
     * The text color of the placeholder string
     */
    placeholderTextColor?: string;

    /**
     * enum('default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call')
     * Determines how the return key should look.
     */
    returnKeyType?: ReturnKeyType | ReturnKeyTypeAndroid | ReturnKeyTypeIOS;

    /**
     * If true, the text input obscures the text entered so that sensitive text like passwords stay secure.
     * The default value is false.
     */
    secureTextEntry?: boolean;

    /**
     * If true, all text will automatically be selected on focus
     */
    selectTextOnFocus?: boolean;

    /**
     * The start and end of the text input's selection. Set start and end to
     * the same value to position the cursor.
     */
    selection?: { start: number; end?: number };

    /**
     * The highlight (and cursor on ios) color of the text input
     */
    selectionColor?: string;

    /**
     * Styles
     */
    style?: StyleProp<TextStyle>;

    /**
     * Used to locate this view in end-to-end tests
     */
    testID?: string;

    /**
     * The value to show for the text input. TextInput is a controlled component,
     * which means the native value will be forced to match this value prop if provided.
     * For most uses this works great, but in some cases this may cause flickering - one common cause is preventing edits by keeping value the same.
     * In addition to simply setting the same value, either set editable={false},
     * or set/update maxLength to prevent unwanted edits without flicker.
     */
    value?: string;
}

/**
 * This class is responsible for coordinating the "focused"
 * state for TextInputs. All calls relating to the keyboard
 * should be funneled through here
 */
interface TextInputState {
    /**
     * Returns the ID of the currently focused text field, if one exists
     * If no text field is focused it returns null
     */
    currentlyFocusedField(): number;

    /**
     * @param TextInputID id of the text field to focus
     * Focuses the specified text field
     * noop if the text field was already focused
     */
    focusTextInput(textFieldID?: number): void;

    /**
     * @param textFieldID id of the text field to focus
     * Unfocuses the specified text field
     * noop if it wasn't focused
     */
    blurTextInput(textFieldID?: number): void;
}

/**
 * @see https://facebook.github.io/react-native/docs/textinput.html#methods
 */
export interface TextInputStatic extends NativeMethodsMixin, TimerMixin, React.ComponentClass<TextInputProperties> {
    State: TextInputState;

    /**
     * Returns if the input is currently focused.
     */
    isFocused: () => boolean;

    /**
     * Removes all text from the input.
     */
    clear: () => void;
}

export type ToolbarAndroidAction = {
    /**
     *  title: required, the title of this action
     */
    title: string;

    /**
     * icon: the icon for this action, e.g. require('./some_icon.png')
     */
    icon?: ImageURISource;

    /**
     * show: when to show this action as an icon or hide it in the overflow menu: always, ifRoom or never
     */
    show?: "always" | "ifRoom" | "never";

    /**
     * showWithText: boolean, whether to show text alongside the icon or not
     */
    showWithText?: boolean;
};

export interface ToolbarAndroidProperties extends ViewProperties {
    /**
     * Sets possible actions on the toolbar as part of the action menu. These are displayed as icons
     * or text on the right side of the widget. If they don't fit they are placed in an 'overflow'
     * menu.
     *
     * This property takes an array of objects, where each object has the following keys:
     *
     * * `title`: **required**, the title of this action
     * * `icon`: the icon for this action, e.g. `require('./some_icon.png')`
     * * `show`: when to show this action as an icon or hide it in the overflow menu: `always`,
     * `ifRoom` or `never`
     * * `showWithText`: boolean, whether to show text alongside the icon or not
     */
    actions?: ToolbarAndroidAction[];

    /**
     * Sets the content inset for the toolbar ending edge.
     * The content inset affects the valid area for Toolbar content other
     * than the navigation button and menu. Insets define the minimum
     * margin for these components and can be used to effectively align
     * Toolbar content along well-known gridlines.
     */
    contentInsetEnd?: number;

    /**
     * Sets the content inset for the toolbar starting edge.
     * The content inset affects the valid area for Toolbar content
     * other than the navigation button and menu. Insets define the
     * minimum margin for these components and can be used to effectively
     * align Toolbar content along well-known gridlines.
     */
    contentInsetStart?: number;

    /**
     * Sets the toolbar logo.
     */
    logo?: ImageURISource;

    /**
     * Sets the navigation icon.
     */
    navIcon?: ImageURISource;

    /**
     * Callback that is called when an action is selected. The only
     * argument that is passed to the callback is the position of the
     * action in the actions array.
     */
    onActionSelected?: (position: number) => void;

    /**
     * Callback called when the icon is selected.
     */
    onIconClicked?: () => void;

    /**
     * Sets the overflow icon.
     */
    overflowIcon?: ImageURISource;

    /**
     * Used to set the toolbar direction to RTL.
     * In addition to this property you need to add
     * android:supportsRtl="true"
     * to your application AndroidManifest.xml and then call
     * setLayoutDirection(LayoutDirection.RTL) in your MainActivity
     * onCreate method.
     */
    rtl?: boolean;

    /**
     * Sets the toolbar subtitle.
     */
    subtitle?: string;

    /**
     * Sets the toolbar subtitle color.
     */
    subtitleColor?: string;

    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string;

    /**
     * Sets the toolbar title.
     */
    title?: string;

    /**
     * Sets the toolbar title color.
     */
    titleColor?: string;
}

/**
 * React component that wraps the Android-only [`Toolbar` widget][0]. A Toolbar can display a logo,
 * navigation icon (e.g. hamburger menu), a title & subtitle and a list of actions. The title and
 * subtitle are expanded so the logo and navigation icons are displayed on the left, title and
 * subtitle in the middle and the actions on the right.
 *
 * If the toolbar has an only child, it will be displayed between the title and actions.
 *
 * Although the Toolbar supports remote images for the logo, navigation and action icons, this
 * should only be used in DEV mode where `require('./some_icon.png')` translates into a packager
 * URL. In release mode you should always use a drawable resource for these icons. Using
 * `require('./some_icon.png')` will do this automatically for you, so as long as you don't
 * explicitly use e.g. `{uri: 'http://...'}`, you will be good.
 *
 * [0]: https://developer.android.com/reference/android/support/v7/widget/Toolbar.html
 */
export interface ToolbarAndroidStatic extends NativeMethodsMixin, React.ComponentClass<ToolbarAndroidProperties> {}

/**
 * Gesture recognition on mobile devices is much more complicated than web.
 * A touch can go through several phases as the app determines what the user's intention is.
 * For example, the app needs to determine if the touch is scrolling, sliding on a widget, or tapping.
 * This can even change during the duration of a touch. There can also be multiple simultaneous touches.
 *
 * The touch responder system is needed to allow components to negotiate these touch interactions
 * without any additional knowledge about their parent or child components.
 * This system is implemented in ResponderEventPlugin.js, which contains further details and documentation.
 *
 * Best Practices
 * Users can feel huge differences in the usability of web apps vs. native, and this is one of the big causes.
 * Every action should have the following attributes:
 *      Feedback/highlighting- show the user what is handling their touch, and what will happen when they release the gesture
 *      Cancel-ability- when making an action, the user should be able to abort it mid-touch by dragging their finger away
 *
 * These features make users more comfortable while using an app,
 * because it allows people to experiment and interact without fear of making mistakes.
 *
 * TouchableHighlight and Touchable*
 * The responder system can be complicated to use.
 * So we have provided an abstract Touchable implementation for things that should be "tappable".
 * This uses the responder system and allows you to easily configure tap interactions declaratively.
 * Use TouchableHighlight anywhere where you would use a button or link on web.
 */
export interface GestureResponderHandlers {
    /**
     * A view can become the touch responder by implementing the correct negotiation methods.
     * There are two methods to ask the view if it wants to become responder:
     */

    /**
     * Does this view want to become responder on the start of a touch?
     */
    onStartShouldSetResponder?: (event: GestureResponderEvent) => boolean;

    /**
     * Called for every touch move on the View when it is not the responder: does this view want to "claim" touch responsiveness?
     */
    onMoveShouldSetResponder?: (event: GestureResponderEvent) => boolean;

    /**
     * If the View returns true and attempts to become the responder, one of the following will happen:
     */

    onResponderEnd?: (event: GestureResponderEvent) => void;

    /**
     * The View is now responding for touch events.
     * This is the time to highlight and show the user what is happening
     */
    onResponderGrant?: (event: GestureResponderEvent) => void;

    /**
     * Something else is the responder right now and will not release it
     */
    onResponderReject?: (event: GestureResponderEvent) => void;

    /**
     * If the view is responding, the following handlers can be called:
     */

    /**
     * The user is moving their finger
     */
    onResponderMove?: (event: GestureResponderEvent) => void;

    /**
     * Fired at the end of the touch, ie "touchUp"
     */
    onResponderRelease?: (event: GestureResponderEvent) => void;

    onResponderStart?: (event: GestureResponderEvent) => void;

    /**
     *  Something else wants to become responder.
     *  Should this view release the responder? Returning true allows release
     */
    onResponderTerminationRequest?: (event: GestureResponderEvent) => boolean;

    /**
     * The responder has been taken from the View.
     * Might be taken by other views after a call to onResponderTerminationRequest,
     * or might be taken by the OS without asking (happens with control center/ notification center on iOS)
     */
    onResponderTerminate?: (event: GestureResponderEvent) => void;

    /**
     * onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern,
     * where the deepest node is called first.
     * That means that the deepest component will become responder when multiple Views return true for *ShouldSetResponder handlers.
     * This is desirable in most cases, because it makes sure all controls and buttons are usable.
     *
     * However, sometimes a parent will want to make sure that it becomes responder.
     * This can be handled by using the capture phase.
     * Before the responder system bubbles up from the deepest component,
     * it will do a capture phase, firing on*ShouldSetResponderCapture.
     * So if a parent View wants to prevent the child from becoming responder on a touch start,
     * it should have a onStartShouldSetResponderCapture handler which returns true.
     */
    onStartShouldSetResponderCapture?: (event: GestureResponderEvent) => boolean;

    /**
     * onStartShouldSetResponder and onMoveShouldSetResponder are called with a bubbling pattern,
     * where the deepest node is called first.
     * That means that the deepest component will become responder when multiple Views return true for *ShouldSetResponder handlers.
     * This is desirable in most cases, because it makes sure all controls and buttons are usable.
     *
     * However, sometimes a parent will want to make sure that it becomes responder.
     * This can be handled by using the capture phase.
     * Before the responder system bubbles up from the deepest component,
     * it will do a capture phase, firing on*ShouldSetResponderCapture.
     * So if a parent View wants to prevent the child from becoming responder on a touch start,
     * it should have a onStartShouldSetResponderCapture handler which returns true.
     */
    onMoveShouldSetResponderCapture?: () => void;
}

// @see https://facebook.github.io/react-native/docs/view.html#style
export interface ViewStyle extends FlexStyle, TransformsStyle {
    backfaceVisibility?: "visible" | "hidden";
    backgroundColor?: string;
    borderBottomColor?: string;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    borderBottomWidth?: number;
    borderColor?: string;
    borderLeftColor?: string;
    borderRadius?: number;
    borderRightColor?: string;
    borderRightWidth?: number;
    borderStyle?: "solid" | "dotted" | "dashed";
    borderTopColor?: string;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    borderTopWidth?: number;
    display?: "none" | "flex";
    opacity?: number;
    overflow?: "visible" | "hidden";
    shadowColor?: string;
    shadowOffset?: { width: number; height: number };
    shadowOpacity?: number;
    shadowRadius?: number;
    elevation?: number;
    testID?: string;
}

export interface ViewPropertiesIOS {
    /**
     * A Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver.
     * @platform ios
     */
    accessibilityViewIsModal?: boolean;

    /**
     * Provides an array of custom actions available for accessibility.
     * @platform ios
     */
    accessibilityActions?: Array<string>;

    /**
     * When `accessible` is true, the system will try to invoke this function
     * when the user performs an accessibility custom action.
     * @platform ios
     */
    onAccessibilityAction?: () => void;

    /**
     * Whether this view should be rendered as a bitmap before compositing.
     *
     * On iOS, this is useful for animations and interactions that do not modify this component's dimensions nor its children;
     * for example, when translating the position of a static view, rasterization allows the renderer to reuse a cached bitmap of a static view
     * and quickly composite it during each frame.
     *
     * Rasterization incurs an off-screen drawing pass and the bitmap consumes memory.
     * Test and measure when using this property.
     */
    shouldRasterizeIOS?: boolean;
}

export interface ViewPropertiesAndroid {
    /**
     * Views that are only used to layout their children or otherwise don't draw anything
     * may be automatically removed from the native hierarchy as an optimization.
     * Set this property to false to disable this optimization and ensure that this View exists in the native view hierarchy.
     */
    collapsable?: boolean;

    /**
     * Whether this view needs to rendered offscreen and composited with an alpha in order to preserve 100% correct colors and blending behavior.
     * The default (false) falls back to drawing the component and its children
     * with an alpha applied to the paint used to draw each element instead of rendering the full component offscreen and compositing it back with an alpha value.
     * This default may be noticeable and undesired in the case where the View you are setting an opacity on
     * has multiple overlapping elements (e.g. multiple overlapping Views, or text and a background).
     *
     * Rendering offscreen to preserve correct alpha behavior is extremely expensive
     * and hard to debug for non-native developers, which is why it is not turned on by default.
     * If you do need to enable this property for an animation,
     * consider combining it with renderToHardwareTextureAndroid if the view contents are static (i.e. it doesn't need to be redrawn each frame).
     * If that property is enabled, this View will be rendered off-screen once,
     * saved in a hardware texture, and then composited onto the screen with an alpha each frame without having to switch rendering targets on the GPU.
     */
    needsOffscreenAlphaCompositing?: boolean;

    /**
     * Whether this view should render itself (and all of its children) into a single hardware texture on the GPU.
     *
     * On Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale:
     * in those cases, the view doesn't have to be redrawn and display lists don't need to be re-executed. The texture can just be
     * re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.
     */
    renderToHardwareTextureAndroid?: boolean;
}

type Falsy = undefined | null | false;
interface RecursiveArray<T> extends Array<T | RecursiveArray<T>> {}
/** Keep a brand of 'T' so that calls to `StyleSheet.flatten` can take `RegisteredStyle<T>` and return `T`. */
type RegisteredStyle<T> = number & { __registeredStyleBrand: T };
export type StyleProp<T> = T | RegisteredStyle<T> | RecursiveArray<T | RegisteredStyle<T> | Falsy> | Falsy;

/**
 * @see https://facebook.github.io/react-native/docs/accessibility.html#accessibility-properties
 */
export interface AccessibilityProperties extends AccessibilityPropertiesAndroid, AccessibilityPropertiesIOS {
    /**
     * When true, indicates that the view is an accessibility element.
     * By default, all the touchable elements are accessible.
     */
    accessible?: boolean;

    /**
     * Overrides the text that's read by the screen reader when the user interacts with the element. By default, the
     * label is constructed by traversing all the children and accumulating all the Text nodes separated by space.
     */
    accessibilityLabel?: string;
}

export interface AccessibilityPropertiesAndroid {
    /**
     * In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a “button”).
     * If we were using native buttons, this would work automatically. Since we are using javascript, we need to
     * provide a bit more context for TalkBack. To do so, you must specify the ‘accessibilityComponentType’ property
     * for any UI component. For instances, we support ‘button’, ‘radiobutton_checked’ and ‘radiobutton_unchecked’ and so on.
     * @platform android
     */
    accessibilityComponentType?: "none" | "button" | "radiobutton_checked" | "radiobutton_unchecked";

    /**
     * Indicates to accessibility services whether the user should be notified when this view changes.
     * Works for Android API >= 19 only.
     * See http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.
     * @platform android
     */
    accessibilityLiveRegion?: "none" | "polite" | "assertive";

    /**
     * Controls how view is important for accessibility which is if it fires accessibility events
     * and if it is reported to accessibility services that query the screen.
     * Works for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.
     *
     * Possible values:
     *      'auto' - The system determines whether the view is important for accessibility - default (recommended).
     *      'yes' - The view is important for accessibility.
     *      'no' - The view is not important for accessibility.
     *      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.
     */
    importantForAccessibility?: "auto" | "yes" | "no" | "no-hide-descendants";
}

export interface AccessibilityPropertiesIOS {
    /**
     * Accessibility traits tell a person using VoiceOver what kind of element they have selected.
     * Is this element a label? A button? A header? These questions are answered by accessibilityTraits.
     * @platform ios
     */
    accessibilityTraits?: AccessibilityTraits | AccessibilityTraits[];

    /**
     * When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.
     * @platform ios
     */
    onAcccessibilityTap?: () => void;

    /**
     * When accessible is true, the system will invoke this function when the user performs the magic tap gesture.
     * @platform ios
     */
    onMagicTap?: () => void;
}

type AccessibilityTraits =
    | "none"
    | "button"
    | "link"
    | "header"
    | "search"
    | "image"
    | "selected"
    | "plays"
    | "key"
    | "text"
    | "summary"
    | "disabled"
    | "frequentUpdates"
    | "startsMedia"
    | "adjustable"
    | "allowsDirectInteraction"
    | "pageTurn";

/**
 * @see https://facebook.github.io/react-native/docs/view.html#props
 */
export interface ViewProperties
    extends ViewPropertiesAndroid, ViewPropertiesIOS, GestureResponderHandlers, Touchable, AccessibilityProperties {
    /**
     * This defines how far a touch event can start away from the view.
     * Typical interface guidelines recommend touch targets that are at least
     * 30 - 40 points/density-independent pixels. If a Touchable view has
     * a height of 20 the touchable height can be extended to 40 with
     * hitSlop={{top: 10, bottom: 10, left: 0, right: 0}}
     * NOTE The touch area never extends past the parent view bounds and
     * the Z-index of sibling views always takes precedence if a touch
     * hits two overlapping views.
     */
    hitSlop?: Insets;

    /**
     * Invoked on mount and layout changes with
     *
     * {nativeEvent: { layout: {x, y, width, height}}}.
     */
    onLayout?: (event: LayoutChangeEvent) => void;

    /**
     *
     * In the absence of auto property, none is much like CSS's none value. box-none is as if you had applied the CSS class:
     *
     * .box-none {
     *   pointer-events: none;
     * }
     * .box-none * {
     *   pointer-events: all;
     * }
     *
     * box-only is the equivalent of
     *
     * .box-only {
     *   pointer-events: all;
     * }
     * .box-only * {
     *   pointer-events: none;
     * }
     *
     * But since pointerEvents does not affect layout/appearance, and we are already deviating from the spec by adding additional modes,
     * we opt to not include pointerEvents on style. On some platforms, we would need to implement it as a className anyways. Using style or not is an implementation detail of the platform.
     */
    pointerEvents?: "box-none" | "none" | "box-only" | "auto";

    /**
     *
     * This is a special performance property exposed by RCTView and is useful for scrolling content when there are many subviews,
     * most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound.
     * The subviews must also have overflow: hidden, as should the containing view (or one of its superviews).
     */
    removeClippedSubviews?: boolean;

    style?: StyleProp<ViewStyle>;

    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string;
}

/**
 * The most fundamental component for building UI, View is a container that supports layout with flexbox, style, some touch handling,
 * and accessibility controls, and is designed to be nested inside other views and to have 0 to many children of any type.
 * View maps directly to the native view equivalent on whatever platform React is running on,
 * whether that is a UIView, <div>, android.view, etc.
 */
export interface ViewStatic extends NativeMethodsMixin, React.ClassicComponentClass<ViewProperties> {
    /**
     * Is 3D Touch / Force Touch available (i.e. will touch events include `force`)
     * @platform ios
     */
    forceTouchAvailable: boolean;
}

/**
 * @see https://facebook.github.io/react-native/docs/viewpagerandroid.html#props
 */

export interface ViewPagerAndroidOnPageScrollEventData {
    position: number;
    offset: number;
}

export interface ViewPagerAndroidOnPageSelectedEventData {
    position: number;
}

export interface ViewPagerAndroidProperties extends ViewProperties {
    /**
     * Index of initial page that should be selected. Use `setPage` method to
     * update the page, and `onPageSelected` to monitor page changes
     */
    initialPage?: number;

    /**
     * When false, the content does not scroll.
     * The default value is true.
     */
    scrollEnabled?: boolean;

    /**
     * Executed when transitioning between pages (ether because of animation for
     * the requested page change or when user is swiping/dragging between pages)
     * The `event.nativeEvent` object for this callback will carry following data:
     *  - position - index of first page from the left that is currently visible
     *  - offset - value from range [0,1) describing stage between page transitions.
     *    Value x means that (1 - x) fraction of the page at "position" index is
     *    visible, and x fraction of the next page is visible.
     */
    onPageScroll?: (event: NativeSyntheticEvent<ViewPagerAndroidOnPageScrollEventData>) => void;

    /**
     * This callback will be called once ViewPager finish navigating to selected page
     * (when user swipes between pages). The `event.nativeEvent` object passed to this
     * callback will have following fields:
     *  - position - index of page that has been selected
     */
    onPageSelected?: (event: NativeSyntheticEvent<ViewPagerAndroidOnPageSelectedEventData>) => void;

    /**
     * Function called when the page scrolling state has changed.
     * The page scrolling state can be in 3 states:
     * - idle, meaning there is no interaction with the page scroller happening at the time
     * - dragging, meaning there is currently an interaction with the page scroller
     * - settling, meaning that there was an interaction with the page scroller, and the
     *   page scroller is now finishing it's closing or opening animation
     */
    onPageScrollStateChanged?: (state: "Idle" | "Dragging" | "Settling") => void;

    /**
     * Determines whether the keyboard gets dismissed in response to a drag.
     *   - 'none' (the default), drags do not dismiss the keyboard.
     *   - 'on-drag', the keyboard is dismissed when a drag begins.
     */
    keyboardDismissMode?: "none" | "on-drag";

    /**
     * Blank space to show between pages. This is only visible while scrolling, pages are still
     * edge-to-edge.
     */
    pageMargin?: number;
}

export interface ViewPagerAndroidStatic extends NativeMethodsMixin, React.ComponentClass<ViewPagerAndroidProperties> {
    /**
     * A helper function to scroll to a specific page in the ViewPager.
     * The transition between pages will be animated.
     */
    setPage(selectedPage: number): void;

    /**
     * A helper function to scroll to a specific page in the ViewPager.
     * The transition between pages will *not* be animated.
     */
    setPageWithoutAnimation(selectedPage: number): void;
}

/**
 * It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard.
 * It can automatically adjust either its position or bottom padding based on the position of the keyboard.
 */
export interface KeyboardAvoidingViewStatic
    extends TimerMixin,
        React.ClassicComponentClass<KeyboardAvoidingViewProps> {}

export interface KeyboardAvoidingViewProps extends ViewProperties {
    behavior?: "height" | "position" | "padding";

    /**
     * The style of the content container(View) when behavior is 'position'.
     */
    contentContainerStyle?: StyleProp<ViewStyle>;

    /**
     * This is the distance between the top of the user screen and the react native view,
     * may be non-zero in some use cases.
     */
    keyboardVerticalOffset?: number;
}

/**
 * //FIXME: No documentation extracted from code comment on WebView.ios.js
 */
export interface NavState {
    url?: string;
    title?: string;
    loading?: boolean;
    canGoBack?: boolean;
    canGoForward?: boolean;

    [key: string]: any;
}

/**
 * Passed data from WebView via window.postMessage.
 */
export interface WebViewMessageEventData {
    /**
     * The data sent from a WebView; can only be a string.
     */
    data: string;
}

export interface WebViewPropertiesAndroid {
    /**
     * Used for android only, JS is enabled by default for WebView on iOS
     */
    javaScriptEnabled?: boolean;

    /**
     * Used on Android only, controls whether DOM Storage is enabled
     * or not android
     */
    domStorageEnabled?: boolean;

    /**
     * Sets the user-agent for the WebView.
     */
    userAgent?: string;
}

export interface WebViewIOSLoadRequestEvent {
    target: number;
    canGoBack: boolean;
    lockIdentifier: number;
    loading: boolean;
    title: string;
    canGoForward: boolean;
    navigationType: "other" | "click";
    url: string;
}

export interface WebViewPropertiesIOS {
    /**
     * Determines whether HTML5 videos play inline or use the native
     * full-screen controller. default value false
     * NOTE : "In order * for video to play inline, not only does
     * this property need to be set to true, but the video element
     * in the HTML document must also include the webkit-playsinline
     * attribute."
     */
    allowsInlineMediaPlayback?: boolean;

    /**
     * Boolean value that determines whether the web view bounces
     * when it reaches the edge of the content. The default value is `true`.
     * @platform ios
     */
    bounces?: boolean;

    /**
     * Determines the types of data converted to clickable URLs in
     * the web view’s content. By default only phone numbers are detected.
     *
     * You can provide one type or an array of many types.
     *
     * Possible values for `dataDetectorTypes` are:
     *
     * - `'phoneNumber'`
     * - `'link'`
     * - `'address'`
     * - `'calendarEvent'`
     * - `'none'`
     * - `'all'`
     */
    dataDetectorTypes?: DataDetectorTypes | DataDetectorTypes[];

    /**
     * A floating-point number that determines how quickly the scroll
     * view decelerates after the user lifts their finger. You may also
     * use string shortcuts "normal" and "fast" which match the
     * underlying iOS settings for UIScrollViewDecelerationRateNormal
     * and UIScrollViewDecelerationRateFast respectively.
     * - normal: 0.998 - fast: 0.99 (the default for iOS WebView)
     */
    decelerationRate?: "normal" | "fast" | number;

    /**
     * Allows custom handling of any webview requests by a JS handler.
     * Return true or false from this method to continue loading the
     * request.
     */
    onShouldStartLoadWithRequest?: (event: WebViewIOSLoadRequestEvent) => boolean;

    /**
     * Boolean value that determines whether scrolling is enabled in the
     * `WebView`. The default value is `true`.
     */
    scrollEnabled?: boolean;
}

export interface WebViewUriSource {
    /*
        * The URI to load in the WebView. Can be a local or remote file.
        */
    uri?: string;

    /*
        * The HTTP Method to use. Defaults to GET if not specified.
        * NOTE: On Android, only GET and POST are supported.
        */
    method?: string;

    /*
        * Additional HTTP headers to send with the request.
        * NOTE: On Android, this can only be used with GET requests.
        */
    headers?: any;

    /*
        * The HTTP body to send with the request. This must be a valid
        * UTF-8 string, and will be sent exactly as specified, with no
        * additional encoding (e.g. URL-escaping or base64) applied.
        * NOTE: On Android, this can only be used with POST requests.
        */
    body?: string;
}

export interface WebViewHtmlSource {
    /*
        * A static HTML page to display in the WebView.
        */
    html: string;

    /*
        * The base URL to be used for any relative links in the HTML.
        */
    baseUrl?: string;
}

/**
 * @see https://facebook.github.io/react-native/docs/webview.html#props
 */
export interface WebViewProperties extends ViewProperties, WebViewPropertiesAndroid, WebViewPropertiesIOS {
    /**
     * Controls whether to adjust the content inset for web views that are
     * placed behind a navigation bar, tab bar, or toolbar. The default value
     * is `true`.
     */
    automaticallyAdjustContentInsets?: boolean;

    /**
     * The amount by which the web view content is inset from the edges of
     * the scroll view. Defaults to {top: 0, left: 0, bottom: 0, right: 0}.
     */
    contentInset?: Insets;

    /**
     * @deprecated
     */
    html?: string;

    /**
     * Set this to provide JavaScript that will be injected into the web page
     * when the view loads.
     */
    injectedJavaScript?: string;

    /**
     * Invoked when load fails
     */
    onError?: (event: NavState) => void;

    /**
     * Invoked when load finish
     */
    onLoad?: (event: NavState) => void;

    /**
     * Invoked when load either succeeds or fails
     */
    onLoadEnd?: (event: NavState) => void;

    /**
     * Invoked on load start
     */
    onLoadStart?: (event: NavState) => void;

    /**
     * Invoked when window.postMessage is called from WebView.
     */
    onMessage?: (event: NativeSyntheticEvent<WebViewMessageEventData>) => void;

    /**
     * Function that is invoked when the `WebView` loading starts or ends.
     */
    onNavigationStateChange?: (event: NavState) => void;

    /**
     * Function that returns a view to show if there's an error.
     */
    renderError?: () => React.ReactElement<ViewProperties>;

    /**
     * Function that returns a loading indicator.
     */
    renderLoading?: () => React.ReactElement<ViewProperties>;

    /**
     * Boolean value that forces the `WebView` to show the loading view
     * on the first load.
     */
    startInLoadingState?: boolean;

    style?: StyleProp<ViewStyle>;

    // Deprecated: Use the `source` prop instead.
    url?: string;

    source?: WebViewUriSource | WebViewHtmlSource | number;

    /**
     * Determines whether HTML5 audio & videos require the user to tap
     * before they can start playing. The default value is false.
     */
    mediaPlaybackRequiresUserAction?: boolean;

    /**
     * sets whether the webpage scales to fit the view and the user can change the scale
     */
    scalesPageToFit?: boolean;
}

export interface WebViewStatic extends React.ClassicComponentClass<WebViewProperties> {
    /**
     * Go back one page in the webview's history.
     */
    goBack: () => void;

    /**
     * Go forward one page in the webview's history.
     */
    goForward: () => void;

    /**
     * Post a message to the WebView in the form of a string.
     */
    postMessage: (message: string) => void;

    /**
     * Reloads the current page.
     */
    reload: () => void;

    /**
     * Stop loading the current page.
     */
    stopLoading(): void;

    /**
     * Returns the native webview node.
     */
    getWebViewHandle: () => any;
}

/**
 * @see https://facebook.github.io/react-native/docs/segmentedcontrolios.html
 * @see SegmentedControlIOS.ios.js
 */
export interface NativeSegmentedControlIOSChangeEvent {
    value: string;
    selectedSegmentIndex: number;
    target: number;
}

export interface SegmentedControlIOSProperties extends ViewProperties {
    /**
     * If false the user won't be able to interact with the control. Default value is true.
     */
    enabled?: boolean;

    /**
     * If true, then selecting a segment won't persist visually.
     * The onValueChange callback will still work as expected.
     */
    momentary?: boolean;

    /**
     * Callback that is called when the user taps a segment;
     * passes the event as an argument
     */
    onChange?: (event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>) => void;

    /**
     * Callback that is called when the user taps a segment; passes the segment's value as an argument
     */
    onValueChange?: (value: string) => void;

    /**
     * The index in props.values of the segment to be (pre)selected.
     */
    selectedIndex?: number;

    /**
     * Accent color of the control.
     */
    tintColor?: string;

    /**
     * The labels for the control's segment buttons, in order.
     */
    values?: string[];
}

/**
 * Renders nested content and automatically applies paddings reflect the portion of the view
 * that is not covered by navigation bars, tab bars, toolbars, and other ancestor views.
 * Moreover, and most importantly, Safe Area's paddings feflect physical limitation of the screen,
 * such as rounded corners or camera notches (aka sensor housing area on iPhone X).
 */
export interface SafeAreaViewStatic extends NativeMethodsMixin, React.ClassicComponentClass<ViewProperties> {}

/**
 * Use `SegmentedControlIOS` to render a UISegmentedControl iOS.
 *
 * #### Programmatically changing selected index
 *
 * The selected index can be changed on the fly by assigning the
 * selectIndex prop to a state variable, then changing that variable.
 * Note that the state variable would need to be updated as the user
 * selects a value and changes the index, as shown in the example below.
 *
 * ````
 * <SegmentedControlIOS
 *   values={['One', 'Two']}
 *   selectedIndex={this.state.selectedIndex}
 *   onChange={(event) => {
 *     this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
 *   }}
 * />
 * ````
 */
export interface SegmentedControlIOSStatic
    extends NativeMethodsMixin,
        React.ClassicComponentClass<SegmentedControlIOSProperties> {}

export interface NavigatorIOSProperties {
    /**
     * The default background color of the navigation bar.
     */
    barTintColor?: string;

    /**
     * NavigatorIOS uses "route" objects to identify child views, their props, and navigation bar configuration.
     * "push" and all the other navigation operations expect routes to be like this
     */
    initialRoute: Route;

    /**
     * The default wrapper style for components in the navigator.
     * A common use case is to set the backgroundColor for every page
     */
    itemWrapperStyle?: StyleProp<ViewStyle>;

    /**
     * Boolean value that indicates whether the interactive pop gesture is
     * enabled. This is useful for enabling/disabling the back swipe navigation
     * gesture.
     *
     * If this prop is not provided, the default behavior is for the back swipe
     * gesture to be enabled when the navigation bar is shown and disabled when
     * the navigation bar is hidden. Once you've provided the
     * `interactivePopGestureEnabled` prop, you can never restore the default
     * behavior.
     */
    interactivePopGestureEnabled?: boolean;

    /**
     * A Boolean value that indicates whether the navigation bar is hidden
     */
    navigationBarHidden?: boolean;

    /**
     * A Boolean value that indicates whether to hide the 1px hairline shadow
     */
    shadowHidden?: boolean;

    /**
     * The color used for buttons in the navigation bar
     */
    tintColor?: string;

    /**
     * The text color of the navigation bar title
     */
    titleTextColor?: string;

    /**
     * A Boolean value that indicates whether the navigation bar is translucent
     */
    translucent?: boolean;

    /**
     * NOT IN THE DOC BUT IN THE EXAMPLES
     */
    style?: StyleProp<ViewStyle>;
}

/**
 * A navigator is an object of navigation functions that a view can call.
 * It is passed as a prop to any component rendered by NavigatorIOS.
 *
 * Navigator functions are also available on the NavigatorIOS component:
 *
 * @see https://facebook.github.io/react-native/docs/navigatorios.html#navigator
 */
export interface NavigationIOS {
    /**
     * Navigate forward to a new route
     */
    push: (route: Route) => void;

    /**
     * Go back one page
     */
    pop: () => void;

    /**
     * Go back N pages at once. When N=1, behavior matches pop()
     */
    popN: (n: number) => void;

    /**
     * Replace the route for the current page and immediately load the view for the new route
     */
    replace: (route: Route) => void;

    /**
     * Replace the route/view for the previous page
     */
    replacePrevious: (route: Route) => void;

    /**
     * Replaces the previous route/view and transitions back to it
     */
    replacePreviousAndPop: (route: Route) => void;

    /**
     * Replaces the top item and popToTop
     */
    resetTo: (route: Route) => void;

    /**
     * Go back to the item for a particular route object
     */
    popToRoute(route: Route): void;

    /**
     * Go back to the top item
     */
    popToTop(): void;
}

export interface NavigatorIOSStatic extends NavigationIOS, React.ComponentClass<NavigatorIOSProperties> {}

/**
 * @see https://facebook.github.io/react-native/docs/activityindicator.html#props
 */
export interface ActivityIndicatorProperties extends ViewProperties {
    /**
     * Whether to show the indicator (true, the default) or hide it (false).
     */
    animating?: boolean;

    /**
     * The foreground color of the spinner (default is gray).
     */
    color?: string;

    /**
     * Whether the indicator should hide when not animating (true by default).
     */
    hidesWhenStopped?: boolean;

    /**
     * Size of the indicator.
     * Small has a height of 20, large has a height of 36.
     *
     * enum('small', 'large')
     */
    size?: number | "small" | "large";

    style?: StyleProp<ViewStyle>;
}

export interface ActivityIndicatorStatic
    extends NativeMethodsMixin,
        React.ClassicComponentClass<ActivityIndicatorProperties> {}

/**
 * @see https://facebook.github.io/react-native/docs/activityindicatorios.html#props
 */
export interface ActivityIndicatorIOSProperties extends ViewProperties {
    /**
     * Whether to show the indicator (true, the default) or hide it (false).
     */
    animating?: boolean;

    /**
     * The foreground color of the spinner (default is gray).
     */
    color?: string;

    /**
     * Whether the indicator should hide when not animating (true by default).
     */
    hidesWhenStopped?: boolean;

    /**
     * Invoked on mount and layout changes with
     */
    onLayout?: (event: { nativeEvent: { layout: { x: number; y: number; width: number; height: number } } }) => void;

    /**
     * Size of the indicator.
     * Small has a height of 20, large has a height of 36.
     *
     * enum('small', 'large')
     */
    size?: "small" | "large";

    style?: StyleProp<ViewStyle>;
}

/**
 * @Deprecated since version 0.28.0
 */
export interface ActivityIndicatorIOSStatic extends React.ComponentClass<ActivityIndicatorIOSProperties> {}

export interface DatePickerIOSProperties extends ViewProperties {
    /**
     * The currently selected date.
     */
    date: Date;

    /**
     * Maximum date.
     * Restricts the range of possible date/time values.
     */
    maximumDate?: Date;

    /**
     * Maximum date.
     * Restricts the range of possible date/time values.
     */
    minimumDate?: Date;

    /**
     *  enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)
     *  The interval at which minutes can be selected.
     */
    minuteInterval?: number;

    /**
     *  enum('date', 'time', 'datetime')
     *  The date picker mode.
     */
    mode?: "date" | "time" | "datetime";

    /**
     * Date change handler.
     * This is called when the user changes the date or time in the UI.
     * The first and only argument is a Date object representing the new date and time.
     */
    onDateChange: (newDate: Date) => void;

    /**
     * Timezone offset in minutes.
     * By default, the date picker will use the device's timezone. With this parameter, it is possible to force a certain timezone offset.
     * For instance, to show times in Pacific Standard Time, pass -7 * 60.
     */
    timeZoneOffsetInMinutes?: number;
}

export interface DatePickerIOSStatic extends NativeMethodsMixin, React.ComponentClass<DatePickerIOSProperties> {}

export interface DrawerSlideEvent extends NativeSyntheticEvent<NativeTouchEvent> {}

/**
 * @see DrawerLayoutAndroid.android.js
 */
export interface DrawerLayoutAndroidProperties extends ViewProperties {
    /**
     * Specifies the background color of the drawer. The default value
     * is white. If you want to set the opacity of the drawer, use rgba.
     * Example:
     * return (
     *   <DrawerLayoutAndroid drawerBackgroundColor="rgba(0,0,0,0.5)">
     *   </DrawerLayoutAndroid>
     *);
     */
    drawerBackgroundColor?: string;

    /**
     * Specifies the lock mode of the drawer. The drawer can be locked
     * in 3 states:
     *
     * - unlocked (default), meaning that the drawer will respond
     *   (open/close) to touch gestures.
     *
     * - locked-closed, meaning that the drawer will stay closed and not
     *   respond to gestures.
     *
     * - locked-open, meaning that the drawer will stay opened and
     *   not respond to gestures. The drawer may still be opened and
     *   closed programmatically (openDrawer/closeDrawer).
     */
    drawerLockMode?: "unlocked" | "locked-closed" | "locked-open";

    /**
     * Specifies the side of the screen from which the drawer will slide in.
     * enum(DrawerLayoutAndroid.positions.Left, DrawerLayoutAndroid.positions.Right)
     */
    drawerPosition?: number;

    /**
     * Specifies the width of the drawer, more precisely the width of the
     * view that be pulled in from the edge of the window.
     */
    drawerWidth?: number;

    /**
     * Determines whether the keyboard gets dismissed in response to a drag.
     * - 'none' (the default), drags do not dismiss the keyboard.
     * - 'on-drag', the keyboard is dismissed when a drag begins.
     */
    keyboardDismissMode?: "none" | "on-drag";

    /**
     * Function called whenever the navigation view has been closed.
     */
    onDrawerClose?: () => void;

    /**
     * Function called whenever the navigation view has been opened.
     */
    onDrawerOpen?: () => void;

    /**
     * Function called whenever there is an interaction with the navigation view.
     */
    onDrawerSlide?: (event: DrawerSlideEvent) => void;

    /**
     * Function called when the drawer state has changed.
     * The drawer can be in 3 states:
     * - idle, meaning there is no interaction with the navigation
     *   view happening at the time
     * - dragging, meaning there is currently an interaction with the
     *   navigation view
     * - settling, meaning that there was an interaction with the
     *   navigation view, and the navigation view is now finishing
     *   it's closing or opening animation
     */
    onDrawerStateChanged?: (event: "Idle" | "Dragging" | "Settling") => void;

    /**
     * The navigation view that will be rendered to the side of the
     * screen and can be pulled in.
     */
    renderNavigationView: () => JSX.Element;

    /**
     * Make the drawer take the entire screen and draw the background of
     * the status bar to allow it to open over the status bar. It will
     * only have an effect on API 21+.
     */
    statusBarBackgroundColor?: string;
}

interface DrawerPosition {
    Left: number;
    Right: number;
}

export interface DrawerLayoutAndroidStatic
    extends NativeMethodsMixin,
        React.ClassicComponentClass<DrawerLayoutAndroidProperties> {
    /**
     * drawer's positions.
     */
    positions: DrawerPosition;

    /**
     * Opens the drawer.
     */
    openDrawer(): void;

    /**
     * Closes the drawer.
     */
    closeDrawer(): void;
}

/**
 * @see PickerIOS.ios.js
 */
export interface PickerIOSItemProperties {
    value?: string | number;
    label?: string;
}

/**
 * @see PickerIOS.ios.js
 */
export interface PickerIOSItemStatic extends React.ComponentClass<PickerIOSItemProperties> {}

/**
 * @see Picker.js
 */
export interface PickerItemProperties {
    testID?: string;
    color?: string;
    label: string;
    value?: any;
}

export interface PickerItem extends React.ComponentClass<PickerItemProperties> {}

export interface PickerPropertiesIOS extends ViewProperties {
    /**
     * Style to apply to each of the item labels.
     * @platform ios
     */
    itemStyle?: StyleProp<ViewStyle>;
}

export interface PickerPropertiesAndroid extends ViewProperties {
    /**
     * If set to false, the picker will be disabled, i.e. the user will not be able to make a
     * selection.
     * @platform android
     */
    enabled?: boolean;

    /**
     * On Android, specifies how to display the selection items when the user taps on the picker:
     *
     *   - 'dialog': Show a modal dialog. This is the default.
     *   - 'dropdown': Shows a dropdown anchored to the picker view
     *
     * @platform android
     */
    mode?: "dialog" | "dropdown";

    /**
     * Prompt string for this picker, used on Android in dialog mode as the title of the dialog.
     * @platform android
     */
    prompt?: string;
}

/**
 * @see https://facebook.github.io/react-native/docs/picker.html
 * @see Picker.js
 */
export interface PickerProperties extends PickerPropertiesIOS, PickerPropertiesAndroid {
    /**
     * Callback for when an item is selected. This is called with the
     * following parameters:
     * - itemValue: the value prop of the item that was selected
     * - itemPosition: the index of the selected item in this picker
     */
    onValueChange?: (itemValue: any, itemPosition: number) => void;

    /**
     * Value matching value of one of the items.
     * Can be a string or an integer.
     */
    selectedValue?: any;

    style?: StyleProp<ViewStyle>;

    /**
     * Used to locate this view in end-to-end tests.
     */
    testId?: string;
}

/**
 * @see https://facebook.github.io/react-native/docs/picker.html
 * @see Picker.js
 */
export interface PickerStatic extends React.ComponentClass<PickerProperties> {
    /**
     * On Android, display the options in a dialog.
     */
    MODE_DIALOG: string;
    /**
     * On Android, display the options in a dropdown (this is the default).
     */
    MODE_DROPDOWN: string;

    Item: PickerItem;
}

/**
 * @see https://facebook.github.io/react-native/docs/pickerios.html
 * @see PickerIOS.ios.js
 */
export interface PickerIOSProperties extends ViewProperties {
    itemStyle?: StyleProp<TextStyle>;
    onValueChange?: (value: string | number) => void;
    selectedValue?: string | number;
}

/**
 * @see https://facebook.github.io/react-native/docs/pickerios.html
 * @see PickerIOS.ios.js
 */
export interface PickerIOSStatic extends NativeMethodsMixin, React.ClassicComponentClass<PickerIOSProperties> {
    Item: PickerIOSItemStatic;
}

/**
 * @see https://facebook.github.io/react-native/docs/progressbarandroid.html
 * @see ProgressBarAndroid.android.js
 */
export interface ProgressBarAndroidProperties extends ViewProperties {
    /**
     * Style of the ProgressBar. One of:
         Horizontal
         Normal (default)
         Small
         Large
         Inverse
         SmallInverse
         LargeInverse
     */
    styleAttr?: "Horizontal" | "Normal" | "Small" | "Large" | "Inverse" | "SmallInverse" | "LargeInverse";

    /**
     * If the progress bar will show indeterminate progress.
     * Note that this can only be false if styleAttr is Horizontal.
     */
    indeterminate?: boolean;

    /**
     * The progress value (between 0 and 1).
     */
    progress?: number;

    /**
     * Color of the progress bar.
     */
    color?: string;

    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string;
}
/**
 * React component that wraps the Android-only `ProgressBar`. This component is used to indicate
 * that the app is loading or there is some activity in the app.
 */
export interface ProgressBarAndroidStatic
    extends NativeMethodsMixin,
        React.ClassicComponentClass<ProgressBarAndroidProperties> {}

/**
 * @see https://facebook.github.io/react-native/docs/progressviewios.html
 * @see ProgressViewIOS.ios.js
 */
export interface ProgressViewIOSProperties extends ViewProperties {
    /**
     * The progress bar style.
     */
    progressViewStyle?: "default" | "bar";

    /**
     * The progress value (between 0 and 1).
     */
    progress?: number;

    /**
     * The tint color of the progress bar itself.
     */
    progressTintColor?: string;

    /**
     * The tint color of the progress bar track.
     */
    trackTintColor?: string;

    /**
     * A stretchable image to display as the progress bar.
     */
    progressImage?: ImageURISource | ImageURISource[];

    /**
     * A stretchable image to display behind the progress bar.
     */
    trackImage?: ImageURISource | ImageURISource[];
}
export interface ProgressViewIOSStatic
    extends NativeMethodsMixin,
        React.ClassicComponentClass<ProgressViewIOSProperties> {}

export interface RefreshControlPropertiesIOS extends ViewProperties {
    /**
     * The color of the refresh indicator.
     */
    tintColor?: string;

    /**
     * The title displayed under the refresh indicator.
     */
    title?: string;

    /**
     * Title color.
     */
    titleColor?: string;
}

export interface RefreshControlPropertiesAndroid extends ViewProperties {
    /**
     * The colors (at least one) that will be used to draw the refresh indicator.
     */
    colors?: string[];

    /**
     * Whether the pull to refresh functionality is enabled.
     */
    enabled?: boolean;

    /**
     * The background color of the refresh indicator.
     */
    progressBackgroundColor?: string;

    /**
     * Size of the refresh indicator, see RefreshControl.SIZE.
     */
    size?: number;

    /**
     * Progress view top offset
     * @platform android
     */
    progressViewOffset?: number;
}

export interface RefreshControlProperties extends RefreshControlPropertiesIOS, RefreshControlPropertiesAndroid {
    /**
     * Called when the view starts refreshing.
     */
    onRefresh?: () => void;

    /**
     * Whether the view should be indicating an active refresh.
     */
    refreshing: boolean;
}

/**
 * This component is used inside a ScrollView or ListView to add pull to refresh
 * functionality. When the ScrollView is at `scrollY: 0`, swiping down
 * triggers an `onRefresh` event.
 *
 * __Note:__ `refreshing` is a controlled prop, this is why it needs to be set to true
 * in the `onRefresh` function otherwise the refresh indicator will stop immediately.
 */
export interface RefreshControlStatic
    extends NativeMethodsMixin,
        React.ClassicComponentClass<RefreshControlProperties> {
    SIZE: Object; // Undocumented
}

export interface RecyclerViewBackedScrollViewProperties extends ScrollViewProperties {}

/**
 * Wrapper around android native recycler view.
 *
 * It simply renders rows passed as children in a separate recycler view cells
 * similarly to how `ScrollView` is doing it. Thanks to the fact that it uses
 * native `RecyclerView` though, rows that are out of sight are going to be
 * automatically detached (similarly on how this would work with
 * `removeClippedSubviews = true` on a `ScrollView.js`).
 *
 * CAUTION: This is an experimental component and should only be used together
 * with javascript implementation of list view (see ListView.js). In order to
 * use it pass this component as `renderScrollComponent` to the list view. For
 * now only horizontal scrolling is supported.
 */
export interface RecyclerViewBackedScrollViewStatic
    extends ScrollResponderMixin,
        React.ClassicComponentClass<RecyclerViewBackedScrollViewProperties> {
    /**
     * A helper function to scroll to a specific point  in the scrollview.
     * This is currently used to help focus on child textviews, but can also
     * be used to quickly scroll to any element we want to focus. Syntax:
     *
     * scrollResponderScrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})
     *
     * Note: The weird argument signature is due to the fact that, for historical reasons,
     * the function also accepts separate arguments as as alternative to the options object.
     * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
     */
    scrollTo(y?: number | { x?: number; y?: number; animated?: boolean }, x?: number, animated?: boolean): void;

    /**
     * Returns a reference to the underlying scroll responder, which supports
     * operations like `scrollTo`. All ScrollView-like components should
     * implement this method so that they can be composed while providing access
     * to the underlying scroll responder's methods.
     */
    getScrollResponder(): JSX.Element;
}

export interface SliderPropertiesAndroid extends ViewProperties {
    /**
     * Color of the foreground switch grip.
     */
    thumbTintColor?: string;
}

export interface SliderPropertiesIOS extends ViewProperties {
    /**
     * Assigns a maximum track image. Only static images are supported.
     * The leftmost pixel of the image will be stretched to fill the track.
     */
    maximumTrackImage?: ImageURISource;

    /**
     * Assigns a minimum track image. Only static images are supported.
     * The rightmost pixel of the image will be stretched to fill the track.
     */
    minimumTrackImage?: ImageURISource;

    /**
     * Sets an image for the thumb. Only static images are supported.
     */
    thumbImage?: ImageURISource;

    /**
     * Assigns a single image for the track. Only static images
     * are supported. The center pixel of the image will be stretched
     * to fill the track.
     */
    trackImage?: ImageURISource;
}

export interface SliderProperties extends SliderPropertiesIOS, SliderPropertiesAndroid {
    /**
     * If true the user won't be able to move the slider.
     * Default value is false.
     */
    disabled?: boolean;

    /**
     * The color used for the track to the right of the button.
     * Overrides the default blue gradient image.
     */
    maximumTrackTintColor?: string;

    /**
     * Initial maximum value of the slider. Default value is 1.
     */
    maximumValue?: number;

    /**
     * The color used for the track to the left of the button.
     * Overrides the default blue gradient image.
     */
    minimumTrackTintColor?: string;

    /**
     * Initial minimum value of the slider. Default value is 0.
     */
    minimumValue?: number;

    /**
     * Callback called when the user finishes changing the value (e.g. when the slider is released).
     */
    onSlidingComplete?: (value: number) => void;

    /**
     * Callback continuously called while the user is dragging the slider.
     */
    onValueChange?: (value: number) => void;

    /**
     * Step value of the slider. The value should be between 0 and (maximumValue - minimumValue). Default value is 0.
     */
    step?: number;

    /**
     * Used to style and layout the Slider. See StyleSheet.js and ViewStylePropTypes.js for more info.
     */
    style?: StyleProp<ViewStyle>;

    /**
     * Used to locate this view in UI automation tests.
     */
    testID?: string;

    /**
     * Initial value of the slider. The value should be between minimumValue
     * and maximumValue, which default to 0 and 1 respectively.
     * Default value is 0.
     * This is not a controlled component, you don't need to update
     * the value during dragging.
     */
    value?: number;
}

/**
 * A component used to select a single value from a range of values.
 */
export interface SliderStatic extends NativeMethodsMixin, React.ClassicComponentClass<SliderProperties> {}

/**
 * https://facebook.github.io/react-native/docs/switchios.html#props
 */
export interface SwitchIOSProperties extends ViewProperties {
    /**
     * If true the user won't be able to toggle the switch. Default value is false.
     */
    disabled?: boolean;

    /**
     * Background color when the switch is turned on.
     */
    onTintColor?: string;

    /**
     * Callback that is called when the user toggles the switch.
     */
    onValueChange?: (value: boolean) => void;

    /**
     * Background color for the switch round button.
     */
    thumbTintColor?: string;

    /**
     * Background color when the switch is turned off.
     */
    tintColor?: string;

    /**
     * The value of the switch, if true the switch will be turned on. Default value is false.
     */
    value?: boolean;
}

/**
 *
 * Use SwitchIOS to render a boolean input on iOS.
 *
 * This is a controlled component, so you must hook in to the onValueChange callback and update the value prop in order for the component to update,
 * otherwise the user's change will be reverted immediately to reflect props.value as the source of truth.
 *
 * @see https://facebook.github.io/react-native/docs/switchios.html
 */
export interface SwitchIOSStatic extends React.ComponentClass<SwitchIOSProperties> {}

export type ImageResizeMode = "contain" | "cover" | "stretch" | "center" | "repeat";

/**
 * @see ImageResizeMode.js
 */
export interface ImageResizeModeStatic {
    /**
     * contain - The image will be resized such that it will be completely
     * visible, contained within the frame of the View.
     */
    contain: ImageResizeMode;
    /**
     * cover - The image will be resized such that the entire area of the view
     * is covered by the image, potentially clipping parts of the image.
     */
    cover: ImageResizeMode;
    /**
     * stretch - The image will be stretched to fill the entire frame of the
     * view without clipping.  This may change the aspect ratio of the image,
     * distoring it.  Only supported on iOS.
     */
    stretch: ImageResizeMode;
    /**
     * center - The image will be scaled down such that it is completely visible,
     * if bigger than the area of the view.
     * The image will not be scaled up.
     */
    center: ImageResizeMode;

    /**
     * repeat - The image will be repeated to cover the frame of the View. The
     * image will keep it's size and aspect ratio.
     */
    repeat: ImageResizeMode;
}

export interface ShadowStyleIOS {
    shadowColor?: string;
    shadowOffset?: { width: number; height: number };
    shadowOpacity?: number;
    shadowRadius?: number;
}

/**
 * Image style
 * @see https://facebook.github.io/react-native/docs/image.html#style
 */
export interface ImageStyle extends FlexStyle, TransformsStyle, ShadowStyleIOS {
    resizeMode?: ImageResizeMode;
    backfaceVisibility?: "visible" | "hidden";
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    overflow?: "visible" | "hidden";
    overlayColor?: string;
    tintColor?: string;
    opacity?: number;
}

/*
 * @see https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageSourcePropType.js
 */
export interface ImageURISource {
    /**
     * `uri` is a string representing the resource identifier for the image, which
     * could be an http address, a local file path, or the name of a static image
     * resource (which should be wrapped in the `require('./path/to/image.png')`
     * function).
     */
    uri?: string;
    /**
     * `bundle` is the iOS asset bundle which the image is included in. This
     * will default to [NSBundle mainBundle] if not set.
     * @platform ios
     */
    bundle?: string;
    /**
     * `method` is the HTTP Method to use. Defaults to GET if not specified.
     */
    method?: string;
    /**
     * `headers` is an object representing the HTTP headers to send along with the
     * request for a remote image.
     */
    headers?: { [key: string]: string };
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
     * `body` is the HTTP body to send with the request. This must be a valid
     * UTF-8 string, and will be sent exactly as specified, with no
     * additional encoding (e.g. URL-escaping or base64) applied.
     */
    body?: string;
    /**
     * `width` and `height` can be specified if known at build time, in which case
     * these will be used to set the default `<Image/>` component dimensions.
     */
    width?: number;
    height?: number;
    /**
     * `scale` is used to indicate the scale factor of the image. Defaults to 1.0 if
     * unspecified, meaning that one image pixel equates to one display point / DIP.
     */
    scale?: number;
}

export type ImageRequireSource = number;

export interface ImagePropertiesIOS {
    /**
     * blurRadius: the blur radius of the blur filter added to the image
     * @platform ios
     */
    blurRadius?: number;

    /**
     * When the image is resized, the corners of the size specified by capInsets will stay a fixed size,
     * but the center content and borders of the image will be stretched.
     * This is useful for creating resizable rounded buttons, shadows, and other resizable assets.
     * More info on Apple documentation
     */
    capInsets?: Insets;

    /**
     * A static image to display while downloading the final image off the network.
     */
    defaultSource?: ImageURISource | number;

    /**
     * Invoked on download progress with {nativeEvent: {loaded, total}}
     */
    onProgress?: (event: { nativeEvent: { loaded: number; total: number } }) => void;

    /**
     * Invoked when a partial load of the image is complete. The definition of
     * what constitutes a "partial load" is loader specific though this is meant
     * for progressive JPEG loads.
     * @platform ios
     */
    onPartialLoad?: () => void;
}

interface ImagePropertiesAndroid {
    /**
     * The mechanism that should be used to resize the image when the image's dimensions
     * differ from the image view's dimensions. Defaults to auto.
     *
     * 'auto': Use heuristics to pick between resize and scale.
     *
     * 'resize': A software operation which changes the encoded image in memory before it gets decoded.
     * This should be used instead of scale when the image is much larger than the view.
     *
     * 'scale': The image gets drawn downscaled or upscaled. Compared to resize, scale is faster (usually hardware accelerated)
     * and produces higher quality images. This should be used if the image is smaller than the view.
     * It should also be used if the image is slightly bigger than the view.
     */
    resizeMethod?: "auto" | "resize" | "scale";

    /**
     * Duration of fade in animation.
     */
    fadeDuration?: number;
}

/**
 * @see https://facebook.github.io/react-native/docs/image.html
 */
export interface ImageProperties extends ImagePropertiesIOS, ImagePropertiesAndroid, AccessibilityProperties {
    /**
     * onLayout function
     *
     * Invoked on mount and layout changes with
     *
     * {nativeEvent: { layout: {x, y, width, height}}}.
     */
    onLayout?: (event: LayoutChangeEvent) => void;

    /**
     * Invoked on load error with {nativeEvent: {error}}
     */
    onError?: (error: { nativeEvent: any }) => void;

    /**
     * Invoked when load completes successfully
     */
    onLoad?: () => void;

    /**
     * Invoked when load either succeeds or fails
     */
    onLoadEnd?: () => void;

    /**
     * Invoked on load start
     */
    onLoadStart?: () => void;

    progressiveRenderingEnabled?: boolean;

    /**
     * Determines how to resize the image when the frame doesn't match the raw
     * image dimensions.
     *
     * 'cover': Scale the image uniformly (maintain the image's aspect ratio)
     * so that both dimensions (width and height) of the image will be equal
     * to or larger than the corresponding dimension of the view (minus padding).
     *
     * 'contain': Scale the image uniformly (maintain the image's aspect ratio)
     * so that both dimensions (width and height) of the image will be equal to
     * or less than the corresponding dimension of the view (minus padding).
     *
     * 'stretch': Scale width and height independently, This may change the
     * aspect ratio of the src.
     *
     * 'repeat': Repeat the image to cover the frame of the view.
     * The image will keep it's size and aspect ratio. (iOS only)
     *
     * 'center': Scale the image down so that it is completely visible,
     * if bigger than the area of the view.
     * The image will not be scaled up.
     */
    resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";

    /**
     * The mechanism that should be used to resize the image when the image's dimensions
     * differ from the image view's dimensions. Defaults to `auto`.
     *
     * - `auto`: Use heuristics to pick between `resize` and `scale`.
     *
     * - `resize`: A software operation which changes the encoded image in memory before it
     * gets decoded. This should be used instead of `scale` when the image is much larger
     * than the view.
     *
     * - `scale`: The image gets drawn downscaled or upscaled. Compared to `resize`, `scale` is
     * faster (usually hardware accelerated) and produces higher quality images. This
     * should be used if the image is smaller than the view. It should also be used if the
     * image is slightly bigger than the view.
     *
     * More details about `resize` and `scale` can be found at http://frescolib.org/docs/resizing-rotating.html.
     *
     * @platform android
     */
    resizeMethod?: "auto" | "resize" | "scale";

    /**
     * `uri` is a string representing the resource identifier for the image, which
     * could be an http address, a local file path, or a static image
     * resource (which should be wrapped in the `require('./path/to/image.png')` function).
     * This prop can also contain several remote `uri`, specified together with
     * their width and height. The native side will then choose the best `uri` to display
     * based on the measured size of the image container.
     */
    source: ImageURISource | ImageURISource[] | ImageRequireSource;

    /**
     * similarly to `source`, this property represents the resource used to render
     * the loading indicator for the image, displayed until image is ready to be
     * displayed, typically after when it got downloaded from network.
     */
    loadingIndicatorSource?: ImageURISource;

    /**
     *
     * Style
     */
    style?: StyleProp<ImageStyle>;

    /**
     * A unique identifier for this element to be used in UI Automation testing scripts.
     */
    testID?: string;
}

export interface ImageStatic extends NativeMethodsMixin, React.ComponentClass<ImageProperties> {
    resizeMode: ImageResizeMode;
    getSize(uri: string, success: (width: number, height: number) => void, failure: (error: any) => void): any;
    prefetch(url: string): any;
    abortPrefetch?(requestId: number): void;
    queryCache?(urls: string[]): Promise<Map<string, "memory" | "disk">>;
}

export interface ImageBackgroundProperties extends ImageProperties {
    style?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
}

export interface ImageBackgroundStatic extends NativeMethodsMixin, React.ComponentClass<ImageBackgroundProperties> {
    resizeMode: ImageResizeMode;
    getSize(uri: string, success: (width: number, height: number) => void, failure: (error: any) => void): any;
    prefetch(url: string): any;
    abortPrefetch?(requestId: number): void;
    queryCache?(urls: string[]): Promise<Map<string, "memory" | "disk">>;
}

export interface ViewToken {
    item: any;
    key: string;
    index: number | null;
    isViewable: boolean;
    section?: any;
}

export interface ViewabilityConfig {
    /**
     * Minimum amount of time (in milliseconds) that an item must be physically viewable before the
     * viewability callback will be fired. A high number means that scrolling through content without
     * stopping will not mark the content as viewable.
     */
    minimumViewTime?: number;

    /**
     * Percent of viewport that must be covered for a partially occluded item to count as
     * "viewable", 0-100. Fully visible items are always considered viewable. A value of 0 means
     * that a single pixel in the viewport makes the item viewable, and a value of 100 means that
     * an item must be either entirely visible or cover the entire viewport to count as viewable.
     */
    viewAreaCoveragePercentThreshold?: number;

    /**
     * Similar to `viewAreaPercentThreshold`, but considers the percent of the item that is visible,
     * rather than the fraction of the viewable area it covers.
     */
    itemVisiblePercentThreshold?: number;

    /**
     * Nothing is considered viewable until the user scrolls or `recordInteraction` is called after
     * render.
     */
    waitForInteraction?: boolean;
}

/**
 * @see https://facebook.github.io/react-native/docs/flatlist.html#props
 */

interface ListRenderItemInfo<ItemT> {
    item: ItemT;

    index: number;

    separators: {
        highlight: () => void;
        unhighlight: () => void;
        updateProps: (select: "leading" | "trailing", newProps: any) => void;
    };
}

type ListRenderItem<ItemT> = (info: ListRenderItemInfo<ItemT>) => React.ReactElement<any> | null;

export interface FlatListProperties<ItemT> extends VirtualizedListProperties<ItemT> {
    /**
     * Rendered in between each item, but not at the top or bottom
     */
    ItemSeparatorComponent?: React.ComponentType<any> | (() => React.ReactElement<any>) | null;

    /**
     * Rendered when the list is empty.
     */
    ListEmptyComponent?: React.ComponentClass<any> | React.ReactElement<any> | (() => React.ReactElement<any>) | null;

    /**
     * Rendered at the very end of the list.
     */
    ListFooterComponent?: React.ComponentClass<any> | React.ReactElement<any> | (() => React.ReactElement<any>) | null;

    /**
     * Rendered at the very beginning of the list.
     */
    ListHeaderComponent?: React.ComponentClass<any> | React.ReactElement<any> | (() => React.ReactElement<any>) | null;

    /**
     * Optional custom style for multi-item rows generated when numColumns > 1
     */
    columnWrapperStyle?: StyleProp<ViewStyle>;

    /**
     * When false tapping outside of the focused text input when the keyboard
     * is up dismisses the keyboard. When true the scroll view will not catch
     * taps and the keyboard will not dismiss automatically. The default value
     * is false.
     */
    keyboardShouldPersistTaps?: boolean | "always" | "never" | "handled";

    /**
     * For simplicity, data is just a plain array. If you want to use something else,
     * like an immutable list, use the underlying VirtualizedList directly.
     */
    data: ReadonlyArray<ItemT> | null;

    /**
     * A marker property for telling the list to re-render (since it implements PureComponent).
     * If any of your `renderItem`, Header, Footer, etc. functions depend on anything outside of the `data` prop,
     * stick it here and treat it immutably.
     */
    extraData?: any;

    /**
     * `getItemLayout` is an optional optimization that lets us skip measurement of dynamic
     * content if you know the height of items a priori. getItemLayout is the most efficient,
     * and is easy to use if you have fixed height items, for example:
     * ```
     * getItemLayout={(data, index) => (
     *   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
     * )}
     * ```
     * Remember to include separator length (height or width) in your offset calculation if you specify
     * `ItemSeparatorComponent`.
     */
    getItemLayout?: (data: Array<ItemT> | null, index: number) => { length: number; offset: number; index: number };

    /**
     * If true, renders items next to each other horizontally instead of stacked vertically.
     */
    horizontal?: boolean;

    /**
     * How many items to render in the initial batch
     */
    initialNumToRender?: number;

    /**
     * Instead of starting at the top with the first item, start at initialScrollIndex
     */
    initialScrollIndex?: number;

    /**
     * Used to extract a unique key for a given item at the specified index. Key is used for caching
     * and as the react key to track item re-ordering. The default extractor checks `item.key`, then
     * falls back to using the index, like React does.
     */
    keyExtractor?: (item: ItemT, index: number) => string;

    legacyImplementation?: boolean;

    /**
     * Multiple columns can only be rendered with `horizontal={false}` and will zig-zag like a `flexWrap` layout.
     * Items should all be the same height - masonry layouts are not supported.
     */
    numColumns?: number;

    /**
     * Called once when the scroll position gets within onEndReachedThreshold of the rendered content.
     */
    onEndReached?: ((info: { distanceFromEnd: number }) => void) | null;

    /**
     * How far from the end (in units of visible length of the list) the bottom edge of the
     * list must be from the end of the content to trigger the `onEndReached` callback.
     * Thus a value of 0.5 will trigger `onEndReached` when the end of the content is
     * within half the visible length of the list.
     */
    onEndReachedThreshold?: number | null;

    /**
     * If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality.
     * Make sure to also set the refreshing prop correctly.
     */
    onRefresh?: (() => void) | null;

    /**
     * Called when the viewability of rows changes, as defined by the `viewablePercentThreshold` prop.
     */
    onViewableItemsChanged?: ((info: { viewableItems: Array<ViewToken>; changed: Array<ViewToken> }) => void) | null;

    /**
     * Set this true while waiting for new data from a refresh.
     */
    refreshing?: boolean | null;

    /**
     * Takes an item from data and renders it into the list. Typical usage:
     * ```
     * _renderItem = ({item}) => (
     *   <TouchableOpacity onPress={() => this._onPress(item)}>
     *     <Text>{item.title}}</Text>
     *   <TouchableOpacity/>
     * );
     * ...
     * <FlatList data={[{title: 'Title Text', key: 'item1'}]} renderItem={this._renderItem} />
     * ```
     * Provides additional metadata like `index` if you need it.
     */
    renderItem: ListRenderItem<ItemT>;

    /**
     * See `ViewabilityHelper` for flow type and further documentation.
     */
    viewabilityConfig?: any;

    /**
     * Note: may have bugs (missing content) in some circumstances - use at your own risk.
     *
     * This may improve scroll performance for large lists.
     */
    removeClippedSubviews?: boolean;
}

export interface FlatListStatic<ItemT> extends React.ComponentClass<FlatListProperties<ItemT>> {
    /**
     * Exports some data, e.g. for perf investigations or analytics.
     */
    getMetrics: () => {
        contentLength: number;
        totalRows: number;
        renderedRows: number;
        visibleRows: number;
    };

    /**
     * Scrolls to the end of the content. May be janky without `getItemLayout` prop.
     */
    scrollToEnd: (params?: { animated?: boolean }) => void;

    /**
     * Scrolls to the item at a the specified index such that it is positioned in the viewable area
     * such that `viewPosition` 0 places it at the top, 1 at the bottom, and 0.5 centered in the middle.
     * May be janky without `getItemLayout` prop.
     */
    scrollToIndex: (params: { animated?: boolean; index: number; viewPosition?: number }) => void;

    /**
     * Requires linear scan through data - use `scrollToIndex` instead if possible.
     * May be janky without `getItemLayout` prop.
     */
    scrollToItem: (params: { animated?: boolean; item: ItemT; viewPosition?: number }) => void;

    /**
     * Scroll to a specific content pixel offset, like a normal `ScrollView`.
     */
    scrollToOffset: (params: { animated?: boolean; offset: number }) => void;

    /**
     * Tells the list an interaction has occured, which should trigger viewability calculations,
     * e.g. if waitForInteractions is true and the user has not scrolled. This is typically called
     * by taps on items or by navigation actions.
     */
    recordInteraction: () => void;
}

/**
 * @see https://facebook.github.io/react-native/docs/sectionlist.html
 */
export interface SectionBase<ItemT> {
    data: ItemT[];

    key?: string;

    renderItem?: ListRenderItem<ItemT>;

    ItemSeparatorComponent?: React.ComponentClass<any> | (() => React.ReactElement<any>) | null;

    keyExtractor?: (item: ItemT, index: number) => string;
}

export interface SectionListData<ItemT> extends SectionBase<ItemT> {
    [key: string]: any;
}

export interface SectionListProperties<ItemT> extends VirtualizedListProperties<ItemT> {
    /**
     * Rendered in between adjacent Items within each section.
     */
    ItemSeparatorComponent?: React.ComponentType<any> | null;

    /**
     * Rendered when the list is empty.
     */
    ListEmptyComponent?: React.ComponentClass<any> | React.ReactElement<any> | (() => React.ReactElement<any>) | null;

    /**
     * Rendered at the very end of the list.
     */
    ListFooterComponent?: React.ComponentClass<any> | (() => React.ReactElement<any>) | null;

    /**
     * Rendered at the very beginning of the list.
     */
    ListHeaderComponent?: React.ComponentClass<any> | (() => React.ReactElement<any>) | null;

    /**
     * Rendered in between each section.
     */
    SectionSeparatorComponent?: React.ComponentClass<any> | (() => React.ReactElement<any>) | null;

    /**
     * A marker property for telling the list to re-render (since it implements PureComponent).
     * If any of your `renderItem`, Header, Footer, etc. functions depend on anything outside of the `data` prop,
     * stick it here and treat it immutably.
     */
    extraData?: any;

    /**
     * `getItemLayout` is an optional optimization that lets us skip measurement of dynamic
     * content if you know the height of items a priori. getItemLayout is the most efficient,
     * and is easy to use if you have fixed height items, for example:
     * ```
     * getItemLayout={(data, index) => (
     *   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
     * )}
     * ```
     */
    getItemLayout?: (
        data: SectionListData<ItemT>[] | null,
        index: number
    ) => { length: number; offset: number; index: number };

    /**
     * How many items to render in the initial batch
     */
    initialNumToRender?: number;

    /**
     * Used to extract a unique key for a given item at the specified index. Key is used for caching
     * and as the react key to track item re-ordering. The default extractor checks `item.key`, then
     * falls back to using the index, like React does.
     */
    keyExtractor?: (item: ItemT, index: number) => string;

    /**
     * If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality.
     * Make sure to also set the refreshing prop correctly.
     */
    onRefresh?: (() => void) | null;

    /**
     * Set this true while waiting for new data from a refresh.
     */
    refreshing?: boolean | null;

    /**
     * Default renderer for every item in every section. Can be over-ridden on a per-section basis.
     */
    renderItem: ListRenderItem<ItemT>;

    /**
     * Rendered at the top of each section. Sticky headers are not yet supported.
     */
    renderSectionHeader?: (info: { section: SectionListData<ItemT> }) => React.ReactElement<any> | null;

    /**
     * Rendered at the bottom of each section.
     */
    renderSectionFooter?: (info: { section: SectionListData<ItemT> }) => React.ReactElement<any> | null;

    /**
     * An array of objects with data for each section.
     */
    sections: SectionListData<ItemT>[];

    /**
     * Render a custom scroll component, e.g. with a differently styled `RefreshControl`.
     */
    renderScrollComponent?: (props: ScrollViewProperties) => React.ReactElement<ScrollViewProperties>;

    /**
     * Note: may have bugs (missing content) in some circumstances - use at your own risk.
     *
     * This may improve scroll performance for large lists.
     */
    removeClippedSubviews?: boolean;

    /**
     * Makes section headers stick to the top of the screen until the next one pushes it off.
     * Only enabled by default on iOS because that is the platform standard there.
     */
    stickySectionHeadersEnabled?: boolean;
}

export interface SectionListStatic<SectionT> extends React.ComponentClass<SectionListProperties<SectionT>> {}

/**
 * @see https://facebook.github.io/react-native/docs/virtualizedlist.html#props
 */
export interface VirtualizedListProperties<ItemT> extends ScrollViewProperties {
    /**
     * Rendered when the list is empty. Can be a React Component Class, a render function, or
     * a rendered element.
     */
    ListEmptyComponent?: React.ComponentClass<any> | React.ReactElement<any> | (() => React.ReactElement<any>) | null;

    /**
     * Rendered at the bottom of all the items. Can be a React Component Class, a render function, or
     * a rendered element.
     */
    ListFooterComponent?: React.ComponentClass<any> | React.ReactElement<any> | (() => React.ReactElement<any>) | null;

    /**
     * Rendered at the top of all the items. Can be a React Component Class, a render function, or
     * a rendered element.
     */
    ListHeaderComponent?: React.ComponentClass<any> | React.ReactElement<any> | (() => React.ReactElement<any>) | null;

    /**
     * The default accessor functions assume this is an Array<{key: string}> but you can override
     * getItem, getItemCount, and keyExtractor to handle any type of index-based data.
     */
    data?: any;

    /**
     * `debug` will turn on extra logging and visual overlays to aid with debugging both usage and
     * implementation, but with a significant perf hit.
     */
    debug?: boolean;

    /**
     * DEPRECATED: Virtualization provides significant performance and memory optimizations, but fully
     * unmounts react instances that are outside of the render window. You should only need to disable
     * this for debugging purposes.
     */
    disableVirtualization?: boolean;

    /**
     * A marker property for telling the list to re-render (since it implements `PureComponent`). If
     * any of your `renderItem`, Header, Footer, etc. functions depend on anything outside of the
     * `data` prop, stick it here and treat it immutably.
     */
    extraData?: any;

    /**
     * A generic accessor for extracting an item from any sort of data blob.
     */
    getItem?: (data: any, index: number) => ItemT;

    /**
     * Determines how many items are in the data blob.
     */
    getItemCount?: (data: any) => number;

    getItemLayout?: (
        data: any,
        index: number
    ) => {
        length: number;
        offset: number;
        index: number;
    };

    horizontal?: boolean;

    /**
     * How many items to render in the initial batch. This should be enough to fill the screen but not
     * much more. Note these items will never be unmounted as part of the windowed rendering in order
     * to improve perceived performance of scroll-to-top actions.
     */
    initialNumToRender?: number;

    /**
     * Instead of starting at the top with the first item, start at `initialScrollIndex`. This
     * disables the "scroll to top" optimization that keeps the first `initialNumToRender` items
     * always rendered and immediately renders the items starting at this initial index. Requires
     * `getItemLayout` to be implemented.
     */
    initialScrollIndex?: number;

    /**
     * Reverses the direction of scroll. Uses scale transforms of -1.
     */
    inverted?: boolean;

    keyExtractor?: (item: ItemT, index: number) => string;

    /**
     * The maximum number of items to render in each incremental render batch. The more rendered at
     * once, the better the fill rate, but responsiveness my suffer because rendering content may
     * interfere with responding to button taps or other interactions.
     */
    maxToRenderPerBatch?: number;

    onEndReached?: ((info: { distanceFromEnd: number }) => void) | null;

    onEndReachedThreshold?: number | null;

    onLayout?: (event: LayoutChangeEvent) => void;

    /**
     * If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make
     * sure to also set the `refreshing` prop correctly.
     */
    onRefresh?: (() => void) | null;

    /**
     * Called when the viewability of rows changes, as defined by the
     * `viewabilityConfig` prop.
     */
    onViewableItemsChanged?: ((info: { viewableItems: Array<ViewToken>; changed: Array<ViewToken> }) => void) | null;

    /**
     * Set this when offset is needed for the loading indicator to show correctly.
     * @platform android
     */
    progressViewOffset?: number;

    /**
     * Set this true while waiting for new data from a refresh.
     */
    refreshing?: boolean | null;

    /**
     * Note: may have bugs (missing content) in some circumstances - use at your own risk.
     *
     * This may improve scroll performance for large lists.
     */
    removeClippedSubviews?: boolean;

    renderItem: ListRenderItem<ItemT>;

    /**
     * Render a custom scroll component, e.g. with a differently styled `RefreshControl`.
     */
    renderScrollComponent?: (props: ScrollViewProperties) => React.ReactElement<ScrollViewProperties>;

    /**
     * Amount of time between low-pri item render batches, e.g. for rendering items quite a ways off
     * screen. Similar fill rate/responsiveness tradeoff as `maxToRenderPerBatch`.
     */
    updateCellsBatchingPeriod?: number;

    viewabilityConfig?: ViewabilityConfig;

    /**
     * Determines the maximum number of items rendered outside of the visible area, in units of
     * visible lengths. So if your list fills the screen, then `windowSize={21}` (the default) will
     * render the visible screen area plus up to 10 screens above and 10 below the viewport. Reducing
     * this number will reduce memory consumption and may improve performance, but will increase the
     * chance that fast scrolling may reveal momentary blank areas of unrendered content.
     */
    windowSize?: number;
}

/**
 * @see https://facebook.github.io/react-native/docs/listview.html#props
 */
export interface ListViewProperties extends ScrollViewProperties {
    /**
     * An instance of [ListView.DataSource](docs/listviewdatasource.html) to use
     */
    dataSource: ListViewDataSource;

    /**
     * Flag indicating whether empty section headers should be rendered.
     * In the future release empty section headers will be rendered by
     * default, and the flag will be deprecated. If empty sections are not
     * desired to be rendered their indices should be excluded from
     * sectionID object.
     */
    enableEmptySections?: boolean;

    /**
     * How many rows to render on initial component mount.  Use this to make
     * it so that the first screen worth of data apears at one time instead of
     * over the course of multiple frames.
     */
    initialListSize?: number;

    /**
     * (visibleRows, changedRows) => void
     *
     * Called when the set of visible rows changes.  `visibleRows` maps
     * { sectionID: { rowID: true }} for all the visible rows, and
     * `changedRows` maps { sectionID: { rowID: true | false }} for the rows
     * that have changed their visibility, with true indicating visible, and
     * false indicating the view has moved out of view.
     */
    onChangeVisibleRows?: (
        visibleRows: Array<{ [sectionId: string]: { [rowID: string]: boolean } }>,
        changedRows: Array<{ [sectionId: string]: { [rowID: string]: boolean } }>
    ) => void;

    /**
     * Called when all rows have been rendered and the list has been scrolled
     * to within onEndReachedThreshold of the bottom.  The native scroll
     * event is provided.
     */
    onEndReached?: () => void;

    /**
     * Threshold in pixels for onEndReached.
     */
    onEndReachedThreshold?: number;

    /**
     * Number of rows to render per event loop.
     */
    pageSize?: number;

    /**
     * A performance optimization for improving scroll perf of
     * large lists, used in conjunction with overflow: 'hidden' on the row
     * containers.  Use at your own risk.
     */
    removeClippedSubviews?: boolean;

    /**
     * () => renderable
     *
     * The header and footer are always rendered (if these props are provided)
     * on every render pass.  If they are expensive to re-render, wrap them
     * in StaticContainer or other mechanism as appropriate.  Footer is always
     * at the bottom of the list, and header at the top, on every render pass.
     */
    renderFooter?: () => React.ReactElement<any>;

    /**
     * () => renderable
     *
     * The header and footer are always rendered (if these props are provided)
     * on every render pass.  If they are expensive to re-render, wrap them
     * in StaticContainer or other mechanism as appropriate.  Footer is always
     * at the bottom of the list, and header at the top, on every render pass.
     */
    renderHeader?: () => React.ReactElement<any>;

    /**
     * (rowData, sectionID, rowID) => renderable
     * Takes a data entry from the data source and its ids and should return
     * a renderable component to be rendered as the row.  By default the data
     * is exactly what was put into the data source, but it's also possible to
     * provide custom extractors.
     */
    renderRow: (
        rowData: any,
        sectionID: string | number,
        rowID: string | number,
        highlightRow?: boolean
    ) => React.ReactElement<any>;

    /**
     * A function that returns the scrollable component in which the list rows are rendered.
     * Defaults to returning a ScrollView with the given props.
     */
    renderScrollComponent?: (props: ScrollViewProperties) => React.ReactElement<ScrollViewProperties>;

    /**
     * (sectionData, sectionID) => renderable
     *
     * If provided, a sticky header is rendered for this section.  The sticky
     * behavior means that it will scroll with the content at the top of the
     * section until it reaches the top of the screen, at which point it will
     * stick to the top until it is pushed off the screen by the next section
     * header.
     */
    renderSectionHeader?: (sectionData: any, sectionId: string | number) => React.ReactElement<any>;

    /**
     * (sectionID, rowID, adjacentRowHighlighted) => renderable
     * If provided, a renderable component to be rendered as the separator below each row
     * but not the last row if there is a section header below.
     * Take a sectionID and rowID of the row above and whether its adjacent row is highlighted.
     */
    renderSeparator?: (
        sectionID: string | number,
        rowID: string | number,
        adjacentRowHighlighted?: boolean
    ) => React.ReactElement<any>;

    /**
     * How early to start rendering rows before they come on screen, in
     * pixels.
     */
    scrollRenderAheadDistance?: number;

    /**
     * An array of child indices determining which children get docked to the
     * top of the screen when scrolling. For example, passing
     * `stickyHeaderIndices={[0]}` will cause the first child to be fixed to the
     * top of the scroll view. This property is not supported in conjunction
     * with `horizontal={true}`.
     * @platform ios
     */
    stickyHeaderIndices?: number[];

    /**
     * Makes the sections headers sticky. The sticky behavior means that it will scroll with the
     * content at the top of the section until it reaches the top of the screen, at which point it
     * will stick to the top until it is pushed off the screen by the next section header. This
     * property is not supported in conjunction with `horizontal={true}`. Only enabled by default
     * on iOS because of typical platform standards.
     */
    stickySectionHeadersEnabled?: boolean;
}

interface TimerMixin {
    setTimeout: typeof setTimeout;
    clearTimeout: typeof clearTimeout;
    setInterval: typeof setInterval;
    clearInterval: typeof clearInterval;
    setImmediate: typeof setImmediate;
    clearImmediate: typeof clearImmediate;
    requestAnimationFrame: typeof requestAnimationFrame;
    cancelAnimationFrame: typeof cancelAnimationFrame;
}

export interface ListViewStatic extends ScrollResponderMixin, TimerMixin, React.ComponentClass<ListViewProperties> {
    DataSource: ListViewDataSource;

    /**
     * Exports some data, e.g. for perf investigations or analytics.
     */
    getMetrics: () => {
        contentLength: number;
        totalRows: number;
        renderedRows: number;
        visibleRows: number;
    };

    /**
     * Provides a handle to the underlying scroll responder.
     */
    getScrollResponder: () => any;

    /**
     * Scrolls to a given x, y offset, either immediately or with a smooth animation.
     *
     * See `ScrollView#scrollTo`.
     */
    scrollTo: (y?: number | { x?: number; y?: number; animated?: boolean }, x?: number, animated?: boolean) => void;
}

export interface MapViewAnnotation {
    latitude: number;
    longitude: number;
    animateDrop?: boolean;
    draggable?: boolean;
    onDragStateChange?: () => any;
    onFocus?: () => any;
    onBlur?: () => any;
    title?: string;
    subtitle?: string;
    leftCalloutView?: React.ReactElement<any>;
    rightCalloutView?: React.ReactElement<any>;
    detailCalloutView?: React.ReactElement<any>;
    tintColor?: string;
    image?: ImageURISource;
    view?: React.ReactElement<any>;
    hasLeftCallout?: boolean;
    hasRightCallout?: boolean;
    onLeftCalloutPress?: () => void;
    onRightCalloutPress?: () => void;
    id?: string;
}

export interface MapViewRegion {
    latitude: number;
    longitude: number;
    latitudeDelta?: number;
    longitudeDelta?: number;
}

export interface MapViewOverlay {
    coordinates: ({ latitude: number; longitude: number })[];
    lineWidth?: number;
    strokeColor?: string;
    fillColor?: string;
    id?: string;
}

export interface MapViewProperties extends ViewProperties {
    /**
     * If false points of interest won't be displayed on the map.
     * Default value is true.
     */
    showsPointsOfInterest?: boolean;

    /**
     * Map annotations with title/subtitle.
     */
    annotations?: MapViewAnnotation[];

    /**
     * If true the map will follow the user's location whenever it changes.
     * Note that this has no effect unless showsUserLocation is enabled.
     * Default value is true.
     */
    followUserLocation?: boolean;

    /**
     * Insets for the map's legal label, originally at bottom left of the map. See EdgeInsetsPropType.js for more information.
     */
    legalLabelInsets?: Insets;

    /**
     * The map type to be displayed.
     *     standard: standard road map (default)
     *     satellite: satellite view
     *     hybrid: satellite view with roads and points of interest overlayed
     *
     * enum('standard', 'satellite', 'hybrid')
     */
    mapType?: "standard" | "satellite" | "hybrid";

    /**
     * Maximum size of area that can be displayed.
     */
    maxDelta?: number;

    /**
     * Minimum size of area that can be displayed.
     */
    minDelta?: number;

    /**
     * Map overlays
     */
    overlays?: MapViewOverlay[];

    /**
     * If false compass won't be displayed on the map.
     * Default value is true.
     */
    showsCompass?: boolean;

    /**
     * Callback that is called once, when the user taps an annotation.
     */
    onAnnotationPress?: () => void;

    /**
     * Callback that is called continuously when the user is dragging the map.
     */
    onRegionChange?: (region: MapViewRegion) => void;

    /**
     * Callback that is called once, when the user is done moving the map.
     */
    onRegionChangeComplete?: (region: MapViewRegion) => void;

    /**
     * When this property is set to true and a valid camera is associated with the map,
     * the camera’s pitch angle is used to tilt the plane of the map.
     *
     * When this property is set to false, the camera’s pitch angle is ignored and
     * the map is always displayed as if the user is looking straight down onto it.
     */
    pitchEnabled?: boolean;

    /**
     * The region to be displayed by the map.
     * The region is defined by the center coordinates and the span of coordinates to display.
     */
    region?: MapViewRegion;

    /**
     * When this property is set to true and a valid camera is associated with the map,
     * the camera’s heading angle is used to rotate the plane of the map around its center point.
     *
     * When this property is set to false, the camera’s heading angle is ignored and the map is always oriented
     * so that true north is situated at the top of the map view
     */
    rotateEnabled?: boolean;

    /**
     * If false the user won't be able to change the map region being displayed.
     * Default value is true.
     */
    scrollEnabled?: boolean;

    /**
     * If true the app will ask for the user's location and focus on it.
     * Default value is false.
     *
     * NOTE: You need to add NSLocationWhenInUseUsageDescription key in Info.plist to enable geolocation,
     * otherwise it is going to fail silently!
     */
    showsUserLocation?: boolean;

    /**
     * Used to style and layout the MapView.
     * See StyleSheet.js and ViewStylePropTypes.js for more info.
     */
    style?: StyleProp<ViewStyle>;

    /**
     * If false the user won't be able to pinch/zoom the map.
     * Default value is true.
     */
    zoomEnabled?: boolean;
}

/**
 * @see https://facebook.github.io/react-native/docs/mapview.html#content
 */
export interface MapViewStatic extends NativeMethodsMixin, React.ComponentClass<MapViewProperties> {
    PinColors: {
        RED: string;
        GREEN: string;
        PURPLE: string;
    };
}

interface MaskedViewProperties extends ViewProperties {
    maskElement: React.ReactElement<any>;
}

/**
 * @see https://facebook.github.io/react-native/docs/maskedviewios.html
 */
export interface MaskedViewStatic extends NativeMethodsMixin, React.ComponentClass<MaskedViewProperties> {}

export interface ModalProperties {
    // Only `animated` is documented. The JS code says `animated` is
    // deprecated and `animationType` is preferred.
    animated?: boolean;
    /**
     * The `animationType` prop controls how the modal animates.
     *
     * - `slide` slides in from the bottom
     * - `fade` fades into view
     * - `none` appears without an animation
     */
    animationType?: "none" | "slide" | "fade";
    /**
     * The `transparent` prop determines whether your modal will fill the entire view.
     * Setting this to `true` will render the modal over a transparent background.
     */
    transparent?: boolean;
    /**
     * The `visible` prop determines whether your modal is visible.
     */
    visible?: boolean;
    /**
     * The `onRequestClose` prop allows passing a function that will be called once the modal has been dismissed.
     * _On the Android platform, this is a required function._
     */
    onRequestClose?: () => void;
    /**
     * The `onShow` prop allows passing a function that will be called once the modal has been shown.
     */
    onShow?: (event: NativeSyntheticEvent<any>) => void;
    /**
     * The `supportedOrientations` prop allows the modal to be rotated to any of the specified orientations.
     * On iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field.
     * @platform ios
     */
    supportedOrientations?: (
        | "portrait"
        | "portrait-upside-down"
        | "landscape"
        | "landscape-left"
        | "landscape-right")[];
    /**
     * The `onOrientationChange` callback is called when the orientation changes while the modal is being displayed.
     * The orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation.
     * @platform ios
     */
    onOrientationChange?: () => void;
}

export interface ModalStatic extends React.ComponentClass<ModalProperties> {}

/**
 * @see https://github.com/facebook/react-native/blob/0.34-stable\Libraries\Components\Touchable\Touchable.js
 */
interface TouchableMixin {
    /**
     * Invoked when the item should be highlighted. Mixers should implement this
     * to visually distinguish the `VisualRect` so that the user knows that
     * releasing a touch will result in a "selection" (analog to click).
     */
    touchableHandleActivePressIn(e: GestureResponderEvent): void;

    /**
     * Invoked when the item is "active" (in that it is still eligible to become
     * a "select") but the touch has left the `PressRect`. Usually the mixer will
     * want to unhighlight the `VisualRect`. If the user (while pressing) moves
     * back into the `PressRect` `touchableHandleActivePressIn` will be invoked
     * again and the mixer should probably highlight the `VisualRect` again. This
     * event will not fire on an `touchEnd/mouseUp` event, only move events while
     * the user is depressing the mouse/touch.
     */
    touchableHandleActivePressOut(e: GestureResponderEvent): void;

    /**
     * Invoked when the item is "selected" - meaning the interaction ended by
     * letting up while the item was either in the state
     * `RESPONDER_ACTIVE_PRESS_IN` or `RESPONDER_INACTIVE_PRESS_IN`.
     */
    touchableHandlePress(e: GestureResponderEvent): void;

    /**
     * Invoked when the item is long pressed - meaning the interaction ended by
     * letting up while the item was in `RESPONDER_ACTIVE_LONG_PRESS_IN`. If
     * `touchableHandleLongPress` is *not* provided, `touchableHandlePress` will
     * be called as it normally is. If `touchableHandleLongPress` is provided, by
     * default any `touchableHandlePress` callback will not be invoked. To
     * override this default behavior, override `touchableLongPressCancelsPress`
     * to return false. As a result, `touchableHandlePress` will be called when
     * lifting up, even if `touchableHandleLongPress` has also been called.
     */
    touchableHandleLongPress(e: GestureResponderEvent): void;

    /**
     * Returns the amount to extend the `HitRect` into the `PressRect`. Positive
     * numbers mean the size expands outwards.
     */
    touchableGetPressRectOffset(): Insets;

    /**
     * Returns the number of millis to wait before triggering a highlight.
     */
    touchableGetHighlightDelayMS(): number;

    // These methods are undocumented but still being used by TouchableMixin internals
    touchableGetLongPressDelayMS(): number;
    touchableGetPressOutDelayMS(): number;
    touchableGetHitSlop(): Insets;
}

/**
 * @see https://facebook.github.io/react-native/docs/touchablewithoutfeedback.html#props
 */
export interface TouchableWithoutFeedbackProperties extends AccessibilityProperties {
    /**
     * Delay in ms, from onPressIn, before onLongPress is called.
     */
    delayLongPress?: number;

    /**
     * Delay in ms, from the start of the touch, before onPressIn is called.
     */
    delayPressIn?: number;

    /**
     * Delay in ms, from the release of the touch, before onPressOut is called.
     */
    delayPressOut?: number;

    /**
     * If true, disable all interactions for this component.
     */
    disabled?: boolean;

    /**
     * This defines how far your touch can start away from the button.
     * This is added to pressRetentionOffset when moving off of the button.
     * NOTE The touch area never extends past the parent view bounds and
     * the Z-index of sibling views always takes precedence if a touch hits
     * two overlapping views.
     */
    hitSlop?: Insets;

    /**
     * Invoked on mount and layout changes with
     * {nativeEvent: {layout: {x, y, width, height}}}
     */
    onLayout?: (event: LayoutChangeEvent) => void;

    onLongPress?: (event: GestureResponderEvent) => void;

    /**
     * Called when the touch is released,
     * but not if cancelled (e.g. by a scroll that steals the responder lock).
     */
    onPress?: (event: GestureResponderEvent) => void;

    onPressIn?: (event: GestureResponderEvent) => void;

    onPressOut?: (event: GestureResponderEvent) => void;

    /**
     * //FIXME: not in doc but available in examples
     */
    style?: StyleProp<ViewStyle>;

    /**
     * When the scroll view is disabled, this defines how far your
     * touch may move off of the button, before deactivating the button.
     * Once deactivated, try moving it back and you'll see that the button
     * is once again reactivated! Move it back and forth several times
     * while the scroll view is disabled. Ensure you pass in a constant
     * to reduce memory allocations.
     */
    pressRetentionOffset?: Insets;

    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string;
}

export interface TouchableWithoutFeedbackProps extends TouchableWithoutFeedbackProperties {}

/**
 * Do not use unless you have a very good reason.
 * All the elements that respond to press should have a visual feedback when touched.
 * This is one of the primary reason a "web" app doesn't feel "native".
 *
 * @see https://facebook.github.io/react-native/docs/touchablewithoutfeedback.html
 */
export interface TouchableWithoutFeedbackStatic
    extends TimerMixin,
        TouchableMixin,
        React.ClassicComponentClass<TouchableWithoutFeedbackProps> {}

/**
 * @see https://facebook.github.io/react-native/docs/touchablehighlight.html#props
 */
export interface TouchableHighlightProperties extends TouchableWithoutFeedbackProperties {
    /**
     * Determines what the opacity of the wrapped view should be when touch is active.
     */
    activeOpacity?: number;

    /**
     *
     * Called immediately after the underlay is hidden
     */
    onHideUnderlay?: () => void;

    /**
     * Called immediately after the underlay is shown
     */
    onShowUnderlay?: () => void;

    /**
     * @see https://facebook.github.io/react-native/docs/view.html#style
     */
    style?: StyleProp<ViewStyle>;

    /**
     * The color of the underlay that will show through when the touch is active.
     */
    underlayColor?: string;
}

/**
 * A wrapper for making views respond properly to touches.
 * On press down, the opacity of the wrapped view is decreased,
 * which allows the underlay color to show through, darkening or tinting the view.
 * The underlay comes from adding a view to the view hierarchy,
 * which can sometimes cause unwanted visual artifacts if not used correctly,
 * for example if the backgroundColor of the wrapped view isn't explicitly set to an opaque color.
 *
 * NOTE: TouchableHighlight supports only one child
 * If you wish to have several child components, wrap them in a View.
 *
 * @see https://facebook.github.io/react-native/docs/touchablehighlight.html
 */
export interface TouchableHighlightStatic
    extends NativeMethodsMixin,
        TimerMixin,
        TouchableMixin,
        React.ClassicComponentClass<TouchableHighlightProperties> {}

/**
 * @see https://facebook.github.io/react-native/docs/touchableopacity.html#props
 */
export interface TouchableOpacityProperties extends TouchableWithoutFeedbackProperties {
    /**
     * Determines what the opacity of the wrapped view should be when touch is active.
     * Defaults to 0.2
     */
    activeOpacity?: number;
}

/**
 * A wrapper for making views respond properly to touches.
 * On press down, the opacity of the wrapped view is decreased, dimming it.
 * This is done without actually changing the view hierarchy,
 * and in general is easy to add to an app without weird side-effects.
 *
 * @see https://facebook.github.io/react-native/docs/touchableopacity.html
 */
export interface TouchableOpacityStatic
    extends TimerMixin,
        TouchableMixin,
        NativeMethodsMixin,
        React.ClassicComponentClass<TouchableOpacityProperties> {
    /**
     * Animate the touchable to a new opacity.
     */
    setOpacityTo: (value: number) => void;
}

interface BaseBackgroundPropType {
    type: string;
}

interface RippleBackgroundPropType extends BaseBackgroundPropType {
    type: "RippleAndroid";
    color?: number;
    borderless?: boolean;
}

interface ThemeAttributeBackgroundPropType extends BaseBackgroundPropType {
    type: "ThemeAttrAndroid";
    attribute: string;
}

type BackgroundPropType = RippleBackgroundPropType | ThemeAttributeBackgroundPropType;

/**
 * @see https://facebook.github.io/react-native/docs/touchableopacity.html#props
 */
export interface TouchableNativeFeedbackProperties extends TouchableWithoutFeedbackProperties {
    /**
     * Determines the type of background drawable that's going to be used to display feedback.
     * It takes an object with type property and extra data depending on the type.
     * It's recommended to use one of the following static methods to generate that dictionary:
     *      1) TouchableNativeFeedback.SelectableBackground() - will create object that represents android theme's
     *         default background for selectable elements (?android:attr/selectableItemBackground)
     *      2) TouchableNativeFeedback.SelectableBackgroundBorderless() - will create object that represent android
     *         theme's default background for borderless selectable elements
     *         (?android:attr/selectableItemBackgroundBorderless). Available on android API level 21+
     *      3) TouchableNativeFeedback.Ripple(color, borderless) - will create object that represents ripple drawable
     *         with specified color (as a string). If property borderless evaluates to true the ripple will render
     *         outside of the view bounds (see native actionbar buttons as an example of that behavior). This background
     *         type is available on Android API level 21+
     */
    background?: BackgroundPropType;
    useForeground?: boolean;
}

/**
 * A wrapper for making views respond properly to touches (Android only).
 * On Android this component uses native state drawable to display touch feedback.
 * At the moment it only supports having a single View instance as a child node,
 * as it's implemented by replacing that View with another instance of RCTView node with some additional properties set.
 *
 * Background drawable of native feedback touchable can be customized with background property.
 *
 * @see https://facebook.github.io/react-native/docs/touchablenativefeedback.html#content
 */
export interface TouchableNativeFeedbackStatic
    extends TouchableMixin,
        React.ClassicComponentClass<TouchableNativeFeedbackProperties> {
    /**
     * Creates an object that represents android theme's default background for
     * selectable elements (?android:attr/selectableItemBackground).
     */
    SelectableBackground(): ThemeAttributeBackgroundPropType;

    /**
     * Creates an object that represent android theme's default background for borderless
     * selectable elements (?android:attr/selectableItemBackgroundBorderless).
     * Available on android API level 21+.
     */
    SelectableBackgroundBorderless(): ThemeAttributeBackgroundPropType;

    /**
     * Creates an object that represents ripple drawable with specified color (as a
     * string). If property `borderless` evaluates to true the ripple will
     * render outside of the view bounds (see native actionbar buttons as an
     * example of that behavior). This background type is available on Android
     * API level 21+.
     *
     * @param color The ripple color
     * @param borderless If the ripple can render outside it's bounds
     */
    Ripple(color: string, borderless?: boolean): RippleBackgroundPropType;
}

export interface Route {
    component?: React.ComponentType<any>;
    id?: string;
    title?: string;
    passProps?: Object;

    //anything else
    [key: string]: any;

    //Commonly found properties
    backButtonTitle?: string;
    content?: string;
    message?: string;
    index?: number;
    onRightButtonPress?: () => void;
    rightButtonTitle?: string;
    wrapperStyle?: any;
}

interface InteractionMixin {
    createInteractionHandle(): number;
    clearInteractionHandle(clearHandle: number): void;
    /**
     * Schedule work for after all interactions have completed.
     *
     */
    runAfterInteractions(callback: () => any): void;
}

interface SubscribableMixin {
    /**
     * Special form of calling `addListener` that *guarantees* that a
     * subscription *must* be tied to a component instance, and therefore will
     * be cleaned up when the component is unmounted. It is impossible to create
     * the subscription and pass it in - this method must be the one to create
     * the subscription and therefore can guarantee it is retained in a way that
     * will be cleaned up.
     *
     * @param eventEmitter emitter to subscribe to.
     * @param eventType Type of event to listen to.
     * @param listener Function to invoke when event occurs.
     * @param context Object to use as listener context.
     */
    addListenerOn(eventEmitter: any, eventType: string, listener: () => any, context: any): void;
}

// @see https://github.com/facebook/react-native/blob/0.34-stable\Libraries\StyleSheet\StyleSheetTypes.js
export namespace StyleSheet {
    type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

    /**
     * Creates a StyleSheet style reference from the given object.
     */
    export function create<T extends NamedStyles<T>>(styles: T): { [P in keyof T]: RegisteredStyle<T[P]> };

    /**
     * Flattens an array of style objects, into one aggregated style object.
     * Alternatively, this method can be used to lookup IDs, returned by
     * StyleSheet.register.
     *
     * > **NOTE**: Exercise caution as abusing this can tax you in terms of
     * > optimizations.
     * >
     * > IDs enable optimizations through the bridge and memory in general. Refering
     * > to style objects directly will deprive you of these optimizations.
     *
     * Example:
     * ```
     * var styles = StyleSheet.create({
     *   listItem: {
     *     flex: 1,
     *     fontSize: 16,
     *     color: 'white'
     *   },
     *   selectedListItem: {
     *     color: 'green'
     *   }
     * });
     *
     * StyleSheet.flatten([styles.listItem, styles.selectedListItem])
     * // returns { flex: 1, fontSize: 16, color: 'green' }
     * ```
     * Alternative use:
     * ```
     * StyleSheet.flatten(styles.listItem);
     * // return { flex: 1, fontSize: 16, color: 'white' }
     * // Simply styles.listItem would return its ID (number)
     * ```
     * This method internally uses `StyleSheetRegistry.getStyleByID(style)`
     * to resolve style objects represented by IDs. Thus, an array of style
     * objects (instances of StyleSheet.create), are individually resolved to,
     * their respective objects, merged as one and then returned. This also explains
     * the alternative use.
     */
    export function flatten<T>(style?: RegisteredStyle<T>): T;
    export function flatten(style?: StyleProp<ViewStyle>): ViewStyle;
    export function flatten(style?: StyleProp<TextStyle>): TextStyle;
    export function flatten(style?: StyleProp<ImageStyle>): ImageStyle;

    /**
     * This is defined as the width of a thin line on the platform. It can be
     * used as the thickness of a border or division between two elements.
     * Example:
     * ```
     *   {
     *     borderBottomColor: '#bbb',
     *     borderBottomWidth: StyleSheet.hairlineWidth
     *   }
     * ```
     *
     * This constant will always be a round number of pixels (so a line defined
     * by it look crisp) and will try to match the standard width of a thin line
     * on the underlying platform. However, you should not rely on it being a
     * constant size, because on different platforms and screen densities its
     * value may be calculated differently.
     */
    export var hairlineWidth: number;

    interface AbsoluteFillStyle {
        position: "absolute";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    /**
     * Sometimes you may want `absoluteFill` but with a couple tweaks - `absoluteFillObject` can be
     * used to create a customized entry in a `StyleSheet`, e.g.:
     *
     *   const styles = StyleSheet.create({
     *     wrapper: {
     *       ...StyleSheet.absoluteFillObject,
     *       top: 10,
     *       backgroundColor: 'transparent',
     *     },
     *   });
     */
    export var absoluteFillObject: AbsoluteFillStyle;

    /**
     * A very common pattern is to create overlays with position absolute and zero positioning,
     * so `absoluteFill` can be used for convenience and to reduce duplication of these repeated
     * styles.
     */
    export var absoluteFill: RegisteredStyle<AbsoluteFillStyle>;
}

export interface RelayProfiler {
    attachProfileHandler(name: string, handler: (name: string, state?: any) => () => void): void;

    attachAggregateHandler(name: string, handler: (name: string, callback: () => void) => void): void;
}

export interface SystraceStatic {
    setEnabled(enabled: boolean): void;

    /**
     * beginEvent/endEvent for starting and then ending a profile within the same call stack frame
     **/
    beginEvent(profileName?: any, args?: any): void;
    endEvent(): void;

    /**
     * beginAsyncEvent/endAsyncEvent for starting and then ending a profile where the end can either
     * occur on another thread or out of the current stack frame, eg await
     * the returned cookie variable should be used as input into the endAsyncEvent call to end the profile
     **/
    beginAsyncEvent(profileName?: any): any;
    endAsyncEvent(profileName?: any, cookie?: any): void;

    /**
     * counterEvent registers the value to the profileName on the systrace timeline
     **/
    counterEvent(profileName?: any, value?: any): void;

    /**
     * Relay profiles use await calls, so likely occur out of current stack frame
     * therefore async variant of profiling is used
     **/
    attachToRelayProfiler(relayProfiler: RelayProfiler): void;

    /* This is not called by default due to perf overhead but it's useful
        if you want to find traces which spend too much time in JSON. */
    swizzleJSON(): void;

    /**
     * Measures multiple methods of a class. For example, you can do:
     * Systrace.measureMethods(JSON, 'JSON', ['parse', 'stringify']);
     *
     * @param methodNames Map from method names to method display names.
     */
    measureMethods(object: any, objectName: string, methodNames: Array<string>): void;

    /**
     * Returns an profiled version of the input function. For example, you can:
     * JSON.parse = Systrace.measure('JSON', 'parse', JSON.parse);
     *
     * @return replacement function
     */
    measure<T extends Function>(objName: string, fnName: string, func: T): T;
}

/**
 * //FIXME: Could not find docs. Inferred from examples and jscode : ListViewDataSource.js
 */
export interface DataSourceAssetCallback {
    rowHasChanged?: (r1: any, r2: any) => boolean;
    sectionHeaderHasChanged?: (h1: any, h2: any) => boolean;
    getRowData?: (dataBlob: any, sectionID: number | string, rowID: number | string) => any;
    getSectionHeaderData?: (dataBlob: any, sectionID: number | string) => any;
}

/**
 * Provides efficient data processing and access to the
 * `ListView` component.  A `ListViewDataSource` is created with functions for
 * extracting data from the input blob, and comparing elements (with default
 * implementations for convenience).  The input blob can be as simple as an
 * array of strings, or an object with rows nested inside section objects.
 *
 * To update the data in the datasource, use `cloneWithRows` (or
 * `cloneWithRowsAndSections` if you care about sections).  The data in the
 * data source is immutable, so you can't modify it directly.  The clone methods
 * suck in the new data and compute a diff for each row so ListView knows
 * whether to re-render it or not.
 */
export interface ListViewDataSource {
    /**
     * You can provide custom extraction and `hasChanged` functions for section
     * headers and rows.  If absent, data will be extracted with the
     * `defaultGetRowData` and `defaultGetSectionHeaderData` functions.
     *
     * The default extractor expects data of one of the following forms:
     *
     *      { sectionID_1: { rowID_1: <rowData1>, ... }, ... }
     *
     *    or
     *
     *      { sectionID_1: [ <rowData1>, <rowData2>, ... ], ... }
     *
     *    or
     *
     *      [ [ <rowData1>, <rowData2>, ... ], ... ]
     *
     * The constructor takes in a params argument that can contain any of the
     * following:
     *
     * - getRowData(dataBlob, sectionID, rowID);
     * - getSectionHeaderData(dataBlob, sectionID);
     * - rowHasChanged(prevRowData, nextRowData);
     * - sectionHeaderHasChanged(prevSectionData, nextSectionData);
     */
    new (onAsset: DataSourceAssetCallback): ListViewDataSource;

    /**
     * Clones this `ListViewDataSource` with the specified `dataBlob` and
     * `rowIdentities`. The `dataBlob` is just an aribitrary blob of data. At
     * construction an extractor to get the interesting informatoin was defined
     * (or the default was used).
     *
     * The `rowIdentities` is is a 2D array of identifiers for rows.
     * ie. [['a1', 'a2'], ['b1', 'b2', 'b3'], ...].  If not provided, it's
     * assumed that the keys of the section data are the row identities.
     *
     * Note: This function does NOT clone the data in this data source. It simply
     * passes the functions defined at construction to a new data source with
     * the data specified. If you wish to maintain the existing data you must
     * handle merging of old and new data separately and then pass that into
     * this function as the `dataBlob`.
     */
    cloneWithRows(
        dataBlob: Array<any> | { [key: string]: any },
        rowIdentities?: Array<string | number>
    ): ListViewDataSource;

    /**
     * This performs the same function as the `cloneWithRows` function but here
     * you also specify what your `sectionIdentities` are. If you don't care
     * about sections you should safely be able to use `cloneWithRows`.
     *
     * `sectionIdentities` is an array of identifiers for  sections.
     * ie. ['s1', 's2', ...].  If not provided, it's assumed that the
     * keys of dataBlob are the section identities.
     *
     * Note: this returns a new object!
     */
    cloneWithRowsAndSections(
        dataBlob: Array<any> | { [key: string]: any },
        sectionIdentities?: Array<string | number>,
        rowIdentities?: Array<Array<string | number>>
    ): ListViewDataSource;

    getRowCount(): number;
    getRowAndSectionCount(): number;

    /**
     * Returns if the row is dirtied and needs to be rerendered
     */
    rowShouldUpdate(sectionIndex: number, rowIndex: number): boolean;

    /**
     * Gets the data required to render the row.
     */
    getRowData(sectionIndex: number, rowIndex: number): any;

    /**
     * Gets the rowID at index provided if the dataSource arrays were flattened,
     * or null of out of range indexes.
     */
    getRowIDForFlatIndex(index: number): string;

    /**
     * Gets the sectionID at index provided if the dataSource arrays were flattened,
     * or null for out of range indexes.
     */
    getSectionIDForFlatIndex(index: number): string;

    /**
     * Returns an array containing the number of rows in each section
     */
    getSectionLengths(): Array<number>;

    /**
     * Returns if the section header is dirtied and needs to be rerendered
     */
    sectionHeaderShouldUpdate(sectionIndex: number): boolean;

    /**
     * Gets the data required to render the section header
     */
    getSectionHeaderData(sectionIndex: number): any;
}

/**
 * @see https://facebook.github.io/react-native/docs/tabbarios-item.html#props
 */
export interface TabBarItemProperties extends ViewProperties {
    /**
     * Little red bubble that sits at the top right of the icon.
     */
    badge?: string | number;

    /**
     * Background color for the badge. Available since iOS 10.
     */
    badgeColor?: string;

    /**
     * A custom icon for the tab. It is ignored when a system icon is defined.
     */
    icon?: ImageURISource;

    /**
     * Callback when this tab is being selected,
     * you should change the state of your component to set selected={true}.
     */
    onPress?: () => void;

    /**
     * If set to true it renders the image as original,
     * it defaults to being displayed as a template
     */
    renderAsOriginal?: boolean;

    /**
     * It specifies whether the children are visible or not. If you see a blank content, you probably forgot to add a selected one.
     */
    selected?: boolean;

    /**
     * A custom icon when the tab is selected.
     * It is ignored when a system icon is defined. If left empty, the icon will be tinted in blue.
     */
    selectedIcon?: ImageURISource;

    /**
     * React style object.
     */
    style?: StyleProp<ViewStyle>;

    /**
     * Items comes with a few predefined system icons.
     * Note that if you are using them, the title and selectedIcon will be overriden with the system ones.
     *
     *  enum('bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated')
     */
    systemIcon?:
        | "bookmarks"
        | "contacts"
        | "downloads"
        | "favorites"
        | "featured"
        | "history"
        | "more"
        | "most-recent"
        | "most-viewed"
        | "recents"
        | "search"
        | "top-rated";

    /**
     * Text that appears under the icon. It is ignored when a system icon is defined.
     */
    title?: string;
}

export interface TabBarItemStatic extends React.ComponentClass<TabBarItemProperties> {}

/**
 * @see https://facebook.github.io/react-native/docs/tabbarios.html#props
 */
export interface TabBarIOSProperties extends ViewProperties {
    /**
     * Background color of the tab bar
     */
    barTintColor?: string;

    /**
     * Specifies tab bar item positioning. Available values are:
     * - fill - distributes items across the entire width of the tab bar
     * - center - centers item in the available tab bar space
     * - auto (default) - distributes items dynamically according to the
     * user interface idiom. In a horizontally compact environment (e.g. iPhone 5)
     * this value defaults to `fill`, in a horizontally regular one (e.g. iPad)
     * it defaults to center.
     */
    itemPositioning?: "fill" | "center" | "auto";

    /**
     * Color of the currently selected tab icon
     */
    tintColor?: string;

    /**
     * A Boolean value that indicates whether the tab bar is translucent
     */
    translucent?: boolean;

    /**
     * Color of text on unselected tabs
     */
    unselectedTintColor?: string;

    /**
     * Color of unselected tab icons. Available since iOS 10.
     */
    unselectedItemTintColor?: string;
}

export interface TabBarIOSStatic extends React.ComponentClass<TabBarIOSProperties> {
    Item: TabBarItemStatic;
}

export interface PixelRatioStatic {
    /*
        Returns the device pixel density. Some examples:
            PixelRatio.get() === 1
            mdpi Android devices (160 dpi)
            PixelRatio.get() === 1.5
            hdpi Android devices (240 dpi)
            PixelRatio.get() === 2
            iPhone 4, 4S
            iPhone 5, 5c, 5s
            iPhone 6
            xhdpi Android devices (320 dpi)
            PixelRatio.get() === 3
            iPhone 6 plus
            xxhdpi Android devices (480 dpi)
            PixelRatio.get() === 3.5
            Nexus 6
    */
    get(): number;

    /*
        Returns the scaling factor for font sizes. This is the ratio that is
        used to calculate the absolute font size, so any elements that
        heavily depend on that should use this to do calculations.

        If a font scale is not set, this returns the device pixel ratio.

        Currently this is only implemented on Android and reflects the user
        preference set in Settings > Display > Font size,
        on iOS it will always return the default pixel ratio.
        */
    getFontScale(): number;

    /**
     * Converts a layout size (dp) to pixel size (px).
     * Guaranteed to return an integer number.
     */
    getPixelSizeForLayoutSize(layoutSize: number): number;

    /**
     * Rounds a layout size (dp) to the nearest layout size that
     * corresponds to an integer number of pixels. For example,
     * on a device with a PixelRatio of 3,
     * PixelRatio.roundToNearestPixel(8.4) = 8.33,
     * which corresponds to exactly (8.33 * 3) = 25 pixels.
     */
    roundToNearestPixel(layoutSize: number): number;

    /**
     * No-op for iOS, but used on the web. Should not be documented. [sic]
     */
    startDetecting(): void;
}

/**
 * @see https://facebook.github.io/react-native/docs/platform-specific-code.html#content
 */
export type PlatformOSType = "ios" | "android" | "macos" | "windows" | "web";

interface PlatformStatic {
    OS: PlatformOSType;
    Version: number;

    /**
     * @see https://facebook.github.io/react-native/docs/platform-specific-code.html#content
     */
    select<T>(specifics: { [platform in PlatformOSType | 'default']?: T }): T;
}

interface PlatformIOSStatic extends PlatformStatic {
    isPad: boolean;
    isTVOS: boolean;
}

/**
 * Deprecated - subclass NativeEventEmitter to create granular event modules instead of
 * adding all event listeners directly to RCTDeviceEventEmitter.
 */
interface DeviceEventEmitterStatic extends EventEmitter {
    sharedSubscriber: EventSubscriptionVendor;
    new (): DeviceEventEmitterStatic;
    addListener(type: string, listener: (data: any) => void, context?: any): EmitterSubscription;
}

// Used by Dimensions below
export interface ScaledSize {
    width: number;
    height: number;
    scale: number;
    fontScale: number;
}

/**
 * Initial dimensions are set before `runApplication` is called so they should
 * be available before any other require's are run, but may be updated later.
 *
 * Note: Although dimensions are available immediately, they may change (e.g
 * due to device rotation) so any rendering logic or styles that depend on
 * these constants should try to call this function on every render, rather
 * than caching the value (for example, using inline styles rather than
 * setting a value in a `StyleSheet`).
 *
 * Example: `var {height, width} = Dimensions.get('window');`
 *
 * @param dim Name of dimension as defined when calling `set`.
 * @returns Value for the dimension.
 * @see https://facebook.github.io/react-native/docs/dimensions.html#content
 */
export interface Dimensions {
    /**
     * Initial dimensions are set before runApplication is called so they
     * should be available before any other require's are run, but may be
     * updated later.
     * Note: Although dimensions are available immediately, they may
     * change (e.g due to device rotation) so any rendering logic or
     * styles that depend on these constants should try to call this
     * function on every render, rather than caching the value (for
     * example, using inline styles rather than setting a value in a
     * StyleSheet).
     * Example: var {height, width} = Dimensions.get('window');
     @param dim Name of dimension as defined when calling set.
     @returns Value for the dimension.
     */
    get(dim: "window" | "screen"): ScaledSize;

    /**
     * This should only be called from native code by sending the didUpdateDimensions event.
     * @param dims Simple string-keyed object of dimensions to set
     */
    set(dims: { [key: string]: any }): void;

    /**
     * Add an event listener for dimension changes
     *
     * @param type the type of event to listen to
     * @param handler the event handler
     */
    addEventListener(type: "change", handler: () => void): void;

    /**
     * Remove an event listener
     *
     * @param type the type of event
     * @param handler the event handler
     */
    removeEventListener(type: "change", handler: () => void): void;
}

export type SimpleTask = {
    name: string;
    gen: () => void;
};
export type PromiseTask = {
    name: string;
    gen: () => Promise<any>;
};

export type Handle = number;

export interface InteractionManagerStatic extends EventEmitterListener {
    Events: {
        interactionStart: string;
        interactionComplete: string;
    };

    /**
     * Schedule a function to run after all interactions have completed.
     * Returns a cancellable
     */
    runAfterInteractions(
        task?: (() => any) | SimpleTask | PromiseTask
    ): {
        then: (onfulfilled?: () => any, onrejected?: () => any) => Promise<any>;
        done: (...args: any[]) => any;
        cancel: () => void;
    };

    /**
     * Notify manager that an interaction has started.
     */
    createInteractionHandle(): Handle;

    /**
     * Notify manager that an interaction has completed.
     */
    clearInteractionHandle(handle: Handle): void;

    /**
     * A positive number will use setTimeout to schedule any tasks after
     * the eventLoopRunningTime hits the deadline value, otherwise all
     * tasks will be executed in one setImmediate batch (default).
     */
    setDeadline(deadline: number): void;
}

export interface ScrollViewStyle extends FlexStyle, TransformsStyle {
    backfaceVisibility?: "visible" | "hidden";
    backgroundColor?: string;
    borderColor?: string;
    borderTopColor?: string;
    borderRightColor?: string;
    borderBottomColor?: string;
    borderLeftColor?: string;
    borderRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    borderStyle?: "solid" | "dotted" | "dashed";
    borderWidth?: number;
    borderTopWidth?: number;
    borderRightWidth?: number;
    borderBottomWidth?: number;
    borderLeftWidth?: number;
    opacity?: number;
    overflow?: "visible" | "hidden";
    shadowColor?: string;
    shadowOffset?: { width: number; height: number };
    shadowOpacity?: number;
    shadowRadius?: number;
    elevation?: number;
}

export interface ScrollResponderEvent extends NativeSyntheticEvent<NativeTouchEvent> {}

interface ScrollResponderMixin extends SubscribableMixin {
    /**
     * Invoke this from an `onScroll` event.
     */
    scrollResponderHandleScrollShouldSetResponder(): boolean;

    /**
     * Merely touch starting is not sufficient for a scroll view to become the
     * responder. Being the "responder" means that the very next touch move/end
     * event will result in an action/movement.
     *
     * Invoke this from an `onStartShouldSetResponder` event.
     *
     * `onStartShouldSetResponder` is used when the next move/end will trigger
     * some UI movement/action, but when you want to yield priority to views
     * nested inside of the view.
     *
     * There may be some cases where scroll views actually should return `true`
     * from `onStartShouldSetResponder`: Any time we are detecting a standard tap
     * that gives priority to nested views.
     *
     * - If a single tap on the scroll view triggers an action such as
     *   recentering a map style view yet wants to give priority to interaction
     *   views inside (such as dropped pins or labels), then we would return true
     *   from this method when there is a single touch.
     *
     * - Similar to the previous case, if a two finger "tap" should trigger a
     *   zoom, we would check the `touches` count, and if `>= 2`, we would return
     *   true.
     *
     */
    scrollResponderHandleStartShouldSetResponder(): boolean;

    /**
     * There are times when the scroll view wants to become the responder
     * (meaning respond to the next immediate `touchStart/touchEnd`), in a way
     * that *doesn't* give priority to nested views (hence the capture phase):
     *
     * - Currently animating.
     * - Tapping anywhere that is not the focused input, while the keyboard is
     *   up (which should dismiss the keyboard).
     *
     * Invoke this from an `onStartShouldSetResponderCapture` event.
     */
    scrollResponderHandleStartShouldSetResponderCapture(e: ScrollResponderEvent): boolean;

    /**
     * Invoke this from an `onResponderReject` event.
     *
     * Some other element is not yielding its role as responder. Normally, we'd
     * just disable the `UIScrollView`, but a touch has already began on it, the
     * `UIScrollView` will not accept being disabled after that. The easiest
     * solution for now is to accept the limitation of disallowing this
     * altogether. To improve this, find a way to disable the `UIScrollView` after
     * a touch has already started.
     */
    scrollResponderHandleResponderReject(): any;

    /**
     * We will allow the scroll view to give up its lock iff it acquired the lock
     * during an animation. This is a very useful default that happens to satisfy
     * many common user experiences.
     *
     * - Stop a scroll on the left edge, then turn that into an outer view's
     *   backswipe.
     * - Stop a scroll mid-bounce at the top, continue pulling to have the outer
     *   view dismiss.
     * - However, without catching the scroll view mid-bounce (while it is
     *   motionless), if you drag far enough for the scroll view to become
     *   responder (and therefore drag the scroll view a bit), any backswipe
     *   navigation of a swipe gesture higher in the view hierarchy, should be
     *   rejected.
     */
    scrollResponderHandleTerminationRequest(): boolean;

    /**
     * Invoke this from an `onTouchEnd` event.
     *
     * @param e Event.
     */
    scrollResponderHandleTouchEnd(e: ScrollResponderEvent): void;

    /**
     * Invoke this from an `onResponderRelease` event.
     */
    scrollResponderHandleResponderRelease(e: ScrollResponderEvent): void;

    scrollResponderHandleScroll(e: ScrollResponderEvent): void;

    /**
     * Invoke this from an `onResponderGrant` event.
     */
    scrollResponderHandleResponderGrant(e: ScrollResponderEvent): void;

    /**
     * Unfortunately, `onScrollBeginDrag` also fires when *stopping* the scroll
     * animation, and there's not an easy way to distinguish a drag vs. stopping
     * momentum.
     *
     * Invoke this from an `onScrollBeginDrag` event.
     */
    scrollResponderHandleScrollBeginDrag(e: ScrollResponderEvent): void;

    /**
     * Invoke this from an `onScrollEndDrag` event.
     */
    scrollResponderHandleScrollEndDrag(e: ScrollResponderEvent): void;

    /**
     * Invoke this from an `onMomentumScrollBegin` event.
     */
    scrollResponderHandleMomentumScrollBegin(e: ScrollResponderEvent): void;

    /**
     * Invoke this from an `onMomentumScrollEnd` event.
     */
    scrollResponderHandleMomentumScrollEnd(e: ScrollResponderEvent): void;

    /**
     * Invoke this from an `onTouchStart` event.
     *
     * Since we know that the `SimpleEventPlugin` occurs later in the plugin
     * order, after `ResponderEventPlugin`, we can detect that we were *not*
     * permitted to be the responder (presumably because a contained view became
     * responder). The `onResponderReject` won't fire in that case - it only
     * fires when a *current* responder rejects our request.
     *
     * @param e Touch Start event.
     */
    scrollResponderHandleTouchStart(e: ScrollResponderEvent): void;

    /**
     * Invoke this from an `onTouchMove` event.
     *
     * Since we know that the `SimpleEventPlugin` occurs later in the plugin
     * order, after `ResponderEventPlugin`, we can detect that we were *not*
     * permitted to be the responder (presumably because a contained view became
     * responder). The `onResponderReject` won't fire in that case - it only
     * fires when a *current* responder rejects our request.
     *
     * @param e Touch Start event.
     */
    scrollResponderHandleTouchMove(e: ScrollResponderEvent): void;

    /**
     * A helper function for this class that lets us quickly determine if the
     * view is currently animating. This is particularly useful to know when
     * a touch has just started or ended.
     */
    scrollResponderIsAnimating(): boolean;

    /**
     * Returns the node that represents native view that can be scrolled.
     * Components can pass what node to use by defining a `getScrollableNode`
     * function otherwise `this` is used.
     */
    scrollResponderGetScrollableNode(): any;

    /**
     * A helper function to scroll to a specific point  in the scrollview.
     * This is currently used to help focus on child textviews, but can also
     * be used to quickly scroll to any element we want to focus. Syntax:
     *
     * scrollResponderScrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})
     *
     * Note: The weird argument signature is due to the fact that, for historical reasons,
     * the function also accepts separate arguments as as alternative to the options object.
     * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
     */
    scrollResponderScrollTo(
        x?: number | { x?: number; y?: number; animated?: boolean },
        y?: number,
        animated?: boolean
    ): void;

    /**
     * A helper function to zoom to a specific rect in the scrollview. The argument has the shape
     * {x: number; y: number; width: number; height: number; animated: boolean = true}
     *
     * @platform ios
     */
    scrollResponderZoomTo(
        rect: { x: number; y: number; width: number; height: number; animated?: boolean },
        animated?: boolean // deprecated, put this inside the rect argument instead
    ): void;

    /**
     * This method should be used as the callback to onFocus in a TextInputs'
     * parent view. Note that any module using this mixin needs to return
     * the parent view's ref in getScrollViewRef() in order to use this method.
     * @param nodeHandle The TextInput node handle
     * @param additionalOffset The scroll view's top "contentInset".
     *        Default is 0.
     * @param preventNegativeScrolling Whether to allow pulling the content
     *        down to make it meet the keyboard's top. Default is false.
     */
    scrollResponderScrollNativeHandleToKeyboard(
        nodeHandle: any,
        additionalOffset?: number,
        preventNegativeScrollOffset?: boolean
    ): void;

    /**
     * The calculations performed here assume the scroll view takes up the entire
     * screen - even if has some content inset. We then measure the offsets of the
     * keyboard, and compensate both for the scroll view's "contentInset".
     *
     * @param left Position of input w.r.t. table view.
     * @param top Position of input w.r.t. table view.
     * @param width Width of the text input.
     * @param height Height of the text input.
     */
    scrollResponderInputMeasureAndScrollToKeyboard(left: number, top: number, width: number, height: number): void;

    scrollResponderTextInputFocusError(e: ScrollResponderEvent): void;

    /**
     * `componentWillMount` is the closest thing to a  standard "constructor" for
     * React components.
     *
     * The `keyboardWillShow` is called before input focus.
     */
    componentWillMount(): void;

    /**
     * Warning, this may be called several times for a single keyboard opening.
     * It's best to store the information in this method and then take any action
     * at a later point (either in `keyboardDidShow` or other).
     *
     * Here's the order that events occur in:
     * - focus
     * - willShow {startCoordinates, endCoordinates} several times
     * - didShow several times
     * - blur
     * - willHide {startCoordinates, endCoordinates} several times
     * - didHide several times
     *
     * The `ScrollResponder` providesModule callbacks for each of these events.
     * Even though any user could have easily listened to keyboard events
     * themselves, using these `props` callbacks ensures that ordering of events
     * is consistent - and not dependent on the order that the keyboard events are
     * subscribed to. This matters when telling the scroll view to scroll to where
     * the keyboard is headed - the scroll responder better have been notified of
     * the keyboard destination before being instructed to scroll to where the
     * keyboard will be. Stick to the `ScrollResponder` callbacks, and everything
     * will work.
     *
     * WARNING: These callbacks will fire even if a keyboard is displayed in a
     * different navigation pane. Filter out the events to determine if they are
     * relevant to you. (For example, only if you receive these callbacks after
     * you had explicitly focused a node etc).
     */
    scrollResponderKeyboardWillShow(e: ScrollResponderEvent): void;

    scrollResponderKeyboardWillHide(e: ScrollResponderEvent): void;

    scrollResponderKeyboardDidShow(e: ScrollResponderEvent): void;

    scrollResponderKeyboardDidHide(e: ScrollResponderEvent): void;
}

export interface ScrollViewPropertiesIOS {
    /**
     * When true the scroll view bounces horizontally when it reaches the end
     * even if the content is smaller than the scroll view itself. The default
     * value is true when `horizontal={true}` and false otherwise.
     */
    alwaysBounceHorizontal?: boolean;
    /**
     * When true the scroll view bounces vertically when it reaches the end
     * even if the content is smaller than the scroll view itself. The default
     * value is false when `horizontal={true}` and true otherwise.
     */
    alwaysBounceVertical?: boolean;

    /**
     * Controls whether iOS should automatically adjust the content inset for scroll views that are placed behind a navigation bar or tab bar/ toolbar.
     * The default value is true.
     */
    automaticallyAdjustContentInsets?: boolean; // true

    /**
     * When true the scroll view bounces when it reaches the end of the
     * content if the content is larger then the scroll view along the axis of
     * the scroll direction. When false it disables all bouncing even if
     * the `alwaysBounce*` props are true. The default value is true.
     */
    bounces?: boolean;
    /**
     * When true gestures can drive zoom past min/max and the zoom will animate
     * to the min/max value at gesture end otherwise the zoom will not exceed
     * the limits.
     */
    bouncesZoom?: boolean;

    /**
     * When false once tracking starts won't try to drag if the touch moves.
     * The default value is true.
     */
    canCancelContentTouches?: boolean;

    /**
     * When true the scroll view automatically centers the content when the
     * content is smaller than the scroll view bounds; when the content is
     * larger than the scroll view this property has no effect. The default
     * value is false.
     */
    centerContent?: boolean;

    /**
     * The amount by which the scroll view content is inset from the edges of the scroll view.
     * Defaults to {0, 0, 0, 0}.
     */
    contentInset?: Insets; // zeros

    /**
     * Used to manually set the starting scroll offset.
     * The default value is {x: 0, y: 0}
     */
    contentOffset?: PointProperties; // zeros

    /**
     * This property specifies how the safe area insets are used to modify the content area of the scroll view.
     * The default value of this property must be 'automatic'. But the default value is 'never' until RN@0.51.
     */
    contentInsetAdjustmentBehavior?: "automatic" | "scrollableAxes" | "never" | "always";

    /**
     * A floating-point number that determines how quickly the scroll view
     * decelerates after the user lifts their finger. Reasonable choices include
     *   - Normal: 0.998 (the default)
     *   - Fast: 0.9
     */
    decelerationRate?: "fast" | "normal" | number;

    /**
     * When true the ScrollView will try to lock to only vertical or horizontal
     * scrolling while dragging.  The default value is false.
     */
    directionalLockEnabled?: boolean;

    /**
     * The style of the scroll indicators.
     * - default (the default), same as black.
     * - black, scroll indicator is black. This style is good against
     *   a white content background.
     * - white, scroll indicator is white. This style is good against
     *   a black content background.
     */
    indicatorStyle?: "default" | "black" | "white";

    /**
     * The maximum allowed zoom scale. The default value is 1.0.
     */
    maximumZoomScale?: number;

    /**
     * The minimum allowed zoom scale. The default value is 1.0.
     */
    minimumZoomScale?: number;

    /**
     * Called when a scrolling animation ends.
     */
    onScrollAnimationEnd?: () => void;

    /**
     * When true, ScrollView allows use of pinch gestures to zoom in and out.
     * The default value is true.
     */
    pinchGestureEnabled?: boolean;

    /**
     * This controls how often the scroll event will be fired while scrolling (in events per seconds).
     * A higher number yields better accuracy for code that is tracking the scroll position,
     * but can lead to scroll performance problems due to the volume of information being send over the bridge.
     * The default value is zero, which means the scroll event will be sent only once each time the view is scrolled.
     */
    scrollEventThrottle?: number; // null

    /**
     * The amount by which the scroll view indicators are inset from the edges of the scroll view.
     * This should normally be set to the same value as the contentInset.
     * Defaults to {0, 0, 0, 0}.
     */
    scrollIndicatorInsets?: Insets; //zeroes

    /**
     * When true the scroll view scrolls to top when the status bar is tapped.
     * The default value is true.
     */
    scrollsToTop?: boolean;

    /**
     * When snapToInterval is set, snapToAlignment will define the relationship of the the snapping to the scroll view.
     *      - start (the default) will align the snap at the left (horizontal) or top (vertical)
     *      - center will align the snap in the center
     *      - end will align the snap at the right (horizontal) or bottom (vertical)
     */
    snapToAlignment?: "start" | "center" | "end";

    /**
     * When set, causes the scroll view to stop at multiples of the value of snapToInterval.
     * This can be used for paginating through children that have lengths smaller than the scroll view.
     * Used in combination with snapToAlignment.
     */
    snapToInterval?: number;

    /**
     * An array of child indices determining which children get docked to the
     * top of the screen when scrolling. For example passing
     * `stickyHeaderIndices={[0]}` will cause the first child to be fixed to the
     * top of the scroll view. This property is not supported in conjunction
     * with `horizontal={true}`.
     */
    stickyHeaderIndices?: number[];

    /**
     * The current scale of the scroll view content. The default value is 1.0.
     */
    zoomScale?: number;
}

export interface ScrollViewPropertiesAndroid {
    /**
     * Sometimes a scrollview takes up more space than its content fills.
     * When this is the case, this prop will fill the rest of the
     * scrollview with a color to avoid setting a background and creating
     * unnecessary overdraw. This is an advanced optimization that is not
     * needed in the general case.
     */
    endFillColor?: string;

    /**
     * Tag used to log scroll performance on this scroll view. Will force
     * momentum events to be turned on (see sendMomentumEvents). This doesn't do
     * anything out of the box and you need to implement a custom native
     * FpsListener for it to be useful.
     * @platform android
     */
    scrollPerfTag?: string;

    /**
     * Used to override default value of overScroll mode.

        * Possible values:
        *   - 'auto' - Default value, allow a user to over-scroll this view only if the content is large enough to meaningfully scroll.
        *   - 'always' - Always allow a user to over-scroll this view.
        *   - 'never' - Never allow a user to over-scroll this view.
        */
    overScrollMode?: "auto" | "always" | "never";
}

export interface ScrollViewProperties
    extends ViewProperties,
        ScrollViewPropertiesIOS,
        ScrollViewPropertiesAndroid,
        Touchable {
    /**
     * These styles will be applied to the scroll view content container which
     * wraps all of the child views. Example:
     *
     *   return (
     *     <ScrollView contentContainerStyle={styles.contentContainer}>
     *     </ScrollView>
     *   );
     *   ...
     *   var styles = StyleSheet.create({
     *     contentContainer: {
     *       paddingVertical: 20
     *     }
     *   });
     */
    contentContainerStyle?: StyleProp<ViewStyle>;

    /**
     * When true the scroll view's children are arranged horizontally in a row
     * instead of vertically in a column. The default value is false.
     */
    horizontal?: boolean;

    /**
     * Determines whether the keyboard gets dismissed in response to a drag.
     *   - 'none' (the default) drags do not dismiss the keyboard.
     *   - 'onDrag' the keyboard is dismissed when a drag begins.
     *   - 'interactive' the keyboard is dismissed interactively with the drag
     *     and moves in synchrony with the touch; dragging upwards cancels the
     *     dismissal.
     */
    keyboardDismissMode?: "none" | "interactive" | "on-drag";

    /**
     * When false tapping outside of the focused text input when the keyboard
     * is up dismisses the keyboard. When true the scroll view will not catch
     * taps and the keyboard will not dismiss automatically. The default value
     * is false.
     */
    keyboardShouldPersistTaps?: boolean | "always" | "never" | "handled";

    /**
     * Called when scrollable content view of the ScrollView changes.
     * Handler function is passed the content width and content height as parameters: (contentWidth, contentHeight)
     * It's implemented using onLayout handler attached to the content container which this ScrollView renders.
     *
     */
    onContentSizeChange?: (w: number, h: number) => void;

    /**
     * Fires at most once per frame during scrolling.
     * The frequency of the events can be contolled using the scrollEventThrottle prop.
     */
    onScroll?: (event?: NativeSyntheticEvent<NativeScrollEvent>) => void;

    /**
     * Fires if a user initiates a scroll gesture.
     */
    onScrollBeginDrag?: (event?: NativeSyntheticEvent<NativeScrollEvent>) => void;

    /**
     * Fires when a user has finished scrolling.
     */
    onScrollEndDrag?: (event?: NativeSyntheticEvent<NativeScrollEvent>) => void;

    /**
     * Fires when scroll view has finished moving
     */
    onMomentumScrollEnd?: (event?: NativeSyntheticEvent<NativeScrollEvent>) => void;

    /**
     * Fires when scroll view has begun moving
     */
    onMomentumScrollBegin?: (event?: NativeSyntheticEvent<NativeScrollEvent>) => void;

    /**
     * When true the scroll view stops on multiples of the scroll view's size
     * when scrolling. This can be used for horizontal pagination. The default
     * value is false.
     */
    pagingEnabled?: boolean;

    /**
     * When false, the content does not scroll. The default value is true
     */
    scrollEnabled?: boolean; // true

    /**
     * Experimental: When true offscreen child views (whose `overflow` value is
     * `hidden`) are removed from their native backing superview when offscreen.
     * This canimprove scrolling performance on long lists. The default value is
     * false.
     */
    removeClippedSubviews?: boolean;

    /**
     * When true, shows a horizontal scroll indicator.
     */
    showsHorizontalScrollIndicator?: boolean;

    /**
     * When true, shows a vertical scroll indicator.
     */
    showsVerticalScrollIndicator?: boolean;

    /**
     * Style
     */
    style?: StyleProp<ScrollViewStyle>;

    /**
     * A RefreshControl component, used to provide pull-to-refresh
     * functionality for the ScrollView.
     */
    refreshControl?: React.ReactElement<RefreshControlProperties>;
}

export interface ScrollViewProps extends ScrollViewProperties {}

interface ScrollViewStatic extends ScrollResponderMixin, React.ComponentClass<ScrollViewProps> {
    /**
     * Scrolls to a given x, y offset, either immediately or with a smooth animation.
     * Syntax:
     *
     * scrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})
     *
     * Note: The weird argument signature is due to the fact that, for historical reasons,
     * the function also accepts separate arguments as as alternative to the options object.
     * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
     */
    scrollTo(y?: number | { x?: number; y?: number; animated?: boolean }, x?: number, animated?: boolean): void;

    /**
     * A helper function that scrolls to the end of the scrollview;
     * If this is a vertical ScrollView, it scrolls to the bottom.
     * If this is a horizontal ScrollView scrolls to the right.
     *
     * The options object has an animated prop, that enables the scrolling animation or not.
     * The animated prop defaults to true
     */
    scrollToEnd(options?: { animated: boolean }): void;

    /**
     * Returns a reference to the underlying scroll responder, which supports
     * operations like `scrollTo`. All ScrollView-like components should
     * implement this method so that they can be composed while providing access
     * to the underlying scroll responder's methods.
     */
    getScrollResponder(): JSX.Element;

    getScrollableNode(): any;

    // Undocumented
    getInnerViewNode(): any;

    // Deprecated, do not use.
    scrollWithoutAnimationTo?: (y: number, x: number) => void;
}

export interface NativeScrollRectangle {
    left: number;
    top: number;
    bottom: number;
    right: number;
}

export interface NativeScrollPoint {
    x: number;
    y: number;
}

export interface NativeScrollVelocity {
    x: number;
    y: number;
}

export interface NativeScrollSize {
    height: number;
    width: number;
}

export interface NativeScrollEvent {
    contentInset: NativeScrollRectangle;
    contentOffset: NativeScrollPoint;
    contentSize: NativeScrollSize;
    layoutMeasurement: NativeScrollSize;
    velocity?: NativeScrollVelocity;
    zoomScale: number;
}

export interface SnapshotViewIOSProperties extends ViewProperties {
    // A callback when the Snapshot view is ready to be compared
    onSnapshotReady(): any;

    // A name to identify the individual instance to the SnapshotView
    testIdentifier: string;
}

export interface SnapshotViewIOSStatic extends NativeMethodsMixin, React.ComponentClass<SnapshotViewIOSProperties> {}

// Deduced from
// https://github.com/facebook/react-native/commit/052cd7eb8afa7a805ef13e940251be080499919c

/**
 * Data source wrapper around ListViewDataSource to allow for tracking of
 * which row is swiped open and close opened row(s) when another row is swiped
 * open.
 *
 * See https://github.com/facebook/react-native/pull/5602 for why
 * ListViewDataSource is not subclassed.
 */
export interface SwipeableListViewDataSource {
    cloneWithRowsAndSections(
        dataBlob: any,
        sectionIdentities?: Array<string>,
        rowIdentities?: Array<Array<string>>
    ): SwipeableListViewDataSource;
    getDataSource(): ListViewDataSource;
    getOpenRowID(): string;
    getFirstRowID(): string;
    setOpenRowID(rowID: string): SwipeableListViewDataSource;
}

export interface SwipeableListViewProps {
    /**
     * To alert the user that swiping is possible, the first row can bounce
     * on component mount.
     */
    bounceFirstRowOnMount: boolean;

    /**
     * Use `SwipeableListView.getNewDataSource()` to get a data source to use,
     * then use it just like you would a normal ListView data source
     */
    dataSource: SwipeableListViewDataSource;

    // Maximum distance to open to after a swipe
    maxSwipeDistance: number;

    // Callback method to render the swipeable view
    renderRow: (
        rowData: any,
        sectionID: string | number,
        rowID: string | number,
        highlightRow?: boolean
    ) => React.ReactElement<any>;

    // Callback method to render the view that will be unveiled on swipe
    renderQuickActions(rowData: any, sectionID: string | number, rowID: string | number): React.ReactElement<any>;
}

/**
 * A container component that renders multiple SwipeableRow's in a ListView
 * implementation. This is designed to be a drop-in replacement for the
 * standard React Native `ListView`, so use it as if it were a ListView, but
 * with extra props, i.e.
 *
 * let ds = SwipeableListView.getNewDataSource();
 * ds.cloneWithRowsAndSections(dataBlob, ?sectionIDs, ?rowIDs);
 * // ..
 * <SwipeableListView renderRow={..} renderQuickActions={..} {..ListView props} />
 *
 * SwipeableRow can be used independently of this component, but the main
 * benefit of using this component is
 *
 * - It ensures that at most 1 row is swiped open (auto closes others)
 * - It can bounce the 1st row of the list so users know it's swipeable
 * - More to come
 */
export interface SwipeableListViewStatic extends React.ComponentClass<SwipeableListViewProps> {
    getNewDataSource(): SwipeableListViewDataSource;
}

//////////////////////////////////////////////////////////////////////////
//
// A P I s
//
//////////////////////////////////////////////////////////////////////////

/**
 * @see: http://facebook.github.io/react-native/docs/actionsheetios.html#content
 */
export interface ActionSheetIOSOptions {
    title?: string;
    options: string[];
    cancelButtonIndex?: number;
    destructiveButtonIndex?: number;
    message?: string;
}

export interface ShareActionSheetIOSOptions {
    message?: string;
    url?: string;
    subject?: string;
    /** The activities to exclude from the ActionSheet.
     * For example: ['com.apple.UIKit.activity.PostToTwitter']
     */
    excludedActivityTypes?: string[];
}

/**
 * @see https://facebook.github.io/react-native/docs/actionsheetios.html#content
 */
export interface ActionSheetIOSStatic {
    /**
     * Display an iOS action sheet. The `options` object must contain one or more
     * of:
     * - `options` (array of strings) - a list of button titles (required)
     * - `cancelButtonIndex` (int) - index of cancel button in `options`
     * - `destructiveButtonIndex` (int) - index of destructive button in `options`
     * - `title` (string) - a title to show above the action sheet
     * - `message` (string) - a message to show below the title
     */
    showActionSheetWithOptions: (options: ActionSheetIOSOptions, callback: (buttonIndex: number) => void) => void;

    /**
     * Display the iOS share sheet. The `options` object should contain
     * one or both of `message` and `url` and can additionally have
     * a `subject` or `excludedActivityTypes`:
     *
     * - `url` (string) - a URL to share
     * - `message` (string) - a message to share
     * - `subject` (string) - a subject for the message
     * - `excludedActivityTypes` (array) - the activities to exclude from the ActionSheet
     *
     * NOTE: if `url` points to a local file, or is a base64-encoded
     * uri, the file it points to will be loaded and shared directly.
     * In this way, you can share images, videos, PDF files, etc.
     */
    showShareActionSheetWithOptions: (
        options: ShareActionSheetIOSOptions,
        failureCallback: (error: Error) => void,
        successCallback: (success: boolean, method: string) => void
    ) => void;
}

export type ShareContent =
    | {
          title?: string;
          message: string;
      }
    | {
          title?: string;
          url: string;
      };

export type ShareOptions = {
    dialogTitle?: string;
    excludedActivityTypes?: Array<string>;
    tintColor?: string;
};

export interface ShareStatic {
    /**
     * Open a dialog to share text content.
     *
     * In iOS, Returns a Promise which will be invoked an object containing `action`, `activityType`.
     * If the user dismissed the dialog, the Promise will still be resolved with action being `Share.dismissedAction`
     * and all the other keys being undefined.
     *
     * In Android, Returns a Promise which always be resolved with action being `Share.sharedAction`.
     *
     * ### Content
     *
     *  - `message` - a message to share
     *  - `title` - title of the message
     *
     * #### iOS
     *
     *  - `url` - an URL to share
     *
     * At least one of URL and message is required.
     *
     * ### Options
     *
     * #### iOS
     *
     * - `excludedActivityTypes`
     * - `tintColor`
     *
     * #### Android
     *
     * - `dialogTitle`
     *
     */
    share(content: ShareContent, options?: ShareOptions): Promise<Object>;
    sharedAction: string;
    dismissedAction: string;
}

type AccessibilityChangeEventName = "change" | "announcementFinished";

/**
 * @see https://facebook.github.io/react-native/docs/accessibilityinfo.html
 */
export interface AccessibilityInfoStatic {
    /**
     * Query whether a screen reader is currently enabled.
     * Returns a promise which resolves to a boolean. The result is true when a screen reader is enabled and false otherwise.
     */
    fetch: () => Promise<boolean>;

    /**
     * Add an event handler. Supported events:
     *  - change: Fires when the state of the screen reader changes.
     *            The argument to the event handler is a boolean.
     *            The boolean is true when a screen reader is enabled and false otherwise.
     *
     * - announcementFinished: iOS-only event. Fires when the screen reader has finished making an announcement.
     *                         The argument to the event handler is a dictionary with these keys:
     *                          - announcement: The string announced by the screen reader.
     *                          - success: A boolean indicating whether the announcement was successfully made.
     */
    addEventListener: (eventName: AccessibilityChangeEventName, handler: () => void) => void;

    /**
     * Remove an event handler.
     */
    removeEventListener: (eventName: AccessibilityChangeEventName, handler: () => void) => void;

    /**
     * Set acessibility focus to a react component.
     *
     * @platform ios
     */
    setAccessibilityFocus: (reactTag: number) => void;

    /**
     * Post a string to be announced by the screen reader.
     *
     * @platform ios
     */
    announceForAccessibility: (announcement: string) => void;
}

/**
 * @see https://facebook.github.io/react-native/docs/alert.html#content
 */
export interface AlertButton {
    text?: string;
    onPress?: () => void;
    style?: "default" | "cancel" | "destructive";
}

interface AlertOptions {
    /** @platform android */
    cancelable?: boolean;
    /** @platform android */
    onDismiss?: () => void;
}

/**
 * Launches an alert dialog with the specified title and message.
 *
 * Optionally provide a list of buttons. Tapping any button will fire the
 * respective onPress callback and dismiss the alert. By default, the only
 * button will be an 'OK' button.
 *
 * This is an API that works both on iOS and Android and can show static
 * alerts. To show an alert that prompts the user to enter some information,
 * see `AlertIOS`; entering text in an alert is common on iOS only.
 *
 * ## iOS
 *
 * On iOS you can specify any number of buttons. Each button can optionally
 * specify a style, which is one of 'default', 'cancel' or 'destructive'.
 *
 * ## Android
 *
 * On Android at most three buttons can be specified. Android has a concept
 * of a neutral, negative and a positive button:
 *
 *   - If you specify one button, it will be the 'positive' one (such as 'OK')
 *   - Two buttons mean 'negative', 'positive' (such as 'Cancel', 'OK')
 *   - Three buttons mean 'neutral', 'negative', 'positive' (such as 'Later', 'Cancel', 'OK')
 *
 * ```
 * // Works on both iOS and Android
 * Alert.alert(
 *   'Alert Title',
 *   'My Alert Msg',
 *   [
 *     {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
 *     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
 *     {text: 'OK', onPress: () => console.log('OK Pressed')},
 *   ]
 * )
 * ```
 */
export interface AlertStatic {
    alert: (title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions, type?: string) => void;
}

/**
 * Wrapper around the Android native module.
 */
export interface AlertAndroidStatic {
    alert: (title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions) => void;
}

/**
 * //FIXME: No documentation - inferred from RCTAdSupport.m
 */
export interface AdSupportIOSStatic {
    getAdvertisingId: (onSuccess: (deviceId: string) => void, onFailure: (err: Error) => void) => void;
    getAdvertisingTrackingEnabled: (onSuccess: (hasTracking: boolean) => void, onFailure: (err: Error) => void) => void;
}

interface AlertIOSButton {
    text: string;
    onPress?: (message?: string) => void;
    style?: "default" | "cancel" | "destructive";
}

export type AlertType = "default" | "plain-text" | "secure-text" | "login-password";

/**
 * @description
 * `AlertIOS` provides functionality to create an iOS alert dialog with a
 * message or create a prompt for user input.
 *
 * We recommend using the [`Alert.alert`](/docs/alert.html) method for
 * cross-platform support if you don't need to create iOS-only prompts.
 *
 * @see https://facebook.github.io/react-native/docs/alertios.html#content
 */
export interface AlertIOSStatic {
    /**
     * Create and display a popup alert.
     * @param title The dialog's title.
     * @param message An optional message that appears below
     *     the dialog's title.
     * @param callbackOrButtons This optional argument should
     *    be either a single-argument function or an array of buttons. If passed
     *    a function, it will be called when the user taps 'OK'.
     *
     *    If passed an array of button configurations, each button should include
     *    a `text` key, as well as optional `onPress` and `style` keys. `style`
     *    should be one of 'default', 'cancel' or 'destructive'.
     * @param type Deprecated, do not use.
     */
    alert: (
        title: string,
        message?: string,
        callbackOrButtons?: (() => void) | Array<AlertIOSButton>,
        type?: AlertType
    ) => void;

    /**
     * Create and display a prompt to enter some text.
     * @param title The dialog's title.
     * @param message An optional message that appears above the text
     *    input.
     * @param callbackOrButtons This optional argument should
     *    be either a single-argument function or an array of buttons. If passed
     *    a function, it will be called with the prompt's value when the user
     *    taps 'OK'.
     *
     *    If passed an array of button configurations, each button should include
     *    a `text` key, as well as optional `onPress` and `style` keys (see
     *    example). `style` should be one of 'default', 'cancel' or 'destructive'.
     * @param type This configures the text input. One of 'plain-text',
     *    'secure-text' or 'login-password'.
     * @param defaultValue The default text in text input.
     */
    prompt: (
        title: string,
        message?: string,
        callbackOrButtons?: ((value: string) => void) | Array<AlertIOSButton>,
        type?: AlertType,
        defaultValue?: string
    ) => void;
}

/**
 * AppStateIOS can tell you if the app is in the foreground or background,
 * and notify you when the state changes.
 *
 * AppStateIOS is frequently used to determine the intent and proper behavior
 * when handling push notifications.
 *
 * iOS App States
 *      active - The app is running in the foreground
 *      background - The app is running in the background. The user is either in another app or on the home screen
 *      inactive - This is a transition state that currently never happens for typical React Native apps.
 *
 * For more information, see Apple's documentation: https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/TheAppLifeCycle/TheAppLifeCycle.html
 *
 * @see https://facebook.github.io/react-native/docs/appstateios.html#content
 */
export type AppStateEvent = "change" | "memoryWarning";
export type AppStateStatus = "active" | "background" | "inactive";

export interface AppStateStatic {
    currentState: string;

    /**
     * Add a handler to AppState changes by listening to the change event
     * type and providing the handler
     */
    addEventListener(type: AppStateEvent, listener: (state: AppStateStatus) => void): void;

    /**
     * Remove a handler by passing the change event type and the handler
     */
    removeEventListener(type: AppStateEvent, listener: (state: AppStateStatus) => void): void;
}

/**
 * AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage
 * system that is global to the app.  It should be used instead of LocalStorage.
 *
 * It is recommended that you use an abstraction on top of `AsyncStorage`
 * instead of `AsyncStorage` directly for anything more than light usage since
 * it operates globally.
 *
 * On iOS, `AsyncStorage` is backed by native code that stores small values in a
 * serialized dictionary and larger values in separate files. On Android,
 * `AsyncStorage` will use either [RocksDB](http://rocksdb.org/) or SQLite
 * based on what is available.
 *
 * @see https://facebook.github.io/react-native/docs/asyncstorage.html#content
 */
export interface AsyncStorageStatic {
    /**
     * Fetches key and passes the result to callback, along with an Error if there is any.
     */
    getItem(key: string, callback?: (error?: Error, result?: string) => void): Promise<string>;

    /**
     * Sets value for key and calls callback on completion, along with an Error if there is any
     */
    setItem(key: string, value: string, callback?: (error?: Error) => void): Promise<void>;

    removeItem(key: string, callback?: (error?: Error) => void): Promise<void>;

    /**
     * Merges existing value with input value, assuming they are stringified json. Returns a Promise object.
     * Not supported by all native implementation
     */
    mergeItem(key: string, value: string, callback?: (error?: Error) => void): Promise<void>;

    /**
     * Erases all AsyncStorage for all clients, libraries, etc. You probably don't want to call this.
     * Use removeItem or multiRemove to clear only your own keys instead.
     */
    clear(callback?: (error?: Error) => void): Promise<void>;

    /**
     * Gets all keys known to the app, for all callers, libraries, etc
     */
    getAllKeys(callback?: (error?: Error, keys?: string[]) => void): Promise<string[]>;

    /**
     * multiGet invokes callback with an array of key-value pair arrays that matches the input format of multiSet
     */
    multiGet(
        keys: string[],
        callback?: (errors?: Error[], result?: [string, string][]) => void
    ): Promise<[string, string][]>;

    /**
     * multiSet and multiMerge take arrays of key-value array pairs that match the output of multiGet,
     *
     * multiSet([['k1', 'val1'], ['k2', 'val2']], cb);
     */
    multiSet(keyValuePairs: string[][], callback?: (errors?: Error[]) => void): Promise<void>;

    /**
     * Delete all the keys in the keys array.
     */
    multiRemove(keys: string[], callback?: (errors?: Error[]) => void): Promise<void>;

    /**
     * Merges existing values with input values, assuming they are stringified json.
     * Returns a Promise object.
     *
     * Not supported by all native implementations.
     */
    multiMerge(keyValuePairs: string[][], callback?: (errors?: Error[]) => void): Promise<void>;
}

export type BackPressEventName = "hardwareBackPress";

/**
 * Detect hardware back button presses, and programmatically invoke the
 * default back button functionality to exit the app if there are no
 * listeners or if none of the listeners return true.
 * Methods don't have more detailed documentation as of 0.25.
 */
export interface BackAndroidStatic {
    exitApp(): void;
    addEventListener(eventName: BackPressEventName, handler: () => void): void;
    removeEventListener(eventName: BackPressEventName, handler: () => void): void;
}

/**
 * Detect hardware back button presses, and programmatically invoke the
 * default back button functionality to exit the app if there are no
 * listeners or if none of the listeners return true.
 * Methods don't have more detailed documentation as of 0.25.
 */
export interface BackHandlerStatic {
    exitApp(): void;
    addEventListener(eventName: BackPressEventName, handler: () => void): void;
    removeEventListener(eventName: BackPressEventName, handler: () => void): void;
}

export interface ButtonProperties {
    title: string;
    onPress: () => any;
    color?: string;
    accessibilityLabel?: string;
    disabled?: boolean;

    /**
     * Used to locate this button in end-to-end tests.
     */
    testID?: string;
}

export interface ButtonStatic extends React.ComponentClass<ButtonProperties> {}

export type CameraRollGroupType = "Album" | "All" | "Event" | "Faces" | "Library" | "PhotoStream" | "SavedPhotos";
export type CameraRollAssetType = "All" | "Videos" | "Photos";

export interface CameraRollFetchParams {
    first: number;
    after?: string;
    groupTypes?: CameraRollGroupType;
    groupName?: string;
    assetType?: CameraRollAssetType;
}

export interface CameraRollNodeInfo {
    image: Image;
    group_name: string;
    timestamp: number;
    location: any;
}

export interface CameraRollEdgeInfo {
    node: CameraRollNodeInfo;
}

export interface CameraRollAssetInfo {
    edges: CameraRollEdgeInfo[];
    page_info: {
        has_next_page: boolean;
        end_cursor: string;
    };
}

export interface GetPhotosParamType {
    first: number;
    after?: string;
    groupTypes?: CameraRollGroupType;
    groupName?: string;
    assetType?: CameraRollAssetType;
    mimeTypes?: string[];
}

export interface GetPhotosReturnType {
    edges: {
        node: {
            type: string;
            group_name: string;
            image: {
                uri: string;
                height: number;
                width: number;
                isStored?: boolean;
            };
            timestamp: number;
            location: {
                latitude: number;
                longitude: number;
                altitude: number;
                heading: number;
                speed: number;
            };
        };
    }[];

    page_info: {
        has_next_page: boolean;
        start_cursor?: string;
        end_cursor?: string;
    };
}

/**
 * CameraRoll provides access to the local camera roll / gallery.
 * Before using this you must link the RCTCameraRoll library.
 * You can refer to (Linking)[https://facebook.github.io/react-native/docs/linking-libraries-ios.html] for help.
 */
export interface CameraRollStatic {
    GroupTypesOptions: CameraRollGroupType[]; //'Album','All','Event','Faces','Library','PhotoStream','SavedPhotos'
    AssetTypeOptions: CameraRollAssetType[]; // "All", "Videos", "Photos"

    /**
     * Saves the image to the camera roll / gallery.
     *
     * @tag On Android, this is a local URI, such as "file:///sdcard/img.png".
     * On iOS, the tag can be one of the following:
     *      local URI
     *      assets-library tag
     *      a tag not maching any of the above, which means the image data will be stored in memory (and consume memory as long as the process is alive)
     *
     * @deprecated use saveToCameraRoll instead
     */
    saveImageWithTag(tag: string): Promise<string>;

    /**
     * Saves the photo or video to the camera roll / gallery.
     *
     * On Android, the tag must be a local image or video URI, such as `"file:///sdcard/img.png"`.
     *
     * On iOS, the tag can be any image URI (including local, remote asset-library and base64 data URIs)
     * or a local video file URI (remote or data URIs are not supported for saving video at this time).
     *
     * If the tag has a file extension of .mov or .mp4, it will be inferred as a video. Otherwise
     * it will be treated as a photo. To override the automatic choice, you can pass an optional
     * `type` parameter that must be one of 'photo' or 'video'.
     *
     * Returns a Promise which will resolve with the new URI.
     */
    saveToCameraRoll(tag: string, type?: "photo" | "video"): Promise<string>;

    /**
     * Saves the photo or video to the camera roll / gallery.
     *
     * On Android, the tag must be a local image or video URI, such as `"file:///sdcard/img.png"`.
     *
     * On iOS, the tag can be any image URI (including local, remote asset-library and base64 data URIs)
     * or a local video file URI (remote or data URIs are not supported for saving video at this time).
     *
     * If the tag has a file extension of .mov or .mp4, it will be inferred as a video. Otherwise
     * it will be treated as a photo. To override the automatic choice, you can pass an optional
     * `type` parameter that must be one of 'photo' or 'video'.
     *
     * Returns a Promise which will resolve with the new URI.
     */
    saveToCameraRoll(tag: string, type?: "photo" | "video"): Promise<string>;

    /**
     * Invokes callback with photo identifier objects from the local camera roll of the device matching shape defined by getPhotosReturnChecker.
     *
     * @param params See getPhotosParamChecker.
     */
    getPhotos(params: GetPhotosParamType): Promise<GetPhotosReturnType>;
}

/** Clipboard gives you an interface for setting and getting content from Clipboard on both iOS and Android */
export interface ClipboardStatic {
    getString(): Promise<string>;
    setString(content: string): void;
}

export interface DatePickerAndroidOpenOption {
    date?: Date | number;
    minDate?: Date | number;
    maxDate?: Date | number;
    mode?: "calendar" | "spinner" | "default";
}

// Deduced from DatePickerAndroid.android.js
export interface DatePickerAndroidOpenReturn {
    action: string; // "dateSetAction" | "dismissedAction"
    year?: number;
    month?: number;
    day?: number;
}

export interface DatePickerAndroidStatic {
    /*
        Opens the standard Android date picker dialog.

        The available keys for the options object are:
        * date (Date object or timestamp in milliseconds) - date to show by default
        * minDate (Date object or timestamp in milliseconds) - minimum date that can be selected
        * maxDate (Date object or timestamp in milliseconds) - maximum date that can be selected

        Returns a Promise which will be invoked an object containing action, year, month (0-11), day if the user picked
        a date. If the user dismissed the dialog, the Promise will still be resolved with action being
        DatePickerAndroid.dismissedAction and all the other keys being undefined. Always check whether the action before
        reading the values.

        Note the native date picker dialog has some UI glitches on Android 4 and lower when using the minDate and maxDate options.
        */
    open(options?: DatePickerAndroidOpenOption): Promise<DatePickerAndroidOpenReturn>;

    /**
     * A date has been selected.
     */
    dateSetAction: string;

    /**
     * The dialog has been dismissed.
     */
    dismissedAction: string;
}

export interface IntentAndroidStatic {
    /**
     * Starts a corresponding external activity for the given URL.

        For example, if the URL is "https://www.facebook.com", the system browser will be opened, or the "choose application" dialog will be shown.

        You can use other URLs, like a location (e.g. "geo:37.484847,-122.148386"), a contact, or any other URL that can be opened with {@code Intent.ACTION_VIEW}.

        NOTE: This method will fail if the system doesn't know how to open the specified URL. If you're passing in a non-http(s) URL, it's best to check {@code canOpenURL} first.

        NOTE: For web URLs, the protocol ("http://", "https://") must be set accordingly!

        @deprecated
        */
    openURL(url: string): void;

    /**
     * Determine whether or not an installed app can handle a given URL.

        You can use other URLs, like a location (e.g. "geo:37.484847,-122.148386"), a contact, or any other URL that can be opened with {@code Intent.ACTION_VIEW}.

        NOTE: For web URLs, the protocol ("http://", "https://") must be set accordingly!

        @param URL the URL to open

        @deprecated
        */
    canOpenURL(url: string, callback: (supported: boolean) => void): void;

    /**
     * If the app launch was triggered by an app link with {@code Intent.ACTION_VIEW}, it will give the link url, otherwise it will give null

        Refer http://developer.android.com/training/app-indexing/deep-linking.html#handling-intents

        @deprecated
        */
    getInitialURL(callback: (url: string) => void): void;
}

export interface LinkingStatic extends NativeEventEmitter {
    /**
     * Add a handler to Linking changes by listening to the `url` event type
     * and providing the handler
     */
    addEventListener(type: string, handler: (event: { url: string }) => void): void;

    /**
     * Remove a handler by passing the `url` event type and the handler
     */
    removeEventListener(type: string, handler: (event: { url: string }) => void): void;

    /**
     * Try to open the given url with any of the installed apps.
     * You can use other URLs, like a location (e.g. "geo:37.484847,-122.148386"), a contact, or any other URL that can be opened with the installed apps.
     * NOTE: This method will fail if the system doesn't know how to open the specified URL. If you're passing in a non-http(s) URL, it's best to check {@code canOpenURL} first.
     * NOTE: For web URLs, the protocol ("http://", "https://") must be set accordingly!
     */
    openURL(url: string): Promise<any>;

    /**
     * Determine whether or not an installed app can handle a given URL.
     * NOTE: For web URLs, the protocol ("http://", "https://") must be set accordingly!
     * NOTE: As of iOS 9, your app needs to provide the LSApplicationQueriesSchemes key inside Info.plist.
     * @param URL the URL to open
     */
    canOpenURL(url: string): Promise<boolean>;

    /**
     * If the app launch was triggered by an app link with, it will give the link url, otherwise it will give null
     * NOTE: To support deep linking on Android, refer http://developer.android.com/training/app-indexing/deep-linking.html#handling-intents
     */
    getInitialURL(): Promise<string>;
}

export interface LinkingIOSStatic {
    /**
     * Add a handler to LinkingIOS changes by listening to the url event type and providing the handler
     @deprecated
     */
    addEventListener(type: string, handler: (event: { url: string }) => void): void;

    /**
     * Remove a handler by passing the url event type and the handler
     @deprecated
     */
    removeEventListener(type: string, handler: (event: { url: string }) => void): void;

    /**
     * Try to open the given url with any of the installed apps.
     @deprecated
     */
    openURL(url: string): void;

    /**
     * Determine whether or not an installed app can handle a given URL. The callback function will be called with bool supported as the only argument
     NOTE: As of iOS 9, your app needs to provide the LSApplicationQueriesSchemes key inside Info.plist.
     @deprecated
     */
    canOpenURL(url: string, callback: (supported: boolean) => void): void;

    /**
     * If the app launch was triggered by an app link, it will pop the link url, otherwise it will return null
     @deprecated
     */
    popInitialURL(): string;
}

/**
 * NetInfo exposes info about online/offline status
 * @see https://facebook.github.io/react-native/docs/netinfo.html#content
 */

// @Deprecated ConnectionType
export type ConnectionType =
    | "none"
    | "wifi"
    | "cell"
    | "unknown"
    | "NONE"
    | "MOBILE"
    | "WIFI"
    | "MOBILE_MMS"
    | "MOBILE_SUPL"
    | "MOBILE_DUN"
    | "MOBILE_HIPRI"
    | "WIMAX"
    | "BLUETOOTH"
    | "DUMMY"
    | "ETHERNET"
    | "MOBILE_FOTA"
    | "MOBILE_IMS"
    | "MOBILE_CBS"
    | "WIFI_P2P"
    | "MOBILE_IA"
    | "MOBILE_EMERGENCY"
    | "PROXY"
    | "VPN"
    | "UNKNOWN";

export type EffectiveConnectionType = "2g" | "3g" | "4g" | "unknown";

export interface ConnectionInfo {
    type: ConnectionType;
    effectiveType: EffectiveConnectionType;
}

export interface NetInfoStatic {
    /**
     * This function is deprecated. Use `getConnectionInfo` instead. Returns a promise that
     * resolves with one of the deprecated connectivity types listed above.
     */
    fetch: () => Promise<ConnectionType>;

    /**
     * Adds an event handler. Supported events:
     *
     * - `connectionChange`: Fires when the network status changes. The argument to the event
     *   handler is an object with keys:
     *   - `type`: A `DeprecatedConnectionType` (listed above)
     *   - `effectiveType`: An `EffectiveConnectionType` (listed above)
     * - `change`: This event is deprecated. Listen to `connectionChange` instead. Fires when
     *   the network status changes. The argument to the event handler is one of the deprecated
     *   connectivity types listed above.
     */
    addEventListener: (eventName: string, listener: (result: ConnectionInfo | ConnectionType) => void) => void;

    /**
     * Removes the listener for network status changes.
     */
    removeEventListener: (eventName: string, listener: (result: ConnectionInfo | ConnectionType) => void) => void;

    /**
     * Returns a promise that resolves to an object with `type` and `effectiveType` keys
     * whose values are a `ConnectionType` and an `EffectiveConnectionType`, (described above),
     * respectively.
     */
    getConnectionInfo: () => Promise<ConnectionInfo>;

    /**
     * An object with the same methods as above but the listener receives a
     * boolean which represents the internet connectivity.
     * Use this if you are only interested with whether the device has internet
     * connectivity.
     */
    isConnected: {
        fetch: () => Promise<boolean>;

        /**
         * eventName is expected to be `change`(deprecated) or `connectionChange`
         */
        addEventListener: (eventName: string, listener: (result: boolean) => void) => void;

        /**
         * eventName is expected to be `change`(deprecated) or `connectionChange`
         */
        removeEventListener: (eventName: string, listener: (result: boolean) => void) => void;
    };

    /**
     * Detect if the current active connection is
     * metered or not. A network is classified as metered when the user is
     * sensitive to heavy data usage on that connection due to monetary
     * costs, data limitations or battery/performance issues.
     */
    isConnectionExpensive: Promise<boolean>;
}

export interface PanResponderGestureState {
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

/**
 * @see documentation of GestureResponderHandlers
 */
export interface PanResponderCallbacks {
    onMoveShouldSetPanResponder?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean;
    onStartShouldSetPanResponder?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean;
    onPanResponderGrant?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => void;
    onPanResponderMove?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => void;
    onPanResponderRelease?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => void;
    onPanResponderTerminate?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => void;

    onMoveShouldSetPanResponderCapture?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean;
    onStartShouldSetPanResponderCapture?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean;
    onPanResponderReject?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => void;
    onPanResponderStart?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => void;
    onPanResponderEnd?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => void;
    onPanResponderTerminationRequest?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean;
    onShouldBlockNativeResponder?: (e: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean;
}

export interface PanResponderInstance {
    panHandlers: GestureResponderHandlers;
}

/**
 * PanResponder reconciles several touches into a single gesture.
 * It makes single-touch gestures resilient to extra touches,
 * and can be used to recognize simple multi-touch gestures.
 *
 * It provides a predictable wrapper of the responder handlers provided by the gesture responder system.
 * For each handler, it provides a new gestureState object alongside the normal event.
 */
export interface PanResponderStatic {
    /**
     * @param config Enhanced versions of all of the responder callbacks
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
    create(config: PanResponderCallbacks): PanResponderInstance;
}

export interface Rationale {
    title: string;
    message: string;
}

export type Permission =
    | "android.permission.READ_CALENDAR"
    | "android.permission.WRITE_CALENDAR"
    | "android.permission.CAMERA"
    | "android.permission.READ_CONTACTS"
    | "android.permission.WRITE_CONTACTS"
    | "android.permission.GET_ACCOUNTS"
    | "android.permission.ACCESS_FINE_LOCATION"
    | "android.permission.ACCESS_COARSE_LOCATION"
    | "android.permission.RECORD_AUDIO"
    | "android.permission.READ_PHONE_STATE"
    | "android.permission.CALL_PHONE"
    | "android.permission.READ_CALL_LOG"
    | "android.permission.WRITE_CALL_LOG"
    | "com.android.voicemail.permission.ADD_VOICEMAIL"
    | "android.permission.USE_SIP"
    | "android.permission.PROCESS_OUTGOING_CALLS"
    | "android.permission.BODY_SENSORS"
    | "android.permission.SEND_SMS"
    | "android.permission.RECEIVE_SMS"
    | "android.permission.READ_SMS"
    | "android.permission.RECEIVE_WAP_PUSH"
    | "android.permission.RECEIVE_MMS"
    | "android.permission.READ_EXTERNAL_STORAGE"
    | "android.permission.WRITE_EXTERNAL_STORAGE";

export type PermissionStatus = "granted" | "denied" | "never_ask_again";

export interface PermissionsAndroidStatic {
    /**
     * A list of permission results that are returned
     */
    RESULTS: { [key: string]: PermissionStatus };
    /**
     * A list of specified "dangerous" permissions that require prompting the user
     */
    PERMISSIONS: { [key: string]: Permission };
    new (): PermissionsAndroidStatic;
    /**
     * Deprecated
     */
    checkPermission(permission: Permission): Promise<boolean>;
    /**
     * Returns a promise resolving to a boolean value as to whether the specified
     * permissions has been granted
     */
    check(permission: Permission): Promise<boolean>;
    /**
     * Deprecated
     */
    requestPermission(permission: Permission, rationale?: Rationale): Promise<boolean>;
    /**
     * Prompts the user to enable a permission and returns a promise resolving to a
     * string value indicating whether the user allowed or denied the request
     *
     * If the optional rationale argument is included (which is an object with a
     * title and message), this function checks with the OS whether it is necessary
     * to show a dialog explaining why the permission is needed
     * (https://developer.android.com/training/permissions/requesting.html#explain)
     * and then shows the system permission dialog
     */
    request(permission: Permission, rationale?: Rationale): Promise<string>;
    /**
     * Prompts the user to enable multiple permissions in the same dialog and
     * returns an object with the permissions as keys and strings as values
     * indicating whether the user allowed or denied the request
     */
    requestMultiple(permissions: Array<string>): Promise<{ [permission: string]: PermissionStatus }>;
}

export interface PushNotificationPermissions {
    alert?: boolean;
    badge?: boolean;
    sound?: boolean;
}

export interface PushNotification {
    /**
     * An alias for `getAlert` to get the notification's main message string
     */
    getMessage(): string | Object;

    /**
     * Gets the sound string from the `aps` object
     */
    getSound(): string;

    /**
     * Gets the notification's main message from the `aps` object
     */
    getAlert(): string | Object;

    /**
     * Gets the badge count number from the `aps` object
     */
    getBadgeCount(): number;

    /**
     * Gets the data object on the notif
     */
    getData(): Object;

    /**
     * iOS Only
     * Signifies remote notification handling is complete
     */
    finish(result: string): void;
}

type PresentLocalNotificationDetails = {
    alertBody: string;
    alertAction: string;
    soundName?: string;
    category?: string;
    userInfo?: Object;
    applicationIconBadgeNumber?: number;
};

type ScheduleLocalNotificationDetails = {
    fireDate: Date;
    alertBody: string;
    alertAction: string;
    soundName?: string;
    category?: string;
    userInfo?: Object;
    applicationIconBadgeNumber?: number;
};

export type PushNotificationEventName = "notification" | "localNotification" | "register" | "registrationError";

type FetchResult = {
    NewData: "UIBackgroundFetchResultNewData",
    NoData: "UIBackgroundFetchResultNoData",
    ResultFailed: "UIBackgroundFetchResultFailed"
};

/**
 * Handle push notifications for your app, including permission handling and icon badge number.
 * @see https://facebook.github.io/react-native/docs/pushnotificationios.html#content
 *
 * //FIXME: BGR: The documentation seems completely off compared to the actual js implementation. I could never get the example to run
 */
export interface PushNotificationIOSStatic {
    /**
     * Schedules the localNotification for immediate presentation.
     * details is an object containing:
     * alertBody : The message displayed in the notification alert.
     * alertAction : The "action" displayed beneath an actionable notification. Defaults to "view";
     * soundName : The sound played when the notification is fired (optional).
     * category : The category of this notification, required for actionable notifications (optional).
     * userInfo : An optional object containing additional notification data.
     * applicationIconBadgeNumber (optional) : The number to display as the app's icon badge. The default value of this property is 0, which means that no badge is displayed.
     */
    presentLocalNotification(details: PresentLocalNotificationDetails): void;

    /**
     * Schedules the localNotification for future presentation.
     * details is an object containing:
     * fireDate : The date and time when the system should deliver the notification.
     * alertBody : The message displayed in the notification alert.
     * alertAction : The "action" displayed beneath an actionable notification. Defaults to "view";
     * soundName : The sound played when the notification is fired (optional).
     * category : The category of this notification, required for actionable notifications (optional).
     * userInfo : An optional object containing additional notification data.
     * applicationIconBadgeNumber (optional) : The number to display as the app's icon badge. Setting the number to 0 removes the icon badge.
     */
    scheduleLocalNotification(details: ScheduleLocalNotificationDetails): void;

    /**
     * Cancels all scheduled localNotifications
     */
    cancelAllLocalNotifications(): void;

    /**
     * Cancel local notifications.
     * Optionally restricts the set of canceled notifications to those notifications whose userInfo fields match the corresponding fields in the userInfo argument.
     */
    cancelLocalNotifications(userInfo: Object): void;

    /**
     * Sets the badge number for the app icon on the home screen
     */
    setApplicationIconBadgeNumber(number: number): void;

    /**
     * Gets the current badge number for the app icon on the home screen
     */
    getApplicationIconBadgeNumber(callback: (badge: number) => void): void;

    /**
     * Gets the local notifications that are currently scheduled.
     */
    getScheduledLocalNotifications(callback: (notifications: ScheduleLocalNotificationDetails[]) => void): void;

    /**
     * Attaches a listener to remote notifications while the app is running in the
     * foreground or the background.
     *
     * The handler will get be invoked with an instance of `PushNotificationIOS`
     *
     * The type MUST be 'notification'
     */
    addEventListener(type: PushNotificationEventName, handler: (notification: PushNotification) => void): void;

    /**
     * Removes the event listener. Do this in `componentWillUnmount` to prevent
     * memory leaks
     */
    removeEventListener(type: PushNotificationEventName, handler: (notification: PushNotification) => void): void;

    /**
     * Requests all notification permissions from iOS, prompting the user's
     * dialog box.
     */
    requestPermissions(permissions?: PushNotificationPermissions[]): void;

    /**
     * Requests all notification permissions from iOS, prompting the user's
     * dialog box.
     */
    requestPermissions(permissions?: PushNotificationPermissions): Promise<PushNotificationPermissions>;

    /**
     * Unregister for all remote notifications received via Apple Push
     * Notification service.
     * You should call this method in rare circumstances only, such as when
     * a new version of the app removes support for all types of remote
     * notifications. Users can temporarily prevent apps from receiving
     * remote notifications through the Notifications section of the
     * Settings app. Apps unregistered through this method can always
     * re-register.
     */
    abandonPermissions(): void;

    /**
     * See what push permissions are currently enabled. `callback` will be
     * invoked with a `permissions` object:
     *
     *  - `alert` :boolean
     *  - `badge` :boolean
     *  - `sound` :boolean
     */
    checkPermissions(callback: (permissions: PushNotificationPermissions) => void): void;

    /**
     * This method returns a promise that resolves to either the notification
     * object if the app was launched by a push notification, or `null` otherwise.
     */
    getInitialNotification(): Promise<PushNotification>;

    /**
     * iOS fetch results that best describe the result of a finished remote notification handler.
     * For a list of possible values, see `PushNotificationIOS.FetchResult`.
     */
    FetchResult: FetchResult;
}

export interface SettingsStatic {
    get(key: string): any;
    set(settings: Object): void;
    watchKeys(keys: string | Array<string>, callback: (() => void)): number;
    clearWatch(watchId: number): void;
}

export type StatusBarStyle = "default" | "light-content" | "dark-content";

export type StatusBarAnimation = "none" | "fade" | "slide";

export interface StatusBarPropertiesIOS {
    /**
     * Sets the color of the status bar text.
     */
    barStyle?: StatusBarStyle;

    /**
     * If the network activity indicator should be visible.
     */
    networkActivityIndicatorVisible?: boolean;

    /**
     * The transition effect when showing and hiding the status bar using
     * the hidden prop. Defaults to 'fade'.
     */
    showHideTransition?: "fade" | "slide";
}

export interface StatusBarPropertiesAndroid {
    /**
     * The background color of the status bar.
     */
    backgroundColor?: string;

    /**
     * If the status bar is translucent. When translucent is set to true,
     * the app will draw under the status bar. This is useful when using a
     * semi transparent status bar color.
     */
    translucent?: boolean;
}

export interface StatusBarProperties extends StatusBarPropertiesIOS, StatusBarPropertiesAndroid {
    /**
     * If the transition between status bar property changes should be
     * animated. Supported for backgroundColor, barStyle and hidden.
     */
    animated?: boolean;

    /**
     * If the status bar is hidden.
     */
    hidden?: boolean;
}

export interface StatusBarStatic extends React.ComponentClass<StatusBarProperties> {
    /**
     * The current height of the status bar on the device.
     * @platform android
     */
    currentHeight?: number;

    /**
     * Show or hide the status bar
     * @param hidden The dialog's title.
     * @param animation Optional animation when
     *    changing the status bar hidden property.
     */
    setHidden: (hidden: boolean, animation?: StatusBarAnimation) => void;

    /**
     * Set the status bar style
     * @param style Status bar style to set
     * @param animated Animate the style change.
     */
    setBarStyle: (style: StatusBarStyle, animated?: boolean) => void;

    /**
     * Control the visibility of the network activity indicator
     * @param visible Show the indicator.
     */
    setNetworkActivityIndicatorVisible: (visible: boolean) => void;

    /**
     * Set the background color for the status bar
     * @param color Background color.
     * @param animated Animate the style change.
     */
    setBackgroundColor: (color: string, animated?: boolean) => void;

    /**
     * Control the translucency of the status bar
     * @param translucent Set as translucent.
     */
    setTranslucent: (translucent: boolean) => void;
}

/**
 * StatusBarIOS is deprecated.
 * Use `StatusBar` for mutating the status bar.
 */
export interface StatusBarIOSStatic extends NativeEventEmitter {}

type TimePickerAndroidOpenOptions = {
    hour?: number;
    minute?: number;
    is24Hour?: boolean;
};

/**
 * Opens the standard Android time picker dialog.
 *
 * ### Example
 *
 * ```
 * try {
 *   const {action, hour, minute} = await TimePickerAndroid.open({
 *     hour: 14,
 *     minute: 0,
 *     is24Hour: false, // Will display '2 PM'
 *   });
 *   if (action !== TimePickerAndroid.dismissedAction) {
 *     // Selected hour (0-23), minute (0-59)
 *   }
 * } catch ({code, message}) {
 *   console.warn('Cannot open time picker', message);
 * }
 * ```
 */
export interface TimePickerAndroidStatic {
    /**
     * Opens the standard Android time picker dialog.
     *
     * The available keys for the `options` object are:
     *   * `hour` (0-23) - the hour to show, defaults to the current time
     *   * `minute` (0-59) - the minute to show, defaults to the current time
     *   * `is24Hour` (boolean) - If `true`, the picker uses the 24-hour format. If `false`,
     *     the picker shows an AM/PM chooser. If undefined, the default for the current locale
     *     is used.
     *
     * Returns a Promise which will be invoked an object containing `action`, `hour` (0-23),
     * `minute` (0-59) if the user picked a time. If the user dismissed the dialog, the Promise will
     * still be resolved with action being `TimePickerAndroid.dismissedAction` and all the other keys
     * being undefined. **Always** check whether the `action` before reading the values.
     */
    open(options: TimePickerAndroidOpenOptions): Promise<{ action: string; hour: number; minute: number }>;

    /**
     * A time has been selected.
     */
    timeSetAction: string;

    /**
     * The dialog has been dismissed.
     */
    dismissedAction: string;
}

/**
 * This exposes the native ToastAndroid module as a JS module. This has a function 'show'
 * which takes the following parameters:
 *
 * 1. String message: A string with the text to toast
 * 2. int duration: The duration of the toast. May be ToastAndroid.SHORT or ToastAndroid.LONG
 *
 * There is also a function `showWithGravity` to specify the layout gravity. May be
 * ToastAndroid.TOP, ToastAndroid.BOTTOM, ToastAndroid.CENTER
 */
export interface ToastAndroidStatic {
    /**
     * String message: A string with the text to toast
     * int duration: The duration of the toast.
     * May be ToastAndroid.SHORT or ToastAndroid.LONG
     */
    show(message: string, duration: number): void;
    /** `gravity` may be ToastAndroid.TOP, ToastAndroid.BOTTOM, ToastAndroid.CENTER */
    showWithGravity(message: string, duration: number, gravity: number): void;
    // Toast duration constants
    SHORT: number;
    LONG: number;
    // Toast gravity constants
    TOP: number;
    BOTTOM: number;
    CENTER: number;
}

export interface UIManagerStatic {
    /**
     * Capture an image of the screen, window or an individual view. The image
     * will be stored in a temporary file that will only exist for as long as the
     * app is running.
     *
     * The `view` argument can be the literal string `window` if you want to
     * capture the entire window, or it can be a reference to a specific
     * React Native component.
     *
     * The `options` argument may include:
     * - width/height (number) - the width and height of the image to capture.
     * - format (string) - either 'png' or 'jpeg'. Defaults to 'png'.
     * - quality (number) - the quality when using jpeg. 0.0 - 1.0 (default).
     *
     * Returns a Promise<string> (tempFilePath)
     * @platform ios
     */
    takeSnapshot: (
        view?: "window" | React.ReactElement<any> | number,
        options?: {
            width?: number;
            height?: number;
            format?: "png" | "jpeg";
            quality?: number;
        }
    ) => Promise<string>;

    /**
     * Determines the location on screen, width, and height of the given view and
     * returns the values via an async callback. If successful, the callback will
     * be called with the following arguments:
     *
     *  - x
     *  - y
     *  - width
     *  - height
     *  - pageX
     *  - pageY
     *
     * Note that these measurements are not available until after the rendering
     * has been completed in native. If you need the measurements as soon as
     * possible, consider using the [`onLayout`
     * prop](docs/view.html#onlayout) instead.
     */
    measure(node: number, callback: MeasureOnSuccessCallback): void;

    /**
     * Determines the location of the given view in the window and returns the
     * values via an async callback. If the React root view is embedded in
     * another native view, this will give you the absolute coordinates. If
     * successful, the callback will be called with the following
     * arguments:
     *
     *  - x
     *  - y
     *  - width
     *  - height
     *
     * Note that these measurements are not available until after the rendering
     * has been completed in native.
     */
    measureInWindow(node: number, callback: MeasureInWindowOnSuccessCallback): void;

    /**
     * Like [`measure()`](#measure), but measures the view relative an ancestor,
     * specified as `relativeToNativeNode`. This means that the returned x, y
     * are relative to the origin x, y of the ancestor view.
     *
     * As always, to obtain a native node handle for a component, you can use
     * `React.findNodeHandle(component)`.
     */
    measureLayout(
        node: number,
        relativeToNativeNode: number,
        onFail: () => void /* currently unused */,
        onSuccess: MeasureLayoutOnSuccessCallback
    ): void;

    /**
     * Automatically animates views to their new positions when the
     * next layout happens.
     *
     * A common way to use this API is to call it before calling `setState`.
     *
     * Note that in order to get this to work on **Android** you need to set the following flags via `UIManager`:
     *
     *     UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
     */
    setLayoutAnimationEnabledExperimental(value: boolean): void;
}

export interface SwitchPropertiesIOS extends ViewProperties {
    /**
     * Background color when the switch is turned on.
     */
    onTintColor?: string;

    /**
     * Color of the foreground switch grip.
     */
    thumbTintColor?: string;

    /**
     * Background color when the switch is turned off.
     */
    tintColor?: string;
}

export interface SwitchProperties extends SwitchPropertiesIOS {
    /**
     * If true the user won't be able to toggle the switch.
     * Default value is false.
     */
    disabled?: boolean;

    /**
     * Invoked with the new value when the value changes.
     */
    onValueChange?: (value: boolean) => void;

    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string;

    /**
     * The value of the switch. If true the switch will be turned on.
     * Default value is false.
     */
    value?: boolean;
    style?: StyleProp<ViewStyle>;
}

/**
 * Renders a boolean input.
 *
 * This is a controlled component that requires an `onValueChange` callback that
 * updates the `value` prop in order for the component to reflect user actions.
 * If the `value` prop is not updated, the component will continue to render
 * the supplied `value` prop instead of the expected result of any user actions.
 */
export interface SwitchStatic extends NativeMethodsMixin, React.ClassicComponentClass<SwitchProperties> {}

/**
 * NOTE: `VibrationIOS` is being deprecated. Use `Vibration` instead.
 *
 * The Vibration API is exposed at VibrationIOS.vibrate().
 * On iOS, calling this function will trigger a one second vibration.
 * The vibration is asynchronous so this method will return immediately.
 *
 * There will be no effect on devices that do not support Vibration, eg. the iOS simulator.
 *
 * Vibration patterns are currently unsupported.
 *
 * @see https://facebook.github.io/react-native/docs/vibrationios.html#content
 */
export interface VibrationIOSStatic {
    /**
     * @deprecated
     */
    vibrate(): void;
}

/**
 * The Vibration API is exposed at `Vibration.vibrate()`.
 * The vibration is asynchronous so this method will return immediately.
 *
 * There will be no effect on devices that do not support Vibration, eg. the simulator.
 *
 * **Note for android**
 * add `<uses-permission android:name="android.permission.VIBRATE"/>` to `AndroidManifest.xml`
 *
 * **Android Usage:**
 *
 * [0, 500, 200, 500]
 * V(0.5s) --wait(0.2s)--> V(0.5s)
 *
 * [300, 500, 200, 500]
 * --wait(0.3s)--> V(0.5s) --wait(0.2s)--> V(0.5s)
 *
 * **iOS Usage:**
 * if first argument is 0, it will not be included in pattern array.
 *
 * [0, 1000, 2000, 3000]
 * V(fixed) --wait(1s)--> V(fixed) --wait(2s)--> V(fixed) --wait(3s)--> V(fixed)
 */
export interface VibrationStatic {
    vibrate(pattern: number | number[], repeat: boolean): void;

    /**
     * Stop vibration
     */
    cancel(): void;
}

/**
 * This class implements common easing functions. The math is pretty obscure,
 * but this cool website has nice visual illustrations of what they represent:
 * http://xaedes.de/dev/transitions/
 */
export type EasingFunction = (value: number) => number;
export interface EasingStatic {
    step0: EasingFunction;
    step1: EasingFunction;
    linear: EasingFunction;
    ease: EasingFunction;
    quad: EasingFunction;
    cubic: EasingFunction;
    poly: EasingFunction;
    sin: EasingFunction;
    circle: EasingFunction;
    exp: EasingFunction;
    elastic(bounciness: number): EasingFunction;
    back(s: number): EasingFunction;
    bounce: EasingFunction;
    bezier(x1: number, y1: number, x2: number, y2: number): EasingFunction;
    in(easing: EasingFunction): EasingFunction;
    out(easing: EasingFunction): EasingFunction;
    inOut(easing: EasingFunction): EasingFunction;
}

export namespace Animated {
    // Most (all?) functions where AnimatedValue is used any subclass of Animated can be used as well.
    type AnimatedValue = Animated;
    type AnimatedValueXY = ValueXY;

    type Base = Animated;

    class Animated {
        // Internal class, no public API.
    }

    class AnimatedWithChildren extends Animated {
        // Internal class, no public API.
    }

    class AnimatedInterpolation extends AnimatedWithChildren {
        interpolate(config: InterpolationConfigType): AnimatedInterpolation;
    }

    type ExtrapolateType = "extend" | "identity" | "clamp";

    type InterpolationConfigType = {
        inputRange: number[];
        outputRange: number[] | string[];
        easing?: ((input: number) => number);
        extrapolate?: ExtrapolateType;
        extrapolateLeft?: ExtrapolateType;
        extrapolateRight?: ExtrapolateType;
    };

    type ValueListenerCallback = (state: { value: number }) => void;

    /**
     * Standard value for driving animations.  One `Animated.Value` can drive
     * multiple properties in a synchronized fashion, but can only be driven by one
     * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
     * or calling `setValue`) will stop any previous ones.
     */
    export class Value extends AnimatedWithChildren {
        constructor(value: number);

        /**
         * Directly set the value.  This will stop any animations running on the value
         * and update all the bound properties.
         */
        setValue(value: number): void;

        /**
         * Sets an offset that is applied on top of whatever value is set, whether via
         * `setValue`, an animation, or `Animated.event`.  Useful for compensating
         * things like the start of a pan gesture.
         */
        setOffset(offset: number): void;

        /**
         * Merges the offset value into the base value and resets the offset to zero.
         * The final output of the value is unchanged.
         */
        flattenOffset(): void;

        /**
         * Sets the offset value to the base value, and resets the base value to zero.
         * The final output of the value is unchanged.
         */
        extractOffset(): void;

        /**
         * Adds an asynchronous listener to the value so you can observe updates from
         * animations.  This is useful because there is no way to
         * synchronously read the value because it might be driven natively.
         */
        addListener(callback: ValueListenerCallback): string;

        removeListener(id: string): void;

        removeAllListeners(): void;

        /**
         * Stops any running animation or tracking.  `callback` is invoked with the
         * final value after stopping the animation, which is useful for updating
         * state to match the animation position with layout.
         */
        stopAnimation(callback?: (value: number) => void): void;

        /**
         * Interpolates the value before updating the property, e.g. mapping 0-1 to
         * 0-10.
         */
        interpolate(config: InterpolationConfigType): AnimatedInterpolation;
    }

    type ValueXYListenerCallback = (value: { x: number; y: number }) => void;

    /**
     * 2D Value for driving 2D animations, such as pan gestures.  Almost identical
     * API to normal `Animated.Value`, but multiplexed.  Contains two regular
     * `Animated.Value`s under the hood.
     */
    export class ValueXY extends AnimatedWithChildren {
        x: AnimatedValue;
        y: AnimatedValue;

        constructor(valueIn?: { x: number | AnimatedValue; y: number | AnimatedValue });

        setValue(value: { x: number; y: number }): void;

        setOffset(offset: { x: number; y: number }): void;

        flattenOffset(): void;

        extractOffset(): void;

        stopAnimation(callback?: (value: { x: number; y: number }) => void): void;

        addListener(callback: ValueXYListenerCallback): string;

        removeListener(id: string): void;

        /**
         * Converts `{x, y}` into `{left, top}` for use in style, e.g.
         *
         *```javascript
         *  style={this.state.anim.getLayout()}
         *```
         */
        getLayout(): { [key: string]: AnimatedValue };

        /**
         * Converts `{x, y}` into a useable translation transform, e.g.
         *
         *```javascript
         *  style={{
         *    transform: this.state.anim.getTranslateTransform()
         *  }}
         *```
         */
        getTranslateTransform(): { [key: string]: AnimatedValue }[];
    }

    type EndResult = { finished: boolean };
    type EndCallback = (result: EndResult) => void;

    interface CompositeAnimation {
        start: (callback?: EndCallback) => void;
        stop: () => void;
    }

    interface AnimationConfig {
        isInteraction?: boolean;
        useNativeDriver?: boolean;
    }

    /**
     * Animates a value from an initial velocity to zero based on a decay
     * coefficient.
     */
    export function decay(value: AnimatedValue | AnimatedValueXY, config: DecayAnimationConfig): CompositeAnimation;

    interface DecayAnimationConfig extends AnimationConfig {
        velocity: number | { x: number; y: number };
        deceleration?: number;
    }

    /**
     * Animates a value along a timed easing curve.  The `Easing` module has tons
     * of pre-defined curves, or you can use your own function.
     */
    export var timing: (value: AnimatedValue | AnimatedValueXY, config: TimingAnimationConfig) => CompositeAnimation;

    interface TimingAnimationConfig extends AnimationConfig {
        toValue: number | AnimatedValue | { x: number; y: number } | AnimatedValueXY;
        easing?: (value: number) => number;
        duration?: number;
        delay?: number;
    }

    interface SpringAnimationConfig extends AnimationConfig {
        toValue: number | AnimatedValue | { x: number; y: number } | AnimatedValueXY;
        overshootClamping?: boolean;
        restDisplacementThreshold?: number;
        restSpeedThreshold?: number;
        velocity?: number | { x: number; y: number };
        bounciness?: number;
        speed?: number;
        tension?: number;
        friction?: number;
    }

    interface LoopAnimationConfig {
        iterations?: number; // default -1 for infinite
    }

    /**
     * Creates a new Animated value composed from two Animated values added
     * together.
     */
    export function add(a: Animated, b: Animated): AnimatedAddition;

    class AnimatedAddition extends AnimatedInterpolation {}

    /**
     * Creates a new Animated value composed by dividing the first Animated
     * value by the second Animated value.
     */
    export function divide(a: Animated, b: Animated): AnimatedDivision;

    class AnimatedDivision extends AnimatedInterpolation {}

    /**
     * Creates a new Animated value composed from two Animated values multiplied
     * together.
     */
    export function multiply(a: Animated, b: Animated): AnimatedMultiplication;

    class AnimatedMultiplication extends AnimatedInterpolation {}

    /**
     * Creates a new Animated value that is the (non-negative) modulo of the
     * provided Animated value
     */
    export function modulo(a: Animated, modulus: number): AnimatedModulo;

    class AnimatedModulo extends AnimatedInterpolation {}

    /**
     * Create a new Animated value that is limited between 2 values. It uses the
     * difference between the last value so even if the value is far from the bounds
     * it will start changing when the value starts getting closer again.
     * (`value = clamp(value + diff, min, max)`).
     *
     * This is useful with scroll events, for example, to show the navbar when
     * scrolling up and to hide it when scrolling down.
     */
    export function diffClamp(a: Animated, min: number, max: number): AnimatedDiffClamp;

    class AnimatedDiffClamp extends AnimatedInterpolation {}

    /**
     * Starts an animation after the given delay.
     */
    export function delay(time: number): CompositeAnimation;

    /**
     * Starts an array of animations in order, waiting for each to complete
     * before starting the next.  If the current running animation is stopped, no
     * following animations will be started.
     */
    export function sequence(animations: Array<CompositeAnimation>): CompositeAnimation;

    /**
     * Array of animations may run in parallel (overlap), but are started in
     * sequence with successive delays.  Nice for doing trailing effects.
     */

    export function stagger(time: number, animations: Array<CompositeAnimation>): CompositeAnimation;

    /**
     * Loops a given animation continuously, so that each time it reaches the end,
     * it resets and begins again from the start. Can specify number of times to
     * loop using the key 'iterations' in the config. Will loop without blocking
     * the UI thread if the child animation is set to 'useNativeDriver'.
     */

    export function loop(animation: CompositeAnimation, config?: LoopAnimationConfig): CompositeAnimation;

    /**
     * Spring animation based on Rebound and Origami.  Tracks velocity state to
     * create fluid motions as the `toValue` updates, and can be chained together.
     */
    export function spring(value: AnimatedValue | AnimatedValueXY, config: SpringAnimationConfig): CompositeAnimation;

    type ParallelConfig = {
        stopTogether?: boolean; // If one is stopped, stop all.  default: true
    };

    /**
     * Starts an array of animations all at the same time.  By default, if one
     * of the animations is stopped, they will all be stopped.  You can override
     * this with the `stopTogether` flag.
     */
    export function parallel(animations: Array<CompositeAnimation>, config?: ParallelConfig): CompositeAnimation;

    type Mapping = { [key: string]: Mapping } | AnimatedValue;
    interface EventConfig {
        listener?: ValueListenerCallback;
        useNativeDriver?: boolean;
    }

    /**
     *  Takes an array of mappings and extracts values from each arg accordingly,
     *  then calls `setValue` on the mapped outputs.  e.g.
     *
     *```javascript
     *  onScroll={Animated.event(
     *    [{nativeEvent: {contentOffset: {x: this._scrollX}}}]
     *    {listener},          // Optional async listener
     *  )
     *  ...
     *  onPanResponderMove: Animated.event([
     *    null,                // raw event arg ignored
     *    {dx: this._panX},    // gestureState arg
     *  ]),
     *```
     */
    export function event(argMapping: Array<Mapping | null>, config?: EventConfig): (...args: any[]) => void;

    /**
     * Make any React component Animatable.  Used to create `Animated.View`, etc.
     */
    export function createAnimatedComponent(component: any): any;

    /**
     * Animated variants of the basic native views. Accepts Animated.Value for
     * props and style.
     */
    export var View: any;
    export var Image: any;
    export var Text: any;
    export var ScrollView: any;
}

// tslint:disable-next-line:interface-name
export interface I18nManagerStatic {
    isRTL: boolean;
    allowRTL: (allowRTL: boolean) => {};
    forceRTL: (forceRTL: boolean) => {};
}

export interface GeolocationStatic {
    /**
     * Invokes the success callback once with the latest location info.  Supported
     * options: timeout (ms), maximumAge (ms), enableHighAccuracy (bool)
     * On Android, this can return almost immediately if the location is cached or
     * request an update, which might take a while.
     */
    getCurrentPosition(
        geo_success: (position: GeolocationReturnType) => void,
        geo_error?: (error: GeolocationError) => void,
        geo_options?: GeoOptions
    ): void;

    /**
     * Invokes the success callback whenever the location changes.  Supported
     * options: timeout (ms), maximumAge (ms), enableHighAccuracy (bool), distanceFilter(m)
     */
    watchPosition(
        success: (position: GeolocationReturnType) => void,
        error?: (error: GeolocationError) => void,
        options?: GeoOptions
    ): number;

    clearWatch(watchID: number): void;

    stopObserving(): void;

    requestAuthorization(): void;

    setRNConfiguration(config: GeoConfiguration): void;
}

export interface OpenCameraDialogOptions {
    /** Defaults to false */
    videoMode?: boolean;
}

export interface OpenSelectDialogOptions {
    /** Defaults to true */
    showImages?: boolean;
    /** Defaults to false */
    showVideos?: boolean;
}

/** [imageURL|tempImageTag, height, width] */
export type ImagePickerResult = [string, number, number];

export interface ImagePickerIOSStatic {
    canRecordVideos(callback: (value: boolean) => void): void;
    canUseCamera(callback: (value: boolean) => void): void;
    openCameraDialog(
        config: OpenCameraDialogOptions,
        successCallback: (args: ImagePickerResult) => void,
        cancelCallback: (args: any[]) => void
    ): void;
    openSelectDialog(
        config: OpenSelectDialogOptions,
        successCallback: (args: ImagePickerResult) => void,
        cancelCallback: (args: any[]) => void
    ): void;
}

export interface ImageStoreStatic {
    /**
     * Check if the ImageStore contains image data for the specified URI.
     * @platform ios
     */
    hasImageForTag(uri: string, callback: (hasImage: boolean) => void): void;

    /**
     * Delete an image from the ImageStore. Images are stored in memory and
     * must be manually removed when you are finished with them, otherwise they
     * will continue to use up RAM until the app is terminated. It is safe to
     * call `removeImageForTag()` without first calling `hasImageForTag()`, it
     * will simply fail silently.
     * @platform ios
     */
    removeImageForTag(uri: string): void;

    /**
     * Stores a base64-encoded image in the ImageStore, and returns a URI that
     * can be used to access or display the image later. Images are stored in
     * memory only, and must be manually deleted when you are finished with
     * them by calling `removeImageForTag()`.
     *
     * Note that it is very inefficient to transfer large quantities of binary
     * data between JS and native code, so you should avoid calling this more
     * than necessary.
     * @platform ios
     */
    addImageFromBase64(base64ImageData: string, success: (uri: string) => void, failure: (error: any) => void): void;

    /**
     * Retrieves the base64-encoded data for an image in the ImageStore. If the
     * specified URI does not match an image in the store, the failure callback
     * will be called.
     *
     * Note that it is very inefficient to transfer large quantities of binary
     * data between JS and native code, so you should avoid calling this more
     * than necessary. To display an image in the ImageStore, you can just pass
     * the URI to an `<Image/>` component; there is no need to retrieve the
     * base64 data.
     */
    getBase64ForTag(uri: string, success: (base64ImageData: string) => void, failure: (error: any) => void): void;
}

//
// Interfacing with Native Modules
// https://facebook.github.io/react-native/docs/native-modules-ios.html
//

export interface NativeEventSubscription {
    /**
     * Call this method to un-subscribe from a native-event
     */
    remove(): void;
}

/**
 * Receive events from native-code
 * Deprecated - subclass NativeEventEmitter to create granular event modules instead of
 * adding all event listeners directly to RCTNativeAppEventEmitter.
 * @see https://github.com/facebook/react-native/blob/0.34-stable\Libraries\EventEmitter\RCTNativeAppEventEmitter.js
 * @see https://facebook.github.io/react-native/docs/native-modules-ios.html#sending-events-to-javascript
 */
type RCTNativeAppEventEmitter = DeviceEventEmitterStatic;

interface ImageCropData {
    /**
     * The top-left corner of the cropped image, specified in the original
     * image's coordinate space.
     */
    offset: {
        x: number;
        y: number;
    };

    /**
     * The size (dimensions) of the cropped image, specified in the original
     * image's coordinate space.
     */
    size: {
        width: number;
        height: number;
    };

    /**
     * (Optional) size to scale the cropped image to.
     */
    displaySize?: { width: number; height: number };

    /**
     * (Optional) the resizing mode to use when scaling the image. If the
     * `displaySize` param is not specified, this has no effect.
     */
    resizeMode?: "contain" | "cover" | "stretch";
}

interface ImageEditorStatic {
    /**
     * Crop the image specified by the URI param. If URI points to a remote
     * image, it will be downloaded automatically. If the image cannot be
     * loaded/downloaded, the failure callback will be called.
     *
     * If the cropping process is successful, the resultant cropped image
     * will be stored in the ImageStore, and the URI returned in the success
     * callback will point to the image in the store. Remember to delete the
     * cropped image from the ImageStore when you are done with it.
     */
    cropImage(
        uri: string,
        cropData: ImageCropData,
        success: (uri: string) => void,
        failure: (error: Object) => void
    ): void;
}

export interface ARTShapeProps {
    d: string;
    strokeWidth: number;
    strokeDash?: number[];
    stroke: string;
}

export interface ARTSurfaceProps {
    style: StyleProp<ViewStyle>;
    width: number;
    height: number;
}

export interface ShapeStatic extends React.ComponentClass<ARTShapeProps> {}

export interface SurfaceStatic extends React.ComponentClass<ARTSurfaceProps> {}

export interface ARTStatic {
    Shape: ShapeStatic;
    Surface: SurfaceStatic;
}

export interface KeyboardStatic extends NativeEventEmitter {
    dismiss: () => void;
}

//////////////////////////////////////////////////////////////////////////
//
//  R E - E X P O R T S
//
//////////////////////////////////////////////////////////////////////////

// TODO: The following components need to be added
// - [ ] ART
export var ART: ARTStatic;
export type ART = ARTStatic;

export var ActivityIndicator: ActivityIndicatorStatic;
export type ActivityIndicator = ActivityIndicatorStatic;

export var ActivityIndicatorIOS: ActivityIndicatorIOSStatic;
export type ActivityIndicatorIOS = ActivityIndicatorIOSStatic;

export var DatePickerIOS: DatePickerIOSStatic;
export type DatePickerIOS = DatePickerIOSStatic;

export var DrawerLayoutAndroid: DrawerLayoutAndroidStatic;
export type DrawerLayoutAndroid = DrawerLayoutAndroidStatic;

export var Image: ImageStatic;
export type Image = ImageStatic;

export var ImageBackground: ImageBackgroundStatic;
export type ImageBackground = ImageBackgroundStatic;

export var ImagePickerIOS: ImagePickerIOSStatic;
export type ImagePickerIOS = ImagePickerIOSStatic;

export var FlatList: FlatListStatic<any>;
export type FlatList<ItemT> = FlatListStatic<ItemT>;

export var LayoutAnimation: LayoutAnimationStatic;
export type LayoutAnimation = LayoutAnimationStatic;

export var ListView: ListViewStatic;
export type ListView = ListViewStatic;

export var MapView: MapViewStatic;
export type MapView = MapViewStatic;

export var MaskedView: MaskedViewStatic;
export type MaskedView = MaskedViewStatic;

export var Modal: ModalStatic;
export type Modal = ModalStatic;

export var NavigatorIOS: NavigatorIOSStatic;
export type NavigatorIOS = NavigatorIOSStatic;

export var Picker: PickerStatic;
export type Picker = PickerStatic;

export var PickerIOS: PickerIOSStatic;
export type PickerIOS = PickerIOSStatic;

export var ProgressBarAndroid: ProgressBarAndroidStatic;
export type ProgressBarAndroid = ProgressBarAndroidStatic;

export var ProgressViewIOS: ProgressViewIOSStatic;
export type ProgressViewIOS = ProgressViewIOSStatic;

export var RefreshControl: RefreshControlStatic;
export type RefreshControl = RefreshControlStatic;

export var RecyclerViewBackedScrollView: RecyclerViewBackedScrollViewStatic;
export type RecyclerViewBackedScrollView = RecyclerViewBackedScrollViewStatic;

export var SafeAreaView: SafeAreaViewStatic;
export type SafeAreaView = SafeAreaViewStatic;

export var SegmentedControlIOS: SegmentedControlIOSStatic;
export type SegmentedControlIOS = SegmentedControlIOSStatic;

export var Slider: SliderStatic;
export type Slider = SliderStatic;

export var SliderIOS: SliderStatic;
export type SliderIOS = SliderStatic;

export var StatusBar: StatusBarStatic;
export type StatusBar = StatusBarStatic;

export var ScrollView: ScrollViewStatic;
export type ScrollView = ScrollViewStatic;

export var SectionList: SectionListStatic<any>;
export type SectionList<ItemT> = SectionListStatic<ItemT>;

export var SnapshotViewIOS: SnapshotViewIOSStatic;
export type SnapshotViewIOS = SnapshotViewIOSStatic;

export var Systrace: SystraceStatic;
export type Systrace = SystraceStatic;

export var SwipeableListView: SwipeableListViewStatic;
export type SwipeableListView = SwipeableListViewStatic;

export var Switch: SwitchStatic;
export type Switch = SwitchStatic;

export var SwitchIOS: SwitchIOSStatic;
export type SwitchIOS = SwitchIOSStatic;

export var TabBarIOS: TabBarIOSStatic;
export type TabBarIOS = TabBarIOSStatic;

export var Text: TextStatic;
export type Text = TextStatic;

export var TextInput: TextInputStatic;
export type TextInput = TextInputStatic;

export var ToolbarAndroid: ToolbarAndroidStatic;
export type ToolbarAndroid = ToolbarAndroidStatic;

export var TouchableHighlight: TouchableHighlightStatic;
export type TouchableHighlight = TouchableHighlightStatic;

export var TouchableNativeFeedback: TouchableNativeFeedbackStatic;
export type TouchableNativeFeedback = TouchableNativeFeedbackStatic;

export var TouchableOpacity: TouchableOpacityStatic;
export type TouchableOpacity = TouchableOpacityStatic;

export var TouchableWithoutFeedback: TouchableWithoutFeedbackStatic;
export type TouchableWithoutFeedback = TouchableWithoutFeedbackStatic;

export var View: ViewStatic;
export type View = ViewStatic;

export var ViewPagerAndroid: ViewPagerAndroidStatic;
export type ViewPagerAndroid = ViewPagerAndroidStatic;

export var WebView: WebViewStatic;
export type WebView = WebViewStatic;

//////////// APIS //////////////
export var ActionSheetIOS: ActionSheetIOSStatic;
export type ActionSheetIOS = ActionSheetIOSStatic;

export var Share: ShareStatic;
export type Share = ShareStatic;

export var AdSupportIOS: AdSupportIOSStatic;
export type AdSupportIOS = AdSupportIOSStatic;

export var AccessibilityInfo: AccessibilityInfoStatic;
export type AccessibilityInfo = AccessibilityInfoStatic;

export var Alert: AlertStatic;
export type Alert = AlertStatic;

export var AlertAndroid: AlertAndroidStatic;
export type AlertAndroid = AlertAndroidStatic;

export var AlertIOS: AlertIOSStatic;
export type AlertIOS = AlertIOSStatic;

export var AppState: AppStateStatic;
export type AppState = AppStateStatic;

export var AppStateIOS: AppStateStatic;
export type AppStateIOS = AppStateStatic;

export var AsyncStorage: AsyncStorageStatic;
export type AsyncStorage = AsyncStorageStatic;

export var BackAndroid: BackAndroidStatic;
export type BackAndroid = BackAndroidStatic;

export var BackHandler: BackHandlerStatic;
export type BackHandler = BackHandlerStatic;

export var Button: ButtonStatic;
export type Button = ButtonStatic;

export var CameraRoll: CameraRollStatic;
export type CameraRoll = CameraRollStatic;

export var Clipboard: ClipboardStatic;
export type Clipboard = ClipboardStatic;

export var DatePickerAndroid: DatePickerAndroidStatic;
export type DatePickerAndroid = DatePickerAndroidStatic;

export var Geolocation: GeolocationStatic;
export type Geolocation = GeolocationStatic;

/** http://facebook.github.io/react-native/blog/2016/08/19/right-to-left-support-for-react-native-apps.html */
export var I18nManager: I18nManagerStatic;
export type I18nManager = I18nManagerStatic;

export var ImageEditor: ImageEditorStatic;
export type ImageEditor = ImageEditorStatic;

export var ImageStore: ImageStoreStatic;
export type ImageStore = ImageStoreStatic;

export var InteractionManager: InteractionManagerStatic;

export var IntentAndroid: IntentAndroidStatic;
export type IntentAndroid = IntentAndroidStatic;

export var Keyboard: KeyboardStatic;

export var KeyboardAvoidingView: KeyboardAvoidingViewStatic;
export type KeyboardAvoidingView = KeyboardAvoidingViewStatic;

export var Linking: LinkingStatic;
export type Linking = LinkingStatic;

export var LinkingIOS: LinkingIOSStatic;
export type LinkingIOS = LinkingIOSStatic;

export var NativeMethodsMixin: NativeMethodsMixinStatic;
export type NativeMethodsMixin = NativeMethodsMixinStatic;

export var NativeComponent: NativeMethodsMixinStatic;
export type NativeComponent = NativeMethodsMixinStatic;

export var NetInfo: NetInfoStatic;
export type NetInfo = NetInfoStatic;

export var PanResponder: PanResponderStatic;
export type PanResponder = PanResponderStatic;

export var PermissionsAndroid: PermissionsAndroidStatic;
export type PermissionsAndroid = PermissionsAndroidStatic;

export var PushNotificationIOS: PushNotificationIOSStatic;
export type PushNotificationIOS = PushNotificationIOSStatic;

export var Settings: SettingsStatic;
export type Settings = SettingsStatic;

export var StatusBarIOS: StatusBarIOSStatic;
export type StatusBarIOS = StatusBarIOSStatic;

export var TimePickerAndroid: TimePickerAndroidStatic;
export type TimePickerAndroid = TimePickerAndroidStatic;

export var ToastAndroid: ToastAndroidStatic;
export type ToastAndroid = ToastAndroidStatic;

export var UIManager: UIManagerStatic;
export type UIManager = UIManagerStatic;

export var VibrationIOS: VibrationIOSStatic;
export type VibrationIOS = VibrationIOSStatic;

export var Vibration: VibrationStatic;
export type Vibration = VibrationStatic;

export var Dimensions: Dimensions;
export var ShadowPropTypesIOS: ShadowPropTypesIOSStatic;

export type Easing = EasingStatic;
export var Easing: EasingStatic;

//////////// Plugins //////////////

export var DeviceEventEmitter: DeviceEventEmitterStatic;
/**
 * Abstract base class for implementing event-emitting modules. This implements
 * a subset of the standard EventEmitter node module API.
 */
export interface NativeEventEmitter extends EventEmitter {}
export var NativeEventEmitter: NativeEventEmitter;
/**
 * Deprecated - subclass NativeEventEmitter to create granular event modules instead of
 * adding all event listeners directly to RCTNativeAppEventEmitter.
 */
export var NativeAppEventEmitter: RCTNativeAppEventEmitter;

/**
 * Interface for NativeModules which allows to augment NativeModules with type informations.
 * See react-native-sensor-manager for example.
 */
interface NativeModulesStatic {
    [name: string]: any;
}

/**
 * Native Modules written in ObjectiveC/Swift/Java exposed via the RCTBridge
 * Define lazy getters for each module. These will return the module if already loaded, or load it if not.
 * See https://facebook.github.io/react-native/docs/native-modules-ios.html
 * Use:
 * <code>const MyModule = NativeModules.ModuleName</code>
 */
export var NativeModules: NativeModulesStatic;
export var Platform: PlatformStatic;
export var PlatformIOS: PlatformIOSStatic;
export var PixelRatio: PixelRatioStatic;

export interface ComponentInterface<P> {
    name?: string;
    displayName?: string;
    propTypes: P;
}

/**
 * Used to create React components that directly wrap native component
 * implementations.  Config information is extracted from data exported from the
 * UIManager module.  You should also wrap the native component in a
 * hand-written component with full propTypes definitions and other
 * documentation - pass the hand-written component in as `componentInterface` to
 * verify all the native props are documented via `propTypes`.
 *
 * If some native props shouldn't be exposed in the wrapper interface, you can
 * pass null for `componentInterface` and call `verifyPropTypes` directly
 * with `nativePropsToIgnore`;
 *
 * Common types are lined up with the appropriate prop differs with
 * `TypeToDifferMap`.  Non-scalar types not in the map default to `deepDiffer`.
 */
export function requireNativeComponent<P>(
    viewName: string,
    componentInterface?: ComponentInterface<P>,
    extraConfig?: { nativeOnly?: any }
): React.ComponentClass<P>;

export function findNodeHandle(
    componentOrHandle: null | number | React.Component<any, any> | React.ComponentClass<any>
): null | number;

export function processColor(color: any): number;

//////////////////////////////////////////////////////////////////////////
//
// Additional ( and controversial)
//
//////////////////////////////////////////////////////////////////////////

export function __spread(target: any, ...sources: any[]): any;

type ErrorHandlerCallback = (error: any, isFatal?: boolean) => void;

export interface ErrorUtils {
    setGlobalHandler: (callback: ErrorHandlerCallback) => void;
    getGlobalHandler: () => ErrorHandlerCallback;
}

//
// Add-Ons
//
export namespace addons {
    //FIXME: Documentation ?
    export interface TestModuleStatic {
        verifySnapshot: (done: (indicator?: any) => void) => void;
        markTestPassed: (indicator: any) => void;
        markTestCompleted: () => void;
    }

    export var TestModule: TestModuleStatic;
    export type TestModule = TestModuleStatic;
}

//
// Prop Types
//
export var ColorPropType: React.Requireable<any>;
export var EdgeInsetsPropType: React.Requireable<any>;
export var PointPropType: React.Requireable<any>;

declare global {
    function require(name: string): any;

    /**
     * Console polyfill
     * @see https://facebook.github.io/react-native/docs/javascript-environment.html#polyfills
     */
    interface Console {
        error(message?: any, ...optionalParams: any[]): void;
        info(message?: any, ...optionalParams: any[]): void;
        log(message?: any, ...optionalParams: any[]): void;
        warn(message?: any, ...optionalParams: any[]): void;
        trace(message?: any, ...optionalParams: any[]): void;
        debug(message?: any, ...optionalParams: any[]): void;
        table(...data: any[]): void;
        disableYellowBox: boolean;
        ignoredYellowBox: string[];
    }

    var console: Console;

    /**
     * Navigator object for accessing location API
     * @see https://facebook.github.io/react-native/docs/javascript-environment.html#polyfills
     */
    interface Navigator {
        readonly product: string;
        readonly geolocation: Geolocation;
    }

    var navigator: Navigator;

    /**
     * This contains the non-native `XMLHttpRequest` object, which you can use if you want to route network requests
     * through DevTools (to trace them):
     *
     *   global.XMLHttpRequest = global.originalXMLHttpRequest;
     *
     * @see https://github.com/facebook/react-native/issues/934
     */
    var originalXMLHttpRequest: Object;

    var __BUNDLE_START_TIME__: number;
    var ErrorUtils: ErrorUtils;

    /**
     * This variable is set to true when react-native is running in Dev mode
     * Typical usage:
     * <code> if (__DEV__) console.log('Running in dev mode')</code>
     */
    var __DEV__: boolean;
}
