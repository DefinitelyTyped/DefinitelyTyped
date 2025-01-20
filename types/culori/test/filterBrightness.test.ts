import { filterBrightness } from "culori";

// $ExpectType Hsl
filterBrightness(1)({ mode: "hsl", h: 60, s: 1, l: 0.5, alpha: 0.25 });
