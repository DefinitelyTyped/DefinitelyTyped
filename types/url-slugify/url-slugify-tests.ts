import Slugify = require('url-slugify');

const url: Slugify = new Slugify();

const slug: string = url.slugify('foo');
const slugWithSeparator: string = url.slugify('foo', '_');
