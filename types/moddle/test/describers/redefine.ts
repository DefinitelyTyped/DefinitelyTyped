export default {
    name: "Redefine",
    uri: "http://redefine",
    prefix: "r",
    types: [
        {
            name: "Base",
            properties: [
                {
                    name: "id",
                    type: "Integer",
                },
                {
                    name: "name",
                    type: "String",
                },
            ],
        },
        {
            name: "Extension",
            superClass: [
                "Base",
            ],
            properties: [
                {
                    name: "value",
                    type: "String",
                },
                {
                    name: "id",
                    type: "Integer",
                    redefines: "Base#id",
                    isId: true,
                },
            ],
        },
    ],
};
