import chai = require('chai');

const { expect } = chai;
const context: Mocha.Context = <any> {};

expect('foo').to.matchSnapshot(context);
