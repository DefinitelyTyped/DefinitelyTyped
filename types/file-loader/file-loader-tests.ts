import * as FileLoader from 'file-loader';

let fn: FileLoader.BuildResourcePathFn;

fn = () => {}; // $ExpectError
fn = () => 1; // $ExpectError
fn = () => ''; // $ExpectType () => string
fn = url => ''; // $ExpectType (url: string) => string
fn = (url, resourcePath, context, forth) => ''; // $ExpectError

let options: FileLoader.Options;

options = {}; // $ExpectType {}
options = { name: '' }; // $ExpectType { name: string; }
options = { name: () => '' }; // $ExpectType { name: () => string; }
options = { outputPath: '' }; // $ExpectType { outputPath: string; }
options = { outputPath: () => '' }; // $ExpectType { outputPath: () => string; }
options = { publicPath: '' }; // $ExpectType { publicPath: string; }
options = { publicPath: () => '' }; // $ExpectType { publicPath: () => string; }
options = { context: '' }; // $ExpectType { context: string; }
options = { context: () => '' }; // $ExpectError
options = { emitFile: true }; // $ExpectType { emitFile: true; }
options = { emitFile: false }; // $ExpectType { emitFile: false; }
options = { emitFile: () => true }; // $ExpectError
options = { regExp: /regex/ }; // $ExpectType { regExp: RegExp; }
options = { regExp: 'regex' }; // $ExpectError
options = { postTransformPublicPath: '' }; // $ExpectError
