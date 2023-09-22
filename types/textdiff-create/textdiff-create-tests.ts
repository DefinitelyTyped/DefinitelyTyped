import textDiffCreate = require("textdiff-create");
import type { Change } from "textdiff-create";

// $ExpectType Change[]
const result = textDiffCreate("one", "two");

// $ExpectType Change
const firstChange = result[0];

switch (firstChange[0]) {
    case -1: {
        // $ExpectType number
        firstChange[1];
        break;
    }
    case 0: {
        // $ExpectType number
        firstChange[1];
        break;
    }
    case 1: {
        // $ExpectType string
        firstChange[1];
        break;
    }
}
