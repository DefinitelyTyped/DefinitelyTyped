import ic = require("img-clipboard");

// $ExpectType boolean
ic.isWayland();

// @ts-expect-error
ic.copyImg(42);

// $ExpectType Promise<[ExecException | null, string, string]>
ic.copyImg(Buffer.from([]));

// $ExpectType Promise<[ExecException | null, string, string]>
ic.copyImg("test.png");
