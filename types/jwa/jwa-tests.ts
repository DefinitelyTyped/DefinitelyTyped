import jwa = require("jwa");

const { sign, verify } = jwa("ES256");

const signature = sign("foo", "bar");

const verified = verify("foo", signature, "bar");
