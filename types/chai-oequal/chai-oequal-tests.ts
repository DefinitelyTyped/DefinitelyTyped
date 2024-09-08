import ChaiOequal = require("chai-oequal");

import("chai").then(({ use }) => use(ChaiOequal));

const assert: Chai.AssertStatic = {} as any;
const expect: Chai.ExpectStatic = {} as any;

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
