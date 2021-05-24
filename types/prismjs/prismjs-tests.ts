import * as Prism from 'prismjs';
import * as components from 'prismjs/components';
import loadLanguages = require('prismjs/components/');

const element = document.createElement("code");
const container = document.querySelector("div");
const callback = (element: Element) => console.log(element);

Prism.highlightElement(element, false, callback);
Prism.highlightElement(element, false);
Prism.highlightElement(element);
Prism.highlightAll(true, callback);
Prism.highlightAll(true);
Prism.highlightAll();
if (container) {
    Prism.highlightAllUnder(container);
}
Prism.highlightAllUnder(document);

// $ExpectType "Null"
Prism.util.type(null);

// $ExpectType "Undefined"
Prism.util.type(undefined);

// $ExpectType "Boolean"
Prism.util.type(true);

// $ExpectType "Boolean"
Prism.util.type(false);

// $ExpectType "Number"
Prism.util.type(NaN);

// $ExpectType "String"
Prism.util.type("PrismJS");

// $ExpectType "Function"
Prism.util.type(callback);

// $ExpectType "RegExp"
Prism.util.type(/prism/giu);

// $ExpectType "Array"
Prism.util.type([1, 2, 3]);

const hookCallback: Prism.hooks.HookCallback = env => null;
Prism.hooks.add("before-highlightall", hookCallback);
Prism.hooks.add("future-hook", hookCallback);

Prism.hooks.add("before-highlightall", env => {
    env.selector.trim();
});

Prism.hooks.add("complete", env => {
    env.code.trim();
    env.highlightedCode.trim();
});

const language = "js";
// $ExpectType "String"
Prism.util.type(language);

const tokens = Prism.tokenize("var n = 1;", Prism.languages[language]);
(function visit(token: Prism.TokenStream): Prism.TokenStream {
    if (typeof token === "string") {
        return token;
    } else if (Array.isArray(token)) {
        return token.map(visit) as Prism.TokenStream;
    } else {
        token.alias += "visited";
        return token;
    }
})(tokens);

// $ExpectError
if (Prism.util.type(language) === "Null") {
    // `language` is a non-null string constant
}

Prism.languages.insertBefore('javascript', 'function-variable', {
    'method-variable': {
        pattern: RegExp('(\\.\\s*)'),
        lookbehind: true,
        alias: ['function-variable', 'method', 'function', 'property-access']
    }
});

// $ExpectType Record<string, any>
components.core;
// $ExpectType Record<string, any>
components.languages;
// $ExpectType Record<string, any>
components.plugins;
// $ExpectType Record<string, any>
components.themes;

loadLanguages();
loadLanguages('typescript');
loadLanguages(['javascript', 'typescript']);
loadLanguages.silent = true;
