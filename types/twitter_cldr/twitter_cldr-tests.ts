import * as twitterCldr from "twitter_cldr";

// $ExpectType TwitterCldr
const TwitterCldr = twitterCldr.load("th");

// $ExpectType string
TwitterCldr.Settings.locale();

TwitterCldr.set_data({});
TwitterCldr.get_data();

// $ExpectType string
new TwitterCldr.DateTimeFormatter().format(new Date(), {});
// $ExpectType string
new TwitterCldr.TimespanFormatter().format(1);
// $ExpectType string
new TwitterCldr.DecimalFormatter().format(1);
// $ExpectType string
new TwitterCldr.ShortDecimalFormatter().format(1);
// $ExpectType string
new TwitterCldr.LongDecimalFormatter().format(1);
// $ExpectType string
new TwitterCldr.CurrencyFormatter().format(1);
// $ExpectType string
new TwitterCldr.PercentFormatter().format(1);

// $ExpectType string
new TwitterCldr.RBNF().format(1, "SpelloutRules", "spellout-numbering");
// @ts-expect-error
new TwitterCldr.RBNF().format(1, "???", "spellout-numbering");

// $ExpectType PluralRule
TwitterCldr.PluralRules.rule_for(1);
// $ExpectType PluralRule[]
TwitterCldr.PluralRules.all();

// $ExpectType string[]
TwitterCldr.Currencies.currency_codes();
// $ExpectType Currency
TwitterCldr.Currencies.for_code("CNY");

// $ExpectType BidiString
const bidiString = TwitterCldr.Bidi.from_string("abc", { direction: "RTL" });
// @ts-expect-error
TwitterCldr.Bidi.from_string("abc", { direction: "???" });
// $ExpectType BidiString
bidiString.reorder_visually();
// $ExpectType string
bidiString.toString();

// $ExpectType boolean
TwitterCldr.PostalCodes.is_valid("US", "88888");
// $ExpectType RegExp
TwitterCldr.PostalCodes.regex_for_territory("GB");
// $ExpectType string[]
TwitterCldr.PostalCodes.territories();

// $ExpectType string
TwitterCldr.PhoneCodes.code_for_territory("EG");
// $ExpectType string[]
TwitterCldr.PhoneCodes.territories();

// $ExpectType string[]
TwitterCldr.TerritoriesContainment.children("001");
// $ExpectType string[]
TwitterCldr.TerritoriesContainment.parents("015");
// $ExpectType boolean
TwitterCldr.TerritoriesContainment.contains("001", "015");

// $ExpectType UnicodeRegex
const r = TwitterCldr.UnicodeRegex.compile(String.raw`\p{L}`, "g");
// $ExpectType string[]
r.match("x");
// $ExpectType RegExp
r.to_regexp();

// $ExpectType string[]
new TwitterCldr.BreakIterator("en").each_sentence("One. Two.");
