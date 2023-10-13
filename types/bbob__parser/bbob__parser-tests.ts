import {
    COLUMN_ID,
    createCharGrabber,
    createLexer,
    LINE_ID,
    parse,
    Token,
    TYPE_ATTR_NAME,
    TYPE_ATTR_VALUE,
    TYPE_ID,
    TYPE_NEW_LINE,
    TYPE_SPACE,
    TYPE_TAG,
    TYPE_WORD,
    VALUE_ID,
} from "@bbob/parser";
import { TagNode } from "@bbob/plugin-helper";

// Token.d.ts

// $ExpectType Token
new Token(TYPE_TAG);

// $ExpectType Token
new Token(TYPE_WORD);

// $ExpectType Token
new Token(TYPE_ATTR_NAME);

// $ExpectType Token
new Token(TYPE_ATTR_VALUE);

// $ExpectType Token
new Token(TYPE_TAG, "my-tag");

// $ExpectType Token
new Token(TYPE_TAG, "my-tag", 12);

// $ExpectType Token
new Token(TYPE_TAG, "my-tag", 12, 14);

// $ExpectType Token
const token = new Token();

// $ExpectType boolean
token.isEmpty();

// $ExpectType boolean
token.isText();

// $ExpectType boolean
token.isAttrName();

// $ExpectType boolean
token.isAttrValue();

// $ExpectType boolean
token.isStart();

// $ExpectType boolean
token.isEnd();

// $ExpectType string
token.getName();

// $ExpectType string
token.getValue();

// $ExpectType number
token.getLine();

// $ExpectType number
token.getColumn();

// $ExpectType string
token.toString();

// index.d.ts

// $ExpectType TagNode
const tagNode = TagNode.create("test", { test: 1 }, ["Hello"]);

// $ExpectType string
tagNode.toString();

// lexer.d.ts

const TYPE = {
    "WORD": TYPE_WORD,
    "TAG": TYPE_TAG,
    "ATTR_NAME": TYPE_ATTR_NAME,
    "ATTR_VALUE": TYPE_ATTR_VALUE,
    "SPACE": TYPE_SPACE,
    ["NEW_LINE" as string]: TYPE_NEW_LINE,
};

const TYPE_NAMES = Object.keys(TYPE).reduce((o, key) => ({ ...o, [TYPE[key]]: key }), {});

// $ExpectType (input: string) => readonly Token[]
const tokenize = (input: string) => (createLexer(input).tokenize());

// $ExpectType (input: string) => readonly Token[]
const tokenizeEscape = (input: string) => (createLexer(input, { enableEscapeTags: true }).tokenize());

// $ExpectType (input: string, tags?: string[] | undefined) => readonly Token[]
const tokenizeContextFreeTags = (
    input: string,
    tags?: string[],
) => (createLexer(input, { contextFreeTags: tags }).tokenize());

// $ExpectType TOKEN_TYPE | undefined
token[TYPE_ID];

// $ExpectType string | undefined
token[VALUE_ID];

// $ExpectType number | undefined
token[LINE_ID];

// $ExpectType number | undefined
token[COLUMN_ID];

// parse.d.ts

// $ExpectType Node[]
parse("[best name=value]Foo Bar[/best]");

// utils.d.ts

// $ExpectType CharGrabber
const bufferGrabber = createCharGrabber("[h1 name=value]Foo [Bar] [/h1]");

// $ExpectType string
bufferGrabber.substrUntilChar("]");

// $ExpectType string | null
bufferGrabber.getPrev();

// $ExpectType string
bufferGrabber.getRest();
