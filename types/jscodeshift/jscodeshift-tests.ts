import { ASTNode, FileInfo, API, Transform } from "jscodeshift";

// Can define transform with `function`.
function replaceWithFooTransform(fileInfo: FileInfo, api: API) {
    return api
        .jscodeshift(fileInfo.source)
        .findVariableDeclarators("foo")
        .renameTo("bar")
        .toSource();
}

// Can define transform with arrow function, using `Transform` type.
const reverseIdentifiersTransform: Transform = (file, api) => {
    const j = api.jscodeshift;

    return j(file.source)
        .find(j.Identifier)
        .forEach(path => {
            j(path).replaceWith(
                j.identifier(
                    path.node.name
                        .split("")
                        .reverse()
                        .join("")
                )
            );
        })
        .toSource();
};

// `ASTNode` supports type narrowing.
{
    const node = ({} as any) as ASTNode;
    if (node.type === "CatchClause") {
        // `node` is narrowed to `CatchClause` here
        if (node.param && node.param.type === "Identifier") {
            // `node.param` is narrowed to `Identifier` here
            if (
                node.param.typeAnnotation &&
                node.param.typeAnnotation.type === "TSTypeAnnotation"
            ) {
                // `node.param.typeAnnotation` is narrowed to `TSTypeAnnotation` here
                if (node.param.typeAnnotation.typeAnnotation.type === "TSArrayType") {
                    // `node.param.typeAnnotation.typeAnnotation` is narrowed to `TSArrayType` here
                    node.param.typeAnnotation.typeAnnotation.elementType;
                }
            }
        }
    }
}
