// Type definitions for react-native 0.14
// Project: https://github.com/facebook/react-native
// Definitions by: Bruno Grieder <https://github.com/bgrieder>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// This work is mostly based on the work made by Bernd Paradies: https://github.com/bparadie
//
// These definitions are meant to be used with the compiler target set to ES6
//
// WARNING: this work is very much beta:
//            -it may be missing react-native definitions
//            -it re-exports the whole of react 0.14 which may not be what react-native actually does
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// <reference path="../react/react.d.ts" />

import React = __React;

declare namespace  ReactNative {


    /**
     * Represents the completion of an asynchronous operation
     * @see lib.es6.d.ts
     */
    export interface Promise<T> {
        /**
         * Attaches callbacks for the resolution and/or rejection of the Promise.
         * @param onfulfilled The callback to execute when the Promise is resolved.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of which ever callback is executed.
         */
        then<TResult>(onfulfilled?: (value: T) => TResult | Promise<TResult>, onrejected?: (reason: any) => TResult | Promise<TResult>): Promise<TResult>;

        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch(onrejected?: (reason: any) => T | Promise<T>): Promise<T>;


        // not in lib.es6.d.ts but called by react-native
        done(): void;
    }

    export interface PromiseConstructor {
        /**
         * A reference to the prototype.
         */
        prototype: Promise<any>;

        /**
         * Creates a new Promise.
         * @param init A callback used to initialize the promise. This callback is passed two arguments:
         * a resolve callback used resolve the promise with a value or the result of another promise,
         * and a reject callback used to reject the promise with a provided reason or error.
         */
        new <T>(init: (resolve: (value?: T | Promise<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;

        <T>(init: (resolve: (value?: T | Promise<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;

        /**
         * Creates a Promise that is resolved with an array of results when all of the provided Promises
         * resolve, or rejected when any Promise is rejected.
         * @param values An array of Promises.
         * @returns A new Promise.
         */
        all<T>(values: (T | Promise<T>)[]): Promise<T[]>;

        /**
         * Creates a Promise that is resolved with an array of results when all of the provided Promises
         * resolve, or rejected when any Promise is rejected.
         * @param values An array of values.
         * @returns A new Promise.
         */
        all(values: Promise<void>[]): Promise<void>;

        /**
         * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
         * or rejected.
         * @param values An array of Promises.
         * @returns A new Promise.
         */
        race<T>(values: (T | Promise<T>)[]): Promise<T>;

        /**
         * Creates a new rejected promise for the provided reason.
         * @param reason The reason the promise was rejected.
         * @returns A new rejected Promise.
         */
        reject(reason: any): Promise<void>;

        /**
         * Creates a new rejected promise for the provided reason.
         * @param reason The reason the promise was rejected.
         * @returns A new rejected Promise.
         */
        reject<T>(reason: any): Promise<T>;

        /**
         * Creates a new resolved promise for the provided value.
         * @param value A promise.
         * @returns A promise whose internal state matches the provided promise.
         */
        resolve<T>(value: T | Promise<T>): Promise<T>;

        /**
         * Creates a new resolved promise .
         * @returns A resolved promise.
         */
        resolve(): Promise<void>;
    }

    // @see lib.es6.d.ts
    export var Promise: PromiseConstructor;

    // node_modules/react-tools/src/classic/class/ReactClass.js
    export interface ReactClass<D, P, S>
    {
        // TODO:
    }

    // see react-jsx.d.ts
    export function createElement<P>(
        type: React.ReactType,
        props?: P,
        ...children: React.ReactNode[]): React.ReactElement<P>;


    export type Runnable = (appParameters:any) => void;

    export type AppConfig = {
        appKey: string;
        component: ReactClass<any, any, any>;
        run?: Runnable;
    }

    // https://github.com/facebook/react-native/blob/master/Libraries/AppRegistry/AppRegistry.js
    export class AppRegistry
    {
        static registerConfig(config: AppConfig[]): void;
        static registerComponent(appKey: string, getComponentFunc: () => React.ComponentClass<any>): string;
        static registerRunnable(appKey: string, func: Runnable): string;
        static runApplication(appKey: string, appParameters: any): void;
    }

    /*
     export interface ReactPropTypes extends React.ReactPropTypes
     {

     }

     export interface PropTypes
     {
     [key:string]: React.Requireable<any>;
     }
     */


    export interface StyleSheetProperties
    {
        // TODO:
    }

    export interface LayoutRectangle
    {
        x: number;
        y: number;
        width: number;
        height: number;
    }

    // @see TextProperties.onLayout
    export interface LayoutChangeEvent
    {
        nativeEvent: {
            layout: LayoutRectangle
        }
    }

    // @see https://facebook.github.io/react-native/docs/text.html#style
    export interface TextStyle
    {
        color?: string;
        containerBackgroundColor?: string;
        fontFamily?: string;
        fontSize?: number;
        fontStyle?: string; // 'normal' | 'italic';
        fontWeight?: string; // enum("normal", 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
        letterSpacing?: number;
        lineHeight?: number;
        textAlign?: string; // enum("auto", 'left', 'right', 'center')
        writingDirection?: string; //enum("auto", 'ltr', 'rtl')
    }

    // https://facebook.github.io/react-native/docs/text.html#props
    export interface TextProperties
    {
        /**
         * numberOfLines number
         *
         * Used to truncate the text with an elipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number.
         */
        numberOfLines?: number;

        /**
         * onLayout function
         *
         * Invoked on mount and layout changes with
         *
         * {nativeEvent: { layout: {x, y, width, height}}}.
         */
        onLayout?: (event: LayoutChangeEvent) => void;

        /**
         * onPress function
         *
         * This function is called on press. Text intrinsically supports press handling with a default highlight state (which can be disabled with suppressHighlighting).
         */
        onPress?: () => void;

        /**
         * @see https://facebook.github.io/react-native/docs/text.html#style
         */
        style?: TextStyle;
    }

    export interface AccessibilityTraits
    {
        // TODO
    }

    // @see https://facebook.github.io/react-native/docs/view.html#style
    export interface ViewStyle
    {
        backgroundColor?: string;
        borderBottomColor?: string;
        borderBottomLeftRadius?: number;
        borderBottomRightRadius?: number;
        borderColor?: string;
        borderLeftColor?: string;
        borderRadius?: number;
        borderRightColor?: string;
        borderTopColor?: string;
        borderTopLeftRadius?: number;
        borderTopRightRadius?: number;
        opacity?: number;
        overflow?: string; // enum('visible', 'hidden')
        shadowColor?: string;
        shadowOffset?: {width: number, height: number};
        shadowOpacity?: number;
        shadowRadius?: number;
    }

    /**
     * @see https://facebook.github.io/react-native/docs/view.html#props
     */
    export interface ViewProperties
    {
        /**
         * accessibilityLabel string
         *
         * Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.
         *
         */

        accessibilityLabel?: string;


        /**
         * accessibilityTraits AccessibilityTraits, [AccessibilityTraits]
         * Provides additional traits to screen reader. By default no traits are provided unless specified otherwise in element
         */

        accessibilityTraits?: AccessibilityTraits;

        /**
         * accessible bool
         *
         * When true, indicates that the view is an accessibility element. By default, all the touchable elements are accessible.
         */

        accessible?: boolean;

        /**
         * onAcccessibilityTap function
         * When accessible is true, the system will try to invoke this function when the user performs accessibility tap gesture.
         *
         */

        onAcccessibilityTap?: () => void;

        /**
         * onLayout function
         *
         * Invoked on mount and layout changes with
         *
         * {nativeEvent: { layout: {x, y, width, height}}}.
         */
        onLayout?: (event: LayoutChangeEvent) => void;

        /**
         * onMagicTap function
         *
         * When accessible is true, the system will invoke this function when the user performs the magic tap gesture.
         */

        onMagicTap?: () => void;

        /**
         * onMoveShouldSetResponder function
         *
         * For most touch interactions, you'll simply want to wrap your component in TouchableHighlight or TouchableOpacity. Check out Touchable.js, ScrollResponder.js and ResponderEventPlugin.js for more discussion.
         */
        onMoveShouldSetResponder?: () => void;

        onResponderGrant?: () => void;

        onResponderMove?: () => void;

        onResponderReject?: () => void;

        onResponderRelease?: () => void;

        onResponderTerminate?: () => void;

        onResponderTerminationRequest?: () => void;

        onStartShouldSetResponder?: () => void;

        onStartShouldSetResponderCapture?: () => void;

        /**
         * pointerEvents enum('box-none', 'none', 'box-only', 'auto')
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

        pointerEvents?: string;

        /**
         * removeClippedSubviews bool
         *
         * This is a special performance property exposed by RCTView and is useful for scrolling content when there are many subviews,
         * most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound.
         * The subviews must also have overflow: hidden, as should the containing view (or one of its superviews).
         */

        removeClippedSubviews?: boolean

        /**
         * renderToHardwareTextureAndroid bool
         *
         * Whether this view should render itself (and all of its children) into a single hardware texture on the GPU.
         *
         * On Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale:
         * in those cases, the view doesn't have to be redrawn and display lists don't need to be re-executed. The texture can just be
         * re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.
         */

        renderToHardwareTextureAndroid?: boolean;

        style?: ViewStyle;

        /**
         * testID string
         *
         * Used to locate this view in end-to-end tests.
         */

        testID?: string;
    }

    /**
     * @see https://facebook.github.io/react-native/docs/activityindicatorios.html#props
     */
    export interface AlertIOSProperties
    {
        /**
         * animating bool
         *
         * Whether to show the indicator (true, the default) or hide it (false).
         */
        animating?: boolean;

        /**
         * color string
         *
         * The foreground color of the spinner (default is gray).
         */

        color?: string;

        /**
         * hidesWhenStopped bool
         *
         * Whether the indicator should hide when not animating (true by default).
         */

        hidesWhenStopped?: boolean;

        /**
         * onLayout function
         *
         * Invoked on mount and layout changes with
         *
         * {nativeEvent: { layout: {x, y, width, height}}}.
         */
        onLayout?: (event: LayoutChangeEvent) => void;

        /**
         * size enum('small', 'large')
         *
         * Size of the indicator. Small has a height of 20, large has a height of 36.
         */
        size: string; // enum('small', 'large')
    }

    /**
     * @see
     */
    export interface SegmentedControlIOSProperties
    {
        /// TODO
    }

    /**
     * @see
     */
    export interface SwitchIOSProperties
    {
        /// TODO
    }

    /**
     * @see
     */
    export interface NavigatorProperties
    {
        /// TODO
    }

    /**
     * @see
     */
    export interface ActivityIndicatorIOSProperties
    {
        /// TODO
    }

    /**
     * @see https://facebook.github.io/react-native/docs/sliderios.html
     */
    export interface SliderIOSProperties
    {
        /**
         maximumTrackTintColor string
         The color used for the track to the right of the button. Overrides the default blue gradient image.
         */
        maximumTrackTintColor?: string;

        /**
         maximumValue number

         Initial maximum value of the slider. Default value is 1.
         */
        maximumValue?: number;

        /**
         minimumTrackTintColor string
         The color used for the track to the left of the button. Overrides the default blue gradient image.
         */
        minimumTrackTintColor?: string;

        /**
         minimumValue number
         Initial minimum value of the slider. Default value is 0.
         */
        minimumValue?: number;

        /**
         onSlidingComplete function
         Callback called when the user finishes changing the value (e.g. when the slider is released).
         */
        onSlidingComplete?: () => void;

        /**
         onValueChange function
         Callback continuously called while the user is dragging the slider.
         */
        onValueChange?: (value: number) => void;

        /**
         value number
         Initial value of the slider. The value should be between minimumValue and maximumValue, which default to 0 and 1 respectively. Default value is 0.

         This is not a controlled component, e.g. if you don't update the value, the component won't be reset to its inital value.
         */
        value?: number;
    }

    /**
     * @see
     */
    export interface CameraRollProperties
    {
        /// TODO
    }

    /**
     * @see
     */
    export interface ImageProperties
    {
        /// TODO
    }

    /**
     * @see
     */
    export interface ListViewProperties
    {
        /// TODO
    }

    /**
     * @see https://facebook.github.io/react-native/docs/touchablehighlight.html#props
     */
    export interface TouchableHighlightProperties
    {
        /**
         * activeOpacity number
         *
         * Determines what the opacity of the wrapped view should be when touch is active.
         */
        activeOpacity?: number;

        /**
         * onHideUnderlay function
         *
         * Called immediately after the underlay is hidden
         */

        onHideUnderlay?: () => void;


        /**
         * onShowUnderlay function
         *
         * Called immediately after the underlay is shown
         */

        /**
         * @see https://facebook.github.io/react-native/docs/view.html#style
         */
        style?: ViewStyle;


        /**
         * underlayColor string
         *
         * The color of the underlay that will show through when the touch is active.
         */
        underlayColor?: string;

    }

    /**
     * @see https://facebook.github.io/react-native/docs/touchablewithoutfeedback.html
     */
    export interface TouchableWithoutFeedbackProperties
    {
        /*
         accessible bool

         Called when the touch is released, but not if cancelled (e.g. by a scroll that steals the responder lock).
         */
        accessible?: boolean;
        /*
         delayLongPress number

         Delay in ms, from onPressIn, before onLongPress is called.
         */
        delayLongPress?: number;

        /*
         delayPressIn number

         Delay in ms, from the start of the touch, before onPressIn is called.
         */
        delayPressIn?: number;

        /*
         delayPressOut number

         Delay in ms, from the release of the touch, before onPressOut is called.
         */
        delayPressOut?: number;

        /*
         onLongPress function
         */
        onLongPress?: () => void;

        /*
         onPress function
         */
        onPress?: () => void;

        /*
         onPressIn function
         */
        onPressIn?: () => void;

        /*
         onPressOut function
         */
        onPressOut?: () => void;
    }


    /**
     * @see https://facebook.github.io/react-native/docs/touchableopacity.html#props
     */
    export interface TouchableOpacityProperties
    {
        /**
         * activeOpacity number
         *
         * Determines what the opacity of the wrapped view should be when touch is active.
         */
        activeOpacity?: number;
    }


    export interface LeftToRightGesture
    {

    }

    export interface AnimationInterpolator
    {

    }

    // see /NavigatorSceneConfigs.js
    export interface SceneConfig
    {
        // A list of all gestures that are enabled on this scene
        gestures: {
            pop: LeftToRightGesture,
        },

        // Rebound spring parameters when transitioning FROM this scene
        springFriction: number;
        springTension: number;

        // Velocity to start at when transitioning without gesture
        defaultTransitionVelocity: number;

        // Animation interpolators for horizontal transitioning:
        animationInterpolators: {
            into: AnimationInterpolator,
            out: AnimationInterpolator
        };

    }

    // see /NavigatorSceneConfigs.js
    export interface SceneConfigs
    {
        FloatFromBottom: SceneConfig;
        FloatFromRight: SceneConfig;
        PushFromRight: SceneConfig;
        FloatFromLeft: SceneConfig;
        HorizontalSwipeJump: SceneConfig;
    }

    export interface Route {
        id: string;
        title?: string;
    }

    /**
     * @see
     */
    export interface NavigatorBarProperties
    {

    }

    export interface NavigationBar extends React.ComponentClass<NavigatorBarProperties>
    {

    }

    export interface NavigatorStatic extends React.ComponentClass<NavigatorProperties>
    {
        SceneConfigs: SceneConfigs;
        getContext(self:any): NavigatorStatic;

        push(route: Route): void;
        pop(): void;
        popToTop(): void;
        popToRoute( route: Route ): void;
        immediatelyResetRouteStack( routes: Route[] ): void;
        getCurrentRoutes(): Route[];

        NavigationBar: NavigationBar;
    }

    export interface StyleSheetStatic extends React.ComponentClass<StyleSheetProperties>
    {
        create<T>(styles:T): T;
    }

    export interface DataSourceAssetCallback
    {
        rowHasChanged: (r1: any[], r2: any[]) => boolean;
    }

    export interface ListViewDataSource
    {
        new(onAsset: DataSourceAssetCallback): ListViewDataSource;
        cloneWithRows<T>(rowList:T[][]): void;
    }

    export interface ListViewStatic extends React.ComponentClass<ListViewProperties>
    {
        DataSource: ListViewDataSource;
    }

    export interface ImageStatic extends React.ComponentClass<ImageProperties>
    {
        uri: string;
    }

    /**
     * @see
     */
    export interface TabBarItemProperties
    {

    }

    export interface TabBarItem extends React.ComponentClass<TabBarItemProperties>
    {
    }

    /**
     * @see
     */
    export interface TabBarIOSProperties
    {
    }

    export interface TabBarIOSStatic extends React.ComponentClass<TabBarIOSProperties>
    {
        Item: TabBarItem;
    }

    export interface CameraRollFetchParams
    {
        first: number;
        groupTypes: string;
        after?: string;
    }

    export interface CameraRollNodeInfo
    {
        image: Image;
        group_name: string;
        timestamp: number;
        location: any;
    }

    export interface CameraRollEdgeInfo
    {
        node: CameraRollNodeInfo;
    }

    export interface CameraRollAssetInfo
    {
        edges: CameraRollEdgeInfo[];
        page_info: {
            has_next_page: boolean;
            end_cursor: string;
        };
    }

    export interface CameraRollStatic extends React.ComponentClass<CameraRollProperties>
    {
        getPhotos(fetch: CameraRollFetchParams,
                  onAsset: (assetInfo: CameraRollAssetInfo) => void,
                  logError: ()=> void): void;
    }

    export interface PanHandlers
    {

    }

    export interface PanResponderEvent
    {

    }

    export interface PanResponderGestureState
    {
        stateID: number;
        moveX: number;
        moveY: number;
        x0: number;
        y0: number;
        dx: number;
        dy: number;
        vx: number;
        vy: number;
        numberActiveTouches: number;
        // All `gestureState` accounts for timeStamps up until:
        _accountsForMovesUpTo: number;
    }

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
    export interface PanResponderCallbacks
    {
        onMoveShouldSetPanResponder?: (e: PanResponderEvent, gestureState: PanResponderGestureState) => boolean;
        onStartShouldSetPanResponder?: (e: PanResponderEvent, gestureState: PanResponderGestureState) => void;
        onPanResponderGrant?: (e: PanResponderEvent, gestureState: PanResponderGestureState) => void;
        onPanResponderMove?: (e: PanResponderEvent, gestureState: PanResponderGestureState) => void;
        onPanResponderRelease?: (e: PanResponderEvent, gestureState: PanResponderGestureState) => void;
        onPanResponderTerminate?: (e: PanResponderEvent, gestureState: PanResponderGestureState) => void;

        onMoveShouldSetPanResponderCapture?: (e: PanResponderEvent, gestureState: PanResponderGestureState) => boolean;
        onStartShouldSetPanResponderCapture?: (e: PanResponderEvent, gestureState: PanResponderGestureState) => boolean;
        onPanResponderReject?: (e: PanResponderEvent, gestureState: PanResponderGestureState) => void;
        onPanResponderStart?: (e: PanResponderEvent, gestureState: PanResponderGestureState) => void;
        onPanResponderEnd?: (e: PanResponderEvent, gestureState: PanResponderGestureState) => void;
        onPanResponderTerminationRequest?: (e: PanResponderEvent, gestureState: PanResponderGestureState) => void;
    }

    export interface PanResponderInstance
    {
        panHandlers: PanHandlers;
    }

    export interface PanResponderStatic
    {
        create(callbacks: PanResponderCallbacks): PanResponderInstance;
    }

    export interface PixelRatioStatic
    {
        get(): number;
    }

    export interface DeviceEventSubscriptionStatic
    {
        remove(): void;
    }

    export interface DeviceEventEmitterStatic
    {
        addListener<T>(type:string, onReceived: (data:T) => void): DeviceEventSubscription;
    }

    // Used by Dimensions below
    export interface ScaledSize
    {
        width: number;
        height: number;
        scale: number;
    }

    // @see https://facebook.github.io/react-native/docs/asyncstorage.html#content
    export interface AsyncStorageStatic
    {
        getItem(key: string, callback?: (error?: Error, result?: string) => void): Promise<string>;
        setItem(key: string, value: string, callback?: (error?: Error) => void): Promise<string>;
        removeItem(key: string, callback?: (error?: Error) => void): Promise<string>;
        mergeItem(key: string, value: string, callback?: (error?: Error) => void): Promise<string>;
        clear(callback?: (error?: Error) => void): Promise<string>;
        getAllKeys(callback?: (error?: Error, keys?: string[]) => void): Promise<string>;
        multiGet(keys: string[], callback?: (errors?: Error[], result?: string[][]) => void): Promise<string>;
        multiSet(keyValuePairs: string[][], callback?: (errors?: Error[]) => void): Promise<string>;
        multiRemove(keys: string[], callback?: (errors?: Error[]) => void): Promise<string>;
        multiMerge(keyValuePairs: string[][], callback?: (errors?: Error[]) => void): Promise<string>;
    }

    export interface InteractionManagerStatic
    {
        runAfterInteractions( fn: () => void ): void;
    }

    export interface ScrollViewProperties
    {

    }


    export interface NativeScrollRectangle
    {
        left: number;
        top: number;
        bottom: number;
        right: number;
    }

    export interface NativeScrollPoint
    {
        x: number;
        y: number;
    }

    export interface NativeScrollSize
    {
        height: number;
        width: number;
    }

    export interface NativeScrollEvent
    {
        contentInset: NativeScrollRectangle;
        contentOffset: NativeScrollPoint;
        contentSize: NativeScrollSize;
        layoutMeasurement: NativeScrollSize;
        zoomScale: number;
    }

    export interface AppStateIOSStatic
    {
        currentState: string;
        addEventListener( type: string, listener: (state: string) => void ): void;
        removeEventListener( type: string, listener: (state: string) => void ): void;
    }

    // exported singletons:
    // export var AppRegistry: AppRegistryStatic;
    export var StyleSheet: StyleSheetStatic;
    export var Navigator: NavigatorStatic;
    export type Navigator = NavigatorStatic;
    export var ListView: ListViewStatic;
    export var CameraRoll: CameraRollStatic;
    export var Image: ImageStatic;
    export type Image = ImageStatic;
    export var TabBarIOS: TabBarIOSStatic;
    export type TabBarIOS = TabBarIOSStatic;
    export var AsyncStorage: AsyncStorageStatic;

    export var Text: React.ComponentClass<TextProperties>;
    export var View: React.ComponentClass<ViewProperties>;
    export var AlertIOS: React.ComponentClass<AlertIOSProperties>;
    export var SegmentedControlIOS: React.ComponentClass<SegmentedControlIOSProperties>;
    export var SwitchIOS: React.ComponentClass<SwitchIOSProperties>;
    export var TouchableHighlight: React.ComponentClass<TouchableHighlightProperties>;
    export var TouchableOpacity: React.ComponentClass<TouchableOpacityProperties>;
    export var TouchableWithoutFeedback: React.ComponentClass<TouchableWithoutFeedbackProperties>;


    export var ActivityIndicatorIOS: React.ComponentClass<ActivityIndicatorIOSProperties>;
    export var PixelRatio: PixelRatioStatic;
    export var DeviceEventEmitter: DeviceEventEmitterStatic;
    export var DeviceEventSubscription: DeviceEventSubscriptionStatic;
    export type DeviceEventSubscription = DeviceEventSubscriptionStatic;
    export var InteractionManager: InteractionManagerStatic;
    export var ScrollView: React.ComponentClass<ScrollViewProperties>;
    export var PanResponder: PanResponderStatic;
    export var SliderIOS: React.ComponentClass<SliderIOSProperties>;
    export var AppStateIOS: AppStateIOSStatic;


    //react re-exported
    export type ReactType = React.ReactType;

    export interface ReactElement<P> extends React.ReactElement<P>{}

    export interface ClassicElement<P> extends React.ClassicElement<P>{}

    export interface DOMElement<P> extends React.DOMElement<P>{}

    export type HTMLElement =React.HTMLElement;
    export type SVGElement = React.SVGElement;

    //
    // Factories
    // ----------------------------------------------------------------------

    export interface Factory<P> extends React.Factory<P>{}

    export interface ClassicFactory<P> extends React.ClassicFactory<P>{}

    export interface DOMFactory<P> extends React.DOMFactory<P>{}

    export type HTMLFactory = React.HTMLFactory;
    export type SVGFactory = React.SVGFactory;
    export type SVGElementFactory = React.SVGElementFactory;

    //
    // React Nodes
    // http://facebook.github.io/react/docs/glossary.html
    // ----------------------------------------------------------------------

    export type ReactText = React.ReactText;
    export type ReactChild = React.ReactChild;

    // Should be Array<ReactNode> but type aliases cannot be recursive
    export type ReactFragment = React.ReactFragment;
    export type ReactNode = React.ReactNode;

    //
    // Top Level API
    // ----------------------------------------------------------------------

    export function createClass<P, S>(spec: React.ComponentSpec<P, S>): React.ClassicComponentClass<P>;

    export function createFactory<P>(type: string): React.DOMFactory<P>;
    export function createFactory<P>(type: React.ClassicComponentClass<P> | string): React.ClassicFactory<P>;
    export function createFactory<P>(type: React.ComponentClass<P>): React.Factory<P>;

    export function createElement<P>(
        type: string,
        props?: P,
        ...children: React.ReactNode[]): React.DOMElement<P>;
    export function createElement<P>(
        type: React.ClassicComponentClass<P> | string,
        props?: P,
        ...children: React.ReactNode[]): React.ClassicElement<P>;
    export function createElement<P>(
        type: React.ComponentClass<P>,
        props?: P,
        ...children: React.ReactNode[]): React.ReactElement<P>;

    export function cloneElement<P>(
        element: React.DOMElement<P>,
        props?: P,
        ...children: React.ReactNode[]): React.DOMElement<P>;
    export function cloneElement<P>(
        element: React.ClassicElement<P>,
        props?: P,
        ...children: React.ReactNode[]): React.ClassicElement<P>;
    export function cloneElement<P>(
        element: React.ReactElement<P>,
        props?: P,
        ...children: React.ReactNode[]): React.ReactElement<P>;

    export function isValidElement(object: {}): boolean;

    export var DOM: React.ReactDOM;
    export var PropTypes: React.ReactPropTypes;
    export var Children: React.ReactChildren;

    //
    // Component API
    // ----------------------------------------------------------------------

    // Base component for plain JS classes
    export class Component<P, S> extends React.Component<P,S>{}

    export interface ClassicComponent<P, S> extends React.ClassicComponent<P,S> {}

    export interface DOMComponent<P> extends ClassicComponent<P, any> {
        tagName: string;
    }

    export type HTMLComponent = React.HTMLComponent;
    export type SVGComponent = React.SVGComponent

    export interface ChildContextProvider<CC> extends React.ChildContextProvider<CC>{}

    //
    // Class Interfaces
    // ----------------------------------------------------------------------

    export interface ComponentClass<P> extends React.ComponentClass<P>{}

    export interface ClassicComponentClass<P> extends React.ClassicComponentClass<P>{}

    //
    // Component Specs and Lifecycle
    // ----------------------------------------------------------------------

    export interface ComponentLifecycle<P, S> extends React.ComponentLifecycle<P,S>{}

    export interface Mixin<P, S> extends React.Mixin<P,S>{}

    export interface ComponentSpec<P, S> extends React.ComponentSpec<P,S>{}

    //
    // Event System
    // ----------------------------------------------------------------------

    export interface SyntheticEvent extends React.SyntheticEvent{}

    export interface DragEvent extends React.DragEvent{}

    export interface ClipboardEvent extends React.ClipboardEvent{}

    export interface KeyboardEvent extends React.KeyboardEvent{}


    export interface FocusEvent extends React.FocusEvent{}

    export interface FormEvent extends React.FormEvent {}

    export interface MouseEvent extends React.MouseEvent {}

    export interface TouchEvent extends React.TouchEvent {}

    export interface UIEvent extends React.UIEvent {}

    export interface WheelEvent extends React.WheelEvent {}

    //
    // Event Handler Types
    // ----------------------------------------------------------------------

    export interface EventHandler<E extends React.SyntheticEvent> extends React.EventHandler<E>{}

    export interface DragEventHandler extends React.DragEventHandler {}
    export interface ClipboardEventHandler extends React.ClipboardEventHandler {}
    export interface KeyboardEventHandler extends React.KeyboardEventHandler {}
    export interface FocusEventHandler extends React.FocusEventHandler {}
    export interface FormEventHandler extends React.FormEventHandler {}
    export interface MouseEventHandler extends React.MouseEventHandler {}
    export interface TouchEventHandler extends React.TouchEventHandler {}
    export interface UIEventHandler extends React.UIEventHandler {}
    export interface WheelEventHandler extends React.WheelEventHandler{}

    //
    // Props / DOM Attributes
    // ----------------------------------------------------------------------

    export interface Props<T> extends React.Props<T>{}

    export interface DOMAttributesBase<T> extends React.DOMAttributesBase<T>{}

    export interface DOMAttributes extends React.DOMAttributes{}

    // This interface is not complete. Only properties accepting
    // unitless numbers are listed here (see CSSProperty.js in React)
    export interface CSSProperties extends React.CSSProperties{}

    export interface HTMLAttributesBase<T> extends React.HTMLAttributesBase<T>{}

    export interface HTMLAttributes extends React.HTMLAttributes{}

    export interface SVGElementAttributes extends React.SVGElementAttributes{}

    export interface SVGAttributes extends React.SVGAttributes{}

    //
    // React.DOM
    // ----------------------------------------------------------------------

    export interface ReactDOM extends React.ReactDOM{}

    //
    // React.PropTypes
    // ----------------------------------------------------------------------

    export interface Validator<T> extends React.Validator<T>{}

    export interface Requireable<T> extends React.Requireable<T> {}

    export interface ValidationMap<T> extends React.ValidationMap<T>{}

    export interface ReactPropTypes extends React.ReactPropTypes{}

    //
    // React.Children
    // ----------------------------------------------------------------------

    export interface ReactChildren extends React.ReactChildren{}

    //
    // Browser Interfaces
    // https://github.com/nikeee/2048-typescript/blob/master/2048/js/touch.d.ts
    // ----------------------------------------------------------------------

    export interface AbstractView extends React.AbstractView{}

    export interface Touch extends React.Touch{}

    export interface TouchList extends React.TouchList{}


    export function __spread(target:any, ...sources:any[]): any;
}

declare module "react-native" {

    export default ReactNative
}



declare module "Dimensions"
{
    import React from 'react-native';

    interface Dimensions
    {
        get(what:string): React.ScaledSize;
    }

    var ExportDimensions: Dimensions;
    export = ExportDimensions;
}
