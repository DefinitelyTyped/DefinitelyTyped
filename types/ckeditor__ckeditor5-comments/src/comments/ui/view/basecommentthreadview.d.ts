import { User } from '@ckeditor/ckeditor5-collaboration-core';
import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';
import { View } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';
import { CommentThread } from '../../../comments/commentsrepository';

export default class BaseCommentThreadView extends View {
    readonly commentThreadInputView: View;
    readonly commentsListView: View;
    isActive: boolean;
    isDirty: boolean;
    length: number;

    constructor(
        locale: Locale,
        model: CommentThread,
        localUser: User,
        config?: {
            CommentView: View;
            maxCommentsWhenCollapsed: number;
            maxThreadTotalWeight: number;
            maxCommentCharsWhenCollapsed: number;
            formatDateTime: (date: Date) => string;
            editorConfig?: EditorConfig;
        },
    );
    focus(): void;
}
