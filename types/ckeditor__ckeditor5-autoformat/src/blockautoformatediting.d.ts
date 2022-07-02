import { Editor } from '@ckeditor/ckeditor5-core';
import Autoformat from './autoformat';

export default function blockAutoformatEditing(
    /**
     * The editor instance.
     */
    editor: Editor,
    /**
     * The autoformat plugin instance
     */
    plugin: Autoformat,
    /*
     * The regular expression to execute on just inserted text. The regular expression is tested against the text
     */
    pattern: RegExp,
    /**
     * The callback to execute or the command to run when the text is matched.
     */
    callbackOrCommand: string | ((context: { match: RegExpExecArray }) => boolean | void),
): void;
