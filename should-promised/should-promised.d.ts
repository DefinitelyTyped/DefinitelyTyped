// Type definitions for should-promised
// Project: https://github.com/shouldjs/promised
// Definitions by: Yaroslav Admin <https://github.com/devoto13/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface ShouldAssertion {
    Promise: ShouldAssertion;
    fulfilled: ShouldAssertion;
    rejected: ShouldAssertion;
    rejectedWith(message: (string | Function | RegExp), properties?: Object): ShouldAssertion;
    rejectedWith(message: Object): ShouldAssertion;
    finally: ShouldAssertion;
    eventually: ShouldAssertion;
}
