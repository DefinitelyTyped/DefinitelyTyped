// Type definitions for scroll-into-view 1.13.1
// Project: https://github.com/KoryNunn/scroll-into-view
// Definitions by: zivni <https://github.com/zivni>
//                 Thibaut <https://github.com/Thibaut-Fatus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module __ScrollIntoView {

    interface Settings {
        time?: number | undefined
        ease?: ((value: number) => number) | undefined
        validTarget?: ((target: HTMLElement, parentsScrolled: number) => boolean) | undefined
        align?: Alignment | undefined,
        isScrollable?: ((target: HTMLElement, defaultIsScrollable: (target: HTMLElement) => boolean) => boolean) | undefined,
        isWindow?: ((target: HTMLElement) => boolean) | undefined,
        cancellable?: boolean | undefined,
        maxSynchronousAlignments?: number | undefined,
        debug?: boolean | undefined
    }

    interface Alignment {
        /** 0 to 1, default 0.5 (center) */
        top?: number | undefined
        /** 0 to 1, default 0.5 (center) */
        left?: number | undefined
        /** pixels to offset top alignment */
        topOffset?: number | undefined
        /** pixels to offset left alignment */
        leftOffset?: number | undefined
    }

    /** type will be 'complete' if the scroll completed or 'canceled' if the current scroll was canceled by a new scroll */
    type callbackParameterType = "complete" | "canceled"
    type Callback = (type: callbackParameterType) => void

    interface ScrollIntoView {
        (target: HTMLElement, callback?: __ScrollIntoView.Callback) : void
        (target: HTMLElement, settings: __ScrollIntoView.Settings, callback?: __ScrollIntoView.Callback) :  void
    }

}

declare module "scroll-into-view" {
    var scrollIntoView: __ScrollIntoView.ScrollIntoView
    export = scrollIntoView;
}
