/// <reference path="./first-mate.d.ts" />

import firstMate = require('first-mate');
var GrammarRegistry = firstMate.GrammarRegistry;
var Grammar = firstMate.GrammarRegistry;
type IToken = AtomFirstMate.IToken;
// The import and type aliasing above can be done more concisely in TypeScript 1.5+:
//import { GrammarRegistry, Grammar, IToken } from "first-mate";

var registry = new GrammarRegistry({ maxTokensPerLine: 100 });
var grammar = registry.loadGrammarSync('javascript.json');
var result = grammar.tokenizeLine('var text = "hello world";');
result.tokens.forEach((token) => {
	console.log("Token text: '" + token.value + "' with scopes: " + token.scopes);
});
