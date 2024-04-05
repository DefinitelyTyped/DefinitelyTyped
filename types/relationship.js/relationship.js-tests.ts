import relationship = require("relationship.js");
import relationshipZH = require("relationship.js/zh-HK");
import relationshipModes = require("relationship.js/mode");
import relationshipZHModes = require("relationship.js/zh-HK/mode");

// $ExpectType string[]
relationship("爸爸的妈妈");
// $ExpectType string[]
relationship({ text: "爸爸", target: "我" });
// $ExpectType number
relationship.dataCount;
// $ExpectType any
relationship.data;
// $ExpectType void
relationship.setMode("northern", { "m,f": ["姥爷"] });
// $ExpectType string[]
relationshipZH("爸爸的妈妈");
// $expectType Record<string, {name: string, data: any}>
relationshipModes;
// $expectType Record<string, {name: string, data: any}>
relationshipZHModes;
