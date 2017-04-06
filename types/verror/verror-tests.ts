import VError = require("verror");
import { VError as VError2, MultiError, SError, WError } from "verror";

const error = new Error("foo");
const verror1 = new VError(error, "bar");
const verror2 = new VError2(error, "bar");
const serror = new SError(error, "bar");
const multiError = new MultiError([verror1, verror2]);
const werror = new WError(verror1, "foobar");

const verror3 = new VError({
    name: "fooError",
    cause: error,
    info: {
        "info0": "baz"
    }
}, "bar");

const verror4 = new VError({ cause: null }, "bar");

const cause1: Error | undefined = verror1.cause();
const cause2: Error | undefined = werror.cause();

const info: { [k: string]: any } = VError.info(verror3);
const namedCause: Error | null = VError.findCauseByName(verror3, "fooError");
const stack: string = VError.fullStack(verror3);
const cause3: Error | null = VError.cause(verror3);
