import mu2 = require('mu2');
import stream = require('stream');

var str: string;
var value: any;
var read: NodeJS.ReadableStream;
var parsed: mu2.IParsed;

str = mu2.root;

read = mu2.compileAndRender(str, value);

mu2.compile(str, (err: Error, parsed: mu2.IParsed) => {

});
mu2.compileText(str, str, (err: Error, parsed: mu2.IParsed) => {

});
parsed = mu2.compileText(str, str);
parsed = mu2.compileText(str);

read = mu2.render(str, value);
read = mu2.render(parsed, value);

read = mu2.renderText(str, value);
read = mu2.renderText(str, value, value);

mu2.clearCache();
mu2.clearCache(str);
