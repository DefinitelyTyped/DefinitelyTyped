// Type definitions for @hippy/react 2.13
// Project: http://hippyjs.org
// Definitions by: zeroyu <https://github.com/zerosrat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';
import * as ReactReconciler from 'react-reconciler';

//
// Hippy Event
// ----------------------------------------------------------------------

interface LayoutContent {
    /**
     * The position X of component
     */
    x: number;

    /**
     * The position Y of component
     */
    y: number;

    /**
     * The width of component
     */
    width: number;

    /**
     * The height of component
     */
    height: number;
}

interface LayoutEvent {
    /**
     * The event data of layout event
     */
    layout: LayoutContent;
}

interface TouchEvent {
    /**
     * Touch coordinate X
     */
    page_x: number;

    /**
     * Touch coordinate Y
     */
    page_y: number;
}

interface FocusEvent {
    /**
     * Focus status
     */
    focus: boolean;
}

/**
 * Event response from onTextChange of TextInput
 */
interface TextInputEvent {
    /**
     * The text content in TextInput
     */
    text: string;
}

/**
 * Event response from onHeaderPulling and onFooterPulling
 */
interface PullingEvent {
    /**
     * Dragging gap
     */
    contentOffset: number;
}

// type Type = string;
// type Props = any;
// type Container = number;
// type UpdatePayload = any;
// type Context = {};
// type TextInstance = number;

//
// Hippy Event
// ----------------------------------------------------------------------

interface LayoutableProps {
    /**
     * Invoked on mount and layout changes with:
     *
     * `{nativeEvent: { layout: {x, y, width, height}}}`
     *
     * This event is fired immediately once the layout has been calculated,
     * but the new layout may not yet be reflected on the screen
     * at the time the event is received, especially if a layout animation is in progress.
     *
     * @param {Object} evt - Layout event data
     * @param {number} evt.nativeEvent.x - The position X of component
     * @param {number} evt.nativeEvent.y - The position Y of component
     * @param {number} evt.nativeEvent.width - The width of component
     * @param {number} evt.nativeEvent.hegiht - The height of component
     */
    onLayout?(evt: LayoutEvent): void;
    onAttachedToWindow?(): void;
}

interface ClickableProps {
    /**
     * Called when the touch is released.
     */
    onClick?(): void;

    /**
     * Called when the touch with longer than about 1s is released.
     */
    onLongClick?(): void;

    onPressIn?(): void;
    onPressOut?(): void;
}

interface TouchableProps {
    /**
     * The touchdown event occurs when the user touches an component.
     *
     * @param {Object} evt - Touch event data
     * @param {number} evt.page_x - Touch coordinate X
     * @param {number} evt.page_y = Touch coordinate Y
     */
    onTouchDown?(evt: TouchEvent): void;

    /**
     * The touchmove event occurs when the user moves the finger across the screen.
     *
     * @param {Object} evt - Touch event data
     * @param {number} evt.page_x - Touch coordinate X
     * @param {number} evt.page_y = Touch coordinate Y
     */
    onTouchMove?(evt: TouchEvent): void;

    /**
     * The touchend event occurs when the user removes the finger from an component.
     *
     * @param {Object} evt - Touch event data
     * @param {number} evt.page_x - Touch coordinate X
     * @param {number} evt.page_y = Touch coordinate Y
     */
    onTouchEnd?(evt: TouchEvent): void;

    /**
     * The touchcancel event occurs when the touch event gets interrupted.
     *
     * @param {Object} evt - Touch event data
     * @param {number} evt.page_x - Touch coordinate X
     * @param {number} evt.page_y = Touch coordinate Y
     */
    onTouchCancel?(evt: TouchEvent): void;
}

//
// Hippy Style
// ----------------------------------------------------------------------

interface StyleObj {
    [key: string]: Style;
}
type Style = ViewStyle | TextStyle;

interface Transform {
    perspective?: number | Animation;
    rotate?: string | Animation;
    rotateX?: string | Animation;
    rotateY?: string | Animation;
    rotateZ?: string | Animation;
    scale?: number | Animation;
    scaleX?: number | Animation;
    scaleY?: number | Animation;
    translateX?: number | Animation;
    translateY?: number | Animation;
    skewX?: string | Animation;
    skewY?: string | Animation;
}

interface ViewStyle {
    collapsable?: boolean;
    backgroundColor?: string | number;
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    width?: number;
    height?: number;
    top?: number | Animation;
    left?: number | Animation;
    right?: number | Animation;
    bottom?: number | Animation;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    margin?: number;
    marginVertical?: number;
    marginHorizontal?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    padding?: number;
    paddingVertical?: number;
    paddingHorizontal?: number;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    borderWidth?: number;
    borderTopWidth?: number;
    borderRightWidth?: number;
    borderBottomWidth?: number;
    borderLeftWidth?: number;
    borderRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
    borderBottomLeftRadius?: number;
    borderBottomRightRadius?: number;
    borderColor?: string | number;
    borderTopColor?: string | number;
    borderLeftColor?: string | number;
    borderBottomColor?: string | number;
    borderRightColor?: string | number;
    borderStyle?: 'solid' | 'dotted' | 'dashed';
    boxShadowOpacity?: number;
    boxShadowRadius?: number;
    boxShadowColor?: string;
    boxShadowOffsetX?: number;
    boxShadowOffsetY?: number;
    fontSize?: number;
    position?: 'relative' | 'absolute';
    flexDirection?: 'row' | 'column';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justifyContent?:
        | 'start'
        | 'center'
        | 'end'
        | 'flex-start'
        | 'flex-end'
        | 'left'
        | 'right'
        | 'normal'
        | 'space-between'
        | 'space-around'
        | 'space-evenly'
        | 'stretch';
    alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
    alignSelf?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
    overflow?: 'hidden' | 'visible';
    flex?: any;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: true;
    zIndex?: number;
    shadowColor?: string;
    shadowOffset?: string;
    shadowOpacity?: number;
    shadowRadius?: string;
    tintColor?: string | number;
    tintColors?: string[] | number[] | null;
    underlineColorAndroid?: string;
    transform?: Transform[];
    collapse?: boolean;
    opacity?: number;
}

// interface RecursiveArray<T> extends Array<T | ReadonlyArray<T> | RecursiveArray<T>> {}
type GenericStyleProp<T> = T | T[];
// T | T[] -> T
type FlattenGenericStyle<Type> = Type extends GenericStyleProp<infer X> ? X : never;

type ViewStyleProp = GenericStyleProp<ViewStyle>;

declare type TextStyle = {
    /**
     * https://hippyjs.org/#/style/color
     */
    color?: string | number;
    colors?: string[] | number[];
    fontFamily?: string;
    fontSize?: number;
    // fontStyle?: 'normal' | 'italic',
    fontWeight?: ____FontWeight_Internal;
    lineHeight?: number;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
} & ViewStyle;
type ____FontWeight_Internal =
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
type TextStyleProp = GenericStyleProp<TextStyle>;

//
// Hippy React Components
// ----------------------------------------------------------------------

interface ImageSource {
    uri: string;
}
interface ImageProps extends LayoutableProps, ClickableProps, TouchableProps {
    /**
     * Single image source
     */
    src?: string;

    /**
     * Image source object
     */
    source?: ImageSource | ImageSource[];

    srcs?: string[];
    sources?: ImageSource[];

    /**
     * Image placeholder when image is loading.
     * Support base64 image only.
     */
    defaultSource?: string;

    /**
     * Fill color to the image
     */
    tintColor?: number | string;
    tintColors?: number[] | string[];

    /**
     * Image style when `Image` have other children.
     */
    imageStyle?: ViewStyleProp;

    /**
     * Image ref when `Image` have other children.
     */
    imageRef?: React.ReactNode;

    /**
     * Image resize mode, as same as containMode
     */
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';

    /**
     * When the image is resized, the corners of the size specified by capInsets
     * will stay a fixed size, but the center content and borders of the image will be stretched.
     * This is useful for creating resizable rounded buttons, shadows, and other resizable assets.
     */
    capInsets?: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };

    style: ViewStyleProp;

    /**
     * Invoked on `Image` is loaded.
     */
    onLoad?(): void;

    /**
     * Invoke on `Image` is end of loading.
     */
    onLoadEnd?(): void;

    /**
     * Invoke on `Image` is start to loading.
     */
    onLoadStart?(): void;

    /**
     * Invoke on loading of `Image` get error.
     *
     * @param {Object} evt - Loading error data.
     * @param {string} evt.nativeEvent.error - Loading error message.
     */
    onError?(evt: { nativeEvent: { error: string } }): void;

    /**
     * Invoke on Image is loading.
     *
     * @param {Object} evt - Image loading progress data.
     * @param {number} evt.nativeEvent.loaded - The image is loaded.
     * @param {number} evt.nativeEvent.total - The loadded progress.
     */
    onProgress?(evt: { nativeEvent: { loaded: number; total: number } }): void;
}
declare class Image extends React.Component<ImageProps> {
    static getSize: (
        uri: string,
        success: (width: number, height: number) => void,
        failure?: (err: typeof Error) => void,
    ) => void;
    static prefetch: (url: string) => void;
    static get resizeMode(): {
        contain: 'contain';
        cover: 'cover';
        stretch: 'stretch';
        center: 'center';
        repeat: 'repeat'; // iOS Only
    };
}

type DataItem = any;
interface ListViewProps extends LayoutableProps, ClickableProps, TouchableProps {
    /**
     * Render specific number of rows of data.
     * Set equal to dataShource.length in most case.
     */
    numberOfRows: number;

    /**
     * Data source
     */
    dataSource?: DataItem[];

    /**
     * Specfic how many data will render at first screen.
     */
    initialListSize?: number;

    /**
     * Scroll to offset after `ListView` with data rendered.
     */
    initialContentOffset?: number;

    /**
     * This controls how often the scroll event will be fired while scrolling
     * (as a time interval in ms). A lower number yields better accuracy for code
     * that is tracking the scroll position, but can lead to scroll performance
     * problems due to the volume of information being send over the bridge.
     * You will not notice a difference between values set between 1-16 as the JS run loop
     * is synced to the screen refresh rate. If you do not need precise scroll position tracking,
     * set this value higher to limit the information being sent across the bridge.
     *
     * The default value is zero, which results in the scroll event being sent only once
     * each time the view is scrolled.
     */
    scrollEventThrottle?: number;

    /**
     * When `true`, shows a horizon scroll indicator.
     * The default value is `true`.
     */
    showScrollIndicator?: boolean;
    preloadItemNumber?: number;

    /**
     * iOS only
     */
    bounces?: boolean;

    editable?: boolean;

    delText?: string;
    /**
     * Passing the data and returns the row component.
     *
     * @param {Object} data - Data for row rendering
     * @param {null} unknown - seems null.
     * @param {number} index - Index Of data.
     * @returns {React.Component}
     */
    renderRow?(
        data: DataItem,
        unknown?: any, // FIXME: What's the argument meaning?
        index?: number,
    ): React.ReactElement;

    renderPullHeader?(): React.ReactElement;

    renderPullFooter?(): React.ReactElement;

    /**
     * Each row have different type, it will be using at render recycle.
     *
     * @param {number} index - Index Of data.
     * @returns {string}
     */
    getRowType?(index: number): number;

    /**
     * Returns the style for specific index of row.
     *
     * @param {number} index - Index Of data.
     * @returns {Object}
     */
    getRowStyle?(index: number): Style;

    /**
     * Specfic the key of row, for better data diff
     * More info: https://reactjs.org/docs/lists-and-keys.html
     *
     * @param {number} index - Index Of data.
     * @returns {string}
     */
    getRowKey?(index: number): string;

    /**
     * Is the row should sticky after scrolling up.
     * @param {number} index - Index Of data.
     * @returns {boolean}
     */
    rowShouldSticky?(index: number): boolean;
    style?: ViewStyleProp;

    /**
     *  Called when the `ListView` is scrolling to bottom.
     */
    onEndReached?(): void;

    /**
     * the same with onEndReached
     */
    onLoadMore?(): void;

    /**
     *  Called when the row first layouting or layout changed.
     *
     * @param {Object} evt - Layout event data
     * @param {number} evt.nativeEvent.x - The position X of component
     * @param {number} evt.nativeEvent.y - The position Y of component
     * @param {number} evt.nativeEvent.width - The width of component
     * @param {number} evt.nativeEvent.hegiht - The height of component
     * @param {number} index - Index of data.
     */
    onRowLayout?(evt: LayoutEvent, index: number): void;

    /**
     * Called when the momentum scroll starts (scroll which occurs as the ListView starts gliding).
     */
    onMomentumScrollBegin?(): void;

    /**
     * Called when the momentum scroll ends (scroll which occurs as the ListView glides to a stop).
     */
    onMomentumScrollEnd?(): void;

    /**
     * Fires at most once per frame during scrolling.
     * The frequency of the events can be controlled using the `scrollEventThrottle` prop.
     *
     * @param {Object} evt - Scroll event data.
     * @param {number} evt.contentOffset.x - Offset X of scrolling.
     * @param {number} evt.contentOffset.y - Offset Y of scrolling.
     */
    onScroll?(evt: { contentOffset: { x: number; y: number } }): void; // FIXME: TS compile error.

    /**
     * Called when the user begins to drag the scroll view.
     */
    onScrollBeginDrag?(): void;

    /**
     * Called when the user stops dragging the scroll view and it either stops or begins to glide.
     */
    onScrollEndDrag?(): void;

    /**
     * android expose ability flag
     */
    exposureEventEnabled?: boolean;

    /**
     * Called when user pulls the ListView down
     */
    onHeaderPulling?(): void;

    /**
     * Called when user release the pulling ListView
     */
    onHeaderReleased?(): void;

    /**
     * Called when user swipe up ListView to get more data on reaching the footer
     */
    onFooterPulling?(): void;

    /**
     * Called when user release the getting-more-data ListView
     */
    onFooterReleased?(): void;

    /**
     * Called when a whole new list item appears
     */
    onAppear?: (index: number) => void;

    /**
     * Called when a whole list item disappears
     */
    onDisappear?: (index: number) => void;

    /**
     * Called when a new list item will appear(1 px)
     */
    onWillAppear?: (index: number) => void;

    /**
     * Called when a new list item will disappear(1 px)
     */
    onWillDisappear?: (index: number) => void;

    onDelete?: (nativeEvent: { index: number }) => void;
}
declare class ListView extends React.Component<ListViewProps> {
    scrollToContentOffset: (xOffset: number, yOffset: number, animated: boolean) => void;
    scrollToIndex: (xIndex: number, yIndex: number, animated: boolean) => void;
    collapsePullHeader: () => void;
}

type ModalOrientation = 'portrait' | 'portrait-upside-down' | 'landscape' | 'landscape-left' | 'landscape-right';
interface ModalProps extends LayoutableProps, ClickableProps, TouchableProps {
    /**
     * Show or hide
     *
     * Default false
     */
    visible: boolean;

    /**
     * Primary key
     * > iOS only
     */
    primaryKey?: string;

    /**
     * Background is transparent or not
     * Default: true
     */
    transparent?: boolean;

    /**
     * Enable animation to popup or hide
     *
     * Default: true
     *
     * > Deprecated, use animationType to instance of
     */
    animated?: boolean;

    /**
     * Be text color in statusbar dark theme.
     * Default: false
     */
    darkStatusBarText?: boolean;

    /**
     * Make the Modal content be under of statusbar.
     * > Android Only
     *
     * Default: false
     */
    immersionStatusBar?: boolean;

    /**
     * Hide statusbar texts when Modal is showing
     *
     * Default: false
     */
    autoHideStatusBar?: boolean;

    /**
     * The animation effect when toggle
     *
     * Default: 'slide'
     */
    animationType?: 'none' | 'slide' | 'fade' | 'slide_fade';

    /**
     * Modal supports orientations
     */
    supportedOrientations?: ModalOrientation[];

    children?: React.ReactNode;

    style?: ViewStyleProp;

    /**
     * Trigger when hardware button pressed
     * > Android Only
     */
    onRequestClose?(): void;

    /**
     * Trigger when the Modal will show
     */
    onShow?(): void;

    /**
     * Trigger when the Modal will hide
     */
    onDismiss?(): void;

    /**
     * Trigger when the device orientation changed.
     */
    onOrientationChange?(): void;
}
declare class Modal extends React.Component<ModalProps> {}

interface PullFooterProps extends LayoutableProps {
    /**
     * Keep content displaying after onFooterReleased trigged.
     */
    sticky?: boolean;

    /**
     * Trigger when release the finger after pulling distance larger than the content height
     */
    onFooterReleased?(): void;

    /**
     * Trigger when pulling
     *
     * @param {Object} evt - Event data
     * @param {number} evt.contentOffset - Dragging distance
     */
    onFooterPulling?(evt: PullingEvent): void;
}
declare class PullFooter extends React.Component<PullFooterProps> {
    /**
     * Expand the PullView and display the content
     */
    expandPullFooter(): void;

    /**
     * Collapse the PullView and hide the content
     */
    collapsePullFooter(): void;
}

interface CollapsePullHeaderOptions {
    // time left to hide pullHeader after collapsePullHeader() is called, unit is ms
    time?: number;
}
interface PullHeaderProps extends LayoutableProps {
    /**
     * Trigger when release the finger after pulling distance larger than the content height
     */
    onHeaderReleased?(): void;

    /**
     * Trigger when pulling
     *
     * @param {Object} evt - Event data
     * @param {number} evt.contentOffset - Dragging distance
     */
    onHeaderPulling?(evt: PullingEvent): void;
}
declare class PullHeader extends React.Component<PullHeaderProps> {
    /**
     * Expand the PullView and display the content
     */
    expandPullHeader(): void;

    /**
     * Collapse the PullView and hide the content
     * @param {CollapsePullHeaderOptions} [options] - additional config for pull header
     */
    collapsePullHeader(options: CollapsePullHeaderOptions): void;
}

interface RefreshWrapperProps extends LayoutableProps, ClickableProps, TouchableProps {
    onRefresh?: () => void;
    getRefresh?: () => React.ReactElement;
    bounceTime?: number;
    children?: React.ReactNode;
    style?: ViewStyleProp;
}
declare class RefreshWrapper extends React.Component<RefreshWrapperProps> {
    refreshCompleted: () => void;
    startRefresh: () => void;
}

interface ScrollViewProps extends LayoutableProps, ClickableProps, TouchableProps {
    /**
     * When true, the scroll view's children are arranged horizontally in a row
     * instead of vertically in a column.
     * The default value is `false`.
     */
    horizontal?: boolean;

    /**
     * When `true`, the scroll view stops on multiples of the scroll view's size when scrolling.
     * This can be used for horizontal pagination.
     * Default: false
     */
    pagingEnabled?: boolean;

    /**
     * When `false`, the view cannot be scrolled via touch interaction.
     * Default: true
     *
     * > Note that the view can always be scrolled by calling scrollTo.
     */
    scrollEnabled?: boolean;

    /**
     * When `true`, shows a horizontal scroll indicator.
     * Default: true
     */
    showsHorizontalScrollIndicator?: boolean;

    /**
     * When `true`, shows a vertical scroll indicator.
     * Default: true
     */
    showsVerticalScrollIndicator?: boolean;

    /**
     * These styles will be applied to the scroll view content container which wraps all
     * of the child views.
     */
    contentContainerStyle?: ViewStyleProp;

    /**
     * This controls how often the scroll event will be fired while scrolling
     * (as a time interval in ms). A lower number yields better accuracy for code
     * that is tracking the scroll position, but can lead to scroll performance
     * problems due to the volume of information being send over the bridge.
     * You will not notice a difference between values set between 1-16 as the JS run loop
     * is synced to the screen refresh rate. If you do not need precise scroll position tracking,
     * set this value higher to limit the information being sent across the bridge.
     *
     * The default value is zero, which results in the scroll event being sent only once
     * each time the view is scrolled.
     */
    scrollEventThrottle?: number;

    /**
     * The amount by which the scroll view indicators are inset from the edges of the scroll view.
     * This should normally be set to the same value as the `contentInset`.
     *
     * Default: {top: 0, right: 0, bottom: 0, left: 0}.
     */
    scrollIndicatorInsets?: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };

    /**
     * iOS only
     */
    bounces?: boolean;

    /**
     * iOS only
     * https://developer.apple.com/documentation/uikit/uiscrollview/keyboarddismissmode
     */
    keyboardDismissMode?: 'none' | 'on-drag' | 'interactive' | 'onDrag';

    /**
     * Called when the momentum scroll starts (scroll which occurs as the ScrollView starts gliding).
     */
    onMomentumScrollBegin?(): void;

    /**
     * Called when the momentum scroll ends (scroll which occurs as the ScrollView glides to a stop).
     */
    onMomentumScrollEnd?(): void;

    /**
     * Fires at most once per frame during scrolling.
     * The frequency of the events can be controlled using the `scrollEventThrottle` prop.
     *
     * @param {Object} evt - Scroll event data.
     * @param {number} evt.contentOffset.x - Offset X of scrolling.
     * @param {number} evt.contentOffset.y - Offset Y of scrolling.
     */
    onScroll?(evt: {
        contentOffset: { x: number; y: number };
        contentInset: { top: number; left: number; bottom: number; right: number };
        contentSize: { width: number; height: number };
        layoutMeasurement: { width: number; height: number };
    }): void;

    /**
     * Called when the user begins to drag the scroll view.
     */
    onScrollBeginDrag?(): void;

    /**
     * Called when the user stops dragging the scroll view and it either stops or begins to glide.
     */
    onScrollEndDrag?(): void;
    children?: React.ReactNode;
    style?: ViewStyleProp;
}
declare class ScrollView extends React.Component<ScrollViewProps> {
    scrollTo(x: number, y: number, animated: boolean): void;
    scrollTo(param: { x: number; y: number; animated: boolean }): void;
    scrollToWithDuration: (x: number, y: number, duration: number) => void;
}

interface TextProps extends LayoutableProps, ClickableProps, TouchableProps {
    /**
     * Used to truncate the text with an ellipsis after computing the text layout,
     * including line wrapping, such that the total number of lines does not exceed this number.
     * This prop is commonly used with `ellipsizeMode`.
     */
    numberOfLines?: number;

    /**
     * Determines what the opacity of the wrapped view.
     */
    opacity?: number;

    /**
     * When numberOfLines is set, this prop defines how text will be truncated.
     * numberOfLines must be set in conjunction with this prop.
     * This can be one of the following values:
     *
     * * head - The line is displayed so that the end fits in the container
     *          and the missing text at the beginning of the line is indicated by an ellipsis glyph.
     *          e.g., "...wxyz
     * * middle - The line is displayed so that the beginning and
     *            end fit in the container and the missing text in the middle is indicated
     *            by an ellipsis glyph.
     *            e.g., "ab...yz"
     * * tail - The line is displayed so that the beginning fits in the container
     *          and the missing text at the end of the line is indicated by an ellipsis glyph.
     *          e.g., "abcd..."
     * * clip - Lines are not drawn past the edge of the text container.
     *
     * The default is `tail`.
     */
    ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
    children?: string[] | React.ReactNode;
    text?: string;
    style?: TextStyleProp;
}
declare class Text extends React.Component<TextProps> {}

interface KeyboardWillShowEvent {
    keyboardHeight: number;
}
interface TextInputProps extends LayoutableProps, ClickableProps, TouchableProps {
    /**
     * add in 2.11.5
     */
    caretColor?: string;

    /**
     * The value to show for the text input. TextInput is a controlled component,
     * which means the native value will be forced to match this value prop if provided.
     * For most uses, this works great, but in some cases this may cause flickering
     * - one common cause is preventing edits by keeping value the same.
     * In addition to setting the same value, either set editable={false},
     * or set/update maxLength to prevent unwanted edits without flicker.
     */
    value?: string;

    /**
     * Provides an initial value that will change when the user starts typing.
     * Useful for use-cases where you do not want to deal with listening to events
     * and updating the value prop to keep the controlled state in sync.
     */
    defaultValue?: string;

    /**
     * If `false`, text is not editable.
     *
     * Default: true
     */
    editable?: boolean;

    /**
     * Determines which keyboard to open, e.g.`numeric`.
     *
     * The following values work across platforms:
     * * `default`
     * * `number-pad`
     * * `decimal-pad`
     * * `numeric`
     * * `email-address`
     * * `phone-pad`
     * * `search`
     */
    keyboardType?: 'default' | 'numeric' | 'password' | 'email' | 'phone-pad' | 'search';

    /**
     * Determines how the return key should look.
     *
     * The following values work across platforms:
     * * `done`
     * * `go`
     * * `next`
     * * `search`
     * * `send`
     */
    returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';

    /**
     * Limits the maximum number of characters that can be entered.
     * Use this instead of implementing the logic in JS to avoid flicker.
     */
    maxLength?: number;

    /**
     * If `true`, the text input can be multiple lines. The default value is `false`.
     * It is important to note that this aligns the text to the top on iOS,
     * and centers it on Android. Use with textAlignVertical set to top for the same behavior
     * in both platforms.
     */
    multiline?: boolean;

    /**
     * Sets the number of lines for a TextInput.
     * Use it with multiline set to true to be able to fill the lines.
     */
    numberOfLines?: number;

    /**
     * If `true`, focuses the input on `componentDidMount`.
     *
     * Default: false
     */
    autoFocus?: boolean;

    /**
     * The color of the `TextInput` underline.
     */
    underlineColorAndroid?: string;

    /**
     * The string that will be rendered before text input has been entered.
     */
    placeholder?: number;

    /**
     * The text color of the placeholder string.
     */
    placeholderTextColor?: string;

    /**
     * The text colors array of the placeholder string.
     */
    placeholderTextColors?: string[];

    style?: TextStyleProp;

    /**
     * Callback that is called when the text input is blurred.
     */
    onBlur?(): void;

    /**
     * Callback that is called when text input ends.
     */
    onEndEditing?(): void;

    /**
     * Callback that is called when the text input's text changes.
     * Changed text is passed as a single string argument to the callback handler.
     *
     * @param {string} text - Text content.
     */
    onChangeText?(text: string): void;

    /**
     * Callback that is called when the text input's content size changes.
     *
     * @param {Object} evt - Content size change event data.
     * @param {number} evt.nativeEvent.contentSize.width - Width of content.
     * @param {number} evt.nativeEvent.contentSize.height - Height of content.
     */
    onContentSizeChange?(evt: {
        nativeEvent: {
            contentSize: { width: number; height: number };
        };
    }): void;

    /**
     * Callback that is called when keyboard popup
     *
     * @param {Object} evt - Keyboard will show event data.
     * @param {number} evt.keyboardHeight - Keyboard height.
     */
    onKeyboardWillShow?(evt: KeyboardWillShowEvent): void;

    /**
     * Callback that is called when the text input selection is changed.
     *
     * @param {Object} evt -  Selection change event data.
     * @param {number} evt.nativeEvent.selection.start - Start index of selection
     * @param {number} evt.nativeEvent.selection.end - End index of selection.
     */
    onSelectionChange?(evt: { nativeEvent: { selection: { start: number; end: number } } }): void;
}
declare class TextInput extends React.Component<TextInputProps> {
    blur(): void;
    clear(): void;
    focus(): void;
    getValue(): Promise<string>;
    hideInputMethod(): void;
    setValue(value: string): void;
}

interface ViewProps extends LayoutableProps, ClickableProps, TouchableProps {
    /**
     * Overrides the text that's read by the screen reader when the user interacts with the element.
     * By default, the label is constructed by traversing all the children and accumulating
     * all the Text nodes separated by space.
     */
    accessibilityLabel?: string;

    /**
     * When `true`, indicates that the view is an accessibility element.
     * By default, all the touchable elements are accessible.
     */
    accessible?: boolean;

    children?: React.ReactNode;

    /**
     * Views that are only used to layout their children or otherwise don't draw anything may be
     * automatically removed from the native hierarchy as an optimization.
     * Set this property to `false` to disable this optimization
     * and ensure that this `View` exists in the native view hierarchy.
     */
    collapsable?: false;

    /**
     * Specifies what should happen if content overflows an container's box.
     *
     * Default: iOS is 'visible', android is 'hidden'.
     */
    overflow?: 'visible' | 'hidden';
    focusable?: boolean;
    requestFocus?: boolean;
    nextFocusDownId?: string | ReactReconciler.Fiber;
    nextFocusUpId?: string | ReactReconciler.Fiber;
    nextFocusLeftId?: string | ReactReconciler.Fiber;
    nextFocusRightId?: string | ReactReconciler.Fiber;
    style?: ViewStyleProp;

    /**
     * The focus event occurs when the component is focused.
     *
     * @param {Object} evt - Focus event data
     * @param {boolean} evt.focus - Focus status
     */
    onFocus?(evt: FocusEvent): void;
    onAttachedToWindow?(): void;
}
declare class View extends React.Component<ViewProps> {}

interface PageSelectedEvent {
    position: number;
}
interface PageScrollEvent {
    position: number;
    offset: number;
}
type PageScrollState = 'idle' | 'dragging' | 'settling';
interface PageScrollStateEvent {
    pageScrollState: PageScrollState;
}
interface ViewPagerProps extends LayoutableProps {
    /**
     * Specific initial page after rendering.
     *
     * Default: 0
     */
    initialPage?: number;

    /**
     * When `false`, the view cannot be scrolled via touch interaction.
     *
     * Default: true
     *
     * > Note that the view can always be scrolled by calling setPage.
     */
    scrollEnabled?: boolean;

    horizontal?: boolean;

    /**
     * iOS only
     * https://developer.apple.com/documentation/uikit/uiscrollview/keyboarddismissmode
     */
    keyboardDismissMode?: 'none' | 'on-drag' | 'interactive' | 'onDrag';

    /**
     * Fires at most once per page is selected
     *
     * @param {Object} evt - Page selected event data.
     * @param {number} evt.position - Page index of selected.
     */
    onPageSelected?(evt: PageSelectedEvent): void;

    /**
     * Called when the page scroll starts.
     *
     * @param {Object} evt - Page scroll event data.
     * @param {number} evt.position - Page index that will be selected.
     * @param {number} evt.offset - Scroll offset while scrolling.
     */
    onPageScroll?(evt: PageScrollEvent): void;

    /**
     * Called when the page scroll state changed.
     *
     * @param {string} evt - Page scroll state event data
     * This can be one of the following values:
     *
     * * idle
     * * dragging
     * * settling
     */
    onPageScrollStateChanged?(evt: PageScrollState): void;
    children?: React.ReactNode[];
    style?: ViewStyleProp;
}
declare class ViewPager extends React.Component<ViewPagerProps> {
    setPage: (index: number) => void;
    setPageWithoutAnimation: (index: number) => void;
}

interface WaterfallViewProps {
    // Specific number of waterfall column
    numberOfColumns: number;

    // Number of total items
    numberOfItems: number;

    // Inner content padding
    contentInset?: { top?: number; left?: number; bottom?: number; right?: number };

    // Horizontal space between columns
    columnSpacing: number;

    // Vertical margin between items
    interItemSpacing: number;

    // Number of items to preload on reaching the listview end
    preloadItemNumber?: number;

    // Return banner view element
    renderBanner?(): React.ReactElement;

    // Declare whether PullHeader view exists
    containPullHeader?: boolean;

    // Declare whether PullFooter view exists
    containPullFooter?: boolean;

    // Scroll to offset after WaterfallView with data rendered
    initialContentOffset?: number;

    // Declare whether banner view exists
    containBannerView?: boolean;

    /**
     * Passing the data and returns the row component.
     *
     * @param {Object} data - Data for row rendering
     * @returns {(React.Component | undefined)}
     */
    renderItem?(data: DataItem): React.ReactElement;

    renderPullHeader?(): React.ReactElement;

    renderPullFooter?(): React.ReactElement;

    /**
     * Each row have different type, it will be using at render recycle.
     *
     * @param {number} index - Index Of data.
     * @returns {string}
     */
    getItemType?(index: number): number;

    /**
     * Returns the style for specific index of row.
     *
     * @param {number} index - Index Of data.
     * @returns {Object}
     */
    getItemStyle?(index: number): Style;

    /**
     * Specific the key of row, for better data diff
     * More info: https://reactjs.org/docs/lists-and-keys.html
     *
     * @param {number} index - Index Of data.
     * @returns {string}
     */
    getItemKey?(index: number): string;

    style?: Style;

    // Called when the WaterfallView is scrolling to bottom.
    onEndReached?(): void;

    /**
     *  Called when the row first layout or layout changed.
     *
     * @param {Object} evt - Layout event data
     * @param {number} evt.nativeEvent.x - The position X of component
     * @param {number} evt.nativeEvent.y - The position Y of component
     * @param {number} evt.nativeEvent.width - The width of component
     * @param {number} evt.nativeEvent.hegiht - The height of component
     * @param {number} index - Index of data.
     */
    onItemLayout?(evt: LayoutEvent, index: number): void;

    /**
     * Called when user scrolls WaterfallView
     *
     * @param {Object} evt - onScroll event
     * @param {number} evt.startEdgePos - Scrolled offset of List top edge
     * @param {number} evt.endEdgePos - Scrolled offset of List end edge
     * @param {number} evt.firstVisibleRowIndex - Index of the first list item at current visible screen
     * @param {number} evt.lastVisibleRowIndex - Index of the last list item at current visible screen
     * @param {Object[]} evt.visibleRowFrames - Frame info of current screen visible items
     * @param {number} evt.visibleRowFrames[].x - Current item's horizontal offset relative to ListView
     * @param {number} evt.visibleRowFrames[].y - Current item's vertical offset relative to ListView
     * @param {number} evt.visibleRowFrames[].width - Current item's width
     * @param {number} evt.visibleRowFrames[].height - Current item's height
     */
    onScroll?(evt: {
        startEdgePos: number;
        endEdgePos: number;
        firstVisibleRowIndex: number;
        lastVisibleRowIndex: number;
        visibleRowFrames: object;
    }): void;

    // Called when user pulls the ListView down
    onHeaderPulling?(): void;

    // Called when user release the pulling WaterfallView
    onHeaderReleased?(): void;

    // Called when user swipe up WaterfallView to get more data on reaching the footer
    onFooterPulling?(): void;

    // Called when user release the getting-more-data WaterfallView
    onFooterReleased?(): void;

    // Called on items exposed
    onExposureReport?(): void;

    // Called on waterfall ready
    onInitialListReady?(): void;
}
declare class WaterfallView extends React.Component<WaterfallViewProps> {
    scrollToIndex: (obj: { index: number; animated: boolean }) => void;
    scrollToContentOffset: (obj: { xOffset: number; yOffset: number; animated: boolean }) => void;
}

interface LoadEvent {
    url: string;
}
interface WebViewProps {
    /**
     * WebView loads url
     */
    source: {
        uri: string;
    };

    /**
     * Custom user agent.
     */
    userAgent?: string;

    /**
     * Request method
     */
    method?: 'get' | 'post';

    style?: ViewStyleProp;

    /**
     * Invoke when web page loaded.
     *
     * @param {Object} evt - Load event data
     * @param {string} evt.url - Web page url
     */
    onLoad?(evt: LoadEvent): void;

    /**
     * Invoke when web page start to load.
     *
     * @param {Object} evt - Load event data
     * @param {string} evt.url - Web page url
     */
    onLoadStart?(evt: LoadEvent): void;

    /**
     * Invoke when web page load completed
     *
     * @param {Object} evt - Load event data
     * @param {string} evt.url - Web page url
     */
    onLoadEnd(evt: LoadEvent): void;
}
declare class WebView extends React.Component<WebViewProps> {}

//
// Hippy React Event
// ----------------------------------------------------------------------

declare class HippyEventListener {
    eventName: string;

    listenerIds: number[];

    addCallback(handleFunc: () => void, callContext?: any): number;

    removeCallback(callbackId: number): void;

    unregister(): void;

    getSize(): number;
}

interface EventEmitterRevoker {
    callback: number | undefined;
    bindListener: HippyEventListener | undefined;
}

type HippyEventRevoker = EventEmitterRevoker;

//
// Hippy React Module
// ----------------------------------------------------------------------

type AnimationValue = number | { animationId: number } | string;
type AnimationCallback = () => void;
type AnimationDirection = 'left' | 'right' | 'top' | 'bottom' | 'center';

interface AnimationOptions {
    /**
     * Initial value at `Animation` start
     */
    startValue?: AnimationValue;

    /**
     * End value when `Animation` end.
     */
    toValue?: AnimationValue;

    /**
     * Animation execution time
     */
    duration?: number;

    /**
     * Timeline mode of animation
     */
    mode?: 'timing'; // TODO: fill more options

    /**
     * Delay starting time
     */
    delay?: number;

    /**
     * Value type, leave it blank in most case, except use rotate/color related
     * animation, set it to be 'deg' or 'color'.
     */
    valueType?: 'deg'; // TODO: fill more options

    /**
     * Animation start position
     */
    direction?: AnimationDirection;

    /**
     * Animation interpolation type
     */
    timingFunction?: 'linear' | 'ease' | 'bezier' | 'in' | 'ease-in' | 'out' | 'ease-out' | 'inOut' | 'ease-in-out';

    /**
     * Animation repeat times, use 'loop' to be always repeating.
     */
    repeatCount?: number | 'loop';

    inputRange?: any[];
    outputRange?: any[];
}
declare class Animation {
    constructor(option: AnimationOptions);

    animationId: number;
    start: () => void;
    pause: () => void;
    resume: () => void;
    destroy: () => void;
    updateAnimation: (options: AnimationOptions) => void;
    onAnimationStart?: (cb: AnimationCallback) => void;
    onAnimationEnd?: (cb: AnimationCallback) => void;
    onAnimationCancel?: (cb: AnimationCallback) => void;
    onAnimationRepeat?: (cb: AnimationCallback) => void;
}

interface AnimationChild {
    animation: Animation;
    follow: boolean;
}
interface AnimationSetOption {
    children: AnimationChild[];
    repeatCount: number | 'loop';
    virtual?: any; // TODO: What's it?
}
declare class AnimationSet {
    constructor(option: AnimationSetOption);
    start: () => void;
    pause: () => void;
    resume: () => void;
    destroy: () => void;
    onAnimationStart?: (cb: AnimationCallback) => void;
    onAnimationEnd?: (cb: AnimationCallback) => void;
    onAnimationCancel?: (cb: AnimationCallback) => void;
    onAnimationRepeat?: (cb: AnimationCallback) => void;
}

interface AsyncStorage {
    getAllKeys(): Promise<string[]>;
    getItem(key: string): Promise<string>;
    multiGet(keys: string[]): Promise<string[]>;
    multiRemove(keys: string[]): Promise<void>;
    multiSet(keys: { [key: string]: string | number }): Promise<void>;
    removeItem(key: string): Promise<void>;
    setItem(key: string, value: string | number): Promise<void>;
}
declare const AsyncStorage: AsyncStorage;

type EventListener = () => void;
interface BackAndroidRevoker {
    remove(): void;
}
interface BackAndroid {
    exitApp(): void;
    addListener(handler: EventListener): BackAndroidRevoker;
    removeListener(handler: EventListener): void;
    initEventListener(): void;
}
declare const BackAndroid: BackAndroid;

interface Clipboard {
    getString: () => Promise<string>;
    setString: (value: string) => void;
}
declare const Clipboard: Clipboard;

type logFn = (...value: string[]) => void;
interface ConsoleModule {
    log: logFn;
    info: logFn;
    warn: logFn;
    error: logFn;
}
declare const ConsoleModule: ConsoleModule;

interface Bridge {
    callNative(moduleName: string, methodName: string, ...args: any[]): void;
    callNativeWithCallbackId(moduleName: string, methodName: string, ...args: any[]): number;
    callNativeWithPromise<T>(moduleName: string, methodName: string, ...args: any[]): Promise<T>;
    removeNativeCallback(callbackId: number): void;
}
declare const callNative: Bridge['callNative'];
declare const callNativeWithCallbackId: Bridge['callNativeWithCallbackId'];
declare const callNativeWithPromise: Bridge['callNativeWithPromise'];
declare const removeNativeCallback: Bridge['removeNativeCallback'];

interface Dimensions {
    get(dim: 'window' | 'screen'): {
        height: number;
        width: number;
        scale: number;
        statusBarHeight: number;
        navigatorBarHeight: number;
    };
}
export const Dimensions: Dimensions;

interface EventListeners {
    [eventName: string]: HippyEventListener;
}
declare class HippyEventEmitter {
    hippyEventListeners: EventListeners;

    constructor(sharedListeners?: EventListeners);

    sharedListeners(): EventListeners;

    addListener(event: string, callback: (data?: any) => void, context?: any): void;

    removeAllListeners(event: string): void;

    emit(event: string, param: any): boolean;

    listenerSize(event: string): number;
}

type NetworkChangeEventData = any;
type NetworkInfoCallback = (data: NetworkChangeEventData) => void;
interface NetInfoRevoker {
    eventName: string;
    listener: NetworkInfoCallback | undefined;
}
interface NetInfo {
    addEventListener(eventName: string, handler: (event: { network_info: string }) => void): NetInfoRevoker;
    fetch(): Promise<any>;
    removeEventListener(eventName: string, handler: NetInfoRevoker | (() => void)): void;
}
export const NetInfo: NetInfo;

interface NetworkModule {
    getCookies(url: string): Promise<string>;
    setCookie(url: string, keyValue: string, expires?: string): Promise<void>;
}
export const NetworkModule: NetworkModule;

interface PixelRatio {
    get: () => number;
}
export const PixelRatio: PixelRatio;

interface Route {
    routeName: string;
    component?: string | React.FunctionComponent<any> | React.ComponentClass<any, any>;
    initProps?: any;
    animated?: boolean;
}
interface NavigatorProps {
    /**
     * Initial page option, the option object should contains.
     *
     * * {string} routeName - Router name
     * * {React.Component} component - Initial react component
     * * {Object} initProps - Initial props for initial react component
     * * {boolean} animated - Use animation effect to switch to new page
     */
    initialRoute: Route;
}
declare class Navigator extends React.Component<NavigatorProps> {}

interface Platform {
    OS: 'ios' | 'android';
}
export const Platform: Platform;

interface StyleSheet {
    create(styleObj: StyleObj): StyleObj;
}
export const StyleSheet: StyleSheet;

interface NodeMeta {
    skipAddToDom?: boolean;
    component: {
        name?: string;
        skipAddToDom?: boolean;
    };
}
interface ViewNode {
    nodeId: number;

    // Component meta information, such as native component will use.
    meta: NodeMeta;

    // Will change to be true after insert into Native dom.
    _isMounted: boolean;

    // Index number in children, will update at traverseChildren method.
    index: number;

    // Relation nodes.
    childNodes: ViewNode[];

    parentNode: ViewNode | null;

    prevSibling: ViewNode | null;

    nextSibling: ViewNode | null;
}
interface Attributes {
    [key: string]: string | number | true | undefined;
}
interface Element extends ViewNode {
    tagName: string;

    id: string;

    style: Style;

    attributes: Attributes;
}
interface UIManagerModule {
    getElementFromFiberRef(ref: ReactReconciler.Fiber | Element): Element | ReactReconciler.Fiber['stateNode'];
    getNodeIdByRef(ref: string | ReactReconciler.Fiber | Element): number;
    callUIFunction(ref: Element | ReactReconciler.Fiber, funcName: string, ...options: any[]): void;
    measureInWindowByMethod(
        method: string,
        ref: ReactReconciler.Fiber,
        callback?: (layout: LayoutContent) => void,
    ): Promise<LayoutContent | string>;
    measureInWindow(
        ref: ReactReconciler.Fiber,
        callback?: (layout: LayoutContent) => void,
    ): Promise<LayoutContent | string>;
    measureInAppWindow(
        ref: ReactReconciler.Fiber,
        callback?: (layout: LayoutContent) => void,
    ): Promise<LayoutContent | string>;
}
export const UIManagerModule: UIManagerModule;

interface HippyReactConfig {
    /**
     * Hippy app name, it's will register to `__GLOBAL__.appRegister` object,
     * waiting the native load instance event for start the app.
     */
    appName: string;

    /**
     * Entry component of Hippy app.
     */
    entryPage: string | React.FunctionComponent<any> | React.ComponentClass<any, any>;

    /**
     * Disable trace output
     */
    silent?: boolean;

    /**
     * enable global bubbles
     */
    bubbles?: boolean;

    /**
     * The callback after rendering.
     */
    callback?: () => void | undefined | null;
}
declare class Hippy {
    constructor(config: HippyReactConfig);
    config: HippyReactConfig;
    rootContainer: any;
    // Keep forward comaptatble.
    regist(): void;
    start(): void;
}

// export = TypedHippyReact;
// export as namespace TypedHippyReact;
