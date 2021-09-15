import nodeHrx = require('node-hrx');
const { archiveFromStream } = nodeHrx;
import fs = require('fs');

async function testParse() {
    const stream = fs.createReadStream('path/to/file', 'utf8');

    const archive = await archiveFromStream(stream);

    for (const itemName of archive.list()) {
        const item = archive.get(itemName);

        if (!item) {
            continue; // won't happen when taking the name from list() as it returns existing names
        }

        const itemPath: string = item.path;
        const comment: string|undefined = item.comment;

        if (item.isDirectory()) {
            const itemContents: Record<string, nodeHrx.Directory | nodeHrx.File> = item.contents;
        } else {
            const body: string = item.body;
        }

        if (item.isFile()) {
            const fileBody: string = item.body;
        }
    }
}
