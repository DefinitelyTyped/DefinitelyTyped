import wkhtmltopdf = require("wkhtmltopdf");

// URL
wkhtmltopdf("http://google.com/", { pageSize: "Letter" }); // $ExpectType Readable

// HTML
wkhtmltopdf("<h1>Test</h1><p>Hello world</p>"); // $ExpectType Readable

// output to a file directly
wkhtmltopdf("http://apple.com/", { output: "out.pdf" }); // $ExpectType Readable

// Optional callback
wkhtmltopdf("http://google.com/", { pageSize: "Letter" }, (err: Error | null, stream?: NodeJS.ReadWriteStream) => {}); // $ExpectType Readable

// Repeatable options
wkhtmltopdf("http://google.com/", { // $ExpectType Readable
    allow: ["path1", "path2"],
    customHeader: [
        ["name1", "value1"],
        ["name2", "value2"],
    ],
});

// Ignore warning strings
wkhtmltopdf("http://apple.com/", { // $ExpectType Readable
    output: "out.pdf",
    ignore: ["QFont::setPixelSize: Pixel size <= 0 (0)"],
});

// RegExp also acceptable
wkhtmltopdf("http://apple.com/", { // $ExpectType Readable
    output: "out.pdf",
    ignore: [/QFont::setPixelSize/],
});

// Test debug types
wkhtmltopdf("http://apple.com/", { // $ExpectType Readable
    debug: true,
});

wkhtmltopdf("http://apple.com/", { // $ExpectType Readable
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
wkhtmltopdf("http://apple.com/", { // $ExpectType Readable
    headerSpacing: 0,
    footerSpacing: 0,
});
