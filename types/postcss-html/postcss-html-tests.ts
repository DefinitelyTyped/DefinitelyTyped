import postcssHtml = require("postcss-html");
import postcss = require("postcss");

declare const otherSyntax: postcss.Syntax;

// Pass function directly
postcss().process("foo", { syntax: postcssHtml });
// Call function without config
postcss().process("foo", { syntax: postcssHtml() });
// Call function with empty config
postcss().process("foo", { syntax: postcssHtml({}) });
// Call function with all config options
postcss().process("foo", {
    syntax: postcssHtml({
        css: otherSyntax,
        less: otherSyntax,
        scss: otherSyntax,
    }),
});
