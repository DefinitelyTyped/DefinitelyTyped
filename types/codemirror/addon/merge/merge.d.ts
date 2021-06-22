import * as CodeMirror from '../../';

/**
 * Tracks changes in chunks from original to new.
 */
export interface MergeViewDiffChunk {
    editFrom: number;
    editTo: number;
    origFrom: number;
    origTo: number;
}

export interface DiffView {
    /**
     * Forces the view to reload.
     */
    forceUpdate(): (mode: string) => void;

    /**
     * Sets whether or not the merge view should show the differences between the editor views.
     */
    setShowDifferences(showDifferences: boolean): void;
}

export interface MergeView {
    /**
     * Returns the editor instance.
     */
    editor(): CodeMirror.Editor;

    /**
     * Left side of the merge view.
     */
    left?: DiffView;
    leftChunks(): MergeViewDiffChunk[] | undefined;
    leftOriginal(): CodeMirror.Editor | undefined;

    /**
     * Right side of the merge view.
     */
    right?: DiffView;
    rightChunks(): MergeViewDiffChunk[] | undefined;
    rightOriginal(): CodeMirror.Editor | undefined;

    /**
     * Sets whether or not the merge view should show the differences between the editor views.
     */
    setShowDifferences(showDifferences: boolean): void;
}

export interface MergeViewConstructor {
    new (element: HTMLElement, options?: MergeViewConfiguration): MergeView;
    (element: HTMLElement, options?: MergeViewConfiguration): MergeView;
}

/**
 * Options available to MergeView.
 */
export interface MergeViewConfiguration extends CodeMirror.EditorConfiguration {
    /**
     * Determines whether the original editor allows editing. Defaults to false.
     */
    allowEditingOriginals?: boolean;

    /**
     * When true stretches of unchanged text will be collapsed. When a number is given, this indicates the amount
     * of lines to leave visible around such stretches (which defaults to 2). Defaults to false.
     */
    collapseIdentical?: boolean | number;

    /**
     * Sets the style used to connect changed chunks of code. By default, connectors are drawn. When this is set to "align",
     * the smaller chunk is padded to align with the bigger chunk instead.
     */
    connect?: string;

    /**
     * Callback for when stretches of unchanged text are collapsed.
     */
    onCollapse?(mergeView: MergeView, line: number, size: number, mark: CodeMirror.TextMarker<CodeMirror.MarkerRange>): void;

    /**
     * Provides original version of the document to be shown on the right of the editor.
     */
    orig?: string;

    /**
     * Provides original version of the document to be shown on the left of the editor.
     * To create a 2-way (as opposed to 3-way) merge view, provide only one of origLeft and origRight.
     */
    origLeft?: string;

    /**
     * Provides original version of document to be shown on the right of the editor.
     * To create a 2-way (as opposed to 3-way) merge view, provide only one of origLeft and origRight.
     */
    origRight?: string;

    /**
     * Determines whether buttons that allow the user to revert changes are shown. Defaults to true.
     */
    revertButtons?: boolean;

    revertChunk?: (
        mv: MergeView,
        from: CodeMirror.Editor,
        fromStart: CodeMirror.Position,
        fromEnd: CodeMirror.Position,
        to: CodeMirror.Editor,
        toStart: CodeMirror.Position,
        toEnd: CodeMirror.Position
    ) => void;

    /**
     * When true, changed pieces of text are highlighted. Defaults to true.
     */
    showDifferences?: boolean;
}

declare module '../../' {
    const MergeView: MergeViewConstructor;

    interface CommandActions {
        /** Move cursor to the next diff */
        goNextDiff(cm: Editor): void;

        /** Move cursor to the previous diff */
        goPrevDiff(cm: Editor): void;
    }
}
