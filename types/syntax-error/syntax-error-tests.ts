import syntaxError = require("syntax-error");

function test(): SyntaxError | undefined {
    const res1 = syntaxError("(function(){ console.log('do something!'); }());", "motivation.js");
    const res2 = syntaxError("(function(){ console.log('do something!'); }());", "motivation.js", { ecmaVersion: 2015, sourceType: "script" });
    if (res2 != null) {
        if (res2.line === 1) {
            const msg = `${res2.name} (${res2.line}:${Math.abs(res2.column)}): ${res2.message}\n${res2.stack}`;
        }
    }
    return res1 || res2;
}
