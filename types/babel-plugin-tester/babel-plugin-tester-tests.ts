import pluginTester, { prettierFormatter } from 'babel-plugin-tester';
import purePluginTester from 'babel-plugin-tester/pure';

pluginTester({
    plugin: () => {},
    pluginName: 'my-babel-plugin',
    formatResult: code => prettierFormatter(code, { config: { printWidth: 500 } }),
    snapshot: true,
    babelOptions: {
        filename: '/path/to/file',
    },

    tests: {
        'no usage': `import awesome from '../'`,
        'correct usage': {
            code: `
      import awesome from '../macro.js';
      const globTest = awesome();
    `,
            only: true,
            pluginOptions: {
                foo: 'bar',
            },
        },
    },
});

purePluginTester({
    plugin: () => {},
    pluginName: 'my-babel-plugin',
    snapshot: true,
    babelOptions: {
        filename: '/path/to/file',
    },

    tests: {
        'no usage': `import awesome from '../'`,
        'correct usage': {
            code: `
      import awesome from '../macro.js';
      const globTest = awesome();
    `,
            only: true,
        },
    },
});
