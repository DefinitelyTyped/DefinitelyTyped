/// <reference path="reselect.d.ts" />
import {createSelector, defaultMemoize} from "reselect";

type Item1 = {
   prop1: number;
}

type Item2 = {
   prop2: number;
}

type State = {
   item1: Item1,
   item2: Item2
}

function getItem1(state: State, props: any): Item1 {
   return state.item1;
}

function getItem2(state: State, props: any): Item2 {
   return state.item2;
}

const selector = createSelector(
   getItem1,
   getItem2,
   (item1: Item1, item2: Item2) => {
      return item1.prop1 + item2.prop2;
   }
);

const state = {
   item1: { prop1: 10 },
   item2: { prop2: 20 }
}

const props = { multiplier: 10 };
const total: number = selector(state, props);

const getItem2Memoized = defaultMemoize(getItem2);
const memItem: Item2 = getItem2Memoized(state, {});