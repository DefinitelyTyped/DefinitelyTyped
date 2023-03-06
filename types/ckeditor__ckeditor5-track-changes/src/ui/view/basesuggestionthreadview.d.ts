import { User } from '@ckeditor/ckeditor5-collaboration-core/src/users';
import { EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig';
import { View } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';
import Suggestion from '../../suggestion';

export default abstract class BaseSuggestionThreadView extends View {
    readonly commentThreadInputView: View | null;
    readonly commentsListView: View | null;
    createdAt: Date;
    descriptionParts: Array<Record<string, unknown>>;
    isActive: boolean;
    isDirty: boolean;
    isEnabled: boolean;
    get length(): number;
    protected set length(value: number);

    constructor(
        locale: Locale,
        model: Suggestion,
        localUser: User,
        config?: {
            CommentView: View;
            disableComments: boolean;
            maxCommentsWhenCollapsed: number;
            maxThreadTotalWeight: number;
            maxCommentCharsWhenCollapsed: number;
            formatDateTime: (date: Date) => string;
            editorConfig?: EditorConfig | undefined;
        },
    );
    focus(): void;
}
