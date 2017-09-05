// Type definitions for redux-persist-transform-filter 0.0
// Project: https://github.com/edy/redux-persist-transform-filter
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Transform } from "redux-persist";

export default function createFilter<State, Raw>(reducerName: string, inboundPaths?: string[], outboundPaths?: string[]): Transform<State, Raw>;
