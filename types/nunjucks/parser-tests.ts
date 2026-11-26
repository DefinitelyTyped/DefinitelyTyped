import { Environment, Extension, lexer, nodes, parser, Token, Tokenizer, TokenizerOptions } from "nunjucks";

const options: TokenizerOptions = { tags: { variableStart: "[[", variableEnd: "]]" }, trimBlocks: true };
const tokenizer: Tokenizer = lexer.lex("Hello {{ name }}", options);
lexer.lex("");
const nextToken: Token | null = tokenizer.nextToken();
tokenizer.isFinished();
tokenizer.current();
tokenizer.currentStr();
tokenizer.previous();
tokenizer.forwardN(2);
tokenizer.forward();
tokenizer.backN(2);
tokenizer.back();
const token = tokenizer.nextToken();
if (token) {
    // $ExpectType number
    token.lineno;
    if (token.type === lexer.TOKEN_REGEX) {
        // $ExpectType { body: string; flags: string; }
        token.value;
    } else {
        // $ExpectType string
        token.value;
    }
}
// @ts-expect-error
const invalidToken: Token = { type: "unknown", value: "", lineno: 0, colno: 0 };
// @ts-expect-error
const invalidRegex: Token<"regex"> = { type: "regex", value: "", lineno: 0, colno: 0 };
// Tokenizer is not exported as a runtime constructor.
// @ts-expect-error
new lexer.Tokenizer("", {});

const p = new parser.Parser(lexer.lex(""));
p.nextToken(true);
p.peekToken();
p.pushToken(null);
p.error("message", 0, 1);
p.skip(lexer.TOKEN_WHITESPACE);
p.skipValue(lexer.TOKEN_SYMBOL, "name");
p.skipSymbol("name");
// $ExpectType TokenString<"symbol">
p.expect(lexer.TOKEN_SYMBOL);
// $ExpectType TokenRegex
p.expect(lexer.TOKEN_REGEX);
// @ts-expect-error
p.skip("unknown");
// @ts-expect-error
p.skipValue(lexer.TOKEN_REGEX, "name");
// $ExpectType TokenString<"block-end">
p.advanceAfterBlockEnd("example");
p.advanceAfterVariableEnd();
// $ExpectType NodeList<"NodeList", NodeType>
p.parseSignature();
// $ExpectType NodeList<"NodeList", NodeType> | null
p.parseSignature(true);
// $ExpectType NodeList<"NodeList", NodeType>
p.parseSignature(true, true);
// $ExpectType NodeList<"NodeList", NodeType>
p.parseSignature(undefined, true);
// $ExpectType ExpressionNode
p.parseExpression();
// $ExpectType Root
p.parseAsRoot();
// $ExpectType boolean | null
p.parseWithContext();
// $ExpectType Group | Array | Dict<"Dict", Pair> | null
p.parseAggregate();
// $ExpectType NodeType[]
p.parseNodes();
// $ExpectType Output<TemplateData>
p.parseRaw();
// $ExpectType Output<Filter<"Filter", "name" | "args">>
p.parseFilterStatement();

class ExampleExtension implements Extension {
    tags = ["example"];
    parse(p: parser.Parser, astNodes: typeof nodes, tokens: typeof lexer): nodes.CallExtension {
        const tok = p.nextToken();
        if (!tok) throw p.error("expected tag");
        const args = p.parseSignature(undefined, true);
        p.advanceAfterBlockEnd(tok.value as string);
        const body = p.parseUntilBlocks("endexample");
        p.advanceAfterBlockEnd();
        return new astNodes.CallExtension(this, "run", args, [body]);
    }
    run() {
        return "hello";
    }
}
const env = new Environment();
env.addExtension("example", new ExampleExtension());
parser.parse("{% example %}{% endexample %}", [new ExampleExtension()], options);
const extension: Extension = {
    tags: ["example"],
    parse(p, astNodes, tokens) {
        // $ExpectType Parser
        p;
        return p.parseExpression();
    },
};

// Statement parsers return the corresponding AST classes.
p.parseFor();
p.parseMacro();
p.parseCall();
p.parseImport();
p.parseFrom();
p.parseBlock();
p.parseExtends();
p.parseInclude();
p.parseIf();
p.parseSet();
p.parseSwitch();
p.parseStatement();
p.parsePostfix(new nodes.Symbol());
p.parseInlineIf();
p.parseOr();
p.parseAnd();
p.parseNot();
p.parseIn();
p.parseIs();
p.parseCompare();
p.parseConcat();
p.parseAdd();
p.parseSub();
p.parseMul();
p.parseDiv();
p.parseFloorDiv();
p.parseMod();
p.parsePow();
p.parseUnary();
p.parseUnary(true);
p.parsePrimary();
p.parsePrimary(true);
p.parseFilterName();
p.parseFilterArgs(new nodes.Symbol());
p.parseFilter(new nodes.Symbol());
p.parse();

function fail(): never {
    return p.fail("message", 1, 2);
}

// $ExpectType NodeType
extension.parse(p, nodes, lexer);

const asyncExtension: Extension = {
    tags: ["asyncExample"],
    parse(p, nodes, lexer) {
        return new nodes.CallExtensionAsync("asyncExample", "run");
    },
};
const emptyExtension: Extension = {
    tags: ["empty"],
    parse(p, nodes, lexer) {
        return new nodes.NodeList();
    },
};

const stringExtension: Extension = {
    tags: ["invalid"],
    // @ts-expect-error
    parse() {
        return "not an AST node";
    },
};
const nullExtension: Extension = {
    tags: ["invalid"],
    // @ts-expect-error
    parse() {
        return null;
    },
};
const voidExtension: Extension = {
    tags: ["invalid"],
    // @ts-expect-error
    parse() {},
};
const promiseExtension: Extension = {
    tags: ["invalid"],
    // @ts-expect-error
    async parse() {
        return new nodes.NodeList();
    },
};
