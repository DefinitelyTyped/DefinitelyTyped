// Type definitions for object.omit 3.0
// Project: https://github.com/jonschlinkert/object.omit
// Definitions by: Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

type Omit<GType, GKeys extends keyof GType> = Pick<GType, Exclude<keyof GType, GKeys>>;

/**
 * Return a copy of an object excluding the given key, or array of keys. Also accepts an optional filter function as the last argument."
 *
 * ```ts
 * omit({a: 'a', b: 'b', c: 'c'}, ['a', 'c'])
 * //=> { b: 'b' }
 * ```
 *
 * @param object
 * @param keys
 */

declare function omit<GObject extends object, GKey extends keyof GObject>(
  object: GObject,
  key: GKey | GKey[],
): Omit<GObject, GKey>;

declare function omit<GObject extends object, GKey extends keyof GObject>(
  object: GObject,
  fn: (value: GObject[GKey], key: GKey, obj: GObject) => boolean,
): { [key: string]: any };

export = omit;
