// Type definitions for redux-persist-transform-compress 4.1
// Project: https://github.com/rt2zz/redux-persist-transform-compress
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { PersistorConfig, Transform } from "redux-persist";

export = createCompressor;
declare function createCompressor<State, Raw>(config?: PersistorConfig): Transform<State, Raw>;
