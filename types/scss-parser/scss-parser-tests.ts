import { Node, parse, stringify } from "scss-parser";

declare const node: Node;

parse(''); // $ExpectType Node
stringify(node); // $ExpectType string
