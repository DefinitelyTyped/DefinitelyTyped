import { ButtonView, View } from '@ckeditor/ckeditor5-ui';
import { FocusTracker, KeystrokeHandler } from '@ckeditor/ckeditor5-utils';

export default class LinkActionsView extends View {
    editButtonView: ButtonView;
    readonly focusTracker: FocusTracker;
    readonly keystrokes: KeystrokeHandler;
    previewButtonView: View;
    unlinkButtonView: ButtonView;
    focus(): void;
}
