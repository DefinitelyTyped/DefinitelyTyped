import filenamifyUrl = require("filenamify-url");

filenamifyUrl("http://sindresorhus.com/foo?bar=baz");

filenamifyUrl("http://sindresorhus.com/foo", { replacement: "🐴" });

filenamifyUrl.path("https://sindresorhus.com");
