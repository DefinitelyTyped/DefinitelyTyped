import ClipboardPipeline from '@ckeditor/ckeditor5-clipboard/src/clipboardpipeline';
import { Plugin } from '@ckeditor/ckeditor5-core';

import GoogleDocsNormalizer from './normalizers/googledocsnormalizer';
import MSWordNormalizer from './normalizers/mswordnormalizer';

export default class PasteFromOffice extends Plugin {
    static readonly pluginName: 'PasteFromOffice';
    static readonly requires: [typeof ClipboardPipeline];
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        PasteFromOffice: PasteFromOffice;
    }
}
