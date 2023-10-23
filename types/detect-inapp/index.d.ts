declare class InApp {
    ua: string;

    readonly browser: string;
    readonly isMobile: boolean;
    readonly isDesktop: boolean;
    readonly isInApp: boolean;

    constructor(useragent: string);
}
export = InApp;
