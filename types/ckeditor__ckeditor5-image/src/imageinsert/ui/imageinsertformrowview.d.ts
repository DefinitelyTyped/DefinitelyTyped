import { View, ViewCollection } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';

export default class ImageUploadFormRowView extends View {
    constructor(locale: Locale, options?: { children?: View[] | undefined; class?: string; labelView?: View });
    get class(): string | null;
    protected set class(value: string | null);
    readonly children: ViewCollection;
}
