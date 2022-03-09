import { Plugin } from '@ckeditor/ckeditor5-core';
import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';

export default class Comments extends Plugin {
    static readonly pluginName: 'Comments';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Comments: Comments;
    }
}

export interface CommentsConfig {
    /**
      A view class to be used to create comment thread views (used as annotations - in sidebar balloons or in inline annotations).
      CommentThreadView is used by default when this property is not set.
      */
    CommentThreadView?: BaseCommentThreadView;

    /**
      A view class to be used to create comment views.
      */
    CommentView?: BaseCommentView;

    /**
      Optional configuration for the comments editor.
      */
    editorConfig?: EditorConfig;

    /**
      The maximum number of characters displayed in a comment when the thread view is collapsed. Longer comments will be trimmed.
      */
    maxCommentCharsWhenCollapsed: number;

    /**
      The maximum total weight of a thread before the thread becomes collapsed when it is not active:
      */
    maxThreadTotalWeight: number;

    /**
      The total number of comments shown when the thread view is collapsed.
      */
    whenCollapsed: Number;
}
