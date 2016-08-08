/// <reference path="babel-traverse.d.ts" />
/// <reference path="../babel-types/babel-types.d.ts" />
/// <reference path="../babylon/babylon.d.ts" />


import * as babylon from "babylon";
import traverse, {Visitor} from 'babel-traverse';
import * as t from 'babel-types';


// Examples from: https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md
const MyVisitor: Visitor = {
    Identifier: {
        enter() {
            console.log("Entered!");
        },
        exit() {
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
const code = `function square(n) {
    return n * n;
}`;

const ast = babylon.parse(code);

traverse(ast, {
    enter(path) {
        let node = path.node;
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
        if (t.isReferenced(path.node, path.parent)) {
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

        path.insertBefore(t.expressionStatement(t.stringLiteral("Because I'm easy come, easy go.")));
        path.insertAfter(t.expressionStatement(t.stringLiteral("A little high, little low.")));
        path.remove();

        if (path.scope.hasBinding("n")) {
            // ...
        }
        if (path.scope.hasOwnBinding("n")) {
            // ...
        }

        let id1 = path.scope.generateUidIdentifier("uid");
        id1.type;
        id1.name;
        let id2 = path.scope.generateUidIdentifier("uid");
        id2.type;
        id2.name;

        const id = path.scope.generateUidIdentifierBasedOnNode(path.node.id);
        path.remove();
        path.scope.parent.push({ id, init: path.node });

        path.scope.rename("n", "x");
        path.scope.rename("n");
    }
};
