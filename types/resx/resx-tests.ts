import resx = require("resx");

// resx2js promise version
// $ExpectType Promise<ObjectOfStrings>
resx.resx2js("dummyResx");

// resx2js promise version with option
// $ExpectType Promise<ObjectOfStrings>
resx.resx2js("dummyResx", false);

// resx2js callback version
// $ExpectType void
resx.resx2js("dummyResx", (error: Error, result: resx.ObjectOfStrings) => {
    // $ExpectType Error
    error;
    // $ExpectType ObjectOfStrings
    result;
});

// resx2js callback version with option
// $ExpectType void
resx.resx2js("dummyResx", false, (error: Error, result: resx.ObjectOfStrings) => {
    // $ExpectType Error
    error;
    // $ExpectType ObjectOfStrings
    result;
});

// Test phrases object to use in the next tests
const dummyPhrases: resx.ObjectOfStrings = {
    "some phrase key": "some phrase value",
};

// Test options object to use in the next tests
const dummyOptions: resx.Js2ResxOptions = {
    indent: "    ",
    newline: "\n",
    pretty: true,
};

// js2resx promise version
// $ExpectType Promise<string>
resx.js2resx(dummyPhrases);

// js2resx promise version with options
// $ExpectType Promise<string>
resx.js2resx(dummyPhrases, dummyOptions);

// js2resx callback version
// $ExpectType void
resx.js2resx(dummyPhrases, (error: Error, result: string) => {
    // $ExpectType Error
    error;
    // $ExpectType string
    result;
});

// js2resx callback version with options
// $ExpectType void
resx.js2resx(dummyPhrases, dummyOptions, (error: Error, result: string) => {
    // $ExpectType Error
    error;
    // $ExpectType string
    result;
});
