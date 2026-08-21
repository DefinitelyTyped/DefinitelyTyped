export default {
    name: "Base",
    uri: "http://base",
    prefix: "b",
    types: [
        {
            name: "Root",
            properties: [
                {
                    name: "own",
                    type: "Own",
                },
                {
                    name: "ownAttr",
                    type: "String",
                    isAttr: true,
                },
                {
                    name: "generic",
                    type: "Element",
                },
                {
                    name: "genericCollection",
                    type: "Element",
                    isMany: true,
                },
            ],
        },
        {
            name: "Own",
            properties: [
                {
                    name: "count",
                    type: "Integer",
                    isAttr: true,
                },
            ],
        },
    ],
};
