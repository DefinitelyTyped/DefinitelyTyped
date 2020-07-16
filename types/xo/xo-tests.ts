/// <reference types="node" />

import xo = require('xo');
import path = require('path');

const glob = path.join(__dirname, '..', '*.md');

const options: xo.Options = {};
options.webpack = {
    config: {
        resolve: {
            alias: {
                file2alias: path.resolve(__dirname, process.cwd(), './file2.js'),
            },
        },
    },
};
options.webpack = true;
options.webpack = false;

if (options.semicolon === false && !options.prettier) {
    if (options.rules) {
        options.rules.semi = ['error', 'never'];
        options.rules['semi-spacing'] = [
            'error',
            {
                before: false,
                after: true,
            },
        ];
        options.rules['node/no-unsupported-features/es-builtins'] = ['error', { version: options.nodeVersion }];
        options.rules['node/no-unsupported-features/es-syntax'] = [
            'error',
            { version: options.nodeVersion, ignores: ['modules'] },
        ];
        options.rules['node/no-unsupported-features/node-builtins'] = ['error', { version: options.nodeVersion }];
    }
    if (options.plugins) {
        options.plugins = options.plugins.concat('react');
    }
    if (options.prettier && options.plugins) {
        options.plugins = options.plugins.concat('prettier');
        if (options.baseConfig) {
            options.baseConfig.extends = options.baseConfig.extends.concat('prettier');
            options.baseConfig.extends = options.baseConfig.extends.concat('prettier/unicorn');
        }
    }
}
let result = xo.lintText("'use strict'\nconsole.log('unicorn');\n");
result = xo.lintText("'use strict'\nconsole.log('unicorn');\n", {
    filename: 'ignored/index.js',
    ignores: ['ignored/**/*.js'],
});
xo.lintText("'use strict'\nconsole.log('unicorn');\n", {
    filename: 'node_modules/ignored/index.js',
});
result.errorCount; // $ExpectType number
result.warningCount; // $ExpectType number
result.results; // LintResult[]

(async () => {
    const moreExtensionsResults = await xo.lintFiles(glob, { extensions: ['md'] });
    const { errorCount, results, warningCount } = await xo.lintFiles('**/*', { cwd: 'fixtures/cwd' });
    const report = await xo.lintFiles('**/*', { cwd: 'fixtures/cwd' });
    // only get the error messages
    const errorReport = xo.getErrorResults(result.results);
    // output fixes to disk
    xo.outputFixes(report);
    // tests for the formatter
    let formatter = xo.getFormatter();
    formatter = xo.getFormatter('compact');
    formatter = xo.getFormatter('./my/formatter.js');
    xo.getFormatter('compact')(report.results);
    // output to console
    console.log(formatter(report.results));
})();
