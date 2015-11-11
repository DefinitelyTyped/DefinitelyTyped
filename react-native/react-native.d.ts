// Type definitions for react-native 0.14
// Project: https://github.com/facebook/react-native
// Definitions by: Bruno Grieder <https://github.com/bgrieder>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// These definitions are meant to be used with the TSC compiler target set to ES6
//
// This work is based on an original work made by Bernd Paradies: https://github.com/bparadie
//
// WARNING: this work is very much beta:
//            -it is still missing react-native definitions
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
        then<TResult>( onfulfilled?: ( value: T ) => TResult | Promise<TResult>, onrejected?: ( reason: any ) => TResult | Promise<TResult> ): Promise<TResult>;

        /**
         * Attaches a callback for only the rejection of the Promise.
         * @param onrejected The callback to execute when the Promise is rejected.
         * @returns A Promise for the completion of the callback.
         */
        catch( onrejected?: ( reason: any ) => T | Promise<T> ): Promise<T>;


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
        new <T>( init: ( resolve: ( value?: T | Promise<T> ) => void, reject: ( reason?: any ) => void ) => void ): Promise<T>;

        <T>( init: ( resolve: ( value?: T | Promise<T> ) => void, reject: ( reason?: any ) => void ) => void ): Promise<T>;

        /**
         * Creates a Promise that is resolved with an array of results when all of the provided Promises
         * resolve, or rejected when any Promise is rejected.
         * @param values An array of Promises.
         * @returns A new Promise.
         */
        all<T>( values: (T | Promise<T>)[] ): Promise<T[]>;

        /**
         * Creates a Promise that is resolved with an array of results when all of the provided Promises
         * resolve, or rejected when any Promise is rejected.
         * @param values An array of values.
         * @returns A new Promise.
         */
        all( values: Promise<void>[] ): Promise<void>;

        /**
         * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
         * or rejected.
         * @param values An array of Promises.
         * @returns A new Promise.
         */
        race<T>( values: (T | Promise<T>)[] ): Promise<T>;

        /**
         * Creates a new rejected promise for the provided reason.
         * @param reason The reason the promise was rejected.
         * @returns A new rejected Promise.
         */
        reject( reason: any ): Promise<void>;

        /**
         * Creates a new rejected promise for the provided reason.
         * @param reason The reason the promise was rejected.
         * @returns A new rejected Promise.
         */
        reject<T>( reason: any ): Promise<T>;

        /**
         * Creates a new resolved promise for the provided value.
         * @param value A promise.
         * @returns A promise whose internal state matches the provided promise.
         */
        resolve<T>( value: T | Promise<T> ): Promise<T>;

        /**
         * Creates a new resolved promise .
         * @returns A resolved promise.
         */
        resolve(): Promise<void>;
    }

    // @see lib.es6.d.ts
    export var Promise: PromiseConstructor;

    // node_modules/react-tools/src/classic/class/ReactClass.js
    export interface ReactClass<D, P, S> {
        // TODO:
    }

    // see react-jsx.d.ts
    export function createElement<P>( type: React.ReactType,
                                      props?: P,
                                      ...children: React.ReactNode[] ): React.ReactElement<P>;


    export type Runnable = ( appParameters: any ) => void;

    export type AppConfig = {
        appKey: string;
        component: ReactClass<any, any, any>;
        run?: Runnable;
    }

    // https://github.com/facebook/react-native/blob/master/Libraries/AppRegistry/AppRegistry.js
    export class AppRegistry {
        static registerConfig( config: AppConfig[] ): void;

        static registerComponent( appKey: string, getComponentFunc: () => React.ComponentClass<any> ): string;

        static registerRunnable( appKey: string, func: Runnable ): string;

        static runApplication( appKey: string, appParameters: any ): void;
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

    /**
     * Flex Prop Types
     * @see https://facebook.github.io/react-native/docs/flexbox.html#proptypes
     * @see LayoutPropTypes.js
     */
    export interface FlexStyle {

        alignItems?: string;  //enum('flex-start', 'flex-end', 'center', 'stretch')
        alignSelf?: string// enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')
        borderBottomWidth?: number
        borderLeftWidth?: number
        borderRightWidth?: number
        borderTopWidth?: number
        borderWidth?: number
        bottom?: number
        flex?: number
        flexDirection?: string // enum('row', 'column')
        flexWrap?: string // enum('wrap', 'nowrap')
        height?: number
        justifyContent?: string // enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around')
        left?: number
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
        position?: string // enum('absolute', 'relative')
        right?: number
        top?: number
        width?: number
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
        // TODO:
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

    // @see https://facebook.github.io/react-native/docs/text.html#style
    export interface TextStyle extends FlexStyle {
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
    export interface TextProperties extends React.Props<TextProperties> {
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
        onLayout?: ( event: LayoutChangeEvent ) => void;

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

    export interface TextStatic extends React.ComponentClass<TextProperties> {

    }


    /**
     * IOS Specific properties for TextInput
     * @see https://facebook.github.io/react-native/docs/textinput.html#props
     */
    export interface TextInputIOSProperties {

        /**
         * If true, the text field will blur when submitted.
         * The default value is true.
         */
        blurOnSubmit?: boolean

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
         * enum('default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call')
         * Determines how the return key should look.
         */
        returnKeyType?: string

        /**
         * If true, all text will automatically be selected on focus
         */
        selectTextOnFocus?: boolean

        /**
         * //FIXME: require typing
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
        autoCapitalize?: string

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
        keyboardType?: string

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
        onChange?: (event: {nativeEvent: {text: string}}) => void

        /**
         * Callback that is called when the text input's text changes.
         * Changed text is passed as an argument to the callback handler.
         */
        onChangeText?: ( text: string ) => void

        /**
         * Callback that is called when text input ends.
         */
        onEndEditing?: (event: {nativeEvent: {text: string}}) => void

        /**
         * Callback that is called when the text input is focused
         */
        onFocus?: () => void

        /**
         * Invoked on mount and layout changes with {x, y, width, height}.
         */
        onLayout?: (event: {nativeEvent: {x: number, y: number, width: number, height: number}}) => void

        /**
         * Callback that is called when the text input's submit button is pressed.
         */
        onSubmitEditing?: (event: {nativeEvent: {text: string}}) => void

        /**
         * The string that will be rendered before text input has been entered
         */
        placeholder?: string

        /**
         * The text color of the placeholder string
         */
        placeholderTextColor?: string

        /**
         * If true, the text input obscures the text entered so that sensitive text like passwords stay secure.
         * The default value is false.
         */
        secureTextEntry?: boolean

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

    export interface TextInputStatic extends React.ComponentClass<TextInputProperties> {

    }

    export interface AccessibilityTraits {
        // TODO
    }

    // @see https://facebook.github.io/react-native/docs/view.html#style
    export interface ViewStyle extends FlexStyle, TransformsStyle {
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
    export interface ViewProperties extends React.Props<ViewStatic> {
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
        onLayout?: ( event: LayoutChangeEvent ) => void;

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

    export interface ViewStatic extends React.ComponentClass<ViewProperties> {

    }

    /**
     * @see https://facebook.github.io/react-native/docs/activityindicatorios.html#props
     */
    export interface AlertIOSProperties {
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
        onLayout?: ( event: LayoutChangeEvent ) => void;

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
    export interface SegmentedControlIOSProperties {
        /// TODO
    }

    /**
     * @see
     */
    export interface SwitchIOSProperties {
        /// TODO
    }


    export interface NavigatorIOSProperties extends React.Props<NavigatorIOSStatic> {

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
     * @see https://facebook.github.io/react-native/docs/activityindicatorios.html#props
     */
    export interface ActivityIndicatorIOSProperties extends React.Props<ActivityIndicatorIOSStatic> {

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
        size?: string

        style?: ViewStyle
    }

    export interface ActivityIndicatorIOSStatic extends React.ComponentClass<ActivityIndicatorIOSProperties> {
    }


    export interface DatePickerIOSProperties extends React.Props<DatePickerIOSStatic> {

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
        mode?: string

        /**
         * Date change handler.
         * This is called when the user changes the date or time in the UI.
         * The first and only argument is a Date object representing the new date and time.
         */
        onDateChange?: (newDate: Date) => void

        /**
         * Timezone offset in minutes.
         * By default, the date picker will use the device's timezone. With this parameter, it is possible to force a certain timezone offset.
         * For instance, to show times in Pacific Standard Time, pass -7 * 60.
         */
        timeZoneOffsetInMinutes?: number

    }

    export interface DatePickerIOSStatic extends React.ComponentClass<DatePickerIOSProperties> {
    }

    /**
     * @see https://facebook.github.io/react-native/docs/sliderios.html
     */
    export interface SliderIOSProperties extends React.Props<SliderIOSStatic> {
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
        onValueChange?: ( value: number ) => void;

        /**
         value number
         Initial value of the slider. The value should be between minimumValue and maximumValue, which default to 0 and 1 respectively. Default value is 0.

         This is not a controlled component, e.g. if you don't update the value, the component won't be reset to its inital value.
         */
        value?: number;
    }

    export interface SliderIOSStatic extends React.ComponentClass<SliderIOSProperties> {

    }

    /**
     * @see
     */
    export interface CameraRollProperties {
        /// TODO
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
        backgroundColor?: string
        borderColor?: string
        borderWidth?: number
        borderRadius?: number
        overflow?: string // enum('visible', 'hidden')
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
        capInsets?: {top: number, left: number, bottom: number, right: number}

        /**
         * A static image to display while downloading the final image off the network.
         */
        defaultSource?: {uri: string}

        /**
         * Invoked on load error with {nativeEvent: {error}}
         */
        onError?: ( error: {nativeEvent: any} ) => void

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
         * Determines how to resize the image when the frame doesn't match the raw image dimensions.
         *
         * enum('cover', 'contain', 'stretch')
         */
        resizeMode?: string;

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
    }


    /**
     * @see https://facebook.github.io/react-native/docs/listview.html#props
     */
    export interface ListViewProperties extends ScrollViewProperties, React.Props<ListViewStatic> {

        dataSource?: ListViewDataSource

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
        renderRow?: ( rowData: any, sectionID: string, rowID: string, highlightRow?: boolean ) => React.ReactElement<any>


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
        renderSectionHeader?: ( sectionData: any, sectionId: string ) => React.ReactElement<any>


        /**
         * (sectionID, rowID, adjacentRowHighlighted) => renderable
         * If provided, a renderable component to be rendered as the separator below each row
         * but not the last row if there is a section header below.
         * Take a sectionID and rowID of the row above and whether its adjacent row is highlighted.
         */
        renderSeparator?: ( sectionID: string, rowID: string, adjacentRowHighlighted?: boolean ) => React.ReactElement<any>

        /**
         * How early to start rendering rows before they come on screen, in
         * pixels.
         */
        scrollRenderAheadDistance?: number
    }

    export interface ListViewStatic extends React.ComponentClass<ListViewProperties> {
        DataSource: ListViewDataSource;
    }


    /**
     * @see https://facebook.github.io/react-native/docs/touchablewithoutfeedback.html
     */
    export interface TouchableWithoutFeedbackProperties {
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


    export interface TouchableWithoutFeedbackProps extends TouchableWithoutFeedbackProperties, React.Props<TouchableWithoutFeedbackStatic> {

    }

    export interface TouchableWithoutFeedbackStatic extends React.ComponentClass<TouchableWithoutFeedbackProps> {

    }


    /**
     * @see https://facebook.github.io/react-native/docs/touchablehighlight.html#props
     */
    export interface TouchableHighlightProperties extends TouchableWithoutFeedbackProperties, React.Props<TouchableHighlightStatic> {
        /**
         * activeOpacity number
         *
         * Determines what the opacity of the wrapped view should be when touch is active.
         */
        activeOpacity?: number

        /**
         * onHideUnderlay function
         *
         * Called immediately after the underlay is hidden
         */

        onHideUnderlay?: () => void


        /**
         * onShowUnderlay function
         *
         * Called immediately after the underlay is shown
         */
        onShowUnderlay?: () => void

        /**
         * @see https://facebook.github.io/react-native/docs/view.html#style
         */
        style?: ViewStyle


        /**
         * underlayColor string
         *
         * The color of the underlay that will show through when the touch is active.
         */
        underlayColor?: string

    }

    export interface TouchableHighlightStatic extends React.ComponentClass<TouchableHighlightProperties> {
    }


    /**
     * @see https://facebook.github.io/react-native/docs/touchableopacity.html#props
     */
    export interface TouchableOpacityProperties extends TouchableWithoutFeedbackProperties, React.Props<TouchableOpacityStatic> {
        /**
         * activeOpacity number
         *
         * Determines what the opacity of the wrapped view should be when touch is active.
         */
        activeOpacity?: number;
    }

    export interface TouchableOpacityStatic extends React.ComponentClass<TouchableOpacityProperties> {
    }


    export interface LeftToRightGesture {

    }

    export interface AnimationInterpolator {

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
        FloatFromBottom: SceneConfig;
        FloatFromRight: SceneConfig;
        PushFromRight: SceneConfig;
        FloatFromLeft: SceneConfig;
        HorizontalSwipeJump: SceneConfig;
    }

    export interface Route {
        component?: ComponentClass<ViewProperties>
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
         * Will be invoked with the route and should return a scene configuration object
         * @param route
         */
        configureScene?: ( route: Route ) => SceneConfig
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
        BreadcrumbNavigationBar: NavigatorStatic.BreadcrumbNavigationBarStatic

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
        create<T>( styles: T ): T;
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
        cloneWithRows<T>( dataBlob: Array<any> | {[key: string]: any}, rowIdentities?: Array<string> ): ListViewDataSource

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
        cloneWithRowsAndSections( dataBlob: Array<any> | {[key: string]: any}, sectionIdentities?: Array<string>, rowIdentities?: Array<Array<string>> ): ListViewDataSource

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
     * @see
     */
    export interface TabBarItemProperties {

    }

    export interface TabBarItem extends React.ComponentClass<TabBarItemProperties> {
    }

    /**
     * @see
     */
    export interface TabBarIOSProperties {
    }

    export interface TabBarIOSStatic extends React.ComponentClass<TabBarIOSProperties> {
        Item: TabBarItem;
    }

    export interface CameraRollFetchParams {
        first: number;
        groupTypes: string;
        after?: string;
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

    export interface CameraRollStatic extends React.ComponentClass<CameraRollProperties> {
        getPhotos( fetch: CameraRollFetchParams,
                   onAsset: ( assetInfo: CameraRollAssetInfo ) => void,
                   logError: ()=> void ): void;
    }

    export interface PanHandlers {

    }

    export interface PanResponderEvent {

    }

    export interface PanResponderGestureState {
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
    export interface PanResponderCallbacks {
        onMoveShouldSetPanResponder?: ( e: PanResponderEvent, gestureState: PanResponderGestureState ) => boolean;
        onStartShouldSetPanResponder?: ( e: PanResponderEvent, gestureState: PanResponderGestureState ) => void;
        onPanResponderGrant?: ( e: PanResponderEvent, gestureState: PanResponderGestureState ) => void;
        onPanResponderMove?: ( e: PanResponderEvent, gestureState: PanResponderGestureState ) => void;
        onPanResponderRelease?: ( e: PanResponderEvent, gestureState: PanResponderGestureState ) => void;
        onPanResponderTerminate?: ( e: PanResponderEvent, gestureState: PanResponderGestureState ) => void;

        onMoveShouldSetPanResponderCapture?: ( e: PanResponderEvent, gestureState: PanResponderGestureState ) => boolean;
        onStartShouldSetPanResponderCapture?: ( e: PanResponderEvent, gestureState: PanResponderGestureState ) => boolean;
        onPanResponderReject?: ( e: PanResponderEvent, gestureState: PanResponderGestureState ) => void;
        onPanResponderStart?: ( e: PanResponderEvent, gestureState: PanResponderGestureState ) => void;
        onPanResponderEnd?: ( e: PanResponderEvent, gestureState: PanResponderGestureState ) => void;
        onPanResponderTerminationRequest?: ( e: PanResponderEvent, gestureState: PanResponderGestureState ) => void;
    }

    export interface PanResponderInstance {
        panHandlers: PanHandlers;
    }

    export interface PanResponderStatic {
        create( callbacks: PanResponderCallbacks ): PanResponderInstance;
    }

    export interface PixelRatioStatic {
        get(): number;
    }

    export interface DeviceEventSubscriptionStatic {
        remove(): void;
    }

    export interface DeviceEventEmitterStatic {
        addListener<T>( type: string, onReceived: ( data: T ) => void ): DeviceEventSubscription;
    }

    // Used by Dimensions below
    export interface ScaledSize {
        width: number;
        height: number;
        scale: number;
    }

    // @see https://facebook.github.io/react-native/docs/asyncstorage.html#content
    export interface AsyncStorageStatic {
        getItem( key: string, callback?: ( error?: Error, result?: string ) => void ): Promise<string>;
        setItem( key: string, value: string, callback?: ( error?: Error ) => void ): Promise<string>;
        removeItem( key: string, callback?: ( error?: Error ) => void ): Promise<string>;
        mergeItem( key: string, value: string, callback?: ( error?: Error ) => void ): Promise<string>;
        clear( callback?: ( error?: Error ) => void ): Promise<string>;
        getAllKeys( callback?: ( error?: Error, keys?: string[] ) => void ): Promise<string>;
        multiGet( keys: string[], callback?: ( errors?: Error[], result?: string[][] ) => void ): Promise<string>;
        multiSet( keyValuePairs: string[][], callback?: ( errors?: Error[] ) => void ): Promise<string>;
        multiRemove( keys: string[], callback?: ( errors?: Error[] ) => void ): Promise<string>;
        multiMerge( keyValuePairs: string[][], callback?: ( errors?: Error[] ) => void ): Promise<string>;
    }

    export interface InteractionManagerStatic {
        runAfterInteractions( fn: () => void ): void;
    }


    export interface ScrollViewStyle extends FlexStyle, TransformsStyle {

        backfaceVisibility?:string //enum('visible', 'hidden')
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
        borderStyle?: string //enum('solid', 'dotted', 'dashed')
        borderWidth?: number
        borderTopWidth?: number
        borderRightWidth?: number
        borderBottomWidth?: number
        borderLeftWidth?: number
        opacity?: number
        overflow?: string //enum('visible', 'hidden')
        shadowColor?: string
        shadowOffset?: {width: number; height: number}
        shadowOpacity?: number
        shadowRadius?: number
    }

    export interface  EdgeInsetsProperties {
        top: number
        left: number
        bottom: number
        right: number
    }

    export interface  PointProperties {
        x: number
        y: number
    }

    export interface ScrollViewIOSProperties {

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
        contentInset?: EdgeInsetsProperties // zeros

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
        decelerationRate?: number

        /**
         * When true the ScrollView will try to lock to only vertical or horizontal
         * scrolling while dragging.  The default value is false.
         */
        directionalLockEnabled?: boolean

        /**
         * The maximum allowed zoom scale. The default value is 1.0.
         */
        maximumZoomScale?: number

        /**
         * The minimum allowed zoom scale. The default value is 1.0.
         */
        minimumZoomScale?: number

        /**
         * Called when a scrolling animation ends.
         */
        onScrollAnimationEnd?: () => void

        /**
         * When true the scroll view stops on multiples of the scroll view's size
         * when scrolling. This can be used for horizontal pagination. The default
         * value is false.
         */
        pagingEnabled?: boolean

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
        scrollIndicatorInsets?: EdgeInsetsProperties //zeroes

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

    export interface ScrollViewProperties extends ScrollViewIOSProperties {

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
        onScroll?: () => void

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
    }

    export interface ScrollViewProps extends ScrollViewProperties, React.Props<ScrollViewStatic> {

    }

    interface ScrollViewStatic extends React.ComponentClass<ScrollViewProps> {

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

    export interface AppStateIOSStatic {
        currentState: string;
        addEventListener( type: string, listener: ( state: string ) => void ): void;
        removeEventListener( type: string, listener: ( state: string ) => void ): void;
    }

    // exported singletons:
    // export var AppRegistry: AppRegistryStatic;


    export var ActivityIndicatorIOS: ActivityIndicatorIOSStatic;
    export type ActivityIndicatorIOS = ActivityIndicatorIOSStatic;

    export var AsyncStorage: AsyncStorageStatic;
    export type AsyncStorage = AsyncStorageStatic;

    export var CameraRoll: CameraRollStatic;
    export type CameraRoll = CameraRollStatic;

    export var DatePickerIOS: DatePickerIOSStatic
    export type DatePickerIOS = DatePickerIOSStatic

    export var Image: ImageStatic;
    export type Image = ImageStatic;

    export var ListView: ListViewStatic;
    export type ListView = ListViewStatic;

    export var Navigator: NavigatorStatic;
    export type Navigator = NavigatorStatic;

    export var NavigatorIOS: NavigatorIOSStatic;
    export type NavigatorIOS = NavigatorIOSStatic;

    export var SliderIOS: SliderIOSStatic;
    export type SliderIOS = SliderIOSStatic;

    export var ScrollView: ScrollViewStatic
    export type ScrollView = ScrollViewStatic

    export var StyleSheet: StyleSheetStatic;
    export type StyleSheet = StyleSheetStatic;

    export var TabBarIOS: TabBarIOSStatic;
    export type TabBarIOS = TabBarIOSStatic;

    export var Text: TextStatic;
    export type Text = TextStatic;

    export var TextInput: TextInputStatic
    export type TextInput = TextInputStatic

    export var TouchableHighlight: TouchableHighlightStatic;
    export type TouchableHighlight = TouchableHighlightStatic;

    export var TouchableOpacity: TouchableOpacityStatic;
    export type TouchableOpacity = TouchableOpacityStatic;

    export var TouchableWithoutFeedback: TouchableWithoutFeedbackStatic;
    export type TouchableWithoutFeedback= TouchableWithoutFeedbackStatic;

    export var View: ViewStatic;
    export type View = ViewStatic;

    export var AlertIOS: React.ComponentClass<AlertIOSProperties>;
    export var SegmentedControlIOS: React.ComponentClass<SegmentedControlIOSProperties>;
    export var SwitchIOS: React.ComponentClass<SwitchIOSProperties>;

    export var PixelRatio: PixelRatioStatic;
    export var DeviceEventEmitter: DeviceEventEmitterStatic;
    export var DeviceEventSubscription: DeviceEventSubscriptionStatic;
    export type DeviceEventSubscription = DeviceEventSubscriptionStatic;
    export var InteractionManager: InteractionManagerStatic;
    export var PanResponder: PanResponderStatic;
    export var AppStateIOS: AppStateIOSStatic;


    //react re-exported
    export type ReactType = React.ReactType;

    export interface ReactElement<P> extends React.ReactElement<P> {}

    export interface ClassicElement<P> extends React.ClassicElement<P> {}

    export interface DOMElement<P> extends React.DOMElement<P> {}

    export type HTMLElement =React.HTMLElement;
    export type SVGElement = React.SVGElement;

    //
    // Factories
    // ----------------------------------------------------------------------

    export interface Factory<P> extends React.Factory<P> {}

    export interface ClassicFactory<P> extends React.ClassicFactory<P> {}

    export interface DOMFactory<P> extends React.DOMFactory<P> {}

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

    export function createClass<P, S>( spec: React.ComponentSpec<P, S> ): React.ClassicComponentClass<P>;

    export function createFactory<P>( type: string ): React.DOMFactory<P>;
    export function createFactory<P>( type: React.ClassicComponentClass<P> | string ): React.ClassicFactory<P>;
    export function createFactory<P>( type: React.ComponentClass<P> ): React.Factory<P>;

    export function createElement<P>( type: string,
                                      props?: P,
                                      ...children: React.ReactNode[] ): React.DOMElement<P>;
    export function createElement<P>( type: React.ClassicComponentClass<P> | string,
                                      props?: P,
                                      ...children: React.ReactNode[] ): React.ClassicElement<P>;
    export function createElement<P>( type: React.ComponentClass<P>,
                                      props?: P,
                                      ...children: React.ReactNode[] ): React.ReactElement<P>;

    export function cloneElement<P>( element: React.DOMElement<P>,
                                     props?: P,
                                     ...children: React.ReactNode[] ): React.DOMElement<P>;
    export function cloneElement<P>( element: React.ClassicElement<P>,
                                     props?: P,
                                     ...children: React.ReactNode[] ): React.ClassicElement<P>;
    export function cloneElement<P>( element: React.ReactElement<P>,
                                     props?: P,
                                     ...children: React.ReactNode[] ): React.ReactElement<P>;

    export function isValidElement( object: {} ): boolean;

    export var DOM: React.ReactDOM;
    export var PropTypes: React.ReactPropTypes;
    export var Children: React.ReactChildren;

    //
    // Component API
    // ----------------------------------------------------------------------

    // Base component for plain JS classes
    export class Component<P, S> extends React.Component<P,S> {}

    export interface ClassicComponent<P, S> extends React.ClassicComponent<P,S> {}

    export interface DOMComponent<P> extends ClassicComponent<P, any> {
        tagName: string;
    }

    export type HTMLComponent = React.HTMLComponent;
    export type SVGComponent = React.SVGComponent

    export interface ChildContextProvider<CC> extends React.ChildContextProvider<CC> {}

    //
    // Class Interfaces
    // ----------------------------------------------------------------------

    export interface ComponentClass<P> extends React.ComponentClass<P> {}

    export interface ClassicComponentClass<P> extends React.ClassicComponentClass<P> {}

    //
    // Component Specs and Lifecycle
    // ----------------------------------------------------------------------

    export interface ComponentLifecycle<P, S> extends React.ComponentLifecycle<P,S> {}

    export interface Mixin<P, S> extends React.Mixin<P,S> {}

    export interface ComponentSpec<P, S> extends React.ComponentSpec<P,S> {}

    //
    // Event System
    // ----------------------------------------------------------------------

    export interface SyntheticEvent extends React.SyntheticEvent {}

    export interface DragEvent extends React.DragEvent {}

    export interface ClipboardEvent extends React.ClipboardEvent {}

    export interface KeyboardEvent extends React.KeyboardEvent {}


    export interface FocusEvent extends React.FocusEvent {}

    export interface FormEvent extends React.FormEvent {}

    export interface MouseEvent extends React.MouseEvent {}

    export interface TouchEvent extends React.TouchEvent {}

    export interface UIEvent extends React.UIEvent {}

    export interface WheelEvent extends React.WheelEvent {}

    //
    // Event Handler Types
    // ----------------------------------------------------------------------

    export interface EventHandler<E extends React.SyntheticEvent> extends React.EventHandler<E> {}

    export interface DragEventHandler extends React.DragEventHandler {}
    export interface ClipboardEventHandler extends React.ClipboardEventHandler {}
    export interface KeyboardEventHandler extends React.KeyboardEventHandler {}
    export interface FocusEventHandler extends React.FocusEventHandler {}
    export interface FormEventHandler extends React.FormEventHandler {}
    export interface MouseEventHandler extends React.MouseEventHandler {}
    export interface TouchEventHandler extends React.TouchEventHandler {}
    export interface UIEventHandler extends React.UIEventHandler {}
    export interface WheelEventHandler extends React.WheelEventHandler {}

    //
    // Props / DOM Attributes
    // ----------------------------------------------------------------------

    export interface Props<T> extends React.Props<T> {}

    export interface DOMAttributesBase<T> extends React.DOMAttributesBase<T> {}

    export interface DOMAttributes extends React.DOMAttributes {}

    // This interface is not complete. Only properties accepting
    // unitless numbers are listed here (see CSSProperty.js in React)
    export interface CSSProperties extends React.CSSProperties {}

    export interface HTMLAttributesBase<T> extends React.HTMLAttributesBase<T> {}

    export interface HTMLAttributes extends React.HTMLAttributes {}

    export interface SVGElementAttributes extends React.SVGElementAttributes {}

    export interface SVGAttributes extends React.SVGAttributes {}

    //
    // React.DOM
    // ----------------------------------------------------------------------

    export interface ReactDOM extends React.ReactDOM {}

    //
    // React.PropTypes
    // ----------------------------------------------------------------------

    export interface Validator<T> extends React.Validator<T> {}

    export interface Requireable<T> extends React.Requireable<T> {}

    export interface ValidationMap<T> extends React.ValidationMap<T> {}

    export interface ReactPropTypes extends React.ReactPropTypes {}

    //
    // React.Children
    // ----------------------------------------------------------------------

    export interface ReactChildren extends React.ReactChildren {}

    //
    // Browser Interfaces
    // https://github.com/nikeee/2048-typescript/blob/master/2048/js/touch.d.ts
    // ----------------------------------------------------------------------

    export interface AbstractView extends React.AbstractView {}

    export interface Touch extends React.Touch {}

    export interface TouchList extends React.TouchList {}

    //
    // Additional ( and controversial)
    //

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

            verifySnapshot: (done: (indicator?: any) => void) => void
            markTestPassed: (indicator: any) => void
            markTestCompleted: () => void
        }

        export var TestModule: TestModuleStatic
        export type TestModule = TestModuleStatic
    }


}

declare module "react-native" {

    export default ReactNative
}


declare module "Dimensions" {
    import React from 'react-native';

    interface Dimensions {
        get( what: string ): React.ScaledSize;
    }

    var ExportDimensions: Dimensions;
    export = ExportDimensions;
}

declare var global: ReactNative.GlobalStatic

declare function require( name: string ): any
