// Type definitions for redux-persist-transform-filter 0.0
// Project: https://github.com/edy/redux-persist-transform-filter
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { PersistTransformer } from "redux-persist";

export default function createFilter (reducerName: string, inboundPaths?: string[], outboundPaths?: string[]): PersistTransformer;
