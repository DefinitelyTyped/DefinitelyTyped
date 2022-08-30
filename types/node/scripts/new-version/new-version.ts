import { readFileSync, renameSync, mkdirSync, writeFileSync } from 'fs';
import { resolve, join } from 'path';
import { copySync } from 'fs-extra';
import { tmpdir } from 'os';

const nodeDir = resolve(__dirname, '../../');

const [,,newVersion] = process.argv;

if (!newVersion || !newVersion.match(/^\d+$/)) {
    throw new Error('Argument must be only major version number');
}

const indexPath = join(nodeDir, 'index.d.ts')

const indexContents = readFileSync(indexPath, 'utf-8');
const [, currentVersion] = indexContents.match(/\/\/ Type definitions for non-npm package Node.js (\d+).\d+/) ?? [];

const folderName = join(nodeDir, `v${currentVersion}`);

// cannot move tempdir, create subfolder
const tempSubfolder = join(tmpdir(), 'v16');
mkdirSync(tempSubfolder);

copySync(nodeDir, tempSubfolder, {
    filter(src) {
        if (src.match(/v[^a-z8]+$/) || src.endsWith('package.json') || src.endsWith('package-lock.json')) {
            return false;
        }
        return !src.includes('/script');
    }
});

renameSync(tempSubfolder, folderName);

const newIndexContents = indexContents.replace(/\/\/ Type definitions for non-npm package Node.js (\d+).\d+/, `// Type definitions for non-npm package Node.js ${newVersion}.0`);

writeFileSync(join(nodeDir, 'index.d.ts'), newIndexContents);

const tsConfigPath = join(folderName, 'tsconfig.json');

const oldTSConfig = JSON.parse(readFileSync(tsConfigPath, 'utf-8'));

oldTSConfig.compilerOptions.baseUrl = '../../';
oldTSConfig.compilerOptions.typeRoots = ['../../'];
oldTSConfig.compilerOptions.paths = {
    "node": [
        `node/v${currentVersion}`
    ]
}

writeFileSync(tsConfigPath, JSON.stringify(oldTSConfig, null, '  '), 'utf8')
