import * as json2md from 'json2md';

declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

const EXAMPLE_STRING = "example string";
const EXAMPLE_STRING_ARRAY: string[] = ["A", "B"];

describe("Default elements", () => {
    it("Headings", () => {
        json2md([
            {
                h1: EXAMPLE_STRING
            },
            {
                h2: EXAMPLE_STRING
            },
            {
                h3: EXAMPLE_STRING
            },
            {
                h4: EXAMPLE_STRING
            },
            {
                h5: EXAMPLE_STRING
            },
            {
                h6: EXAMPLE_STRING
            }
        ]);
    });

    it("Paragraphs", () => {
        json2md([{
            p: EXAMPLE_STRING
        }]);

        json2md([{
            p: EXAMPLE_STRING_ARRAY
        }]);
    });

    it("Blockquote", () => {
        json2md([{
            blockquote: EXAMPLE_STRING
        }]);

        json2md([{
            blockquote: EXAMPLE_STRING_ARRAY
        }]);
    });

    it("Image", () => {
        json2md([{
            img: {
                title: EXAMPLE_STRING,
                source: EXAMPLE_STRING
            }
        }]);

        json2md([{
            img: [
                {
                    title: EXAMPLE_STRING,
                    source: EXAMPLE_STRING
                }
            ]
        }]);
    });

    it("Unordered list", () => {
        json2md([
            {
                ul: EXAMPLE_STRING_ARRAY
            }
        ]);
    });

    it("Ordered list", () => {
        json2md([
            {
                ol: EXAMPLE_STRING_ARRAY
            }
        ]);
    });

    it("Code block element", () => {
        json2md([
            {
                code: {
                    language: "js",
                    content: EXAMPLE_STRING
                }
            }
        ]);
    });

    it("Table", () => {
        json2md([
            {
                table: {
                    headers: EXAMPLE_STRING_ARRAY,
                    rows: [
                        {
                            A: EXAMPLE_STRING,
                            B: EXAMPLE_STRING
                        }
                    ]
                }
            }
        ]);

        json2md([
            {
                table: {
                    headers: EXAMPLE_STRING_ARRAY,
                    rows: [
                        EXAMPLE_STRING_ARRAY
                    ]
                }
            }
        ]);
    });
});

it("Custom types", () => {
    const customConverter: json2md.ConverterCallback<string> = (input, json2md) => {
        return `Hello ${input} world!`;
    };

    json2md.converters.customConverter = customConverter;

    json2md([
        {
            customConverter: EXAMPLE_STRING
        }
    ]);
});

it("Big example", () => {
    const md: string = json2md([
        {
            h1: "JSON To Markdown"
        },
        {
            blockquote: "A JSON to Markdown converter."
        },
        {
            img: [
                {
                    title: "Some image",
                    source: "https://example.com/some-image.png"
                },
                {
                    title: "Another image",
                    source: "https://example.com/some-image1.png"
                },
                {
                    title: "Yet another image",
                    source: "https://example.com/some-image2.png"
                }
            ]
        },
        {
            h2: "Features"
        },
        {
            ul: [
                "Easy to use",
                "You can programatically generate Markdown content",
                "..."
            ]
        },
        {
            h2: "How to contribute"
        },
        {
            ol: [
                "Fork the project",
                "Create your branch",
                "Raise a pull request"
            ]
        },
        {
            h2: "Code blocks"
        },
        {
            p: "Below you can see a code block example."
        },
        {
            code: {
                language: "js",
                content: [
                    "function sum (a, b) {",
                    "   return a + b;",
                    "}",
                    "sum(1, 2);"
                ]
            }
        }
    ]);
});

it("Use converter", () => {
    const blockquote: string = json2md.converters.blockquote(EXAMPLE_STRING, json2md);
    const img: string = json2md.converters.img({
        title: EXAMPLE_STRING,
        source: EXAMPLE_STRING
    }, json2md);
});
