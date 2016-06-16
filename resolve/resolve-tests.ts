///<reference path="resolve.d.ts" />
///<reference path="../node/node.d.ts" />

import * as fs from 'fs';
import resolve = require("resolve");

resolve('fs', (error: Error, resolution: string) => { /* no-op */ });
resolve('fs', {}, (error: Error, resolution: string) => { /* no-op */ });
resolve('fs',
        {
            baseDir: 'myProject'
        },
        (error: Error, resolution: string) => { /* no-op */ });
resolve('fs',
        {
            package: { main: 'bar' }
        },
        (error: Error, resolution: string) => { /* no-op */ });
resolve('fs',
        {
            extensions: [ '.js', '.json' ]
        },
        (error: Error, resolution: string) => { /* no-op */ });
resolve('fs',
        {
            packageFilter: (pkg: { main: string }) => {
                pkg.main = 'index.js';
                return pkg;
            }
        },
        (error: Error, resolution: string) => { /* no-op */ });
resolve('fs',
        {
            packageFilter: (pkg: { main: string }, pkgFile: string) => {
                pkg.main = pkgFile;
                return pkg;
            }
        },
        (error: Error, resolution: string) => { /* no-op */ });
resolve('fs',
        {
            pathFilter: (pkg: { main: string }, path: string, relativePath: string) => {
                return relativePath;
            }
        },
        (error: Error, resolution: string) => { /* no-op */ });
resolve('fs',
        {
            paths: [ 'node_modules_2' ]
        },
        (error: Error, resolution: string) => { /* no-op */ });
resolve('fs',
        {
            moduleDirectory: 'node_modules'
        },
        (error: Error, resolution: string) => { /* no-op */ });
resolve('fs',
        {
            moduleDirectory: [ 'node_modules_1', 'node_modules_2' ]
        },
        (error: Error, resolution: string) => { /* no-op */ });
resolve('fs',
        {
            readFile: fs.readFile
        },
        (error: Error, resolution: string) => { /* no-op */ });
resolve('fs',
        {
            isFile: (file: string, cb: (error: Error, isFile?: boolean) => void) => {
                fs.stat(file, (err: NodeJS.ErrnoException, stat: fs.Stats) => {
                    if (err && err.code === 'ENOENT') {
                        cb(null, false);
                    } else if (err) {
                        cb(err);
                    } else {
                        cb(null, stat.isFile());
                    }
                });
            }
        },
        (error: Error, resolution: string) => { /* no-op */ });

resolve.sync('fs');
resolve.sync('fs', {});
resolve.sync('fs',
             {
                 baseDir: 'myProject'
             });
resolve.sync('fs',
             {
                 package: { main: 'bar' }
             });
resolve.sync('fs',
             {
                 extensions: [ '.js', '.json' ]
             });
resolve.sync('fs',
             {
                 packageFilter: (pkg: { main: string }) => {
                     pkg.main = 'index.js';
                     return pkg;
                 }
             });
resolve.sync('fs',
             {
                 packageFilter: (pkg: { main: string }, pkgFile: string) => {
                     pkg.main = pkgFile;
                     return pkg;
                 }
             });

resolve.sync('fs',
             {
                 pathFilter: (pkg: { main: string }, path: string, relativePath: string) => {
                     return relativePath;
                 }
             });
resolve.sync('fs',
             {
                 paths: [ 'node_modules_2' ]
             });
resolve.sync('fs',
             {
                 moduleDirectory: 'node_modules'
             });
resolve.sync('fs',
             {
                 moduleDirectory: [ 'node_modules_1', 'node_modules_2' ]
             });
resolve.sync('fs',
             {
                 readFile: fs.readFileSync
             });
resolve.sync('fs',
             {
                 isFile: (file: string) => {
                     try {
                         return true;
                     } catch (err) {
                         return false;
                     }
                 }
             });

