import isbn = require("node-isbn");

isbn.resolve("0735619670", (err, book) => {
    if (err) {
        err; // $ExpectType Error
    } else {
        book; // $ExpectType Book
    }
});

isbn.resolve("0735619670", { timeout: 15000 }, (err, book) => {
    if (err) {
        err; // $ExpectType Error
    } else {
        book; // $ExpectType Book
    }
});

isbn.resolve("0735619670")
    .then(book => {
        book; // $ExpectType Book
    })
    .catch(err => {
        err; // $ExpectType any
    });

isbn.provider(["openlibrary", "google"])
    .resolve("0735619670")
    .then(book => {
        book; // $ExpectType Book
    })
    .catch(err => {
        err; // $ExpectType any
    });

isbn.provider(["google"])
    .resolve("0735619670")
    .then(book => {
        book; // $ExpectType Book
    })
    .catch(err => {
        err; // $ExpectType any
    });

isbn.provider([isbn.PROVIDER_NAMES.GOOGLE])
    .resolve("0735619670")
    .then(book => {
        book; // $ExpectType Book
    })
    .catch(err => {
        err; // $ExpectType any
    });

const input = process.argv.slice(2)[0] || "0735619670";

isbn.resolve(input, (err, book) => {
    if (err) {
        err; // $ExpectType Error
    } else {
        book; // $ExpectType Book
    }
});

process.env.ISBNDB_API_KEY = "ISBNDB_API_KEY";
isbn.PROVIDER_NAMES.GOOGLE; // $ExpectType "google"
isbn.PROVIDER_NAMES.ISBNDB; // $ExpectType "isbndb"
isbn.PROVIDER_NAMES.OPENLIBRARY; // $ExpectType "openlibrary"
isbn.PROVIDER_NAMES.WORLDCAT; // $ExpectType "worldcat"
