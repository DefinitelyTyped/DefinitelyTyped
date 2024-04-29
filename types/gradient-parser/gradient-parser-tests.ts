import gradient = require("gradient-parser");

let ast: gradient.GradientNode[] = gradient.parse("linear-gradient(30deg, #000, transparent)");
gradient.stringify(ast); // $ExpectType string

ast = [
    {
        type: "linear-gradient",
        orientation: { type: "angular", value: "30" },
        colorStops: [
            { type: "hex", value: "000" },
            { type: "literal", value: "transparent" },
        ],
    },
];

ast = [
    {
        type: "linear-gradient",
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "linear-gradient",
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "linear-gradient",
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "linear-gradient",
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "linear-gradient",
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "linear-gradient",
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "linear-gradient",
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "linear-gradient",
        colorStops: [
            {
                type: "literal",
                value: "blue",
                length: {
                    type: "px",
                    value: "10.3",
                },
            },
            {
                type: "literal",
                value: "transparent",
            },
        ],
    },
];
ast = [
    {
        type: "linear-gradient",
        colorStops: [
            {
                type: "literal",
                value: "blue",
                length: {
                    type: "em",
                    value: "10.3",
                },
            },
            {
                type: "literal",
                value: "transparent",
            },
        ],
    },
];
ast = [
    {
        type: "linear-gradient",
        colorStops: [
            {
                type: "literal",
                value: "blue",
                length: {
                    type: "%",
                    value: "10.3",
                },
            },
            {
                type: "literal",
                value: "transparent",
            },
        ],
    },
];
ast = [
    {
        type: "linear-gradient",
        orientation: {
            type: "angular",
            value: "-145",
        },
        colorStops: [
            {
                type: "literal",
                value: "blue",
            },
            {
                type: "literal",
                value: "green",
            },
        ],
    },
];
ast = [
    {
        type: "linear-gradient",
        orientation: {
            type: "directional",
            value: "left top",
        },
        colorStops: [
            {
                type: "literal",
                value: "blue",
            },
            {
                type: "literal",
                value: "green",
            },
        ],
    },
];
ast = [
    {
        type: "linear-gradient",
        orientation: {
            type: "angular",
            value: "12",
        },
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
            {
                type: "literal",
                value: "green",
            },
        ],
    },
];
ast = [
    {
        type: "linear-gradient",
        orientation: {
            type: "angular",
            value: "12",
        },
        colorStops: [
            {
                type: "hex",
                value: "c2c2c2",
            },
            {
                type: "literal",
                value: "blue",
            },
            {
                type: "literal",
                value: "green",
            },
        ],
    },
];
ast = [
    {
        type: "linear-gradient",
        orientation: {
            type: "angular",
            value: "12",
        },
        colorStops: [
            {
                type: "rgb",
                value: ["243", "226", "195"],
            },
            {
                type: "literal",
                value: "blue",
            },
            {
                type: "literal",
                value: "green",
            },
        ],
    },
];
ast = [
    {
        type: "linear-gradient",
        orientation: {
            type: "angular",
            value: "12",
        },
        colorStops: [
            {
                type: "rgba",
                value: ["243", "226", "195"],
            },
            {
                type: "literal",
                value: "blue",
            },
            {
                type: "literal",
                value: "green",
            },
        ],
    },
];
ast = [
    {
        type: "linear-gradient",
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "radial-gradient",
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "repeating-linear-gradient",
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "repeating-radial-gradient",
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "radial-gradient",
        orientation: [
            {
                type: "shape",
                value: "ellipse",
                style: {
                    type: "extent-keyword",
                    value: "farthest-corner",
                },
            },
        ],
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "radial-gradient",
        orientation: [
            {
                type: "shape",
                value: "ellipse",
                style: {
                    type: "extent-keyword",
                    value: "cover",
                },
            },
        ],
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "radial-gradient",
        orientation: [
            {
                type: "shape",
                value: "circle",
                style: {
                    type: "extent-keyword",
                    value: "cover",
                },
            },
        ],
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "radial-gradient",
        orientation: [
            {
                type: "default-radial",
                at: {
                    type: "position",
                    value: {
                        x: {
                            type: "position-keyword",
                            value: "center",
                        },
                        y: {
                            type: "position-keyword",
                            value: "bottom",
                        },
                    },
                },
            },
            {
                type: "shape",
                value: "ellipse",
                style: {
                    type: "extent-keyword",
                    value: "cover",
                },
            },
        ],
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "radial-gradient",
        orientation: [
            {
                type: "shape",
                value: "circle",
                at: {
                    type: "position",
                    value: {
                        x: {
                            type: "px",
                            value: "87.23",
                        },
                        y: {
                            type: "px",
                            value: "-58.3",
                        },
                    },
                },
            },
        ],
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "radial-gradient",
        orientation: [
            {
                type: "extent-keyword",
                value: "farthest-side",
            },
        ],
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "radial-gradient",
        orientation: [
            {
                type: "extent-keyword",
                value: "farthest-corner",
            },
        ],
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
ast = [
    {
        type: "radial-gradient",
        orientation: [
            {
                type: "extent-keyword",
                value: "farthest-corner",
                at: {
                    type: "position",
                    value: {
                        x: {
                            type: "px",
                            value: "87.23",
                        },
                        y: {
                            type: "px",
                            value: "-58.3",
                        },
                    },
                },
            },
        ],
        colorStops: [
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
            {
                type: "literal",
                value: "red",
            },
            {
                type: "literal",
                value: "blue",
            },
        ],
    },
];
