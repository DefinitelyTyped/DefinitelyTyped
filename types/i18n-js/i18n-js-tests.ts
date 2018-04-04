/**
 * Test suite created by Yuya Tanaka <https://github.com/ypresto>
 * Created by using code examples from https://github.com/fnando/i18n-js
 */

import I18n = require("i18n-js");

I18n.defaultLocale = "pt-BR";
I18n.locale = "pt-BR";
I18n.currentLocale() === "pt-BR";

I18n.t("some.scoped.translation");
I18n.t("some.scoped.translation", { locale: "fr" });
I18n.t("hello", { name: "John Doe" });
I18n.t("some.missing.scope", { defaultValue: "A default message" });
I18n.t("noun", { defaultValue: "I'm a {{noun}}", noun: "Mac" });
I18n.t("some.missing.scope", { defaults: [{ scope: "some.existing.scope" }] });
I18n.t("some.missing.scope", { defaults: [{ message: "Some message" }] });

I18n.fallbacks = true;
I18n.locales.no = ["nb", "en"];
I18n.locales.no = "nb";
I18n.locales.no = locale => ["nb"];

I18n.missingBehaviour = "guess";
I18n.missingTranslationPrefix = "EE: ";
I18n.missingTranslation = (scope, options) => "foobar";
I18n.missingTranslation = (scope, options) => null;
I18n.missingTranslation = (scope, options) => undefined;

I18n.t("inbox.counting", { count: 10 });
I18n.pluralization["ru"] = count => {
    const key = count % 10 === 1 && count % 100 !== 11 ? "one"
        : [2, 3, 4].indexOf(count % 10) >= 0 && [12, 13, 14].indexOf(count % 100) < 0 ? "few"
            : count % 10 === 0 || [5, 6, 7, 8, 9].indexOf(count % 10) >= 0 || [11, 12, 13, 14].indexOf(count % 100) >= 0 ? "many"
                : "other";
    return [key];
};

const options = { scope: "activerecord.attributes.user" };
I18n.t("name", options);
I18n.t(["greetings", "hello"]);

I18n.l("currency", 1990.99);
I18n.l("number", 1990.99);
I18n.l("percentage", 123.45);

I18n.toNumber(1000);
I18n.toCurrency(1000);
I18n.toPercentage(100);

I18n.toNumber(1000, { precision: 0 });
I18n.toNumber(1000, { delimiter: ".", separator: "," });
I18n.toNumber(1000, { delimiter: ".", precision: 0 });

I18n.toCurrency(1000, { precision: 0 });

I18n.toHumanSize(1234);

I18n.l("date.formats.short", "2009-09-18");
I18n.l("time.formats.short", "2009-09-18 23:12:43");
I18n.l("time.formats.short", "2009-11-09T18:10:34");
I18n.l("time.formats.short", "2009-11-09T18:10:34Z");
I18n.l("date.formats.short", 1251862029000);
I18n.l("date.formats.short", "09/18/2009");
I18n.l("date.formats.short", (new Date()));

I18n.l("date.formats.ordinal_day", "2009-09-18", { day: "18th" });

I18n.strftime(new Date(), "%d/%m/%Y");

const point_in_number = 1000;
I18n.t("point", { count: point_in_number, formatted_number: I18n.toNumber(point_in_number) });

I18n.translations = {};
I18n.translations["en"] = {
  message: "Some special message for you"
};
I18n.translations["pt-BR"] = {
  message: "Uma mensagem especial para você"
};
