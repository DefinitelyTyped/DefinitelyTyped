import * as Inflector from "inflected";

Inflector.pluralize("post");
Inflector.pluralize("ley", "es");

Inflector.singularize("posts");
Inflector.singularize("leyes", "es");

Inflector.camelize("foo_bar");
Inflector.camelize("foo_bar", false);

Inflector.underscore("FooBar"); // => 'foo_bar'

Inflector.humanize("author_id");
Inflector.humanize("author_id", {});
Inflector.humanize("author_id", { capitalize: false });

Inflector.titleize("man from the boondocks");

Inflector.tableize("RawScaledScorer");

Inflector.classify("posts");

Inflector.dasherize("puni_puni");

Inflector.foreignKey("Message");
Inflector.foreignKey("Message", false);

Inflector.ordinal(1);

Inflector.ordinalize(1);

Inflector.inflections("en", ({ acronym, clear, human, irregular, plural, singular, uncountable }) => {
    acronym("API");

    clear();
    clear("all");

    human("col_rpted_bugs", "Reported bugs");
    human(/_cnt$/i, "_count");

    irregular("octopus", "octopi");

    plural(/^(ox)$/i, "$1$2en");
    plural("oxen");

    singular(/^(ox)en/i, "$1");
    singular("ox");

    uncountable("equipment");
    uncountable("equipment", "snow");
});
Inflector.inflections(({}) => {});
Inflector.inflections("en");
Inflector.inflections();

Inflector.transliterate("Ærøskøbing");

Inflector.transliterations("de", ({ approximate }) => {
    approximate("ü", "ue");
});
Inflector.transliterations(() => {});
Inflector.transliterations("de");
Inflector.transliterations();

Inflector.parameterize("Donald E. Knuth");
Inflector.parameterize("Donald E. Knuth", {});
Inflector.parameterize("Donald E. Knuth", { preserveCase: true });
Inflector.parameterize("Donald E. Knuth", { separator: "+" });
Inflector.parameterize("Donald E. Knuth", { preserveCase: true, separator: "+" });

Inflector.constantify("bankAccount");

Inflector.capitalize("foo");
Inflector.capitalize(null);
Inflector.capitalize();
