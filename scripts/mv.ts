/// <reference types="node" />
import * as fs from 'fs';
import * as path from 'path';

const home = path.join(__dirname, '..');

fs.mkdirSync(path.join(home, "types"));

for (const dirName of fs.readdirSync(home)) {
    if (dirName.startsWith(".") || dirName === "node_modules" || dirName === "scripts" || dirName === "types") {
        continue;
    }

    if (fs.statSync(path.join(home, dirName)).isDirectory()) {
        fs.renameSync(path.join(home, dirName), path.join(home, "types", dirName));
    }
}