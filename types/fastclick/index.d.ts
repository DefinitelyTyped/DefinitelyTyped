interface FastClickObject {
    lastTouchIdentifier: number;
    layer: Element;
    tapDelay: number;
    targetElement: any;
    touchBoundary: number;
    touchStartX: number;
    touchStartY: number;
    trackingClick: boolean;
    trackingClickStart: number;
    destroy(): void;
    determineEventType(targetElement: any): string;
    findControl(labelElement: any /* EventTarget | HTMLLabelElement */): any;
    focus(targetElement: any /* EventTarget | Element */): void;
    getTargetElementFromEventTarget(eventTarget: EventTarget): any;
    needsClick(target: any /* EventTarget | Element */): boolean;
    needsFocus(target: any /* EventTarget | Element */): boolean;
}

interface FastClickOptions {
    touchBoundary?: number | undefined;
    tapDelay?: number | undefined;
}

interface FastClickStatic {
    new(layer: any, options?: FastClickOptions): FastClickObject;
    attach(layer: any, options?: FastClickOptions): FastClickObject;
}

declare module "fastclick" {
    function fastclick(layer: any, options?: FastClickOptions): FastClickObject;
    namespace fastclick {
        var FastClick: FastClickStatic;
    }

    export = fastclick;
}

declare var FastClick: FastClickStatic;
