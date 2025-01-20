export default {
    name: "Custom",
    uri: "http://custom",
    prefix: "c",
    types: [
        {
            name: "CustomRoot",
            superClass: [
                "Base",
            ],
            extends: [
                "b:Root",
            ],
            properties: [
                {
                    name: "customAttr",
                    type: "Integer",
                    isAttr: true,
                },
                {
                    name: "generic",
                    type: "CustomGeneric",
                    redefines: "b:Root#generic",
                },
            ],
        },
        {
            name: "Base",
            properties: [
                {
                    name: "customBaseAttr",
                    type: "Integer",
                    isAttr: true,
                },
            ],
        },
        {
            name: "CustomGeneric",
            superClass: [
                "Element",
            ],
            properties: [
                {
                    name: "count",
                    type: "Integer",
                    isAttr: true,
                },
            ],
        },
        {
            name: "Property",
            superClass: [
                "Element",
            ],
            properties: [
                {
                    name: "key",
                    type: "String",
                    isAttr: true,
                },
                {
                    name: "value",
                    type: "String",
                    isAttr: true,
                },
            ],
        },
    ],
};
