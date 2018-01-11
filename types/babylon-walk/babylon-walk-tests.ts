import * as babelTypes from "babel-types";
import * as walk from "babylon-walk";
declare function assert(expr: boolean): void;

const simpleVisitors: walk.visitors<walk.SimpleVisitor> = {
    File: (node: babelTypes.Node, state: any) => {
        state.out = 1;
    },
};

const ancestorVisitors: walk.visitors<walk.AncestorVisitor> = {
    File: (node: babelTypes.Node, state: any, ancestors: babelTypes.Node[]) => {
        state.out = 2;
    },
};

const recursiveVisitors: walk.visitors<walk.RecursiveVisitor> = {
    File: (node: babelTypes.Node, state: any, next: (node: babelTypes.Node) => void) => {
        state.out = 3;
    },
};

const node: any = {
    type: "File",
};

const state: any = {
    out: 0,
};
walk.simple(node, simpleVisitors, state);
assert(state.out === 1);

walk.ancestor(node, ancestorVisitors, state);
assert(state.out === 2);

walk.recursive(node, recursiveVisitors, state);
assert(state.out === 3);
