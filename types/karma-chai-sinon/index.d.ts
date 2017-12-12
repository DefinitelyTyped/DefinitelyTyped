// Type definitions for karma-chai-sinon 0.1.5
// Project: https://github.com/tubalmartin/karma-chai-sinon
// Definitions by: Václav Ostrožlík <https://github.com/vasek17>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// TypeScript Version: 2.3

import { AssertStatic, ExpectStatic, Should } from "chai";
import Sinon = require("sinon");

declare global {
    var should: Should;
    var expect: ExpectStatic;
    var assert: AssertStatic;
    var sinon: Sinon.SinonStatic;
}
