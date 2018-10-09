import FuzzySearch from "fuzzy-search";

new FuzzySearch([1, 2, 3]);

new FuzzySearch([{ a: 1 }, { a: 2}, { a: 3 }], ["a"]);

new FuzzySearch([{ a: 1 }, { a: 2}, { a: 3 }], ["a"], {});

new FuzzySearch(
    [{ a: 1 }, { a: 2}, { a: 3 }],
    ["a"],
    { caseSensitive: true }
);

new FuzzySearch(
    [{ a: 1 }, { a: 2}, { a: 3 }],
    ["a"],
    { sort: true }
);

new FuzzySearch(
    [{ a: 1 }, { a: 2}, { a: 3 }],
    ["a"],
    { caseSensitive: true, sort: true }
);
