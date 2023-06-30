import { writeFileSync, mkdtempSync } from 'fs';
import { resolve } from 'path';
import { BuildSystem } from 'cmake-js';

(async () => {
    const tmpDir = mkdtempSync('cmake-js-');
    const cmakePath = resolve(tmpDir, 'CMakeLists.txt');
    writeFileSync(cmakePath, 'cmake_minimum_required(VERSION 3.0)\nproject(cmake-js-tests)\n');

    const buildSystem = new BuildSystem({ cmakePath });
    await buildSystem.install();
    await buildSystem.configure();
})();
