import Chai = require('chai');
import ChaiOequal = require('chai-oequal');

Chai.use(ChaiOequal);

import {
    expect,
    assert
} from 'chai';

expect({
    equals: () => true,
}).to.be.oequal({});
expect({
    customequals: () => true,
}).to.be.oequal({}, 'customequals');
expect({
    equals: () => true,
}).to.be.oeql({});
expect({
    equals: () => true,
}).to.be.oeq({});

assert.oequal({
    equals: () => true,
}, {});
assert.oequal({
    customequals: () => true,
}, {}, 'customequals');
assert.oeql({
    equals: () => true,
}, {});
assert.oeq({
    equals: () => true,
}, {});
