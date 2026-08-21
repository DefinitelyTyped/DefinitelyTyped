import sectionMatter = require("section-matter");

// Test with string input
const result = sectionMatter("Content before\n\n---one\ntitle: One\n---\nSection one");
const content: string = result.content;
const sections: sectionMatter.Section[] = result.sections;

// Test accessing section properties
for (const section of result.sections) {
    const key: string = section.key;
    const data: string = section.data;
    const sectionContent: string = section.content;
}

// Test with Buffer input
const bufferResult = sectionMatter(Buffer.from("---\nfront matter\n---\ncontent"));

// Test with object input
const objectResult = sectionMatter({
    content: "Content\n\n---one\ndata\n---\nSection",
    customProp: "preserved",
});

// Test with options
const withOptions = sectionMatter("~~~one\ndata\n~~~\nSection", {
    section_delimiter: "~~~",
});

// Test with parse function in options
const withParse = sectionMatter("---one\ndata\n---\nSection", {
    parse: (section, sections) => {
        section.key = "prefix-" + section.key;
    },
});

// Test with parse function as second argument
const withParseFunc = sectionMatter("---one\ndata\n---\nSection", (section, sections) => {
    section.data = section.data.toUpperCase();
});

// Test with both options
const withBoth = sectionMatter("~~~one\ndata\n~~~\nSection", {
    section_delimiter: "~~~",
    parse: (section) => {
        section.key = section.key.toUpperCase();
    },
});
