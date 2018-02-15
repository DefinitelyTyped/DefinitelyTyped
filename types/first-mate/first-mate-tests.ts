import { Disposable } from "event-kit";
import { GrammarRegistry, Grammar, ScopeSelector } from "first-mate";

declare let subscription: Disposable;
declare let grammar: Grammar;
declare let grammars: Grammar[];

// NPM Examples ===============================================================
const selector = new ScopeSelector("a | b");
selector.matches(["c"]); // # false
selector.matches(["a"]); // # true

const registry = new GrammarRegistry();
grammar = registry.loadGrammarSync("./spec/fixtures/javascript.json");
const { line, tags } = grammar.tokenizeLine("var offset = 3;");
// Convert compact tags representation into convenient, space-inefficient tokens.
const tokens = registry.decodeTokens(line, tags);
for (const { value, scopes } of tokens) {
    console.log(`Token text: '${value}' with scopes: ${scopes}`);
}

// General Usage ==============================================================
let str: string;

new GrammarRegistry({ maxTokensPerLine: 100 });
registry.loadGrammarSync("javascript.json");
const result = grammar.tokenizeLine('var text = "hello world";');
result.tokens.forEach((token) => {
    console.log(`Token text: '${token.value}' with scopes: ${token.scopes}`);
});

new ScopeSelector("source.file");
let prefix = selector.getPrefix("test");
if (prefix) {
    str = prefix.charAt(0);
}
prefix = selector.getPrefix(["test", "test"]);

str = selector.toCssSelector();
str = selector.toCssSyntaxSelector();

// Grammar ====================================================================
subscription = grammar.onDidUpdate(() => {});

const tokenizeLinesResult = grammar.tokenizeLines("Test String");
for (const tokenizedLine of tokenizeLinesResult) {
    for (const token of tokenizedLine) {
        token.scopes;
        token.value;
    }
}

grammar.tokenizeLine("Test String");
const tokenizeLineResult = grammar.tokenizeLine("Test String", null, false);
tokenizeLineResult.line;
tokenizeLineResult.tags;
tokenizeLineResult.tokens;
grammar.tokenizeLine("Test String", tokenizeLineResult.ruleStack);
grammar.tokenizeLine("Test String", tokenizeLineResult.ruleStack, false);

// Grammar Registry ===========================================================
// Event Subscription
subscription = registry.onDidAddGrammar(grammar => grammar.name);
subscription = registry.onDidUpdateGrammar(grammar => grammar.name);

// Managing Grammars
grammars = registry.getGrammars();

let potentialGrammar = registry.grammarForScopeName("scope.test");
if (potentialGrammar) grammar = potentialGrammar;

subscription = registry.addGrammar(grammar);

potentialGrammar = registry.removeGrammarForScopeName("scope.test");

grammar = registry.readGrammarSync("/test/path");

registry.readGrammar("/test/path", (error, grammar) => {
    if (grammar) {
        grammar.name;
    } else {
        if (error) error.name;
    }
});

grammar = registry.loadGrammarSync("/test/path");

registry.loadGrammar("/test/path", (error, grammar) => {
    if (grammar) {
        grammar.name;
    } else {
        if (error) error.name;
    }
});
