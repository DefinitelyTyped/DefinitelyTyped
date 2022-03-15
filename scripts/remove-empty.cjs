const fs = require('node:fs')
const path = require('node:path');
for (const d of fs.readdirSync('./types')) {
    const dir = path.join('./types', d);
    const files = fs.readdirSync(dir);
    if (files.length === 0 || files.length === 1) {
        console.log('Deleting unused directory', dir);
        fs.rmdirSync(dir, { recursive: true });
    }
}
