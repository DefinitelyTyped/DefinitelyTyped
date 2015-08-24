/// <reference path="chai-as-promised.d.ts" />
/// <reference path="../bluebird/bluebird.d.ts" />

// Compatibility check for Promise/A+ valid libraries
var thenableNum: Chai.Thenable<number>;
import Bluebird = require('bluebird');
thenableNum = Bluebird.resolve(1);
