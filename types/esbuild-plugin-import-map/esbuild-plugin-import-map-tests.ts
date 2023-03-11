import * as importMap from "esbuild-plugin-import-map";
import assert from 'node:assert/strict';

const loadResult = importMap.load({
    imports: {
        'lit-element': 'https://cdn.eik.dev/lit-element/v2'
    }
});
assert(loadResult instanceof Promise);

const pluginResult = importMap.plugin();
assert(typeof pluginResult.name === 'string');
assert(typeof pluginResult.setup === 'function');

const pluginClear = importMap.clear();
assert(pluginClear === undefined);
