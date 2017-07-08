import * as json2md from 'json2md';

declare function describe(desc: string, f: () => void): void;
declare function it(desc: string, f: () => void): void;

const exampleString: string = "example string";
const exampleStringArray: string[] = ["A", "B"];

describe("Default elements", () => {
    it("Headings", () => {
        json2md([
            {
                h1: exampleString
            },
            {
                h2: exampleString
            },
            {
                h3: exampleString
            },
            {
                h4: exampleString
            },
            {
                h5: exampleString
            },
            {
                h6: exampleString
            }
        ]);
    });

    it("Paragraphs", () => {
        json2md([{
            p: exampleString
        }]);

        json2md([{
            p: exampleStringArray
        }]);
    });

    it("Blockquote", () => {
        json2md([{
            blockquote: exampleString
        }]);

        json2md([{
            blockquote: exampleStringArray
        }]);
    });

    it("Image", () => {
        json2md([{
            img: {
                title: exampleString,
                source: exampleString
            }
        }]);

        json2md([{
            img: [
                {
                    title: exampleString,
                    source: exampleString
                }
            ]
        }]);
    });

    it("Unordered list", () => {
        json2md([
            {
                ul: exampleStringArray
            }
        ]);
    });

    it("Ordered list", () => {
        json2md([
            {
                ol: exampleStringArray
            }
        ]);
    });

    it("Code block element", () => {
        json2md([
            {
                code: {
                    language: "js",
                    content: exampleString
                }
            }
        ]);
    });

    it("Table", () => {
        json2md([
            {
                table: {
                    headers: exampleStringArray,
                    rows: [
                        {
                            A: exampleString,
                            B: exampleString
                        }
                    ]
                }
            }
        ]);

        json2md([
            {
                table: {
                    headers: exampleStringArray,
                    rows: [
                        exampleStringArray
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
            customConverter: exampleString
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
