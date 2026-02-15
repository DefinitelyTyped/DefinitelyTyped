import { ASTNode, CommentNode, parse, ParseOptions, stringify, TagNode, TextNode } from "html-parse-stringify";

// Test parse function
const ast: ASTNode[] = parse("<div class=\"oh\"><p>hi</p></div>");

// Test parse with options
const astWithOpts: ASTNode[] = parse("<div><my-component></my-component></div>", {
    components: {
        "my-component": true,
    },
});

// Test stringify function
const htmlString: string = stringify(ast);

// Test roundtrip
const ast2: ASTNode[] = parse("<p>hello</p>");
const html2: string = stringify(ast2);

// Test node type narrowing
for (const node of ast) {
    if (node.type === "tag") {
        const tagNode: TagNode = node;
        const name: string = tagNode.name;
        const attrs: { [key: string]: string } = tagNode.attrs;
        const isVoid: boolean = tagNode.voidElement;
        const children: ASTNode[] = tagNode.children;
    } else if (node.type === "text") {
        const textNode: TextNode = node;
        const content: string = textNode.content;
    } else if (node.type === "comment") {
        const commentNode: CommentNode = node;
        const comment: string = commentNode.comment;
    } else if (node.type === "component") {
        const name: string = node.name;
        const attrs: { [key: string]: string } = node.attrs;
    }
}

// Test with complex HTML
const complexAst = parse(`
    <div id="main" class="container">
        <h1>Title</h1>
        <!-- A comment -->
        <p>Some <strong>bold</strong> text</p>
        <img src="image.jpg" />
    </div>
`);

// Test roundtrip
const original = "<div><p>test</p></div>";
const roundtrip: string = stringify(parse(original));
