/// <reference path="chai-as-promised.d.ts" />
/// <reference path="../q/Q.d.ts" />

// Compatibility check for Promise/A+ valid libraries
var thenableNum: Chai.Thenable<number>;
import Q = require('q');
thenableNum = Q.resolve(1);
