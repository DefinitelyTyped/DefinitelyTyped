import esm = require("@httptoolkit/esm");

// $ExpectType NodeRequire
esm(exports);

// $ExpectType NodeRequire
esm(module, { cjs: true });
// @ts-expect-error
esm(module, { cjs: "1234" });

// $ExpectType NodeRequire
esm(module, { mode: "auto" });
// @ts-expect-error
esm(module, { mode: "unknown" });
