// Type definitions for CodeMirror
// Project: https://github.com/codemirror/CodeMirror
// Definitions by: orblazer <https://github.com/orblazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// See docs https://codemirror.net/doc/manual.html#addon_annotatescrollbar

import * as CodeMirror from "codemirror";

declare module "codemirror" {
    interface AnnotateScrollbarOptions {
        className?: string;
        scrollButtonHeight?: number;
        listenForChanges?: boolean;
    }

    interface AnnotationScrollbar {
        options: AnnotateScrollbarOptions;
        buttonHeight: number;
        annotations: Annotation[];
        doRedraw: number;
        doUpdate: number;
        div: Element;

        computeScale(): boolean;
        update(annotations: Annotation[]): void;
        redraw(compute: boolean): void;
        clear(): void;
    }

    interface EditorConfiguration {
        scrollButtonHeight?: number;
    }

    interface Editor {
        /**
         * That can be called, with a CSS class name as argument, to create a set of annotations.
         * The method returns an object whose update method can be called with a sorted array of
         * {from: Pos, to: Pos} objects marking the ranges to be highlighted. To detach the annotations,
         * call the object's clear method.
         */
        annotateScrollbar(
            options: string | AnnotateScrollbarOptions
        ): AnnotationScrollbar;
    }
}
