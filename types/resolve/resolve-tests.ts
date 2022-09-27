/// <reference types="node" />

import * as fs from 'fs';
import resolve = require('resolve');

function test_basic_async() {
    resolve('typescript', function(error, resolved, pkg) {
        if (error) {
            console.error(error.message);
            return;
        }
        console.log(resolved);
        console.log(pkg.version);
    });
}

function test_basic_sync() {
    var resolved = resolve.sync('typescript');
    console.log(resolved);
}

function test_options_async() {
    resolve(
        'typescript',
        {
            basedir: process.cwd(),
            package: {},
            extensions: ['.js'],
            packageFilter: function(pkg, pkgfile, dir) {
                return pkg;
            },
            pathFilter: function(pkg, path, relativePath) {
                return path;
            },
            paths: [process.cwd()],
            moduleDirectory: 'node_modules',
            readFile: fs.readFile,
            isDirectory: function(directory, cb) {
                fs.stat(directory, function(error, stat) {
                    if (error && error.code === 'ENOENT') {
                        return cb(null, false);
                    } else if (error) {
                        return cb(error);
                    } else {
                        return cb(null, stat.isDirectory());
                    }
                });
            },
            isFile: function(file, cb) {
                fs.stat(file, function(error, stat) {
                    if (error && error.code === 'ENOENT') {
                        return cb(null, false);
                    } else if (error) {
                        return cb(error);
                    } else {
                        return cb(null, stat.isFile());
                    }
                });
            },
            preserveSymlinks: false,
        },
        function(error, resolved, pkg) {
            if (error) {
                console.error(error.message);
                return;
            }
            console.log(resolved);
            console.log(pkg.version);
        },
    );
}

function test_options_sync() {
    var resolved = resolve.sync('typescript', {
        basedir: process.cwd(),
        package: {},
        extensions: ['.js'],
        packageFilter: function(pkg, pkgfile, dir) {
            return pkg;
        },
        pathFilter: function(pkg, path, relativePath) {
            return path;
        },
        paths: [process.cwd()],
        moduleDirectory: 'node_modules',
        readFileSync: fs.readFileSync,
        isDirectory: function(directory) {
            try {
                return fs.statSync(directory).isDirectory();
            } catch (error) {
                return false;
            }
        },
        isFile: function(file) {
            try {
                return fs.statSync(file).isFile();
            } catch (error) {
                return false;
            }
        },
        preserveSymlinks: true,
    });
    console.log(resolved);
    resolved = resolve.sync('typescript', {
        readFileSync(file) {
            return fs.readFileSync(file);
        },
    });
    resolved = resolve.sync('typescript', {
        readPackageSync(readFileSync, file) {
            // JSON.parse accepts anything with a toString, so a cast here is safe
            return JSON.parse(readFileSync(file) as string);
        },
    });
    // specifying both `readFile` and `readPackage` is forbidden
    // @ts-expect-error
    resolved = resolve.sync('typescript', {
        readFileSync(file) {
            return fs.readFileSync(file);
        },
        readPackageSync(readFileSync, file) {
            // JSON.parse accepts anything with a toString, so a cast here is safe
            return JSON.parse(readFileSync(file) as string);
        },
    });
}

function test_is_core() {
    var fsIsCore = resolve.isCore('fs');
    var typescriptIsCore = resolve.isCore('typescript');
}
