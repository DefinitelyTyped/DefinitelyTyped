import chaiMatchPattern = require("chai-match-pattern");

import('chai').then(chai => chai.use(chaiMatchPattern));
const expect: Chai.ExpectStatic = {} as any;

const _ = chaiMatchPattern.getLodashModule();

_.isDateString("foo");

expect({ foo: "bar" }).to.matchPattern({ foo: "bar" });
