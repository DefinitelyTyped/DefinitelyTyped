/// <reference path="config.d.ts" />

import config = require('config');

var value1: string = config.get<string>("");
var value2: any = config.get("");

var has: boolean = config.has("");

// util tests:
var extended1: any = config.util.extendDeep({}, {});
var extended2: any = config.util.extendDeep({}, {}, 20);

var clone1: any = config.util.cloneDeep({});
var clone2: any = config.util.cloneDeep({}, 20);

var equals1: boolean = config.util.equalsDeep({}, {});
var equals2: boolean = config.util.equalsDeep({}, {}, 20);

var diff1: any = config.util.diffDeep({}, {});
var diff2: any = config.util.diffDeep({}, {}, 20);

var immutable1: any = config.util.makeImmutable({});
var immutable2: any = config.util.makeImmutable({}, "");
var immutable3: any = config.util.makeImmutable({}, "", "");

var hidden1: any = config.util.makeHidden({}, "");
var hidden2: any = config.util.makeHidden({}, "", "");

var env: string = config.util.getEnv("");
