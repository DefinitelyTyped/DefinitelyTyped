import rtlcss = require('rtlcss');

const css = 'body { direction:ltr; }';

// $ExpectType string
rtlcss.process(css);
rtlcss.process(css, {}, [], {
    pre: (root, postcss) => {
        root; // $ExpectType Root_
        postcss; // $ExpectType typeof postcss
    },
    post: (root, postcss) => {
        root; // $ExpectType Root_
        postcss; // $ExpectType typeof postcss
    },
});

const options = {
    autoRename: false,
    autoRenameStrict: false,
    blacklist: {},
    clean: true,
    greedy: false,
    processUrls: false,
    stringMap: [
        {
            name: 'left-right',
            priority: 100,
            search: ['left', 'Left', 'LEFT'],
            replace: ['right', 'Right', 'RIGHT'],
            options: {
                scope: '*',
                ignoreCase: false,
            },
        },
    ],
    useCalc: false,
    processEnv: true
};

const config = {
    options,
    plugins: [],
};

// $ExpectType Processor
rtlcss.configure(config);

// $ExpectType Processor_ | Plugin
rtlcss(options);
