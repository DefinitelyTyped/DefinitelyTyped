import {assert, expect, use, should} from 'chai';
import chaiUuid = require('chai-uuid');

use(chaiUuid);
should();

expect('67cb8aa1-61bb-4b9b-8ca9-9dc0b278d5f7').to.be.uuid('v4');

// bdd style
expect('67cb8aa1-61bb-4b9b-8ca9-9dc0b278d5f7').to.be.uuid('v4');
expect('invalid').to.not.be.uuid('v4');

// tdd style
assert.jsonSchema('67cb8aa1-61bb-4b9b-8ca9-9dc0b278d5f7', 'v4');
assert.notJsonSchema('invalid', 'v4');
