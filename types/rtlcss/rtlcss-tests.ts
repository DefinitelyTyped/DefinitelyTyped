import rtlcss = require('rtlcss');

const css = 'body { direction:ltr; }';

// $ExpectType string
rtlcss.process(css);

const config = {
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
};

// $ExpectType Processor
rtlcss.configure(config);

// $ExpectType Processor | Plugin
rtlcss(config);
