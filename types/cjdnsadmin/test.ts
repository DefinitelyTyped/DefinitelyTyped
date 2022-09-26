/// <reference path="bundle.d.ts" />

import assert = require("assert");
const { connect } = require("cjdnsadmin");

assert.equal(typeof connect, "function");
