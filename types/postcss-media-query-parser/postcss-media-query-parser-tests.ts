import mediaParser from "postcss-media-query-parser";

const mediaQueryString = "(max-width: 100px), not print";
const result = mediaParser(mediaQueryString);

// $ExpectType "media-query-list"
result.type;

// $ExpectType string
result.value;

// $ExpectType string
result.after;

// $ExpectType string
result.before;

// $ExpectType number
result.sourceIndex;

if (result.nodes) {
    for (const node of result.nodes) {
        node.type;
    }
}

result.walk("", child => {
    child.parent.type;
});
result.walk(child => {
    child.parent.type;
});
