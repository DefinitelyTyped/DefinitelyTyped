/// <reference types="jquery"/>

declare namespace JQueryNiceScroll {
    interface NiceScrollPage {
        maxw: number;
        maxh: number;
        width: number;
        height: number;
        w: number;
        h: number;
    }

    interface NiceScroll {
        show(): NiceScroll;
        hide(): NiceScroll;
        toggle(): NiceScroll;
        onResize(e?: Event, page?: NiceScrollPage): NiceScroll;
        resize(e?: Event, page?: NiceScrollPage): NiceScroll;
        remove(): void;
        stop(): NiceScroll;
        doScrollPos(x: number, y: number, spd: number): void;
        doScrollLeft(x: number, duration: number): void;
        doScrollTop(x: number, duration: number): void;
    }

    interface NiceScrollOptions {
        zindex?: "auto" | number | undefined;
        cursoropacitymin?: number | undefined;
        cursoropacitymax?: number | undefined;
        cursorcolor?: string | undefined;
        cursorwidth?: string | undefined;
        cursorborder?: string | undefined;
        cursorborderradius?: string | undefined;
        scrollspeed?: number | undefined;
        mousescrollstep?: number | undefined;
        touchbehavior?: boolean | undefined;
        emulatetouch?: boolean | undefined;
        hwacceleration?: boolean | undefined;
        usetransition?: boolean | undefined;
        boxzoom?: boolean | undefined;
        dblclickzoom?: boolean | undefined;
        gesturezoom?: boolean | undefined;
        grabcursorenabled?: boolean | undefined;
        autohidemode?: "leave" | "scroll" | "cursor" | "hidden" | boolean | undefined;
        background?: string | undefined;
        iframeautoresize?: boolean | undefined;
        cursorminheight?: number | undefined;
        preservenativescrolling?: boolean | undefined;
        railoffset?: boolean | {
            top?: number | undefined;
            left?: number | undefined;
        } | undefined;
        railhoffset?: boolean | {
            top?: number | undefined;
            left?: number | undefined;
        } | undefined;
        bouncescroll?: boolean | undefined;
        spacebarenabled?: boolean | undefined;
        railpadding?: {
            top: number;
            right: number;
            left: number;
            bottom: number;
        } | undefined;
        disableoutline?: boolean | undefined;
        horizrailenabled?: boolean | undefined;
        railalign?: "right" | "left" | "top" | "bottom" | undefined;
        railvalign?: "right" | "left" | "top" | "bottom" | undefined;
        enabletranslate3d?: boolean | undefined;
        enablemousewheel?: boolean | undefined;
        enablekeyboard?: boolean | undefined;
        smoothscroll?: boolean | undefined;
        sensitiverail?: boolean | undefined;
        enablemouselockapi?: boolean | undefined;
        cursorfixedheight?: number | undefined;
        directionlockdeadzone?: number | undefined;
        hidecursordelay?: number | undefined;
        nativeparentscrolling?: boolean | undefined;
        enablescrollonselection?: boolean | undefined;
        overflowx?: "auto" | "hidden" | "inherit" | "initial" | "overlay" | "scroll" | "unset" | "visible" | undefined;
        overflowy?: "auto" | "hidden" | "inherit" | "initial" | "overlay" | "scroll" | "unset" | "visible" | undefined;
        cursordragspeed?: number | undefined;
        rtlmode?: "auto" | boolean | undefined;
        cursordragontouch?: boolean | undefined;
        oneaxismousemode?: "auto" | boolean | undefined;
        scriptpath?: string | undefined;
        preventmultitouchscrolling?: boolean | undefined;
        disablemutationobserver?: boolean | undefined;
        enableobserver?: boolean | undefined;
        scrollbarid?: string | undefined;
        scrollCLass?: string | undefined;
    }
}

interface JQuery {
    niceScroll(options?: JQueryNiceScroll.NiceScrollOptions): JQueryNiceScroll.NiceScroll;
    niceScroll(wrapper: string, options: JQueryNiceScroll.NiceScrollOptions): JQueryNiceScroll.NiceScroll;
    getNiceScroll(index?: number): JQueryNiceScroll.NiceScroll;
}
