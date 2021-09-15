import { Editor, PendingActions, Plugin } from '@ckeditor/ckeditor5-core';
/**
 * The source editing feature.
 *
 * It provides the possibility to view and edit the source of the document.
 *
 * For a detailed overview, check the {@glink features/source-editing source editing feature documentation} and the
 * {@glink api/source-editing package page}.
 */
export default class SourceEditing extends Plugin {
    static readonly pluginName: 'SourceEditing';
    static requires: [typeof PendingActions];
    get isSourceEditingMode(): boolean;
    protected set isSourceEditingMode(newValue: boolean);
    private _elementReplacer;
    private _replacedRoots;
    private _dataFromRoots;
    constructor(editor: Editor);
    init(): void;
    afterInit(): void;
    /**
     * Creates source editing wrappers that replace each editing root. Each wrapper contains the document source from the corresponding
     * root.
     *
     * The wrapper element contains a textarea and it solves the problem, that the textarea element cannot auto expand its height based on
     * the content it contains. The solution is to make the textarea more like a plain div element, which expands in height as much as it
     * needs to, in order to display the whole document source without scrolling. The wrapper element is a parent for the textarea and for
     * the pseudo-element `::after`, that replicates the look, content, and position of the textarea. The pseudo-element replica is hidden,
     * but it is styled to be an identical visual copy of the textarea with the same content. Then, the wrapper is a grid container and both
     * of its children (the textarea and the `::after` pseudo-element) are positioned within a CSS grid to occupy the same grid cell. The
     * content in the pseudo-element `::after` is set in CSS and it stretches the grid to the appropriate size based on the textarea value.
     * Since both children occupy the same grid cell, both have always the same height.
     */
    private _showSourceEditing(): void;
    /**
     * Restores all hidden editing roots and sets the source data in them.
     */
    private _hideSourceEditing(): void;
    /**
     * Focuses the textarea containing document source from the first editing root.
     */
    private _focusSourceEditing(): void;
    /**
     * Disables all commands.
     */
    private _disableCommands(): void;
    /**
     * Clears forced disable for all commands, that was previously set through {@link #_disableCommands}.
     */
    private _enableCommands(): void;
    /**
     * Adds or removes the `readonly` attribute from the textarea from all roots, if document source mode is active.
     */
    private _handleReadOnlyMode(isReadOnly: boolean): void;
    /**
     * Checks, if the plugin is allowed to handle the source editing mode by itself. Currently, the source editing mode is supported only
     * for the {@link module:editor-classic/classiceditor~ClassicEditor classic editor}.
     */
    private _isAllowedToHandleSourceEditingMode(): boolean;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SourceEditing: SourceEditing;
    }
}
