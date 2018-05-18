// Type definitions for detect-touch-events 1.0
// Project: https://github.com/rafrex/detect-touch-events#readme
// Definitions by: Thomas Tilkema <https://github.com/thomastilkema>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

interface detectTouchEvents {
    hasApi: boolean;
    maxTouchPoints: number;

    update(): void;
}

declare const detectTouchEvents: detectTouchEvents;
export default detectTouchEvents;
