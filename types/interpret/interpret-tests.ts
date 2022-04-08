import { extensions, jsVariants, Extensions } from 'interpret';

// $ExpectType Extensions
extensions;
// $ExpectType Extensions
jsVariants;

const myExts: Extensions = {
    '.babel.js': [
        {
            module: 'babel-register',
            register(hook) {
                hook({ extensions: '.js' });
            },
        },
    ],
    '.co': 'coco',
    '.coffee': ['coffeescript/register', 'coffee-script/register', 'coffeescript', 'coffee-script'],
    '.esm.js': {
        module: 'esm',
        register(hook) {
            const esmLoader = hook(module);
            require.extensions['.js'] = esmLoader('module')._extensions['.js'];
        },
    },
    '.js': null,
    '.jsx': [
        {
            module: 'node-jsx',
            register(hook) {
                hook.install({ extension: '.jsx', harmony: true });
            },
        },
    ],
    '.toml': {
        module: 'toml-require',
        register(hook) {
            hook.install();
        },
    },
    '.ts': [
        'typescript-require',
        {
            module: '@babel/register',
            register(hook) {
                hook({ extensions: '.ts' });
            },
        },
    ],
};
