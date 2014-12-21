

interface ScreenfullStatic {
    enabled: boolean;
    isFullscreen: boolean;
    element: HTMLElement;
    raw: any;

    request(element?: HTMLElement): void;
    exit(): void;
    toggle(): void;
}


declare module "screenfull" {
    var theModule: ScreenfullStatic
    export = theModule;
}

