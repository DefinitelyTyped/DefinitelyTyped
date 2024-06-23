// Generated with https://github.com/erikburt/javascript-time-ago-type-gen

import { Duration, QuantifyType } from "..";

declare const locale: Locale;

interface Locale {
    locale: "de";
    long: Duration;
    narrow: Duration;
    short: Duration;
    "long-time": Duration;
    quantify: (n: number) => keyof QuantifyType;
}

export = locale;
