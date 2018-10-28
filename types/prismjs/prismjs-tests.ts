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

const hookCallback: Prism.HookCallback = env => null;
Prism.hooks.add("before-highlightall", hookCallback);
Prism.hooks.add("future-hook", hookCallback);

const language = "js";
const tokens = Prism.tokenize("var n = 1;", Prism.languages[language]);
(function visit(token: Prism.TokenNode): Prism.TokenNode {
    if (typeof token === "string") {
        return token;
    } else if (Array.isArray(token)) {
        return token.map(visit) as Prism.TokenNode;
    } else {
        token.alias += "visited";
        return token;
    }
})(tokens);
