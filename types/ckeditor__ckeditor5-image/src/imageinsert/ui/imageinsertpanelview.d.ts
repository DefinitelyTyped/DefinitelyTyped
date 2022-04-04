import { ButtonView, LabeledFieldView, View } from '@ckeditor/ckeditor5-ui';
import DropdownView from '@ckeditor/ckeditor5-ui/src/dropdown/dropdownview';
import { FocusTracker, KeystrokeHandler, Locale } from '@ckeditor/ckeditor5-utils';

export default class ImageInsertPanelView extends View {
    constructor(locale: Locale, integrations?: Record<string, LabeledFieldView>);
    readonly insertButtonView: ButtonView;
    readonly cancelButtonView: ButtonView;
    readonly dropdownView: DropdownView;
    get imageURLInputValue(): string;
    protected set imageURLInputValue(value: string);
    readonly focusTracker: FocusTracker;
    readonly keystrokes: KeystrokeHandler;
    getIntegration(name: string): View | undefined;
    focus(): void;
    destroy(): void;
}
