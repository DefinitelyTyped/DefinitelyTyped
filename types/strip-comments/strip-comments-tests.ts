import strip = require('strip-comments');
import { block, line, first, parse, Options } from 'strip-comments';

const options: Options = {
    block: false,
    keepProtected: false,
    line: false,
    preserveNewlines: false,
};

strip('const foo = "bar";// this is a comment\n /* me too */'); // $ExpectType string
strip('const foo = "bar";// this is a comment\n /* me too */', {}); // $ExpectType string
strip('const foo = "bar";// this is a comment\n /* me too */', options); // $ExpectType string
line('const foo = "bar";// this is a comment\n /* me too */'); // $ExpectTYpe string
first('const foo = "bar";// this is a comment\n /* me too */', { keepProtected: true }); // $ExpectType string
block('const foo = "bar";// this is a comment\n /* me too */'); // $ExpectType string
parse('const foo = "bar";// this is a comment\n /* me too */'); // $ExpectType Block
strip.block('const foo = "bar";// this is a comment\n /* me too */'); // $ExpectType string
strip.line('const foo = "bar";// this is a comment\n /* me too */'); // $ExpectTYpe string
strip.first('const foo = "bar";// this is a comment\n /* me too */', { keepProtected: true }); // $ExpectType string
strip.block('const foo = "bar";// this is a comment\n /* me too */'); // $ExpectType string
strip.parse('const foo = "bar";// this is a comment\n /* me too */'); // $ExpectType Block
