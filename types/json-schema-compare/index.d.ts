import { JSONSchema4, JSONSchema6, JSONSchema6Definition, JSONSchema7, JSONSchema7Definition } from "json-schema";

export = compare;

type JSONSchemaComparee = JSONSchema4 | JSONSchema6Definition | JSONSchema7Definition | undefined;
type KnownKeys<T> = {
    [K in keyof T]: string extends K ? never : K;
} extends { [_ in keyof T]: infer U } ? U : never;
/**
 * The `string & {''?: never}` is a workaround for
 * [Microsoft/TypeScript#29729](https://github.com/Microsoft/TypeScript/issues/29729).
 * It will be removed as soon as it's not needed anymore.
 */
type JSONSchemaKeys =
    | KnownKeys<JSONSchema4>
    | keyof JSONSchema6
    | keyof JSONSchema7
    | string & { ""?: never | undefined };
interface Options {
    /**
     * Ignores certain keywords, useful to exclude meta keywords like title,
     * description etc or custom keywords. If all you want to know if they are
     * the same in terms of validation keywords.
     *
     * @default []
     */
    ignore?: JSONSchemaKeys[] | undefined;
}

/**
 * Compare json schemas correctly.
 *
 * - Ignores sort for arrays where sort does not matter, like required, enum, type, anyOf, oneOf, anyOf, dependencies (if array)
 * - Compares correctly type when array or string
 * - Ignores duplicate values before comparing
 * - For schemas and sub schemas `undefined`, `true` and `{}` are equal
 * - For minLength, minItems and minProperties `undefined` and `0` are equal
 * - For uniqueItems, `undefined` and `false` are equal
 */
declare function compare(a: JSONSchemaComparee, b: JSONSchemaComparee, options?: Options): boolean;
