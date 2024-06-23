/// <reference types="jquery"/>
/// <reference types="jqueryui"/>

declare namespace JQueryUILayout {
    interface PaneOptions {
        applyDefaultStyles?: boolean | undefined;
        scrollToBookmarkOnLoad?: boolean | undefined;
        showOverflowOnHover?: boolean | undefined;
        closable?: boolean | undefined;
        resizable?: boolean | undefined;
        slidable?: boolean | undefined;
        paneSelector?: string | undefined;
        contentSelector?: string | undefined;
        contentIgnoreSelector?: string | undefined;
        paneClass?: string | undefined;
        resizerClass?: string | undefined;
        togglerClass?: string | undefined;
        buttonClass?: string | undefined;
        size?: string | number | undefined;
        minSize?: number | undefined;
        maxSize?: number | undefined;
        spacing_open?: number | undefined;
        spacing_closed?: number | undefined;
        resizerTip?: string | undefined;
        resizerCursor?: string | undefined;
        resizerDragOpacity?: number | undefined;
        maskIframesOnResize?: boolean | string | undefined;
        sliderTip?: string | undefined;
        sliderCursor?: string | undefined;
        slideTrigger_open?: string | undefined;
        slideTrigger_close?: string | undefined;
        togglerTip_open?: string | undefined;
        togglerTip_closed?: string | undefined;
        togglerLength_open?: number | string | undefined;
        togglerLength_closed?: number | string | undefined;
        hideTogglerOnSlide?: boolean | undefined;
        togglerAlign_open?: string | number | undefined;
        togglerAlign_closed?: string | number | undefined;
        togglerContent_open?: string | undefined;
        togglerContent_closed?: string | undefined;
        enableCursorHotkey?: boolean | undefined;
        customHotkeyModifier?: string | undefined;
        customHotkey?: string | number | undefined;
        fxName?: string | undefined;
        fxSpeed?: string | number | undefined;
        fxSettings?: JQueryAnimationOptions | undefined;
        initClosed?: boolean | undefined;
        initHidden?: boolean | undefined;
        onshow_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        onshow_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        onshow?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        onhide_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        onhide_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        onhide?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        onopen_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        onopen_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        onopen?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        onclose_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        onclose_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        onclose?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        onresize_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        onresize_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        onresize?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
    }

    interface Options extends PaneOptions {
        defaults?: PaneOptions | undefined;
        north?: PaneOptions | undefined;
        east?: PaneOptions | undefined;
        south?: PaneOptions | undefined;
        west?: PaneOptions | undefined;
        center?: PaneOptions | undefined;

        defaults__applyDefaultStyles?: boolean | undefined;
        defaults__scrollToBookmarkOnLoad?: boolean | undefined;
        defaults__showOverflowOnHover?: boolean | undefined;
        defaults__closable?: boolean | undefined;
        defaults__resizable?: boolean | undefined;
        defaults__slidable?: boolean | undefined;
        defaults__paneSelector?: string | undefined;
        defaults__contentSelector?: string | undefined;
        defaults__contentIgnoreSelector?: string | undefined;
        defaults__paneClass?: string | undefined;
        defaults__resizerClass?: string | undefined;
        defaults__togglerClass?: string | undefined;
        defaults__buttonClass?: string | undefined;
        defaults__size?: string | number | undefined;
        defaults__minSize?: number | undefined;
        defaults__maxSize?: number | undefined;
        defaults__spacing_open?: number | undefined;
        defaults__spacing_closed?: number | undefined;
        defaults__resizerTip?: string | undefined;
        defaults__resizerCursor?: string | undefined;
        defaults__resizerDragOpacity?: number | undefined;
        defaults__maskIframesOnResize?: boolean | string | undefined;
        defaults__sliderTip?: string | undefined;
        defaults__sliderCursor?: string | undefined;
        defaults__slideTrigger_open?: string | undefined;
        defaults__slideTrigger_close?: string | undefined;
        defaults__togglerTip_open?: string | undefined;
        defaults__togglerTip_closed?: string | undefined;
        defaults__togglerLength_open?: number | string | undefined;
        defaults__togglerLength_closed?: number | string | undefined;
        defaults__hideTogglerOnSlide?: boolean | undefined;
        defaults__togglerAlign_open?: string | number | undefined;
        defaults__togglerAlign_closed?: string | number | undefined;
        defaults__togglerContent_open?: string | undefined;
        defaults__togglerContent_closed?: string | undefined;
        defaults__enableCursorHotkey?: boolean | undefined;
        defaults__customHotkeyModifier?: string | undefined;
        defaults__customHotkey?: string | number | undefined;
        defaults__fxName?: string | undefined;
        defaults__fxSpeed?: string | number | undefined;
        defaults__fxSettings?: JQueryAnimationOptions | undefined;
        defaults__initClosed?: boolean | undefined;
        defaults__initHidden?: boolean | undefined;
        defaults__onshow_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        defaults__onshow_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        defaults__onshow?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        defaults__onhide_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        defaults__onhide_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        defaults__onhide?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        defaults__onopen_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        defaults__onopen_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        defaults__onopen?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        defaults__onclose_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        defaults__onclose_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        defaults__onclose?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        defaults__onresize_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        defaults__onresize_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        defaults__onresize?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;

        north__applyDefaultStyles?: boolean | undefined;
        north__scrollToBookmarkOnLoad?: boolean | undefined;
        north__showOverflowOnHover?: boolean | undefined;
        north__closable?: boolean | undefined;
        north__resizable?: boolean | undefined;
        north__slidable?: boolean | undefined;
        north__paneSelector?: string | undefined;
        north__contentSelector?: string | undefined;
        north__contentIgnoreSelector?: string | undefined;
        north__paneClass?: string | undefined;
        north__resizerClass?: string | undefined;
        north__togglerClass?: string | undefined;
        north__buttonClass?: string | undefined;
        north__size?: string | number | undefined;
        north__minSize?: number | undefined;
        north__maxSize?: number | undefined;
        north__spacing_open?: number | undefined;
        north__spacing_closed?: number | undefined;
        north__resizerTip?: string | undefined;
        north__resizerCursor?: string | undefined;
        north__resizerDragOpacity?: number | undefined;
        north__maskIframesOnResize?: boolean | string | undefined;
        north__sliderTip?: string | undefined;
        north__sliderCursor?: string | undefined;
        north__slideTrigger_open?: string | undefined;
        north__slideTrigger_close?: string | undefined;
        north__togglerTip_open?: string | undefined;
        north__togglerTip_closed?: string | undefined;
        north__togglerLength_open?: number | string | undefined;
        north__togglerLength_closed?: number | string | undefined;
        north__hideTogglerOnSlide?: boolean | undefined;
        north__togglerAlign_open?: string | number | undefined;
        north__togglerAlign_closed?: string | number | undefined;
        north__togglerContent_open?: string | undefined;
        north__togglerContent_closed?: string | undefined;
        north__enableCursorHotkey?: boolean | undefined;
        north__customHotkeyModifier?: string | undefined;
        north__customHotkey?: string | number | undefined;
        north__fxName?: string | undefined;
        north__fxSpeed?: string | number | undefined;
        north__fxSettings?: JQueryAnimationOptions | undefined;
        north__initClosed?: boolean | undefined;
        north__initHidden?: boolean | undefined;
        north__onshow_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        north__onshow_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        north__onshow?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        north__onhide_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        north__onhide_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        north__onhide?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        north__onopen_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        north__onopen_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        north__onopen?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        north__onclose_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        north__onclose_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        north__onclose?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        north__onresize_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        north__onresize_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        north__onresize?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;

        east__applyDefaultStyles?: boolean | undefined;
        east__scrollToBookmarkOnLoad?: boolean | undefined;
        east__showOverflowOnHover?: boolean | undefined;
        east__closable?: boolean | undefined;
        east__resizable?: boolean | undefined;
        east__slidable?: boolean | undefined;
        east__paneSelector?: string | undefined;
        east__contentSelector?: string | undefined;
        east__contentIgnoreSelector?: string | undefined;
        east__paneClass?: string | undefined;
        east__resizerClass?: string | undefined;
        east__togglerClass?: string | undefined;
        east__buttonClass?: string | undefined;
        east__size?: string | number | undefined;
        east__minSize?: number | undefined;
        east__maxSize?: number | undefined;
        east__spacing_open?: number | undefined;
        east__spacing_closed?: number | undefined;
        east__resizerTip?: string | undefined;
        east__resizerCursor?: string | undefined;
        east__resizerDragOpacity?: number | undefined;
        east__maskIframesOnResize?: boolean | string | undefined;
        east__sliderTip?: string | undefined;
        east__sliderCursor?: string | undefined;
        east__slideTrigger_open?: string | undefined;
        east__slideTrigger_close?: string | undefined;
        east__togglerTip_open?: string | undefined;
        east__togglerTip_closed?: string | undefined;
        east__togglerLength_open?: number | string | undefined;
        east__togglerLength_closed?: number | string | undefined;
        east__hideTogglerOnSlide?: boolean | undefined;
        east__togglerAlign_open?: string | number | undefined;
        east__togglerAlign_closed?: string | number | undefined;
        east__togglerContent_open?: string | undefined;
        east__togglerContent_closed?: string | undefined;
        east__enableCursorHotkey?: boolean | undefined;
        east__customHotkeyModifier?: string | undefined;
        east__customHotkey?: string | number | undefined;
        east__fxName?: string | undefined;
        east__fxSpeed?: string | number | undefined;
        east__fxSettings?: JQueryAnimationOptions | undefined;
        east__initClosed?: boolean | undefined;
        east__initHidden?: boolean | undefined;
        east__onshow_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        east__onshow_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        east__onshow?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        east__onhide_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        east__onhide_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        east__onhide?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        east__onopen_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        east__onopen_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        east__onopen?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        east__onclose_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        east__onclose_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        east__onclose?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        east__onresize_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        east__onresize_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        east__onresize?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;

        south__applyDefaultStyles?: boolean | undefined;
        south__scrollToBookmarkOnLoad?: boolean | undefined;
        south__showOverflowOnHover?: boolean | undefined;
        south__closable?: boolean | undefined;
        south__resizable?: boolean | undefined;
        south__slidable?: boolean | undefined;
        south__paneSelector?: string | undefined;
        south__contentSelector?: string | undefined;
        south__contentIgnoreSelector?: string | undefined;
        south__paneClass?: string | undefined;
        south__resizerClass?: string | undefined;
        south__togglerClass?: string | undefined;
        south__buttonClass?: string | undefined;
        south__size?: string | number | undefined;
        south__minSize?: number | undefined;
        south__maxSize?: number | undefined;
        south__spacing_open?: number | undefined;
        south__spacing_closed?: number | undefined;
        south__resizerTip?: string | undefined;
        south__resizerCursor?: string | undefined;
        south__resizerDragOpacity?: number | undefined;
        south__maskIframesOnResize?: boolean | string | undefined;
        south__sliderTip?: string | undefined;
        south__sliderCursor?: string | undefined;
        south__slideTrigger_open?: string | undefined;
        south__slideTrigger_close?: string | undefined;
        south__togglerTip_open?: string | undefined;
        south__togglerTip_closed?: string | undefined;
        south__togglerLength_open?: number | string | undefined;
        south__togglerLength_closed?: number | string | undefined;
        south__hideTogglerOnSlide?: boolean | undefined;
        south__togglerAlign_open?: string | number | undefined;
        south__togglerAlign_closed?: string | number | undefined;
        south__togglerContent_open?: string | undefined;
        south__togglerContent_closed?: string | undefined;
        south__enableCursorHotkey?: boolean | undefined;
        south__customHotkeyModifier?: string | undefined;
        south__customHotkey?: string | number | undefined;
        south__fxName?: string | undefined;
        south__fxSpeed?: string | number | undefined;
        south__fxSettings?: JQueryAnimationOptions | undefined;
        south__initClosed?: boolean | undefined;
        south__initHidden?: boolean | undefined;
        south__onshow_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        south__onshow_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        south__onshow?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        south__onhide_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        south__onhide_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        south__onhide?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        south__onopen_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        south__onopen_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        south__onopen?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        south__onclose_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        south__onclose_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        south__onclose?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        south__onresize_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        south__onresize_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        south__onresize?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;

        west__applyDefaultStyles?: boolean | undefined;
        west__scrollToBookmarkOnLoad?: boolean | undefined;
        west__showOverflowOnHover?: boolean | undefined;
        west__closable?: boolean | undefined;
        west__resizable?: boolean | undefined;
        west__slidable?: boolean | undefined;
        west__paneSelector?: string | undefined;
        west__contentSelector?: string | undefined;
        west__contentIgnoreSelector?: string | undefined;
        west__paneClass?: string | undefined;
        west__resizerClass?: string | undefined;
        west__togglerClass?: string | undefined;
        west__buttonClass?: string | undefined;
        west__size?: string | number | undefined;
        west__minSize?: number | undefined;
        west__maxSize?: number | undefined;
        west__spacing_open?: number | undefined;
        west__spacing_closed?: number | undefined;
        west__resizerTip?: string | undefined;
        west__resizerCursor?: string | undefined;
        west__resizerDragOpacity?: number | undefined;
        west__maskIframesOnResize?: boolean | string | undefined;
        west__sliderTip?: string | undefined;
        west__sliderCursor?: string | undefined;
        west__slideTrigger_open?: string | undefined;
        west__slideTrigger_close?: string | undefined;
        west__togglerTip_open?: string | undefined;
        west__togglerTip_closed?: string | undefined;
        west__togglerLength_open?: number | string | undefined;
        west__togglerLength_closed?: number | string | undefined;
        west__hideTogglerOnSlide?: boolean | undefined;
        west__togglerAlign_open?: string | number | undefined;
        west__togglerAlign_closed?: string | number | undefined;
        west__togglerContent_open?: string | undefined;
        west__togglerContent_closed?: string | undefined;
        west__enableCursorHotkey?: boolean | undefined;
        west__customHotkeyModifier?: string | undefined;
        west__customHotkey?: string | number | undefined;
        west__fxName?: string | undefined;
        west__fxSpeed?: string | number | undefined;
        west__fxSettings?: JQueryAnimationOptions | undefined;
        west__initClosed?: boolean | undefined;
        west__initHidden?: boolean | undefined;
        west__onshow_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        west__onshow_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        west__onshow?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        west__onhide_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        west__onhide_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        west__onhide?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        west__onopen_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        west__onopen_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        west__onopen?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        west__onclose_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        west__onclose_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        west__onclose?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        west__onresize_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        west__onresize_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        west__onresize?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;

        center__applyDefaultStyles?: boolean | undefined;
        center__scrollToBookmarkOnLoad?: boolean | undefined;
        center__showOverflowOnHover?: boolean | undefined;
        center__closable?: boolean | undefined;
        center__resizable?: boolean | undefined;
        center__slidable?: boolean | undefined;
        center__paneSelector?: string | undefined;
        center__contentSelector?: string | undefined;
        center__contentIgnoreSelector?: string | undefined;
        center__paneClass?: string | undefined;
        center__resizerClass?: string | undefined;
        center__togglerClass?: string | undefined;
        center__buttonClass?: string | undefined;
        center__size?: string | number | undefined;
        center__minSize?: number | undefined;
        center__maxSize?: number | undefined;
        center__spacing_open?: number | undefined;
        center__spacing_closed?: number | undefined;
        center__resizerTip?: string | undefined;
        center__resizerCursor?: string | undefined;
        center__resizerDragOpacity?: number | undefined;
        center__maskIframesOnResize?: boolean | string | undefined;
        center__sliderTip?: string | undefined;
        center__sliderCursor?: string | undefined;
        center__slideTrigger_open?: string | undefined;
        center__slideTrigger_close?: string | undefined;
        center__togglerTip_open?: string | undefined;
        center__togglerTip_closed?: string | undefined;
        center__togglerLength_open?: number | string | undefined;
        center__togglerLength_closed?: number | string | undefined;
        center__hideTogglerOnSlide?: boolean | undefined;
        center__togglerAlign_open?: string | number | undefined;
        center__togglerAlign_closed?: string | number | undefined;
        center__togglerContent_open?: string | undefined;
        center__togglerContent_closed?: string | undefined;
        center__enableCursorHotkey?: boolean | undefined;
        center__customHotkeyModifier?: string | undefined;
        center__customHotkey?: string | number | undefined;
        center__fxName?: string | undefined;
        center__fxSpeed?: string | number | undefined;
        center__fxSettings?: JQueryAnimationOptions | undefined;
        center__initClosed?: boolean | undefined;
        center__initHidden?: boolean | undefined;
        center__onshow_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        center__onshow_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        center__onshow?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        center__onhide_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        center__onhide_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        center__onhide?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        center__onopen_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        center__onopen_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        center__onopen?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        center__onclose_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        center__onclose_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        center__onclose?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        center__onresize_start?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): boolean | void;
        } | undefined;
        center__onresize_end?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
        center__onresize?: string | {
            (name: string, pane: JQuery, state: PaneState, options: PaneOptions, layout_name: string): void;
        } | undefined;
    }

    interface PaneState {
        isClosed: boolean;
        isSliding: boolean;
        isResizing: boolean;
        isHidden: boolean;
        noRoom: boolean;
        size: number;
        minSize: number;
        maxSize: number;
    }

    interface Layout {
        panes: {
            north: JQuery | boolean;
            east: JQuery | boolean;
            south: JQuery | boolean;
            west: JQuery | boolean;
        };
        options: Options;
        state: {
            north: PaneState;
            east: PaneState;
            south: PaneState;
            west: PaneState;
        };

        toggle(pane: string): JQuery;
        open(pane: string): JQuery;
        close(pane: string): JQuery;
        show(pane: string, openPane?: boolean): JQuery;
        hide(pane: string): JQuery;
        sizePane(pane: string, sizeInPixels: number): JQuery;
        resizeContent(pane: string): JQuery;
        resizeAll(): JQuery;

        addToggleBtn(selector: string, pane: string): JQuery;
        addCloseBtn(selector: string, pane: string): JQuery;
        addOpenBtn(selector: string, pane: string): JQuery;
        addPinBtn(selector: string, pane: string): JQuery;
        allowOverflow(elemOrPane: HTMLElement | string): JQuery;
        resetOverflow(elemOrPane: HTMLElement | string): JQuery;
    }
}

interface JQuery {
    layout(options?: JQueryUILayout.Options): JQueryUILayout.Layout;
}
