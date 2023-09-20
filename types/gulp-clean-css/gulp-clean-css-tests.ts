import * as gulp from "gulp";
import * as gulpCleanCSS from "gulp-clean-css";

// gulp
gulp.src("/foo").pipe(gulpCleanCSS());

// default
gulpCleanCSS();

const pathToOutputDirectory = "path";

// with props
gulpCleanCSS({ sourceMap: true, rebaseTo: pathToOutputDirectory });

// with props - promise resolution
gulpCleanCSS({ returnPromise: true });

gulpCleanCSS({ returnPromise: false });

gulpCleanCSS({ returnPromise: true, rebaseTo: pathToOutputDirectory });

gulpCleanCSS({ returnPromise: true, sourceMap: true });

gulpCleanCSS({
    format: {
        semicolonAfterLastProperty: true,
    },
});

// callback
gulpCleanCSS({}, details => {
    console.log(details);
    console.log(details.errors);
    console.log(details.name);
    console.log(details.path);
    console.log(details.stats);
    console.log(details.stats.efficiency);
    console.log(details.stats.minifiedSize);
    console.log(details.stats.originalSize);
    console.log(details.stats.timeSpent);
    console.log(details.warnings);

    // $ExpectType string
    details.name;

    // $ExpectType string
    details.path;
});
