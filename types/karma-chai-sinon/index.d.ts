/// <reference types="chai" />
import Sinon = require("sinon");

declare global {
    var should: Chai.Should;
    var expect: Chai.ExpectStatic;
    var assert: Chai.AssertStatic;
    var sinon: Sinon.SinonStatic;
}
