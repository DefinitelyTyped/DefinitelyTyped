declare module 'assert/strict' {
    import { strict } from 'assert';
    export = strict;
}

declare module 'node:assert/strict' {
    import * as assert from 'assert/strict';
    export = assert;
}
