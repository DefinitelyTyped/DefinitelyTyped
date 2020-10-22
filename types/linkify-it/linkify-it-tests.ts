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
        match.url = "forty-two";
    }
});

// complex rule
linkifier.add("skype:", {
    validate: (text, pos, self) => {
        return 42;
    },
    normalize: match => {
        match.url = "forty-two";
    }
});

// regexp rule
linkifier.add("custom:", {
    validate: /^\/\/\d+/
});

// Use example from documentation
linkifier.add('@', {
    validate: (text, pos, self) => {
        const tail = text.slice(pos);

        if (!self.re.twitter) {
            self.re.twitter =  new RegExp(
                `^([a-zA-Z0-9_]){1,15}(?!_)(?=$|${self.re.src_ZPCc})`
            );
        }

        if (self.re.twitter.test(tail)) {
            // Linkifier allows punctuation chars before prefix,
            // but we additionally disable `@` ("@@mention" is invalid)
            if (pos >= 2 && tail[pos - 2] === '@') {
                return false;
            }

            const match = tail.match(self.re.twitter);

            if (match) {
                return match[0].length;
            }

            return false;
        }
        return 0;
    },
    normalize: (match) => {
      match.url = `https://twitter.com/${match.url.replace(/^@/, '')}`;
    }
});
