import * as CodeMirror from '../..';
import './searchcursor';

export interface Annotation {
    clear(): void;
    /**
     * Updates the ranges to be highlighted. The array must be sorted.
     */
    update(annotations: Array<{ from: CodeMirror.Position, to: CodeMirror.Position }>): void;
}

export interface AnnotateScrollbarOptions {
    className: string;
    scrollButtonHeight?: number;
    listenForChanges?: boolean;
}

declare module '../../' {
    interface Editor {
        annotateScrollbar(options: string | AnnotateScrollbarOptions): Annotation;
    }

    interface EditorConfiguration {
        scrollButtonHeight?: number;
    }
}
