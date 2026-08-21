import highlight = require("fuzzysearch-highlight");

// $ExpectType string | null
highlight("tqb", "The quick brown fox");

// $ExpectType string | null
highlight("quick", "The quick brown fox", { tag: "em" });
