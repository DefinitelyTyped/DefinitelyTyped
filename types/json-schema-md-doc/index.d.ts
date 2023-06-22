// Type definitions for json-schema-md-doc 1.0
// Project: https://brianwendt.github.io/json-schema-md-doc
// Definitions by: Alexander Prentki <https://github.com/DJAlPee>
//                 Brian Wendt <https://github.com/brianwendt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = JSONSchemaMarkdown;

declare class JSONSchemaMarkdown {
    /**
     * Shorthand method to generate markdown from JSON Schema.
     * This is not the preferred method as errors will be more difficult to expose.
     *
     * @param schema JS object or JSON string.
     * @returns generated markdown
     */
    static doc(schema: any): string;
    /**
     * Object containing the schema
     */
    schema: any;
    /**
     * Resulting markdown
     */
    markdown: string;
    /**
     * Array of errors during load or markdown generation.
     */
    errors: string[];
    /**
     * The character(s) used for indenting the markdown.
     */
    indentChar: string;
    /**
     * The character(s) used for dividing path elements.
     */
    pathDivider: string;
    /**
     * The character(s) used for object notation.
     */
    objectNotation: string;
    /**
     * Text to be included in the documentation's footer.
     * Defaults to optional module attribution.
     */
    footer: string;
    /**
     * Load the schema
     *
     * @param schema JS object or JSON string.
     * @returns
     */
    load(schema: any): JSONSchemaMarkdown;
    /**
     * Process loaded schema and generate the markdown
     *
     * @returns
     */
    generate(): string;
    /**
     * This is the primary method that traverses the schema.
     * The method is strictly structural and should not need to be modified for customization.
     *
     * @param name The JSON property name
     * @param data The JS data for the schema
     * @param level Indentation level
     * @param path String describing the path of the property
     */
    generateChildren(name: string, data: any, level: number, path: string): void;
    /**
     * This is the shared template for all other types.
     * You may want to override this method to change the order of information in your documentation.
     *
     * @param name The JSON property name
     * @param data The JS data for the schema
     * @param level Indentation level
     * @param path String describing the path of the property
     */
    typeGeneric(name: string, data: any, level: number, path: string): void;
    /**
     *
     * @param name The JSON property name
     * @param data The JS data for the schema
     * @param level Indentation level
     * @param path String describing the path of the property
     */
    typeArray(name: string, data: any, level: number, path: string): void;
    /**
     *
     * @param name The JSON property name
     * @param data The JS data for the schema
     * @param level Indentation level
     * @param path String describing the path of the property
     */
    typeBoolean(name: string, data: any, level: number, path: string): void;
    /**
     *
     * @param name The JSON property name
     * @param data The JS data for the schema
     * @param level Indentation level
     * @param path String describing the path of the property
     */
    typeNull(name: string, data: any, level: number, path: string): void;
    /**
     *
     * @param name The JSON property name
     * @param data The JS data for the schema
     * @param level Indentation level
     * @param path String describing the path of the property
     */
    typeNumber(name: string, data: any, level: number, path: string): void;
    /**
     *
     * @param name The JSON property name
     * @param data The JS data for the schema
     * @param level Indentation level
     * @param path String describing the path of the property
     */
    typeString(name: string, data: any, level: number, path: string): void;
    /**
     *
     * @param name The JSON property name
     * @param data The JS data for the schema
     * @param level Indentation level
     * @param path String describing the path of the property
     */
    typeObject(name: string, data: any, level: number, path: string): void;
    /**
     * This method is a catch for schema types that aren't recognized.
     * You may want to treat anything resolving to this method as an error.
     *
     * @param name The JSON property name
     * @param data The JS data for the schema
     * @param level Indentation level
     * @param path String describing the path of the property
     */
    typeUnknown(name: string, data: any, level: number, path: string): void;
    /**
     * Markdown writing methods
     */
    /**
     * @see https://json-schema.org/understanding-json-schema/reference/array.html#tuple-validation
     * @param bool
     * @param level Indentation level
     */
    writeAdditionalItems(bool: boolean, level: number): void;
    /**
     * @see https://json-schema.org/understanding-json-schema/reference/object.html#property-names
     * @param bool
     * @param level Indentation level
     *
     */
    writeAdditionalProperties(bool: boolean, level: number): void;
    /**
     * Format and write the schema's $comment
     *
     * @see https://json-schema.org/understanding-json-schema/reference/generic.html#comments
     * @param comment The comment
     * @param level Indentation level
     *
     */
    writeComment(comment: string, level: number): void;
    /**
     * Format and write the *.description
     *
     * @see https://json-schema.org/understanding-json-schema/reference/generic.html
     * @param value The default value
     * @param level Indentation level
     *
     */
    writeDefault(value: any, level: number): void;
    /**
     * Format and write the *.description
     *
     * @see https://json-schema.org/understanding-json-schema/reference/generic.html
     * @param description The description may include markdown
     * @param level Indentation level
     *
     */
    writeDescription(description: string, level: number): void;
    /**
     * Write *.enum as a list.
     *
     * @param list Enumerated values
     * @param level Indentation level
     *
     */
    writeEnum(list: any[], level: number): void;
    /**
     * @see https://json-schema.org/understanding-json-schema/reference/string.html#format
     * @param format Format of string
     * @param level Indentation level
     *
     */
    writeFormat(format: string, level: number): void;
    /**
     * Write *.examples as a list
     *
     * @see https://json-schema.org/understanding-json-schema/reference/generic.html
     * @param list Examples
     * @param level Indentation level
     *
     */
    writeExamples(list: any[], level: number): void;
    /**
     * @param header The header to be written
     * @param level Header level [H1, H2, H3, H4, H5]
     *
     */
    writeHeader(header: string, level?: number): void;
    /**
     * Write the $id for reference purposes
     *
     * @see https://json-schema.org/understanding-json-schema/structuring.html#the-id-property
     * @param id the schema's $id
     * @param level Indentation level
     *
     */
    writeId(id: string, level: number): void;
    /**
     * Write array as markdown list
     *
     * @param list Mixed array to list
     * @param level Indentation level
     *
     */
    publicwriteList(list: any[], level?: number): void;
    /**
     * Write notation for inclusive minimum and maximum.
     *
     * @param min Inclusive minimum
     * @param max Inclusive maximum
     *
     */
    publicwriteMinMax(min: number, max: number): void;
    /**
     * Write notation for exclusive minimum and maximum.
     *
     * @param min Exclusive minimum
     * @param max Exclusive maximum
     *
     */
    writeMinMaxExclusive(min: number, max: number): void;
    /**
     * @see https://json-schema.org/understanding-json-schema/reference/numeric.html#multiples
     * @param number Regular Expression that string must match.
     * @param level Indentation level
     *
     */
    writeMultipleOf(number: number, level: number): void;
    /**
     * @see https://json-schema.org/understanding-json-schema/reference/string.html#regular-expressions
     * @param pattern Regular Expression that string must match.
     * @param level Indentation level
     *
     */
    writePattern(pattern: string, level: number): void;
    /**
     * Writes the features of object.propertyNames
     *
     * @see https://json-schema.org/understanding-json-schema/reference/object.html#property-names
     * @param data Schema object
     * @param level Indentation level
     *
     */
    writePropertyNames(data: string, level: number): void;
    /**
     * @param prop Property name
     * @param level Indentation level
     * @param path String describing the path of the property
     * @param required Property is required (True or False [default])
     *
     */
    writePropertyName(prop: string, level: number, path: string, required?: boolean): void;
    /**
     * Writes a link to the referenced schema
     *
     * @see https://json-schema.org/understanding-json-schema/structuring.html#reuse
     * @param ref $ID, path, or URI
     * @param level Indentation level
     *
     */
    writeRef(ref: string, level: number): void;
    /**
     * Writes the path for reference purposes
     *
     * @param level Indentation level
     * @param path String describing the path of the property
     *
     */
    writePath(level: number, path: string): void;
    /**
     * Writes the declared schema URI
     *
     * @see https://json-schema.org/understanding-json-schema/basics.html#declaring-a-json-schema
     * @param uri
     * @param level Indentation level
     *
     */
    writeSchema(uri: string, level: number): void;
    /**
     * Writes a section name
     *
     * @param name
     * @param level Indentation level
     *
     */
    writeSectionName(name: string, level?: number): void;
    /**
     * Writes a definition term
     *
     * @param term
     * @param level Indentation level
     *
     */
    writeTerm(term: string, level: number): void;
    /**
     * @see https://json-schema.org/understanding-json-schema/basics.html#the-type-keyword
     * @param type
     * @param level Indentation level
     *
     */
    writeType(type: string, level: number): void;
    /**
     * @see https://json-schema.org/understanding-json-schema/reference/array.html#uniqueness
     * @param bool
     * @param level Indentation level
     *
     */
    writeUniqueItems(bool: boolean, level: number): void;

    /*
     * Below are utility methods.
     */

    /**
     * Handles finding correct method for different schema types.
     *
     * @param type The schema type/
     * @returns
     */
    getTypeMethod(type: string): JSONSchemaMarkdown["typeUnknown"];
    /**
     * Writes indentation at the given level.
     *
     * @param level Indentation level
     * @param indentChar Character to use for indentation. Defaults to this.indentChar
     * @param listChar Character to use for list
     *
     */
    indent(level: number, indentChar?: string, listChar?: string): void;
    /**
     * Converts boolean to string "true" or "false"
     *
     * @param bool
     * @returns
     *
     */
    valueBool(bool: boolean): string;
    /**
     * Convert mixed values into markdown notation.
     *
     * @param value
     * @returns
     *
     */
    valueFormat(value: any): string;
    /**
     * Utility method for writing line to the markdown.
     * Handles line break logic.
     *
     * @param text
     * @param level Indentation level
     *
     */
    writeLine(text?: string, level?: number): void;
    /**
     * Prepare $ref as a link.
     *
     * @param ref The schema $ref
     * @returns
     */
    refLink(ref: string): string;
    /**
     * Make a string into a slug string.
     *
     * @param string
     * @returns
     */
    slugify(string: string): string;
    /**
     * Check if value is empty
     *
     * @param value
     * @returns
     *
     */
    empty(value: any): boolean;
    /**
     * Check if value is NOT empty
     *
     * @param value
     * @returns
     *
     */
    notEmpty(value: any): boolean;
    /**
     * Append error to errors array
     *
     * @param error Error message
     *
     */
    error(error: string): void;
    /**
     * Escape string for MD link
     *
     * @param value
     */
    escapeLink(value: string): string;
}
