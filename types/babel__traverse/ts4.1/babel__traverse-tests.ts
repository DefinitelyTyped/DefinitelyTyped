import traverse, { Binding, Hub, NodePath, Visitor, visitors } from '@babel/traverse';
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
        path.parentPath; // $ExpectType NodePath<Node>
        console.log('Visiting: ' + path.node.name);
    },
    Program(path) {
        path.parentPath; // $ExpectType null
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

        // @ts-expect-error
        path.pushContainer('returnType', t.stringLiteral('hello'));
        // @ts-expect-error
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
        // @ts-expect-error
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
    // @ts-expect-error
    denylist: ['SomeRandomType'],
};

const nullPath: NodePath<t.Identifier | undefined> = new NodePath<t.Identifier | undefined>(null as any, {} as any);

nullPath.type; // $ExpectType "Identifier" | undefined

if (nullPath.hasNode()) {
    nullPath.type; // $ExpectType "Identifier"
}

const file: t.File = {} as any;
const newPath = NodePath.get({
    hub: {} as any,
    parentPath: null,
    parent: file,
    container: file,
    key: 'program',
}).setContext();

newPath; // $ExpectType NodePath<Program>

const binding = new Binding({
    identifier: {} as any,
    scope: {} as any,
    path: {} as any,
    kind: 'unknown',
});

binding.setValue('value');
binding.deopValue();
binding.clearValue();

binding.reassign(newPath.get('body')[0]);
binding.reference(newPath.get('body')[0]);
binding.dereference();

newPath.scope.checkBlockScopedCollisions(binding, 'local', 'name', {});

const booleanVar: boolean = true as boolean;
const identifier = newPath.getBindingIdentifiers();
identifier; // $ExpectType Record<string, Identifier>
const identifierFalse = newPath.getBindingIdentifiers(false);
identifierFalse; // $ExpectType Record<string, Identifier>
const identifierTrue = newPath.getBindingIdentifiers(true);
identifierTrue; // $ExpectType Record<string, Identifier[]>
const identifierBoolean = newPath.getBindingIdentifiers(booleanVar);
identifierBoolean; // $ExpectType Record<string, Identifier | Identifier[]>

const outerIdentifier = newPath.getOuterBindingIdentifiers();
outerIdentifier; // $ExpectType Record<string, Identifier>
const outerIdentifierFalse = newPath.getOuterBindingIdentifiers(false);
outerIdentifierFalse; // $ExpectType Record<string, Identifier>
const outerIdentifierTrue = newPath.getOuterBindingIdentifiers(true);
outerIdentifierTrue; // $ExpectType Record<string, Identifier[]>
const outerIdentifierBoolean = newPath.getOuterBindingIdentifiers(booleanVar);
outerIdentifierBoolean; // $ExpectType Record<string, Identifier | Identifier[]>

const identifierPath = newPath.getBindingIdentifierPaths();
identifierPath; // $ExpectType Record<string, NodePath<Identifier>>
const identifierPathFalse = newPath.getBindingIdentifierPaths(false);
identifierPathFalse; // $ExpectType Record<string, NodePath<Identifier>>
const identifierPathTrue = newPath.getBindingIdentifierPaths(true);
identifierPathTrue; // $ExpectType Record<string, NodePath<Identifier>[]>
const identifierPathBoolean = newPath.getBindingIdentifierPaths(booleanVar);
identifierPathBoolean; // $ExpectType Record<string, NodePath<Identifier> | NodePath<Identifier>[]>

const outerIdentifierPath = newPath.getOuterBindingIdentifierPaths();
outerIdentifierPath; // $ExpectType Record<string, NodePath<Identifier>>
const outerIdentifierPathFalse = newPath.getOuterBindingIdentifierPaths(false);
outerIdentifierPathFalse; // $ExpectType Record<string, NodePath<Identifier>>
const outerIdentifierPathTrue = newPath.getOuterBindingIdentifierPaths(true);
outerIdentifierPathTrue; // $ExpectType Record<string, NodePath<Identifier>[]>
const outerIdentifierPathBoolean = newPath.getOuterBindingIdentifierPaths(booleanVar);
outerIdentifierPathBoolean; // $ExpectType Record<string, NodePath<Identifier> | NodePath<Identifier>[]>
