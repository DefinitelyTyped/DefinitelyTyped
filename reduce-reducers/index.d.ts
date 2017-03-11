// Type definitions for reduce-reducers 0.1
// Project: https://github.com/acdlite/reduce-reducers
// Definitions by: Huy Nguyen <https://github.com/huy-nguyen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {Reducer} from 'redux';
export default function reduceReducer<S>(...reducers: Array<Reducer<S>>): Reducer<S>;
