import { buildQueryString, censor, parseQueryString, trust } from "mithril";
import * as h from "mithril/hyperscript";
import { redraw } from "mithril/redraw";
import { render } from "mithril/render";

const vnode = trust("Some <strong>bold</strong> text.");

const params = parseQueryString("?id=123");

const qstr = buildQueryString({ id: 123 });

const censored = censor({ one: "two", enabled: false, oninit: () => {} }, ["enabled"] as const);
// @ts-expect-error
censored.enabled;
// @ts-expect-error
censored.oninit;
censored.one;

render(document.body, "Hello");
render(document.body, h("h1", "Test"));
render(document.body, [
    h("h1", "Test"),
    "abc",
    null,
    123,
    false,
    h("p", "Vnode array"),
    ["a", 123, undefined, h("div", "Nested")],
]);

redraw();

redraw.sync();
