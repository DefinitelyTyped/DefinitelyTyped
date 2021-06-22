import { Plugin } from "@ckeditor/ckeditor5-core";

export default class WordCount extends Plugin {
    readonly characters: number;
    readonly wordCountContainer: HTMLElement;
    readonly words: number;

    static readonly pluginName: "WordCount";

    init(): void;
    destroy(): void;
}

export interface WordCountConfig {
    container: HTMLElement;
    displayCharacters?: boolean;
    displayWords?: boolean;
    onUpdate?(stats: { readonly words: number; readonly characters: number }): void;
}
