import path = require('path-browserify');

const basename: string = path.basename('.js', '.js');
const dirname: string = path.dirname('/a/b/');
const extname: string = path.extname('.\\');
const isAbsolute: boolean = path.isAbsolute('/');
const join: string = path.join('.', 'x/b', '..', '/b/c.js');
const parse: path.PathObject = path.parse('C:\\path\\dir\\index.html');
const relative: string = path.relative('c:/blah\\blah', 'd:/games');
const resolve: string = path.resolve('c:/blah\\blah', 'd:/games', 'c:../a');
