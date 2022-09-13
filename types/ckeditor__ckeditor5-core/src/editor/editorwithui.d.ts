import Editor from './editor';
import EditorUI from './editorui';

/**
 * Interface defining a type of {@link module:core/editor/editor~Editor editor} which has a UI.
 *
 * Most editors (like {@link module:editor-classic/classiceditor~ClassicEditor} or
 * {@link module:editor-inline/inlineeditor~InlineEditor}) implement this interface, however, it is not required to do so.
 *
 * Editors with an external UI (i.e. Bootstrap-based) or a headless editor may not implement this interface.
 * When developing editor features you can consider this by splitting them into two parts: the "editing" part,
 * which bases on {@link module:core/editor/editor~Editor} itself, and the UI part which bases on this interface.
 * This will make your features compatible with more types of editors.
 */
export interface EditorWithUI extends Editor {
    readonly ui: EditorUI;
}
