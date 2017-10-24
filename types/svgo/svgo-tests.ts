import SVGO = require("svgo");

// Various constructor options.
let svgo = new SVGO();
svgo = new SVGO({});
svgo = new SVGO({ plugins: [] });
svgo = new SVGO({ plugins: [{ cleanupAttrs: {} }] });
svgo = new SVGO({ datauri: "datauri:" });
svgo = new SVGO({ floatPrecision: 2 });
svgo = new SVGO({ full: true });
svgo = new SVGO({
    plugins: [],
    datauri: "datauri:",
    floatPrecision: 2,
    full: true
});

// SVGO instance methods
svgo.optimize(`<?xml version="1.0" encoding="utf-8"?><svg></svg>`, result => {
    if (result.error) {
        result.error;
    } else {
        result.data;
    }
});
