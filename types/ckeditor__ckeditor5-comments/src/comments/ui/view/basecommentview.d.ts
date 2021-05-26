import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';
import { View, ViewCollection } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';
import { Comment } from '../../commentsrepository';

export default class BaseCommentView extends View {
    isEditMode: boolean;
    readonly visibleView: ViewCollection;

    constructor(
        locale: Locale,
        model: Comment,
        config?: {
            maxCommentCharsWhenCollapsed: number;
            formatDateTime: (date: Date) => string;
            editorConfig?: EditorConfig;
        },
    );
    collapse(): void;
    expand(): void;
    focus(): void;
}
