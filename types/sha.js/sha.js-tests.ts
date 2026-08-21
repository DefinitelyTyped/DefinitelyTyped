import shajs = require("sha.js");

shajs("sha256")
    .update("42")
    .digest("hex");
new shajs.sha().update("42").digest("hex");
new shajs.sha1().update("42").digest("hex");
new shajs.sha224().update("42").digest("hex");
new shajs.sha256().update("42").digest("hex");
new shajs.sha384().update("42").digest("hex");
new shajs.sha512().update("42").digest("hex");

// Algorithm must match list of supported values
// @ts-expect-error
shajs("unexpected-algorithm").update("something").digest("hex");

// Also support uppercase value (implementation allows case-insensitive values too)
shajs("SHA256");

// Type of value to be hashed doesn't include a number
// @ts-expect-error
shajs("sha256").update(123).digest("hex");

const sha256stream = shajs("sha256");
sha256stream.end("42");
(sha256stream.read() as Buffer).toString("hex");
