import { EmojiData } from './nimble-emoji-index';

// tslint:disable-next-line strict-export-declare-modifiers
declare const _default: {
    search(query: ''): null;
    search(query: string): EmojiData|null;

    emojis: { [emoji: string]: EmojiData };

    /** Mapping of string to keyof emojis */
    emoticons: { [emoticon: string]: string };
};

export { _default as default };
