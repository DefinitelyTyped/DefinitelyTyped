import ChaiOequal = require("chai-oequal");

import("chai").then(({ use }) => use(ChaiOequal));

declare const assert: Chai.AssertStatic;
declare const expect: Chai.ExpectStatic;

expect({
    equals: () => true,
}).to.be.oequal({});
expect({
    customequals: () => true,
}).to.be.oequal({}, "customequals");
expect({
    equals: () => true,
}).to.be.oeql({});
expect({
    equals: () => true,
}).to.be.oeq({});

assert.oequal({
    equals: () => true,
}, {});
assert.oequal(
    {
        customequals: () => true,
    },
    {},
    "customequals",
);
assert.oeql({
    equals: () => true,
}, {});
assert.oeq({
    equals: () => true,
}, {});
