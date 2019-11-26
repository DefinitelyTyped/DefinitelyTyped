// Type definitions for qhistory 1.0
// Project: https://github.com/pshrmn/qhistory#readme
// Definitions by: Jessica Franco <https://github.com/Jessidhia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export as namespace qhistory;

import { History } from 'history';

// augments the 'history' types when used
declare module 'history' {
    interface Location {
        // actually a complicated nested object/array system, but giving it a type
        // makes _actually_ using it (or even casting to a known structure) much harder.
        query: any;
    }

    interface LocationDescriptorObject {
        query?: object;
    }
}

declare function qhistory(
    history: History,
    stringify: (query: object) => string,
    parse: (search: string) => object
): History;

export default qhistory;
