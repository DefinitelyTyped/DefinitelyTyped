// Type definitions for React (react-addons-shallow-compare) 0.14
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from 'react';

export = shallowCompare;

// workaround to allow ES6 import syntax
// https://github.com/Microsoft/TypeScript/issues/5073
declare namespace shallowCompare {}

declare function shallowCompare<P, S>(
    component: Component<P, S>,
    nextProps: P,
    nextState: S): boolean;
