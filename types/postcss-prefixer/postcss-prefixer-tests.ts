import postcss from "postcss";
import prefixer = require("postcss-prefixer");

postcss([prefixer]);
postcss([prefixer()]);
prefixer({});
prefixer({ prefix: "test-" });
prefixer({ prefix: "test-", ignore: ["foo", /bar/] });
