// Main RFB export
export { default } from "./lib/rfb";

// Core types that are commonly needed
export type {
    RFBOptions,
    BellEvent,
    ConnectEvent,
    CredentialsRequiredEvent,
    DesktopNameEvent,
    DisconnectEvent,
    SecurityFailureEvent,
    ClipboardEvent,
    PowerButtonAction,
    EncodedRect,
    BellCallback,
} from "./lib/rfb";

export type {
    DisplayClip,
    DisplayRect,
    DisplayOptions,
    Color,
} from "./lib/display";

export type {
    WebsockOptions
} from "./lib/websock";

export type {
    KeyboardOptions,
} from "./lib/input/keyboard";

// Essential utility exports that are commonly used
export * from "./lib/input/keysym";
export * from "./lib/input/keysymdef";
export * from "./lib/util/logging";
export * from "./lib/util/browser";
