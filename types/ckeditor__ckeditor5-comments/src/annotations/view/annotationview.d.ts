import { View, ViewCollection } from '@ckeditor/ckeditor5-ui';
import { FocusTracker, KeystrokeHandler, Rect } from '@ckeditor/ckeditor5-utils';

export default class AnnotationView extends View {
    content: ViewCollection;
    readonly focusTracker: FocusTracker;
    height: number;
    readonly id: string;
    isActive: boolean;
    isDirty: boolean;
    readonly keystrokes: KeystrokeHandler;
    length: number;
    mainView: View;
    targetRect: Rect;
    type: string;
    focus(): void;
}
