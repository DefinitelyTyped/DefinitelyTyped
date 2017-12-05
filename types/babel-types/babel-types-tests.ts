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

const any = t.tSAnyKeyword();
t.tSArrayType(any);
t.tSAsExpression(exp, any);
t.tSBooleanKeyword();
t.tSCallSignatureDeclaration(tparam);
t.tSConstructSignatureDeclaration();
t.tSConstructorType();
t.tSDeclareFunction(id, t.noop(), [id], t.noop());
t.tSDeclareMethod([t.decorator(exp)], exp, t.noop(), [id]);
t.tSEnumDeclaration(id, [t.tSEnumMember(id)]);
t.tSEnumMember(id);
const expo = t.tSExportAssignment(exp);
// t.tSExpressionWithTypeArgumentsc - TODO: How to test t.tSQualifiedName?
const ext = t.tSExternalModuleReference(t.stringLiteral());
t.tSFunctionType();
t.tSImportEqualsDeclaration(id, ext);
const sig = t.tSIndexSignature([id]);
t.tSIndexedAccessType(any, any);
t.tSInterfaceBody([sig]);
// t.tSInterfaceDeclaration - TODO: How to test t.tSQualifiedName?
t.tSIntersectionType([any]);
t.tSLiteralType(t.stringLiteral("a"));
t.tSMappedType(t.typeParameter());
t.tSMethodSignature(id);
const block = t.tSModuleBlock([expo]);
t.tSModuleDeclaration(id, block);
t.tSNamespaceExportDeclaration(id);
t.tSNeverKeyword();
t.tSNonNullExpression(exp);
t.tSNullKeyword();
t.tSNumberKeyword();
t.tSObjectKeyword();
t.tSParameterProperty(id);
t.tSParenthesizedType(any);
t.tSPropertySignature(id);
// t.tSQualifiedName - TODO: How to test t.tSQualifiedName?
t.tSStringKeyword();
t.tSSymbolKeyword();
t.tSThisType();
t.tSTupleType([any, any]);
t.tSTypeAliasDeclaration(id, tparam, any);
t.tSTypeAnnotation(any);
t.tSTypeAssertion(any, exp);
t.tSTypeLiteral([sig]);
t.tSTypeOperator(any);
const param = t.tSTypeParameter();
t.tSTypeParameterDeclaration([param]);
t.tSTypeParameterInstantiation([any]);
t.tSTypePredicate(id, t.tSTypeAnnotation(any));
// t.tSTypeQuery - TODO: How to test t.tSQualifiedName?
// t.tSTypeReference - TODO: How to test t.tSQualifiedName?
t.tSUndefinedKeyword();
t.tSUnionType([any]);
t.tSVoidKeyword();
