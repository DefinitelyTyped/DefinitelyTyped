/**
 * Dereferences local `$ref`s (i.e. refs starting with `#`, referring to
 * definitions within the same schema) to their resolved values.
 */
interface JsonSchemaDerefLocal {
    <T = any>(schema: T): T;
    /**
     * Exposed on `deref.prototype`, not on `deref` directly, despite what
     * the package README shows.
     */
    prototype: {
        /**
         * Gets the value at the given local ref path within `schema`.
         * @param refPath e.g. `#/definitions/id`
         */
        getRefPathValue(schema: any, refPath: string): any;
    };
}

declare const deref: JsonSchemaDerefLocal;
export = deref;
