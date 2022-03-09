import { ButtonView, View } from '@ckeditor/ckeditor5-ui';
import { TemplateDefinition } from '@ckeditor/ckeditor5-ui/src/template';
import BaseCommentView from "./basecommentview";

export default class CommentView extends BaseCommentView {
    /**
     * A property used by the template.
     * It works as a visual indicator for the user that an action is about to be performed. The value of this property is used in setting the CSS class. The property is used when the user interacts with the view.
     */
    get actionIndicator(): string | null;
    protected set actionIndicator(value: string | null);
    /**
     * Comment creation date.
     */
    get createdAt(): Date;
    protected set createdAt(value: Date);
    /**
     * Edit button view. Edit button switches the comment to the editing mode.
     */
    editButton: ButtonView;
    /**
     * Comment editor placeholder value.
     */
    get placeholder(): string;
    protected set placeholder(value: string);
    /**
     * Remove button view. Remove button shows a confirmation box that fires the removeComment event when submitted.
     */
    removeButton: ButtonView;
    /**
     * User view for the comment. Presents the comment author.
     */
    userView: View;
    /**
     * Returns a template definition that will be passed to setTemplate.
     * Overwrite this method if you want to set a custom template for the comment view.
     */
    getTemplate(): TemplateDefinition;
}
