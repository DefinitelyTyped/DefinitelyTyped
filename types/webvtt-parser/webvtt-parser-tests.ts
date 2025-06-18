import { WebVTTParser, WebVTTSerializer } from "webvtt-parser";

// @ts-expect-error
new WebVTTParser({ amp: "&" });

new WebVTTParser({ "&amp": "&", "&hello": "world" });

const parser = new WebVTTParser();

parser.parse("input");
const parsed = parser.parse("input", "metadata");

const child = parsed.cues[0].tree.children[0];
if (child.type === "object") {
    // $ExpectType "v" | "lang" | "c" | "i" | "b" | "u" | "ruby"
    child.name;

    // $ExpectType string
    child.value;

    // $ExpectType string[]
    child.classes;

    if (child.name === "ruby") {
        // $ExpectType TreeNode<TreeNodeObjectTagNameWithRt>[]
        child.children;

        const childChild = child.children[0];
        if (childChild.type === "object") {
            // $ExpectType "v" | "lang" | "c" | "i" | "b" | "u" | "ruby" | "rt"
            childChild.name;
        }
    } else {
        // $ExpectType TreeNode<TreeNodeObjectTagName>[]
        child.children;

        const childChild = child.children[0];
        if (childChild.type === "object") {
            // $ExpectType "v" | "lang" | "c" | "i" | "b" | "u" | "ruby"
            childChild.name;
        }
    }
} else if (child.type === "text") {
    // $ExpectType string
    child.value;
} else if (child.type === "timestamp") {
    // $ExpectType number
    child.value;
}

const serializer = new WebVTTSerializer();
serializer.serialize(parsed.cues);
serializer.serialize(parsed.cues, parsed.styles);
