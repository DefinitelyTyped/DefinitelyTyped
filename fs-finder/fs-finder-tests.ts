

import finder = require('fs-finder');


// static
var a = finder.in('./*');

var b = finder.from('./*');

var c = finder.find('./*');
finder.find('./*', (paths: string[]) => {});

var d = finder.findFiles('./*');
finder.findFiles('./*', (paths: string[]) => {});

var e = finder.findDirectories('./*');
finder.findDirectories('./*', (paths: string[]) => {});

var f = finder.findFile('./*');
finder.findFile('./*', (paths: string[]) => {});

var g = finder.findDirectory('./*');
finder.findDirectory('./*', (paths: string[]) => {});


// instance
var instance = finder.in('./any*');

var j: string[] = instance.find('./*');
instance.find('./*', (paths: string[]) => {});

var k: string[] = instance.findFiles('./*');
instance.findFiles('./*', (paths: string[]) => {});

var l: string[] = instance.findDirectories('./*');
instance.findDirectories('./*', (paths: string[]) => {});

var m: string[] = instance.findFile('./*');
instance.findFile('./*', (paths: string[]) => {});

var n: string[] = instance.findDirectory('./*');
instance.findDirectory('./*', (paths: string[]) => {});

var paths: string[];
paths = instance.find();
paths = instance.findFiles();
paths = instance.findDirectories();
paths = instance.findFile();
paths = instance.findDirectory();


// Base
instance = instance.recursively();
instance = instance.recursively(false);
instance = instance.exclude('b');
instance = instance.exclude(['b']);
instance = instance.exclude('a', true);
instance = instance.showSystemFiles();
instance = instance.showSystemFiles(false);
instance = instance.lookUp();
instance = instance.lookUp(false);
instance = instance.findFirst();
instance = instance.findFirst(true);
instance = instance.filter((path: string) => {
	return false;
});

paths = instance.getPathsSync('all', './*', './dir');
instance.getPathsAsync((paths: string[]) => {}, 'all', './*', './dir');
paths = instance.getPathsSync('directories', './*', './dir');
instance.getPathsAsync((paths: string[]) => {}, 'directories', './*', './dir');
paths = instance.getPathsSync('files', './*', './dir');
instance.getPathsAsync((paths: string[]) => {}, 'files', './*', './dir');

var is: boolean;
is = instance.checkExcludes('a');
is = instance.checkSystemFiles('b');
is = instance.checkFilters('c', {});

var numeric: number;
numeric = instance.checkFile('d', {}, './*.ts', 'all');
numeric = instance.checkFile('d', {}, './*.ts', 'directories');
numeric = instance.checkFile('d', {}, './*.ts', 'files');

paths = instance.getPathsFromParentsSync('a', 'all');
instance.getPathsFromParentsAsync((paths: string[]) => {}, '*.ts', 'all');
