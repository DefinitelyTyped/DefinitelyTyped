import isPotentialCustomElementName = require("is-potential-custom-element-name");

// $ExpectType boolean
isPotentialCustomElementName("");
// $ExpectType boolean
isPotentialCustomElementName("a");
// $ExpectType boolean
isPotentialCustomElementName("a-1");
// $ExpectType boolean
isPotentialCustomElementName("a-b");
// $ExpectType boolean
isPotentialCustomElementName("a-)");

// @ts-expect-error
isPotentialCustomElementName();
// @ts-expect-error
isPotentialCustomElementName(1);
// @ts-expect-error
isPotentialCustomElementName(true);
// @ts-expect-error
isPotentialCustomElementName(Symbol("a-1"));
// @ts-expect-error
isPotentialCustomElementName({});
