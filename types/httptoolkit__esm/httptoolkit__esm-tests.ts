import esm = require("@httptoolkit/esm");

// $ExpectType Require
esm(exports);

// $ExpectType Require
esm(module, { cjs: true });
// @ts-expect-error
esm(module, { cjs: "1234" });

// $ExpectType Require
esm(module, { mode: "auto" });
// @ts-expect-error
esm(module, { mode: "unknown" });
