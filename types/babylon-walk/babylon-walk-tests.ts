// Example from https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#babylon
import * as walk from 'babylon-walk';
declare function assert(expr: boolean): void;

const simpleVisitors = {
    File(node, state) {
        state.out = 1;
    }
};

const ancestorVisitors = {
    File(node, state, ancestors) {
        state.out = 2;
    }
};

const recursiveVisitors = {
    File(node, state, next){
        state.out = 3;
    }
};

const node = {
    type: 'File'
};

const state = {};
walk.simple(node, simpleVisitors, state);
assert(state.out === 1);

walk.ancestor(node, ancestorVisitors, state);
assert(state.out === 2);

walk.recursive(node, recursiveVisitors, state);
assert(state.out === 3);
