// Type definitions for karma-chai 0.1
// Project: http://xdissent.github.io/karma-chai
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import chai = require('chai');

declare global {
    var assert: Chai.AssertStatic;
    var expect: Chai.ExpectStatic;
    var should: Chai.Should;
}
