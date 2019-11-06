import SVGO from "svgo";

// Various constructor options.
let svgo = new SVGO();
svgo = new SVGO({});
svgo = new SVGO({ plugins: [] });
svgo = new SVGO({ plugins: [{ cleanupAttrs: {} }] });
svgo = new SVGO({ datauri: "base64" });
svgo = new SVGO({ floatPrecision: 2 });
svgo = new SVGO({ full: true });

// SVGO options
const options: SVGO.Options = {
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
};

svgo = new SVGO(options);

// SVGO instance methods
svgo
  .optimize(`<?xml version="1.0" encoding="utf-8"?><svg></svg>`, {
    path: 'filepath',
  })
  .then(
    result => {
      result.data;
      result.info.height;
      result.info.width;
      result.path;
    },
    error => error,
  );
