import { ASTNode, FileInfo, API, Transform, Parser } from "jscodeshift";
import * as testUtils from "jscodeshift/src/testUtils";

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

// Can define a custom parser.
const parser: Parser = {
    parse(source, options) {
        // return estree compatible AST
        return { type: "root" };
    }
};

// Can pass options to recast
const transformWithRecastFormattingOptions: Transform = (file, { j }) => {
    return j(file.source).toSource({ quote: "single" });
};

const transformWithRecastParseOptions: Transform = (file, { j }) => {
    return j(file.source, {
        /* ...passes options to recast's parse method... */
    }).toSource();
};

// `ASTNode` supports type narrowing.
{
    const node = ({} as any) as ASTNode;
    if (node.type === "CatchClause") {
        // $ExpectType CatchClause
        node;

        if (node.param && node.param.type === "Identifier") {
            // $ExpectType Identifier
            node.param;

            if (
                node.param.typeAnnotation &&
                node.param.typeAnnotation.type === "TSTypeAnnotation"
            ) {
                // $ExpectType TSTypeAnnotation
                node.param.typeAnnotation;

                if (node.param.typeAnnotation.typeAnnotation.type === "TSArrayType") {
                    // $ExpectType TSArrayType
                    node.param.typeAnnotation.typeAnnotation;
                }
            }
        }
    }
}

// Can define a test
testUtils.defineTest(
    "directory",
    "transformName",
    { opt: true },
);
