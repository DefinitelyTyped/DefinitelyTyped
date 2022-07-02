import { Plugin } from '@ckeditor/ckeditor5-core';
import { EditorWithUI } from '@ckeditor/ckeditor5-core/src/editor/editorwithui';
import { Typing } from '@ckeditor/ckeditor5-typing';

/**
 * The special characters feature.
 *
 * Introduces the `'specialCharacters'` dropdown.
 */

export default class SpecialCharacters extends Plugin {
    static readonly requires: [typeof Typing];
    static readonly pluginName: 'SpecialCharacters';

    constructor(editor: EditorWithUI);
    editor: EditorWithUI;
    init(): void;

    /**
     * Adds a collection of special characters to the specified group. The title of a special character must be unique.
     *
     * **Note:** The "All" category name is reserved by the plugin and cannot be used as a new name for a special
     * characters category.
     */
    addItems(groupName: string, items: SpecialCharacterDefinition[]): void;

    /**
     * Returns an iterator of special characters groups.
     */
    getGroups(): IterableIterator<string>;

    /**
     * Returns a collection of special characters symbol names (titles).
     */
    getCharactersForGroup(groupName: string): Set<string> | undefined;

    /**
     * Returns the symbol of a special character for the specified name. If the special character could not be found, `undefined`
     * is returned.
     */
    getCharacter(title: string): string | undefined;
}

export interface SpecialCharacterDefinition {
    title: string;
    character: string;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        SpecialCharacters: SpecialCharacters;
    }
}
