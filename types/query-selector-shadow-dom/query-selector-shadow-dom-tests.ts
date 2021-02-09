import { querySelectorDeep, querySelectorAllDeep, collectAllElementsDeep } from 'query-selector-shadow-dom';

// $ExpectType HTMLElement | null
const doc = querySelectorDeep('document');

// $ExpectType HTMLElement | null
const doc2 = querySelectorDeep('div.test');

// $ExpectError
querySelectorDeep(42);
// $ExpectError
querySelectorDeep(true);
// $ExpectError
querySelectorDeep({});

// $ExpectType HTMLElement[]
const docs = querySelectorAllDeep('document');

// $ExpectError
querySelectorAllDeep(42);
// $ExpectError
querySelectorAllDeep(true);
// $ExpectError
querySelectorAllDeep({});

// $Expect HTMLHtmlElement
const whole1 = collectAllElementsDeep(null, document);

// $ExpectError
const whole2 = collectAllElementsDeep();
