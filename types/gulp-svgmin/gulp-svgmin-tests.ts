import svgmin = require("gulp-svgmin");
import { basename, extname } from "path";

// From tests

svgmin({ plugins: [] });
svgmin({ plugins: [{ removeDoctype: false }] });
svgmin({ plugins: [{ removeDoctype: false }, { removeComments: false }] });

// From examples given in README

// $ExpectType Transform
svgmin();

// $ExpectType Transform
svgmin({
    plugins: [{
        removeDoctype: false
    }, {
        removeComments: false
    }, {
        cleanupNumericValues: {
            floatPrecision: 2
        }
    }, {
        convertColors: {
            names2hex: false,
            rgb2hex: false
        }
    }]
});

// $ExpectType Transform
svgmin({
    js2svg: {
        pretty: true
    }
});

// $ExpectType Transform
svgmin(function getOptions(file) {
    const prefix = basename(file.relative, extname(file.relative));
    return {
        plugins: [{
            cleanupIDs: {
                prefix: prefix + '-',
                minify: true
            }
        }]
    };
});
