// Type definitions for detect-inapp 1.4
// Project: https://github.com/f2etw/detect-inapp#readme
// Definitions by: Johan Möller <https://github.com/moelleer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class InApp {
    ua: string;

    readonly browser: string;
    readonly isMobile: boolean;
    readonly isDesktop: boolean;
    readonly isInApp: boolean;

    constructor(useragent: string);
}
export = InApp;
