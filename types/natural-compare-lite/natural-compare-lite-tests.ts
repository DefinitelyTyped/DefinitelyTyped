// Type definitions for natural-compare-lite 1.4
// Project: https://github.com/litejs/natural-compare-lite
// Definitions by: Doniyor Aliyev <https://github.com/doniyor2109>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import compare = require("natural-compare-lite");

['a', 's', 'd'].sort(compare);

['a', 's', 'd'].sort(String.naturalCompare);
