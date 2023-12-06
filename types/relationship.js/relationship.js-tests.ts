import relationship = require("relationship.js");

// $ExpectType string[]
relationship("爸爸的妈妈");
// $ExpectType string[]
relationship({ text: "爸爸", target: "我" });
// $ExpectType number
relationship.dataCount;
// $ExpectType void
relationship.setMode("northern", { "m,f": ["姥爷"] });
