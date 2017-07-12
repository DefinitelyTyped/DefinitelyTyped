// Type definitions for karma-chai 0.1
// Project: http://xdissent.github.io/karma-chai
// Definitions by: Jay Sherby <https://github.com/JayAndCatchFire>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import chai = require('chai');

declare global {
    var assert: Chai.AssertStatic;
    var expect: Chai.ExpectStatic;
    var should: Chai.Should;
}
