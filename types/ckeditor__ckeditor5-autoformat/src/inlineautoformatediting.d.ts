import { Editor } from '@ckeditor/ckeditor5-core';
import { Range } from '@ckeditor/ckeditor5-engine';
import Writer from '@ckeditor/ckeditor5-engine/src/model/writer';
import Autoformat from './autoformat';
/**
 * The inline autoformatting engine. It allows to format various inline patterns. For example,
 * it can be configured to make "foo" bold when typed `**foo**` (the `**` markers will be removed).
 *
 * The autoformatting operation is integrated with the undo manager,
 * so the autoformatting step can be undone if the user's intention was not to format the text.
 *
 * See the {@link module:autoformat/inlineautoformatediting~inlineAutoformatEditing `inlineAutoformatEditing`} documentation
 * to learn how to create custom inline autoformatters. You can also use
 * the {@link module:autoformat/autoformat~Autoformat} feature which enables a set of default autoformatters
 * (lists, headings, bold and italic).
 */
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
    formatCallback: (writer: Writer, rangesToFormat: Range[]) => boolean | void,
): void;
