import { ButtonView, View } from '@ckeditor/ckeditor5-ui';
import BaseCommentView from './basecommentview';

export default class CommentView extends BaseCommentView {
    actionIndicator: string | null;
    createdAt: Date;
    editButton: ButtonView;
    placeholder: string;
    removeButton: ButtonView;
    userView: View;
}
