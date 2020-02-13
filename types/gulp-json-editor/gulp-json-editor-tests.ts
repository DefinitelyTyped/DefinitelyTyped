import * as gulp from 'gulp';
import jeditor = require('gulp-json-editor');

// Samples taken from https://www.npmjs.com/package/gulp-json-editor

/*
  edit JSON object by merging with user specific object
*/
gulp.src("./manifest.json")
  .pipe(jeditor({
    'version': '1.2.3'
  }))
  .pipe(gulp.dest("./dest"));

/*
  edit JSON object by using user specific function
*/
gulp.src("./manifest.json")
  .pipe(jeditor(function(json : any) {
    json.version = "1.2.3";
    return json; // must return JSON object.
  }))
  .pipe(gulp.dest("./dest"));

/*
  specify js-beautify option
*/
gulp.src("./manifest.json")
  .pipe(jeditor({
    'version': '1.2.3'
  },
  // the second argument is passed to js-beautify as its option
  {
    'indent_char': '\t',
    'indent_size': 1
  }))
  .pipe(gulp.dest("./dest"));
