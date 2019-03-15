// Type definitions for jquery.nicescroll 3.7
// Project: https://nicescroll.areaaperta.com, https://github.com/inuyaksa/jquery.nicescroll
// Definitions by: Bohdan Stupak <https://github.com/Wkalmar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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
        zindex?: "auto" | number;
        cursoropacitymin?: number;
        cursoropacitymax?: number;
        cursorcolor?: string;
        cursorwidth?: string;
        cursorborder?: string;
        cursorborderradius?: string;
        scrollspeed?: number;
        mousescrollstep?: number;
        touchbehavior?: boolean;
        emulatetouch?: boolean;
        hwacceleration?: boolean;
        usetransition?: boolean;
        boxzoom?: boolean;
        dblclickzoom?: boolean;
        gesturezoom?: boolean;
        grabcursorenabled?: boolean;
        autohidemode?: "leave" | "scroll" | "cursor" | "hidden" | boolean;
        background?: string;
        iframeautoresize?: boolean;
        cursorminheight?: number;
        preservenativescrolling?: boolean;
        railoffset?: boolean | {
            top?: number;
            left?: number;
        };
        railhoffset?: boolean  | {
            top?: number;
            left?: number;
        };
        bouncescroll?: boolean;
        spacebarenabled?: boolean;
        railpadding?: {
          top: number;
          right: number;
          left: number;
          bottom: number;
        };
        disableoutline?: boolean;
        horizrailenabled?: boolean;
        railalign?: "right" | "left" | "top" | "bottom";
        railvalign?: "right" | "left" | "top" | "bottom";
        enabletranslate3d?: boolean;
        enablemousewheel?: boolean;
        enablekeyboard?: boolean;
        smoothscroll?: boolean;
        sensitiverail?: boolean;
        enablemouselockapi?: boolean;
        cursorfixedheight?: number;
        directionlockdeadzone?: number;
        hidecursordelay?: number;
        nativeparentscrolling?: boolean;
        enablescrollonselection?: boolean;
        overflowx?: "auto" | "hidden" | "inherit" | "initial" | "overlay" | "scroll" | "unset" | "visible";
        overflowy?: "auto" | "hidden" | "inherit" | "initial" | "overlay" | "scroll" | "unset" | "visible";
        cursordragspeed?: number;
        rtlmode?: "auto" | boolean;
        cursordragontouch?: boolean;
        oneaxismousemode?: "auto" | boolean;
        scriptpath?: string;
        preventmultitouchscrolling?: boolean;
        disablemutationobserver?: boolean;
        enableobserver?: boolean;
        scrollbarid?: string;
        scrollCLass?: string;
    }
}

interface JQuery {
    niceScroll(options?: JQueryNiceScroll.NiceScrollOptions): JQueryNiceScroll.NiceScroll;
    niceScroll(wrapper: string, options: JQueryNiceScroll.NiceScrollOptions): JQueryNiceScroll.NiceScroll;
    getNiceScroll(index?: number): JQueryNiceScroll.NiceScroll;
}
