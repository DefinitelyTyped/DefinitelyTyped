import * as importMap from "esbuild-plugin-import-map";

// $ExpectType Promise
importMap.load({
    imports: {
        'lit-element': 'https://cdn.eik.dev/lit-element/v2'
    }
});

const pluginResult = importMap.plugin();
// $ExpectType string
pluginResult.name;
// $ExpectType Function
pluginResult.setup

// $ExpectType void
importMap.clear();
