import { ListItemView } from '@ckeditor/ckeditor5-ui';

export default class MentionListItemView extends ListItemView<MentionListItemView> {
    isOn: boolean;
    highlight(): void;
    removeHighlight(): void;
}
