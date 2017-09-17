import { GrammarRegistry, Grammar, ScopeSelector } from "first-mate";

// NPM Examples ===============================================================
const selector = new ScopeSelector("a | b");
selector.matches(["c"]); // # false
selector.matches(["a"]); // # true

const registry = new GrammarRegistry();
const grammar = registry.loadGrammarSync("./spec/fixtures/javascript.json");
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
	prefix.charAt;
}
prefix = selector.getPrefix(["test", "test"]);

str = selector.toCssSelector();
str = selector.toCssSyntaxSelector();
