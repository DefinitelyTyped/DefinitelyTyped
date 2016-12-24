// Type definitions for verror v1.6.0
// Project: https://github.com/davepacheco/node-verror
// Definitions by: Sven Reglitzki <https://github.com/svi3c/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


import VError = require("verror");

var error = new Error("foo");
var verror1 = new VError(error, "bar");
var verror2 = new VError.VError(error, "bar");
var serror = new VError.SError(error, "bar");
var multiError = new VError.MultiError([verror1, verror2]);
var werror = new VError.WError(verror1, "foobar");

var verror3 = new VError({
    name: "fooError",
    cause: error,
    info: {
        "info0": "baz"
    }
}, "bar");

var verror4 = new VError({ cause: null }, "bar");

var cause1: Error | undefined = verror1.cause();
var cause2: Error | undefined = werror.cause();

const info: { [k: string]: any } = VError.info(verror3);
const namedCause: Error | null = VError.findCauseByName(verror3, "fooError");
const stack: string = VError.fullStack(verror3);
const cause3: Error | null = VError.cause(verror3);

