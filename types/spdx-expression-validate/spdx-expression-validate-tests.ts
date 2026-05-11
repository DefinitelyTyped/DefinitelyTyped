import spdxExpressionValidate = require("spdx-expression-validate");

// $ExpectType boolean
spdxExpressionValidate("MIT");

// $ExpectType boolean
spdxExpressionValidate("(MIT OR Apache-2.0)");

// $ExpectType boolean
spdxExpressionValidate("Invalid-Identifier");
