import * as CommonMark from "commonmark";
import * as ReactRenderer from "commonmark-react-renderer";

const parser = new CommonMark.Parser();
const renderer = new ReactRenderer();

const input = "# This is a header\n\nAnd this is a paragraph";
const ast = parser.parse(input);
const result = renderer.render(ast);
