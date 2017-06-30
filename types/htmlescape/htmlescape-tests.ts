import * as htmlescape from "htmlescape";
import { sanitize } from "htmlescape";

// === '{"x":"a\\u0026\\u003c\\u003e\\u2028\\u2029"}'
htmlescape({ x: "a&<>\u2028\u2029" });

// === 'a&<>\\u2028\\u2029'
sanitize("a&<>\u2028\u2029");
