import { View } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';

export default class ImageUploadFormRowView extends View {
    constructor(locale: Locale, options?: { children?: View[]; class?: string; labelView?: View });
    class: string | null;
}
