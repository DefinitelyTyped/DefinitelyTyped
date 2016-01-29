// Type definitions for react-native 0.14
// Project: https://github.com/facebook/react-native
// Definitions by: Bruno Grieder <https://github.com/bgrieder>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// USING: these definitions are meant to be used with the TSC compiler target set to ES6
//
// USAGE EXAMPLES: check the RNTSExplorer project at https://github.com/bgrieder/RNTSExplorer
//
// CONTRIBUTING: please open pull requests and make sure that the changes do not break RNTSExplorer (they should not)
// Do not hesitate to open a pull request against RNTSExplorer to provide an example for a case not covered by the current App
//
// CREDITS: This work is based on an original work made by Bernd Paradies: https://github.com/bparadie
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// <reference path="../react/react.d.ts" />

//so we know what is "original" React
import React = __React;

//react-native "extends" react
declare namespace  __React {


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
        done( callback?: ( value: T ) => void ): void;
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
    export interface NativeComponent {
        setNativeProps: ( props: Object ) => void
    }

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
    export class AppRegistry {
        static registerConfig( config: AppConfig[] ): void;

        static registerComponent( appKey: string, getComponentFunc: () => React.ComponentClass<any> ): string;

        static registerRunnable( appKey: string, func: Runnable ): string;

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
    export interface TextStyle extends ViewStyle {
        color?: string
        fontFamily?: string
        fontSize?: number
        fontStyle?: string // 'normal' | 'italic';
        fontWeight?: string // enum("normal", 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
        letterSpacing?: number
        lineHeight?: number
        textAlign?: string // enum("auto", 'left', 'right', 'center')
        textDecorationLine?: string // enum("none", 'underline', 'line-through', 'underline line-through')
        textDecorationStyle?: string // enum("solid", 'double', 'dotted', 'dashed')
        textDecorationColor?: string
        writingDirection?: string; //enum("auto", 'ltr', 'rtl')
        //containerBackgroundColor?: string
    }

    export interface TextPropertiesIOS {

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

    export interface TextInputStatic extends NativeComponent, React.ComponentClass<TextInputProperties> {
        blur: () => void
        focus: () => void
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
        pointerEvents?: string;

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
        javaScriptEnabledAndroid?: boolean
    }

    export interface WebViewPropertiesIOS {

        /**
         * Used for iOS only, sets whether the webpage scales to fit the view and the user can change the scale
         */
        scalesPageToFit?: boolean
    }

    /**
     * @see https://facebook.github.io/react-native/docs/webview.html#props
     */
    export interface WebViewProperties extends WebViewPropertiesAndroid, WebViewPropertiesIOS, React.Props<WebViewStatic> {

        automaticallyAdjustContentInsets?: boolean

        bounces?: boolean

        contentInset?: Insets

        html?: string

        /**
         * Sets the JS to be injected when the webpage loads.
         */
        injectedJavaScript?: string

        onNavigationStateChange?: ( event: NavState ) => void

        /**
         * Allows custom handling of any webview requests by a JS handler.
         * Return true or false from this method to continue loading the request.
         */
        onShouldStartLoadWithRequest?: () => boolean

        /**
         * view to show if there's an error
         */
        renderError?: () => ViewStatic

        /**
         * loading indicator to show
         */
        renderLoading?: () => ViewStatic

        scrollEnabled?: boolean

        startInLoadingState?: boolean

        style?: ViewStyle

        url: string
    }


    export interface WebViewStatic extends React.ComponentClass<WebViewProperties> {

        goBack: () => void
        goForward: () => void
        reload: () => void
    }


    /**
     * @see
     */
    export interface SegmentedControlIOSProperties {
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
        onDateChange?: ( newDate: Date ) => void

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
     * @see https://facebook.github.io/react-native/docs/pickerios.html
     * @see PickerIOS.ios.js
     */
    export interface PickerIOSProperties extends React.Props<PickerIOSStatic> {

        onValueChange?: ( value: string | number ) => void

        selectedValue?: string | number

        style?: ViewStyle
    }

    /**
     * @see https://facebook.github.io/react-native/docs/pickerios.html
     * @see PickerIOS.ios.js
     */
    export interface PickerIOSStatic extends React.ComponentClass<PickerIOSProperties> {

        Item: PickerIOSItemStatic
    }


    /**
     * @see https://facebook.github.io/react-native/docs/sliderios.html
     */
    export interface SliderIOSProperties extends React.Props<SliderIOSStatic> {

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
        capInsets?: Insets

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
        latitudeDelta: number
        longitudeDelta: number
    }

    export interface MapViewPropertiesIOS {

        /**
         * If false points of interest won't be displayed on the map.
         * Default value is true.
         */
        showsPointsOfInterest?: boolean
    }

    export interface MapViewProperties extends MapViewPropertiesIOS, Touchable, React.Props<MapViewStatic> {

        /**
         * Map annotations with title/subtitle.
         */
        annotations?: MapViewAnnotation[]

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
    }

    /**
     * @see https://facebook.github.io/react-native/docs/mapview.html#content
     */
    export interface MapViewStatic extends React.ComponentClass<MapViewProperties> {
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
         * //FIXME: not in doc but available in exmaples
         */
        style?: ViewStyle
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
    export interface TabBarItemProperties extends React.Props<TabBarItemStatic> {

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
        systemIcon: string

        /**
         * Text that appears under the icon. It is ignored when a system icon is defined.
         */
        title?: string

    }

    export interface TabBarItemStatic extends React.ComponentClass<TabBarItemProperties> {
    }

    /**
     * @see https://facebook.github.io/react-native/docs/tabbarios.html#props
     */
    export interface TabBarIOSProperties extends React.Props<TabBarIOSStatic> {

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
    }

    export interface TabBarIOSStatic extends React.ComponentClass<TabBarIOSProperties> {
        Item: TabBarItemStatic;
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

    export interface ScrollViewProperties extends ScrollViewIOSProperties, Touchable {

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


    //////////////////////////////////////////////////////////////////////////
    //
    // A P I s
    //
    //////////////////////////////////////////////////////////////////////////

    /**
     * //FIXME: no documentation - inferred from RCTACtionSheetManager.m
     */
    export interface ActionSheetIOSOptions {
        title?: string
        options?: string[]
        cancelButtonIndex?: number
        destructiveButtonIndex?: number
    }

    /**
     * //FIXME: no documentation - inferred from RCTACtionSheetManager.m
     */
    export interface ShareActionSheetIOSOptions {
        message?: string
        url?: string
    }

    /**
     * @see https://facebook.github.io/react-native/docs/actionsheetios.html#content
     * //FIXME: no documentation - inferred from RCTACtionSheetManager.m
     */
    export interface ActionSheetIOSStatic {
        showActionSheetWithOptions: ( options: ActionSheetIOSOptions, callback: ( buttonIndex: number ) => void ) => void
        showShareActionSheetWithOptions: ( options: ShareActionSheetIOSOptions, failureCallback: ( error: Error ) => void, successCallback: ( success: boolean, method: string ) => void ) => void
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
        alert: ( title: string, message?: string, buttons?: Array<AlertIOSButton>, type?: string ) => void
        prompt: ( title: string, value?: string, buttons?: Array<AlertIOSButton>, callback?: ( value?: string ) => void ) => void
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
    export interface AppStateIOSStatic {
        currentState: string
        addEventListener( type: string, listener: ( state: string ) => void ): void
        removeEventListener( type: string, listener: ( state: string ) => void ): void
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
         * @param successCallback Invoked with the value of tag on success.
         * @param errorCallback Invoked with error message on error.
         */
        saveImageWithTag( tag: string, successCallback: ( tag?: string ) => void, errorCallback: ( error: Error ) => void ): void

        /**
         * Invokes callback with photo identifier objects from the local camera roll of the device matching shape defined by getPhotosReturnChecker.
         *
         * @param {object} params See getPhotosParamChecker.
         * @param {function} callback Invoked with arg of shape defined by getPhotosReturnChecker on success.
         * @param {function} errorCallback Invoked with error message on error.
         */
        getPhotos( fetch: CameraRollFetchParams,
                   callback: ( assetInfo: CameraRollAssetInfo ) => void,
                   errorCallback: ( error: Error )=> void ): void;
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
    export interface NetInfoStatic extends FetchableListenable<string> {

        /**
         *
         * Available on all platforms.
         * Asynchronously fetch a boolean to determine internet connectivity.
         */
        isConnected: FetchableListenable<boolean>

        //FIXME: Documentation missing
        isConnectionMetered: any
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
         * Number of touches currently on screeen
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


    /**
     * Handle push notifications for your app, including permission handling and icon badge number.
     * @see https://facebook.github.io/react-native/docs/pushnotificationios.html#content
     *
     * //FIXME: BGR: The documentation seems completely off compared to the actual js implementation. I could never get the example to run
     */
    export interface PushNotificationIOSStatic {

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
        requestPermissions(): void

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
    export type StatusBarStyle = string

    /**
     * @enum('none','fade', 'slide')
     */
    type StatusBarAnimation = string


    /**
     * //FIXME: No documentation is available (although this is self explanatory)
     *
     * @see https://facebook.github.io/react-native/docs/statusbarios.html#content
     */
    export interface StatusBarIOSStatic {

        setStyle(style: StatusBarStyle, animated?: boolean): void

        setHidden(hidden: boolean, animation?: StatusBarAnimation): void

        setNetworkActivityIndicatorVisible(visible: boolean): void
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

    //////////////////////////////////////////////////////////////////////////
    //
    //  R E - E X P O R T S
    //
    //////////////////////////////////////////////////////////////////////////

    // export var AppRegistry: AppRegistryStatic;


    export var ActivityIndicatorIOS: ActivityIndicatorIOSStatic
    export type ActivityIndicatorIOS = ActivityIndicatorIOSStatic

    export var DatePickerIOS: DatePickerIOSStatic
    export type DatePickerIOS = DatePickerIOSStatic

    export var Image: ImageStatic
    export type Image = ImageStatic

    export var LayoutAnimation: LayoutAnimationStatic
    export type LayoutAnimation = LayoutAnimationStatic

    export var ListView: ListViewStatic
    export type ListView = ListViewStatic

    export var MapView: MapViewStatic
    export type MapView = MapViewStatic

    export var Navigator: NavigatorStatic
    export type Navigator = NavigatorStatic

    export var NavigatorIOS: NavigatorIOSStatic
    export type NavigatorIOS = NavigatorIOSStatic

    export var PickerIOS: PickerIOSStatic
    export type PickerIOS = PickerIOSStatic

    export var SliderIOS: SliderIOSStatic
    export type SliderIOS = SliderIOSStatic

    export var ScrollView: ScrollViewStatic
    export type ScrollView = ScrollViewStatic

    export var StyleSheet: StyleSheetStatic
    export type StyleSheet = StyleSheetStatic

    export var SwitchIOS: SwitchIOSStatic
    export type SwitchIOS = SwitchIOSStatic

    export var TabBarIOS: TabBarIOSStatic
    export type TabBarIOS = TabBarIOSStatic

    export var Text: TextStatic
    export type Text = TextStatic

    export var TextInput: TextInputStatic
    export type TextInput = TextInputStatic

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

    export var WebView: WebViewStatic
    export type WebView = WebViewStatic


    //////////// APIS //////////////
    export var ActionSheetIOS: ActionSheetIOSStatic
    export type ActionSheetIOS = ActionSheetIOSStatic

    export var AdSupportIOS: AdSupportIOSStatic
    export type AdSupportIOS = AdSupportIOSStatic

    export var AlertIOS: AlertIOSStatic
    export type AlertIOS = AlertIOSStatic

    export var AppStateIOS: AppStateIOSStatic
    export type AppStateIOS = AppStateIOSStatic

    export var AsyncStorage: AsyncStorageStatic
    export type AsyncStorage = AsyncStorageStatic

    export var CameraRoll: CameraRollStatic
    export type CameraRoll = CameraRollStatic

    export var NetInfo: NetInfoStatic
    export type NetInfo = NetInfoStatic

    export var PanResponder: PanResponderStatic
    export type PanResponder = PanResponderStatic

    export var PushNotificationIOS: PushNotificationIOSStatic
    export type PushNotificationIOS = PushNotificationIOSStatic

    export var StatusBarIOS: StatusBarIOSStatic
    export type StatusBarIOS = StatusBarIOSStatic

    export var VibrationIOS: VibrationIOSStatic
    export type VibrationIOS = VibrationIOSStatic


    //
    // /TODO: BGR: These are leftovers of the initial port that must be revisited
    //

    export var SegmentedControlIOS: React.ComponentClass<SegmentedControlIOSProperties>

    export var PixelRatio: PixelRatioStatic
    export var DeviceEventEmitter: DeviceEventEmitterStatic
    export var DeviceEventSubscription: DeviceEventSubscriptionStatic
    export type DeviceEventSubscription = DeviceEventSubscriptionStatic
    export var InteractionManager: InteractionManagerStatic

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


//TODO: BGR: this is a left-over from the initial port. Not sure it makes any sense
declare module "Dimensions" {
    import * as React from 'react-native';

    interface Dimensions {
        get( what: string ): React.ScaledSize;
    }

    var ExportDimensions: Dimensions;
    export = ExportDimensions;
}
