// Type definitions for scroll-into-view 1.6.0
// Project: https://github.com/KoryNunn/scroll-into-view
// Definitions by: zivni <https://github.com/zivni>
//                 Thibaut <https://github.com/Thibaut-Fatus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module __ScrollIntoView {

    interface Settings {
        time?: number
        ease?: (value: number) => number
        validTarget?: (target: HTMLElement, parentsScrolled: number) => boolean
        align?: Alignment
    }

    interface Alignment {
        /** 0 to 1, default 0.5 (center) */
        top?: number
        /** 0 to 1, default 0.5 (center) */
        left?: number
        /** pixels to offset top alignment */
        topOffset?: number
        /** pixels to offset left alignment */
        leftOffset?: number
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
