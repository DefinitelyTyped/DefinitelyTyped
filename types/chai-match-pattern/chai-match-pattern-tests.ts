import * as chaiMatchPattern from "chai-match-pattern";
chai.use(chaiMatchPattern);

const _ = chaiMatchPattern.getLodashModule();

_.isDateString("foo");

chai.expect({ foo: "bar" }).to.matchPattern({ foo: "bar" });
