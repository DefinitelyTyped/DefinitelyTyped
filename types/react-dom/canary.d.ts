/* eslint-disable @definitelytyped/no-self-import -- self-imports in module augmentations aren't self-imports */
/* eslint-disable @definitelytyped/no-declare-current-package -- The module augmentations are optional */
/**
 * These are types for things that are present in the upcoming React 18 release.
 *
 * Once React 18 is released they can just be moved to the main index file.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your `tsconfig.json` already has a `"types"` array in the `"compilerOptions"` section,
 * is to add `"react-dom/canary"` to the `"types"` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * ```ts
 * import {} from 'react-dom/canary'
 * ```
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * ```ts
 * /// <reference types="react-dom/canary" />
 * ```
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/main/packages/react-dom/index.js to see how the exports are declared,
// but confirm with published source code (e.g. https://unpkg.com/react-dom@canary) that these exports end up in the published code

import React = require("react");
import ReactDOM = require(".");

export {};

declare module "react" {
    // @enableViewTransition
    interface ViewTransitionPseudoElement extends Animatable {
        getComputedStyle: () => CSSStyleDeclaration;
    }

    interface ViewTransitionInstance {
        group: ViewTransitionPseudoElement;
        imagePair: ViewTransitionPseudoElement;
        old: ViewTransitionPseudoElement;
        new: ViewTransitionPseudoElement;
    }

    // @enableFragmentRefs
    interface FragmentInstance {
        blur: () => void;
        focus: (focusOptions?: FocusOptions | undefined) => void;
        focusLast: (focusOptions?: FocusOptions | undefined) => void;
        observeUsing(observer: IntersectionObserver | ResizeObserver): void;
        unobserveUsing(observer: IntersectionObserver | ResizeObserver): void;
        getClientRects(): Array<DOMRect>;
        getRootNode(getRootNodeOptions?: GetRootNodeOptions | undefined): Document | ShadowRoot | FragmentInstance;
        addEventListener<K extends keyof FragmentInstanceEventMap>(
            type: K,
            listener: (event: FragmentInstanceEventMap[K]) => void,
            optionsOrUseCapture?: Parameters<Element["addEventListener"]>[2],
        ): void;
        addEventListener(
            type: string,
            listener: EventListener,
            optionsOrUseCapture?: Parameters<Element["addEventListener"]>[2],
        ): void;
        removeEventListener<K extends keyof FragmentInstanceEventMap>(
            type: K,
            listener: (event: FragmentInstanceEventMap[K]) => void,
            optionsOrUseCapture?: Parameters<Element["removeEventListener"]>[2],
        ): void;
        removeEventListener(
            type: string,
            listener: EventListener,
            optionsOrUseCapture?: Parameters<Element["removeEventListener"]>[2],
        ): void;
        dispatchEvent(event: Event): boolean;
        scrollIntoView(alignToTop?: boolean): void;
    }

    // generated from `@webref/events:1.19.0`
    interface FragmentInstanceEventMap {
        "abort": Event;
        "animationcancel": AnimationEvent;
        "animationend": AnimationEvent;
        "animationiteration": AnimationEvent;
        "animationstart": AnimationEvent;
        "auxclick": MouseEvent;
        "beforeinput": InputEvent;
        "beforematch": Event;
        "beforetoggle": ToggleEvent;
        "blur": FocusEvent;
        "cancel": Event;
        "canplay": Event;
        "canplaythrough": Event;
        "change": Event;
        "click": MouseEvent;
        "clipboardchange": ClipboardEvent;
        "close": Event;
        "compositionend": CompositionEvent;
        "compositionstart": CompositionEvent;
        "compositionupdate": CompositionEvent;
        "contextlost": Event;
        "contextmenu": MouseEvent;
        "contextrestored": Event;
        "copy": ClipboardEvent;
        "cuechange": Event;
        "cut": ClipboardEvent;
        "dblclick": MouseEvent;
        "drag": DragEvent;
        "dragend": DragEvent;
        "dragenter": DragEvent;
        "dragleave": DragEvent;
        "dragover": DragEvent;
        "dragstart": DragEvent;
        "drop": DragEvent;
        "durationchange": Event;
        "emptied": Event;
        "encrypted": MediaEncryptedEvent;
        "ended": Event;
        "enterpictureinpicture": PictureInPictureEvent;
        "error": Event;
        "fencedtreeclick": Event;
        "focus": FocusEvent;
        "focusin": FocusEvent;
        "focusout": FocusEvent;
        "formdata": FormDataEvent;
        "fullscreenchange": Event;
        "fullscreenerror": Event;
        "gotpointercapture": PointerEvent;
        "input": InputEvent;
        "invalid": Event;
        "keydown": KeyboardEvent;
        "keypress": KeyboardEvent;
        "keyup": KeyboardEvent;
        "leavepictureinpicture": PictureInPictureEvent;
        "load": Event;
        "loadeddata": Event;
        "loadedmetadata": Event;
        "loadstart": Event;
        "lostpointercapture": PointerEvent;
        "mousedown": MouseEvent;
        "mouseenter": MouseEvent;
        "mouseleave": MouseEvent;
        "mousemove": MouseEvent;
        "mouseout": MouseEvent;
        "mouseover": MouseEvent;
        "mouseup": MouseEvent;
        "paste": ClipboardEvent;
        "pause": Event;
        "play": Event;
        "playing": Event;
        "pointercancel": PointerEvent;
        "pointerdown": PointerEvent;
        "pointerenter": PointerEvent;
        "pointerleave": PointerEvent;
        "pointermove": PointerEvent;
        "pointerout": PointerEvent;
        "pointerover": PointerEvent;
        "pointerrawupdate": PointerEvent;
        "pointerup": PointerEvent;
        "progress": Event;
        "ratechange": Event;
        "reset": Event;
        "resize": Event;
        "scroll": Event;
        "scrollend": Event;
        "seeked": Event;
        "seeking": Event;
        "select": Event;
        "selectionchange": Event;
        "selectstart": Event;
        "slotchange": Event;
        "stalled": Event;
        "submit": SubmitEvent;
        "suspend": Event;
        "timeupdate": Event;
        "toggle": ToggleEvent;
        "touchcancel": TouchEvent;
        "touchend": TouchEvent;
        "touchmove": TouchEvent;
        "touchstart": TouchEvent;
        "transitioncancel": TransitionEvent;
        "transitionend": TransitionEvent;
        "transitionrun": TransitionEvent;
        "transitionstart": TransitionEvent;
        "unload": Event;
        "volumechange": Event;
        "waiting": Event;
        "waitingforkey": Event;
        "webglcontextcreationerror": WebGLContextEvent;
        "webglcontextlost": WebGLContextEvent;
        "webglcontextrestored": WebGLContextEvent;
        "wheel": WheelEvent;
    }
}
