// Type definitions for karma-chai-sinon 0.1.5
// Project: https://github.com/tubalmartin/karma-chai-sinon
// Definitions by: Václav Ostrožlík <https://github.com/vasek17>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="chai" />
import Sinon = require('sinon');

declare global {
    var should: Chai.Should;
    var expect: Chai.ExpectStatic;
    var assert: Chai.AssertStatic;
    var sinon: Sinon.SinonStatic;
}
