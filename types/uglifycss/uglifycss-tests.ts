import * as UglifyCSS from 'uglifycss';

var test1 = UglifyCSS.processString('some css string');

var test2 = UglifyCSS.processString('some css string', {
    maxLineLen: 0,
    expandVars: true,
    uglyComments: true,
    cuteComments: true
});

var test3 = UglifyCSS.processFiles(['/path/to/file']);

var test4 = UglifyCSS.processFiles(['/path/to/file'], {
    maxLineLen: 0,
    cuteComments: true
});