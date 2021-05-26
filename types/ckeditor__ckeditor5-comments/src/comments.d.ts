import { Plugin } from '@ckeditor/ckeditor5-core';
import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';
import BaseCommentThreadView from './comments/ui/view/basecommentthreadview';
import BaseCommentView from './comments/ui/view/basecommentview';

export interface CommentsConfig {
    CommentThreadView?: BaseCommentThreadView;
    CommentView?: BaseCommentView;
    editorConfig?: EditorConfig;
    maxCommentCharsWhenCollapsed?: number;
    maxThreadTotalWeight?: number;
    whenCollapsed?: number;
}

export default class Comments extends Plugin {}
