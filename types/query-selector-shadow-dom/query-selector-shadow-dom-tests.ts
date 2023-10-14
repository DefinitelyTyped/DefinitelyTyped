import { collectAllElementsDeep, querySelectorAllDeep, querySelectorDeep } from "query-selector-shadow-dom";

// $ExpectType HTMLElement | null
const doc = querySelectorDeep("document");

// $ExpectType HTMLDivElement | null
const div = querySelectorDeep("div");

// $ExpectType SVGGElement | null
const g = querySelectorDeep("g");

// $ExpectType HTMLElement | null
const divTest = querySelectorDeep("div.test");

// @ts-expect-error
querySelectorDeep(42);
// @ts-expect-error
querySelectorDeep(true);
// @ts-expect-error
querySelectorDeep({});

// $ExpectType HTMLElement[]
const docs = querySelectorAllDeep("document");

// $ExpectType HTMLDivElement[]
const divs = querySelectorAllDeep("div");

// $ExpectType SVGGElement[]
const gs = querySelectorAllDeep("g");

// $ExpectType HTMLElement[]
const divTests = querySelectorAllDeep("div.test");

// @ts-expect-error
querySelectorAllDeep(42);
// @ts-expect-error
querySelectorAllDeep(true);
// @ts-expect-error
querySelectorAllDeep({});

// $Expect HTMLElement[]
const whole1 = collectAllElementsDeep(null, document);

// $Expect HTMLDivElement[]
const allDivs = collectAllElementsDeep("div", document);

// $Expect SVGGElement[]
const allGs = collectAllElementsDeep("svg", document);

// @ts-expect-error
const whole2 = collectAllElementsDeep();
