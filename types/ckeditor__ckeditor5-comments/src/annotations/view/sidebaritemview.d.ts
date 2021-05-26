import { View, ViewCollection } from '@ckeditor/ckeditor5-ui';

export default class SidebarItemView extends View {
    bottom: number;
    content: ViewCollection;
    height: number;
    isAnimationDisabled: boolean;
    top: number | undefined;
    updateHeight(): void;
}
