// Examples from https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#babel-types
import traverse from "babel-traverse";
import * as t from "babel-types";

declare const ast: t.Node;

traverse(ast, {
    enter(path) {
        const node = path.node;
        if (t.isIdentifier(node, { name: "n" })) {
            node.name = "x";
        }
        if (t.isFunctionExpression(node)) {
            node.params = [t.identifier('param')];
        }
    }
});

if (t.isBinaryExpression(ast)) {
    ast.left;
    ast.right;
    ast.operator;
}

t.assertBinaryExpression(ast);
t.assertBinaryExpression(ast, { operator: "*" });

const exp: t.Expression = t.nullLiteral();

// React examples:
// https://github.com/babel/babel/blob/4e50b2d9d9c376cee7a2cbf56553fe5b982ea53c/packages/babel-plugin-transform-react-inline-elements/src/index.js#L61
traverse(ast, {
    JSXElement(path, file) {
        const { node } = path;
        const open = node.openingElement;

        // init
        const type = open.name;

        let newType: t.StringLiteral;
        if (t.isJSXIdentifier(type) && t.react.isCompatTag(type.name)) {
            newType = t.stringLiteral(type.name);
        }

        const args: any[] = [];
        if (node.children.length) {
            const children = t.react.buildChildren(node);
            args.push(
                t.unaryExpression("void", t.numericLiteral(0), true),
                ...children,
            );
        }
    }
});

// TypeScript Types
// TODO: Test all variants of these functions' signatures

const id = t.identifier("id");
const tparam = t.typeParameterDeclaration([id]);

const any = t.TSAnyKeyword();
t.TSArrayType(any);
t.TSAsExpression(exp, any);
t.TSBooleanKeyword();
t.TSCallSignatureDeclaration(tparam);
t.TSConstructSignatureDeclaration();
t.TSConstructorType();
t.TSDeclareFunction(id, t.noop(), [id], t.noop());
t.TSDeclareMethod([t.decorator(exp)], exp, t.noop(), [id]);
t.TSEnumDeclaration(id, [t.TSEnumMember(id)]);
t.TSEnumMember(id);
const expo = t.TSExportAssignment(exp);
t.TSExpressionWithTypeArguments(id);
const ext = t.TSExternalModuleReference(t.stringLiteral());
t.TSFunctionType();
t.TSImportEqualsDeclaration(id, ext);
const sig = t.TSIndexSignature([id]);
t.TSIndexedAccessType(any, any);
t.TSInterfaceBody([sig]);
t.TSInterfaceDeclaration(id, null, null, t.TSInterfaceBody([sig]));
t.TSIntersectionType([any]);
t.TSLiteralType(t.stringLiteral("a"));
t.TSMappedType(t.typeParameter());
t.TSMethodSignature(id);
const block = t.TSModuleBlock([expo]);
t.TSModuleDeclaration(id, block);
t.TSNamespaceExportDeclaration(id);
t.TSNeverKeyword();
t.TSNonNullExpression(exp);
t.TSNullKeyword();
t.TSNumberKeyword();
t.TSObjectKeyword();
t.TSParameterProperty(id);
t.TSParenthesizedType(any);
t.TSPropertySignature(id);
t.TSQualifiedName(id, id);
t.TSStringKeyword();
t.TSSymbolKeyword();
t.TSThisType();
t.TSTupleType([any, any]);
t.TSTypeAliasDeclaration(id, tparam, any);
t.TSTypeAnnotation(any);
t.TSTypeAssertion(any, exp);
t.TSTypeLiteral([sig]);
t.TSTypeOperator(any);
const param = t.TSTypeParameter();
t.TSTypeParameterDeclaration([param]);
t.TSTypeParameterInstantiation([any]);
t.TSTypePredicate(id, t.TSTypeAnnotation(any));
t.TSTypeQuery(id);
t.TSTypeReference(id);
t.TSUndefinedKeyword();
t.TSUnionType([any]);
t.TSVoidKeyword();
