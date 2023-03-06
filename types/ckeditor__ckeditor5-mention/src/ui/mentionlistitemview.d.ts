import { ButtonView, ListItemView } from '@ckeditor/ckeditor5-ui';
import DomWrapperView from './domwrapperview';

export default class MentionListItemView extends ListItemView<ButtonView | DomWrapperView> {
    highlight(): void;
    removeHighlight(): void;
}
