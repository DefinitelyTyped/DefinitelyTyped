import chai = require('chai');
import chaiOequal = require('chai-roughly');

chai.use(chaiOequal);

import {
    expect,
    assert
} from 'chai';

expect(1.2).to.be.roughly().equal(1.1999999999);
expect(1.2).to.roughly().equal(1.1999999999);
expect(1.2).to.roughly(0.1).equal(1.1);
expect(1.2).to.roughly(0.1).deep.equal(1.1);
expect(1.2).to.roughly.equal(1.1999999999999999999);
