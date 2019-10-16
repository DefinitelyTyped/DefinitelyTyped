// Type definitions for reduce-reducers 0.3
// Project: https://github.com/redux-utilities/reduce-reducers
// Definitions by: Huy Nguyen <https://github.com/huy-nguyen>
//                 Dalius Dobravolskas <https://github.com/daliusd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Reducer } from 'redux';
export default function reduceReducer<S>(r0: Reducer<S>, s: S | null): Reducer<S>;
export default function reduceReducer<S>(r0: Reducer<S>, r1: Reducer<S>, s: S | null): Reducer<S>;
export default function reduceReducer<S>(r0: Reducer<S>, r1: Reducer<S>, r2: Reducer<S>, s: S | null): Reducer<S>;
export default function reduceReducer<S>(
    r0: Reducer<S>,
    r1: Reducer<S>,
    r2: Reducer<S>,
    r3: Reducer<S>,
    s: S | null,
): Reducer<S>;
export default function reduceReducer<S>(
    r0: Reducer<S>,
    r1: Reducer<S>,
    r2: Reducer<S>,
    r3: Reducer<S>,
    r4: Reducer<S>,
    s: S | null,
): Reducer<S>;
export default function reduceReducer<S>(
    r0: Reducer<S>,
    r1: Reducer<S>,
    r2: Reducer<S>,
    r3: Reducer<S>,
    r4: Reducer<S>,
    r5: Reducer<S>,
    s: S | null,
): Reducer<S>;
export default function reduceReducer<S>(
    r0: Reducer<S>,
    r1: Reducer<S>,
    r2: Reducer<S>,
    r3: Reducer<S>,
    r4: Reducer<S>,
    r5: Reducer<S>,
    r6: Reducer<S>,
    s: S | null,
): Reducer<S>;
export default function reduceReducer<S>(
    r0: Reducer<S>,
    r1: Reducer<S>,
    r2: Reducer<S>,
    r3: Reducer<S>,
    r4: Reducer<S>,
    r5: Reducer<S>,
    r6: Reducer<S>,
    r7: Reducer<S>,
    s: S | null,
): Reducer<S>;
export default function reduceReducer<S>(
    r0: Reducer<S>,
    r1: Reducer<S>,
    r2: Reducer<S>,
    r3: Reducer<S>,
    r4: Reducer<S>,
    r5: Reducer<S>,
    r6: Reducer<S>,
    r7: Reducer<S>,
    r8: Reducer<S>,
    s: S | null,
): Reducer<S>;
export default function reduceReducer<S>(
    r0: Reducer<S>,
    r1: Reducer<S>,
    r2: Reducer<S>,
    r3: Reducer<S>,
    r4: Reducer<S>,
    r5: Reducer<S>,
    r6: Reducer<S>,
    r7: Reducer<S>,
    r8: Reducer<S>,
    r9: Reducer<S>,
    s: S | null,
): Reducer<S>;
export default function reduceReducer<S>(...reducers: Array<Reducer<S>>): Reducer<S>;
