// This test file is meant to only test that we get sensible values
// when Rangy is loaded as a module. That is, both calls to the
// libraries functions **and** the types declared should be accessible
// to the symbol used with the import.

// We purposely import with a name other than "rangy" because using
// the name "rangy" for the import could mask issues.
import * as moo from "./index";

// Functions are accessible through `rangy`.
moo.getSelection();

// Types are also accessible through `rangy`.
function foo(a:moo.RangyRange):void {}
