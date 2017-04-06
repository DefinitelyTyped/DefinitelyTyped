// Type definitions for should-promised
// Project: https://github.com/shouldjs/promised
// Definitions by: Yaroslav Admin <https://github.com/devoto13/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ShouldAssertion {
    Promise: ShouldAssertion;
    fulfilled: Promise<any>;
    rejected: Promise<any>;
    finally: ShouldAssertion;
    eventually: ShouldAssertion;
}
