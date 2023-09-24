import { localize, start, stop } from "pseudo-localization";

// $ExpectType string
const localized = localize("foo");

// $ExpectType string
const localizedWithOptions = localize("bar", { strategy: "bidi" });

// $ExpectType void
start();

// $ExpectType void
start({ strategy: "bidi" });

// $ExpectType void
start({ strategy: "accented" });

// $ExpectType void
start({
    strategy: "bidi",
    blacklistedNodeNames: ["one", "two"],
});

// $ExpectType void
stop();
