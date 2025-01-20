export default {
    name: "Properties",
    uri: "http://properties",
    prefix: "props",
    types: [
        {
            name: "Complex",
            properties: [
                {
                    name: "id",
                    type: "String",
                    isAttr: true,
                    isId: true,
                },
            ],
        },
        {
            name: "ComplexAttrs",
            superClass: ["Complex"],
            properties: [
                {
                    name: "attrs",
                    type: "Attributes",
                    serialize: "xsi:type",
                },
            ],
        },
        {
            name: "ComplexAttrsCol",
            superClass: ["Complex"],
            properties: [
                {
                    name: "attrs",
                    type: "Attributes",
                    isMany: true,
                    serialize: "xsi:type",
                },
            ],
        },
        {
            name: "ComplexCount",
            superClass: ["Complex"],
            properties: [
                {
                    name: "count",
                    type: "Integer",
                    isAttr: true,
                },
            ],
        },
        {
            name: "ComplexNesting",
            superClass: ["Complex"],
            properties: [
                {
                    name: "nested",
                    type: "Complex",
                    isMany: true,
                },
            ],
        },
        {
            name: "SimpleBody",
            superClass: ["Base"],
            properties: [
                {
                    name: "body",
                    type: "String",
                    isBody: true,
                },
            ],
        },
        {
            name: "SimpleBodyProperties",
            superClass: ["Base"],
            properties: [
                {
                    name: "intValue",
                    type: "Integer",
                },
                {
                    name: "boolValue",
                    type: "Boolean",
                },
                {
                    name: "str",
                    type: "String",
                    isMany: true,
                },
            ],
        },
        {
            name: "Base",
        },
        {
            name: "BaseWithId",
            superClass: ["Base"],
            properties: [
                {
                    name: "id",
                    type: "String",
                    isAttr: true,
                    isId: true,
                },
            ],
        },
        {
            name: "BaseWithNumericId",
            superClass: ["BaseWithId"],
            properties: [
                {
                    name: "idNumeric",
                    type: "Integer",
                    isAttr: true,
                    redefines: "BaseWithId#id",
                    isId: true,
                },
            ],
        },
        {
            name: "Attributes",
            superClass: ["BaseWithId"],
            properties: [
                {
                    name: "realValue",
                    type: "Real",
                    isAttr: true,
                },
                {
                    name: "integerValue",
                    type: "Integer",
                    isAttr: true,
                },
                {
                    name: "booleanValue",
                    type: "Boolean",
                    isAttr: true,
                },
                {
                    name: "defaultBooleanValue",
                    type: "Boolean",
                    isAttr: true,
                    default: true,
                },
            ],
        },
        {
            name: "SubAttributes",
            superClass: ["Attributes"],
        },
        {
            name: "Root",
            properties: [
                {
                    name: "any",
                    type: "Base",
                    isMany: true,
                },
            ],
        },
        {
            name: "Embedding",
            superClass: ["BaseWithId"],
            properties: [
                {
                    name: "embeddedComplex",
                    type: "Complex",
                },
            ],
        },
        {
            name: "ReferencingSingle",
            superClass: ["BaseWithId"],
            properties: [
                {
                    name: "referencedComplex",
                    type: "Complex",
                    isReference: true,
                    isAttr: true,
                },
            ],
        },
        {
            name: "ReferencingCollection",
            superClass: ["BaseWithId"],
            properties: [
                {
                    name: "references",
                    type: "Complex",
                    isReference: true,
                    isMany: true,
                },
            ],
        },
        {
            name: "ContainedCollection",
            superClass: ["BaseWithId"],
            properties: [
                {
                    name: "children",
                    type: "Complex",
                    isMany: true,
                },
            ],
        },
    ],
};
