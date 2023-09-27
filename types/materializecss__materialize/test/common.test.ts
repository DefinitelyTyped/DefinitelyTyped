import cash from "cash-dom";
import * as jQuery from "jquery";
import * as M from "materializecss__materialize";

// Test Component Initialization

// $ExpectType Autocomplete
M.Autocomplete.init(document.querySelector(".whatever")!);
// $ExpectType Autocomplete[]
M.Autocomplete.init(document.querySelectorAll(".whatever"));
// $ExpectType Autocomplete[]
M.Autocomplete.init(jQuery(".whatever"));
// $ExpectType Autocomplete[]
M.Autocomplete.init(cash(".whatever"));
