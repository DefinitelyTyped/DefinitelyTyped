import parsePath = require('parse-filepath');

const parsedPath = parsePath('foo/bar/baz/index.js');

parsedPath.absolute; // $ExpectType string
parsedPath.base; // $ExpectType string
parsedPath.basename; // $ExpectType string
parsedPath.dir; // $ExpectType string
parsedPath.dirname; // $ExpectType string
parsedPath.ext; // $ExpectType string
parsedPath.extname; // $ExpectType string
parsedPath.isAbsolute; // $ExpectType boolean
parsedPath.name; // $ExpectType string
parsedPath.path; // $ExpectType string
parsedPath.root; // $ExpectType string
parsedPath.stem; // $ExpectType string
