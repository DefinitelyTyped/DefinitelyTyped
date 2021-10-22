/**
 * Copies enumerable properties and symbols from the objects given as 2nd+ parameters to the
 * prototype of first object (a constructor).
 *
 *  class Editor {
 *   ...
 *  }
 *
 *  const SomeMixin = {
 *   a() {
 *    return 'a';
 *   }
 *  };
 *
 *  mix( Editor, SomeMixin, ... );
 *
 *  new Editor().a(); // -> 'a'
 *
 * Note: Properties which already exist in the base class will not be overriden.
 *
 */
export default function mix<T>(baseClass: { new (...p: any[]): T }, ...mixins: Array<Partial<T>>): void;
