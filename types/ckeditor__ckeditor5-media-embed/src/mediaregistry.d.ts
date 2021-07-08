import { DowncastWriter } from '@ckeditor/ckeditor5-engine';
import Element from '@ckeditor/ckeditor5-engine/src/view/element';
import { Locale } from '@ckeditor/ckeditor5-utils';
import { MediaEmbedConfig, MediaEmbedProvider } from './mediaembed';

export default class MediaRegistry {
    readonly locale: Locale;
    readonly providerDefinitions?: MediaEmbedProvider[] | undefined;
    constructor(locale: Locale, config: MediaEmbedConfig);
    hasMedia(url: string): boolean;
    getMediaViewElement(
        writer: DowncastWriter,
        url: string,
        options?: {
            elementName?: string | undefined;
            renderMediaPreview?: boolean | undefined;
            renderForEditingView?: boolean | undefined;
        },
    ): Element;
}
