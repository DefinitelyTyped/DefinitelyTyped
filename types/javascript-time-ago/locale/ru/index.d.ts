// Generated with https://github.com/erikburt/javascript-time-ago-type-gen

import { Duration, QuantifyType } from "..";

declare const locale: Locale;

interface Locale {
    locale: "ru";
    long: Duration;
    narrow: Duration;
    short: Duration;
    "long-convenient": Duration;
    "long-time": Duration;
    "short-convenient": Duration;
    "short-time": Duration;
    tiny: Duration;
    quantify: (n: number) => keyof QuantifyType;
}

export = locale;
