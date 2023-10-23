import { parse, TagNode } from "@bbob/parser";

// $ExpectType TagNode
const tagNode = TagNode.create("test", { test: 1 }, ["Hello"]);

// $ExpectType string
tagNode.toString();

// $ExpectType Node[]
parse("[best name=value]Foo Bar[/best]");
