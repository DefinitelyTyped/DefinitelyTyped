// Type definitions for detect-passive-events 1.0
// Project: https://github.com/rafrex/detect-passive-events#readme
// Definitions by: Thomas Tilkema <https://github.com/thomastilkema>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface detectPassiveEvents {
    hasSupport: boolean;

    update(): void;
}

declare const detectPassiveEvents: detectPassiveEvents;
export default detectPassiveEvents;
