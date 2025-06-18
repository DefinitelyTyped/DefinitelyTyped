import hidefile = require("hidefile");

hidefile.hide("./", () => {}); // $ExpectType void
hidefile.hideSync("./"); // $ExpectType string | Buffer | URL || string | URL | Buffer || string | Buffer<ArrayBufferLike> | URL
hidefile.isDotPrefixed("./"); // $ExpectType boolean
hidefile.isHidden("./", () => {}); // $ExpectType void
hidefile.isHiddenSync("./"); // $ExpectType boolean
hidefile.reveal("./", () => {}); // $ExpectType void
hidefile.revealSync("./"); // $ExpectType string | Buffer | URL || string | URL | Buffer || string | Buffer<ArrayBufferLike> | URL
hidefile.shouldBeHidden("./", () => {}); // $ExpectType void
hidefile.shouldBeHiddenSync("./"); // $ExpectType boolean
