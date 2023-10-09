import postcss = require("postcss");
import pixrem = require("pixrem");

postcss([pixrem]);
postcss([pixrem()]);
postcss([pixrem({ browsers: "> 1%, not dead" })]);
postcss([pixrem({ browsers: ["> 1%", "not dead"] as const })]);
postcss([
    pixrem({
        rootValue: 14,
        replace: true,
        atrules: true,
        html: true,
        browsers: "> 1%, not dead",
        unitPrecision: 2,
    }),
]);
