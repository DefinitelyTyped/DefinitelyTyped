/**
 * Creates a fake based on the given schema
 * https://mokapi.io/docs/javascript-api/mokapi-faker/fake
 * @param schema schema - OpenAPI Schema object contains definition of a type
 * @example
 * export default function() {
 *   console.log(fake({type: 'string'}))
 *   console.log(fake({type: 'number'}))
 *   console.log(fake({type: 'string', format: 'date-time'}))
 *   console.log(fake({type: 'string', pattern: '^\d{3}-\d{2}-\d{4}$'})) // 123-45-6789
 * }
 */
export function fake(schema: Schema | JSONSchema): any;

/**
 * Gets the tree node with the given name
 * @param name name - tree node's name
 * @example
 * export default function() {
 *   const root = findByName(RootName)
 *   root.insert(0, { name: 'foo', test: () => { return true }, fake: () => { return 'foobar' } })
 *   console.log(fake({type: 'string'}))
 * }
 */
export function findByName(name: string): Tree;

/**
 * The name of the root faker tree
 */
export const RootName = "Faker";

/**
 * The Tree object represents a node in the faker tree
 */
export interface Tree {
    /**
     * Gets the name of the tree node
     */
    name: string;

    /**
     * Inserts a Tree objects after the last child of this tree.
     * @param node node - A Tree node to insert after the last child.
     */
    append: (node: Tree | CustomTree) => void;

    /**
     * Inserts a Tree objects at a specified index position
     * @param index index - The zero-based index position of the insertion.
     * @param node node - The tree node to insert
     */
    insert: (index: number, node: Tree | CustomTree) => void;

    /**
     * Removes a Tree node at the specific index position
     * @param index index - The zero-based index position to remove.
     */
    removeAt: (index: number) => void;

    /**
     * Removes a Tree node with the given name
     * @param name name - The name of a node to remove
     */
    remove: (name: string) => void;
}

/**
 * The CustomTree object represents a custom node in the faker tree
 */
export interface CustomTree {
    /**
     * Gets the name of the custom tree node
     */
    name: string;

    /**
     * Tests whether the tree node supports the request.
     * @param request request - Request for a new fake value
     * @example
     * export default function() {
     *   const frequencyItems = ['never', 'daily', 'weekly', 'monthly', 'yearly']
     *   const node = findByName('Strings')
     *   node.append({
     *     name: 'Frequency',
     *     test: (r) => { return r.lastName() === 'frequency' },
     *     fake: (r) => {
     *       return frequencyItems[Math.floor(Math.random()*frequencyItems.length)]
     *     }
     *   })
     *   return fake({ type: 'string' })
     * }
     */
    test: (r: Request) => boolean;

    /**
     * Gets a new fake value
     * @param request request - Request for a new fake value
     * @example
     * export default function() {
     *   const frequencyItems = ['never', 'daily', 'weekly', 'monthly', 'yearly']
     *   const node = findByName('Strings')
     *   node.append({
     *     name: 'Frequency',
     *     test: (r) => { return r.lastName() === 'frequency' },
     *     fake: (r) => {
     *       return frequencyItems[Math.floor(Math.random()*frequencyItems.length)]
     *     }
     *   })
     *   return fake({ type: 'string' })
     * }
     */
    fake: (r: Request) => any;
}

export interface Request {
    path: PathElement[];

    last: () => PathElement;
    lastName: () => string;
    lastSchema: () => JSONSchema;
}

export interface PathElement {
    name: string;
    schema: JSONSchema;
}

/**
 * JSON Schema defines a JSON-based format for describing the structure of JSON data
 * @example
 * {
 *   "type": "string",
 *   "format": "email"
 * }
 */
export interface JSONSchema {
    /**
     * Specifies the data type for a schema.
     */
    type?: SchemaType | SchemaType[];

    /**
     * The enum keyword is used to restrict a value to a fixed set of values.
     */
    enum?: any[];

    /**
     * The const keyword is used to restrict a value to a single value.
     */
    const?: any;

    /**
     * Contains a list of valid examples.
     */
    examples?: any[];

    /**
     * Specifies a default value.
     */
    default?: any;

    // Numbers
    /**
     * Restricts the number to a multiple of the given number
     */
    multipleOf?: number;

    /**
     * Restricts the number to a maximum number
     */
    maximum?: number;

    /**
     * Restricts the number to a exclusive maximum number
     */
    exclusiveMaximum?: number;

    /**
     * Restricts the number to a minimum number
     */
    minimum?: number;

    /**
     * Restricts the number to a exclusive minimum number
     */
    exclusiveMinimum?: number;

    // Strings
    /**
     * Restricts the string to a maximum length
     */
    maxLength?: number;

    /**
     * Restricts the string to a minimum length
     */
    minLength?: number;

    /**
     * The pattern keyword is used to restrict a string to a particular regular expression.
     */
    pattern?: string;

    /**
     * The format keyword allows for basic semantic identification of certain kinds of string values that are commonly used.
     */
    format?: string;

    // Arrays
    /**
     * Specifies the schema of the items in the array.
     */
    items?: JSONSchema;

    /**
     * Restricts the array to have a maximum length
     */
    maxItems?: number;

    /**
     * Restricts the array to have a minimum length
     */
    minItems?: number;

    /**
     * Restricts the array to have unique items
     */
    uniqueItems?: boolean;

    // Objects
    /**
     * Specifies the properties of an object
     */
    properties?: { [name: string]: JSONSchema };

    /**
     * Restricts the object to have a maximum of properties
     */
    maxProperties?: number;

    /**
     * Restricts the object to have a minimum of properties
     */
    minProperties?: number;

    /**
     * Specifies the required properties for an object
     */
    required?: string[];

    /**
     * The additionalProperties keyword is used to control the handling of extra stuff,
     * that is, properties whose names are not listed in the properties keyword or match
     * any of the regular expressions in the patternProperties keyword. By default, any
     * additional properties are allowed.
     */
    additionalProperties?: boolean | JSONSchema;

    /**
     * A value must be valid against all the schemas
     */
    allOf?: JSONSchema[];

    /**
     * A value must be valid against any the schemas
     */
    anyOf?: JSONSchema[];

    /**
     * A value must be valid against exactly one the schemas
     */
    oneOf?: JSONSchema[];
}

export type SchemaType = "object" | "array" | "number" | "integer" | "string" | "boolean" | "null";

export interface Schema {
    /** Type of fake value */
    type?: SchemaType | SchemaType[];

    /** Serves as a hint at the contents and format of the string.  */
    format?: string;

    /** Specifies regular expression that fake must match.  */
    pattern?: string;

    /**
     * Restricts the string to a minimum length
     */
    minLength?: number;

    /**
     * Restricts the string to a maximum length
     */
    maxLength?: number;

    /** Describes the type and format of array items. */
    items?: Schema;

    /** Specifies a list of required properties. */
    required?: string[];

    /** Specify possible value for this schema. */
    enum?: any[];

    /** Specifies the minimum range of possible values. */
    minimum?: number;

    /** Specifies the maximum range of possible values. */
    maximum?: number;

    /** Specifies whether minimum value is exluded. Default is false. */
    exclusiveMinimum?: number | boolean;

    /** ** Specifies whether maximum value is exluded. Default is false. */
    exclusiveMaximum?: number | boolean;

    /**
     * Specifies the properties of an object
     */
    properties?: { [name: string]: Schema };

    /**
     * The additionalProperties keyword is used to control the handling of extra stuff,
     * that is, properties whose names are not listed in the properties keyword or match
     * any of the regular expressions in the patternProperties keyword. By default, any
     * additional properties are allowed.
     */
    additionalProperties?: boolean | Schema | undefined;

    /** Valid against one of the specified schemas. */
    anyOf?: Schema[];

    /** Valid against all of the specified schemas. */
    allOf?: Schema[];

    /** Valid against exactly one of the specified schemas. */
    oneOf?: Schema[];

    /** Specifies the minimum number of items an array must have. */
    minItems?: number;

    /** Specifies the maximum number of items an array must have. */
    maxItems?: number;

    /** Specifies whether items in array should have random order. The default is false */
    shuffleItems?: boolean;

    /** Specifies whether all items in an array must be unique. */
    uniqueItems?: boolean;
}
