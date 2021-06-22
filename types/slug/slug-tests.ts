import slug = require("slug");

slug("i ♥ unicode"); // $ExpectType string

slug("unicode ♥ is ☢"); // $ExpectType string

slug("i ♥ unicode", "_"); // $ExpectType string

slug.charmap["♥"] = "freaking love"; // change default charmap or use option {charmap:{…}} as 2. argument
slug("I ♥ UNICODE"); // $ExpectType string

slug("☏-Number", { lower: true }); // $ExpectType string

slug("i <3 unicode"); // $ExpectType string

// options is either object or replacement (sets options.replacement)
slug("string", {}); // $ExpectType string

slug("string", "replacement"); // $ExpectType string

slug.defaults.mode = "pretty";
slug.defaults.modes["rfc3986"] = {
    replacement: "-", // replace spaces with replacement
    symbols: true, // replace unicode symbols or not
    remove: null, // (optional) regex to remove characters
    lower: true, // result in lower case
    charmap: slug.charmap, // replace special characters
    multicharmap: slug.multicharmap, // replace multi-characters
};
slug.defaults.modes["pretty"] = {
    replacement: "-",
    symbols: true,
    remove: /[.]/g,
    lower: false,
    charmap: slug.charmap,
    multicharmap: slug.multicharmap,
};

slug.extend({ "☢": "radioactive" }); // $ExpectType void
slug("one 1 two 2 three 3", { remove: /[0-9]/g }); // $ExpectType string
