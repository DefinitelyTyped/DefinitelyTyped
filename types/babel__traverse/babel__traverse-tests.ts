import traverse, { Visitor, NodePath } from "@babel/traverse";
import * as t from "@babel/types";

// Examples from: https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md
const MyVisitor: Visitor = {
    Identifier: {
        enter(path) {
            const x: NodePath<t.Identifier> = path;
            console.log("Entered!");
        },
        exit(path) {
            const x: NodePath<t.Identifier> = path;
            console.log("Exited!");
        }
    }
};

const MyVisitor2: Visitor = {
    Identifier(path) {
        console.log("Visiting: " + path.node.name);
    }
};

// Example from https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#babel-traverse
declare const ast: t.Node;

traverse(ast, {
    enter(path) {
        const node = path.node;
        if (t.isIdentifier(node) && node.name === "n") {
            node.name = "x";
        }
    }
});

// Examples from https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#writing-your-first-babel-plugin

const v1: Visitor = {
    BinaryExpression(path) {
        if (t.isIdentifier(path.node.left)) {
            // ...
        }
        path.replaceWith(
            t.binaryExpression("**", path.node.left, t.numericLiteral(2))
        );
        path.parentPath.replaceWith(
            t.expressionStatement(t.stringLiteral("Anyway the wind blows, doesn't really matter to me, to me."))
        );
        path.parentPath.remove();
    },

    Identifier(path) {
        if (path.isReferencedIdentifier()) {
            // ...
        }
        if (t.isQualifiedTypeIdentifier(path.node, path.parent)) {
            // ...
        }
    },

    ReturnStatement(path) {
        path.replaceWithMultiple([
            t.expressionStatement(t.stringLiteral("Is this the real life?")),
            t.expressionStatement(t.stringLiteral("Is this just fantasy?")),
            t.expressionStatement(t.stringLiteral("(Enjoy singing the rest of the song in your head)")),
        ]);
    },

    FunctionDeclaration(path, state) {
        path.replaceWithSourceString(`function add(a, b) {
            return a + b;
        }`);

        path.get('body').unshiftContainer('body', t.expressionStatement(t.stringLiteral("Start of function")));
        path.get('body').pushContainer('body', t.expressionStatement(t.stringLiteral("End of function")));

        path.insertBefore(t.expressionStatement(t.stringLiteral("Because I'm easy come, easy go.")));
        path.insertAfter(t.expressionStatement(t.stringLiteral("A little high, little low.")));
        path.remove();

        if (path.scope.hasBinding("n")) {
            // ...
        }
        if (path.scope.hasOwnBinding("n")) {
            // ...
        }

        const id1 = path.scope.generateUidIdentifier("uid");
        id1.type;
        id1.name;
        const id2 = path.scope.generateUidIdentifier("uid");
        id2.type;
        id2.name;

        const id = path.scope.generateUidIdentifierBasedOnNode(path.node.id!);
        path.remove();
        path.scope.parent.push({ id });
        path.scope.parent.push({ id, init: t.stringLiteral('foo'), kind: "const" });

        path.scope.rename("n", "x");
        path.scope.rename("n");
    },
    ExportDefaultDeclaration(path) {
        {
            const [stringPath, booleanPath] = path.replaceWithMultiple([
                t.stringLiteral('hello'),
                t.booleanLiteral(false)
            ]);
            // $ExpectType NodePath<BooleanLiteral | StringLiteral>
            stringPath;
            // $ExpectType NodePath<BooleanLiteral | StringLiteral>
            booleanPath;
        }
        {
            const [stringPath, booleanPath] = path.replaceWithMultiple<[t.StringLiteral, t.BooleanLiteral]>([
                t.stringLiteral('hello'),
                t.booleanLiteral(false)
            ]);
            // $ExpectType NodePath<StringLiteral>
            stringPath;
            // $ExpectType NodePath<BooleanLiteral>
            booleanPath;
        }
    },
    Program(path) {
        {
            const [newPath] = path.unshiftContainer('body', t.stringLiteral('hello'));
            // $ExpectType NodePath<StringLiteral>
            newPath;
        }
        {
            const [stringPath, booleanPath] = path.unshiftContainer('body', [
                t.stringLiteral('hello'),
                t.booleanLiteral(false)
            ]);
            // $ExpectType NodePath<BooleanLiteral | StringLiteral>
            stringPath;
            // $ExpectType NodePath<BooleanLiteral | StringLiteral>
            booleanPath;
        }
        {
            const [stringPath, booleanPath] = path.unshiftContainer<[t.StringLiteral, t.BooleanLiteral]>('body', [
                t.stringLiteral('hello'),
                t.booleanLiteral(false)
            ]);
            // $ExpectType NodePath<StringLiteral>
            stringPath;
            // $ExpectType NodePath<BooleanLiteral>
            booleanPath;
        }
    }
};

// Binding.kind
const BindingKindTest: Visitor = {
    Identifier(path) {
        const kind = path.scope.getBinding("str")!.kind;
        kind === 'module';
        kind === 'const';
        kind === 'let';
        kind === 'var';
        // $ExpectError
        kind === 'anythingElse';
    },
};

interface SomeVisitorState { someState: string; }

const VisitorStateTest: Visitor<SomeVisitorState> = {
    enter(path, state) {
        // $ExpectType SomeVisitorState
        state;
        // $ExpectType SomeVisitorState
        this;
    },
    exit(path, state) {
        // $ExpectType SomeVisitorState
        state;
        // $ExpectType SomeVisitorState
        this;
    },
    Identifier(path, state) {
        // $ExpectType SomeVisitorState
        state;
        // $ExpectType SomeVisitorState
        this;
    },
    FunctionDeclaration: {
        enter(path, state) {
            // $ExpectType SomeVisitorState
            state;
            // $ExpectType SomeVisitorState
            this;
        },
        exit(path, state) {
            // $ExpectType SomeVisitorState
            state;
            // $ExpectType SomeVisitorState
            this;
        }
    }
};

traverse(ast, VisitorStateTest, undefined, { someState: "test" });

const VisitorAliasTest: Visitor = {
    Function() {},
    Expression() {},
};
