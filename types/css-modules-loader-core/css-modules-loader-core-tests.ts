/// <reference types="node" />

import Core, { Source } from "css-modules-loader-core";

const core = new Core();
const emptyPlugins = new Core([]);
const withPlugins = new Core([
    Core.values,
    Core.localByDefault,
    Core.extractImports,
    Core.scope
]);
const withDefaultPlugins = new Core(Core.defaultPlugins);

// @ts-expect-error
const noArray = new Core(Core.values);

// Validating the source can be anything that has toString() defined
const bufferSource: Source = new Buffer("str");

core.load("str").then(({ injectableSource, exportTokens }) => {
    const str: string = injectableSource;
    exportTokens["key"] = "value";
});
