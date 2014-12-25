// Type definitions for kuromoji.js
// Project: https://github.com/takuyaa/kuromoji.js
// Definitions by: MIZUSHIMA Junki <https://github.com/mzsm>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module kuromoji {

    interface TokenizerBuilderOption {
        dicPath?: string;
    }

    interface TokenizerBuilder<T> {
        build(callback: (err: Error, tokenizer: Tokenizer<T>) => void): void;
    }

    interface Tokenizer<T> {
        token_info_dictionary: any;
        unknown_dictionary: any;
        viterbi_builder: ViterbiBuilder;
        viterbi_searcher: ViterbiSearcher;
        formatter: T;
        tokenize(text: string): T[];
        getLattice(text: string): ViterbiLattice;
    }

    interface ViterbiBuilder {
        trie: any;
        token_info_dictionary: any;
        unknown_dictionary: any;
        build(sentence_str: string): ViterbiLattice;

    }

    interface ViterbiSearcher {
        connection_costs: any;
        search(lattice: ViterbiLattice): ViterbiNode[];
        forward(lattice: ViterbiLattice)
    }

    interface ViterbiLattice {
        append(node: ViterbiNode): void;
        appendEos(): void;
    }

    interface ViterbiNode {
        name: string;
        cost: number;
        start_pos: number;
        length: number;
        left_id: number;
        right_id: number;
        prev: ViterbiNode;
        surface_form: string;
        shortest_cost: number;
        type: string;
    }

    interface IpadicFormatter {
        formatEntry(word_id: number, position: number, type: string, features: string[]): IpadicFormat;
        formatUnknownEntry(word_id: number, position: number, type: string, features: string[]): IpadicFormat;
    }

    interface IpadicFormat {
        word_id: number;
        word_type: string;
        word_position: number;
        surface_form: number;
        pos: string;
        pos_detail_1: string;
        pos_detail_2: string;
        pos_detail_3: string;
        conjugated_type: string;
        conjugated_form: string;
        basic_form: string;
        reading?: string;
        pronunciation?: string;
    }

    interface DictionaryBuilder {
        tid_entries: number[];
        unk_entries: number[];
        matrix_text: string;
        char_text: string;
        addTokenInfoDictionary(text: string): DictionaryBuilder;
        costMatrix(matrix_text: string): DictionaryBuilder;
        charDef(char_text: string): DictionaryBuilder;
        unkDef(text: string): DictionaryBuilder;
        build(): DynamicDictionaries;
    }

    interface DynamicDictionaries {
    }

    export function builder(option?: TokenizerBuilderOption): TokenizerBuilder<IpadicFormat>;
    export function dictionaryBuilder(): DictionaryBuilder;
}