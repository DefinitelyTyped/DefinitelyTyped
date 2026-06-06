import * as nightwind from "nightwind/helper";

nightwind.init(); // $ExpectType string
nightwind.beforeTransition(); // $ExpectType void
nightwind.toggle(); // $ExpectType void
nightwind.enable(true); // $ExpectType void
nightwind.enable(false); // $ExpectType void
// @ts-expect-error
nightwind.enable(undefined); // $ExpectType void
nightwind.checkNightMode(); // $ExpectType boolean
nightwind.watchNightMode(); // $ExpectType void
nightwind.addNightModeSelector(); // $ExpectType void
nightwind.addNightTransitions(); // $ExpectType void
nightwind.initNightwind(); // $ExpectType void
nightwind.toggleNightMode(); // $ExpectType void
