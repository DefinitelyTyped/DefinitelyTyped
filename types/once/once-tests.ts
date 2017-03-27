

import once from "once";

once(() => 3);
once(() => 3)();
let s = once(() => ({foo: 1}))();
s.foo;

once.proto();

once(() => 3).called && true;
once(() => ({foo: 1})).value.foo;
