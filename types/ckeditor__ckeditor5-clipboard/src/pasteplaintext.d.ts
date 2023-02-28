import { Plugin } from '@ckeditor/ckeditor5-core';
import ClipboardPipeline from './clipboardpipeline';

/**
 * The plugin detects the user's intention to paste plain text.
 *
 * For example, it detects the <kbd>Ctrl/Cmd</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd> keystroke.
 */
export default class PastePlainText extends Plugin {
    static readonly pluginName: 'PastePlainText';

    static readonly requires: [typeof ClipboardPipeline];

    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        PastePlainText: PastePlainText;
    }
}
