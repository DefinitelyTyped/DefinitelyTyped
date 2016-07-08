// Type definitions for redux-devtools 2.1.4
// Project: https://github.com/gaearon/redux-devtools
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="redux" />
/// <reference types="react" />

export declare function devTools(): Function;
export declare function persistState(sessionId: any, stateDeserializer?: Function, actionDeserializer?: Function): Function;
