import * as driftless from "driftless";

driftless.setDriftlessTimeout(() => "OK", 10); // $ExpectType number
const interval = driftless.setDriftlessInterval((a) => "OK" + a, 100, "foo"); // $ExpectType number
driftless.clearDriftless(interval); // $ExpectType void
