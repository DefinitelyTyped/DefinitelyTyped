import { querySelectorDeep, querySelectorAllDeep, collectAllElementsDeep } from 'query-selector-shadow-dom';

// $ExpectType HTMLElement | null
const doc = querySelectorDeep('document');

// $ExpectType HTMLElement | null
const doc2 = querySelectorDeep('div.test');

// @ts-expect-error
querySelectorDeep(42);
// @ts-expect-error
querySelectorDeep(true);
// @ts-expect-error
querySelectorDeep({});

// $ExpectType HTMLElement[]
const docs = querySelectorAllDeep('document');

// @ts-expect-error
querySelectorAllDeep(42);
// @ts-expect-error
querySelectorAllDeep(true);
// @ts-expect-error
querySelectorAllDeep({});

// $Expect HTMLHtmlElement
const whole1 = collectAllElementsDeep(null, document);

// @ts-expect-error
const whole2 = collectAllElementsDeep();
