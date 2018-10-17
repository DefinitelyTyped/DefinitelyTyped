import LinkifyIt = require("linkify-it");

// constructor formats
const linkifier = new LinkifyIt();
const withOptions = new LinkifyIt({ fuzzyLink: false });
const withSchema = new LinkifyIt(
    {
        "myCustom:": {
            validate: /23/
        },
        "other:": {
            validate: (text, pos, self) => 42
        },
        "git:": "http:"
    },
    {
        fuzzyIP: false,
        fuzzyLink: false
    }
);

// fluent interface
linkifier
    .add("git:", "http:")
    .set({ fuzzyIP: true })
    .tlds("onion", true)
    .test("https://github.com/DefinitelyTyped/DefinitelyTyped/");

// match
const matches = linkifier.match(
    "https://github.com/DefinitelyTyped/DefinitelyTyped/"
);
if (matches !== null) {
    matches.forEach(({ index, lastIndex, raw, schema, text, url }) => {});
}

// complex rule
linkifier.add("@", {
    validate: (text, pos, self) => {
        return 42;
    },
    normalize: match => {
        return "forty-two";
    }
});

// regexp rule
linkifier.add("custom:", {
    validate: /^\/\/\d+/
});
