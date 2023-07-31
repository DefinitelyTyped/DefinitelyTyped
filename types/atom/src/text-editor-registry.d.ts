import { Disposable, TextEditor } from '../index';

/** Experimental: This global registry tracks registered TextEditors. */
export interface TextEditorRegistry {
    // Managing Text Editors
    /** Remove all editors from the registry. */
    clear(): void;

    /** Register a TextEditor. */
    add(editor: TextEditor): Disposable;

    /** Remove the given TextEditor from the registry. */
    remove(editor: TextEditor): boolean;

    /** Keep a TextEditor's configuration in sync with Atom's settings. */
    maintainConfig(editor: TextEditor): Disposable;

    /**
     *  Set a TextEditor's grammar based on its path and content, and continue
     *  to update its grammar as gramamrs are added or updated, or the editor's
     *  file path changes.
     */
    maintainGrammar(editor: TextEditor): Disposable;

    /**
     *  Force a TextEditor to use a different grammar than the one that would
     *  otherwise be selected for it.
     */
    setGrammarOverride(editor: TextEditor, scopeName: string): void;

    /**
     *  Retrieve the grammar scope name that has been set as a grammar override
     *  for the given TextEditor.
     */
    getGrammarOverride(editor: TextEditor): string | null;

    /** Remove any grammar override that has been set for the given TextEditor. */
    clearGrammarOverride(editor: TextEditor): void;

    // Event Subscription
    /** Invoke the given callback with all the current and future registered TextEditors. */
    observe(callback: (editor: TextEditor) => void): Disposable;
}
