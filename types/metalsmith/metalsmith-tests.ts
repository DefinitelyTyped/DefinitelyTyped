'use strict';

import * as Metalsmith from 'metalsmith';
const collections = require('metalsmith-collections');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');

// Well, here is our elevator pitch. It’s as easy as that:
Metalsmith(__dirname) // __dirname defined by node.js:
    // name of current working directory
    .metadata({
        // add any variable you want
        // use them in layout-files
        sitename: 'My Static Site & Blog',
        siteurl: 'http://example.com/',
        description: "It's about saying »Hello« to the world.",
        generatorname: 'Metalsmith',
        generatorurl: 'http://metalsmith.io/',
    })
    .source('./src') // source directory
    .destination('./build') // destination directory
    .clean(true) // clean destination before
    .use(
        collections({
            // group all blog posts by internally
            posts: 'posts/*.md', // adding key 'collections':'posts'
        }),
    ) // use `collections.posts` in layouts
    .use(markdown()) // transpile all md into html
    .use(
        permalinks({
            // change URLs to permalink URLs
            relative: false, // put css only in /css
        }),
    )
    .use(layouts()) // wrap layouts around html
    .build((err: Error | null) => {
        // build process
        if (err) throw err; // error handling is required
    });

// initialize via default export
Metalsmith(__dirname);
// initialize via default export with variable assignment
const m = Metalsmith(__dirname);
// set relative/absolute working directory
Metalsmith(__dirname).directory('working');
Metalsmith(__dirname).directory('C:\\Projects\\Metalsmith');
// get absolute working directory
const wrk = Metalsmith(__dirname).directory();
// set relative/absolute source directory
Metalsmith(__dirname).source('source');
Metalsmith(__dirname).source('C:\\Projects\\Site');
// get absolute source directory
const src = Metalsmith(__dirname).source();
// set relative/absolute destination directory
Metalsmith(__dirname).destination('build');
Metalsmith(__dirname).destination('C:\\Projects\\Out');
// get absolute destination directory
const dst = Metalsmith(__dirname).destination();
// set max file concurrency
Metalsmith(__dirname).concurrency(50);
// get max file concurrency
const max = Metalsmith(__dirname).concurrency();
// set destination directory cleaning to false
Metalsmith(__dirname).clean(false);
// get destination directory cleaning flag
const clean = Metalsmith(__dirname).clean();
// set frontmatter parsing to false
Metalsmith(__dirname).frontmatter(false);
// get frontmatter parsing flag
const parse = Metalsmith(__dirname).frontmatter();
// set global metadata object
Metalsmith(__dirname).metadata({ sitename: 'My Static Site' });
// get global metadata object
const meta = Metalsmith(__dirname).metadata();
// plugin mock-up
function fakePlugin(files: Metalsmith.Files, metalsmith: Metalsmith, done: any) {
    return;
}
// testing the file interface
const file: Metalsmith.File = {
    contents: Buffer.from('string'),
};
// testing optional file properties
file.mode;
file.stats && file.stats.isSymbolicLink();
// testing the files interface
const files: Metalsmith.Files = {
    'path/to/file.js': file,
};
// testing files iteration & buffer toString
Object.values(files).map(file => {
    return file.contents.toString();
});
Metalsmith(__dirname).ignores;
// uncomment to test readonly protection
// Metalsmith(__dirname).ignores = [];
Metalsmith(__dirname).plugins;
// uncomment to test readonly protection
// Metalsmith(__dirname).plugins = [];
// add a fakePlugin to the metalsmith pipeline
Metalsmith(__dirname).use(fakePlugin);
// add an ignore file
Metalsmith(__dirname).ignore('corrupted.html');
// get ignored files
const ignored = Metalsmith(__dirname).ignore();
// resolve "path-a" and "path-b" on working directory
const path = Metalsmith(__dirname).path('path-a', 'path-b');
// build without callback handler (not recommended, but allowed)
Metalsmith(__dirname).build();
const callback = (err: Error | null, files: Metalsmith.Files) => {
    if (err) {
        throw err;
    }
};
// build with callback handler
Metalsmith(__dirname).build(callback);
// process without callback handler (not recommended, but allowed)
Metalsmith(__dirname).process();
// process with callback handler
Metalsmith(__dirname).process((err: Error | null) => {
    if (err) {
        throw err;
    }
});
// run with callback handler
Metalsmith(__dirname).run({ fileA: 'a.html' }, callback);
// read
const filesData = Metalsmith(__dirname).read('subdir');
// readFile
const fileData = Metalsmith(__dirname).readFile('a.html');
// write
Metalsmith(__dirname).write({ fileA: 'a.html' }, 'C:\\OutDir');
// writeFile
Metalsmith(__dirname).writeFile('test.html', { contents: 'File Contents' });
