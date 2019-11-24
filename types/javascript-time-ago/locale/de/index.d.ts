// Generated with https://github.com/erikburt/javascript-time-ago-type-gen

declare module "javascript-time-ago/locale/de" {
  var de: Locale;

  interface Locale {
    locale: "de";
    long: Duration;
    narrow: Duration;
    short: Duration;
    "long-time": Duration;
    quantify: (n: number) => keyof QuantifyType;
  }

  interface Duration {
    year: Tense;
    quarter: Tense;
    month: Tense;
    week: Tense;
    day: Tense;
    hour: Tense;
    minute: Tense;
    second: Tense;
  }

  interface Tense {
    previous?: QuantifyType | string;
    current?: QuantifyType | string;
    next?: QuantifyType | string;
    past?: QuantifyType | string;
    future?: QuantifyType | string;
  }

  interface QuantifyType {
    one: string;
    two?: string;
    few?: string;
    other: string;
  }

  export = de;
}
