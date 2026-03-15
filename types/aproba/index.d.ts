/**
 * Validates function arguments against a type schema string.
 *
 * Schema characters:
 * - `*` — any type
 * - `A` — array (or arguments object)
 * - `S` — string
 * - `N` — number
 * - `F` — function
 * - `O` — object (not array or error)
 * - `B` — boolean
 * - `E` — error
 * - `Z` — null or undefined
 *
 * Multiple schemas can be separated by `|` (pipe) to allow alternatives.
 *
 * @param schema - Type schema string (e.g. `"SNF"`, `"SA|SN"`)
 * @param args - Arguments array-like object to validate
 * @throws TypeError if arguments don't match the schema
 */
declare function validate(schema: string, args: ArrayLike<any>): void;

export = validate;
