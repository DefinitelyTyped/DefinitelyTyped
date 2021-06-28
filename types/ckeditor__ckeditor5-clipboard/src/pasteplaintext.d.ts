import { Plugin } from '@ckeditor/ckeditor5-core';
import ClipboardPipeline from './clipboardpipeline';

export default class PastePlainText extends Plugin {
    static readonly pluginName: 'PastePlainText';
    static readonly requires: [typeof ClipboardPipeline];
    init(): void;
}
