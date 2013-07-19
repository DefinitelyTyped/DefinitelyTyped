/// <reference path="intl.d.ts" />

// Collator

alert(Intl.Collator.supportedLocalesOf(["ban", "id-u-co-pinyin", "de-ID"], { localeMatcher: "lookup" }).join(", "));
// → "id-u-co-pinyin, de-ID"

// in German, ä sorts with a
alert(new Intl.Collator("de").compare("ä", "z").toString());
// → a negative value

// in Swedish, ä sorts after z
alert(new Intl.Collator("sv").compare("ä", "z").toString());
// → a positive value

// in German, ä has a as the base letter
alert(new Intl.Collator("de", { sensitivity: "base" }).compare("ä", "a").toString());
// → 0

// in Swedish, ä and a are separate base letters
alert(new Intl.Collator("sv", { sensitivity: "base" }).compare("ä", "a").toString());
// → a positive value

var a = ["Offenbach", "Österreich", "Odenwald"];
var collator = new Intl.Collator("de-u-co-phonebk");
a.sort(collator.compare);
alert(a.join(", "));
// → "Odenwald, Österreich, Offenbach"


// DateTimeFormat

alert(Intl.DateTimeFormat.supportedLocalesOf(["ban", "id-u-co-pinyin", "de-ID"], { localeMatcher: "lookup" }).join(", "));
// → "id-u-co-pinyin, de-ID"

// toLocaleString without arguments depends on the implementation,
// the default locale, and the default time zone
alert(new Intl.DateTimeFormat().format(new Date(Date.UTC(2012, 11, 20, 3, 0, 0))));
// → "12/19/2012" if run in en-US locale with time zone America/Los_Angeles

alert(new Intl.DateTimeFormat("sr-RS", { weekday: "long", year: "numeric", month: "long", day: "numeric" }).format(new Date()));
// → "недеља, 7. април 2013."

alert([new Date(2012, 08), new Date(2012, 11), new Date(2012, 03)].map(new Intl.DateTimeFormat("pt-BR", { year: "numeric", month: "long" }).format).join("; "));
// → "setembro de 2012; dezembro de 2012; abril de 2012"


// NumberFormat

alert(Intl.NumberFormat.supportedLocalesOf(["ban", "id-u-co-pinyin", "de-ID"], { localeMatcher: "lookup" }).join(", "));
// → "id-u-co-pinyin, de-ID"

alert(new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB" }).format(654321.987));
// → "654 321,99 руб."

alert([123456.789, 987654.321, 456789.123].map(new Intl.NumberFormat("es-ES").format).join("; "));
// → "123.456,789; 987.654,321; 456.789,123"

// German uses comma as decimal separator and period for thousands
alert(new Intl.NumberFormat("de-DE").format(123456.789));
// → 123.456,789

// Arabic in most Arabic speaking countries uses real Arabic digits
alert(new Intl.NumberFormat("ar-EG").format(123456.789));
// → ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
alert(new Intl.NumberFormat("en-IN").format(123456.789));
// → 1,23,456.789

// the nu extension key requests a numbering system, e.g. Chinese decimal
alert(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(123456.789));
// → 一二三,四五六.七八九

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
alert(new Intl.NumberFormat(["ban", "id"]).format(123456.789));
// → 123.456,789

// request a currency format
alert(new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(123456.789));
// → 123.456,79 €

// the Japanese yen doesn't use a minor unit
alert(new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(123456.789))
// → ￥123,457

// limit to three significant digits
alert(new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(123456.789));
// → 1,23,000