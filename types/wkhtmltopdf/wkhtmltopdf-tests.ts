import wkhtmltopdf = require("wkhtmltopdf");

// URL
// $ExpectType Readable
wkhtmltopdf("http://google.com/", { pageSize: "Letter" });

// HTML
// $ExpectType Readable
wkhtmltopdf("<h1>Test</h1><p>Hello world</p>");

// output to a file directly
// $ExpectType Readable
wkhtmltopdf("http://apple.com/", { output: "out.pdf" });

// Optional callback
// $ExpectType Readable
wkhtmltopdf("http://google.com/", { pageSize: "Letter" }, (err: Error | null, stream?: NodeJS.ReadWriteStream) => {});

// Repeatable options
// $ExpectType Readable
wkhtmltopdf("http://google.com/", {
    allow: ["path1", "path2"],
    customHeader: [
        ["name1", "value1"],
        ["name2", "value2"],
    ],
});

// Ignore warning strings
// $ExpectType Readable
wkhtmltopdf("http://apple.com/", {
    output: "out.pdf",
    ignore: ["QFont::setPixelSize: Pixel size <= 0 (0)"],
});

// RegExp also acceptable
// $ExpectType Readable
wkhtmltopdf("http://apple.com/", {
    output: "out.pdf",
    ignore: [/QFont::setPixelSize/],
});

// Test debug types
// $ExpectType Readable
wkhtmltopdf("http://apple.com/", {
    debug: true,
});

// $ExpectType Readable
wkhtmltopdf("http://apple.com/", {
    output: "test.pdf",
    debug: (data: Buffer) => {
        const dataString = data.toString();
        const stageMatch = dataString.match(/\((\d*)\/(\d*)\)/);
        const percentMatch = dataString.match(/(\d*)%/);
        if (stageMatch) {
            console.log(`Pdf at ${stageMatch[1]} out of ${stageMatch[2]} stages`);
        } else if (percentMatch) {
            console.log(`Pdf at ${percentMatch[1]}%`);
        }
    },
});

wkhtmltopdf.shell; // $ExpectType string
wkhtmltopdf.command; // $ExpectType string

// Footer and header spacing type
// $ExpectType Readable
wkhtmltopdf("http://apple.com/", {
    headerSpacing: 0,
    footerSpacing: 0,
});
