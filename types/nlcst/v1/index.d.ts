import { Literal as UnistLiteral, Parent as UnistParent } from "unist";

/**
 * This map registers all node types that are acceptable inside paragraphs.
 * This interface can be augmented to register custom node types.
 *
 * @example
 * declare module 'nlcst' {
 *   interface ParagraphContentMap {
 *     custom: Custom;
 *   }
 * }
 */
export interface ParagraphContentMap {
    sentence: Sentence;
    source: Source;
    whiteSpace: WhiteSpace;
}

/**
 * This map registers all node types that are acceptable inside sentences.
 * This interface can be augmented to register custom node types.
 *
 * @example
 * declare module 'nlcst' {
 *   interface SentenceContentMap {
 *     custom: Custom;
 *   }
 * }
 */
export interface SentenceContentMap {
    punctuation: Punctuation;
    source: Source;
    symbol: Symbol;
    whiteSpace: WhiteSpace;
    word: Word;
}

/**
 * This map registers all node types that are acceptable inside words.
 * This interface can be augmented to register custom node types.
 *
 * @example
 * declare module 'nlcst' {
 *   interface WordContentMap {
 *     custom: Custom;
 *   }
 * }
 */
export interface WordContentMap {
    punctuation: Punctuation;
    source: Source;
    symbol: Symbol;
    text: Text;
}

export type Content = Paragraph | ParagraphContent | SentenceContent | WordContent;

export type ParagraphContent = ParagraphContentMap[keyof ParagraphContentMap];

export type SentenceContent = SentenceContentMap[keyof SentenceContentMap];

export type WordContent = WordContentMap[keyof WordContentMap];

/**
 * Node in nlcst containing other nodes
 */
export interface Parent extends UnistParent {
    children: Content[];
}

/**
 * Node in nlcst containing a value.
 */
export interface Literal extends UnistLiteral {
    value: string;
}

/**
 * Node representing a document.
 *
 * Root can be used as the root of a tree, never as a child.
 * Its content model is not limited, it can contain any nlcst content, with the
 * restriction that all content must be of the same category.
 */
export interface Root extends Parent {
    type: "RootNode";
    children: Content[];
}

/**
 * Node representing a unit of discourse dealing with a particular point or idea.
 *
 * It can contain sentence, whitespace, and source nodes.
 */
export interface Paragraph extends Parent {
    type: "ParagraphNode";
    children: ParagraphContent[];
}

/**
 * Node representing a grouping of grammatically linked words, that in principle
 * tells a complete thought, although it may make little sense taken in
 * isolation out of context.
 *
 * It can be used in a paragraph node.
 * It can contain word, symbol, punctuation, whitespace, and source nodes.
 */
export interface Sentence extends Parent {
    type: "SentenceNode";
    children: SentenceContent[];
}

/**
 * Node representing the smallest element that may be uttered in isolation with
 * semantic or pragmatic content.
 *
 * It can be used in a sentence node.
 * It can contain text, symbol, punctuation, and source nodes.
 */
export interface Word extends Parent {
    type: "WordNode";
    children: WordContent[];
}

/**
 * Node representing typographical devices different from characters which
 * represent sounds (like letters and numerals), white space, or punctuation.
 *
 * It can be used in sentence or word nodes.
 */
export interface Symbol extends Literal {
    type: "SymbolNode";
}

/**
 * Node representing typographical devices devoid of content, separating other
 * units.
 *
 * It can be used in root, paragraph, or sentence nodes.
 */
export interface WhiteSpace extends Literal {
    type: "WhiteSpaceNode";
}

/**
 * Node representing typographical devices which aid understanding and correct
 * reading of other grammatical units.
 *
 * It can be used in sentence or word nodes.
 */
export interface Punctuation extends Literal {
    type: "PunctuationNode";
}

/**
 * Node representing an external (ungrammatical) value embedded into a
 * grammatical unit: a hyperlink, code, and such.
 *
 * It can be used in root, paragraph, sentence, or word nodes.
 */
export interface Source extends Literal {
    type: "SourceNode";
}

/**
 * Node representing actual content in nlcst documents: one or more characters.
 *
 * It can be used in word nodes.
 */
export interface Text extends Literal {
    type: "TextNode";
}
