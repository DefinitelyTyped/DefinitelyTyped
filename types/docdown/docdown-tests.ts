import docdown = require('docdown');
import { Options } from 'docdown';

const options: Options = {
    path: './some/path',
    url: 'https://github.com/username/project/blob/master/my.js',
};
const markdown = docdown(options);
// $ExpectType string
docdown({
    path: './some/path',
    url: 'https://example.com/my.js',
    lang: 'js',
    sort: false,
    style: 'github',
    title: 'README',
    toc: 'properties',
});
