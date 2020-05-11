import csso = require('csso');

csso.minify('.test { color: #ff0000; }').css;
csso.minify('.test { color: #ff0000; }').map;
csso.minify('.test { color: #ff0000; }', {
    sourceMap: true,
    filename: '',
    debug: true,
    beforeCompress: () => {},
    afterCompress: () => {},
    restructure: false,
    forceMediaMerge: true,
    clone: false,
    comments: '',
    logger: () => {}
});

csso.minifyBlock('color: rgba(255, 0, 0, 1); color: #ff0000').css; // $ExpectType string
csso.minifyBlock('color: rgba(255, 0, 0, 1); color: #ff0000').map;
csso.minifyBlock('color: rgba(255, 0, 0, 1); color: #ff0000', {
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
            ['d', 'e']
        ],
    },
});

csso.compress({ type: 'CDC' }).ast; // $ExpectType CssNode
csso.compress({ type: 'CDC' }, {
    restructure: false,
    forceMediaMerge: true,
    clone: false,
    comments: '',
    logger: () => {}
}).ast; // $ExpectType CssNode

csso.syntax.parse('.b {font-weight: bold}'); // $ExpectType CssNode
