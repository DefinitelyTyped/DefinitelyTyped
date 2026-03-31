import Cldr = require("cldrjs");
import Globalize = require("./dist/globalize");

import "./dist/globalize/message";
import "./dist/globalize/number";
import "./dist/globalize/plural";
import "./dist/globalize/currency";
import "./dist/globalize/date";
import "./dist/globalize/relative-time";
import "./dist/globalize/unit";

export as namespace Globalize;
export = Globalize;
