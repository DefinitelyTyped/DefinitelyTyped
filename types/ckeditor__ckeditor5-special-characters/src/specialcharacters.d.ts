import { Plugin } from "@ckeditor/ckeditor5-core";
// TODO: import { Typing } from '@ckeditor/ckeditor5-typing';

type Typing = typeof Plugin;

export default class SpecialCharacters extends Plugin {
    static readonly requires: [Typing];
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

export {};
