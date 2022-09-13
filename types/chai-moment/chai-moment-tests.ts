import { assert, expect, use } from 'chai';
import chaiMoment = require('chai-moment');

use(chaiMoment);

const g: ChaiMoment.Granularity = 'month';

// bdd style
expect('2019-03-14').to.be.afterMoment('2019-03-12', 'day');
expect('2019-03-14').to.be.beforeMoment('2019-03-16');
expect('2019-03-14').to.be.sameMoment('2019-03-14', g);

// tdd style
assert.afterMoment('2019-03-14', '2019-03-12');
assert.beforeMoment('2019-03-14', '2019-03-18', 'day');
assert.sameMoment('2019-03-14', '2019-03-14', 'day');
