import * as babel from '@babel/core';
import * as t from '@babel/types';

const options: babel.TransformOptions = {
    ast: true,
    sourceMaps: true,
    inputSourceMap: {
        file: 'foo.ts',
        mappings: 'AAAA',
        names: ['foo'],
        sources: ['foo.ts'],
        version: 3,
        sourceRoot: '',
        sourcesContent: ['foo'],
    },
};

babel.transform('code();', options, (err, result) => {
    const { code, map, ast } = result!;
    const { body } = ast!.program;
});

const transformSyncResult = babel.transformSync('code();', options);
if (transformSyncResult) {
    const { code, map, ast } = transformSyncResult;
    const { body } = ast!.program;
}

babel.transformFile('filename.js', options, (err, result) => {
    const { code, map, ast } = result!;
    const { body } = ast!.program;
});

babel.transformFileSync('filename.js', options)!.code;

const sourceCode = 'if (true) return;';
const parsedAst = babel.parse(sourceCode, options);

babel.transformFromAst(parsedAst!, sourceCode, options, (err, result) => {
    const { code, map, ast } = result!;
    const { body } = ast!.program;
});

const transformFromAstSyncResult = babel.transformFromAstSync(parsedAst!, sourceCode, options);
const { code, map, ast } = transformFromAstSyncResult!;
const { body } = ast!.program;

babel.transformFromAstAsync(parsedAst!, sourceCode, options).then(transformFromAstAsyncResult => {
    const { code, map, ast } = transformFromAstAsyncResult!;
    const { body } = ast!.program;
});

const pluginPath = babel.resolvePlugin('plugin-name', 'babelrcPath');
const presetPath = babel.resolvePreset('preset-name', 'babelrcPath');

function checkOptions(_options: babel.TransformOptions) {}
function checkConfigFunction(_config: babel.ConfigFunction) {}

checkOptions({ envName: 'banana' });
// babel uses object destructuring default to provide the envName fallback so null is not allowed
// $ExpectError
checkOptions({ envName: null });
checkOptions({ caller: { name: '@babel/register' } });
checkOptions({ caller: { name: 'babel-jest', supportsStaticESM: false, supportsTopLevelAwait: true } });
// don't add an index signature; users should augment the interface instead if they need to
// $ExpectError
checkOptions({ caller: { name: '', tomato: true } });
checkOptions({ rootMode: 'upward-optional' });
// $ExpectError
checkOptions({ rootMode: 'potato' });
checkOptions({ exclude: '../node_modules' });
// $ExpectError
checkOptions({ exclude: 256 });
checkOptions({ include: [/node_modules/, new RegExp('bower_components')] });
// $ExpectError
checkOptions({ include: [null] });
checkOptions({ test: fileName => (fileName ? fileName.endsWith('mjs') : false) });
// $ExpectError
checkOptions({ test: fileName => fileName && fileName.endsWith('mjs') });
checkOptions({
    overrides: [
        {
            test: /^.*\.m?js$/,
            compact: true,
        },
    ],
});
checkOptions({
    overrides: {
        // $ExpectError
        test: /^.*\.m?js$/,
        compact: true,
    },
});

// $ExpectError
checkConfigFunction(() => {});
// you technically can do that though you probably shouldn't
checkConfigFunction(() => ({}));
checkConfigFunction(api => {
    api.assertVersion(7);
    api.assertVersion('^7.2');

    api.cache.forever();
    api.cache.never();
    api.cache.using(() => true);
    api.cache.using(() => 1);
    api.cache.using(() => '1');
    api.cache.using(() => null);
    api.cache.using(() => undefined);
    // $ExpectError
    api.cache.using(() => ({}));
    api.cache.invalidate(() => 2);

    // $ExpectType string
    api.env();

    api.env('development');
    api.env(['production', 'test']);
    // $ExpectType 42
    api.env(name => 42);

    // $ExpectType string
    api.version;

    return {
        shouldPrintComment(comment) {
            // $ExpectType string
            comment;

            return true;
        },
    };
});

// $ExpectType Readonly<PartialConfig> | null
const partialConfig = babel.loadPartialConfig();

// $ExpectType Promise<Readonly<PartialConfig> | null>
const partialConfigPromise = babel.loadPartialConfigAsync();

if (partialConfig) {
    // $ExpectType boolean
    partialConfig.hasFilesystemConfig();
}

function withPluginPass(state: babel.PluginPass) {
    state.file.hub.addHelper('something');
}

const plugin: babel.PluginObj = {
    pre({ path }) {
        visitBlock(path);

        function visitBlock(block: babel.NodePath<t.Program>) {}
    },
    visitor: {},
};
