interface StringifyOptions {
    canonical?: boolean;
    indent?: boolean | number | string;
}

interface CloneOptions {
    keyOrderSensitive: boolean;
}

export function clone<T>(obj: T): T;
export function parse(str: string): any;
export function stringify(obj: any, options?: StringifyOptions): string;

export function toJSONValue(obj: any): string;
export function fromJSONValue(obj: string): any;
export function isBinary(value: any): boolean;
export function newBinary(len: number): Uint8Array;
export function equals(a: any, b: any, options?: CloneOptions): boolean;

/**
 * The interface that a class must satisfy to be able to become an
 * EJSON custom type via EJSON.addType.
 */
interface CustomType {
    /**
     * Return the tag used to identify this type. This must match the
     * tag used to register this type.
     */
    typeName: () => string;

    /* Serialize this instance into a JSON-compatible value. */
    toJSONValue: () => any;

    /**
     * Return a value `val` such that `this.equals(val)` is true, and
     * modifications to `val` do not affect `this` and vice versa.
     */
    clone?: () => CustomType;

    /* Return `true` if `other` has a value equal to `this`; `false` otherwise. */
    equals?: (other: CustomType) => boolean;
}

/**
 * Add a custom type, using a method of your choice to get to and
 * from a basic JSON-able representation.  The factory argument
 * is a function of JSON-able --> your object
 * The type you add must have:
 * - A toJSONValue() method, so that Meteor can serialize it
 * - a typeName() method, to show how to look it up in our type table.
 * It is okay if these methods are monkey-patched on.
 * EJSON.clone will use toJSONValue and the given factory to produce
 * a clone, but you may specify a method clone() that will be
 * used instead.
 * Similarly, EJSON.equals will use toJSONValue to make comparisons,
 * but you may provide a method equals() instead.
 *
 * @param name A tag for your custom type; must be unique among
 *                      custom data types defined in your project, and must
 *                      match the result of your type's `typeName` method.
 * @param factory A function that deserializes a JSON-compatible
 *                           value into an instance of your type.  This should
 *                           match the serialization performed by your
 *                           type's `toJSONValue` method.
 */
export function addType(name: string, factory: (jsonValue: unknown) => CustomType): void;
