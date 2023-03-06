import tag = require("html-tag");

tag("script");
tag("script", "alert('Hi!')");
tag("script", { src: "index.js" });
tag("script", { src: "index.js" }, "alert('Hi!')");
tag("script", { src: "index.js" }, false);
