// Type definitions for redux-devtools 2.1.4
// Project: https://github.com/gaearon/redux-devtools
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />
/// <reference path="../react/react.d.ts" />


export declare function devTools(): Function;
export declare function persistState(sessionId: any, stateDeserializer?: Function, actionDeserializer?: Function): Function;
