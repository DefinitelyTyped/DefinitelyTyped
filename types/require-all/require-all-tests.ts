import requireAll = require('require-all');

requireAll({
    recursive: false,
    dirname: "./test-directory",
    filter: /\.test\.[jt]s/,
    excludeDirs: /^exclude-me.*/,
    map: (name: string, path: string) => name.replace(/_([a-z])/g, `${path}/${name}`),
    resolve: (mClass) => new mClass()
});

requireAll("./test-directory");
