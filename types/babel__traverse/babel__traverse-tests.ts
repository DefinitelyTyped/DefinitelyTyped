import traverse, { Hub, NodePath, Visitor, visitors } from '@babel/traverse';
import * as t from '@babel/types';

// Examples from: https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md
const MyVisitor: Visitor = {
    Identifier: {
        enter(path) {
            path.type; // $ExpectType "Identifier"
            const x: NodePath<t.Identifier> = path;
            console.log('Entered!');
        },
        exit(path) {
            path.type; // $ExpectType "Identifier"
            const x: NodePath<t.Identifier> = path;
            console.log('Exited!');
        },
    },
};

const MyVisitor2: Visitor = {
    Identifier(path) {
        path.type; // $ExpectType "Identifier"
        console.log('Visiting: ' + path.node.name);
    },
};

// Example from https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#babel-traverse
declare const ast: t.Node;

traverse(ast, {
    enter(path) {
        let actualType = path.type;
        const expectedType: t.Node['type'] = actualType;
        actualType = ast.type;

        const node = path.node;
        if (t.isIdentifier(node) && node.name === 'n') {
            node.name = 'x';
        }
    },
});

// Examples from https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#writing-your-first-babel-plugin

const v1: Visitor = {
    BinaryExpression(path) {
        path.type; // $ExpectType "BinaryExpression"

        if (t.isIdentifier(path.node.left)) {
            // ...
        }
        // $ExpectType [NodePath<BinaryExpression>]
        path.replaceWith(t.binaryExpression('**', path.node.left, t.numericLiteral(2)));
        path.parentPath.replaceWith(
            t.expressionStatement(t.stringLiteral("Anyway the wind blows, doesn't really matter to me, to me.")),
        );
        // $ExpectType [NodePath<BinaryExpression>]
        path.replaceInline(t.binaryExpression('**', path.node.left, t.numericLiteral(2)));
        // $ExpectType [NodePath<Node>]
        path.replaceWithSourceString('3 * 4') as [NodePath];
        // $ExpectType [NodePath<BinaryExpression>, NodePath<ExpressionStatement>]
        path.replaceInline([
            t.binaryExpression('**', path.node.left, t.numericLiteral(2)),
            t.expressionStatement(t.stringLiteral("Anyway the wind blows, doesn't really matter to me, to me.")),
        ] as const);
        path.parentPath.remove();
    },

    Identifier(path) {
        path.type; // $ExpectType "Identifier"

        if (path.isReferencedIdentifier()) {
            // ...
        }
        if (t.isQualifiedTypeIdentifier(path.node, path.parent)) {
            // ...
        }
    },

    ReturnStatement(path) {
        path.type; // $ExpectType "ReturnStatement"

        // $ExpectType [NodePath<ExpressionStatement>, NodePath<ExpressionStatement>, NodePath<ExpressionStatement>]
        path.replaceWithMultiple([
            t.expressionStatement(t.stringLiteral('Is this the real life?')),
            t.expressionStatement(t.stringLiteral('Is this just fantasy?')),
            t.expressionStatement(t.stringLiteral('(Enjoy singing the rest of the song in your head)')),
        ] as const);
    },

    FunctionDeclaration(path, state) {
        path.type; // $ExpectType "FunctionDeclaration"

        path.replaceWithSourceString(`function add(a, b) {
            return a + b;
        }`);

        path.get('body').unshiftContainer('body', t.expressionStatement(t.stringLiteral('Start of function')));
        path.get('body').pushContainer('body', t.expressionStatement(t.stringLiteral('End of function')));

        path.insertBefore(t.expressionStatement(t.stringLiteral("Because I'm easy come, easy go.")));
        path.insertAfter(t.expressionStatement(t.stringLiteral('A little high, little low.')));
        path.remove();

        if (path.scope.hasBinding('n')) {
            // ...
        }
        if (path.scope.hasOwnBinding('n')) {
            // ...
        }

        const id1 = path.scope.generateUidIdentifier('uid');
        id1.type;
        id1.name;
        const id2 = path.scope.generateUidIdentifier('uid');
        id2.type;
        id2.name;

        const id = path.scope.generateUidIdentifierBasedOnNode(path.node.id!);
        path.remove();
        path.scope.parent.push({ id });
        path.scope.parent.push({ id, init: t.stringLiteral('foo'), kind: 'const' });

        path.scope.rename('n', 'x');
        path.scope.rename('n');

        path.scope.crawl();

        // $ExpectError
        path.pushContainer('returnType', t.stringLiteral('hello'));
        // $ExpectError
        path.unshiftContainer('returnType', t.stringLiteral('hello'));
    },
    ExportDefaultDeclaration(path) {
        path.type; // $ExpectType "ExportDefaultDeclaration"

        {
            const [stringPath, booleanPath] = path.replaceWithMultiple([
                t.stringLiteral('hello'),
                t.booleanLiteral(false),
            ]);
            // $ExpectType NodePath<BooleanLiteral | StringLiteral>
            stringPath;
            // $ExpectType NodePath<BooleanLiteral | StringLiteral>
            booleanPath;
        }
        {
            const [stringPath, booleanPath] = path.replaceWithMultiple<[t.StringLiteral, t.BooleanLiteral]>([
                t.stringLiteral('hello'),
                t.booleanLiteral(false),
            ]);
            // $ExpectType NodePath<StringLiteral>
            stringPath;
            // $ExpectType NodePath<BooleanLiteral>
            booleanPath;
        }
        {
            const [newPath] = path.insertBefore(t.stringLiteral('hello'));
            // $ExpectType NodePath<StringLiteral>
            newPath;
        }
        {
            const [newPath] = path.insertAfter(t.stringLiteral('hello'));
            // $ExpectType NodePath<StringLiteral>
            newPath;
        }
    },
    Program(path) {
        path.type; // $ExpectType "Program"

        {
            const [newPath] = path.unshiftContainer('body', t.stringLiteral('hello'));
            // $ExpectType NodePath<StringLiteral>
            newPath;
        }
        {
            const [newPath] = path.pushContainer('body', t.stringLiteral('hello'));
            // $ExpectType NodePath<StringLiteral>
            newPath;
        }
        {
            const [stringPath, booleanPath] = path.unshiftContainer('body', [
                t.stringLiteral('hello'),
                t.booleanLiteral(false),
            ]);
            // $ExpectType NodePath<BooleanLiteral | StringLiteral>
            stringPath;
            // $ExpectType NodePath<BooleanLiteral | StringLiteral>
            booleanPath;
        }
        {
            const [stringPath, booleanPath] = path.pushContainer('body', [
                t.stringLiteral('hello'),
                t.booleanLiteral(false),
            ]);
            // $ExpectType NodePath<BooleanLiteral | StringLiteral>
            stringPath;
            // $ExpectType NodePath<BooleanLiteral | StringLiteral>
            booleanPath;
        }
        {
            const [stringPath, booleanPath] = path.unshiftContainer<[t.StringLiteral, t.BooleanLiteral]>('body', [
                t.stringLiteral('hello'),
                t.booleanLiteral(false),
            ]);
            // $ExpectType NodePath<StringLiteral>
            stringPath;
            // $ExpectType NodePath<BooleanLiteral>
            booleanPath;
        }
        {
            const [stringPath, booleanPath] = path.pushContainer<[t.StringLiteral, t.BooleanLiteral]>('body', [
                t.stringLiteral('hello'),
                t.booleanLiteral(false),
            ]);
            // $ExpectType NodePath<StringLiteral>
            stringPath;
            // $ExpectType NodePath<BooleanLiteral>
            booleanPath;
        }
    },
};

// Binding.kind
const BindingKindTest: Visitor = {
    Identifier(path) {
        path.type; // $ExpectType "Identifier"

        const kind = path.scope.getBinding('str')!.kind;
        kind === 'module';
        kind === 'const';
        kind === 'let';
        kind === 'var';
        // $ExpectError
        kind === 'anythingElse';
    },
};

interface SomeVisitorState {
    someState: string;
}

const VisitorStateTest: Visitor<SomeVisitorState> = {
    enter(path, state) {
        let actualType = path.type;
        const expectedType: t.Node['type'] = actualType;
        actualType = ast.type;

        // $ExpectType SomeVisitorState
        state;
        // $ExpectType SomeVisitorState
        this;
    },
    exit(path, state) {
        let actualType = path.type;
        const expectedType: t.Node['type'] = actualType;
        actualType = ast.type;

        // $ExpectType SomeVisitorState
        state;
        // $ExpectType SomeVisitorState
        this;
    },
    Identifier(path, state) {
        path.type; // $ExpectType "Identifier"

        // $ExpectType SomeVisitorState
        state;
        // $ExpectType SomeVisitorState
        this;
    },
    FunctionDeclaration: {
        enter(path, state) {
            path.type; // $ExpectType "FunctionDeclaration"

            // $ExpectType SomeVisitorState
            state;
            // $ExpectType SomeVisitorState
            this;
        },
        exit(path, state) {
            path.type; // $ExpectType "FunctionDeclaration"

            // $ExpectType SomeVisitorState
            state;
            // $ExpectType SomeVisitorState
            this;
        },
    },
};

traverse(ast, VisitorStateTest, undefined, { someState: 'test' });

const VisitorAliasTest: Visitor = {
    Function() {},
    Expression() {},
};

const hub = new Hub();
// $ExpectType string | undefined
hub.getCode();

declare const astExpression: t.Expression;

traverse.visitors; // $ExpectType typeof visitors

// $ExpectType Visitor<unknown>
visitors.merge([
    {
        Expression(path) {
            let actualType = path.type;
            const expectedType: t.Expression['type'] = actualType;
            actualType = astExpression.type;
        },
    },
    {
        Expression(path) {
            let actualType = path.type;
            const expectedType: t.Expression['type'] = actualType;
            actualType = astExpression.type;
        },
    },
]);

function testNullishPath(
    optionalPath: NodePath<t.Node | null>,
    nullPath: NodePath<null>,
    undefinedPath: NodePath<undefined>,
    unknownPath: NodePath<unknown>,
) {
    nullPath.type; // $ExpectType undefined
    undefinedPath.type; // $ExpectType undefined
    unknownPath.type; // $ExpectType string | undefined

    let actualType = optionalPath.type;
    const expectedType: t.Node['type'] | undefined = actualType;
    actualType = expectedType;
}

const visitorWithDenylist: Visitor = {
    denylist: ['TypeAnnotation'],
};

const visitorWithInvalidDenylist: Visitor = {
    // $ExpectError
    denylist: ['SomeRandomType'],
};

// Test that NodePath can be narrowed from union to single type
const path: NodePath<
  t.ExportDefaultDeclaration | t.ExportNamedDeclaration
> = new NodePath<t.ExportNamedDeclaration>(
  null as any,
  {} as any,
);

if (path.isExportNamedDeclaration()) {
  path.type; // $ExpectType "ExportNamedDeclaration"
}
