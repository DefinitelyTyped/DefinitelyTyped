import Gettext = require("gettext.js");

const instance = Gettext();

{
    const messages = {
        language: "fr",
        "plural-forms": "nplurals=2; plural=n>1;",
    } satisfies Gettext.JsonDataMessages;

    // $ExpectType Gettext
    instance
        .setMessages("domain", "fr", messages)
        .setMessages("domain", "fr", messages, "nplurals=2; plural=n>1;");
}

{
    const json = {
        "": {
            language: "fr",
            "plural-forms": "nplurals=2; plural=n>1;",
        },
        Welcome: "Bienvenue",
        "There is %1 apple": [
            "Il y a %1 pomme",
            "Il y a %1 pommes",
        ],
    } satisfies Gettext.JsonData;

    // $ExpectType Gettext
    instance
        .loadJSON(json)
        .loadJSON(json, "messages");
}

{
    // $ExpectType Gettext
    instance.setLocale("fr");
}

{
    // $ExpectType string
    instance.getLocale();
}

{
    // $ExpectType Gettext | string
    instance.textdomain();
    // $ExpectType Gettext | string
    instance.textdomain("domain");
}

{
    // $ExpectType string
    instance.gettext("message id");
    // $ExpectType string
    instance.gettext("message id", "arg 1", "arg 2");
}

{
    // $ExpectType string
    instance.ngettext("There is %1 apple", "There are %1 apples", 0);
    // $ExpectType string
    instance.ngettext("There is %1 apple", "There are %1 apples", 0, "arg 1", "arg 2");
}

{
    // $ExpectType string
    instance.pgettext("There is %1 apple", "There are %1 apples");
    // $ExpectType string
    instance.pgettext("There is %1 apple", "There are %1 apples", "arg 1", "arg 2");
}

declare const nullableStr: string | null | undefined;
declare const nullableNum: number | null | undefined;
{
    // $ExpectType string
    instance.dcnpgettext(nullableStr, nullableStr, "There are %1 apples", nullableStr, nullableNum);
    // $ExpectType string
    instance.dcnpgettext(nullableStr, nullableStr, "There are %1 apples", nullableStr, nullableNum, "arg 1", "arg 2");
}

{
    // $ExpectType string
    instance.strfmt("There is %1 apple");
    // $ExpectType string
    instance.strfmt("There is %1 apple", "arg 1", "arg 2");
}

{
    // $ExpectType string[]
    instance.expand_locale("fr");
}
