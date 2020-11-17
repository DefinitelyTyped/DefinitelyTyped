import wkhtmltopdf from "wkhtmltopdf";

// URL
const x = wkhtmltopdf("http://google.com/", { pageSize: "Letter" }); // $ExpectType NodeJS.ReadWriteStream

// HTML
wkhtmltopdf("<h1>Test</h1><p>Hello world</p>"); // $ExpectType ReadWriteStream

// output to a file directly
wkhtmltopdf("http://apple.com/", { output: "out.pdf" }); // $ExpectType void

// Optional callback
wkhtmltopdf("http://google.com/", { pageSize: "Letter" }, (err, stream) => { }); // $ExpectType void

// Repeatable options
wkhtmltopdf("http://google.com/", { // $ExpectType NodeJS.ReadWriteStream
  allow : ["path1", "path2"],
  customHeader : [
    ["name1", "value1"],
    ["name2", "value2"]
  ]
});

// Ignore warning strings
wkhtmltopdf("http://apple.com/", { // $ExpectType void
  output: "out.pdf",
  ignore: ["QFont::setPixelSize: Pixel size <= 0 (0)"]
});

// RegExp also acceptable
wkhtmltopdf("http://apple.com/", { // $ExpectType void
  output: "out.pdf",
  ignore: [/QFont::setPixelSize/]
});

wkhtmltopdf.shell; // $ExpectType string
wkhtmltopdf.command; // $ExpectType string
