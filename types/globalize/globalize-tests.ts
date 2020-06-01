let en = new Globalize("en");
en = new Globalize(new Cldr("en"));

Globalize( "de-Latn-CH" ).cldr.main( "test-bundle" )
Globalize( new Cldr("de-Latn-CH") ).cldr.main( "test-bundle" )

let locale = Globalize.locale();
locale = Globalize.locale("en");
locale = Globalize.locale(new Cldr("en"));

let strOutput: string;

let currencyFormatter = en.currencyFormatter("USD", { style: "symbol" });
strOutput = currencyFormatter(20);

currencyFormatter = Globalize.currencyFormatter("USD");
strOutput = currencyFormatter(20);

strOutput = en.formatCurrency(20, "USD", { style: "code" });
strOutput = Globalize.formatCurrency(20, "USD");

Globalize.loadTimeZone({});

let dateOutput: Date;

let dateFormatter = en.dateFormatter({
    skeleton: "",
    date: "full",
    time: "full",
    datetime: "full",
    raw: "",
    timeZone: ""
});
strOutput = dateFormatter(new Date());

dateFormatter = Globalize.dateFormatter({});
strOutput = dateFormatter(new Date());

let dateParser = en.dateParser({
    skeleton: "",
    date: "full",
    time: "full",
    datetime: "full",
    raw: "",
    timeZone: ""
});
dateOutput = dateParser("");

dateParser = Globalize.dateParser({});
dateOutput = dateParser("");

let dateToPartsFormatter = Globalize.dateToPartsFormatter({});
let datePartsOutput: Globalize.DateFormatPart[];
datePartsOutput = dateToPartsFormatter(new Date());
datePartsOutput = Globalize.formatDateToParts(new Date(), {});

strOutput = en.formatDate(new Date(), {});
strOutput = Globalize.formatDate(new Date(), {});
dateOutput = en.parseDate("", {});
dateOutput = Globalize.parseDate("", {});

Globalize.loadMessages({});

let messageFormatter = en.messageFormatter("foo.bar");
strOutput = messageFormatter("blah");

messageFormatter = Globalize.messageFormatter(["foo.bar", "baz.blah"]);
strOutput = messageFormatter(["ham", "spam"]);

strOutput = en.formatMessage(["foo.bar", "baz.blah"], {});
strOutput = Globalize.formatMessage("ham.spam");

let numberFormatter = en.numberFormatter();
strOutput = numberFormatter(20);

numberFormatter = Globalize.numberFormatter({ style: "decimal" });
strOutput = numberFormatter(20.2);

numberFormatter = Globalize.numberFormatter({ compact: "short" });
strOutput = numberFormatter(27588910);

let numberParser = en.numberParser();
let numOutput = numberParser("20");

numberParser = Globalize.numberParser({ style: "percent" });
numOutput = numberParser("20.4");

strOutput = en.formatNumber(20);
strOutput = Globalize.formatNumber(20, { style: "decimal" });

numOutput = en.parseNumber("20");
numOutput = Globalize.parseNumber("20", { style: "percent" });

let pluralGenerator = en.pluralGenerator();
strOutput = pluralGenerator(20);

pluralGenerator = Globalize.pluralGenerator({ type: "cardinal" });
strOutput = pluralGenerator(20);

strOutput = en.plural(20);
strOutput = Globalize.plural(20, { type: "ordinal" });

let relativeTimeFormatter = en.relativeTimeFormatter("week");
strOutput = relativeTimeFormatter(20);

relativeTimeFormatter = Globalize.relativeTimeFormatter("day", { form: "short" });
strOutput = relativeTimeFormatter(20);

strOutput = en.formatRelativeTime(20, "day");
strOutput = Globalize.formatRelativeTime(20, "week");

let unitFormatter = en.unitFormatter("day");
strOutput = unitFormatter(10);

unitFormatter = Globalize.unitFormatter("week", { form: "narrow" });
strOutput = unitFormatter(10);

strOutput = en.formatUnit(10, "day");
strOutput = Globalize.formatUnit(10, "week", { numberFormatter: { style: "decimal" } });
