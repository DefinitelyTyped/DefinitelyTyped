// $ExpectType ValueNode
const ast = jsonToAst('{"a": 1}');
processValueNode(ast);

function logPos(node: jsonToAst.ASTNode) {
    const location = node.loc; // $ExpectType Location | undefined

    if (location != null) {
        location.start; // $ExpectType Position
        location.end; // $ExpectType Position
        location.source; // $ExpectType string | null
    }
}

function processValueNode(ast: jsonToAst.ValueNode) {
    logPos(ast);

    switch (ast.type) {
        case "Object":
            ast; // $ExpectType ObjectNode

            ast.children.forEach(child => {
                child; // $ExpectType PropertyNode
                child.key; // $ExpectType IdentifierNode

                processValueNode(child.value);
            });
            break;
        case "Array":
            ast; // $ExpectType ArrayNode

            ast.children.forEach(child => {
                child; // $ExpectType ValueNode

                processValueNode(child);
            });
            break;
        case "Literal":
            ast; // $ExpectType LiteralNode
            ast.value; // $ExpectType string | number | boolean | null
            ast.raw; // $ExpectType string
            break;
    }
}
