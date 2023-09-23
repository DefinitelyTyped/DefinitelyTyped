import type {
    Data,
    Literal,
    Node,
    Paragraph,
    Parent,
    Punctuation,
    Root,
    Sentence,
    Source,
    Symbol,
    Text,
    WhiteSpace,
    Word,
} from "nlcst";

const data: Data = {};

const position = {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 1, column: 2, offset: 1 },
};

const symbol: Symbol = {
    type: "SymbolNode",
    value: "value",
    position,
    data,
};

const punctuation: Punctuation = {
    type: "PunctuationNode",
    value: "value",
    position,
    data,
};

const text: Text = {
    type: "TextNode",
    value: "value",
    position,
    data,
};

const source: Source = {
    type: "SourceNode",
    value: "value",
    position,
    data,
};

const whiteSpace: WhiteSpace = {
    type: "WhiteSpaceNode",
    value: "value",
    position,
    data,
};

const word: Word = {
    type: "WordNode",
    children: [punctuation, source, symbol, text],
};

const sentence: Sentence = {
    type: "SentenceNode",
    children: [punctuation, source, symbol, whiteSpace, word],
};

const paragraph: Paragraph = {
    type: "ParagraphNode",
    children: [sentence, source, whiteSpace],
};

const root: Root = {
    type: "RootNode",
    children: [paragraph, punctuation, sentence, source, symbol, text, whiteSpace, word],
    position,
    data,
};

const parent: Parent = {
    type: "ParentNode",
    children: [paragraph, punctuation, sentence, source, symbol, text, whiteSpace, word],
    position,
    data,
};

const wordWithWrongChild: Word = {
    type: "WordNode",
    children: [
        // @ts-expect-error: paragraphs are not valid in words.
        paragraph,
    ],
};

const sentenceWithWrongChild: Sentence = {
    type: "SentenceNode",
    children: [
        // @ts-expect-error: paragraphs are not valid in sentences.
        paragraph,
    ],
};

const paragraphWithWrongChild: Paragraph = {
    type: "ParagraphNode",
    children: [
        // @ts-expect-error: words are not valid in sentences.
        word,
    ],
};

// Test custom nlcst node registration.
interface Custom extends Node {
    type: "CustomNode";
}

declare module "nlcst" {
    interface RootContentMap {
        custom: Custom;
    }

    interface SentenceContentMap {
        custom: Custom;
    }
}

const rootOther: Root = {
    type: "RootNode",
    children: [{ type: "CustomNode" }],
};

const sentenceOther: Sentence = {
    type: "SentenceNode",
    children: [{ type: "CustomNode" }],
};

const rootAnother: Root = {
    type: "RootNode",
    data,
    position,
    children: [
        // @ts-expect-error: node not registered in `RootContentMap`.
        { type: "InvalidNode" },
    ],
};

const sentenceAnother: Sentence = {
    type: "SentenceNode",
    children: [
        // @ts-expect-error: node not registered in `SentenceContentMap`.
        { type: "InvalidNode" },
    ],
};

// Register a field on `Data`, which will be available on all nodes.
declare module "nlcst" {
    interface Data {
        someField?: string | undefined;
    }

    interface SymbolData {
        someOtherField?: number | undefined;
    }
}

const textWithData: Text = {
    type: "TextNode",
    value: "value",
    data: {
        someField: "a",
        // @ts-expect-error: not registered on all nlcst nodes.
        someOtherField: 1,
    },
};

const textWithOtherData: Text = {
    type: "TextNode",
    value: "value",
    data: {
        someField: "a",
        // @ts-expect-error: not registered on text nodes.
        someUnknownField: true,
    },
};

const symbolWithData: Symbol = {
    type: "SymbolNode",
    value: "value",
    data: {
        someField: "a",
        someOtherField: 1,
        // @ts-expect-error: not registered.
        someUnknownField: true,
    },
};
