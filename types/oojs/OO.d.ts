/**
 * Namespace for all classes, static methods and static properties.
 */
declare namespace OO {
    /**
     * Utility to initialize a class for OO inheritance.
     *
     * Currently this just initializes an empty static object.
     *
     * @param fn
     */
    function initClass(fn: ConstructorLike): void;

    /**
     * Inherit from prototype to another using {@link Object.create}.
     *
     * Beware: This redefines the prototype, call before setting your prototypes.
     *
     * Beware: This redefines the prototype, can only be called once on a function.
     * If called multiple times on the same function, the previous prototype is lost.
     * This is how prototypal inheritance works, it can only be one straight chain
     * (just like classical inheritance in PHP for example). If you need to work with
     * multiple constructors consider storing an instance of the other constructor in a
     * property instead, or perhaps use a mixin (see {@link OO.mixinClass}).
     *
     *     function Thing() {}
     *     Thing.prototype.exists = function () {};
     *
     *     function Person() {
     *         Person.super.apply( this, arguments );
     *     }
     *     OO.inheritClass( Person, Thing );
     *     Person.static.defaultEyeCount = 2;
     *     Person.prototype.walk = function () {};
     *
     *     function Jumper() {
     *         Jumper.super.apply( this, arguments );
     *     }
     *     OO.inheritClass( Jumper, Person );
     *     Jumper.prototype.jump = function () {};
     *
     *     Jumper.static.defaultEyeCount === 2;
     *     var x = new Jumper();
     *     x.jump();
     *     x.walk();
     *     x instanceof Thing && x instanceof Person && x instanceof Jumper;
     *
     * @param targetFn
     * @param originFn
     * @throws {Error} If target already inherits from origin
     */
    function inheritClass(targetFn: ConstructorLike, originFn: ConstructorLike): void;

    /**
     * Copy over *own* prototype properties of a mixin.
     *
     * The 'constructor' (whether implicit or explicit) is not copied over.
     *
     * This does not create inheritance to the origin. If you need inheritance,
     * use {@link OO.inheritClass} instead.
     *
     * Beware: This can redefine a prototype property, call before setting your prototypes.
     *
     * Beware: Don't call before {@link OO.inheritClass}.
     *
     *     function Foo() {}
     *     function Context() {}
     *
     *     // Avoid repeating this code
     *     function ContextLazyLoad() {}
     *     ContextLazyLoad.prototype.getContext = function () {
     *         if ( !this.context ) {
     *             this.context = new Context();
     *         }
     *         return this.context;
     *     };
     *
     *     function FooBar() {}
     *     OO.inheritClass( FooBar, Foo );
     *     OO.mixinClass( FooBar, ContextLazyLoad );
     *
     * @param targetFn
     * @param originFn
     */
    function mixinClass(targetFn: ConstructorLike, originFn: ConstructorLike): void;

    /**
     * Test whether one class is a subclass of another, without instantiating it.
     *
     * Every class is considered a subclass of Object and of itself.
     *
     * @param testFn The class to be tested
     * @param baseFn The base class
     * @return Whether testFn is a subclass of baseFn (or equal to it)
     */
    function isSubclass(testFn: ConstructorLike, baseFn: ConstructorLike): boolean;

    /**
     * Get a deeply nested property of an object using variadic arguments, protecting against
     * undefined property errors.
     *
     * `quux = OO.getProp( obj, 'foo', 'bar', 'baz' );` is equivalent to `quux = obj.foo.bar.baz;`
     * except that the former protects against JS errors if one of the intermediate properties
     * is undefined. Instead of throwing an error, this function will return undefined in
     * that case.
     *
     * @param obj
     * @param keys
     * @return obj[arguments[1]][arguments[2]].... or undefined
     */
    function getProp<T extends object, K extends ValidKey[]>(obj: T, ...keys: K): RecursivelyGet<T, K>;

    /**
     * Set a deeply nested property of an object using variadic arguments, protecting against
     * undefined property errors.
     *
     * `OO.setProp( obj, 'foo', 'bar', 'baz' );` is equivalent to `obj.foo.bar = baz;` except that
     * the former protects against JS errors if one of the intermediate properties is
     * undefined. Instead of throwing an error, undefined intermediate properties will be
     * initialized to an empty object. If an intermediate property is not an object, or if obj itself
     * is not an object, this function will silently abort.
     *
     * @param obj
     * @param keys
     * @param value
     */
    function setProp(obj: object, ...keysAndValue: [...string[], any]): void;

    /**
     * Delete a deeply nested property of an object using variadic arguments, protecting against
     * undefined property errors, and deleting resulting empty objects.
     *
     * @param obj
     * @param keys
     */
    function deleteProp(obj: object, ...keys: string[]): void;

    /**
     * Create a new object that is an instance of the same
     * constructor as the input, inherits from the same object
     * and contains the same own properties.
     *
     * This makes a shallow non-recursive copy of own properties.
     * To create a recursive copy of plain objects, use #copy.
     *
     *     var foo = new Person( mom, dad );
     *     foo.setAge( 21 );
     *     var foo2 = OO.cloneObject( foo );
     *     foo.setAge( 22 );
     *
     *     // Then
     *     foo2 !== foo; // true
     *     foo2 instanceof Person; // true
     *     foo2.getAge(); // 21
     *     foo.getAge(); // 22
     *
     * @param origin
     * @return Clone of origin
     */
    function cloneObject<T extends object>(origin: T): T;

    /**
     * Get an array of all property values in an object.
     *
     * @param obj Object to get values from
     * @return List of object values
     */
    function getObjectValues<T extends object>(obj: T): Array<T[keyof T]>;

    /**
     * Use binary search to locate an element in a sorted array.
     *
     * searchFunc is given an element from the array. `searchFunc(elem)` must return a number
     * above 0 if the element we're searching for is to the right of (has a higher index than) elem,
     * below 0 if it is to the left of elem, or zero if it's equal to elem.
     *
     * To search for a specific value with a comparator function (a `function cmp(a,b)` that returns
     * above 0 if `a > b`, below 0 if `a < b`, and 0 if `a == b`), you can use
     * `searchFunc = cmp.bind( null, value )`.
     *
     * @param arr Array to search in
     * @param searchFunc Search function
     * @param forInsertion If not found, return index where val could be inserted
     * @return Index where val was found, or null if not found
     */
    function binarySearch<T>(arr: T[], searchFunc: (item: T) => number, forInsertion?: boolean): number | null;

    /**
     * Recursively compare properties between two objects.
     *
     * A false result may be caused by property inequality or by properties in one object missing from
     * the other. An asymmetrical test may also be performed, which checks only that properties in the
     * first object are present in the second object, but not the inverse.
     *
     * If either a or b is null or undefined it will be treated as an empty object.
     *
     * @param a First object to compare
     * @param b Second object to compare
     * @param asymmetrical Whether to check only that a's values are equal to b's
     *  (i.e. a is a subset of b)
     * @return If the objects contain the same values as each other
     */
    function compare(a: object | undefined | null, b: object | undefined | null, asymmetrical?: boolean): boolean;

    /**
     * Create a plain deep copy of any kind of object.
     *
     * Copies are deep, and will either be an object or an array depending on `source`.
     *
     * @param source Object to copy
     * @return Copy of source object
     */
    function copy<T>(source: T): T;

    /**
     * Create a plain deep copy of any kind of object.
     *
     * Copies are deep, and will either be an object or an array depending on `source`.
     *
     * @param source Object to copy
     * @param leafCallback Applied to leaf values after they are cloned but before they are
     *  added to the clone
     * @param nodeCallback Applied to all values before they are cloned. If the
     *  nodeCallback returns a value other than undefined, the returned value is used instead of
     *  attempting to clone.
     * @return Copy of source object
     */
    function copy<T, D extends number = 10>(
        source: T,
        leafCallback?: (leaf: LeavesOf<T, D>) => any,
        nodeCallback?: (node: NodesOf<T, D>) => any,
    ): unknown;

    /**
     * Generate a hash of an object based on its name and data.
     *
     * Performance optimization: <http://jsperf.com/ve-gethash-201208#/toJson_fnReplacerIfAoForElse>
     *
     * To avoid two objects with the same values generating different hashes, we utilize the replacer
     * argument of JSON.stringify and sort the object by key as it's being serialized. This may or may
     * not be the fastest way to do this; we should investigate this further.
     *
     * Objects and arrays are hashed recursively. When hashing an object that has a .getHash()
     * function, we call that function and use its return value rather than hashing the object
     * ourselves. This allows classes to define custom hashing.
     *
     * @param val Object to generate hash for
     * @return Hash of object
     */
    function getHash(val: any): string;

    namespace getHash {
        /**
         * Sort objects by key (helper function for {@link OO.getHash}).
         *
         * This is a callback passed into {@link JSON.stringify}.
         *
         * @param key Property name of value being replaced
         * @param val Property value to replace
         * @return Replacement value
         */
        function keySortReplacer(key: string, val: any): any;
    }

    /**
     * Get the unique values of an array, removing duplicates.
     *
     * @param arr Array
     * @return Unique values in array
     */
    function unique<T>(arr: T[]): T[];

    /**
     * Compute the union (duplicate-free merge) of a set of arrays.
     *
     * Arrays values must be convertible to object keys (strings).
     *
     * By building an object (with the values for keys) in parallel with
     * the array, a new item's existence in the union can be computed faster.
     *
     * @param arrays Arrays to union
     * @return Union of the arrays
     */
    function simpleArrayUnion<T extends any[][]>(...arrays: T): T extends Array<Array<infer R>> ? R[] : never;

    /**
     * Compute the intersection of two arrays (items in both arrays).
     *
     * Arrays values must be convertible to object keys (strings).
     *
     * @param a First array
     * @param b Second array
     * @return Intersection of arrays
     */
    function simpleArrayIntersection<T, U>(a: T[], b: U[]): Array<Extract<T, U>>;

    /**
     * Compute the difference of two arrays (items in 'a' but not 'b').
     *
     * Arrays values must be convertible to object keys (strings).
     *
     * @param a First array
     * @param b Second array
     * @return Intersection of arrays
     */
    function simpleArrayDifference<T>(a: T[], b: any[]): T[];

    /**
     * Assert whether a value is a plain object or not.
     *
     * @param obj
     */
    function isPlainObject(obj: any): boolean;
}
