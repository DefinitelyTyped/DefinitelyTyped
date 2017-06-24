

import { GrammarRegistry, Grammar, IToken } from "first-mate";

var registry = new GrammarRegistry({ maxTokensPerLine: 100 });
var grammar = registry.loadGrammarSync('javascript.json');
var result = grammar.tokenizeLine('var text = "hello world";');
result.tokens.forEach((token) => {
	console.log("Token text: '" + token.value + "' with scopes: " + token.scopes);
});
