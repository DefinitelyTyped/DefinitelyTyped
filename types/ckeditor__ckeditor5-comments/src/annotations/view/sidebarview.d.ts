import { View, ViewCollection } from '@ckeditor/ckeditor5-ui';

export default class SidebarView extends View {
    class: string;
    list: ViewCollection;
    minHeight: number;
}
