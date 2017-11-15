export type EmojiSkin = 1|2|3|4|5|6;

export interface EmojiData {
    id: string;
    name: string;
    colons: string;
    /** Reverse mapping to keyof emoticons */
    emoticons: string[];
    unified: string;
    skin: EmojiSkin|null;
    native: string;
}

// tslint:disable-next-line strict-export-declare-modifiers
declare const _default: {
    search(query: ''): null
    search(query: string): EmojiData|null

    emojis: { [emoji: string]: EmojiData }

    /** Mapping of string to keyof emojis */
    emoticons: { [emoticon: string]: string }
};

export { _default as default };
