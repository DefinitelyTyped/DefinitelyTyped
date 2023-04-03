import { expect, use } from 'chai';
import ChaiJsonPattern = require('chai-json-pattern');

use(ChaiJsonPattern);

expect({ a: 2 }).to.matchPattern(`{
    "a": Number AND range(0, 5),
}`);
