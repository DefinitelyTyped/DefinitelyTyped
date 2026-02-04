import postcss = require("postcss");
import failOnWarn from "postcss-fail-on-warn";

postcss([failOnWarn]);
postcss([failOnWarn()]);
