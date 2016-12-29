import VError = require("verror");
import { VError as VError2, MultiError, SError, WError } from "verror";

var error = new Error("foo");
var verror1 = new VError(error, "bar");
var verror2 = new VError2(error, "bar");
var serror = new SError(error, "bar");
var multiError = new MultiError([verror1, verror2]);
var werror = new WError(verror1, "foobar");

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

