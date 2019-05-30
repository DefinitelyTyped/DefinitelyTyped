const ast = jsonToAst('{"a": 1}');
processValueNode(ast);

function logPos(node: jsonToAst.ASTNode) {
	// $ExpectType Location | undefined;
	const location = node.loc;

	if (location != null) {
		// $ExpectType Position;
		location.start;

		// $ExpectType Position;
		location.end;

		// $ExpectType string | null;
		location.source;
	}
}

function processValueNode(ast: jsonToAst.ValueNode) {
	logPos(ast);

	switch (ast.type) {
		case "Object":
			// $ExpectType ObjectNode
			ast;
			ast.children.forEach(child => {
				// $ExpectType PropertyNode
				child;

				// $ExpectType IdentifierNode
				child.key;

				processValueNode(child.value);
			});
			break;
		case "Array":
			// $ExpectType ArrayNode
			ast;
			ast.children.forEach(child => {
				// $ExpectType ObjectNode | ArrayNode | LiteralNode
				child;

				processValueNode(child);
			});
			break;
		case "Literal":
			// $ExpectType LiteralNode
			ast;

			// $ExpectType string | number | boolean | null
			ast.value;

			// $ExpectType string
			ast.raw;
			break;
	}
}
