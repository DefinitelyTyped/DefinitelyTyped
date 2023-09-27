export default {
    name: "Extended",
    uri: "http://extended",
    prefix: "ext",
    types: [
        {
            name: "ExtendedComplex",
            superClass: ["props:ComplexCount"],
            properties: [
                {
                    name: "numCount",
                    type: "Integer",
                    isAttr: true,
                    redefines: "props:Complex#count",
                },
            ],
        },
        {
            name: "Root",
            superClass: ["props:Root"],
            properties: [
                {
                    name: "elements",
                    type: "Base",
                    isMany: true,
                },
            ],
        },
        {
            name: "Base",
        },
        {
            name: "CABSBase",
        },
    ],
};
