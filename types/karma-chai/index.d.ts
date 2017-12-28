// Type definitions for karma-chai 0.1
// Project: http://xdissent.github.io/karma-chai
// Definitions by: Jay Sherby <https://github.com/JayAndCatchFire>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AssertStatic, ExpectStatic, Should } from "chai";

declare global {
    var assert: AssertStatic;
    var expect: ExpectStatic;
    var should: Should;
}
