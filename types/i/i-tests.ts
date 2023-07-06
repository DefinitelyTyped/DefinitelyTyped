/// <reference types="i/globals" />

import i = require('i');

// $ExpectType Iinterface
const inflect = i(true);

// $ExpectType Inflections
inflect.inflections;

inflect.inflections.humans;
inflect.inflections.plurals;
inflect.inflections.singulars;
inflect.inflections.uncountables;

// $ExpectType void
inflect.inflections.plural("rule", "replacement");

// $ExpectType void
inflect.inflections.plural(/rule/, "replacement");

// $ExpectType void
inflect.inflections.singular("rule", "replacement");

// $ExpectType void
inflect.inflections.singular(/rule/, "replacement");

// $ExpectType void
inflect.inflections.irregular("singular", "plural");

// $ExpectType void
inflect.inflections.irregular("singular", "plural", true);

// $ExpectType void
inflect.inflections.human("rule", "replacement");

// $ExpectType void
inflect.inflections.human(/rule/, "replacement");

// $ExpectType void
inflect.inflections.uncountable("words");

// $ExpectType void
inflect.inflections.uncountable(["words"]);

// $ExpectType void
inflect.inflections.clear();

// $ExpectType void
inflect.inflections.clear('plurals');

// $ExpectType void
inflect.inflections.clear('singulars');

// $ExpectType void
inflect.inflections.clear('uncountables');

// $ExpectType void
inflect.inflections.clear('humans');

// $ExpectType Inflections
inflect.inflections.default();

// $ExpectType string
"test".camelize;

// $ExpectType string
"test".underscore;

// $ExpectType string
"test".dasherize;

// $ExpectType string
"test".demodulize;

// $ExpectType string
"test".foreign_key;

// $ExpectType string
"test".ordinalize;

// $ExpectType boolean
"test".uncountability;

// $ExpectType string
"test".pluralize;

// $ExpectType string
"test".singularize;

// $ExpectType string
"test".humanize;

// $ExpectType string
"test".titleize;

// $ExpectType string
"test".tableize;

// $ExpectType string
"test".classify;

// $ExpectType string
inflect.camelize("test");

// $ExpectType string
inflect.camelize("test", false);

// $ExpectType string
inflect.underscore("test");

// $ExpectType string
inflect.dasherize("test");

// $ExpectType string
inflect.demodulize("test");

// $ExpectType string
inflect.foreign_key("test");

// $ExpectType string
inflect.foreign_key("test", false);

// $ExpectType string
inflect.ordinalize(123);

// $ExpectType boolean
inflect.uncountability("test");

// $ExpectType string
inflect.pluralize("test");

// $ExpectType string
inflect.singularize("test");

// $ExpectType string
inflect.humanize("test");

// $ExpectType string
inflect.titleize("test");

// $ExpectType string
inflect.classify("test");

inflect.inflect((inflections) => {
    // $ExpectType Inflections
    inflections;
});
