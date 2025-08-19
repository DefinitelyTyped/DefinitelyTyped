import asciify from "asciify";

// $ExpectType void
asciify("Whoa", function(err, result) {
    // $ExpectType any
    err;
    // $ExpectType string
    result;
});

// $ExpectType void
asciify("Whoa", "3-d", function(err, result) {
    // $ExpectType any
    err;
    // $ExpectType string
    result;
});

// $ExpectType void
asciify("Whoa", { font: "3-d" }, function(err, result) {
    // $ExpectType any
    err;
    // $ExpectType string
    result;
});

// $ExpectType void
asciify.getFonts(function(err, fonts) {
    // $ExpectType Error
    err;
    // $ExpectType string[]
    fonts;
});
