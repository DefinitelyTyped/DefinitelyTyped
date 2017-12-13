import * as klaw from "klaw";
import * as  path from "path";

// README.md: Streams 1 (push) example:

const items: klaw.Item[] = []; // files, directories, symlinks, etc

klaw('/some/dir')
    .on('data', (item: klaw.Item) => {
        items.push(item);
    })
    .on('end', () => {
        console.dir(items); // => [ ... array of files]
    });

// README.md: Streams 2 & 3 (pull) with error handling

klaw('/some/dir')
    .on('readable', () => {
        while (true) {
            const item = this.read();
            if (!item) break;
            items.push(item);
        }
    })
    .on('error', (err: Error, item: klaw.Item) => {
        console.log(err.message);
        console.log(item.path); // the file the error occurred on
    })
    .on('end', () => {
        console.log(items); // => [ ... array of files]
    });

// README.md: Example (ignore hidden directories):

function filterFunc(item: string): boolean {
    const basename = path.basename(item);
    return basename === '.' || basename[0] !== '.';
}

klaw('/some/dir', { filter: filterFunc })
    .on('data', (item: klaw.Item) => {
        // only items of none hidden folders will reach here
    });
