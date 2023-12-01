import isExpression = require("is-expression");

// $ExpectType boolean
isExpression("myVar");

// $ExpectType boolean
isExpression("[\"an\", \"array\", \"'s\"].indexOf(\"index\")");

// $ExpectType boolean
isExpression("var", { throw: true });

// $ExpectType boolean
isExpression("public", { strict: true });

// $ExpectType boolean
isExpression("abc // my comment", { lineComment: true });

// $ExpectType boolean
isExpression("abc // my comment", { lineComment: true, strict: true, sourceFile: "myFile.js" });

// @ts-expect-error
isExpression(123);

// @ts-expect-error
isExpression("myVar", { throw: 123 });
