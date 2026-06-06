import chaiMatchPattern = require("chai-match-pattern");

import("chai").then(chai => chai.use(chaiMatchPattern));
declare const expect: Chai.ExpectStatic;

const _ = chaiMatchPattern.getLodashModule();

_.isDateString("foo");

expect({ foo: "bar" }).to.matchPattern({ foo: "bar" });
