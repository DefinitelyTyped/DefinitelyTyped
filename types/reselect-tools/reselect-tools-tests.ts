import { checkSelector, getStateWith, registerSelectors, selectorGraph } from "reselect-tools";

interface RootState {
    todos: Array<{
        id: number;
        title: string;
        completed: boolean;
    }>;
}

const state: RootState = {
    todos: [
        { id: 0, title: "foo", completed: false },
        { id: 1, title: "bar", completed: true },
        { id: 2, title: "baz", completed: false },
    ],
};

const selectTodos = (state: RootState) => state.todos;

getStateWith((state: RootState) => state);

registerSelectors({ selectTodos });

checkSelector(selectTodos).dependencies; // $ExpectType SelectorArray

checkSelector(selectTodos).recomputations; // $ExpectType number | null

checkSelector(selectTodos).isNamed; // $ExpectType boolean

checkSelector(selectTodos).selectorName; // $ExpectType string | null

checkSelector(selectTodos).inputs; // $ExpectType unknown[] | undefined

checkSelector(selectTodos).output; // $ExpectType unknown

checkSelector(selectTodos).error; // $ExpectType string | undefined

selectorGraph((selector) => selector.name); // $ExpectType Graph

selectorGraph(); // $ExpectType Graph
