import * as isClass from "is-class";

class F {}
function G() {}

isClass(F); // $ExpectType boolean
isClass(G); // $ExpectType boolean
