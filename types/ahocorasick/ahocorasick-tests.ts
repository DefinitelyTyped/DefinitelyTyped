import AhoCorasick from "ahocorasick";

let ahoCorasick = new AhoCorasick(["keyword1"]);

let result: Array<[number, string[]]> = ahoCorasick.search(
    "should find keyword1 at position 19 and keyword2 at position 47.",
);
