import ufs = require("url-file-size");

// $ExpectType Promise<number>
ufs("https://dimden.dev/logo.png");

// @ts-expect-error
ufs(NaN);

// $ExpectType Promise<number>
ufs("https://dimden.dev/logo.png", 10000000);

// @ts-expect-error
ufs("https://dimden.dev/logo.png", "10000000");

// $ExpectType Promise<number>
ufs("https://dimden.dev/logo.png", 10000000, 69);

// @ts-expect-error
ufs("https://dimden.dev/logo.png", "10000000", "69");
