import * as FileLoader from 'file-loader';

let fn: FileLoader.BuildResourcePathFn;

// @ts-expect-error
fn = () => {};
// @ts-expect-error
fn = () => 1;
fn = () => ''; // $ExpectType () => string
fn = url => ''; // $ExpectType (url: string) => string
// @ts-expect-error
fn = (url, resourcePath, context, forth) => '';

let options: FileLoader.Options;

options = {}; // $ExpectType {}
options = { name: '' }; // $ExpectType { name: string; }
options = { name: () => '' }; // $ExpectType { name: () => string; }
options = { outputPath: '' }; // $ExpectType { outputPath: string; }
options = { outputPath: () => '' }; // $ExpectType { outputPath: () => string; }
options = { publicPath: '' }; // $ExpectType { publicPath: string; }
options = { publicPath: () => '' }; // $ExpectType { publicPath: () => string; }
options = { context: '' }; // $ExpectType { context: string; }
// @ts-expect-error
options = { context: () => '' };
options = { emitFile: true }; // $ExpectType { emitFile: true; }
options = { emitFile: false }; // $ExpectType { emitFile: false; }
// @ts-expect-error
options = { emitFile: () => true };
options = { regExp: /regex/ }; // $ExpectType { regExp: RegExp; }
// @ts-expect-error
options = { regExp: 'regex' };
// @ts-expect-error
options = { postTransformPublicPath: '' };
options = { esModule: true }; // $ExpectType { esModule: true; }
