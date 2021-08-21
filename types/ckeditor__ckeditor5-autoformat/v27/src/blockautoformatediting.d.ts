import { Editor } from "@ckeditor/ckeditor5-core";
import Autoformat from "./autoformat";
/**
 * The block autoformatting engine. It allows to format various block patterns. For example,
 * it can be configured to turn a paragraph starting with `*` and followed by a space into a list item.
 *
 * The autoformatting operation is integrated with the undo manager,
 * so the autoformatting step can be undone if the user"s intention was not to format the text.
 *
 * See the {@link module:autoformat/blockautoformatediting~blockAutoformatEditing `blockAutoformatEditing`} documentation
 * to learn how to create custom block autoformatters. You can also use
 * the {@link module:autoformat/autoformat~Autoformat} feature which enables a set of default autoformatters
 * (lists, headings, bold and italic).
 */
/**
 * Creates a listener triggered on {@link module:engine/model/document~Document#event:change:data `change:data`} event in the document.
 * Calls the callback when inserted text matches the regular expression or the command name
 * if provided instead of the callback.
 *
 * Examples of usage:
 *
 * To convert a paragraph to heading 1 when `- ` is typed, using just the command name:
 *
 *  blockAutoformatEditing( editor, plugin, /^\- $/, "heading1" );
 *
 * To convert a paragraph to heading 1 when `- ` is typed, using just the callback:
 *
 *  blockAutoformatEditing( editor, plugin, /^\- $/, ( context ) => {
 *   const { match } = context;
 *   const headingLevel = match[ 1 ].length;
 *
 *   editor.execute( "heading", {
 *    formatId: `heading${ headingLevel }`
 *   } );
 *   } );
 */
export default function blockAutoformatEditing(
    editor: Editor,
    plugin: Autoformat,
    pattern: RegExp,
    callbackOrCommand: string | ((context: { match: RegExpExecArray }) => boolean | void),
): void;
