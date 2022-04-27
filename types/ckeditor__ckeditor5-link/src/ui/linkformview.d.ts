import { ButtonView, LabeledFieldView, View, ViewCollection } from '@ckeditor/ckeditor5-ui';
import { FocusTracker, KeystrokeHandler, Locale } from '@ckeditor/ckeditor5-utils';
import LinkCommand from '../linkcommand';

export default class LinkFormView extends View {
    cancelButtonView: ButtonView;
    readonly children: ViewCollection;
    readonly focusTracker: FocusTracker;
    readonly keystrokes: KeystrokeHandler;
    saveButtonView: ButtonView;
    urlInputView: LabeledFieldView;

    constructor(locale: Locale, linkCommand: LinkCommand, protocol?: string);
    constructor(linkCommand: LinkCommand, protocol?: string);
    focus(): void;
    destroy(): void;
    getDecoratorSwitchesState(): Record<string, boolean>;
}
