import Commerce = require("@chec/commerce.js");

const commerce = new Commerce("{your_public_key}");

// $ExpectType void | number[]
commerce.error({});

// $ExpectType any
commerce.request("test", "get");
