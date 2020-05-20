import gulpJasmine = require("gulp-jasmine");
import jasmine = require("jasmine");

const dummyReporter: jasmine.CustomReporter = {};

gulpJasmine(); // $ExpectType ReadWriteStream
gulpJasmine({});
gulpJasmine({
    verbose: true,
    includeStackTrace: true,
    reporter: dummyReporter,
    timeout: 1000,
    errorOnFail: false,
    config: {}
});
gulpJasmine({ reporter: [dummyReporter, dummyReporter] });
const readonlyDummyReporters: ReadonlyArray<jasmine.CustomReporter> = [
    dummyReporter, dummyReporter
];
gulpJasmine({ reporter: readonlyDummyReporters });
