// Original by Tanguy Krotoff <https://github.com/tkrotoff>
// Updated by Andrew Potter <https://github.com/GolaWaya>

import * as CleanCSS from 'clean-css';

let source = 'a{font-weight:bold;}';
console.log(new CleanCSS().minify(source).styles);

source = '@import url(http://path/to/remote/styles);';
new CleanCSS().minify(source, (error: any, minified: CleanCSS.Output): void => {
  console.log(minified.styles);
});

const pathToOutputDirectory = 'path';

new CleanCSS({ sourceMap: true, rebaseTo: pathToOutputDirectory })
  .minify(source, (error: any, minified: CleanCSS.Output): void => {
    // access minified.sourceMap for SourceMapGenerator object
    // see https://github.com/mozilla/source-map/#sourcemapgenerator for more details
    // see https://github.com/jakubpawlowicz/clean-css/blob/master/bin/cleancss#L114 on how it's used in clean-css' CLI
    console.log(minified.sourceMap);
    minified.sourceMap.setSourceContent("bar.css", "");
});

const inputSourceMap = { version: '3', sources: ['foo.css'], names: [], mappings: 'AAAA' };
new CleanCSS({ sourceMap: true, rebaseTo: pathToOutputDirectory })
  .minify(source, inputSourceMap, (error: any, minified: CleanCSS.Output): void => {
    // access minified.sourceMap as above
    console.log(minified.sourceMap);
});

const inputSourceMapAsString = JSON.stringify(inputSourceMap);
new CleanCSS({ sourceMap: true, rebaseTo: pathToOutputDirectory })
  .minify(source, inputSourceMapAsString, (error: any, minified: CleanCSS.Output): void => {
    // access minified.sourceMap as above
    console.log(minified.sourceMap);
});

new CleanCSS({ sourceMap: true, rebaseTo: pathToOutputDirectory }).minify({
  'path/to/source/1': {
    styles: source,
    sourceMap: inputSourceMap
  },
  'path/to/source/2': {
    styles: source,
    sourceMap: inputSourceMapAsString
  }
}, (error: any, minified: CleanCSS.Output): void => {
  // access minified.sourceMap as above
  console.log(minified.sourceMap);
});

new CleanCSS().minify(['path/to/file/one', 'path/to/file/two']);

new CleanCSS().minify({
  'path/to/file/one': {
    styles: 'contents of file one'
  },
  'path/to/file/two': {
    styles: 'contents of file two'
  }
});

// new tests - promise resolution
new CleanCSS({ returnPromise: true, rebaseTo: pathToOutputDirectory }).minify(source)
    .then((minified: CleanCSS.Output): void => {
        console.log(minified.styles);
    }).catch((error: any): void => {
        console.log(error);
    }
);

new CleanCSS({ returnPromise: true, sourceMap: true }).minify(source)
    .then((minified: CleanCSS.Output): void => {
        // access minified.sourceMap as above
        console.log(minified.sourceMap);
    }).catch((error: any): void => {
        console.log(error);
    }
);

new CleanCSS({ returnPromise: true, sourceMap: true }).minify(source, inputSourceMapAsString)
    .then((minified: CleanCSS.Output): void => {
        // access minified.sourceMap as above
        console.log(minified.sourceMap);
    }).catch((error: any): void => {
        console.log(error);
    }
);

// test object return when passing options as object
let CleanCssOptions: CleanCSS.Options = { returnPromise: true };
new CleanCSS(CleanCssOptions).minify(source)
    .then((minified: CleanCSS.Output): void => {
        console.log(minified.styles);
    }).catch((error: any): void => {
        console.log(error);
    }
);

CleanCssOptions = { returnPromise: false };
new CleanCSS(CleanCssOptions).minify(source, (error: any, minified: CleanCSS.Output): void => {
    console.log(minified.styles);
});

// test clean-css semicolonAfterLastProperty option works as expected
source = 'a{font-weight:bold;}';
CleanCssOptions = {
    format: {
        semicolonAfterLastProperty: true
    }
};

new CleanCSS(CleanCssOptions).minify(source, (error: any, minified: CleanCSS.Output): void => {
    console.log(minified.styles);
});
