// Type definitions for redux-devtools 2.1.4
// Project: https://github.com/gaearon/redux-devtools
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />
/// <reference path="../react/react.d.ts" />


declare export function devTools(): Function;
declare export function persistState(sessionId: any, stateDeserializer?: Function, actionDeserializer?: Function): Function;
