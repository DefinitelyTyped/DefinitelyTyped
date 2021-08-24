import * as hook from 'css-modules-require-hook';

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#usage
//

hook({ generateScopedName: '[name]__[local]___[hash:base64:5]' });

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#adding-custom-postcss-plugins
//

hook({
    prepend: [
        () => {
            // my prepender
        },
    ],
});

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#specify-custom-pattern-to-build-generic-names
//

hook({ generateScopedName: '[name]__[local]___[hash:base64:5]' });

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#using-stylus-as-a-preprocessor
//

hook({
    extensions: ['.styl'],
    preprocessCss: (css: string, filepath: string) => {
        // my preprocesser
    },
});

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#tuning-options
//

hook({ /* my option */ });

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#devmode-boolean
//

hook({ devMode: false });

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#extensions-array
//

hook({ extensions: ['.scss', '.sass'] });

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#ignore-functionregexstring
//

hook({ ignore: (file: string) => false });
hook({ ignore: 'unused' });
hook({ ignore: /\.test\.(css|scss|sass)$/ });

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#preprocesscss-function
//

hook({ preprocessCss: (css: string, filepath: string) => css });

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#processcss-function
//

hook({ processCss: (css: string, filepath: string) => css });

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#processoropts-object
//

hook({
    extensions: '.scss',
    processorOpts: {
        parser: () => {
            // my parser
        },
    },
});

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#camelcase-boolean
//

hook({ camelCase: true });

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#append-array
//

hook({
    append: [
        () => {
            // another plugin
        },
    ],
});

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#prepend-array
//

hook({
    prepend: [
        () => {
            // again, another plugin
        },
    ],
});

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#use-array
//

hook({
    use: [
        () => {
            // they like plugins very much
        },
    ],
});

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#createimportedname-function
//

hook({
    createImportedName: (css: string, filepath: string) => {
        // my import name creator
    },
});

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#generatescopedname-stringfunction
//

hook({ generateScopedName: '[name]__[local]___[hash:base64:5]' });
hook({
    generateScopedName: () => {
        // should generate something
    },
});

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#hashprefix-string
//

hook({ hashPrefix: 'awesome_' });

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#mode-string
//

hook({ mode: 'global' });
hook({ mode: 'local' });
hook({ mode: 'pure' });

//
// https://github.com/css-modules/css-modules-require-hook/blob/master/README.md#rootdir-string
//

hook({ rootDir: './my-folder' });
