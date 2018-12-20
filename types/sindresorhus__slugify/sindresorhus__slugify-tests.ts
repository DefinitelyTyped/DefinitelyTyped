import slugify = require("@sindresorhus/slugify");

slugify("I ♥ Dogs");

slugify("  Déjà Vu!  ");

slugify("fooBar 123 $#%");

slugify("I ♥ 🦄 & 🐶", { customReplacements: [["🐶", "dog"]] });

slugify("BAR and baz");

slugify("BAR and baz", { separator: "_" });

slugify("Déjà Vu!");

slugify("Déjà Vu!", { lowercase: false });

slugify("fooBar");

slugify("fooBar", { decamelize: false });

slugify("Foo@unicorn", {
    customReplacements: [["@", "at"]]
});

slugify("foo@unicorn", {
    customReplacements: [["@", " at "]]
});
