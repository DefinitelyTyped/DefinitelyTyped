/// <reference types="node" />

import * as UglifyJS from 'uglify-js';
import * as fs from 'fs';

var result = UglifyJS.minify("/path/to/file.js");
console.log(result.code); // minified output
// if you need to pass code instead of file name
var result = UglifyJS.minify("var b = function () {};", {fromString: true});

var result = UglifyJS.minify([ "file1.js", "file2.js", "file3.js" ]);
console.log(result.code);

var result = UglifyJS.minify([ "file1.js", "file2.js", "file3.js" ], {
    outSourceMap: "out.js.map"
});
console.log(result.code); // minified output
console.log(result.map);

var result = UglifyJS.minify([ "file1.js", "file2.js", "file3.js" ], {
    outSourceMap: "out.js.map",
    sourceRoot: "http://example.com/src"
});

var result = UglifyJS.minify("compiled.js", {
    inSourceMap: "compiled.js.map",
    outSourceMap: "minified.js.map"
});
// same as before, it returns `code` and `map`

const my_source_map_string = 'sourceMap';
var result = UglifyJS.minify("compiled.js", {
    inSourceMap: JSON.parse(my_source_map_string),
    outSourceMap: "minified.js.map"
});

var toplevel_ast = UglifyJS.parse(code, {});

var toplevel: UglifyJS.AST_Toplevel = null;
const files = ['file1', 'file2'];
files.forEach(function(file){
    var code = fs.readFileSync(file, "utf8");
    toplevel = UglifyJS.parse(code, {
        filename: file,
        toplevel: toplevel
    });
});

toplevel.figure_out_scope()

var compressor = UglifyJS.Compressor({});
var compressed_ast = toplevel.transform(compressor);

compressed_ast.figure_out_scope();
compressed_ast.compute_char_frequency();
compressed_ast.mangle_names();

var stream = UglifyJS.OutputStream({});
compressed_ast.print(stream);
var code = stream.toString(); // this is your minified code

var code = compressed_ast.print_to_string({});

var source_map = UglifyJS.SourceMap({});
var stream = UglifyJS.OutputStream({
    //...
    source_map: source_map
});
compressed_ast.print(stream);

var code = stream.toString();
var map = source_map.toString(); // json output for your source map
