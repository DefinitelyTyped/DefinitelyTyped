declare module 'assert/strict' {
    import { strict } from 'node:assert';
    export = strict;
}

declare module 'node:assert/strict' {
    import * as assert from 'node:assert';
    export = assert;
}
