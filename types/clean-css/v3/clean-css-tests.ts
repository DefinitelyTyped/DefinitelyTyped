
import * as CleanCSS from 'clean-css';

var source = 'a{font-weight:bold;}';
var minified = new CleanCSS().minify(source).styles;

var source = '@import url(http://path/to/remote/styles);';
new CleanCSS().minify(source, function (error, minified) {
  console.log(minified.styles);
});

const pathToOutputDirectory = 'path';

new CleanCSS({ sourceMap: true, target: pathToOutputDirectory })
  .minify(source, function (error, minified) {
    // access minified.sourceMap for SourceMapGenerator object
    // see https://github.com/mozilla/source-map/#sourcemapgenerator for more details
    // see https://github.com/jakubpawlowicz/clean-css/blob/master/bin/cleancss#L114 on how it's used in clean-css' CLI
    console.log(minified.sourceMap);
});

const inputSourceMapAsString = 'input';
new CleanCSS({ sourceMap: inputSourceMapAsString, target: pathToOutputDirectory })
  .minify(source, function (error, minified) {
    // access minified.sourceMap to access SourceMapGenerator object
    // see https://github.com/mozilla/source-map/#sourcemapgenerator for more details
    // see https://github.com/jakubpawlowicz/clean-css/blob/master/bin/cleancss#L114 on how it's used in clean-css' CLI
    console.log(minified.sourceMap);
});

new CleanCSS({ sourceMap: true, target: pathToOutputDirectory }).minify({
  'path/to/source/1': {
    styles: '...styles...',
    sourceMap: '...source-map...'
  },
  'path/to/source/2': {
    styles: '...styles...',
    sourceMap: '...source-map...'
  }
}, function (error, minified) {
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