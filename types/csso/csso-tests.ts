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

csso.minifyBlock('color: rgba(255, 0, 0, 1); color: #ff0000').css;
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
    logger: () => {}
});

csso.compress({}).ast;
csso.compress({}, {
    restructure: false,
    forceMediaMerge: true,
    clone: false,
    comments: '',
    logger: () => {}
}).ast;
