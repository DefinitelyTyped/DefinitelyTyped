import { Token } from "wink-tokenizer";

declare class Tagger {
    /**
     * create a tagger instance
     */
    constructor();

    /**
     * This API has no effect. It has been maintained for compatibility purpose.
     * The wink-tokenizer will now always add lemma and normal forms.
     * Note, lemmas are added only for nouns (excluding proper noun), verbs and adjectives.
     * @param config configuration object
     * @returns object with active configuration
     */
    defineConfig(config: any): { lemma: true; normal: true };

    /**
     * Tags the input tokens with their pos.
     * In order to pos tag a sentence directly, use tagSentence API instead
     * @param tokens array of tokens, as produced by the wink tokenizer
     * @return pos tagged tokens
     */
    tag(tokens: Token[]): Tagger.PosTaggedToken[];

    /**
     * Tags the raw tokens with their pos.
     * Note, it only categorizes each token in to one of the following 3-categories (a) word, or (b) punctuation, or (c) number.
     * @param tokens to be pos tagged. They are simple array of string.
     * @return pos tagged tokens
     */
    tagRawTokens(tokens: string[]): Tagger.PosTaggedToken[];

    /**
     * Tokenizes the input sentence and tags the tokens.
     * @param sentence to be pos tagged
     * @return pos tagged tokens
     */
    tagSentence(sentence: string): Tagger.PosTaggedToken[];

    /**
     * Updates the internal lexicon using the input lexicon.
     * If a word/pos pair is found in the internal lexicon then it's value is updated with the new pos; otherwise it added.
     * @param lexicon object with word/pos pairs to be added or replaced in the existing lexicon.
     * @return pos tagged tokens
     */
    updateLexicon(lexicon: object): void;
}

declare namespace Tagger {
    type Tag =
        | "word"
        | "email"
        | "emoji"
        | "punctuation"
        | "number"
        | "time"
        | "hashtag"
        | "mention"
        | "emoticon"
        | "ordinal"
        | "quoted_phrase"
        | "url"
        | "symbol"
        | "currency"
        | "alien";

    type PosTag = "PRP" | "VBD" | "DT" | "JJ" | "NN" | "NNP" | "NNS" | "IN" | "VBG" | ".";

    interface PosTaggedToken {
        value: string;
        tag: Tag;
        normal: string;
        pos: PosTag;
        lemma?: string | undefined;
    }
}

export = Tagger;
