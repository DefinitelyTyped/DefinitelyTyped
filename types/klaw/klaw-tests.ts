import klaw = require("klaw");
const path = require('path');

// README.md: Streams 1 (push) example:

let items: klaw.Item[] = [] // files, directories, symlinks, etc

klaw('/some/dir', { preserveSymlinks: false })
    .on('data', function(item: klaw.Item) {
        items.push(item)
    })
    .on('end', function() {
        console.dir(items) // => [ ... array of files]
    })

// README.md: Streams 2 & 3 (pull) with error handling

klaw('/some/dir')
    .on('readable', function() {
        let item: klaw.Item;
        while (item = this.read()) {
            items.push(item)
        }
    })
    .on('error', function(err: Error, item: klaw.Item) {
        console.log(err.message)
        console.log(item.path) // the file the error occurred on
    })
    .on('end', function() {
        console.log(items) // => [ ... array of files]
    })

// README.md: Example (ignore hidden directories):

var filterFunc = function(item: string): boolean {
    var basename = path.basename(item);
    return basename === '.' || basename[0] !== '.'
}

klaw('/some/dir', { filter: filterFunc })
    .on('data', function(item: klaw.Item) {
        // only items of none hidden folders will reach here
    })
