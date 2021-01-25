import * as CommonMark from 'commonmark';
import * as ReactRenderer from 'commonmark-react-renderer';

var parser = new CommonMark.Parser();
var renderer = new ReactRenderer();

var input = '# This is a header\n\nAnd this is a paragraph';
var ast = parser.parse(input);
var result = renderer.render(ast);
