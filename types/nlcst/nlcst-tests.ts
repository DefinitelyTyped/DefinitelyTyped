import { Data, Node, Point, Position } from 'unist';
import {
    Parent,
    Literal,
    Root,
    Paragraph,
    Sentence,
    Word,
    Symbol,
    WhiteSpace,
    Punctuation,
    Source,
    Text,
} from 'nlcst';

const data: Data = {
    string: 'string',
    number: 1,
    object: {
        key: 'value',
    },
    array: [],
    boolean: true,
    null: null,
};

const point: Point = {
    line: 1,
    column: 1,
    offset: 0,
};

const position: Position = {
    start: point,
    end: point,
};

const literal: Literal = {
    type: 'TextNode',
    data,
    position,
    value: 'value',
};

const symbol: Symbol = {
    type: 'SymbolNode',
    data,
    position,
    value: 'value',
};

const punctuation: Punctuation = {
    type: 'PunctuationNode',
    data,
    position,
    value: 'value',
};

const text: Text = {
    type: 'TextNode',
    data,
    position,
    value: 'value',
};

const source: Source = {
    type: 'SourceNode',
    data,
    position,
    value: 'value',
};

const whiteSpace: WhiteSpace = {
    type: 'WhiteSpaceNode',
    data,
    position,
    value: 'value',
};

let paragraph: Paragraph = getParagraph();

const sentence: Sentence = getSentence();

const word: Word = getWord();

const parent: Parent = {
    type: 'parent',
    data,
    position,
    children: [getParagraph(), getSentence(), getWord(), punctuation, source, symbol, text, whiteSpace],
};

const root: Root = {
    type: 'RootNode',
    data,
    position,
    children: [getParagraph(), getSentence(), getWord(), punctuation, source, symbol, text, whiteSpace],
};

function getParagraph(): Paragraph {
    return {
        type: 'ParagraphNode',
        children: [getSentence(), source, whiteSpace],
    };
}

function getSentence(): Sentence {
    return {
        type: 'SentenceNode',
        children: [punctuation, source, symbol, whiteSpace, getWord()],
    };
}

function getWord(): Word {
    return {
        type: 'WordNode',
        children: [punctuation, source, symbol, text],
    };
}

// Test custom nlcst node registration
interface Custom extends Node {
    type: 'CustomNode';
}

declare module 'nlcst' {
    interface ParagraphContentMap {
        custom: Custom;
    }
}

paragraph = {
    type: 'ParagraphNode',
    data,
    position,
    children: [{ type: 'CustomNode' }],
};

paragraph = {
    type: 'ParagraphNode',
    data,
    position,
    // $ExpectError
    children: [{ type: 'invalid' }],
};
