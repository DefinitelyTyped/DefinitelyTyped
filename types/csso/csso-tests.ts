import { minify, minifyBlock, syntax, version } from 'csso';

minify('.test { color: #ff0000; }').css;
minify('.test { color: #ff0000; }').map;
minify('.test { color: #ff0000; }', {
    sourceMap: true,
    filename: '',
    debug: true,
    beforeCompress: () => {},
    afterCompress: () => {},
    restructure: false,
    forceMediaMerge: true,
    clone: false,
    comments: '',
    logger: () => {},
});

minifyBlock('color: rgba(255, 0, 0, 1); color: #ff0000').css; // $ExpectType string
minifyBlock('color: rgba(255, 0, 0, 1); color: #ff0000').map;
minifyBlock('color: rgba(255, 0, 0, 1); color: #ff0000', {
    sourceMap: true,
    filename: '',
    debug: true,
    beforeCompress: () => {},
    afterCompress: () => {},
    restructure: false,
    forceMediaMerge: true,
    clone: false,
    comments: '',
    logger: () => {},
    usage: {
        tags: ['ul', 'li'],
        ids: ['x'],
        classes: ['a', 'b'],
        blacklist: {
            tags: ['body'],
            ids: ['y'],
            classes: ['c'],
        },
        scopes: [
            ['a', 'b', 'c'],
            ['d', 'e'],
        ],
    },
});

syntax.compress({ type: 'CDC' }).ast; // $ExpectType CssNode
syntax.compress(
    { type: 'CDC' },
    {
        restructure: false,
        forceMediaMerge: true,
        clone: false,
        comments: '',
        logger: () => {},
    },
).ast; // $ExpectType CssNode

syntax.parse('.b {font-weight: bold}'); // $ExpectType CssNode

version; // $ExpectType string
