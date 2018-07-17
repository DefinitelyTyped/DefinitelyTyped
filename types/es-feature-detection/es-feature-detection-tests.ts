import * as es from "es-feature-detection";

const fns = es.builtins();
if (fns["Array.prototype.includes"]) {
    // [].includes
}
const syntax = es.syntax();
if (syntax["Arrow function"]) {
    new Function("() => {}");
}

if (fns.es2017.__all && syntax.es2017.__all) {
    // support es2017!
}
