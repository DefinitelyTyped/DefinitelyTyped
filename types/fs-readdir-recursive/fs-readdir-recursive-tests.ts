import readdirRecursive = require('fs-readdir-recursive');

const unfilteredPaths: string[] = readdirRecursive('path');
const filteredPaths: string[] = readdirRecursive('path', (name: string, index: number, dir: string) => name[0] !== '.');
