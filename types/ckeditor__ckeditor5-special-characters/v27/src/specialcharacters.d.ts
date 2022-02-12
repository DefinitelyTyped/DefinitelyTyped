import { Plugin } from "@ckeditor/ckeditor5-core";
import { Typing } from "@ckeditor/ckeditor5-typing";

export default class SpecialCharacters extends Plugin {
    static readonly requires: [typeof Typing];
    static readonly pluginName: "SpecialCharacters";
    init(): void;
    addItems(groupName: string, items: SpecialCharacterDefinition[]): void;
    getGroups(): IterableIterator<string>;
    getCharactersForGroup(groupName: string): Set<string> | undefined;
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
