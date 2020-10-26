import requireDir = require('require-dir');

requireDir('./test-directory', {
    recurse: false,
    extensions: ['.js', '.ts'],
    filter: (path: string) => path.match(/\.test\.[jt]s/),
});
