/**
 * Returns whether the value is a valid `RegExp` object with the `[[RegExpMatcher]]` internal slot.
 */
declare function isRegex(value: any): value is RegExp;
export = isRegex;
