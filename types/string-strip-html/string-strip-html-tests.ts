import stringStripHtml = require("string-strip-html");

stringStripHtml("");
stringStripHtml("", {});
stringStripHtml("", { dumpLinkHrefsNearby: {} });

stringStripHtml("Some text <b>and</b> text.").result;
