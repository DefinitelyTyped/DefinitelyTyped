import { escape, unescape } from "html-escaper";
import htmlEscaper = require("html-escaper");

// $ExpectType string
escape("<bella>");

// $ExpectType string
unescape(escape("<bella>"));

// $ExpectType string
htmlEscaper.escape("<bella>");

// $ExpectType string
htmlEscaper.unescape(htmlEscaper.escape("<bella>"));
