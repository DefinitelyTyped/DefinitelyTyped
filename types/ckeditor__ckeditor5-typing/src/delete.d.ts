import { Plugin } from '@ckeditor/ckeditor5-core';

/**
 * The delete and backspace feature. Handles the <kbd>Delete</kbd> and <kbd>Backspace</kbd> keys in the editor.
 */
export default class Delete extends Plugin {
    static readonly pluginName: 'Delete';
    init(): void;
    /**
     * If the next user action after calling this method is pressing backspace, it would undo the last change.
     */
    requestUndoOnBackspace(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Delete: Delete;
    }
}
