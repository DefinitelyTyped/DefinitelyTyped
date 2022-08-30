import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter } from '@ckeditor/ckeditor5-engine';
import Autoformat from './autoformat';

/**
 * Enables autoformatting mechanism for a given {@link module:core/editor/editor~Editor}.
 *
 * It formats the matched text by applying the given model attribute or by running the provided formatting callback.
 * On every {@link module:engine/model/document~Document#event:change:data data change} in the model document
 * the autoformatting engine checks the text on the left of the selection
 * and executes the provided action if the text matches given criteria (regular expression or callback).
 */
export default function inlineAutoformatEditing(
    editor: Editor,
    plugin: Autoformat,
    testRegexpOrCallback:
        | RegExp
        | ((text: string) => {
              remove: Array<[number, number]>;
              format: Array<[number, number]>;
          }),
    formatCallback: (writer: DowncastWriter, rangesToFormat: Range[]) => boolean | void,
): void;
