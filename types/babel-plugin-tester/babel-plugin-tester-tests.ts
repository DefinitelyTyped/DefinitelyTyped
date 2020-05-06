import pluginTester from 'babel-plugin-tester';

pluginTester({
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
