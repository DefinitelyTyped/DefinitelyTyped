import { querySelectorDeep, querySelectorAllDeep } from 'query-selector-shadow-dom';

// $ExpectType HTMLElement
const doc = querySelectorDeep('document') as HTMLElement;

// $ExpectError
querySelectorDeep(42);
// $ExpectError
querySelectorDeep(true);
// $ExpectError
querySelectorDeep({});

// $ExpectType HTMLElement[]
const docs = querySelectorAllDeep('document') as HTMLElement[];

// $ExpectError
querySelectorAllDeep(42);
// $ExpectError
querySelectorAllDeep(true);
// $ExpectError
querySelectorAllDeep({});
