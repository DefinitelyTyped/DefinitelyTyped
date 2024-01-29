import { Component } from "react";

export = shallowCompare;

// workaround to allow ES6 import syntax
// https://github.com/Microsoft/TypeScript/issues/5073
declare namespace shallowCompare {}

declare function shallowCompare<P, S>(
    component: Component<P, S>,
    nextProps: P,
    nextState: S,
): boolean;
