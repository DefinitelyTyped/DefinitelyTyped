import SVGO = require("svgo");

// Various constructor options.
let svgo = new SVGO();
svgo = new SVGO({});
svgo = new SVGO({ plugins: [] });
svgo = new SVGO({ plugins: [{ cleanupAttrs: {} }] });
svgo = new SVGO({ datauri: "base64" });
svgo = new SVGO({ floatPrecision: 2 });
svgo = new SVGO({ full: true });
svgo = new SVGO({
    plugins: [],
    datauri: "enc",
    floatPrecision: 2,
    full: true,
    js2svg: {
        indent: 2,
        pretty: true,
    },
    svg2js: {
        trim: true,
    }
});

// SVGO instance methods
svgo.optimize(`<?xml version="1.0" encoding="utf-8"?><svg></svg>`, { path: "filepath" })
    .then(result => result.data, error => error);
