import tags = require('language-tags');

const tag = tags('en'); // $ExpectType Tag
tags.check('nl'); // $ExpectType boolean
tags.subtags('de'); // $ExpectType Subtag[]
tags.subtags(['de', 'fr']); // $ExpectType Subtag[]
tags.filter(['it', 'jp']); // $ExpectType string[]

// dtslint doesn’t work for these, as the order of actual types is random
tags.search('English').forEach(t => {
    const tag = t as tags.Tag;
    const subtag = t as tags.Subtag;
});
tags.search(/Klingon/).forEach(t => {
    const tag = t as tags.Tag;
    const subtag = t as tags.Subtag;
});
tags.search('Latin', true).forEach(t => {
    const tag = t as tags.Tag;
    const subtag = t as tags.Subtag;
});
tags.search(/Greek/, true).forEach(t => {
    const tag = t as tags.Tag;
    const subtag = t as tags.Subtag;
});

tags.languages('af'); // $ExpectType Subtag[]
tags.language('ar'); // $ExpectType Subtag | null
tags.region('ne'); // $ExpectType Subtag | null
tags.type('zh', 'macrolanguage'); // $ExpectType Subtag | null
tags.date(); // $ExpectType string

tag.preferred(); // $ExpectType Tag
tag.type(); // $ExpectType "grandfathered" | "redundant" | "tag"
tag.subtags(); // $ExpectType Subtag[]
const subtag = tag.language(); // $ExpectType Subtag | undefined
tag.region(); // $ExpectType Subtag | undefined
tag.script(); // $ExpectType Subtag | undefined
tag.find('us'); // $ExpectType Subtag | undefined
tag.valid(); // $ExpectType boolean
tag.format(); // $ExpectType string
tag.deprecated(); // $ExpectType string | null
tag.added(); // $ExpectType string
tag.descriptions(); // $ExpectType string[]

subtag!.type(); // $ExpectType "language" | "extlang" | "script" | "region" | "variant"
subtag!.descriptions(); // $ExpectType string[]
subtag!.preferred(); // $ExpectType Subtag | null
subtag!.script(); // $ExpectType Subtag | null
subtag!.scope(); // $ExpectType string | null
subtag!.deprecated(); // $ExpectType string | null
subtag!.added(); // $ExpectType string
subtag!.comments(); // $ExpectType string[]
subtag!.format(); // $ExpectType string
