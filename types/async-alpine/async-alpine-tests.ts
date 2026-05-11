/**
 * Typescript definition tests for async-alpine module
 *
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import Alpine, { type DirectiveCallback } from "alpinejs";
import AsyncAlpine, { type AlpineAsyncOptions } from "async-alpine";

// init plugin
Alpine.plugin(AsyncAlpine);

// setup options
const options: AlpineAsyncOptions = {
    defaultStrategy: "idle",
    keepRelativeURLs: false,
};
Alpine.asyncOptions(options);

// listen plugin events
window.addEventListener("async-alpine:load", (event) => {
    console.log("async-alpine:load", event.detail.id);
});

// usage: data
Alpine.asyncData(
    "myComponent",
    () => import("./async-alpine_async-component-tests.js"),
);

// usage: url
Alpine.asyncUrl("myComponent", "./async-alpine_async-component-tests.ts");

// usage: alias
Alpine.asyncAlias("./[name].ts");
Alpine.asyncAlias((name) => import(`/${name}.ts`));

// directive with async data
function directive(): DirectiveCallback {
    return (el) => {
        el._x_async = "init";
        el._x_async = undefined;
    };
}
directive();
