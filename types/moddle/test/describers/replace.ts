export default {
    name: "Replace",
    uri: "http://replace",
    prefix: "r",
    types: [
        {
            name: "Base",
            properties: [
                {
                    name: "id",
                    type: "Integer",
                    isId: true,
                },
                {
                    name: "name",
                    type: "String",
                },
            ],
        },
        {
            name: "Extension",
            superClass: ["Base"],
            properties: [
                {
                    name: "value",
                    type: "String",
                },
                {
                    name: "id",
                    type: "Integer",
                    replaces: "Base#id",
                    isId: true,
                },
            ],
        },
    ],
};
