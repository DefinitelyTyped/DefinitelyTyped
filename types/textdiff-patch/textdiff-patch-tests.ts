import textDiffPatch = require("textdiff-patch");
import type { Change } from "textdiff-patch";

// $ExpectType string
const result = textDiffPatch("one", [[1, "two"]]);
