// Type definitions for verror v1.6.0
// Project: https://github.com/davepacheco/node-verror
// Definitions by: Sven Reglitzki <https://github.com/svi3c/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="verror.d.ts" />

import VError = require("verror");

var error = new Error("foo");
var verror1 = new VError(error, "bar");
var verror2 = new VError.VError(error, "bar");
var serror = new VError.SError(error, "bar");
var multiError = new VError.MultiError([verror1, verror2]);
var werror = new VError.WError(verror1, "foobar");

var cause1: Error = verror1.cause();
var cause2: Error = werror.cause();
