import {
    AccessibilityProps,
 
    ImageStyle,
    LayoutChangeEvent,
    PressableProps,
    PressableStateCallbackType,
    ScrollViewProps,
    TextInputProps,
    TextProps,
    TextStyle,
    ViewProps,
    ViewStyle,
} from "react-native";

import {
    ClickProps,
    EventProps,
    FocusProps,
    ImageProps,
    KeyboardProps,
} from "react-native-web";

// Test props
const viewProps: ViewProps = {
    dir: "rtl",
    lang: "en",
    dataSet: { customData: 42 },
    href: "http://mywebsite.com",
    hrefAttrs: {
        download: true,
        rel: "nofollow",
        target: "_blank",
    },
    tabIndex: 0,
    accessibilityAtomic: true,
};

const textProps: TextProps = {
    dir: "rtl",
    lang: "en-US",
    tabIndex: 0,
};

const textInputProps: TextInputProps = {
    dir: "ltr",
    disabled: true,
    lang: "en-US",
    tabIndex: 0,
};

const imageProps: ImageProps = {
    dir: "rtl",
    draggable: true,
    lang: "en-US",
    tabIndex: -1,
};

const pressableState: PressableStateCallbackType = {
    focused: true,
    hovered: false,
    pressed: true,
};

const scrollViewProps: ScrollViewProps = {
    dir: "ltr",
    lang: "fr",
};

const pressableProps: PressableProps = {
    delayPressIn: 1,
    delayPressOut: 1,
    onPressMove: (event) => {
        console.log(event.nativeEvent.locationX);
    },
    "aria-checked": true,
    href: "http://mywebsite.com",
    dataSet: {
        customData: 42,
    },
    hrefAttrs: {
        download: true,
        rel: "nofollow",
        target: "_blank",
    },
    tabIndex: 0,
};

// Test styles
const viewStyle: ViewStyle = {
    writingDirection: "ltr",
    backgroundColor: "aquamarine",
    flex: 1,
    border: "1px solid black",
    animationKeyframes: {
        from: { transform: "scale(0.5)" },
        to: { transform: "scale(1.2)" },
    },
    borderRadius: 50,
    position: "fixed",
    zIndex: "auto",
    overflow: "clip",
    top: "1px",
    bottom: "50%",
    display: "-webkit-inline-flex",
};

const textStyle: TextStyle = {
    wordBreak: "normal",
    fontFamily: "Arial, sans-serif",
    accentColor: "InfoText",
};

const imageStyle: ImageStyle = {
    objectFit: "cover",
    boxSizing: "border-box",
    backgroundAttachment: "fixed",
};

// Test events
const eventProps: EventProps = {
    onClick: (event) => {
        console.log("Clicked:", event.bubbles);
    },
    onContextMenu: (event) => {
        console.log("Context menu opened:", event.isDefaultPrevented());
    },
    onPointerUp: (event) => {
        console.log("Pointer released:", event.isPropagationStopped());
    },
    onScroll: (event) => {
        console.log("Scroll occurred:", event.cancelable);
    },
    onBlur: (event) => {
        console.log("Field blurred:", event.defaultPrevented);
    },
    onFocus: (event) => {
        console.log("Field focused:", event.nativeEvent);
    },
    onKeyDown: (event) => {
        console.log("Key pressed down:", event.target);
    },
    onKeyUp: (event) => {
        console.log("Key released:", event.currentTarget);
    },
    onMouseDown: (event) => {
        console.log("Mouse button pressed down:", event.timeStamp);
    },
    onMouseEnter: (event) => {
        console.log("Mouse entered:", event.type);
    },
    onMouseLeave: (event) => {
        console.log("Mouse left:", event.clientX);
    },
    onTouchCancel: (event) => {
        console.log("Touch cancelled:", event.changedTouches);
    },
    onTouchEnd: (event) => {
        console.log("Touch ended:", event.touches);
    },
    onResponderGrant: (event) => {
        console.log("Responder Granted:", event.touchHistory);
    },
    onResponderReject: (event) => {
        console.log("Responder Rejected:", event.dispatchConfig);
    },
    onResponderRelease: (event) => {
        console.log("Responder Released:", event.persist);
    },
    onResponderMove: (event) => {
        console.log("Responder Moved:", event.eventPhase);
    },
    onResponderEnd: (event) => {
        console.log("Responder Ended:", event.isTrusted);
    },
    onResponderStart: (event) => {
        console.log("Responder Started:", event.timeStamp);
    },
    onResponderTerminate: (event) => {
        console.log("Responder Terminated:", event.target);
    },
    onStartShouldSetResponder: () => true,
    onStartShouldSetResponderCapture: () => true,
};

const clickProps: ClickProps = {
    onClick: (event) => {
        console.log("Clicked:", event.currentTarget);
    },
    onAuxClick: (event) => {
        console.log("Aux clicked:", event.screenX);
    },
    onContextMenu: (event) => {
        console.log("Context menu:", event.clientY);
    },
    onGotPointerCapture: (event) => {
        console.log("Got pointer capture:", event.pointerType);
    },
    onLostPointerCapture: (event) => {
        console.log("Lost pointer capture:", event.pointerId);
    },
    onPointerDown: (event) => {
        console.log("Pointer down:", event.pointerId);
    },
    onPointerMove: (event) => {
        console.log("Pointer move:", event.pointerType);
    },
    onPointerUp: (event) => {
        console.log("Pointer up:", event.pointerType);
    },
    onPointerCancel: (event) => {
        console.log("Pointer cancel:", event.pointerType);
    },
    onPointerEnter: (event) => {
        console.log("Pointer enter:", event.pointerType);
    },
    onPointerLeave: (event) => {
        console.log("Pointer leave:", event.pointerType);
    },
    onPointerOut: (event) => {
        console.log("Pointer out:", event.pointerType);
    },
    onPointerOver: (event) => {
        console.log("Pointer over:", event.pointerType);
    },
    onScroll: (event) => {
        console.log("Scroll:", event.currentTarget);
    },
    onWheel: (event) => {
        console.log("Wheel:", event.deltaY);
    },
};

const focusProps: FocusProps = {
    onBlur: (event) => {
        console.log("Blur:", event.relatedTarget);
    },
    onFocus: (event) => {
        console.log("Focus:", event.currentTarget);
    },
};

const keyboardProps: KeyboardProps = {
    onKeyDown: (event) => {
        console.log("Key down:", event.code);
    },
    onKeyDownCapture: (event) => {
        console.log("Key down capture:", event.shiftKey);
    },
    onKeyUp: (event) => {
        console.log("Key up:", event.code);
    },
    onKeyUpCapture: (event) => {
        console.log("Key up capture:", event.altKey);
    },
};

// Test accessibility
const accessibility: AccessibilityProps = {
    "aria-activedescendant": "descendantId",
    "aria-atomic": true,
    "aria-autocomplete": "none",
    "aria-busy": false,
    "aria-checked": "mixed",
    "aria-colcount": 2,
    "aria-colindex": 1,
    "aria-colspan": 1,
    "aria-controls": "controlsId",
    "aria-current": "page",
    accessibilityAtomic: true,
    accessibilityControls: ["control1", "control2"],
};
