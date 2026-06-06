/// <reference types="node" />
import assert = require("assert");
import insane, { defaults } from "insane";

insane("<div>bar<span>foo</span></div>", defaults, false);

assert.deepEqual(insane("<div>bar<span>foo</span></div>"), "<div>bar<span>foo</span></div>");

assert.deepEqual(insane("<script>bar<span>foo</span></script>", { allowedTags: [] }), "");

assert.deepEqual(insane("<script>\"foo\"</script>"), "");
assert.deepEqual(insane("<script src=\"http://google.com\">\"foo\"</script>"), "");
assert.deepEqual(insane("<iframe>\"foo\"</iframe>"), "");
assert.deepEqual(insane("<iframe src=\"http://google.com\">asd</iframe>"), "");

assert.deepEqual(
    insane("<div>\n  <span>\n    <span>/foo</span>\n  </span>\n</div>"),
    "<div>\n  <span>\n    <span>/foo</span>\n  </span>\n</div>",
);

assert.deepEqual(insane("<p><span>foo</span>bar</p>", { allowedTags: ["p"] }, true), "<p>bar</p>");
assert.deepEqual(insane("<p>bar<span>foo</span></p>", { allowedTags: ["p"] }, true), "<p>bar</p>");

assert.deepEqual(
    insane("<div><p><span>foo</span></p>bar</div>", { allowedTags: ["span", "div"] }, true),
    "<div>bar</div>",
);

assert.deepEqual(insane("<p><span><div>foo</div></span>bar</p>", { allowedTags: ["p", "div"] }, true), "<p>bar</p>");

assert.deepEqual(insane("<p><span><span><p>foo</p></span></span>bar</p>", { allowedTags: ["p"] }, true), "<p>bar</p>");
assert.deepEqual(
    insane("<p><div><span><div>foo</div></span></div>bar</p>", { allowedTags: ["p"] }, true),
    "<p>bar</p>",
);

assert.deepEqual(insane("<p><p>foo</p>bar</p>", { allowedTags: ["p"] }, true), "<p><p>foo</p>bar</p>");
assert.deepEqual(insane("<p><p><span>foo</span></p>bar</p>", { allowedTags: ["p"] }, true), "<p><p></p>bar</p>");
assert.deepEqual(insane("<p><span><p>foo</p></span>bar</p>", { allowedTags: ["p"] }, true), "<p>bar</p>");

assert.deepEqual(insane("<p><span><p><span>foo</span></p></span>bar</p>", { allowedTags: ["p"] }, true), "<p>bar</p>");

assert.deepEqual(
    insane("<div a=\"a\" b=\"b\" class=\"foo\">foo</div>", { allowedTags: ["div"] }, true),
    "<div>foo</div>",
);

assert.deepEqual(
    insane("<div a=\"a\" b=\"b\" class=\"foo\">foo</div>", {
        allowedTags: ["div"],
        allowedAttributes: { div: ["b"] },
    }, true),
    "<div b=\"b\">foo</div>",
);

assert.deepEqual(
    insane("<div a=\"a\" b=\"b\" class=\"foo\">foo</div>", {
        allowedTags: ["div"],
        allowedAttributes: { div: ["class"] },
    }, true),
    "<div class=\"foo\">foo</div>",
);

assert.deepEqual(
    insane("<div a=\"nope\" id=\"foo\" class=\"bar baz\" style=\"position:absolute\">foo</div>", {
        allowedTags: ["div"],
        allowedAttributes: { "*": ["class", "id", "style"] },
    }, true),
    "<div id=\"foo\" class=\"bar baz\" style=\"position:absolute\">foo</div>",
);

assert.deepEqual(
    insane("<div a=\"a\" b=\"b\" class=\"foo bar\">foo</div>", {
        allowedTags: ["div"],
        allowedClasses: { div: ["bar"] },
    }, true),
    "<div class=\"bar\">foo</div>",
);

assert.deepEqual(
    insane("<div a=\"a\" b=\"b\" class=\"foo bar\">foo</div>", {
        allowedTags: ["div"],
        allowedAttributes: { div: ["class"] },
        allowedClasses: { div: ["bar"] },
    }, true),
    "<div class=\"foo bar\">foo</div>",
);

assert.deepEqual(
    insane("<div a=\"a\" b=\"b\" class=\"foo bar\">foo</div>", {
        filter: (token) => true,
        allowedTags: ["div"],
    }, true),
    "",
);

assert.deepEqual(
    insane("foo <img a=\"a\"/> bar", {
        filter: (token) => true,
        allowedTags: ["div"],
    }, true),
    "foo  bar",
);

assert.deepEqual(
    insane("<div a=\"a\" b=\"b\" class=\"foo bar\">foo</div>", {
        filter: (token) => true,
        allowedTags: ["div"],
    }, true),
    "<div>foo</div>",
);

assert.deepEqual(
    insane("<span aria-label=\"a foo\">foo</span><span>bar</span>", {
        allowedTags: ["span"],
        allowedAttributes: { span: ["aria-label"] },
        filter: (token) => !!token.attrs["aria-label"],
    }, true),
    "<span aria-label=\"a foo\">foo</span>",
);

assert.deepEqual(insane("<a href=\"#foo\">bar</a>"), "<a href=\"#foo\">bar</a>");
assert.deepEqual(insane("<a href=\"/foo\">bar</a>"), "<a href=\"/foo\">bar</a>");
assert.deepEqual(insane("<a href=\"http://google.com/foo\">bar</a>"), "<a href=\"http://google.com/foo\">bar</a>");
assert.deepEqual(insane("<a href=\"https://google.com/foo\">bar</a>"), "<a href=\"https://google.com/foo\">bar</a>");
assert.deepEqual(
    insane("<a href=\"mailto:nico@stompflow.com\">bar</a>"),
    "<a href=\"mailto:nico@stompflow.com\">bar</a>",
);

assert.deepEqual(insane("<a href=\"javascript:alert(1)\">bar</a>"), "<a>bar</a>");
assert.deepEqual(insane("<a href=\"magnet:?xt=urn:btih:E6462F43A9B7329961FADA1\">bar</a>"), "<a>bar</a>");

assert.deepEqual(insane("<span>\"bar\"</span>"), "<span>\"bar\"</span>");
assert.deepEqual(insane("<span>\"bar?\"</span>"), "<span>\"bar?\"</span>");
assert.deepEqual(insane("\"bar\""), "\"bar\"");
assert.deepEqual(insane("\"bar?\""), "\"bar?\"");
