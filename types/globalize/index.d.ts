// Type definitions for Globalize
// Project: https://github.com/jquery/globalize
// Definitions by: Grégoire Castre <https://github.com/gcastre>
//                 Aram Taieb <https://github.com/afromogli>
//                 Bryan Forbes <https://github.com/bryanforbes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Cldr from "cldrjs";
import * as Globalize from "./dist/globalize";

import "./dist/globalize/message";
import "./dist/globalize/number";
import "./dist/globalize/plural";
import "./dist/globalize/currency";
import "./dist/globalize/date";
import "./dist/globalize/relative-time";
import "./dist/globalize/unit";

export as namespace Globalize;
export = Globalize;
