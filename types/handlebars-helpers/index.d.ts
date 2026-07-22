declare module 'handlebars-helpers' {
  type Groups = typeof import('./lib/index.js');

  // Keys of the category object whose value is a real helper group. Groups typed
  // `any` (e.g. `logging`) are dropped so they can't collapse the merge to `any`.
  type HelperGroupKeys<T> = {
    [K in keyof T]: 0 extends 1 & T[K] ? never : K;
  }[keyof T];

  type UnionToIntersection<U> = (
    U extends unknown ? (group: U) => void : never
  ) extends (group: infer I) => void
    ? I
    : never;

  /** All helpers, flattened from every category group into one object. */
  type Helpers = UnionToIntersection<Groups[HelperGroupKeys<Groups>]>;

  /**
   * `handlebars-helpers`' default export: call it (optionally scoped to a group
   * name / with options) to get the object of all registered helpers.
   */
  const helpers: (groups?: any, options?: any) => Helpers;
  export = helpers;
}
