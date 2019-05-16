// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_simplescrollbars

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface PlaceFunction {
        (): void;
    }

    interface ScrollFunction {
        (pos: number, orientation: ScrollBarOrientation): void;
    }

    interface Measure {
        scrollWidth: number;
        clientWidth: number;
        viewWidth: number;
        scrollHeight: number;
        clientHeight: number;
        viewHeight: number;
        barLeft: number;
    }

    type ScrollBarOrientation = "horizontal" | "vertical";

    interface Bar {
        orientation: ScrollBarOrientation;
        scroll: ScrollFunction;
        screen: number;
        total: number;
        size: number;
        pos: number;
        node: Element;
        inner: Element;

        setPos(pos: number, force: boolean): boolean;
        moveTo(pos: number): void;
        update(scrollSize: number, clientSize: number, barSize: number): void;
    }

    interface SimpleScrollbars {
        update(measure: Measure): { right: number; bottom: number };
        setScrollTop(pos: number): void;
        setScrollLeft(pos: number): void;
        clear(): void;
    }

    interface ScrollbarModel {
        simple(place: PlaceFunction, scroll: ScrollFunction): SimpleScrollbars;
        overlay(place: PlaceFunction, scroll: ScrollFunction): SimpleScrollbars;
    }

    var scrollbarModel: ScrollbarModel;
}
