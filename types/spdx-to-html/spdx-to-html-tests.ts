import spdxToHtml = require("spdx-to-html");

// $ExpectType string | null
spdxToHtml("MIT");

// $ExpectType string | null
spdxToHtml("(MIT OR Apache-2.0)");

// $ExpectType string | null
spdxToHtml("Invalid-Expression");
