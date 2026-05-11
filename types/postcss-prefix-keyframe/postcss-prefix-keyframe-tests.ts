import postcss from "postcss";
import prefixKeyframe = require("postcss-prefix-keyframe");

postcss([prefixKeyframe]);
postcss([prefixKeyframe()]);
prefixKeyframe({});
prefixKeyframe({ prefix: "test-" });
