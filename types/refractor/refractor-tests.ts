import refractor = require("refractor/core");
import markdown = require("refractor/lang/markdown");

refractor.register(markdown);
refractor.alias("markdown", "md");
refractor.alias("markdown", ["md"]);
refractor.alias({ markdown: ["md"] });
