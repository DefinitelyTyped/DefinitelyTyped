import * as Metalsmith from "metalsmith";

const __dirname = "C:\\wherever";
// initialize via default export
Metalsmith(__dirname);

// initialize via default export with variable assignment
const m: Metalsmith = Metalsmith(__dirname);

// set relative/absolute working directory
Metalsmith(__dirname).directory("working");
Metalsmith(__dirname).directory("C:\\Projects\\Metalsmith");

// get absolute working directory
const wrk: string = Metalsmith(__dirname).directory();

// set relative/absolute source directory
Metalsmith(__dirname).source("source");
Metalsmith(__dirname).source("C:\\Projects\\Site");

// get absolute source directory
const src: string = Metalsmith(__dirname).source();

// set relative/absolute destination directory
Metalsmith(__dirname).destination("build");
Metalsmith(__dirname).destination("C:\\Projects\\Out");

// get absolute destination directory
const dst: string = Metalsmith(__dirname).destination();

// set max file concurrency
Metalsmith(__dirname).concurrency(50);

// get max file concurrency
const max: number = Metalsmith(__dirname).concurrency();

// set destination directory cleaning to false
Metalsmith(__dirname).clean(false);

// get destination directory cleaning flag
const clean: boolean = Metalsmith(__dirname).clean();

// set frontmatter parsing to false
Metalsmith(__dirname).frontmatter(false);

// get frontmatter parsing flag
const parse: boolean = Metalsmith(__dirname).frontmatter();

// set global metadata object
Metalsmith(__dirname).metadata({sitename: "My Static Site"});

// get global metadata object
const meta: object = Metalsmith(__dirname).metadata();

// plugin mock-up
function fakePlugin(opts?: any): any {
    return;
}

// add a fakePlugin to the metalsmith pipeline
Metalsmith(__dirname).use(fakePlugin());

// add an ignore file
Metalsmith(__dirname).ignore("corrupted.html");

// get ignored files
const ingnored: string[] = Metalsmith(__dirname).ignore();

// resolve "path-a" and "path-b" on working directory
const path: string = Metalsmith(__dirname).path("path-a", "path-b");

// build without callback handler (not recommended, but allowed)
Metalsmith(__dirname).build();

const callback: Metalsmith.Callback = (err: Error, files: object) => {if (err) {throw err; }};

// build with callback handler
Metalsmith(__dirname).build(callback);

// process without callback handler (not recommended, but allowed)
Metalsmith(__dirname).process();

// process with callback handler
Metalsmith(__dirname).process(
    (err: Error): any => {
        if (err) {throw err; }
    });

// run with callback handler
Metalsmith(__dirname).run({fileA: "a.html"} , callback);

// read
const files: object = Metalsmith(__dirname).read("subdir");

// readFile
const fileData: object = Metalsmith(__dirname).readFile("a.html");

// write
Metalsmith(__dirname).write({fileA: "a.html"} , "C:\\OutDir");

// writeFile
Metalsmith(__dirname).writeFile("test.html", {contents: "File Contents"});
