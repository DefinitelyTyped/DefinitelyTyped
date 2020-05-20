import getSlug = require("speakingurl");

let slug: string;

// Examples from https://github.com/pid/speakingurl#usage

slug = getSlug("Schöner Titel läßt grüßen!? Bel été !");
slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", '*');
slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
    separator: '_'
});
slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
    uric: true
});
slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
    uricNoSlash: true
});
slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
    mark: true
});
slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
    truncate: 20
});
slug = getSlug("Schöner Titel läßt grüßen!? Bel été !", {
    maintainCase: true
});
slug = getSlug("Äpfel & Birnen!", {
    lang: 'de'
});
slug = getSlug("မြန်မာ သာဓက", {
    lang: 'my'
});
slug = getSlug('މިއަދަކީ ހދ ރީތި ދވހކވ', {
    lang: 'dv'
});
slug = getSlug("Apple & Pear!", {
    lang: 'en' // lang: "en" is default, just to clarify
});
slug = getSlug('Foo & Bar * Baz', {
    custom: {
        '&': ' doo '
    },
    uric: true
});
slug = getSlug('Foo ♥ Bar');
slug = getSlug('Foo & Bar | (Baz) * Doo', {
    custom: {
        '*': 'Boo'
    },
    mark: true
});
slug = getSlug('Foo and Bar or Baz', {
    custom: {
        and: 'und',
        or: ''
    }
});
slug = getSlug('[Knöpfe]', {
    custom: [
        '[',
        ']'
    ]
});
slug = getSlug('NEXUS4 only $299');
slug = getSlug('NEXUS4 only €299', {
    maintainCase: true
});
slug = getSlug('Don\'t drink and drive', {
    titleCase: true
});
slug = getSlug('Don\'t drink and drive', {
    titleCase: ['and']
});
slug = getSlug('Foo & Bar ♥ Foo < Bar', {
    lang: false
});
slug = getSlug('Foo & Bar ♥ Foo < Bar', {
    symbols: false
});
slug = getSlug('ä♥ä', {
    lang: 'tr',
    symbols: false
});

const options = {
    titleCase: [
        "a", "an", "and", "as", "at", "but",
        "by", "en", "for", "if", "in", "nor",
        "of", "on", "or", "per", "the", "to", "vs"
    ]
};

const mySlug = getSlug.createSlug(options);
slug = mySlug('welcome to the jungle');
