import deref = require("json-schema-deref-local");

interface Schema {
    description?: string;
    title?: string;
    type?: string;
    definitions?: Record<string, unknown>;
    properties?: Record<string, unknown>;
    $ref?: string;
}

const schema: Schema = {
    description: "Just some JSON schema.",
    title: "Basic Widget",
    type: "object",
    definitions: {
        id: {
            description: "unique identifier",
            type: "string",
            minLength: 1,
            readOnly: true,
        },
    },
    properties: {
        id: {
            $ref: "#/definitions/id",
        },
    },
};

const fullSchema = deref(schema);
fullSchema; // $ExpectType Schema

const localValue = deref.prototype.getRefPathValue(schema, "#/definitions/id");
localValue; // $ExpectType any

// @ts-expect-error -- only exposed on `deref.prototype`, not `deref` itself
deref.getRefPathValue(schema, "#/definitions/id");
