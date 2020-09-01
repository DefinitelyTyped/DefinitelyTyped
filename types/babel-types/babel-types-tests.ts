import './ts3.6/babel-types-tests';
import * as t from 'babel-types';

function testArrayExpression(node: t.Node) {
    t.assertArrayExpression(node);
    node; // $ExpectType ArrayExpression
}

function testAssignmentExpression(node: t.Node) {
    t.assertAssignmentExpression(node);
    node; // $ExpectType AssignmentExpression
}

function testBinaryExpression(node: t.Node) {
    t.assertBinaryExpression(node);
    node; // $ExpectType BinaryExpression
}

function testDirective(node: t.Node) {
    t.assertDirective(node);
    node; // $ExpectType Directive
}

function testDirectiveLiteral(node: t.Node) {
    t.assertDirectiveLiteral(node);
    node; // $ExpectType DirectiveLiteral
}

function testBlockStatement(node: t.Node) {
    t.assertBlockStatement(node);
    node; // $ExpectType BlockStatement
}

function testBreakStatement(node: t.Node) {
    t.assertBreakStatement(node);
    node; // $ExpectType BreakStatement
}

function testCallExpression(node: t.Node) {
    t.assertCallExpression(node);
    node; // $ExpectType CallExpression
}

function testCatchClause(node: t.Node) {
    t.assertCatchClause(node);
    node; // $ExpectType CatchClause
}

function testConditionalExpression(node: t.Node) {
    t.assertConditionalExpression(node);
    node; // $ExpectType ConditionalExpression
}

function testContinueStatement(node: t.Node) {
    t.assertContinueStatement(node);
    node; // $ExpectType ContinueStatement
}

function testDebuggerStatement(node: t.Node) {
    t.assertDebuggerStatement(node);
    node; // $ExpectType DebuggerStatement
}

function testDoWhileStatement(node: t.Node) {
    t.assertDoWhileStatement(node);
    node; // $ExpectType DoWhileStatement
}

function testEmptyStatement(node: t.Node) {
    t.assertEmptyStatement(node);
    node; // $ExpectType EmptyStatement
}

function testExpressionStatement(node: t.Node) {
    t.assertExpressionStatement(node);
    node; // $ExpectType ExpressionStatement
}

function testFile(node: t.Node) {
    t.assertFile(node);
    node; // $ExpectType File
}

function testForInStatement(node: t.Node) {
    t.assertForInStatement(node);
    node; // $ExpectType ForInStatement
}

function testForStatement(node: t.Node) {
    t.assertForStatement(node);
    node; // $ExpectType ForStatement
}

function testFunctionDeclaration(node: t.Node) {
    t.assertFunctionDeclaration(node);
    node; // $ExpectType FunctionDeclaration
}

function testFunctionExpression(node: t.Node) {
    t.assertFunctionExpression(node);
    node; // $ExpectType FunctionExpression
}

function testIdentifier(node: t.Node) {
    t.assertIdentifier(node);
    node; // $ExpectType Identifier
}

function testIfStatement(node: t.Node) {
    t.assertIfStatement(node);
    node; // $ExpectType IfStatement
}

function testLabeledStatement(node: t.Node) {
    t.assertLabeledStatement(node);
    node; // $ExpectType LabeledStatement
}

function testStringLiteral(node: t.Node) {
    t.assertStringLiteral(node);
    node; // $ExpectType StringLiteral
}

function testNumericLiteral(node: t.Node) {
    t.assertNumericLiteral(node);
    node; // $ExpectType NumericLiteral
}

/** @deprecated */
function testNumberLiteral(node: t.Node) {
    t.assertNumberLiteral(node);
    node; // $ExpectType NumericLiteral
}

function testNullLiteral(node: t.Node) {
    t.assertNullLiteral(node);
    node; // $ExpectType NullLiteral
}

function testBooleanLiteral(node: t.Node) {
    t.assertBooleanLiteral(node);
    node; // $ExpectType BooleanLiteral
}

function testRegExpLiteral(node: t.Node) {
    t.assertRegExpLiteral(node);
    node; // $ExpectType RegExpLiteral
}

/** @deprecated */
function testRegexLiteral(node: t.Node) {
    t.assertRegexLiteral(node);
    node; // $ExpectType RegExpLiteral
}

function testLogicalExpression(node: t.Node) {
    t.assertLogicalExpression(node);
    node; // $ExpectType LogicalExpression
}

function testMemberExpression(node: t.Node) {
    t.assertMemberExpression(node);
    node; // $ExpectType MemberExpression
}

function testNewExpression(node: t.Node) {
    t.assertNewExpression(node);
    node; // $ExpectType NewExpression
}

function testProgram(node: t.Node) {
    t.assertProgram(node);
    node; // $ExpectType Program
}

function testObjectExpression(node: t.Node) {
    t.assertObjectExpression(node);
    node; // $ExpectType ObjectExpression
}

function testObjectMethod(node: t.Node) {
    t.assertObjectMethod(node);
    node; // $ExpectType ObjectMethod
}

function testObjectProperty(node: t.Node) {
    t.assertObjectProperty(node);
    node; // $ExpectType ObjectProperty
}

function testRestElement(node: t.Node) {
    t.assertRestElement(node);
    node; // $ExpectType RestElement
}

function testReturnStatement(node: t.Node) {
    t.assertReturnStatement(node);
    node; // $ExpectType ReturnStatement
}

function testSequenceExpression(node: t.Node) {
    t.assertSequenceExpression(node);
    node; // $ExpectType SequenceExpression
}

function testSwitchCase(node: t.Node) {
    t.assertSwitchCase(node);
    node; // $ExpectType SwitchCase
}

function testSwitchStatement(node: t.Node) {
    t.assertSwitchStatement(node);
    node; // $ExpectType SwitchStatement
}

function testThisExpression(node: t.Node) {
    t.assertThisExpression(node);
    node; // $ExpectType ThisExpression
}

function testThrowStatement(node: t.Node) {
    t.assertThrowStatement(node);
    node; // $ExpectType ThrowStatement
}

function testTryStatement(node: t.Node) {
    t.assertTryStatement(node);
    node; // $ExpectType TryStatement
}

function testUnaryExpression(node: t.Node) {
    t.assertUnaryExpression(node);
    node; // $ExpectType UnaryExpression
}

function testUpdateExpression(node: t.Node) {
    t.assertUpdateExpression(node);
    node; // $ExpectType UpdateExpression
}

function testVariableDeclaration(node: t.Node) {
    t.assertVariableDeclaration(node);
    node; // $ExpectType VariableDeclaration
}

function testVariableDeclarator(node: t.Node) {
    t.assertVariableDeclarator(node);
    node; // $ExpectType VariableDeclarator
}

function testWhileStatement(node: t.Node) {
    t.assertWhileStatement(node);
    node; // $ExpectType WhileStatement
}

function testWithStatement(node: t.Node) {
    t.assertWithStatement(node);
    node; // $ExpectType WithStatement
}

function testAssignmentPattern(node: t.Node) {
    t.assertAssignmentPattern(node);
    node; // $ExpectType AssignmentPattern
}

function testArrayPattern(node: t.Node) {
    t.assertArrayPattern(node);
    node; // $ExpectType ArrayPattern
}

function testArrowFunctionExpression(node: t.Node) {
    t.assertArrowFunctionExpression(node);
    node; // $ExpectType ArrowFunctionExpression
}

function testClassBody(node: t.Node) {
    t.assertClassBody(node);
    node; // $ExpectType ClassBody
}

function testClassDeclaration(node: t.Node) {
    t.assertClassDeclaration(node);
    node; // $ExpectType ClassDeclaration
}

function testClassExpression(node: t.Node) {
    t.assertClassExpression(node);
    node; // $ExpectType ClassExpression
}

function testExportAllDeclaration(node: t.Node) {
    t.assertExportAllDeclaration(node);
    node; // $ExpectType ExportAllDeclaration
}

function testExportDefaultDeclaration(node: t.Node) {
    t.assertExportDefaultDeclaration(node);
    node; // $ExpectType ExportDefaultDeclaration
}

function testExportNamedDeclaration(node: t.Node) {
    t.assertExportNamedDeclaration(node);
    node; // $ExpectType ExportNamedDeclaration
}

function testExportSpecifier(node: t.Node) {
    t.assertExportSpecifier(node);
    node; // $ExpectType ExportSpecifier
}

function testForOfStatement(node: t.Node) {
    t.assertForOfStatement(node);
    node; // $ExpectType ForOfStatement
}

function testImportDeclaration(node: t.Node) {
    t.assertImportDeclaration(node);
    node; // $ExpectType ImportDeclaration
}

function testImportDefaultSpecifier(node: t.Node) {
    t.assertImportDefaultSpecifier(node);
    node; // $ExpectType ImportDefaultSpecifier
}

function testImportNamespaceSpecifier(node: t.Node) {
    t.assertImportNamespaceSpecifier(node);
    node; // $ExpectType ImportNamespaceSpecifier
}

function testImportSpecifier(node: t.Node) {
    t.assertImportSpecifier(node);
    node; // $ExpectType ImportSpecifier
}

function testMetaProperty(node: t.Node) {
    t.assertMetaProperty(node);
    node; // $ExpectType MetaProperty
}

function testClassMethod(node: t.Node) {
    t.assertClassMethod(node);
    node; // $ExpectType ClassMethod
}

function testObjectPattern(node: t.Node) {
    t.assertObjectPattern(node);
    node; // $ExpectType ObjectPattern
}

function testSpreadElement(node: t.Node) {
    t.assertSpreadElement(node);
    node; // $ExpectType SpreadElement
}

function testSuper(node: t.Node) {
    t.assertSuper(node);
    node; // $ExpectType Super
}

function testTaggedTemplateExpression(node: t.Node) {
    t.assertTaggedTemplateExpression(node);
    node; // $ExpectType TaggedTemplateExpression
}

function testTemplateElement(node: t.Node) {
    t.assertTemplateElement(node);
    node; // $ExpectType TemplateElement
}

function testTemplateLiteral(node: t.Node) {
    t.assertTemplateLiteral(node);
    node; // $ExpectType TemplateLiteral
}

function testYieldExpression(node: t.Node) {
    t.assertYieldExpression(node);
    node; // $ExpectType YieldExpression
}

function testAnyTypeAnnotation(node: t.Node) {
    t.assertAnyTypeAnnotation(node);
    node; // $ExpectType AnyTypeAnnotation
}

function testArrayTypeAnnotation(node: t.Node) {
    t.assertArrayTypeAnnotation(node);
    node; // $ExpectType ArrayTypeAnnotation
}

function testBooleanTypeAnnotation(node: t.Node) {
    t.assertBooleanTypeAnnotation(node);
    node; // $ExpectType BooleanTypeAnnotation
}

function testBooleanLiteralTypeAnnotation(node: t.Node) {
    t.assertBooleanLiteralTypeAnnotation(node);
    node; // $ExpectType BooleanLiteralTypeAnnotation
}

function testNullLiteralTypeAnnotation(node: t.Node) {
    t.assertNullLiteralTypeAnnotation(node);
    node; // $ExpectType NullLiteralTypeAnnotation
}

function testClassImplements(node: t.Node) {
    t.assertClassImplements(node);
    node; // $ExpectType ClassImplements
}

function testClassProperty(node: t.Node) {
    t.assertClassProperty(node);
    node; // $ExpectType ClassProperty
}

function testDeclareClass(node: t.Node) {
    t.assertDeclareClass(node);
    node; // $ExpectType DeclareClass
}

function testDeclareFunction(node: t.Node) {
    t.assertDeclareFunction(node);
    node; // $ExpectType DeclareFunction
}

function testDeclareInterface(node: t.Node) {
    t.assertDeclareInterface(node);
    node; // $ExpectType DeclareInterface
}

function testDeclareModule(node: t.Node) {
    t.assertDeclareModule(node);
    node; // $ExpectType DeclareModule
}

function testDeclareTypeAlias(node: t.Node) {
    t.assertDeclareTypeAlias(node);
    node; // $ExpectType DeclareTypeAlias
}

function testDeclareVariable(node: t.Node) {
    t.assertDeclareVariable(node);
    node; // $ExpectType DeclareVariable
}

function testExistentialTypeParam(node: t.Node) {
    t.assertExistentialTypeParam(node);
    node; // $ExpectType ExistentialTypeParam
}

function testFunctionTypeAnnotation(node: t.Node) {
    t.assertFunctionTypeAnnotation(node);
    node; // $ExpectType FunctionTypeAnnotation
}

function testFunctionTypeParam(node: t.Node) {
    t.assertFunctionTypeParam(node);
    node; // $ExpectType FunctionTypeParam
}

function testGenericTypeAnnotation(node: t.Node) {
    t.assertGenericTypeAnnotation(node);
    node; // $ExpectType GenericTypeAnnotation
}

function testInterfaceExtends(node: t.Node) {
    t.assertInterfaceExtends(node);
    node; // $ExpectType InterfaceExtends
}

function testInterfaceDeclaration(node: t.Node) {
    t.assertInterfaceDeclaration(node);
    node; // $ExpectType InterfaceDeclaration
}

function testIntersectionTypeAnnotation(node: t.Node) {
    t.assertIntersectionTypeAnnotation(node);
    node; // $ExpectType IntersectionTypeAnnotation
}

function testMixedTypeAnnotation(node: t.Node) {
    t.assertMixedTypeAnnotation(node);
    node; // $ExpectType MixedTypeAnnotation
}

function testNullableTypeAnnotation(node: t.Node) {
    t.assertNullableTypeAnnotation(node);
    node; // $ExpectType NullableTypeAnnotation
}

function testNumericLiteralTypeAnnotation(node: t.Node) {
    t.assertNumericLiteralTypeAnnotation(node);
    node; // $ExpectType NumericLiteralTypeAnnotation
}

function testNumberTypeAnnotation(node: t.Node) {
    t.assertNumberTypeAnnotation(node);
    node; // $ExpectType NumberTypeAnnotation
}

function testStringLiteralTypeAnnotation(node: t.Node) {
    t.assertStringLiteralTypeAnnotation(node);
    node; // $ExpectType StringLiteralTypeAnnotation
}

function testStringTypeAnnotation(node: t.Node) {
    t.assertStringTypeAnnotation(node);
    node; // $ExpectType StringTypeAnnotation
}

function testThisTypeAnnotation(node: t.Node) {
    t.assertThisTypeAnnotation(node);
    node; // $ExpectType ThisTypeAnnotation
}

function testTupleTypeAnnotation(node: t.Node) {
    t.assertTupleTypeAnnotation(node);
    node; // $ExpectType TupleTypeAnnotation
}

function testTypeofTypeAnnotation(node: t.Node) {
    t.assertTypeofTypeAnnotation(node);
    node; // $ExpectType TypeofTypeAnnotation
}

function testTypeAlias(node: t.Node) {
    t.assertTypeAlias(node);
    node; // $ExpectType TypeAlias
}

function testTypeAnnotation(node: t.Node) {
    t.assertTypeAnnotation(node);
    node; // $ExpectType TypeAnnotation
}

function testTypeCastExpression(node: t.Node) {
    t.assertTypeCastExpression(node);
    node; // $ExpectType TypeCastExpression
}

function testTypeParameter(node: t.Node) {
    t.assertTypeParameter(node);
    node; // $ExpectType TypeParameter
}

function testTypeParameterDeclaration(node: t.Node) {
    t.assertTypeParameterDeclaration(node);
    node; // $ExpectType TypeParameterDeclaration
}

function testTypeParameterInstantiation(node: t.Node) {
    t.assertTypeParameterInstantiation(node);
    node; // $ExpectType TypeParameterInstantiation
}

function testObjectTypeAnnotation(node: t.Node) {
    t.assertObjectTypeAnnotation(node);
    node; // $ExpectType ObjectTypeAnnotation
}

function testObjectTypeCallProperty(node: t.Node) {
    t.assertObjectTypeCallProperty(node);
    node; // $ExpectType ObjectTypeCallProperty
}

function testObjectTypeIndexer(node: t.Node) {
    t.assertObjectTypeIndexer(node);
    node; // $ExpectType ObjectTypeIndexer
}

function testObjectTypeProperty(node: t.Node) {
    t.assertObjectTypeProperty(node);
    node; // $ExpectType ObjectTypeProperty
}

function testQualifiedTypeIdentifier(node: t.Node) {
    t.assertQualifiedTypeIdentifier(node);
    node; // $ExpectType QualifiedTypeIdentifier
}

function testUnionTypeAnnotation(node: t.Node) {
    t.assertUnionTypeAnnotation(node);
    node; // $ExpectType UnionTypeAnnotation
}

function testVoidTypeAnnotation(node: t.Node) {
    t.assertVoidTypeAnnotation(node);
    node; // $ExpectType VoidTypeAnnotation
}

function testJSXAttribute(node: t.Node) {
    t.assertJSXAttribute(node);
    node; // $ExpectType JSXAttribute
}

function testJSXClosingElement(node: t.Node) {
    t.assertJSXClosingElement(node);
    node; // $ExpectType JSXClosingElement
}

function testJSXElement(node: t.Node) {
    t.assertJSXElement(node);
    node; // $ExpectType JSXElement
}

function testJSXEmptyExpression(node: t.Node) {
    t.assertJSXEmptyExpression(node);
    node; // $ExpectType JSXEmptyExpression
}

function testJSXExpressionContainer(node: t.Node) {
    t.assertJSXExpressionContainer(node);
    node; // $ExpectType JSXExpressionContainer
}

function testJSXIdentifier(node: t.Node) {
    t.assertJSXIdentifier(node);
    node; // $ExpectType JSXIdentifier
}

function testJSXMemberExpression(node: t.Node) {
    t.assertJSXMemberExpression(node);
    node; // $ExpectType JSXMemberExpression
}

function testJSXNamespacedName(node: t.Node) {
    t.assertJSXNamespacedName(node);
    node; // $ExpectType JSXNamespacedName
}

function testJSXOpeningElement(node: t.Node) {
    t.assertJSXOpeningElement(node);
    node; // $ExpectType JSXOpeningElement
}

function testJSXSpreadAttribute(node: t.Node) {
    t.assertJSXSpreadAttribute(node);
    node; // $ExpectType JSXSpreadAttribute
}

function testJSXText(node: t.Node) {
    t.assertJSXText(node);
    node; // $ExpectType JSXText
}

function testNoop(node: t.Node) {
    t.assertNoop(node);
    node; // $ExpectType Noop
}

function testParenthesizedExpression(node: t.Node) {
    t.assertParenthesizedExpression(node);
    node; // $ExpectType ParenthesizedExpression
}

function testAwaitExpression(node: t.Node) {
    t.assertAwaitExpression(node);
    node; // $ExpectType AwaitExpression
}

function testBindExpression(node: t.Node) {
    t.assertBindExpression(node);
    node; // $ExpectType BindExpression
}

function testDecorator(node: t.Node) {
    t.assertDecorator(node);
    node; // $ExpectType Decorator
}

function testDoExpression(node: t.Node) {
    t.assertDoExpression(node);
    node; // $ExpectType DoExpression
}

function testExportDefaultSpecifier(node: t.Node) {
    t.assertExportDefaultSpecifier(node);
    node; // $ExpectType ExportDefaultSpecifier
}

function testExportNamespaceSpecifier(node: t.Node) {
    t.assertExportNamespaceSpecifier(node);
    node; // $ExpectType ExportNamespaceSpecifier
}

function testRestProperty(node: t.Node) {
    t.assertRestProperty(node);
    node; // $ExpectType RestProperty
}

function testSpreadProperty(node: t.Node) {
    t.assertSpreadProperty(node);
    node; // $ExpectType SpreadProperty
}

function testExpression(node: t.Node) {
    t.assertExpression(node);
    node; // $ExpectType Expression
}

function testBinary(node: t.Node) {
    t.assertBinary(node);
    node; // $ExpectType Binary
}

function testScopable(node: t.Node) {
    t.assertScopable(node);
    node; // $ExpectType Scopable
}

function testBlockParent(node: t.Node) {
    t.assertBlockParent(node);
    node; // $ExpectType BlockParent
}

function testBlock(node: t.Node) {
    t.assertBlock(node);
    node; // $ExpectType Block
}

function testStatement(node: t.Node) {
    t.assertStatement(node);
    node; // $ExpectType Statement
}

function testTerminatorless(node: t.Node) {
    t.assertTerminatorless(node);
    node; // $ExpectType Terminatorless
}

function testCompletionStatement(node: t.Node) {
    t.assertCompletionStatement(node);
    node; // $ExpectType CompletionStatement
}

function testConditional(node: t.Node) {
    t.assertConditional(node);
    node; // $ExpectType Conditional
}

function testLoop(node: t.Node) {
    t.assertLoop(node);
    node; // $ExpectType Loop
}

function testWhile(node: t.Node) {
    t.assertWhile(node);
    node; // $ExpectType While
}

function testExpressionWrapper(node: t.Node) {
    t.assertExpressionWrapper(node);
    node; // $ExpectType ExpressionWrapper
}

function testFor(node: t.Node) {
    t.assertFor(node);
    node; // $ExpectType For
}

function testForXStatement(node: t.Node) {
    t.assertForXStatement(node);
    node; // $ExpectType ForXStatement
}

function testFunction(node: t.Node) {
    t.assertFunction(node);
    node; // $ExpectType Function
}

function testFunctionParent(node: t.Node) {
    t.assertFunctionParent(node);
    node; // $ExpectType FunctionParent
}

function testPureish(node: t.Node) {
    t.assertPureish(node);
    node; // $ExpectType Pureish
}

function testDeclaration(node: t.Node) {
    t.assertDeclaration(node);
    node; // $ExpectType Declaration
}

function testLVal(node: t.Node) {
    t.assertLVal(node);
    node; // $ExpectType LVal
}

function testLiteral(node: t.Node) {
    t.assertLiteral(node);
    node; // $ExpectType Literal
}

function testImmutable(node: t.Node) {
    t.assertImmutable(node);
    node; // $ExpectType Immutable
}

function testUserWhitespacable(node: t.Node) {
    t.assertUserWhitespacable(node);
    node; // $ExpectType UserWhitespacable
}

function testMethod(node: t.Node) {
    t.assertMethod(node);
    node; // $ExpectType Method
}

function testObjectMember(node: t.Node) {
    t.assertObjectMember(node);
    node; // $ExpectType ObjectMember
}

function testProperty(node: t.Node) {
    t.assertProperty(node);
    node; // $ExpectType Property
}

function testUnaryLike(node: t.Node) {
    t.assertUnaryLike(node);
    node; // $ExpectType UnaryLike
}

function testPattern(node: t.Node) {
    t.assertPattern(node);
    node; // $ExpectType Pattern
}

function testClass(node: t.Node) {
    t.assertClass(node);
    node; // $ExpectType Class
}

function testModuleDeclaration(node: t.Node) {
    t.assertModuleDeclaration(node);
    node; // $ExpectType ModuleDeclaration
}

function testExportDeclaration(node: t.Node) {
    t.assertExportDeclaration(node);
    node; // $ExpectType ExportDeclaration
}

function testModuleSpecifier(node: t.Node) {
    t.assertModuleSpecifier(node);
    node; // $ExpectType ModuleSpecifier
}

function testFlow(node: t.Node) {
    t.assertFlow(node);
    node; // $ExpectType Flow
}

function testFlowBaseAnnotation(node: t.Node) {
    t.assertFlowBaseAnnotation(node);
    node; // $ExpectType FlowBaseAnnotation
}

function testFlowDeclaration(node: t.Node) {
    t.assertFlowDeclaration(node);
    node; // $ExpectType FlowDeclaration
}

function testJSX(node: t.Node) {
    t.assertJSX(node);
    node; // $ExpectType JSX
}

function testTSAnyKeyword(node: t.Node) {
    t.assertTSAnyKeyword(node);
    node; // $ExpectType TSAnyKeyword
}

function testTSArrayType(node: t.Node) {
    t.assertTSArrayType(node);
    node; // $ExpectType TSArrayType
}

function testTSAsExpression(node: t.Node) {
    t.assertTSAsExpression(node);
    node; // $ExpectType TSAsExpression
}

function testTSBooleanKeyword(node: t.Node) {
    t.assertTSBooleanKeyword(node);
    node; // $ExpectType TSBooleanKeyword
}

function testTSCallSignatureDeclaration(node: t.Node) {
    t.assertTSCallSignatureDeclaration(node);
    node; // $ExpectType TSCallSignatureDeclaration
}

function testTSConstructSignatureDeclaration(node: t.Node) {
    t.assertTSConstructSignatureDeclaration(node);
    node; // $ExpectType TSConstructSignatureDeclaration
}

function testTSConstructorType(node: t.Node) {
    t.assertTSConstructorType(node);
    node; // $ExpectType TSConstructorType
}

function testTSDeclareFunction(node: t.Node) {
    t.assertTSDeclareFunction(node);
    node; // $ExpectType TSDeclareFunction
}

function testTSDeclareMethod(node: t.Node) {
    t.assertTSDeclareMethod(node);
    node; // $ExpectType TSDeclareMethod
}

function testTSEnumDeclaration(node: t.Node) {
    t.assertTSEnumDeclaration(node);
    node; // $ExpectType TSEnumDeclaration
}

function testTSEnumMember(node: t.Node) {
    t.assertTSEnumMember(node);
    node; // $ExpectType TSEnumMember
}

function testTSExportAssignment(node: t.Node) {
    t.assertTSExportAssignment(node);
    node; // $ExpectType TSExportAssignment
}

function testTSExpressionWithTypeArguments(node: t.Node) {
    t.assertTSExpressionWithTypeArguments(node);
    node; // $ExpectType TSExpressionWithTypeArguments
}

function testTSExternalModuleReference(node: t.Node) {
    t.assertTSExternalModuleReference(node);
    node; // $ExpectType TSExternalModuleReference
}

function testTSFunctionType(node: t.Node) {
    t.assertTSFunctionType(node);
    node; // $ExpectType TSFunctionType
}

function testTSImportEqualsDeclaration(node: t.Node) {
    t.assertTSImportEqualsDeclaration(node);
    node; // $ExpectType TSImportEqualsDeclaration
}

function testTSIndexSignature(node: t.Node) {
    t.assertTSIndexSignature(node);
    node; // $ExpectType TSIndexSignature
}

function testTSIndexedAccessType(node: t.Node) {
    t.assertTSIndexedAccessType(node);
    node; // $ExpectType TSIndexedAccessType
}

function testTSInterfaceBody(node: t.Node) {
    t.assertTSInterfaceBody(node);
    node; // $ExpectType TSInterfaceBody
}

function testTSInterfaceDeclaration(node: t.Node) {
    t.assertTSInterfaceDeclaration(node);
    node; // $ExpectType TSInterfaceDeclaration
}

function testTSIntersectionType(node: t.Node) {
    t.assertTSIntersectionType(node);
    node; // $ExpectType TSIntersectionType
}

function testTSLiteralType(node: t.Node) {
    t.assertTSLiteralType(node);
    node; // $ExpectType TSLiteralType
}

function testTSMappedType(node: t.Node) {
    t.assertTSMappedType(node);
    node; // $ExpectType TSMappedType
}

function testTSMethodSignature(node: t.Node) {
    t.assertTSMethodSignature(node);
    node; // $ExpectType TSMethodSignature
}

function testTSModuleBlock(node: t.Node) {
    t.assertTSModuleBlock(node);
    node; // $ExpectType TSModuleBlock
}

function testTSModuleDeclaration(node: t.Node) {
    t.assertTSModuleDeclaration(node);
    node; // $ExpectType TSModuleDeclaration
}

function testTSNamespaceExportDeclaration(node: t.Node) {
    t.assertTSNamespaceExportDeclaration(node);
    node; // $ExpectType TSNamespaceExportDeclaration
}

function testTSNeverKeyword(node: t.Node) {
    t.assertTSNeverKeyword(node);
    node; // $ExpectType TSNeverKeyword
}

function testTSNonNullExpression(node: t.Node) {
    t.assertTSNonNullExpression(node);
    node; // $ExpectType TSNonNullExpression
}

function testTSNullKeyword(node: t.Node) {
    t.assertTSNullKeyword(node);
    node; // $ExpectType TSNullKeyword
}

function testTSNumberKeyword(node: t.Node) {
    t.assertTSNumberKeyword(node);
    node; // $ExpectType TSNumberKeyword
}

function testTSObjectKeyword(node: t.Node) {
    t.assertTSObjectKeyword(node);
    node; // $ExpectType TSObjectKeyword
}

function testTSParameterProperty(node: t.Node) {
    t.assertTSParameterProperty(node);
    node; // $ExpectType TSParameterProperty
}

function testTSParenthesizedType(node: t.Node) {
    t.assertTSParenthesizedType(node);
    node; // $ExpectType TSParenthesizedType
}

function testTSPropertySignature(node: t.Node) {
    t.assertTSPropertySignature(node);
    node; // $ExpectType TSPropertySignature
}

function testTSQualifiedName(node: t.Node) {
    t.assertTSQualifiedName(node);
    node; // $ExpectType TSQualifiedName
}

function testTSStringKeyword(node: t.Node) {
    t.assertTSStringKeyword(node);
    node; // $ExpectType TSStringKeyword
}

function testTSSymbolKeyword(node: t.Node) {
    t.assertTSSymbolKeyword(node);
    node; // $ExpectType TSSymbolKeyword
}

function testTSThisType(node: t.Node) {
    t.assertTSThisType(node);
    node; // $ExpectType TSThisType
}

function testTSTupleType(node: t.Node) {
    t.assertTSTupleType(node);
    node; // $ExpectType TSTupleType
}

function testTSTypeAliasDeclaration(node: t.Node) {
    t.assertTSTypeAliasDeclaration(node);
    node; // $ExpectType TSTypeAliasDeclaration
}

function testTSTypeAnnotation(node: t.Node) {
    t.assertTSTypeAnnotation(node);
    node; // $ExpectType TSTypeAnnotation
}

function testTSTypeAssertion(node: t.Node) {
    t.assertTSTypeAssertion(node);
    node; // $ExpectType TSTypeAssertion
}

function testTSTypeLiteral(node: t.Node) {
    t.assertTSTypeLiteral(node);
    node; // $ExpectType TSTypeLiteral
}

function testTSTypeOperator(node: t.Node) {
    t.assertTSTypeOperator(node);
    node; // $ExpectType TSTypeOperator
}

function testTSTypeParameter(node: t.Node) {
    t.assertTSTypeParameter(node);
    node; // $ExpectType TSTypeParameter
}

function testTSTypeParameterDeclaration(node: t.Node) {
    t.assertTSTypeParameterDeclaration(node);
    node; // $ExpectType TSTypeParameterDeclaration
}

function testTSTypeParameterInstantiation(node: t.Node) {
    t.assertTSTypeParameterInstantiation(node);
    node; // $ExpectType TSTypeParameterInstantiation
}

function testTSTypePredicate(node: t.Node) {
    t.assertTSTypePredicate(node);
    node; // $ExpectType TSTypePredicate
}

function testTSTypeQuery(node: t.Node) {
    t.assertTSTypeQuery(node);
    node; // $ExpectType TSTypeQuery
}

function testTSTypeReference(node: t.Node) {
    t.assertTSTypeReference(node);
    node; // $ExpectType TSTypeReference
}

function testTSUndefinedKeyword(node: t.Node) {
    t.assertTSUndefinedKeyword(node);
    node; // $ExpectType TSUndefinedKeyword
}

function testTSUnionType(node: t.Node) {
    t.assertTSUnionType(node);
    node; // $ExpectType TSUnionType
}

function testTSVoidKeyword(node: t.Node) {
    t.assertTSVoidKeyword(node);
    node; // $ExpectType TSVoidKeyword
}
