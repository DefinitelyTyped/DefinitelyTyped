import * as sass from 'node-sass';

sass.render({
  file: '/path/to/myFile.scss',
  data: 'body{background:blue; a{color:black;}}',
  importer: function(url, prev, done) {
    someAsyncFunction(url, prev, function(result) {
      if (result == null) {
        // return null to opt out of handling this path
        // compiler will fall to next importer in array (or its own default)
        return null;
      }
      // only one of them is required, see section Sepcial Behaviours.
      done({ file: result.path });
      done({ contents: result.data });
    });
  },
  includePaths: ['lib/', 'mod/'],
  outputStyle: 'compressed'
}, function(error, result) { // node-style callback from v3.0.0 onwards
  if (error) {
    console.log(error.status, error.column, error.message, error.line);
  }
  else {
    console.log(result.stats);
    console.log(result.css.toString());
    console.log(result.map.toString());
    // or better
    console.log(JSON.stringify(result.map)); // note, JSON.stringify accepts Buffer too
  }
});
// OR
const result = sass.renderSync({
  file: '/path/to/file.scss',
  data: 'body{background:blue; a{color:black;}}',
  outputStyle: 'compressed',
  outFile: '/to/my/output.css',
  sourceMap: true, // or an absolute or relative (to outFile) path
  sourceMapRoot: '.',
  importer: function(url, prev) {
    if (url.startsWith('!')) {
      return new Error('Cannot accept this file');
    }
    return { file: [prev, url].join('/') };
  },
});

console.log(result.css);
console.log(result.map);
console.log(result.stats);

function someAsyncFunction(url: string, prev: string, callback: (result: { path: string; data: string }) => void): void { }
function someSyncFunction(url: string, prev: string): { path: string; data: string } {
  return null;
}
