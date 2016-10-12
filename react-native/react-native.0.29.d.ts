// Type definitions for react-native 0.29
// Project: https://github.com/facebook/react-native
// Definitions by: Bruno Grieder <https://github.com/bgrieder>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// USING: these definitions are meant to be used with the TSC compiler target set to ES6
//
// USAGE EXAMPLES: check the RNTSExplorer project at https://github.com/bgrieder/RNTSExplorer
// Warning: the project currently uses and older version of react-native
//
// CONTRIBUTING: please open pull requests
//
// CREDITS: This work is based on an original work made by Bernd Paradies: https://github.com/bparadie
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// <reference path="../react/react.d.ts" />

//so we know what is "original" React
import React = __React;

//react-native "extends" react
declare namespace  __React {

    module NativeMethodsMixin {
      type MeasureOnSuccessCallback = (
        x: number,
        y: number,
        width: number,
        height: number,
        pageX: number,
        pageY: number
      ) => void

      type MeasureInWindowOnSuccessCallback = (
        x: number,
        y: number,
        width: number,
        height: number
      ) => void

      type MeasureLayoutOnSuccessCallback = (
        left: number,
        top: number,
        width: number,
        height: number
      ) => void
    }

    /**
     * @see https://github.com/facebook/react-native/blob/master/Libraries/ReactIOS/NativeMethodsMixin.js
     */
    // export class Component<P, S> extends React.Component<P, S> {
    export interface NativeComponent {

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
      measure(callback: NativeMethodsMixin.MeasureOnSuccessCallback): void;

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
      measureInWindow(callback: NativeMethodsMixin.MeasureInWindowOnSuccessCallback): void;

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
        onSuccess: NativeMethodsMixin.MeasureLayoutOnSuccessCallback,
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
        [key: string]: Component<any, any>
      };
    }

    //TODO: BGR: Replace with ComponentClass ?
    // node_modules/react-tools/src/classic/class/ReactClass.js
    export interface ReactClass<D, P, S> {
        // TODO:
    }

    // see react-jsx.d.ts
    export function createElement<P>( type: React.ReactType,
                                      props?: P,
                                      ...children: React.ReactNode[] ): React.ReactElement<P>;


    export type Runnable = ( appParameters: any ) => void;


    // Similar to React.SyntheticEvent except for nativeEvent
    interface NativeSyntheticEvent<T> {
        bubbles: boolean
        cancelable: boolean
        currentTarget: EventTarget
        defaultPrevented: boolean
        eventPhase: number
        isTrusted: boolean
        nativeEvent: T
        preventDefault(): void
        stopPropagation(): void
        target: EventTarget
        timeStamp: Date
        type: string
    }

    export interface NativeTouchEvent {
        /**
         * Array of all touch events that have changed since the last event
         */
        changedTouches: NativeTouchEvent[]

        /**
         * The ID of the touch
         */
        identifier: string

        /**
         * The X position of the touch, relative to the element
         */
        locationX: number

        /**
         * The Y position of the touch, relative to the element
         */
        locationY: number

        /**
         * The X position of the touch, relative to the screen
         */
        pageX: number

        /**
         * The Y position of the touch, relative to the screen
         */
        pageY: number

        /**
         * The node id of the element receiving the touch event
         */
        target: string

        /**
         * A time identifier for the touch, useful for velocity calculation
         */
        timestamp: number

        /**
         * Array of all current touches on the screen
         */
        touches : NativeTouchEvent[]
    }

    export interface GestureResponderEvent extends NativeSyntheticEvent<NativeTouchEvent> {
    }


    export interface  PointProperties {
        x: number
        y: number
    }

    export interface Insets {
        top?: number
        left?: number
        bottom?: number
        right?: number
    }

    /**
     * //FIXME: need to find documentation on which compoenent is a native (i.e. non composite component)
     */
    /*
    export interface NativeComponent {
    }
    */
    /**
     * //FIXME: need to find documentation on which component is a TTouchable and can implement that interface
     * @see React.DOMAtributes
     */
    export interface Touchable {
        onTouchStart?: ( event: GestureResponderEvent ) => void
        onTouchMove?: ( event: GestureResponderEvent ) => void
        onTouchEnd?: ( event: GestureResponderEvent ) => void
        onTouchCancel?: ( event: GestureResponderEvent ) => void
        onTouchEndCapture?: ( event: GestureResponderEvent ) => void
    }

    export type AppConfig = {
        appKey: string;
        component: ReactClass<any, any, any>;
        run?: Runnable;
    }

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
    export class AppRegistry {
        static registerConfig( config: AppConfig[] ): void;

        static registerComponent( appKey: string, getComponentFunc: () => React.ComponentClass<any> ): string;

        static registerRunnable( appKey: string, func: Runnable ): string;

        static getAppKeys(): string[];

        static unmountApplicationComponentAtRootTag(rootTag: number): void;

        static runApplication( appKey: string, appParameters: any ): void;
    }

    export interface LayoutAnimationTypes {
        spring: string
        linear: string
        easeInEaseOut: string
        easeIn: string
        easeOut: string
    }

    export interface LayoutAnimationProperties {
        opacity: string
        scaleXY: string
    }

    export interface LayoutAnimationAnim {
        duration?: number
        delay?: number
        springDamping?: number
        initialVelocity?: number
        type?: string //LayoutAnimationTypes
        property?: string //LayoutAnimationProperties
    }

    export interface LayoutAnimationConfig {
        duration: number
        create?: LayoutAnimationAnim
        update?: LayoutAnimationAnim
        delete?: LayoutAnimationAnim
    }

    export interface LayoutAnimationStatic {

        configureNext: ( config: LayoutAnimationConfig, onAnimationDidEnd?: () => void, onError?: ( error?: any ) => void ) => void
        create: ( duration: number, type?: string, creationProp?: string ) => LayoutAnimationConfig
        Types: LayoutAnimationTypes
        Properties: LayoutAnimationProperties
        configChecker: ( conf: {config: LayoutAnimationConfig}, name: string, next: string ) => void
        Presets : {
            easeInEaseOut: LayoutAnimationConfig
            linear:LayoutAnimationConfig
            spring: LayoutAnimationConfig
        }
    }

    export type FlexAlignType = "flex-start" | "flex-end" | "center" | "stretch";
    export type FlexJustifyType = "flex-start" | "flex-end" | "center" | "space-between" | "space-around";

    /**
     * Flex Prop Types
     * @see https://facebook.github.io/react-native/docs/flexbox.html#proptypes
     * @see LayoutPropTypes.js
     */
    export interface FlexStyle {

        alignItems?: FlexAlignType;
        alignSelf?: "auto" | FlexAlignType;
        borderBottomWidth?: number
        borderLeftWidth?: number
        borderRightWidth?: number
        borderTopWidth?: number
        borderWidth?: number
        bottom?: number
        flex?: number
        flexDirection?: "row" | "column" | "row-reverse" | "column-reverse"
        flexWrap?: "wrap" | "nowrap"
        height?: number
        justifyContent?: FlexJustifyType
        left?: number
        minWidth?: number
        maxWidth?: number
        minHeight?: number
        maxHeight?: number
        margin?: number
        marginBottom?: number
        marginHorizontal?: number
        marginLeft?: number
        marginRight?: number
        marginTop?: number
        marginVertical?: number
        padding?: number
        paddingBottom?: number
        paddingHorizontal?: number
        paddingLeft?: number
        paddingRight?: number
        paddingTop?: number
        paddingVertical?: number
        position?: "absolute" | "relative"
        right?: number
        top?: number
        width?: number

        /**
         * @platform ios
         */
        zIndex?: number
    }

    /**
     * @see ShadowPropTypesIOS.js
     */
    export interface ShadowPropTypesIOSStatic {
        /**
         * Sets the drop shadow color
         * @platform ios
         */
        shadowColor: string

        /**
         * Sets the drop shadow offset
         * @platform ios
         */
        shadowOffset: {width: number, height: number}

        /**
         * Sets the drop shadow opacity (multiplied by the color's alpha component)
         * @platform ios
         */
        shadowOpacity: number

        /**
         * Sets the drop shadow blur radius
         * @platform ios
         */
        shadowRadius: number
    }

    type GetCurrentPositionOptions = {
        timeout: number
        maximumAge: number
        enableHighAccuracy: boolean
        distanceFilter: number
    }

    type WatchPositionOptions = {
        timeout: number
        maximumAge: number
        enableHighAccuracy: boolean
        distanceFilter: number
    }

    type GeolocationReturnType = {
        coords: {
            latitude: number
            longitude: number
        }
    }


    export interface TransformsStyle {

        transform?: [{perspective: number}, {rotate: string}, {rotateX: string}, {rotateY: string}, {rotateZ: string}, {scale: number}, {scaleX: number}, {scaleY: number}, {translateX: number}, {translateY: number}, {skewX: string}, {skewY: string}]
        transformMatrix?: Array<number>
        rotation?: number
        scaleX?: number
        scaleY?: number
        translateX?: number
        translateY?: number
    }


    export interface StyleSheetProperties {
        hairlineWidth: number
        flatten<T extends string>(style: T): T
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
            layout: LayoutRectangle
        }
    }

    export interface TextStyleIOS extends ViewStyle {
      letterSpacing?: number
      textDecorationColor?: string
      textDecorationStyle?: "solid" | "double" | "dotted" | "dashed"
      writingDirection?: "auto" | "ltr" | "rtl"
    }

    export interface TextStyleAndroid extends ViewStyle {
      textAlignVertical?: "auto" | "top" | "bottom" | "center"
    }

    // @see https://facebook.github.io/react-native/docs/text.html#style
    export interface TextStyle extends TextStyleIOS, TextStyleAndroid, ViewStyle {
        color?: string
        fontFamily?: string
        fontSize?: number
        fontStyle?: "normal" | "italic"
        /**
         * Specifies font weight. The values 'normal' and 'bold' are supported
         * for most fonts. Not all fonts have a variant for each of the numeric
         * values, in that case the closest one is chosen.
         */
        fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
        letterSpacing?: number
        lineHeight?: number
        /**
         * Specifies text alignment.
         * The value 'justify' is only supported on iOS.
         */
        textAlign?: "auto" | "left" | "right" | "center"
        textDecorationLine?: "none" | "underline" | "line-through" | "underline line-through"
        textDecorationStyle?: "solid" | "double" | "dotted" | "dashed"
        textDecorationColor?: string
        textShadowColor?: string
        textShadowOffset?: {width: number, height: number}
        textShadowRadius?: number
        testID?: string
    }

    export interface TextPropertiesIOS {

        /**
         * Specifies should fonts scale to respect Text Size accessibility
         * setting on iOS.
         */
        allowFontScaling: boolean

        /**
         * When true, no visual change is made when text is pressed down.
         * By default, a gray oval highlights the text on press down.
         */
        suppressHighlighting?: boolean
    }

    // https://facebook.github.io/react-native/docs/text.html#props
    export interface TextProperties extends React.Props<TextProperties> {

        /**
         * Specifies should fonts scale to respect Text Size accessibility setting on iOS.
         */
        allowFontScaling?: boolean

        /**
         * Line Break mode. Works only with numberOfLines.
         * clip is working only for iOS
         */
        lineBreakMode?: 'head' | 'middle' | 'tail' | 'clip'

        /**
         * Used to truncate the text with an elipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number.
         */
        numberOfLines?: number

        /**
         * Invoked on mount and layout changes with
         *
         * {nativeEvent: { layout: {x, y, width, height}}}.
         */
        onLayout?: ( event: LayoutChangeEvent ) => void

        /**
         * This function is called on press.
         * Text intrinsically supports press handling with a default highlight state (which can be disabled with suppressHighlighting).
         */
        onPress?: () => void

        /**
         * @see https://facebook.github.io/react-native/docs/text.html#style
         */
        style?: TextStyle

        /**
         * Used to locate this view in end-to-end tests.
         */
        testID?: string
    }

    /**
     * A React component for displaying text which supports nesting, styling, and touch handling.
     */
    export interface TextStatic extends React.ComponentClass<TextProperties> {

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
        clearButtonMode?: string

        /**
         * If true, clears the text field automatically when editing begins
         */
        clearTextOnFocus?: boolean

        /**
         * If true, the keyboard disables the return key when there is no text and automatically enables it when there is text.
         * The default value is false.
         */
        enablesReturnKeyAutomatically?: boolean

        /**
         * Callback that is called when a key is pressed.
         * Pressed key value is passed as an argument to the callback handler.
         * Fires before onChange callbacks.
         */
        onKeyPress?: () => void

        /**
         * //FIXME: requires typing
         * See DocumentSelectionState.js, some state that is responsible for maintaining selection information for a document
         */
        selectionState?: any


    }

    /**
     * Android Specific properties for TextInput
     * @see https://facebook.github.io/react-native/docs/textinput.html#props
     */
    export interface TextInputAndroidProperties {

        /**
         * Sets the number of lines for a TextInput.
         * Use it with multiline set to true to be able to fill the lines.
         */
        numberOfLines?: number

        /**
         * Sets the return key to the label. Use it instead of `returnKeyType`.
         * @platform android
         */
        returnKeyLabel?: string

        /**
         * enum('start', 'center', 'end')
         * Set the position of the cursor from where editing will begin.
         */
        textAlign?: string

        /**
         * enum('top', 'center', 'bottom')
         * Aligns text vertically within the TextInput.
         */
        textAlignVertical?: string

        /**
         * The color of the textInput underline.
         */
        underlineColorAndroid?: string
    }


    /**
     * @see https://facebook.github.io/react-native/docs/textinput.html#props
     */
    export interface TextInputProperties extends TextInputIOSProperties, TextInputAndroidProperties, React.Props<TextInputStatic> {

        /**
         * Can tell TextInput to automatically capitalize certain characters.
         *      characters: all characters,
         *      words: first letter of each word
         *      sentences: first letter of each sentence (default)
         *      none: don't auto capitalize anything
         *
         * https://facebook.github.io/react-native/docs/textinput.html#autocapitalize
         */
        autoCapitalize?: "none" | "sentences" | "words" | "characters"

        /**
         * If false, disables auto-correct.
         * The default value is true.
         */
        autoCorrect?: boolean

        /**
         * If true, focuses the input on componentDidMount.
         * The default value is false.
         */
        autoFocus?: boolean

        /**
         * If true, the text field will blur when submitted.
         * The default value is true.
         */
        blurOnSubmit?: boolean

        /**
         * Provides an initial value that will change when the user starts typing.
         * Useful for simple use-cases where you don't want to deal with listening to events
         * and updating the value prop to keep the controlled state in sync.
         */
        defaultValue?: string

        /**
         * If false, text is not editable. The default value is true.
         */
        editable?: boolean

        /**
         * enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search')
         * Determines which keyboard to open, e.g.numeric.
         * The following values work across platforms: - default - numeric - email-address
         */
        keyboardType?: "default" | "email-address" | "numeric" | "phone-pad" | "ascii-capable" | "numbers-and-punctuation" | "url" | "number-pad" | "name-phone-pad" | "decimal-pad" | "twitter" | "web-search"

        /**
         * Limits the maximum number of characters that can be entered.
         * Use this instead of implementing the logic in JS to avoid flicker.
         */
        maxLength?: number

        /**
         * If true, the text input can be multiple lines. The default value is false.
         */
        multiline?: boolean

        /**
         * Callback that is called when the text input is blurred
         */
        onBlur?: () => void

        /**
         * Callback that is called when the text input's text changes.
         */
        onChange?: ( event: {nativeEvent: {text: string}} ) => void

        /**
         * Callback that is called when the text input's text changes.
         * Changed text is passed as an argument to the callback handler.
         */
        onChangeText?: ( text: string ) => void

        /**
         * Callback that is called when text input ends.
         */
        onEndEditing?: ( event: {nativeEvent: {text: string}} ) => void

        /**
         * Callback that is called when the text input is focused
         */
        onFocus?: () => void

        /**
         * Invoked on mount and layout changes with {x, y, width, height}.
         */
        onLayout?: ( event: {nativeEvent: {x: number, y: number, width: number, height: number}} ) => void

        onSelectionChange?: () => void

        /**
         * Callback that is called when the text input's submit button is pressed.
         */
        onSubmitEditing?: ( event: {nativeEvent: {text: string}} ) => void

        /**
         * //FIXME: Not part of the doc but found in examples
         */
        password?: boolean

        /**
         * The string that will be rendered before text input has been entered
         */
        placeholder?: string

        /**
         * The text color of the placeholder string
         */
        placeholderTextColor?: string

        /**
         * enum('default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call')
         * Determines how the return key should look.
         */
        returnKeyType?: "default" | "go" | "google" | "join" | "next" | "route" | "search" | "send" | "yahoo" | "done" | "emergency-call"

        /**
         * If true, the text input obscures the text entered so that sensitive text like passwords stay secure.
         * The default value is false.
         */
        secureTextEntry?: boolean

        /**
         * If true, all text will automatically be selected on focus
         */
        selectTextOnFocus?: boolean

        /**
         * The highlight (and cursor on ios) color of the text input
         */
        selectionColor?: string

        /**
         * Styles
         */
        style?: TextStyle

        /**
         * Used to locate this view in end-to-end tests
         */
        testID?: string

        /**
         * The value to show for the text input. TextInput is a controlled component,
         * which means the native value will be forced to match this value prop if provided.
         * For most uses this works great, but in some cases this may cause flickering - one common cause is preventing edits by keeping value the same.
         * In addition to simply setting the same value, either set editable={false},
         * or set/update maxLength to prevent unwanted edits without flicker.
         */
        value?: string
    }

    /**
     * @see https://facebook.github.io/react-native/docs/textinput.html#methods
     */
    export interface TextInputStatic extends NativeComponent, React.ComponentClass<TextInputProperties> {
        /**
         * Returns if the input is currently focused.
         */
        isFocused: () => boolean

        /**
         * Removes all text from the input.
         */
        clear: () => void

        // The following methods are found only in implementation
        blur: () => void
        focus: () => void
    }

    export type ToolbarAndroidAction = {
        /**
         *  title: required, the title of this action
         */
        title: string

        /**
         * icon: the icon for this action, e.g. require('./some_icon.png')
         */
        icon?: any

        /**
         * show: when to show this action as an icon or hide it in the overflow menu: always, ifRoom or never
         */
        show?: "always" | "ifRoom" | "never"

        /**
         * showWithText: boolean, whether to show text alongside the icon or not
         */
        showWithText?: boolean
    }

    export interface ToolbarAndroidProperties extends ViewProperties, React.Props<ToolbarAndroidStatic> {
        actions?: ToolbarAndroidAction[]

        /**
         * Sets the content inset for the toolbar ending edge.
         * The content inset affects the valid area for Toolbar content other
         * than the navigation button and menu. Insets define the minimum
         * margin for these components and can be used to effectively align
         * Toolbar content along well-known gridlines.
         */
        contentInsetEnd?: number

        /**
         * Sets the content inset for the toolbar starting edge.
         * The content inset affects the valid area for Toolbar content
         * other than the navigation button and menu. Insets define the
         * minimum margin for these components and can be used to effectively
         * align Toolbar content along well-known gridlines.
         */
        contentInsetStart?: number

        /**
         * Sets the toolbar logo.
         */
        logo?: any

        /**
         * Sets the navigation icon.
         */
        navIcon?: any

        /**
         * Callback that is called when an action is selected. The only
         * argument that is passed to the callback is the position of the
         * action in the actions array.
         */
        onActionSelected?: (position: number) => void

        /**
         * Callback called when the icon is selected.
         */
        onIconClicked?: () => void

        /**
         * Sets the overflow icon.
         */
        overflowIcon?: any

        /**
         * Used to set the toolbar direction to RTL.
         * In addition to this property you need to add
         * android:supportsRtl="true"
         * to your application AndroidManifest.xml and then call
         * setLayoutDirection(LayoutDirection.RTL) in your MainActivity
         * onCreate method.
         */
        rtl?: boolean

        /**
         * Sets the toolbar subtitle.
         */
        subtitle?: string

        /**
         * Sets the toolbar subtitle color.
         */
        subtitleColor?: string

        /**
         * Used to locate this view in end-to-end tests.
         */
        testID?: string

        /**
         * Sets the toolbar title.
         */
        title?: string

        /**
         * Sets the toolbar title color.
         */
        titleColor?: string

        ref?: Ref<ToolbarAndroidStatic>
    }

    export interface ToolbarAndroidStatic extends React.ComponentClass<ToolbarAndroidProperties> {

    }


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
        onStartShouldSetResponder?: ( event: GestureResponderEvent ) => boolean

        /**
         * Called for every touch move on the View when it is not the responder: does this view want to "claim" touch responsiveness?
         */
        onMoveShouldSetResponder?: ( event: GestureResponderEvent ) => boolean

        /**
         * If the View returns true and attempts to become the responder, one of the following will happen:
         */

        /**
         * The View is now responding for touch events.
         * This is the time to highlight and show the user what is happening
         */
        onResponderGrant?: ( event: GestureResponderEvent ) => void

        /**
         * Something else is the responder right now and will not release it
         */
        onResponderReject?: ( event: GestureResponderEvent ) => void

        /**
         * If the view is responding, the following handlers can be called:
         */

        /**
         * The user is moving their finger
         */
        onResponderMove?: ( event: GestureResponderEvent ) => void

        /**
         * Fired at the end of the touch, ie "touchUp"
         */
        onResponderRelease?: ( event: GestureResponderEvent ) => void

        /**
         *  Something else wants to become responder.
         *  Should this view release the responder? Returning true allows release
         */
        onResponderTerminationRequest?: ( event: GestureResponderEvent ) => boolean

        /**
         * The responder has been taken from the View.
         * Might be taken by other views after a call to onResponderTerminationRequest,
         * or might be taken by the OS without asking (happens with control center/ notification center on iOS)
         */
        onResponderTerminate?: ( event: GestureResponderEvent ) => void

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
        onStartShouldSetResponderCapture?: ( event: GestureResponderEvent ) => boolean

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
        backfaceVisibility?: "visible" | "hidden"
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
        borderStyle?: "solid" | "dotted" | "dashed"
        borderTopColor?: string;
        borderTopLeftRadius?: number;
        borderTopRightRadius?: number;
        borderTopWidth?: number
        opacity?: number;
        overflow?: "visible" | "hidden"
        shadowColor?: string;
        shadowOffset?: {width: number, height: number};
        shadowOpacity?: number;
        shadowRadius?: number;
        elevation?: number;
        testID?: string;
    }


    export interface ViewPropertiesIOS {

        /**
         * Provides additional traits to screen reader.
         * By default no traits are provided unless specified otherwise in element
         *
         * @enum('none', 'button', 'link', 'header', 'search', 'image', 'selected', 'plays', 'key', 'text','summary', 'disabled', 'frequentUpdates', 'startsMedia', 'adjustable', 'allowsDirectInteraction', 'pageTurn')
         */
        accessibilityTraits?: string | string[];

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
        shouldRasterizeIOS?: boolean
    }

    export interface ViewPropertiesAndroid {

        /**
         * Indicates to accessibility services to treat UI component like a native one.
         * Works for Android only.
         *
         * @enum('none', 'button', 'radiobutton_checked', 'radiobutton_unchecked' )
         */
        accessibilityComponentType?: string


        /**
         * Indicates to accessibility services whether the user should be notified when this view changes.
         * Works for Android API >= 19 only.
         * See http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.
         */
        accessibilityLiveRegion?: string

        /**
         * Views that are only used to layout their children or otherwise don't draw anything
         * may be automatically removed from the native hierarchy as an optimization.
         * Set this property to false to disable this optimization and ensure that this View exists in the native view hierarchy.
         */
        collapsable?: boolean


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
        importantForAccessibility?: string


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
        needsOffscreenAlphaCompositing?: boolean


        /**
         * Whether this view should render itself (and all of its children) into a single hardware texture on the GPU.
         *
         * On Android, this is useful for animations and interactions that only modify opacity, rotation, translation, and/or scale:
         * in those cases, the view doesn't have to be redrawn and display lists don't need to be re-executed. The texture can just be
         * re-used and re-composited with different parameters. The downside is that this can use up limited video memory, so this prop should be set back to false at the end of the interaction/animation.
         */
        renderToHardwareTextureAndroid?: boolean;

    }

    /**
     * @see https://facebook.github.io/react-native/docs/view.html#props
     */
    export interface ViewProperties extends ViewPropertiesAndroid, ViewPropertiesIOS, GestureResponderHandlers, Touchable, React.Props<ViewStatic> {

        /**
         * Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the Text nodes separated by space.
         */
        accessibilityLabel?: string;

        /**
         * When true, indicates that the view is an accessibility element.
         * By default, all the touchable elements are accessible.
         */
        accessible?: boolean;

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

        hitSlop?: {top: number, left: number, bottom: number, right: number}

        /**
         * When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.
         */
        onAcccessibilityTap?: () => void;

        /**
         * Invoked on mount and layout changes with
         *
         * {nativeEvent: { layout: {x, y, width, height}}}.
         */
        onLayout?: ( event: LayoutChangeEvent ) => void;

        /**
         * When accessible is true, the system will invoke this function when the user performs the magic tap gesture.
         */
        onMagicTap?: () => void;

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
        pointerEvents?: "box-none" | "none" | "box-only" | "autoViewStyle"

        /**
         *
         * This is a special performance property exposed by RCTView and is useful for scrolling content when there are many subviews,
         * most of which are offscreen. For this property to be effective, it must be applied to a view that contains many subviews that extend outside its bound.
         * The subviews must also have overflow: hidden, as should the containing view (or one of its superviews).
         */
        removeClippedSubviews?: boolean

        style?: ViewStyle;

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
    export interface ViewStatic extends NativeComponent, React.ComponentClass<ViewProperties> {

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
        initialPage?: number;
        /**
         * When false, the content does not scroll.
         * The default value is true.
         */
        scrollEnabled?: boolean;
        onPageScroll?: ( event: NativeSyntheticEvent<ViewPagerAndroidOnPageScrollEventData> ) => void;
        onPageSelected?: ( event: NativeSyntheticEvent<ViewPagerAndroidOnPageSelectedEventData> ) => void;
        onPageScrollStateChanged?: (state: "Idle" | "Dragging" | "Settling") => void
        keyboardDismissMode?: "none" | "on-drag"
        pageMargin?: number
    }

    export interface ViewPagerAndroidStatic extends NativeComponent, React.ComponentClass<ViewPagerAndroidProperties> {
      setPage: (selectedPage: number) => void
      setPageWithoutAnimation: (selectedPage: number) => void
    }

    export interface KeyboardAvoidingViewStatic extends React.ComponentClass<KeyboardAvoidingViewProps> {

    }

    export interface KeyboardAvoidingViewProps extends ViewProperties, React.Props<KeyboardAvoidingViewStatic> {

        behavior?: 'height' | 'position' | 'padding'

        /**
         * This is the distance between the top of the user screen and the react native view,
         * may be non-zero in some use cases.
         */
        keyboardVerticalOffset: number

        ref?: Ref<KeyboardAvoidingViewStatic & ViewStatic>
    }

    /**
     * //FIXME: No documentation extracted from code comment on WebView.ios.js
     */
    export interface NavState {

        url?: string
        title?: string
        loading?: boolean
        canGoBack?: boolean
        canGoForward?: boolean;

        [key: string]: any
    }

    export interface WebViewPropertiesAndroid {

        /**
         * Used for android only, JS is enabled by default for WebView on iOS
         */
        javaScriptEnabled?: boolean

        /**
         * Used on Android only, controls whether DOM Storage is enabled
         * or not android
         */
        domStorageEnabled?: boolean
    }

    export interface WebViewIOSLoadRequestEvent {
        target: number
        canGoBack: boolean
        lockIdentifier: number
        loading: boolean
        title: string
        canGoForward: boolean
        navigationType: 'other' | 'click'
        url: string
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
        allowsInlineMediaPlayback?: boolean

        bounces?: boolean

        /**
         * A floating-point number that determines how quickly the scroll
         * view decelerates after the user lifts their finger. You may also
         * use string shortcuts "normal" and "fast" which match the
         * underlying iOS settings for UIScrollViewDecelerationRateNormal
         * and UIScrollViewDecelerationRateFast respectively.
         * - normal: 0.998 - fast: 0.99 (the default for iOS WebView)
         */
        decelerationRate?: "normal" | "fast" | number

        /**
         * Allows custom handling of any webview requests by a JS handler.
         * Return true or false from this method to continue loading the
         * request.
         */
        onShouldStartLoadWithRequest?: (event: WebViewIOSLoadRequestEvent) => boolean

        scrollEnabled?: boolean
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
    export interface WebViewProperties extends ViewProperties, WebViewPropertiesAndroid, WebViewPropertiesIOS, React.Props<WebViewStatic> {

        automaticallyAdjustContentInsets?: boolean

        bounces?: boolean

        contentInset?: Insets

        html?: string

        /**
         * Sets the JS to be injected when the webpage loads.
         */
        injectedJavaScript?: string

        /**
         * Invoked when load fails
         */
        onError?:  ( event: NavState ) => void

        /**
         * Invoked when load finish
         */
        onLoad?:  ( event: NavState ) => void

        /**
         * Invoked when load either succeeds or fails
         */
        onLoadEnd?:  ( event: NavState ) => void

        /**
         * Invoked on load start
         */
        onLoadStart?:  ( event: NavState ) => void

        onNavigationStateChange?: ( event: NavState ) => void

        /**
         * Allows custom handling of any webview requests by a JS handler.
         * Return true or false from this method to continue loading the request.
         */
        onShouldStartLoadWithRequest?: () => boolean

        /**
         * view to show if there's an error
         */
        renderError?: () => React.ReactElement<ViewProperties>

        /**
         * loading indicator to show
         */
        renderLoading?: () => React.ReactElement<ViewProperties>

        scrollEnabled?: boolean

        startInLoadingState?: boolean

        style?: ViewStyle

        // Deprecated: Use the `source` prop instead.
        url?: string

        source?: WebViewUriSource | WebViewHtmlSource | number

        /**
         * Determines whether HTML5 audio & videos require the user to tap
         * before they can start playing. The default value is false.
         */
         mediaPlaybackRequiresUserAction?: boolean

        /**
         * sets whether the webpage scales to fit the view and the user can change the scale
         */
        scalesPageToFit?: boolean

        ref?: Ref<WebViewStatic & ViewStatic>
    }


    export interface WebViewStatic extends React.ComponentClass<WebViewProperties> {

        /**
         * Go back one page in the webview's history.
         */
        goBack: () => void

        /**
         * Go forward one page in the webview's history.
         */
        goForward: () => void

        /**
         * Reloads the current page.
         */
        reload: () => void

        /**
         * Returns the native webview node.
         */
        getWebViewHandle: () => any
    }


    /**
     * @see https://facebook.github.io/react-native/docs/segmentedcontrolios.html
     * @see SegmentedControlIOS.ios.js
     */
     export interface NativeSegmentedControlIOSChangeEvent {
         value: string
         selectedSegmentIndex: number
         target: number
     }

     export interface SegmentedControlIOSProperties extends ViewProperties, React.Props<SegmentedControlIOSStatic> {

         /**
          * If false the user won't be able to interact with the control. Default value is true.
          */
         enabled?: boolean

         /**
          * If true, then selecting a segment won't persist visually.
          * The onValueChange callback will still work as expected.
          */
         momentary?: boolean

         /**
          * Callback that is called when the user taps a segment;
          * passes the event as an argument
          * @param event
          */
         onChange?: (event: NativeSyntheticEvent<NativeSegmentedControlIOSChangeEvent>) => void

         /**
          * Callback that is called when the user taps a segment; passes the segment's value as an argument
          * @param value
          */
         onValueChange?: (value: string) => void

         /**
          * The index in props.values of the segment to be (pre)selected.
          */
         selectedIndex?: number

         /**
          * Accent color of the control.
          */
         tintColor?: string

         /**
          * The labels for the control's segment buttons, in order.
          */
         values?: string[]

         ref?: Ref<SegmentedControlIOSStatic>
     }

    export interface SegmentedControlIOSStatic extends React.ComponentClass<SegmentedControlIOSProperties> {

    }


    export interface NavigatorIOSProperties extends React.Props<NavigatorIOSStatic> {
        /**
         * The background color of the navigation bar
         */
        barTintColor?: string

        /**
         * NavigatorIOS uses "route" objects to identify child views, their props, and navigation bar configuration.
         * "push" and all the other navigation operations expect routes to be like this
         */
        initialRoute?: Route

        /**
         * The default wrapper style for components in the navigator.
         * A common use case is to set the backgroundColor for every page
         */
        itemWrapperStyle?: ViewStyle

        /**
         * A Boolean value that indicates whether the navigation bar is hidden
         */
        navigationBarHidden?: boolean

        /**
         * A Boolean value that indicates whether to hide the 1px hairline shadow
         */
        shadowHidden?: boolean

        /**
         * The color used for buttons in the navigation bar
         */
        tintColor?: string

        /**
         * The text color of the navigation bar title
         */
        titleTextColor?: string

        /**
         * A Boolean value that indicates whether the navigation bar is translucent
         */
        translucent?: boolean

        /**
         * NOT IN THE DOC BUT IN THE EXAMPLES
         */
        style?: ViewStyle
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
        push: ( route: Route ) => void

        /**
         * Go back one page
         */
        pop: () => void

        /**
         * Go back N pages at once. When N=1, behavior matches pop()
         */
        popN: ( n: number ) => void

        /**
         * Replace the route for the current page and immediately load the view for the new route
         */
        replace: ( route: Route ) => void

        /**
         * Replace the route/view for the previous page
         */
        replacePrevious: ( route: Route ) => void

        /**
         * Replaces the previous route/view and transitions back to it
         */
        replacePreviousAndPop: ( route: Route ) => void

        /**
         * Replaces the top item and popToTop
         */
        resetTo: ( route: Route ) => void

        /**
         * Go back to the item for a particular route object
         */
        popToRoute( route: Route ): void

        /**
         * Go back to the top item
         */
        popToTop(): void
    }

    export interface NavigatorIOSStatic extends NavigationIOS, React.ComponentClass<NavigatorIOSProperties> {
    }


    /**
     * @see https://facebook.github.io/react-native/docs/activityindicator.html#props
     */
    export interface ActivityIndicatorProperties extends ViewProperties, React.Props<ActivityIndicatorStatic> {

        /**
         * Whether to show the indicator (true, the default) or hide it (false).
         */
        animating?: boolean

        /**
         * The foreground color of the spinner (default is gray).
         */
        color?: string

        /**
         * Whether the indicator should hide when not animating (true by default).
         */
        hidesWhenStopped?: boolean

        /**
         * Size of the indicator.
         * Small has a height of 20, large has a height of 36.
         *
         * enum('small', 'large')
         */
        size?: 'small' | 'large'

        style?: ViewStyle

        ref?: Ref<ActivityIndicatorStatic>
    }

    export interface ActivityIndicatorStatic extends React.ComponentClass<ActivityIndicatorProperties> {
    }


    /**
     * @see https://facebook.github.io/react-native/docs/activityindicatorios.html#props
     */
    export interface ActivityIndicatorIOSProperties extends ViewProperties, React.Props<ActivityIndicatorIOSStatic> {

        /**
         * Whether to show the indicator (true, the default) or hide it (false).
         */
        animating?: boolean

        /**
         * The foreground color of the spinner (default is gray).
         */
        color?: string

        /**
         * Whether the indicator should hide when not animating (true by default).
         */
        hidesWhenStopped?: boolean

        /**
         * Invoked on mount and layout changes with
         */
        onLayout?: ( event: {nativeEvent: { layout: {x: number, y: number , width: number, height: number}}} ) => void

        /**
         * Size of the indicator.
         * Small has a height of 20, large has a height of 36.
         *
         * enum('small', 'large')
         */
        size?: 'small' | 'large'

        style?: ViewStyle

        ref?: Ref<ActivityIndicatorIOSStatic>
    }

    /**
     * @Deprecated since version 0.28.0
     */
    export interface ActivityIndicatorIOSStatic extends React.ComponentClass<ActivityIndicatorIOSProperties> {
    }


    export interface DatePickerIOSProperties extends ViewProperties, React.Props<DatePickerIOSStatic> {

        /**
         * The currently selected date.
         */
        date?: Date


        /**
         * Maximum date.
         * Restricts the range of possible date/time values.
         */
        maximumDate?: Date

        /**
         * Maximum date.
         * Restricts the range of possible date/time values.
         */
        minimumDate?: Date

        /**
         *  enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)
         *  The interval at which minutes can be selected.
         */
        minuteInterval?: number

        /**
         *  enum('date', 'time', 'datetime')
         *  The date picker mode.
         */
        mode?: "date" | "time" | "datetime"

        /**
         * Date change handler.
         * This is called when the user changes the date or time in the UI.
         * The first and only argument is a Date object representing the new date and time.
         */
        onDateChange?: ( newDate: Date ) => void

        /**
         * Timezone offset in minutes.
         * By default, the date picker will use the device's timezone. With this parameter, it is possible to force a certain timezone offset.
         * For instance, to show times in Pacific Standard Time, pass -7 * 60.
         */
        timeZoneOffsetInMinutes?: number

        ref?: Ref<DatePickerIOSStatic>
    }

    export interface DatePickerIOSStatic extends React.ComponentClass<DatePickerIOSProperties> {
    }

    export interface DrawerSlideEvent extends NativeSyntheticEvent<NativeTouchEvent> {
    }

    /**
     * @see DrawerLayoutAndroid.android.js
     */
    export interface DrawerLayoutAndroidProperties extends ViewProperties, React.Props<DrawerLayoutAndroidStatic> {

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
         * enum(DrawerConsts.DrawerPosition.Left, DrawerConsts.DrawerPosition.Right)
         */
        drawerPosition?: any;

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
        keyboardDismissMode?: "none" | "on-drag"

        /**
         * Function called whenever the navigation view has been closed.
         */
        onDrawerClose?: () => void

        /**
         * Function called whenever the navigation view has been opened.
         */
        onDrawerOpen?: () => void

        /**
         * Function called whenever there is an interaction with the navigation view.
         * @param event
         */
        onDrawerSlide?: (event: DrawerSlideEvent) => void

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
         * @param event
         */
        onDrawerStateChanged?: (event:  "Idle" | "Dragging" | "Settling") => void

        /**
         * The navigation view that will be rendered to the side of the
         * screen and can be pulled in.
         */
        renderNavigationView?: () => JSX.Element

        /**
         * Make the drawer take the entire screen and draw the background of
         * the status bar to allow it to open over the status bar. It will
         * only have an effect on API 21+.
         */
        statusBarBackgroundColor?: any

        ref?: Ref<DrawerLayoutAndroidStatic & ViewStatic>
    }

    export interface DrawerLayoutAndroidStatic extends React.ComponentClass<DrawerLayoutAndroidProperties> {

        /**
         * Specifies the side of the screen from which the drawer will slide in.
         */
        positions: {
            Left: number;
            Right: number;
        }

        /**
         * Opens the drawer.
         */
        openDrawer(): void

        /**
         * Closes the drawer.
         */
        closeDrawer(): void
    }


    /**
     * @see PickerIOS.ios.js
     */
    export interface PickerIOSItemProperties extends React.Props<PickerIOSItemStatic> {
        value?: string | number
        label?: string
    }

    /**
     * @see PickerIOS.ios.js
     */
    export interface PickerIOSItemStatic extends React.ComponentClass<PickerIOSItemProperties> {
    }

    /**
     * @see Picker.js
     */
    export interface PickerItemProperties extends React.Props<PickerItemStatic> {
        label: string
        value?: any
        color?: string /* See ColorPropType.js for details */
        testID?: string
    }

    export interface PickerItemStatic extends React.ComponentClass<PickerItemProperties> {
    }

    export interface PickerPropertiesIOS extends ViewProperties, React.Props<PickerStatic> {

        itemStyle?: ViewStyle

        ref?: Ref<PickerStatic & ViewStatic>
    }

    export interface PickerPropertiesAndroid extends ViewProperties, React.Props<PickerStatic> {

        enabled?: boolean

        mode?: "dialog" | "dropdown"

        prompt?: string

        ref?: Ref<PickerStatic & ViewStatic>
    }

    /**
     * @see https://facebook.github.io/react-native/docs/picker.html
     * @see Picker.js
     */
    export interface PickerProperties extends PickerPropertiesIOS, PickerPropertiesAndroid, React.Props<PickerStatic> {

        /**
         * Callback for when an item is selected. This is called with the
         * following parameters:
         * - itemValue: the value prop of the item that was selected
         * - itemPosition: the index of the selected item in this picker
         * @param itemValue
         * @param itemPosition
         */
        onValueChange?: ( itemValue: any, itemPosition: number ) => void

        /**
         * Value matching value of one of the items.
         * Can be a string or an integer.
         */
        selectedValue?: any

        style?: ViewStyle

        /**
         * Used to locate this view in end-to-end tests.
         */
        testId?: string

        ref?: Ref<PickerStatic>
    }

    /**
     * @see https://facebook.github.io/react-native/docs/picker.html
     * @see Picker.js
     */
    export interface PickerStatic extends React.ComponentClass<PickerProperties> {

        Item: PickerItemStatic
    }

    /**
     * @see https://facebook.github.io/react-native/docs/pickerios.html
     * @see PickerIOS.ios.js
     */
    export interface PickerIOSProperties extends React.Props<PickerIOSStatic> {

        itemStyle?: ViewStyle

    }

    /**
     * @see https://facebook.github.io/react-native/docs/pickerios.html
     * @see PickerIOS.ios.js
     */
    export interface PickerIOSStatic extends React.ComponentClass<PickerIOSProperties> {

        Item: PickerIOSItemStatic
    }

    /**
     * @see https://facebook.github.io/react-native/docs/progressbarandroid.html
     * @see ProgressBarAndroid.android.js
     */
    export interface ProgressBarAndroidProperties extends ViewProperties, React.Props<ProgressBarAndroidStatic> {

        style?: ViewStyle

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
        styleAttr?: "Horizontal" | "Normal" | "Small" | "Large" | "Inverse" | "SmallInverse" | "LargeInverse"

        /**
         * If the progress bar will show indeterminate progress.
         * Note that this can only be false if styleAttr is Horizontal.
         */
        indeterminate?: boolean

        /**
         * The progress value (between 0 and 1).
         */
        progress?: number

        /**
         * Color of the progress bar.
         */
        color?: string

        /**
         * Used to locate this view in end-to-end tests.
         */
        testID?: string

        ref?: Ref<ProgressBarAndroidStatic>
    }
    export interface ProgressBarAndroidStatic extends React.ComponentClass<ProgressBarAndroidProperties> {
    }

    /**
     * @see https://facebook.github.io/react-native/docs/progressviewios.html
     * @see ProgressViewIOS.ios.js
     */
    export interface ProgressViewIOSProperties extends ViewProperties, React.Props<ProgressViewIOSStatic> {

        style?: ViewStyle

        /**
         * The progress bar style.
         */
        progressViewStyle?: "default" | "bar"

        /**
         * The progress value (between 0 and 1).
         */
        progress?: number

        /**
         * The tint color of the progress bar itself.
         */
        progressTintColor?: string

        /**
         * The tint color of the progress bar track.
         */
        trackTintColor?: string

        /**
         * A stretchable image to display as the progress bar.
         */
        progressImage?: any

        /**
         * A stretchable image to display behind the progress bar.
         */
        trackImage?: any

        ref?: Ref<ProgressViewIOSStatic>
    }
    export interface ProgressViewIOSStatic extends React.ComponentClass<ProgressViewIOSProperties> {
    }

    export interface RefreshControlPropertiesIOS extends ViewProperties, React.Props<RefreshControlStatic> {

        /**
         * The color of the refresh indicator.
         */
        tintColor?: string

        /**
         * The title displayed under the refresh indicator.
         */
        title?: string

        /**
         * Title color.
         */
        titleColor?: string

        ref?: Ref<RefreshControlStatic & ViewStatic>
    }

    export interface RefreshControlPropertiesAndroid extends ViewProperties, React.Props<RefreshControlStatic> {

        /**
         * The colors (at least one) that will be used to draw the refresh indicator.
         */
        colors?: string[]

        /**
         * Whether the pull to refresh functionality is enabled.
         */
        enabled?: boolean

        /**
         * The background color of the refresh indicator.
         */
        progressBackgroundColor?: string

        /**
         * Size of the refresh indicator, see RefreshControl.SIZE.
         */
        size?: number

        /**
         * Progress view top offset
         * @platform android
         */
        progressViewOffset?: number

        ref?: Ref<RefreshControlStatic & ViewStatic>
    }

    export interface RefreshControlProperties extends RefreshControlPropertiesIOS, RefreshControlPropertiesAndroid, React.Props<RefreshControl> {

        /**
         * Called when the view starts refreshing.
         */
        onRefresh?: () => void

        /**
         * Whether the view should be indicating an active refresh.
         */
        refreshing?: boolean

        ref?: Ref<RefreshControlStatic>
    }

    export interface RefreshControlStatic extends React.ComponentClass<RefreshControlProperties> {
        SIZE: Object // Undocumented
    }

    export interface SliderPropertiesIOS extends ViewProperties, React.Props<SliderStatic> {

        /**
         * Assigns a maximum track image. Only static images are supported.
         * The leftmost pixel of the image will be stretched to fill the track.
         */
        maximumTrackImage?: any

        /**
         * The color used for the track to the right of the button.
         * Overrides the default blue gradient image.
         */
        maximumTrackTintColor?: string

        /**
         * Assigns a minimum track image. Only static images are supported.
         * The rightmost pixel of the image will be stretched to fill the track.
         */
        minimumTrackImage?: string

        /**
         * The color used for the track to the left of the button.
         * Overrides the default blue gradient image.
         */
        minimumTrackTintColor?: string

        /**
         * Sets an image for the thumb. Only static images are supported.
         */
        thumbImage?: any

        /**
         * Assigns a single image for the track. Only static images
         * are supported. The center pixel of the image will be stretched
         * to fill the track.
         */
        trackImage?: any

        ref?: Ref<SliderStatic>
    }

    export interface SliderProperties extends SliderPropertiesIOS, React.Props<SliderStatic> {

        /**
         * If true the user won't be able to move the slider.
         * Default value is false.
         */
        disabled?: boolean

        /**
         * Initial maximum value of the slider. Default value is 1.
         */
        maximumValue?: number

        /**
         * Initial minimum value of the slider. Default value is 0.
         */
        minimumValue?: number

        /**
         * Callback called when the user finishes changing the value (e.g. when the slider is released).
         * @param value
         */
        onSlidingComplete?: (value: number) => void

        /**
         * Callback continuously called while the user is dragging the slider.
         * @param value
         */
        onValueChange?: (value: number) => void

        /**
         * Step value of the slider. The value should be between 0 and (maximumValue - minimumValue). Default value is 0.
         */
        step?: number

        /**
         * Used to style and layout the Slider. See StyleSheet.js and ViewStylePropTypes.js for more info.
         */
        style?: ViewStyle

        /**
         * Used to locate this view in UI automation tests.
         */
        testID?: string

        /**
         * Initial value of the slider. The value should be between minimumValue
         * and maximumValue, which default to 0 and 1 respectively.
         * Default value is 0.
         * This is not a controlled component, you don't need to update
         * the value during dragging.
         */
        value?: number
    }

    export interface SliderStatic extends React.ComponentClass<SliderProperties> {

    }


    /**
     * @see https://facebook.github.io/react-native/docs/sliderios.html
     */
    export interface SliderIOSProperties extends ViewProperties, React.Props<SliderIOSStatic> {

        /**
         * If true the user won't be able to move the slider. Default value is false.
         */
        disabled?: boolean

        /**
         * Initial maximum value of the slider. Default value is 1.
         */
        maximumValue?: number

        /**
         * The color used for the track to the right of the button. Overrides the default blue gradient image.
         */
        maximumTrackTintColor?: string

        /**
         * Initial minimum value of the slider. Default value is 0.
         */
        minimumValue?: number

        minimumTrackImage?: any

        /**
         * The color used for the track to the left of the button. Overrides the default blue gradient image.
         */
        minimumTrackTintColor?: string

        /**
         * Callback called when the user finishes changing the value (e.g. when the slider is released).
         */
        onSlidingComplete?: () => void

        /**
         * Callback continuously called while the user is dragging the slider.
         */
        onValueChange?: ( value: number ) => void

        /**
         * Step value of the slider.
         * The value should be between 0 and (maximumValue - minimumValue).
         * Default value is 0.
         */
        step?: number

        /**
         * Used to style and layout the Slider.
         * @see StyleSheet.js and ViewStylePropTypes.js for more info.
         */
        style?: ViewStyle

        /**
         * Initial value of the slider.
         * The value should be between minimumValue and maximumValue, which default to 0 and 1 respectively.
         * Default value is 0.
         *
         * This is not a controlled component, e.g. if you don't update the value, the component won't be reset to its inital value.
         */
        value?: number

        ref?: Ref<SliderIOSStatic>
    }

    export interface SliderIOSStatic extends React.ComponentClass<SliderIOSProperties> {

    }

    /**
     * //FIXME: no dcumentation, inferred
     * @see SwitchIOS.ios.js
     */
    export interface SwitchIOSStyle extends ViewStyle {
        height?: number
        width?: number
    }


    /**
     * https://facebook.github.io/react-native/docs/switchios.html#props
     */
    export interface SwitchIOSProperties extends React.Props<SwitchIOSStatic> {

        /**
         * If true the user won't be able to toggle the switch. Default value is false.
         */
        disabled?: boolean

        /**
         * Background color when the switch is turned on.
         */
        onTintColor?: string

        /**
         * Callback that is called when the user toggles the switch.
         */
        onValueChange?: ( value: boolean ) => void

        /**
         * Background color for the switch round button.
         */
        thumbTintColor?: string

        /**
         * Background color when the switch is turned off.
         */
        tintColor?: string

        /**
         * The value of the switch, if true the switch will be turned on. Default value is false.
         */
        value?: boolean

        style?: SwitchIOSStyle
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
    export interface SwitchIOSStatic extends React.ComponentClass<SwitchIOSProperties> {

    }


    /**
     * @see ImageResizeMode.js
     */
    export interface ImageResizeModeStatic {
        /**
         * contain - The image will be resized such that it will be completely
         * visible, contained within the frame of the View.
         */
        contain: string
        /**
         * cover - The image will be resized such that the entire area of the view
         * is covered by the image, potentially clipping parts of the image.
         */
        cover: string
        /**
         * stretch - The image will be stretched to fill the entire frame of the
         * view without clipping.  This may change the aspect ratio of the image,
         * distoring it.  Only supported on iOS.
         */
        stretch: string
    }

    /**
     * Image style
     * @see https://facebook.github.io/react-native/docs/image.html#style
     */
    export interface ImageStyle extends FlexStyle, TransformsStyle {
        resizeMode?: string //Object.keys(ImageResizeMode)
        backfaceVisibility?: "visible" | "hidden"
        borderBottomLeftRadius?: number
        borderBottomRightRadius?: number
        backgroundColor?: string
        borderColor?: string
        borderWidth?: number
        borderRadius?: number
        borderTopLeftRadius?: number
        borderTopRightRadius?: number
        overflow?: "visible" | "hidden"
        overlayColor?: string
        tintColor?: string
        opacity?: number
    }

    export interface ImagePropertiesIOS {
        /**
         * The text that's read by the screen reader when the user interacts with the image.
         */
        accessibilityLabel?: string;

        /**
         * When true, indicates the image is an accessibility element.
         */
        accessible?: boolean;

        /**
         * When the image is resized, the corners of the size specified by capInsets will stay a fixed size,
         * but the center content and borders of the image will be stretched.
         * This is useful for creating resizable rounded buttons, shadows, and other resizable assets.
         * More info on Apple documentation
         */
        capInsets?: Insets

        /**
         * A static image to display while downloading the final image off the network.
         */
        defaultSource?: {uri: string} | number

        /**
         * Invoked on load error with {nativeEvent: {error}}
         */
        onError?: ( error: {nativeEvent: any} ) => void

        /**
         * Invoked on download progress with {nativeEvent: {loaded, total}}
         */
        onProgress?: ()=> void
    }

    /**
     * @see https://facebook.github.io/react-native/docs/image.html
     */
    export interface ImageProperties extends ImagePropertiesIOS, React.Props<Image> {
        /**
         * onLayout function
         *
         * Invoked on mount and layout changes with
         *
         * {nativeEvent: { layout: {x, y, width, height}}}.
         */
        onLayout?: ( event: LayoutChangeEvent ) => void;

        /**
         * Invoked when load completes successfully
         */
        onLoad?: () => void

        /**
         * Invoked when load either succeeds or fails
         */
        onLoadEnd?: () => void

        /**
         * Invoked on load start
         */
        onLoadStart?: () => void


        /**
         * Determines how to resize the image when the frame doesn't match the raw image dimensions.
         *
         * enum('cover', 'contain', 'stretch')
         */
        resizeMode?: "cover" | "contain" | "stretch"

        /**
         * uri is a string representing the resource identifier for the image,
         * which could be an http address, a local file path,
         * or the name of a static image resource (which should be wrapped in the require('image!name') function).
         */
        source: {uri: string} | string;

        /**
         *
         * Style
         */
        style?:  ImageStyle;

        /**
         * A unique identifier for this element to be used in UI Automation testing scripts.
         */
        testID?: string;

    }

    export interface ImageStatic extends React.ComponentClass<ImageProperties> {
        uri: string;
        resizeMode: ImageResizeModeStatic
        getSize(uri: string, success: (width: number, height: number) => void, failure: (error: any) => void): any
        prefetch(url: string): any
    }

    /**
     * @see https://facebook.github.io/react-native/docs/listview.html#props
     */
    export interface ListViewProperties extends ScrollViewProperties, React.Props<ListViewStatic> {

        dataSource?: ListViewDataSource

        /**
         * Flag indicating whether empty section headers should be rendered.
         * In the future release empty section headers will be rendered by
         * default, and the flag will be deprecated. If empty sections are not
         * desired to be rendered their indices should be excluded from
         * sectionID object.
         */
        enableEmptySections?: boolean

        /**
         * How many rows to render on initial component mount.  Use this to make
         * it so that the first screen worth of data apears at one time instead of
         * over the course of multiple frames.
         */
        initialListSize?: number

        /**
         * (visibleRows, changedRows) => void
         *
         * Called when the set of visible rows changes.  `visibleRows` maps
         * { sectionID: { rowID: true }} for all the visible rows, and
         * `changedRows` maps { sectionID: { rowID: true | false }} for the rows
         * that have changed their visibility, with true indicating visible, and
         * false indicating the view has moved out of view.
         */
        onChangeVisibleRows?: ( visibleRows: Array<{[sectionId: string]: {[rowID: string]: boolean}}>, changedRows: Array<{[sectionId: string]: {[rowID: string]: boolean}}> ) => void

        /**
         * Called when all rows have been rendered and the list has been scrolled
         * to within onEndReachedThreshold of the bottom.  The native scroll
         * event is provided.
         */
        onEndReached?: () => void

        /**
         * Threshold in pixels for onEndReached.
         */
        onEndReachedThreshold?: number

        /**
         * Number of rows to render per event loop.
         */
        pageSize?: number

        /**
         * An experimental performance optimization for improving scroll perf of
         * large lists, used in conjunction with overflow: 'hidden' on the row
         * containers.  Use at your own risk.
         */
        removeClippedSubviews?: boolean

        /**
         * () => renderable
         *
         * The header and footer are always rendered (if these props are provided)
         * on every render pass.  If they are expensive to re-render, wrap them
         * in StaticContainer or other mechanism as appropriate.  Footer is always
         * at the bottom of the list, and header at the top, on every render pass.
         */
        renderFooter?: () => React.ReactElement<any>

        /**
         * () => renderable
         *
         * The header and footer are always rendered (if these props are provided)
         * on every render pass.  If they are expensive to re-render, wrap them
         * in StaticContainer or other mechanism as appropriate.  Footer is always
         * at the bottom of the list, and header at the top, on every render pass.
         */
        renderHeader?: () => React.ReactElement<any>

        /**
         * (rowData, sectionID, rowID) => renderable
         * Takes a data entry from the data source and its ids and should return
         * a renderable component to be rendered as the row.  By default the data
         * is exactly what was put into the data source, but it's also possible to
         * provide custom extractors.
         */
        renderRow?: ( rowData: any, sectionID: string | number, rowID: string | number, highlightRow?: boolean ) => React.ReactElement<any>


        /**
         * A function that returns the scrollable component in which the list rows are rendered.
         * Defaults to returning a ScrollView with the given props.
         */
        renderScrollComponent?: ( props: ScrollViewProperties ) => React.ReactElement<ScrollViewProperties>

        /**
         * (sectionData, sectionID) => renderable
         *
         * If provided, a sticky header is rendered for this section.  The sticky
         * behavior means that it will scroll with the content at the top of the
         * section until it reaches the top of the screen, at which point it will
         * stick to the top until it is pushed off the screen by the next section
         * header.
         */
        renderSectionHeader?: ( sectionData: any, sectionId: string | number ) => React.ReactElement<any>


        /**
         * (sectionID, rowID, adjacentRowHighlighted) => renderable
         * If provided, a renderable component to be rendered as the separator below each row
         * but not the last row if there is a section header below.
         * Take a sectionID and rowID of the row above and whether its adjacent row is highlighted.
         */
        renderSeparator?: ( sectionID: string | number, rowID: string | number, adjacentRowHighlighted?: boolean ) => React.ReactElement<any>

        /**
         * How early to start rendering rows before they come on screen, in
         * pixels.
         */
        scrollRenderAheadDistance?: number

        ref?: Ref<ListViewStatic & ScrollViewStatic & ViewStatic>
    }

    export interface ListViewStatic extends React.ComponentClass<ListViewProperties> {
        DataSource: ListViewDataSource;
    }


    export interface MapViewAnnotation {
        latitude?: number
        longitude?: number
        animateDrop?: boolean
        title?: string
        subtitle?: string
        hasLeftCallout?: boolean
        hasRightCallout?: boolean
        onLeftCalloutPress?: () => void
        onRightCalloutPress?: () => void
        id?: string
    }

    export interface MapViewRegion {
        latitude: number
        longitude: number
        latitudeDelta?: number
        longitudeDelta?: number
    }

    export interface MapViewOverlay {
        coordinates: ({latitude: number, longitude: number})[]
        lineWidth?: number
        strokeColor?: Object
        fillColor?: Object
        id?: string
    }

    export interface MapViewPropertiesIOS {

        /**
         * If false points of interest won't be displayed on the map.
         * Default value is true.
         */
        showsPointsOfInterest?: boolean

        /**
         * Map annotations with title/subtitle.
         */
        annotations?: MapViewAnnotation[]

        /**
         * If true the map will follow the user's location whenever it changes. Note that this has no effect unless showsUserLocation is enabled. Default value is true.
         */
        followUserLocation?: boolean

        /**
         * Insets for the map's legal label, originally at bottom left of the map. See EdgeInsetsPropType.js for more information.
         */
        legalLabelInsets?: Insets

        /**
         * The map type to be displayed.
         *     standard: standard road map (default)
         *     satellite: satellite view
         *     hybrid: satellite view with roads and points of interest overlayed
         *
         * enum('standard', 'satellite', 'hybrid')
         */
        mapType?: string

        /**
         * Maximum size of area that can be displayed.
         */
        maxDelta?: number

        /**
         * Minimum size of area that can be displayed.
         */
        minDelta?: number

        /**
         * Map overlays
         */
        overlays: MapViewOverlay[]

        /**
         * If false compass won't be displayed on the map.
         * Default value is true.
         */
        showsCompass?: boolean
    }

    export interface MapViewPropertiesAndroid {
        active?: boolean
    }

    export interface MapViewProperties extends MapViewPropertiesIOS, MapViewPropertiesAndroid, Touchable, ViewProperties, React.Props<MapViewStatic> {



        /**
         * Callback that is called once, when the user taps an annotation.
         */
        onAnnotationPress?: () => void

        /**
         * Callback that is called continuously when the user is dragging the map.
         */
        onRegionChange?: ( region: MapViewRegion ) => void

        /**
         * Callback that is called once, when the user is done moving the map.
         */
        onRegionChangeComplete?: ( region: MapViewRegion ) => void

        /**
         * When this property is set to true and a valid camera is associated with the map,
         * the camera’s pitch angle is used to tilt the plane of the map.
         *
         * When this property is set to false, the camera’s pitch angle is ignored and
         * the map is always displayed as if the user is looking straight down onto it.
         */
        pitchEnabled?: boolean

        /**
         * The region to be displayed by the map.
         * The region is defined by the center coordinates and the span of coordinates to display.
         */
        region?: MapViewRegion

        /**
         * When this property is set to true and a valid camera is associated with the map,
         * the camera’s heading angle is used to rotate the plane of the map around its center point.
         *
         * When this property is set to false, the camera’s heading angle is ignored and the map is always oriented
         * so that true north is situated at the top of the map view
         */
        rotateEnabled?: boolean

        /**
         * If false the user won't be able to change the map region being displayed.
         * Default value is true.
         */
        scrollEnabled?: boolean

        /**
         * If true the app will ask for the user's location and focus on it.
         * Default value is false.
         *
         * NOTE: You need to add NSLocationWhenInUseUsageDescription key in Info.plist to enable geolocation,
         * otherwise it is going to fail silently!
         */
        showsUserLocation?: boolean

        /**
         * Used to style and layout the MapView.
         * See StyleSheet.js and ViewStylePropTypes.js for more info.
         */
        style?: ViewStyle

        /**
         * If false the user won't be able to pinch/zoom the map.
         * Default value is true.
         */
        zoomEnabled?: boolean

        ref?: Ref<MapViewStatic & ViewStatic>
    }

    /**
     * @see https://facebook.github.io/react-native/docs/mapview.html#content
     */
    export interface MapViewStatic extends React.ComponentClass<MapViewProperties> {
    }

    export interface ModalProperties extends React.Props<ModalStatic> {

        // Only `animated` is documented. The JS code says `animated` is
        // deprecated and `animationType` is preferred.
        animated?: boolean
        animationType?: "none" | "slide" | "fade"
        transparent?: boolean
        visible?: boolean
        onRequestClose?: () => void
        onShow?: (event: NativeSyntheticEvent<any>) => void

    }

    export interface ModalStatic extends React.ComponentClass<ModalProperties> {

    }

    export interface TouchableWithoutFeedbackAndroidProperties {

        /**
         * Indicates to accessibility services to treat UI component like a native one.
         * Works for Android only.
         *
         * @enum('none', 'button', 'radiobutton_checked', 'radiobutton_unchecked' )
         */
        accessibilityComponentType?: string
    }

    export interface TouchableWithoutFeedbackIOSProperties {

        /**
         * Provides additional traits to screen reader.
         * By default no traits are provided unless specified otherwise in element
         *
         * @enum('none', 'button', 'link', 'header', 'search', 'image', 'selected', 'plays', 'key', 'text','summary', 'disabled', 'frequentUpdates', 'startsMedia', 'adjustable', 'allowsDirectInteraction', 'pageTurn')
         */
        accessibilityTraits?: string | string[];

    }

    /**
     * @see https://facebook.github.io/react-native/docs/touchablewithoutfeedback.html#props
     */
    export interface TouchableWithoutFeedbackProperties extends TouchableWithoutFeedbackAndroidProperties, TouchableWithoutFeedbackIOSProperties {


        /**
         * Called when the touch is released, but not if cancelled (e.g. by a scroll that steals the responder lock).
         */
        accessible?: boolean

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
        disabled?: boolean

        /**
         * This defines how far your touch can start away from the button.
         * This is added to pressRetentionOffset when moving off of the button.
         * NOTE The touch area never extends past the parent view bounds and
         * the Z-index of sibling views always takes precedence if a touch hits
         * two overlapping views.
         */
        hitSlop?: {top: number, left: number, bottom: number, right: number}

        /**
         * Invoked on mount and layout changes with
         * {nativeEvent: {layout: {x, y, width, height}}}
         */
        onLayout?: ( event: LayoutChangeEvent ) => void

        onLongPress?: () => void;

        /**
         * Called when the touch is released,
         * but not if cancelled (e.g. by a scroll that steals the responder lock).
         */
        onPress?: () => void;

        onPressIn?: () => void;

        onPressOut?: () => void;

        /**
         * //FIXME: not in doc but available in examples
         */
        style?: ViewStyle

        /**
         * When the scroll view is disabled, this defines how far your
         * touch may move off of the button, before deactivating the button.
         * Once deactivated, try moving it back and you'll see that the button
         * is once again reactivated! Move it back and forth several times
         * while the scroll view is disabled. Ensure you pass in a constant
         * to reduce memory allocations.
         */
        pressRetentionOffset?: {top: number, left: number, bottom: number, right: number}
    }


    export interface TouchableWithoutFeedbackProps extends TouchableWithoutFeedbackProperties, React.Props<TouchableWithoutFeedbackStatic> {

    }

    /**
     * Do not use unless you have a very good reason.
     * All the elements that respond to press should have a visual feedback when touched.
     * This is one of the primary reason a "web" app doesn't feel "native".
     *
     * @see https://facebook.github.io/react-native/docs/touchablewithoutfeedback.html
     */
    export interface TouchableWithoutFeedbackStatic extends React.ComponentClass<TouchableWithoutFeedbackProps> {

    }


    /**
     * @see https://facebook.github.io/react-native/docs/touchablehighlight.html#props
     */
    export interface TouchableHighlightProperties extends TouchableWithoutFeedbackProperties, React.Props<TouchableHighlightStatic> {

        /**
         * Determines what the opacity of the wrapped view should be when touch is active.
         */
        activeOpacity?: number

        /**
         *
         * Called immediately after the underlay is hidden
         */
        onHideUnderlay?: () => void

        /**
         * Called immediately after the underlay is shown
         */
        onShowUnderlay?: () => void

        /**
         * @see https://facebook.github.io/react-native/docs/view.html#style
         */
        style?: ViewStyle


        /**
         * The color of the underlay that will show through when the touch is active.
         */
        underlayColor?: string
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
    export interface TouchableHighlightStatic extends React.ComponentClass<TouchableHighlightProperties> {
    }


    /**
     * @see https://facebook.github.io/react-native/docs/touchableopacity.html#props
     */
    export interface TouchableOpacityProperties extends TouchableWithoutFeedbackProperties, React.Props<TouchableOpacityStatic> {
        /**
         * Determines what the opacity of the wrapped view should be when touch is active.
         * Defaults to 0.2
         */
        activeOpacity?: number
    }

    /**
     * A wrapper for making views respond properly to touches.
     * On press down, the opacity of the wrapped view is decreased, dimming it.
     * This is done without actually changing the view hierarchy,
     * and in general is easy to add to an app without weird side-effects.
     *
     * @see https://facebook.github.io/react-native/docs/touchableopacity.html
     */
    export interface TouchableOpacityStatic extends React.ComponentClass<TouchableOpacityProperties> {
        /**
         * Determines what the opacity of the wrapped view should be when touch is active.
         */
        setOpacityTo: (value: number) => void
    }


    /**
     * @see https://facebook.github.io/react-native/docs/touchableopacity.html#props
     */
    export interface TouchableNativeFeedbackProperties extends TouchableWithoutFeedbackProperties, React.Props<TouchableNativeFeedbackStatic> {
        /**
         * Determines the type of background drawable that's going to be used to display feedback.
         * It takes an object with type property and extra data depending on the type.
         * It's recommended to use one of the following static methods to generate that dictionary:
         *      1) TouchableNativeFeedback.SelectableBackground() - will create object that represents android theme's default background for selectable elements (?android:attr/selectableItemBackground)
         *      2) TouchableNativeFeedback.SelectableBackgroundBorderless() - will create object that represent android theme's default background for borderless selectable elements (?android:attr/selectableItemBackgroundBorderless). Available on android API level 21+
         *      3) TouchableNativeFeedback.Ripple(color, borderless) - will create object that represents ripple drawable with specified color (as a string). If property borderless evaluates to true the ripple will render outside of the view bounds (see native actionbar buttons as an example of that behavior). This background type is available on Android API level 21+
         */
        background?: any
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
    export interface TouchableNativeFeedbackStatic extends React.ComponentClass<TouchableNativeFeedbackProperties> {
        SelectableBackground: () => TouchableNativeFeedbackStatic
        SelectableBackgroundBorderless: () => TouchableNativeFeedbackStatic
        Ripple: ( color: string, borderless?: boolean ) => TouchableNativeFeedbackStatic
    }


    export interface LeftToRightGesture {
        //TODO:
    }

    export interface AnimationInterpolator {
        //TODO:
    }

    // see /NavigatorSceneConfigs.js
    export interface SceneConfig {
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
    export interface SceneConfigs {
        PushFromRight: SceneConfig;
        FloatFromRight: SceneConfig;
        FloatFromLeft: SceneConfig;
        FloatFromBottom: SceneConfig;
        FloatFromBottomAndroid: SceneConfig;
        FadeAndroid: SceneConfig;
        HorizontalSwipeJump: SceneConfig;
        HorizontalSwipeJumpFromRight: SceneConfig;
        VerticalUpSwipeJump: SceneConfig;
        VerticalDownSwipeJump: SceneConfig;
    }

    export interface Route {
        component?: React.ComponentClass<ViewProperties>
        id?: string
        title?: string
        passProps?: Object;

        //anything else
        [key: string]: any

        //Commonly found properties
        backButtonTitle?: string
        content?: string
        message?: string;
        index?: number
        onRightButtonPress?: () => void
        rightButtonTitle?: string
        sceneConfig?: SceneConfig
        wrapperStyle?: any
    }


    /**
     * @see https://facebook.github.io/react-native/docs/navigator.html#content
     */
    export interface NavigatorProperties extends React.Props<Navigator> {
        /**
         * Optional function that allows configuration about scene animations and gestures.
         * Will be invoked with `route` and `routeStack` parameters, where `route`
         * corresponds to the current scene being rendered by the `Navigator` and
         * `routeStack` is the set of currently mounted routes that the navigator
         *  could transition to. The function should return a scene configuration object.
         * @param route
         * @param routeStack
         */
        configureScene?: ( route: Route, routeStack: Route[] ) => SceneConfig
        /**
         * Specify a route to start on.
         * A route is an object that the navigator will use to identify each scene to render.
         * initialRoute must be a route in the initialRouteStack if both props are provided.
         * The initialRoute will default to the last item in the initialRouteStack.
         */
        initialRoute?: Route
        /**
         * Provide a set of routes to initially mount.
         * Required if no initialRoute is provided.
         * Otherwise, it will default to an array containing only the initialRoute
         */
        initialRouteStack?: Route[]

        /**
         * Optionally provide a navigation bar that persists across scene transitions
         */
        navigationBar?: React.ReactElement<NavigatorStatic.NavigationBarProperties>

        /**
         * Optionally provide the navigator object from a parent Navigator
         */
        navigator?: Navigator

        /**
         * @deprecated Use navigationContext.addListener('willfocus', callback) instead.
         */
        onDidFocus?: Function

        /**
         * @deprecated Use navigationContext.addListener('willfocus', callback) instead.
         */
        onWillFocus?: Function

        /**
         * Required function which renders the scene for a given route.
         * Will be invoked with the route and the navigator object
         * @param route
         * @param navigator
         */
        renderScene?: ( route: Route, navigator: Navigator ) => React.ReactElement<ViewProperties>

        /**
         * Styles to apply to the container of each scene
         */
        sceneStyle?: ViewStyle

        /**
         * //FIXME: not found in doc but found in examples
         */
        debugOverlay?: boolean

    }

   /**
   * Class that contains the info and methods for app navigation.
   */
    export interface NavigationContext {
        parent: NavigationContext;
        top: NavigationContext;
        currentRoute: any;
        appendChild(childContext: NavigationContext): void;
        addListener(eventType: string, listener: () => void, useCapture?: boolean): NativeEventSubscription;
        emit(eventType: string, data: any, didEmitCallback?: () => void): void;
        dispose(): void;
    }

    /**
     * Use Navigator to transition between different scenes in your app.
     * To accomplish this, provide route objects to the navigator to identify each scene,
     * and also a renderScene function that the navigator can use to render the scene for a given route.
     *
     * To change the animation or gesture properties of the scene, provide a configureScene prop to get the config object for a given route.
     * See Navigator.SceneConfigs for default animations and more info on scene config options.
     * @see https://facebook.github.io/react-native/docs/navigator.html
     */
    export interface NavigatorStatic extends React.ComponentClass<NavigatorProperties> {
        SceneConfigs: SceneConfigs;
        NavigationBar: NavigatorStatic.NavigationBarStatic;
        BreadcrumbNavigationBar: NavigatorStatic.BreadcrumbNavigationBarStatic;

	navigationContext: NavigationContext;

        getContext( self: any ): NavigatorStatic;

        /**
         * returns the current list of routes
         */
        getCurrentRoutes(): Route[];

        /**
         * Jump backward without unmounting the current scen
         */
        jumpBack(): void;

        /**
         * Jump forward to the next scene in the route stack
         */
        jumpForward(): void;

        /**
         * Transition to an existing scene without unmounting
         */
        jumpTo( route: Route ): void;

        /**
         * Navigate forward to a new scene, squashing any scenes that you could jumpForward to
         */
        push( route: Route ): void;

        /**
         * Transition back and unmount the current scene
         */
        pop(): void;

        /**
         * Replace the current scene with a new route
         */
        replace( route: Route ): void;

        /**
         * Replace a scene as specified by an index
         */
        replaceAtIndex( route: Route, index: number ): void;

        /**
         *  Replace the previous scene
         */
        replacePrevious( route: Route ): void;

        /**
         * Reset every scene with an array of routes
         */
        immediatelyResetRouteStack( routes: Route[] ): void;

        /**
         * Pop to a particular scene, as specified by its route. All scenes after it will be unmounted
         */
        popToRoute( route: Route ): void;

        /**
         * Pop to the first scene in the stack, unmounting every other scene
         */
        popToTop(): void;

        /**
         *  Replace the previous scene and pop to it.
         */
        replacePreviousAndPop( route: Route ): void;

        /**
         * Navigate to a new scene and reset route stack.
         */
        resetTo( route: Route ): void;

    }

    namespace NavigatorStatic {


        export interface NavState {
            routeStack: Route[]
            idStack: number[]
            presentedIndex: number
        }

        export interface NavigationBarStyle {
            //TODO @see NavigationBarStyle.ios.js
        }


        export interface NavigationBarRouteMapper {
            Title: ( route: Route, nav: Navigator, index: number, navState: NavState ) => React.ReactElement<any>;
            LeftButton: ( route: Route, nav: Navigator, index: number, navState: NavState )=> React.ReactElement<any>;
            RightButton: ( route: Route, nav: Navigator, index: number, navState: NavState )=> React.ReactElement<any>;
        }

        /**
         * @see NavigatorNavigationBar.js
         */
        export interface NavigationBarProperties extends React.Props<NavigationBarStatic> {
            navigator?: Navigator
            routeMapper?: NavigationBarRouteMapper
            navState?: NavState
            style?: ViewStyle
        }

        export interface NavigationBarStatic extends React.ComponentClass<NavigationBarProperties> {
            Styles: NavigationBarStyle

        }

        export type NavigationBar = NavigationBarStatic
        export var NavigationBar: NavigationBarStatic


        export interface BreadcrumbNavigationBarStyle {
            //TODO &see NavigatorBreadcrumbNavigationBar.js
        }

        export interface BreadcrumbNavigationBarRouteMapper {
            rightContentForRoute: ( route: Route, navigator: Navigator ) => React.ReactElement<any>
            titleContentForRoute: ( route: Route, navigator: Navigator ) => React.ReactElement<any>
            iconForRoute: ( route: Route, navigator: Navigator ) => React.ReactElement<any>
            //in samples...
            separatorForRoute: ( route: Route, navigator: Navigator ) => React.ReactElement<any>
        }

        /**
         * @see NavigatorNavigationBar.js
         */
        export interface BreadcrumbNavigationBarProperties extends React.Props<BreadcrumbNavigationBarStatic> {
            navigator?: Navigator
            routeMapper?: BreadcrumbNavigationBarRouteMapper
            navState?: NavState
            style?: ViewStyle
        }

        export interface BreadcrumbNavigationBarStatic extends React.ComponentClass<BreadcrumbNavigationBarProperties> {
            Styles: BreadcrumbNavigationBarStyle
        }

        export type BreadcrumbNavigationBar = BreadcrumbNavigationBarStatic
        var BreadcrumbNavigationBar: BreadcrumbNavigationBarStatic

    }

    export interface StyleSheetStatic extends React.ComponentClass<StyleSheetProperties> {

        /**
         * Creates a StyleSheet style reference from the given object.
         */
        create<T>( styles: T ): T;

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
        flatten(style: Object): Object

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
        hairlineWidth: number

        /**
         * A very common pattern is to create overlays with position absolute and zero positioning,
         * so `absoluteFill` can be used for convenience and to reduce duplication of these repeated
         * styles.
         */
        absoluteFill: number


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
        absoluteFillObject: {
            position: string
            left: number
            right: number
            top: number
            bottom: number
        }
    }

    /**
     * //FIXME: Could not find docs. Inferred from examples and jscode : ListViewDataSource.js
     */
    export interface DataSourceAssetCallback {
        rowHasChanged?: ( r1: any, r2: any ) => boolean
        sectionHeaderHasChanged?: ( h1: any, h2: any ) => boolean
        getRowData?: <T>( dataBlob: any, sectionID: number | string, rowID: number | string ) => T
        getSectionHeaderData?: <T>( dataBlob: any, sectionID: number | string ) => T
    }

    /**
     * //FIXME: Could not find docs. Inferred from examples and js code: ListViewDataSource.js
     */
    export interface ListViewDataSource {
        new( onAsset: DataSourceAssetCallback ): ListViewDataSource;
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
        cloneWithRows<T>( dataBlob: Array<any> | {[key: string ]: any}, rowIdentities?: Array<string | number> ): ListViewDataSource

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
        cloneWithRowsAndSections( dataBlob: Array<any> | {[key: string]: any}, sectionIdentities?: Array<string | number>, rowIdentities?: Array<Array<string | number>> ): ListViewDataSource

        getRowCount(): number

        /**
         * Gets the data required to render the row.
         */
        getRowData( sectionIndex: number, rowIndex: number ): any

        /**
         * Gets the rowID at index provided if the dataSource arrays were flattened,
         * or null of out of range indexes.
         */
        getRowIDForFlatIndex( index: number ): string

        /**
         * Gets the sectionID at index provided if the dataSource arrays were flattened,
         * or null for out of range indexes.
         */
        getSectionIDForFlatIndex( index: number ): string

        /**
         * Returns an array containing the number of rows in each section
         */
        getSectionLengths(): Array<number>

        /**
         * Returns if the section header is dirtied and needs to be rerendered
         */
        sectionHeaderShouldUpdate( sectionIndex: number ): boolean

        /**
         * Gets the data required to render the section header
         */
        getSectionHeaderData( sectionIndex: number ): any
    }


    /**
     * @see https://facebook.github.io/react-native/docs/tabbarios-item.html#props
     */
    export interface TabBarItemProperties extends ViewProperties, React.Props<TabBarItemStatic> {

        /**
         * Little red bubble that sits at the top right of the icon.
         */
        badge?:  string | number

        /**
         * A custom icon for the tab. It is ignored when a system icon is defined.
         */
        icon?: {uri: string} | string

        /**
         * Callback when this tab is being selected,
         * you should change the state of your component to set selected={true}.
         */
        onPress?: () => void

        /**
         * It specifies whether the children are visible or not. If you see a blank content, you probably forgot to add a selected one.
         */
        selected?: boolean

        /**
         * A custom icon when the tab is selected.
         * It is ignored when a system icon is defined. If left empty, the icon will be tinted in blue.
         */
        selectedIcon?: {uri: string} | string;

        /**
         * React style object.
         */
        style?: ViewStyle

        /**
         * Items comes with a few predefined system icons.
         * Note that if you are using them, the title and selectedIcon will be overriden with the system ones.
         *
         *  enum('bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated')
         */
        systemIcon: "bookmarks" | "contacts" | "downloads" | "favorites" | "featured" | "history" | "more" | "most-recent" | "most-viewed" | "recents" | "search" | "top-rated"

        /**
         * Text that appears under the icon. It is ignored when a system icon is defined.
         */
        title?: string

        ref?: Ref<TabBarItemStatic & ViewStatic>
    }

    export interface TabBarItemStatic extends React.ComponentClass<TabBarItemProperties> {
    }

    /**
     * @see https://facebook.github.io/react-native/docs/tabbarios.html#props
     */
    export interface TabBarIOSProperties extends ViewProperties, React.Props<TabBarIOSStatic> {

        /**
         * Background color of the tab bar
         */
        barTintColor?: string

        style?: ViewStyle

        /**
         * Color of the currently selected tab icon
         */
        tintColor?: string

        /**
         * A Boolean value that indicates whether the tab bar is translucent
         */
        translucent?: boolean

        /**
         * Color of text on unselected tabs
         */
        unselectedTintColor?: string

        ref?: Ref<TabBarIOSStatic & ViewStatic>
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
        getFontScale(): number

        /**
         * Converts a layout size (dp) to pixel size (px).
         * Guaranteed to return an integer number.
         * @param layoutSize
         */
        getPixelSizeForLayoutSize(layoutSize: number): number

        /**
         * Rounds a layout size (dp) to the nearest layout size that
         * corresponds to an integer number of pixels. For example,
         * on a device with a PixelRatio of 3,
         * PixelRatio.roundToNearestPixel(8.4) = 8.33,
         * which corresponds to exactly (8.33 * 3) = 25 pixels.
         * @param layoutSize
         */
        roundToNearestPixel(layoutSize: number): number

        /**
         * No-op for iOS, but used on the web. Should not be documented. [sic]
         */
        startDetecting(): void
    }

    /**
     * @see https://facebook.github.io/react-native/docs/platform-specific-code.html#content
     */

    export type PlatformOSType = 'ios' | 'android'

    export interface PlatformStatic {
        OS: PlatformOSType,

        /**
         * @see https://facebook.github.io/react-native/docs/platform-specific-code.html#content
         */
        select<T>( specifics: { ios?: T, android?: T} ): T;
    }

    export interface DeviceEventSubscriptionStatic {
        remove(): void;
    }

    export interface DeviceEventEmitterStatic {
        addListener<T>( type: string, onReceived: ( data: T ) => void ): DeviceEventSubscription;

        /**
         * Removes the given listener for event of specific type.
         *
         * @param {string} eventType - Name of the event to emit
         * @param {function} listener - Function to invoke when the specified event is
         *   emitted
         *
         * @example
         *   emitter.removeListener('someEvent', function(message) {
         *     console.log(message);
         *   }); // removes the listener if already registered
         *
         */
        removeListener( eventType: String, listener: Function): void
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
     * @param {string} dim Name of dimension as defined when calling `set`.
     * @returns {Object?} Value for the dimension.
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
         @param {string} dim Name of dimension as defined when calling set.
         @returns {Object?} Value for the dimension.
         */
        get( dim: "window" | "screen" ): ScaledSize;

        /**
         * This should only be called from native code by sending the didUpdateDimensions event.
         * @param {object} dims Simple string-keyed object of dimensions to set
         */
        set( dims: {[key: string]: any}[] ): void
    }

    export type PromiseTask = {
        gen: () => Promise<any>
    }

    export type Handle = number

    export interface InteractionManagerStatic {

        /**
         * Schedule a function to run after all interactions have completed.
         * Returns a cancellable
         * @param fn
         */
        runAfterInteractions( fn: () => void | PromiseTask):
          {then: Function, done: Function, cancel: Function}

        /**
         * Notify manager that an interaction has started.
         */
        createInteractionHandle(): Handle

        /**
         * Notify manager that an interaction has completed.
         */
        clearInteractionHandle(handle: Handle): void

        /**
         * A positive number will use setTimeout to schedule any tasks after
         * the eventLoopRunningTime hits the deadline value, otherwise all
         * tasks will be executed in one setImmediate batch (default).
         */
        setDeadline(deadline: number): void
    }


    export interface ScrollViewStyle extends FlexStyle, TransformsStyle {

        backfaceVisibility?: "visible" | "hidden"
        backgroundColor?: string
        borderColor?: string
        borderTopColor?: string
        borderRightColor?: string
        borderBottomColor?: string
        borderLeftColor?: string
        borderRadius?: number
        borderTopLeftRadius?: number
        borderTopRightRadius?: number
        borderBottomLeftRadius?: number
        borderBottomRightRadius?: number
        borderStyle?: "solid" | "dotted" | "dashed"
        borderWidth?: number
        borderTopWidth?: number
        borderRightWidth?: number
        borderBottomWidth?: number
        borderLeftWidth?: number
        opacity?: number
        overflow?: "visible" | "hidden"
        shadowColor?: string
        shadowOffset?: {width: number; height: number}
        shadowOpacity?: number
        shadowRadius?: number
        elevation?: number
    }


    export interface ScrollViewPropertiesIOS {

        /**
         * When true the scroll view bounces horizontally when it reaches the end
         * even if the content is smaller than the scroll view itself. The default
         * value is true when `horizontal={true}` and false otherwise.
         */
        alwaysBounceHorizontal?: boolean
        /**
         * When true the scroll view bounces vertically when it reaches the end
         * even if the content is smaller than the scroll view itself. The default
         * value is false when `horizontal={true}` and true otherwise.
         */
        alwaysBounceVertical?: boolean

        /**
         * Controls whether iOS should automatically adjust the content inset for scroll views that are placed behind a navigation bar or tab bar/ toolbar.
         * The default value is true.
         */
        automaticallyAdjustContentInsets?: boolean // true

        /**
         * When true the scroll view bounces when it reaches the end of the
         * content if the content is larger then the scroll view along the axis of
         * the scroll direction. When false it disables all bouncing even if
         * the `alwaysBounce*` props are true. The default value is true.
         */
        bounces?: boolean
        /**
         * When true gestures can drive zoom past min/max and the zoom will animate
         * to the min/max value at gesture end otherwise the zoom will not exceed
         * the limits.
         */
        bouncesZoom?: boolean

        /**
         * When false once tracking starts won't try to drag if the touch moves.
         * The default value is true.
         */
        canCancelContentTouches?: boolean

        /**
         * When true the scroll view automatically centers the content when the
         * content is smaller than the scroll view bounds; when the content is
         * larger than the scroll view this property has no effect. The default
         * value is false.
         */
        centerContent?: boolean

        /**
         * The amount by which the scroll view content is inset from the edges of the scroll view.
         * Defaults to {0, 0, 0, 0}.
         */
        contentInset?: Insets // zeros

        /**
         * Used to manually set the starting scroll offset.
         * The default value is {x: 0, y: 0}
         */
        contentOffset?: PointProperties // zeros

        /**
         * A floating-point number that determines how quickly the scroll view
         * decelerates after the user lifts their finger. Reasonable choices include
         *   - Normal: 0.998 (the default)
         *   - Fast: 0.9
         */
        decelerationRate?: "fast" | "normal" | number

        /**
         * When true the ScrollView will try to lock to only vertical or horizontal
         * scrolling while dragging.  The default value is false.
         */
        directionalLockEnabled?: boolean

        /**
         * The style of the scroll indicators.
         * - default (the default), same as black.
         * - black, scroll indicator is black. This style is good against
         *   a white content background.
         * - white, scroll indicator is white. This style is good against
         *   a black content background.
         */
        indicatorStyle?: "default" | "black" | "white"

        /**
         * The maximum allowed zoom scale. The default value is 1.0.
         */
        maximumZoomScale?: number

        /**
         * The minimum allowed zoom scale. The default value is 1.0.
         */
        minimumZoomScale?: number

        /**
         * Deprecated. Use the refreshControl prop instead.
         */
        onRefreshStart?: () => void

        /**
         * Called when a scrolling animation ends.
         */
        onScrollAnimationEnd?: () => void

        /**
         * When false, the content does not scroll. The default value is true
         */
        scrollEnabled?: boolean // true

        /**
         * This controls how often the scroll event will be fired while scrolling (in events per seconds).
         * A higher number yields better accuracy for code that is tracking the scroll position,
         * but can lead to scroll performance problems due to the volume of information being send over the bridge.
         * The default value is zero, which means the scroll event will be sent only once each time the view is scrolled.
         */
        scrollEventThrottle?: number // null

        /**
         * The amount by which the scroll view indicators are inset from the edges of the scroll view.
         * This should normally be set to the same value as the contentInset.
         * Defaults to {0, 0, 0, 0}.
         */
        scrollIndicatorInsets?: Insets //zeroes

        /**
         * When true the scroll view scrolls to top when the status bar is tapped.
         * The default value is true.
         */
        scrollsToTop?: boolean

        /**
         * When snapToInterval is set, snapToAlignment will define the relationship of the the snapping to the scroll view.
         *      - start (the default) will align the snap at the left (horizontal) or top (vertical)
         *      - center will align the snap in the center
         *      - end will align the snap at the right (horizontal) or bottom (vertical)
         */
        snapToAlignment?: string

        /**
         * When set, causes the scroll view to stop at multiples of the value of snapToInterval.
         * This can be used for paginating through children that have lengths smaller than the scroll view.
         * Used in combination with snapToAlignment.
         */
        snapToInterval?: number

        /**
         * An array of child indices determining which children get docked to the
         * top of the screen when scrolling. For example passing
         * `stickyHeaderIndices={[0]}` will cause the first child to be fixed to the
         * top of the scroll view. This property is not supported in conjunction
         * with `horizontal={true}`.
         */
        stickyHeaderIndices?: number[]

        /**
         * The current scale of the scroll view content. The default value is 1.0.
         */
        zoomScale?: number
    }

    export interface ScrollViewPropertiesAndroid {

        /**
         * Sometimes a scrollview takes up more space than its content fills.
         * When this is the case, this prop will fill the rest of the
         * scrollview with a color to avoid setting a background and creating
         * unnecessary overdraw. This is an advanced optimization that is not
         * needed in the general case.
         */
        endFillColor?: string

        /**
         * Tag used to log scroll performance on this scroll view. Will force
         * momentum events to be turned on (see sendMomentumEvents). This doesn't do
         * anything out of the box and you need to implement a custom native
         * FpsListener for it to be useful.
         * @platform android
         */
        scrollPerfTag?: string

    }

    export interface ScrollViewProperties extends ViewProperties, ScrollViewPropertiesIOS, ScrollViewPropertiesAndroid, Touchable, React.Props<ScrollViewStatic> {

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
        contentContainerStyle?: ViewStyle

        /**
         * When true the scroll view's children are arranged horizontally in a row
         * instead of vertically in a column. The default value is false.
         */
        horizontal?: boolean

        /**
         * Determines whether the keyboard gets dismissed in response to a drag.
         *   - 'none' (the default) drags do not dismiss the keyboard.
         *   - 'onDrag' the keyboard is dismissed when a drag begins.
         *   - 'interactive' the keyboard is dismissed interactively with the drag
         *     and moves in synchrony with the touch; dragging upwards cancels the
         *     dismissal.
         */
        keyboardDismissMode?: string

        /**
         * When false tapping outside of the focused text input when the keyboard
         * is up dismisses the keyboard. When true the scroll view will not catch
         * taps and the keyboard will not dismiss automatically. The default value
         * is false.
         */
        keyboardShouldPersistTaps?: boolean

        /**
         * Fires at most once per frame during scrolling.
         * The frequency of the events can be contolled using the scrollEventThrottle prop.
         */
        onScroll?: (event?: { nativeEvent: NativeScrollEvent }) => void

        /**
         * When true the scroll view stops on multiples of the scroll view's size
         * when scrolling. This can be used for horizontal pagination. The default
         * value is false.
         */
        pagingEnabled?: boolean

        /**
         * Experimental: When true offscreen child views (whose `overflow` value is
         * `hidden`) are removed from their native backing superview when offscreen.
         * This canimprove scrolling performance on long lists. The default value is
         * false.
         */
        removeClippedSubviews?: boolean

        /**
         * When true, shows a horizontal scroll indicator.
         */
        showsHorizontalScrollIndicator?: boolean

        /**
         * When true, shows a vertical scroll indicator.
         */
        showsVerticalScrollIndicator?: boolean

        /**
         * Style
         */
        style?: ScrollViewStyle

        /**
         * A RefreshControl component, used to provide pull-to-refresh
         * functionality for the ScrollView.
         */
        refreshControl?: React.ReactElement<RefreshControlProperties>

        ref?: Ref<ScrollViewStatic & ViewStatic>
    }

    export interface ScrollViewProps extends ScrollViewProperties, React.Props<ScrollViewStatic> {
        ref?: Ref<ScrollViewStatic>
    }

    interface ScrollViewStatic extends React.ComponentClass<ScrollViewProps> {

        // Deprecated. Use RefreshControl instead.
        endRefreshing?: () => void

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
        scrollTo(
            y?: number | { x?: number, y?: number, animated?: boolean },
            x?: number,
            animated?: boolean
        ): void;

        /**
         * Returns a reference to the underlying scroll responder, which supports
         * operations like `scrollTo`. All ScrollView-like components should
         * implement this method so that they can be composed while providing access
         * to the underlying scroll responder's methods.
         */
        getScrollResponder(): JSX.Element;

        // Undocumented
        getInnerViewNode(): any;

        // Deprecated, do not use.
        scrollWithoutAnimationTo?: (y: number, x: number) => void
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

    export interface NativeScrollSize {
        height: number;
        width: number;
    }

    export interface NativeScrollEvent {
        contentInset: NativeScrollRectangle;
        contentOffset: NativeScrollPoint;
        contentSize: NativeScrollSize;
        layoutMeasurement: NativeScrollSize;
        zoomScale: number;
    }

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
        cloneWithRowsAndSections(dataBlob: any,
                                 sectionIdentities: Array<string>,
                                 rowIdentities: Array<Array<string>>): SwipeableListViewDataSource
        getDataSource(): ListViewDataSource
        getOpenRowID(): string
        setOpenRowID(rowID: string): ListViewDataSource
    }

    export interface SwipeableListViewProps extends React.Props<SwipeableListViewStatic> {
        dataSource: SwipeableListViewDataSource
        maxSwipeDistance?: number

        // Callback method to render the swipeable view
        renderRow: ( rowData: any, sectionID: string | number, rowID: string | number, highlightRow?: boolean ) => React.ReactElement<any>

        // Callback method to render the view that will be unveiled on swipe
        renderQuickActions(rowData: Object, sectionID: string, rowID: string): React.ReactElement<any>
    }

    export interface SwipeableListViewStatic extends React.ComponentClass<SwipeableListViewProps> {
        getNewDataSource(): SwipeableListViewDataSource
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
        title?: string
        options?: string[]
        cancelButtonIndex?: number
        destructiveButtonIndex?: number
        message?: string
    }

    export interface ShareActionSheetIOSOptions {
        message?: string
        url?: string
    }

    /**
     * @see https://facebook.github.io/react-native/docs/actionsheetios.html#content
     */
    export interface ActionSheetIOSStatic {
        /**
         * Display an iOS action sheet. The options object must contain one
         * or more of:
         * options (array of strings) - a list of button titles (required)
         * cancelButtonIndex (int) - index of cancel button in options
         * destructiveButtonIndex (int) - index of destructive button in options
         * title (string) - a title to show above the action sheet
         * message (string) - a message to show below the title
         */
        showActionSheetWithOptions: ( options: ActionSheetIOSOptions, callback: ( buttonIndex: number ) => void ) => void

        /**
         * Display the iOS share sheet. The options object should contain one
         * or both of:
         * message (string) - a message to share
         * url (string) - a URL to share
         * NOTE: if url points to a local file, or is a base64-encoded uri,
         * the file it points to will be loaded and shared directly. In this
         * way, you can share images, videos, PDF files, etc.
         */
        showShareActionSheetWithOptions: ( options: ShareActionSheetIOSOptions, failureCallback: ( error: Error ) => void, successCallback: ( success: boolean, method: string ) => void ) => void
    }

    /**
     * @see https://facebook.github.io/react-native/docs/alert.html#content
     */
    export interface AlertButton {
      text?: string
      onPress?: () => void
      style?: "default" | "cancel" | "destructive"
    }

    export interface AlertStatic {
       alert: (title: string, message?: string, buttons?: AlertButton[], type?: string) => void
    }


    /**
     * //FIXME: No documentation - inferred from RCTAdSupport.m
     */
    export interface AdSupportIOSStatic {
        getAdvertisingId: ( onSuccess: ( deviceId: string ) => void, onFailure: ( err: Error ) => void ) => void
        getAdvertisingTrackingEnabled: ( onSuccess: ( hasTracking: boolean ) => void, onFailure: ( err: Error ) => void ) => void
    }

    interface AlertIOSButton {
        text: string
        onPress?: () => void
        style?: "default" | "cancel" | "destructive"
    }

    /**
     * Launches an alert dialog with the specified title and message.
     *
     * Optionally provide a list of buttons.
     * Tapping any button will fire the respective onPress callback and dismiss the alert.
     * By default, the only button will be an 'OK' button
     *
     * The last button in the list will be considered the 'Primary' button and it will appear bold.
     *
     * @see https://facebook.github.io/react-native/docs/alertios.html#content
     */
    export interface AlertIOSStatic {

        /*
         Creates a popup to alert the user.

         title: string -- The dialog's title.
         message: string -- An optional message that appears above the text input.
         callbackOrButtons -- This optional argument should be either a single-argument function or an array of buttons. If passed a function, it will be called when the user taps 'OK'.

         If passed an array of button configurations, each button should include a text key, as well as optional onPress and style keys. style should be one of 'default', 'cancel' or 'destructive'.

         type -- deprecated, do not use
         */
        alert: ( title: string, message?: string, callbackOrButtons?: (value: string) => void| Array<AlertIOSButton>, type?: string ) => void

        /*
         Prompt the user to enter some text.

         title: string -- The dialog's title.
         message: string -- An optional message that appears above the text input.
         callbackOrButtons -- This optional argument should be either a single-argument function or an array of buttons. If passed a function, it will be called with the prompt's value when the user taps 'OK'.

         If passed an array of button configurations, each button should include a text key, as well as optional onPress and style keys (see example). style should be one of 'default', 'cancel' or 'destructive'.

         type: string -- This configures the text input. One of 'plain-text', 'secure-text' or 'login-password'.
         defaultValue: string -- the default value for the text field.
         */

        prompt: ( title: string, value?: string, callbackOrButtons?: (value: string) => void | Array<AlertIOSButton>, type?: string, defaultValue?: string ) => void
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
    export type AppStateEvent = "change" | "memoryWarning"
    export type AppStateStatus = "active" | "background" | "inactive"

    export interface AppStateStatic {

        currentState: string

        /**
         * Add a handler to AppState changes by listening to the change event
         * type and providing the handler
         */
        addEventListener( type: AppStateEvent, listener: ( state: AppStateStatus ) => void ): void

        /**
         * Remove a handler by passing the change event type and the handler
         */
        removeEventListener( type: AppStateEvent, listener: ( state: AppStateStatus ) => void ): void
    }

    /**
     * AsyncStorage is a simple, asynchronous, persistent, key-value storage system that is global to the app.
     * It should be used instead of LocalStorage.
     *
     * It is recommended that you use an abstraction on top of AsyncStorage
     * instead of AsyncStorage directly for anything more than light usage since it operates globally.
     *
     * @see https://facebook.github.io/react-native/docs/asyncstorage.html#content
     */
    export interface AsyncStorageStatic {

        /**
         * Fetches key and passes the result to callback, along with an Error if there is any.
         */
        getItem( key: string, callback?: ( error?: Error, result?: string ) => void ): Promise<string>

        /**
         * Sets value for key and calls callback on completion, along with an Error if there is any
         */
        setItem( key: string, value: string, callback?: ( error?: Error ) => void ): Promise<string>

        removeItem( key: string, callback?: ( error?: Error ) => void ): Promise<string>

        /**
         * Merges existing value with input value, assuming they are stringified json. Returns a Promise object.
         * Not supported by all native implementation
         */
        mergeItem( key: string, value: string, callback?: ( error?: Error ) => void ): Promise<string>

        /**
         * Erases all AsyncStorage for all clients, libraries, etc. You probably don't want to call this.
         * Use removeItem or multiRemove to clear only your own keys instead.
         */
        clear( callback?: ( error?: Error ) => void ): Promise<string>

        /**
         * Gets all keys known to the app, for all callers, libraries, etc
         */
        getAllKeys( callback?: ( error?: Error, keys?: string[] ) => void ): Promise<string>

        /**
         * multiGet invokes callback with an array of key-value pair arrays that matches the input format of multiSet
         */
        multiGet( keys: string[], callback?: ( errors?: Error[], result?: string[][] ) => void ): Promise<string>

        /**
         * multiSet and multiMerge take arrays of key-value array pairs that match the output of multiGet,
         *
         * multiSet([['k1', 'val1'], ['k2', 'val2']], cb);
         */
        multiSet( keyValuePairs: string[][], callback?: ( errors?: Error[] ) => void ): Promise<string>

        /**
         * Delete all the keys in the keys array.
         */
        multiRemove( keys: string[], callback?: ( errors?: Error[] ) => void ): Promise<string>

        /**
         * Merges existing values with input values, assuming they are stringified json.
         * Returns a Promise object.
         *
         * Not supported by all native implementations.
         */
        multiMerge( keyValuePairs: string[][], callback?: ( errors?: Error[] ) => void ): Promise<string>
    }

    /**
     * Detect hardware back button presses, and programmatically invoke the
     * default back button functionality to exit the app if there are no
     * listeners or if none of the listeners return true.
     * Methods don't have more detailed documentation as of 0.25.
     */
    export interface BackAndroidStatic {
        exitApp(): void;
        addEventListener(eventName: string, handler: () => void): void;
        removeEventListener(eventName: string, handler: () => void): void;
    }

    export interface CameraRollFetchParams {
        first: number;
        after?: string;
        groupTypes: string; //  'Album','All','Event','Faces','Library','PhotoStream','SavedPhotos'
        groupName?: string
        assetType?: string
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
        first: number
        after: string
        groupTypes: "Album" | "All" | "Event" | "Faces" | "Library" | "PhotoStream" | "SavedPhotos"
        groupName: string
        assetType: "All" | "Videos" | "Photos"
        mimeTypes: string[]
    }

    export interface GetPhotosReturnType {
        edges: {
            node: {
              type: string
              group_name: string
              image: {
                  uri: string
                  height: number
                  width: number
                  isStored?: boolean
              }
            }
        }[]

        page_info: {
            has_next_page: boolean
            start_cursor?: string
            end_cursor?: string
        }
    }

    /**
     * CameraRoll provides access to the local camera roll / gallery.
     */
    export interface CameraRollStatic {

        GroupTypesOptions: string[] //'Album','All','Event','Faces','Library','PhotoStream','SavedPhotos'

        /**
         * Saves the image to the camera roll / gallery.
         *
         * The CameraRoll API is not yet implemented for Android.
         *
         * @tag On Android, this is a local URI, such as "file:///sdcard/img.png".
         * On iOS, the tag can be one of the following:
         *      local URI
         *      assets-library tag
         *      a tag not maching any of the above, which means the image data will be stored in memory (and consume memory as long as the process is alive)
         *
         * @deprecated use saveToCameraRoll instead
         *
         */
        saveImageWithTag( tag: string ): Promise<string>

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
        saveToCameraRoll(tag: string, type?: 'photo' | 'video'): Promise<string>

        /**
         * Invokes callback with photo identifier objects from the local camera roll of the device matching shape defined by getPhotosReturnChecker.
         *
         * @param {object} params See getPhotosParamChecker.
         */
        getPhotos(params: GetPhotosParamType): Promise<GetPhotosReturnType>;
    }

    export interface ClipboardStatic {
        getString(): Promise<string>;
        setString(content: string): void;
    }

    export interface DatePickerAndroidOpenOption {
        date?: Date | number
        minDate?: Date | number
        maxDate?: Date | number
    }

    export interface DatePickerAndroidOpenReturn {
        action: string // Deduced from DatePickerAndroid.android.js
        year?: number
        month?: number
        day?: number
    }

    export interface DatePickerAndroidStatic {
        /*
         Opens the standard Android date picker dialog.

         The available keys for the options object are: date (Date object or timestamp in milliseconds) - date to show by default minDate (Date or timestamp in milliseconds) - minimum date that can be selected * maxDate (Date object or timestamp in milliseconds) - minimum date that can be selected

         Returns a Promise which will be invoked an object containing action, year, month (0-11), day if the user picked a date. If the user dismissed the dialog, the Promise will still be resolved with action being DatePickerAndroid.dismissedAction and all the other keys being undefined. Always check whether the action before reading the values.

         Note the native date picker dialog has some UI glitches on Android 4 and lower when using the minDate and maxDate options.
         */
        open(options?: DatePickerAndroidOpenOption): Promise<DatePickerAndroidOpenReturn>

        /**
         * A date has been selected.
         */
        dateSetAction: string

        /**
         * The dialog has been dismissed.
         */
        dismissedAction: string
    }

    export interface FetchableListenable<T> {
        fetch: () => Promise<T>

        /**
         * eventName is expected to be `change`
         * //FIXME: No doc - inferred from NetInfo.js
         */
        addEventListener: ( eventName: string, listener: ( result: T ) => void ) => void

        /**
         * eventName is expected to be `change`
         * //FIXME: No doc - inferred from NetInfo.js
         */
        removeEventListener: ( eventName: string, listener: ( result: T ) => void ) => void
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
        openURL(url: string): void

        /**
         * Determine whether or not an installed app can handle a given URL.

         You can use other URLs, like a location (e.g. "geo:37.484847,-122.148386"), a contact, or any other URL that can be opened with {@code Intent.ACTION_VIEW}.

         NOTE: For web URLs, the protocol ("http://", "https://") must be set accordingly!

         @param URL the URL to open

         @deprecated
         */
        canOpenURL(url: string, callback: (supported: boolean) => void): void

        /**
         * If the app launch was triggered by an app link with {@code Intent.ACTION_VIEW}, it will give the link url, otherwise it will give null

         Refer http://developer.android.com/training/app-indexing/deep-linking.html#handling-intents

         @deprecated
         */
        getInitialURL(callback: (url: string) => void):void
    }

    export interface LinkingStatic {
        /**
         * Add a handler to Linking changes by listening to the url event type and providing the handler
         * @platform ios
         */
        addEventListener(type: string, handler: (event: {url: string}) => void): void

        /**
         * Remove a handler by passing the url event type and the handler
         * @platform ios
         */
        removeEventListener(type: string, handler: (event: {url: string}) => void): void

        /**
         * Try to open the given url with any of the installed apps.
         * You can use other URLs, like a location (e.g. "geo:37.484847,-122.148386"), a contact, or any other URL that can be opened with the installed apps.
         * NOTE: This method will fail if the system doesn't know how to open the specified URL. If you're passing in a non-http(s) URL, it's best to check {@code canOpenURL} first.
         * NOTE: For web URLs, the protocol ("http://", "https://") must be set accordingly!
         */
        openURL(url: string): Promise<boolean>

        /**
         * Determine whether or not an installed app can handle a given URL.
         * NOTE: For web URLs, the protocol ("http://", "https://") must be set accordingly!
         * NOTE: As of iOS 9, your app needs to provide the LSApplicationQueriesSchemes key inside Info.plist.
         * @param URL the URL to open
         */
        canOpenURL(url: string): Promise<boolean>

        /**
         * If the app launch was triggered by an app link with, it will give the link url, otherwise it will give null
         * NOTE: To support deep linking on Android, refer http://developer.android.com/training/app-indexing/deep-linking.html#handling-intents
         */
        getInitialURL(): Promise<string>
    }

    export interface LinkingIOSStatic {
        /**
         * Add a handler to LinkingIOS changes by listening to the url event type and providing the handler
         @deprecated
         */
        addEventListener(type: string, handler: (event: {url: string}) => void): void

        /**
         * Remove a handler by passing the url event type and the handler
         @deprecated
         */
        removeEventListener(type: string, handler: (event: {url: string}) => void): void

        /**
         * Try to open the given url with any of the installed apps.
         @deprecated
         */
        openURL(url: string): void

        /**
         * Determine whether or not an installed app can handle a given URL. The callback function will be called with bool supported as the only argument
         NOTE: As of iOS 9, your app needs to provide the LSApplicationQueriesSchemes key inside Info.plist.
         @deprecated
         */
        canOpenURL(url: string, callback: (supported: boolean) => void): void

        /**
         * If the app launch was triggered by an app link, it will pop the link url, otherwise it will return null
         @deprecated
         */
        popInitialURL(): string;
    }


    /**
     * NetInfo exposes info about online/offline status
     *
     * Asynchronously determine if the device is online and on a cellular network.
     *
     * - `none` - device is offline
     * - `wifi` - device is online and connected via wifi, or is the iOS simulator
     * - `cell` - device is connected via Edge, 3G, WiMax, or LTE
     * - `unknown` - error case and the network status is unknown
     * @see https://facebook.github.io/react-native/docs/netinfo.html#content
     */

    // This is from code, a few items more than documentation@0.25
    export type NetInfoReturnType = "none" | "wifi" | "cell" | "unknown" |
   "NONE" | "MOBILE" | "WIFI" | "MOBILE_MMS" | "MOBILE_SUPL" | "MOBILE_DUN" |
   "MOBILE_HIPRI" | "WIMAX" | "BLUETOOTH" | "DUMMY" | "ETHERNET" | "MOBILE_FOTA" |
   "MOBILE_IMS" | "MOBILE_CBS" | "WIFI_P2P" | "MOBILE_IA" | "MOBILE_EMERGENCY" |
   "PROXY" | "VPN" | "UNKNOWN"

    export interface NetInfoStatic extends FetchableListenable<NetInfoReturnType> {

        /**
         *
         * Available on all platforms.
         * Asynchronously fetch a boolean to determine internet connectivity.
         */
        isConnected: FetchableListenable<boolean>

        /**
         * Available on Android. Detect if the current active connection is
         * metered or not. A network is classified as metered when the user is
         * sensitive to heavy data usage on that connection due to monetary
         * costs, data limitations or battery/performance issues.
         */
        isConnectionExpensive: FetchableListenable<boolean>
    }


    export interface PanResponderGestureState {

        /**
         *  ID of the gestureState- persisted as long as there at least one touch on
         */
        stateID: number

        /**
         *  the latest screen coordinates of the recently-moved touch
         */
        moveX: number

        /**
         *  the latest screen coordinates of the recently-moved touch
         */
        moveY: number

        /**
         * the screen coordinates of the responder grant
         */
        x0: number

        /**
         * the screen coordinates of the responder grant
         */
        y0: number

        /**
         * accumulated distance of the gesture since the touch started
         */
        dx: number

        /**
         * accumulated distance of the gesture since the touch started
         */
        dy: number

        /**
         * current velocity of the gesture
         */
        vx: number

        /**
         * current velocity of the gesture
         */
        vy: number

        /**
         * Number of touches currently on screen
         */
        numberActiveTouches: number


        // All `gestureState` accounts for timeStamps up until:
        _accountsForMovesUpTo: number
    }


    /**
     * @see documentation of GestureResponderHandlers
     */
    export interface PanResponderCallbacks {
        onMoveShouldSetPanResponder?: ( e: GestureResponderEvent, gestureState: PanResponderGestureState ) => boolean
        onStartShouldSetPanResponder?: ( e: GestureResponderEvent, gestureState: PanResponderGestureState ) => void
        onPanResponderGrant?: ( e: GestureResponderEvent, gestureState: PanResponderGestureState ) => void
        onPanResponderMove?: ( e: GestureResponderEvent, gestureState: PanResponderGestureState ) => void
        onPanResponderRelease?: ( e: GestureResponderEvent, gestureState: PanResponderGestureState ) => void
        onPanResponderTerminate?: ( e: GestureResponderEvent, gestureState: PanResponderGestureState ) => void

        onMoveShouldSetPanResponderCapture?: ( e: GestureResponderEvent, gestureState: PanResponderGestureState ) => boolean
        onStartShouldSetPanResponderCapture?: ( e: GestureResponderEvent, gestureState: PanResponderGestureState ) => boolean
        onPanResponderReject?: ( e: GestureResponderEvent, gestureState: PanResponderGestureState ) => void
        onPanResponderStart?: ( e: GestureResponderEvent, gestureState: PanResponderGestureState ) => void
        onPanResponderEnd?: ( e: GestureResponderEvent, gestureState: PanResponderGestureState ) => void
        onPanResponderTerminationRequest?: ( e: GestureResponderEvent, gestureState: PanResponderGestureState ) => boolean
    }

    export interface PanResponderInstance {
        panHandlers: GestureResponderHandlers
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
        create( config: PanResponderCallbacks ): PanResponderInstance
    }

    export interface PushNotificationPermissions {
        alert?: boolean
        badge?: boolean
        sound?: boolean
    }

    export interface PushNotification {


        /**
         * An alias for `getAlert` to get the notification's main message string
         */
        getMessage(): string | Object

        /**
         * Gets the sound string from the `aps` object
         */
        getSound(): string

        /**
         * Gets the notification's main message from the `aps` object
         */
        getAlert(): string | Object

        /**
         * Gets the badge count number from the `aps` object
         */
        getBadgeCount(): number

        /**
         * Gets the data object on the notif
         */
        getData(): Object

    }


    type PresentLocalNotificationDetails = {
        alertBody: string
        alertAction: string
        soundName?: string
        category?: string
        userInfo?: Object
    }

    type ScheduleLocalNotificationDetails = {
        fireDate: Date
        alertBody: string
        alertAction: string
        soundName?: string
        category?: string
        userInfo?: Object
    }

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
         */
        presentLocalNotification(details: PresentLocalNotificationDetails): void

        /**
         * Schedules the localNotification for future presentation.
         * details is an object containing:
         * fireDate : The date and time when the system should deliver the notification.
         * alertBody : The message displayed in the notification alert.
         * alertAction : The "action" displayed beneath an actionable notification. Defaults to "view";
         * soundName : The sound played when the notification is fired (optional).
         * category : The category of this notification, required for actionable notifications (optional).
         * userInfo : An optional object containing additional notification data.
         */
        scheduleLocalNotification(details: ScheduleLocalNotificationDetails): void

        /**
         * Cancels all scheduled localNotifications
         */
        cancelAllLocalNotifications(): void

        /**
         * Cancel local notifications.
         * Optionally restricts the set of canceled notifications to those notifications whose userInfo fields match the corresponding fields in the userInfo argument.
         */
        cancelLocalNotifications(userInfo: Object): void

        /**
         * Sets the badge number for the app icon on the home screen
         */
        setApplicationIconBadgeNumber( number: number ): void

        /**
         * Gets the current badge number for the app icon on the home screen
         */
        getApplicationIconBadgeNumber( callback: ( badge: number ) => void ): void

        /**
         * Attaches a listener to remote notifications while the app is running in the
         * foreground or the background.
         *
         * The handler will get be invoked with an instance of `PushNotificationIOS`
         *
         * The type MUST be 'notification'
         */
        addEventListener( type: string, handler: ( notification: PushNotification ) => void ):void

        /**
         * Requests all notification permissions from iOS, prompting the user's
         * dialog box.
         */
        requestPermissions( permissions?: PushNotificationPermissions[] ): Promise<PushNotificationPermissions>

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
        abandonPermissions(): void

        /**
         * See what push permissions are currently enabled. `callback` will be
         * invoked with a `permissions` object:
         *
         *  - `alert` :boolean
         *  - `badge` :boolean
         *  - `sound` :boolean
         */
        checkPermissions( callback: ( permissions: PushNotificationPermissions ) => void ): void

        /**
         * Removes the event listener. Do this in `componentWillUnmount` to prevent
         * memory leaks
         */
        removeEventListener( type: string, handler: ( notification: PushNotification ) => void ): void

        /**
         * An initial notification will be available if the app was cold-launched
         * from a notification.
         *
         * The first caller of `popInitialNotification` will get the initial
         * notification object, or `null`. Subsequent invocations will return null.
         */
        popInitialNotification(): PushNotification
    }


    /**
     * @enum('default', 'light-content')
     */
    export type StatusBarStyle =  "default" | "light-content"

    /**
     * @enum('none','fade', 'slide')
     */
    type StatusBarAnimation = "none" | "fade" | "slide"

    export interface StatusBarPropertiesIOS extends React.Props<StatusBarStatic> {
        /**
         * Sets the color of the status bar text.
         */
        barStyle?: StatusBarStyle

        /**
         * If the network activity indicator should be visible.
         */
        networkActivityIndicatorVisible?: boolean

        /**
         * The transition effect when showing and hiding the status bar using
         * the hidden prop. Defaults to 'fade'.
         */
        showHideTransition?: "fade" | "slide"
    }

    export interface StatusBarPropertiesAndroid extends React.Props<StatusBarStatic> {
        /**
         * The background color of the status bar.
         */
        backgroundColor?: any

        /**
         * If the status bar is translucent. When translucent is set to true,
         * the app will draw under the status bar. This is useful when using a
         * semi transparent status bar color.
         */
        translucent?: boolean
    }

    export interface StatusBarProperties extends StatusBarPropertiesIOS, StatusBarPropertiesAndroid, React.Props<StatusBarStatic> {

        /**
         * If the transition between status bar property changes should be
         * animated. Supported for backgroundColor, barStyle and hidden.
         */
        animated?: boolean

        /**
         * If the status bar is hidden.
         */
        hidden?: boolean
    }

    export interface StatusBarStatic extends React.ComponentClass<StatusBarProperties> {

        setHidden: (hidden: boolean, animation: StatusBarAnimation) => void

        setBarStyle: (style: StatusBarStyle, animated: boolean) => void

        setNetworkActivityIndicatorVisible: (visible: boolean) => void

        setBackgroundColor: (color: string, animated: boolean) => void

        setTranslucent: (translucent: boolean) => void
    }


    /**
     * StatusBarIOS is being deprecated.
     * @see https://github.com/facebook/react-native/commit/4de616b4c1a9d3556632a93504828f0539fa4fa5
     */
    export interface StatusBarIOSStatic {
    }

    type TimePickerAndroidOpenOptions = {
        hour?: number
        minute?: number
        is24Hour?: boolean
    }

    export interface TimePickerAndroidStatic {

        /**
         * The available keys for the options object are:
         * hour (0-23) - the hour to show, defaults to the current time
         * minute (0-59) - the minute to show, defaults to the current time
         * is24Hour (boolean) - If true, the picker uses the 24-hour format.
         * If false, the picker shows an AM/PM chooser. If undefined,
         * the default for the current locale is used.

         * Returns a Promise which will be invoked an object containing action,
         * hour (0-23), minute (0-59) if the user picked a time. If the user
         * dismissed the dialog, the Promise will still be resolved with action
         * being TimePickerAndroid.dismissedAction and all the other keys being
         * undefined. Always check whether the action before reading the values.
         */
        open(options: TimePickerAndroidOpenOptions): Promise<{action: string, hour: number, minute: number}>

        /**
         * A time has been selected.
         */
        timeSetAction: string

        /**
         * The dialog has been dismissed.
         */
        dismissedAction: string
    }

    export interface ToastAndroidStatic {
        /**
         * String message: A string with the text to toast
         * int duration: The duration of the toast.
         * May be ToastAndroid.SHORT or ToastAndroid.LONG
         */
        show(message: string, duration: number): void
        SHORT: number
        LONG: number
    }

    export interface SwitchPropertiesIOS extends ViewProperties, React.Props<SwitchStatic> {

        /**
         * Background color when the switch is turned on.
         */
        onTintColor?: string

        /**
         * Color of the foreground switch grip.
         */
        thumbTintColor?: string

        /**
         * Background color when the switch is turned off.
         */
        tintColor?: string

        ref?: Ref<SwitchStatic>
    }

    export interface SwitchProperties extends ViewProperties, React.Props<SwitchStatic> {

        /**
         * If true the user won't be able to toggle the switch.
         * Default value is false.
         */
        disabled?: boolean

        /**
         * Invoked with the new value when the value changes.
         */
        onValueChange?: (value: boolean) => void

        /**
         * Used to locate this view in end-to-end tests.
         */
        testID?: string

        /**
         * The value of the switch. If true the switch will be turned on.
         * Default value is false.
         */
        value?: boolean

	    style?: ViewStyle

        ref?: Ref<SwitchStatic>
    }

    export interface SwitchStatic extends React.ComponentClass<SwitchProperties> {

    }

    /**
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
        vibrate(): void
    }

    export interface VibrationStatic {
        // Vibration patterns are currently unsupported.
        vibrate(pattern: number | number[], repeat: boolean): void

        /**
         * Stop vibration
         * @platform android
         */
        cancel(): void
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
        elastic: EasingFunction;
        back(s: number): EasingFunction;
        bounce: EasingFunction;
        bezier( x1: number,
                y1: number,
                x2: number,
                y2: number): EasingFunction;
        in(easing: EasingFunction): EasingFunction;
        out(easing: EasingFunction): EasingFunction;
        inOut(easing: EasingFunction): EasingFunction;
    }

    export module Animated {
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

      type ExtrapolateType = 'extend' | 'identity' | 'clamp';

      type InterpolationConfigType = {
        inputRange: number[];
        outputRange: (number[] | string[]);
        easing?: ((input: number) => number);
        extrapolate?: ExtrapolateType;
        extrapolateLeft?: ExtrapolateType;
        extrapolateRight?: ExtrapolateType;
      };

      type ValueListenerCallback = (state: {value: number}) => void;

      /**
       * Standard value for driving animations.  One `Animated.Value` can drive
       * multiple properties in a synchronized fashion, but can only be driven by one
       * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
       * or calling `setValue`) will stop any previous ones.
       */
      export class Value extends AnimatedWithChildren {
        constructor(value: number);

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

      type ValueXYListenerCallback = (value: {x: number; y: number}) => void;

      /**
       * 2D Value for driving 2D animations, such as pan gestures.  Almost identical
       * API to normal `Animated.Value`, but multiplexed.  Contains two regular
       * `Animated.Value`s under the hood.
       */
      export class ValueXY extends AnimatedWithChildren {
        x: AnimatedValue;
        y: AnimatedValue;

        constructor(valueIn?: {x: number | AnimatedValue; y: number | AnimatedValue});

        setValue(value: {x: number; y: number}): void;

        setOffset(offset: {x: number; y: number}): void;

        flattenOffset(): void

        stopAnimation(callback?: () => number): void;

        addListener(callback: ValueXYListenerCallback): string;

        removeListener(id: string): void;

        /**
         * Converts `{x, y}` into `{left, top}` for use in style, e.g.
         *
         *```javascript
         *  style={this.state.anim.getLayout()}
         *```
         */
        getLayout(): { left: AnimatedValue, top: AnimatedValue };

        /**
         * Converts `{x, y}` into a useable translation transform, e.g.
         *
         *```javascript
         *  style={{
         *    transform: this.state.anim.getTranslateTransform()
         *  }}
         *```
         */
        getTranslateTransform(): {[key: string]: AnimatedValue}[];

      }

      type EndResult = {finished: boolean};
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
      export function decay(
        value: AnimatedValue | AnimatedValueXY,
        config: DecayAnimationConfig
      ): CompositeAnimation;

      interface DecayAnimationConfig extends AnimationConfig {
        velocity: number | {x: number, y: number};
        deceleration?: number;
      }

      /**
       * Animates a value along a timed easing curve.  The `Easing` module has tons
       * of pre-defined curves, or you can use your own function.
       */
      export var timing: (
        value: AnimatedValue | AnimatedValueXY,
        config: TimingAnimationConfig
      ) => CompositeAnimation;

      interface TimingAnimationConfig extends AnimationConfig {
        toValue: number | AnimatedValue | {x: number, y: number} | AnimatedValueXY;
        easing?: (value: number) => number;
        duration?: number;
        delay?: number;
      }

      interface SpringAnimationConfig extends AnimationConfig {
        toValue: number | AnimatedValue | {x: number, y: number} | AnimatedValueXY;
        overshootClamping?: boolean;
        restDisplacementThreshold?: number;
        restSpeedThreshold?: number;
        velocity?: number | {x: number, y: number};
        bounciness?: number;
        speed?: number;
        tension?: number;
        friction?: number;
      }

      /**
       * Creates a new Animated value composed from two Animated values added
       * together.
       */
      export function add(
        a: Animated,
        b: Animated
      ): AnimatedAddition;

      class AnimatedAddition extends AnimatedInterpolation {}

      /**
       * Creates a new Animated value composed from two Animated values multiplied
       * together.
       */
       export function multiply(
        a: Animated,
        b: Animated
      ): AnimatedMultiplication;

      class AnimatedMultiplication extends AnimatedInterpolation {}

      /**
       * Creates a new Animated value that is the (non-negative) modulo of the
       * provided Animated value
       */
      export function modulo(
        a: Animated,
        modulus: number
      ): AnimatedModulo;

      class AnimatedModulo extends AnimatedInterpolation {}

      /**
       * Starts an animation after the given delay.
       */
      export function delay(time: number): CompositeAnimation;

      /**
       * Starts an array of animations in order, waiting for each to complete
       * before starting the next.  If the current running animation is stopped, no
       * following animations will be started.
       */
      export function sequence(
        animations: Array<CompositeAnimation>
      ): CompositeAnimation;

      /**
       * Array of animations may run in parallel (overlap), but are started in
       * sequence with successive delays.  Nice for doing trailing effects.
       */

      export function stagger(
        time: number,
        animations: Array<CompositeAnimation>
      ): CompositeAnimation

      /**
       * Spring animation based on Rebound and Origami.  Tracks velocity state to
       * create fluid motions as the `toValue` updates, and can be chained together.
       */
      export var spring: (
        value: AnimatedValue | AnimatedValueXY,
        config: SpringAnimationConfig
      ) => CompositeAnimation;

      type ParallelConfig = {
        stopTogether?: boolean; // If one is stopped, stop all.  default: true
      }

      /**
       * Starts an array of animations all at the same time.  By default, if one
       * of the animations is stopped, they will all be stopped.  You can override
       * this with the `stopTogether` flag.
       */
      var parallel: (
        animations: Array<CompositeAnimation>,
        config?: ParallelConfig
      ) => CompositeAnimation;

      type Mapping = {[key: string]: Mapping} | AnimatedValue;
      interface EventConfig {
        listener?: Function
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
      var event: (
        argMapping: Mapping[],
        config?: EventConfig
      ) => (...args: any[]) => void;

      /**
       * Animated variants of the basic native views. Accepts Animated.Value for
       * props and style.
       */
      export var View: any;
      export var Image: any;
      export var Text: any;
    }

    export interface GeolocationStatic {
        /*
         * Invokes the success callback once with the latest location info.  Supported
         * options: timeout (ms), maximumAge (ms), enableHighAccuracy (bool)
         * On Android, this can return almost immediately if the location is cached or
         * request an update, which might take a while.
         */
        getCurrentPosition(geo_success: (position: GeolocationReturnType) => void, geo_error?: (error: Error) => void, geo_options?: GetCurrentPositionOptions): void

        /*
         * Invokes the success callback whenever the location changes.  Supported
         * options: timeout (ms), maximumAge (ms), enableHighAccuracy (bool), distanceFilter(m)
         */
        watchPosition(success: (position: Geolocation) => void, error?: (error: Error) => void, options?: WatchPositionOptions): void

        clearWatch(watchID: number): void

        stopObserving(): void
    }

    // Network Polyfill
    // TODO: Add proper support for fetch
    export type fetch = (url: string, options?: Object) => Promise<any>

    // Timers polyfill
    export type timedScheduler = (fn: string | Function, time: number) => number
    export type untimedScheduler = (fn: string | Function) => number
    export type setTimeout = timedScheduler
    export type setInterval = timedScheduler
    export type setImmediate = untimedScheduler
    export type requestAnimationFrame = untimedScheduler

    export type schedulerCanceller = (id: number) => void
    export type clearTimeout = schedulerCanceller
    export type clearInterval = schedulerCanceller
    export type clearImmediate = schedulerCanceller
    export type cancelAnimationFrame = schedulerCanceller


    export interface TabsReducerStatic {
        JumpToAction(index: number): any;
    }

    export type TabsReducerFunction = (params:any) => any;

    export interface NavigationReducerStatic {
        TabsReducer: any; // (TabsReducerFunction | TabsReducerStatic);
    }

    export interface NavigationTab
    {
        key: string;
    }

    export interface NavigationAction
    {
        type: string;
    }

    export interface NavigationRoute {
      key: string;
    }

    export interface NavigationState extends NavigationRoute {
        index: number;
        routes: NavigationRoute[];
    }

    export type NavigationRenderer = (
        route: NavigationState,
        onNavigate: (action: NavigationAction) => boolean
    ) => JSX.Element;

    // Definitions for NavigationExperimental feature are deduced
    // from code examples
    export interface NavigationAnimatedViewStaticProps {
        route?: any
        style?: ViewStyle
        renderOverlay?(props: Object): JSX.Element
        applyAnimation(pos: any, navState: Object): void // TODO: what's pos?
        renderScene?(props: Object): JSX.Element
    }

    export interface NavigationAnimatedViewStatic extends React.ComponentClass<NavigationAnimatedViewStaticProps> {
    }

    export interface NavigationHeaderProps {
        renderTitleComponent?(props: Object): JSX.Element
        onNavigateBack(): void
    }

    export interface NavigationHeaderStatic extends React.ComponentClass<NavigationHeaderProps> {
        Title: JSX.Element
        HEIGHT: number
    }

    export interface NavigationCardStackProps {
        direction?: 'horizontal' | 'vertical'
        style?: ViewStyle
        route?: any
        renderScene?(props: any /* undocumented on 0.27 */): JSX.Element
        onNavigateBack(): void
    }

    export interface NavigationCardStackStatic extends React.ComponentClass<NavigationCardStackProps> {
    }

    export interface NavigationExperimentalStatic {
        AnimatedView: NavigationAnimatedViewStatic;
        CardStack: NavigationCardStackStatic;
        Header: NavigationHeaderStatic;
        Reducer: NavigationReducerStatic;
    }

    export interface NavigationContainerProps {
        tabs: NavigationTab[];
        index: number;
    }

    export interface NavigationContainerStatic extends React.ComponentClass<NavigationContainerProps> {
        create(inClass: any): any;
    }

    export interface NavigationRootContainerProps extends React.Props<NavigationRootContainerStatic> {
        renderNavigation: NavigationRenderer;
        reducer: NavigationReducerStatic;
        persistenceKey?: string;
    }

    export interface NavigationRootContainerStatic extends React.ComponentClass<NavigationRootContainerProps> {
        getBackAction(): NavigationAction;
        handleNavigation( action: NavigationAction ): boolean;
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
     * @see https://facebook.github.io/react-native/docs/native-modules-ios.html#sending-events-to-javascript
     */
    export interface NativeAppEventEmitterStatic {
        addListener(event: string, handler: (data: any) => void): NativeEventSubscription;
    }


    //////////////////////////////////////////////////////////////////////////
    //
    //  R E - E X P O R T S
    //
    //////////////////////////////////////////////////////////////////////////

    // export var AppRegistry: AppRegistryStatic;

    export var ActivityIndicator: ActivityIndicatorStatic
    export type ActivityIndicator = ActivityIndicatorStatic

    export var ActivityIndicatorIOS: ActivityIndicatorIOSStatic
    export type ActivityIndicatorIOS = ActivityIndicatorIOSStatic

    export var DatePickerIOS: DatePickerIOSStatic
    export type DatePickerIOS = DatePickerIOSStatic

    export var DrawerLayoutAndroid: DrawerLayoutAndroidStatic
    export type DrawerLayoutAndroid = DrawerLayoutAndroidStatic

    export var Image: ImageStatic
    export type Image = ImageStatic

    export var LayoutAnimation: LayoutAnimationStatic
    export type LayoutAnimation = LayoutAnimationStatic

    export var ListView: ListViewStatic
    export type ListView = ListViewStatic

    export var MapView: MapViewStatic
    export type MapView = MapViewStatic

    export var Modal: ModalStatic
    export type Modal = ModalStatic

    export var Navigator: NavigatorStatic
    export type Navigator = NavigatorStatic

    export var NavigatorIOS: NavigatorIOSStatic
    export type NavigatorIOS = NavigatorIOSStatic

    export var Picker: PickerStatic
    export type Picker = PickerStatic

    export var PickerIOS: PickerIOSStatic
    export type PickerIOS = PickerIOSStatic

    export var ProgressBarAndroid: ProgressBarAndroidStatic
    export type ProgressBarAndroid = ProgressBarAndroidStatic

    export var ProgressViewIOS: ProgressViewIOSStatic
    export type ProgressViewIOS = ProgressViewIOSStatic

    export var RefreshControl: RefreshControlStatic
    export type RefreshControl = RefreshControlStatic

    export var Slider: SliderIOS
    export type Slider = SliderIOS

    export var SliderIOS: SliderIOSStatic
    export type SliderIOS = SliderIOSStatic

    export var StatusBar: StatusBarStatic
    export type StatusBar = StatusBarStatic

    export var ScrollView: ScrollViewStatic
    export type ScrollView = ScrollViewStatic

    export var StyleSheet: StyleSheetStatic
    export type StyleSheet = StyleSheetStatic

    export var SwipeableListView: SwipeableListViewStatic
    export type SwipeableListView = SwipeableListViewStatic

    export var Switch: SwitchStatic
    export type Switch = SwitchStatic

    export var SwitchIOS: SwitchIOSStatic
    export type SwitchIOS = SwitchIOSStatic

    export var TabBarIOS: TabBarIOSStatic
    export type TabBarIOS = TabBarIOSStatic

    export var Text: TextStatic
    export type Text = TextStatic

    export var TextInput: TextInputStatic
    export type TextInput = TextInputStatic

    export var ToolbarAndroid: ToolbarAndroidStatic
    export type ToolbarAndroid = ToolbarAndroidStatic

    export var TouchableHighlight: TouchableHighlightStatic
    export type TouchableHighlight = TouchableHighlightStatic

    export var TouchableNativeFeedback: TouchableNativeFeedbackStatic
    export type TouchableNativeFeedback = TouchableNativeFeedbackStatic

    export var TouchableOpacity: TouchableOpacityStatic
    export type TouchableOpacity = TouchableOpacityStatic

    export var TouchableWithoutFeedback: TouchableWithoutFeedbackStatic
    export type TouchableWithoutFeedback= TouchableWithoutFeedbackStatic

    export var View: ViewStatic
    export type View = ViewStatic

    export var ViewPagerAndroid: ViewPagerAndroidStatic
    export type ViewPagerAndroid = ViewPagerAndroidStatic

    export var WebView: WebViewStatic
    export type WebView = WebViewStatic


    //////////// APIS //////////////
    export var ActionSheetIOS: ActionSheetIOSStatic
    export type ActionSheetIOS = ActionSheetIOSStatic

    export var AdSupportIOS: AdSupportIOSStatic
    export type AdSupportIOS = AdSupportIOSStatic

    export var Alert: AlertStatic
    export type Alert = AlertStatic

    export var AlertIOS: AlertIOSStatic
    export type AlertIOS = AlertIOSStatic

    export var AppState : AppStateStatic;
    export type AppState = AppStateStatic;

    export var AppStateIOS: AppStateStatic
    export type AppStateIOS = AppStateStatic

    export var AsyncStorage: AsyncStorageStatic
    export type AsyncStorage = AsyncStorageStatic

    export var BackAndroid: BackAndroidStatic
    export type BackAndroid = BackAndroidStatic

    export var CameraRoll: CameraRollStatic
    export type CameraRoll = CameraRollStatic

    export var Clipboard: ClipboardStatic
    export type Clipboard = ClipboardStatic

    export var DatePickerAndroid: DatePickerAndroidStatic
    export type DatePickerAndroid = DatePickerAndroidStatic

    export var IntentAndroid: IntentAndroidStatic
    export type IntentAndroid = IntentAndroidStatic

    export var KeyboardAvoidingView: KeyboardAvoidingViewStatic
    export type KeyboardAvoidingView = KeyboardAvoidingViewStatic

    export var Linking: LinkingStatic
    export type Linking = LinkingStatic

    export var LinkingIOS: LinkingIOSStatic
    export type LinkingIOS = LinkingIOSStatic

    export var NetInfo: NetInfoStatic
    export type NetInfo = NetInfoStatic

    export var PanResponder: PanResponderStatic
    export type PanResponder = PanResponderStatic

    export var PushNotificationIOS: PushNotificationIOSStatic
    export type PushNotificationIOS = PushNotificationIOSStatic

    export var StatusBarIOS: StatusBarIOSStatic
    export type StatusBarIOS = StatusBarIOSStatic

    export var TimePickerAndroid: TimePickerAndroidStatic
    export type TimePickerAndroid = TimePickerAndroidStatic

    export var ToastAndroid: ToastAndroidStatic
    export type ToastAndroid = ToastAndroidStatic

    export var VibrationIOS: VibrationIOSStatic
    export type VibrationIOS = VibrationIOSStatic

    export var Vibration: VibrationStatic
    export type Vibration = VibrationStatic

    export var Dimensions: Dimensions;
    export var ShadowPropTypesIOS: ShadowPropTypesIOSStatic;

    export type NavigationExperimental = NavigationExperimentalStatic;
    export var NavigationExperimental: NavigationExperimentalStatic;

    export type NavigationContainer = NavigationContainerStatic;
    export var NavigationContainer: NavigationContainerStatic;

    export type NavigationRootContainer = NavigationRootContainerStatic;
    export var NavigationRootContainer: NavigationRootContainerStatic;

    export type NavigationReducer = NavigationReducerStatic;
    export var NavigationReducer: NavigationReducerStatic;

    export type Easing = EasingStatic;
    export var Easing: EasingStatic;

    //Native Modules written in ObjectiveC/Swift/Java exposed via the RCTBridge
    //See https://facebook.github.io/react-native/docs/native-modules-ios.html

    /**
     * Use:
     * <code>const MyModule = NativeModules.ModuleName</code>
     */
    export var NativeModules: any
    export var NativeAppEventEmitter: NativeAppEventEmitterStatic


    //////////// Plugins //////////////
    export interface ComponentInterface<P> {
        name?: string;
        displayName?: string;
        propTypes: P
    }

    export function requireNativeComponent<P>(
        viewName: string,
        componentInterface?: ComponentInterface<P>,
        extraConfig?: {nativeOnly: Object}
    ): React.ComponentClass<P>;

    //
    // /TODO: BGR: These are leftovers of the initial port that must be revisited
    //

    export var SegmentedControlIOS: SegmentedControlIOSStatic
    export type SegmentedControlIOS = SegmentedControlIOSStatic

    export var PixelRatio: PixelRatioStatic
    export var Platform: PlatformStatic
    export var DeviceEventEmitter: DeviceEventEmitterStatic
    export var DeviceEventSubscription: DeviceEventSubscriptionStatic
    export type DeviceEventSubscription = DeviceEventSubscriptionStatic
    export var InteractionManager: InteractionManagerStatic

    export var Geolocation: GeolocationStatic
    export type Geolocation = GeolocationStatic

    //////////////////////////////////////////////////////////////////////////
    //
    // Additional ( and controversial)
    //
    //////////////////////////////////////////////////////////////////////////

    export function __spread( target: any, ...sources: any[] ): any;

    export interface GlobalStatic {

        /**
         * Accepts a function as its only argument and calls that function before the next repaint.
         * It is an essential building block for animations that underlies all of the JavaScript-based animation APIs.
         * In general, you shouldn't need to call this yourself - the animation API's will manage frame updates for you.
         * @see https://facebook.github.io/react-native/docs/animations.html#requestanimationframe
         */
        requestAnimationFrame( fn: () => void ) : void;

    }

    //
    // Add-Ons
    //
    namespace addons {

        //FIXME: Documentation ?
        export interface TestModuleStatic {

            verifySnapshot: ( done: ( indicator?: any ) => void ) => void
            markTestPassed: ( indicator: any ) => void
            markTestCompleted: () => void
        }

        export var TestModule: TestModuleStatic
        export type TestModule = TestModuleStatic
    }
}

declare module "react-native" {
    import ReactNative = __React
    export = ReactNative
}

declare var global: __React.GlobalStatic

declare function require( name: string ): any

/**
 * This variable is set to true when react-native is running in Dev mode
 * Typical usage:
 * <code> if (__DEV__) console.log('Running in dev mode')</code>
 */
declare var __DEV__: boolean


