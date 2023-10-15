export default {
    name: "Cars",
    uri: "http://cars",
    prefix: "c",
    types: [
        {
            name: "Car",
            properties: [
                {
                    name: "name",
                    type: "String",
                    isAttr: true,
                    default: "No Name",
                },
            ],
            meta: {
                owners: [
                    "the pope",
                    "donald trump",
                ],
            },
        },
    ],
};
