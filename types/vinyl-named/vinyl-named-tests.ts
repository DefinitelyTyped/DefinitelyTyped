import named = require('vinyl-named');
import fs = require('vinyl-fs');

fs.src('src/*.js')
  .pipe(named());

// Or return a name for a given file
fs.src('src/*.js')
  .pipe(named((file) => {
    // $ExpectType string
    file.named;
    return 'your own name';
  }));

fs.src('src/*.js')
  .pipe(named(function(file) {
    file.customName = 'your name';
    this.queue(file);
  }));
