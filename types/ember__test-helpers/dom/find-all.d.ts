// Derived, with modification, from the types for `querySelectorAll`. These
// would simply be defined as a tweaked re-export as `querySelector` is, but it
// is non-trivial (to say the least!) to preserve overloads like this while also
// changing the return type (from `NodeListOf` to `Array`).
export default function findAll<K extends keyof HTMLElementTagNameMap>(selectors: K): Array<HTMLElementTagNameMap[K]>;
export default function findAll<K extends keyof SVGElementTagNameMap>(selectors: K): Array<SVGElementTagNameMap[K]>;
export default function findAll(selectors: string): Element[];
