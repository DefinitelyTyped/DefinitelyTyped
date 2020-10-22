import copyfiles = require('copyfiles');

copyfiles(['file'], () => {});
copyfiles(['file'], error => {});
copyfiles(['file'], { up: true, follow: true }, error => {});
copyfiles(['file'], { up: 1 }, error => {});
copyfiles(['file'], { all: true }, error => {});
copyfiles(['file'], 10, error => {});
copyfiles(
    ['input/*.txt', 'output'],
    {
        // exclude is mapped into glob's `ignore`
        exclude: ['**/*.js.txt', '**/*.ps.txt'],
    },
    err => {},
);
