import postcssClamp = require("postcss-clamp");
import postcss = require("postcss");

// Pass function directly
postcss().use(postcssClamp);
// Call function without config
postcss().use(postcssClamp());
// Call function with empty config
postcss().use(postcssClamp({}));
// Call function with all config options
postcss().use(
    postcssClamp({
        precalculate: true,
        preserve: true,
    }),
);
