// Type definitions for filter-invalid-dom-props 2.0
// Project: https://www.npmjs.com/package/filter-invalid-dom-props
// Definitions by: icopp <https://github.com/icopp>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

// Note that the below can't actually be fully typed in the latest version of
// Typescript, because there's no way to regex-match against `data-` or `aria-`
// (which this function allows in addition to a list of static props).

export default function filterInvalidDOMProps<T>(props: T): Partial<T>;
