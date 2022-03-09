import { Plugin } from '@ckeditor/ckeditor5-core';

/**
 * The CommentsOnly plugin allows you to put the editor in a mode where a user can only add, edit or delete comments.
 */
export default class CommentsOnly extends Plugin {
    static readonly pluginName: 'CommentsOnly';
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        CommentsOnly: CommentsOnly;
    }
}
