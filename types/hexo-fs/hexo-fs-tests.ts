import fs = require('hexo-fs');
import { join, dirname } from 'path';
import 'mocha';
import chai = require('chai');
import Promise = require('bluebird');

const should = chai.should();

function createDummyFolder(path: string) {
    return Promise.all([
        // Normal files in a hidden folder
        fs.writeFile(join(path, '.hidden', 'a.txt'), 'a'),
        fs.writeFile(join(path, '.hidden', 'b.js'), 'b'),
        // Normal folder in a hidden folder
        fs.writeFile(join(path, '.hidden', 'c', 'd'), 'd'),
        // Top-class files
        fs.writeFile(join(path, 'e.txt'), 'e'),
        fs.writeFile(join(path, 'f.js'), 'f'),
        // A hidden file
        fs.writeFile(join(path, '.g'), 'g'),
        // Files in a normal folder
        fs.writeFile(join(path, 'folder', 'h.txt'), 'h'),
        fs.writeFile(join(path, 'folder', 'i.js'), 'i'),
        // A hidden files in a normal folder
        fs.writeFile(join(path, 'folder', '.j'), 'j')
    ]);
}

const tmpDir = join(__dirname, 'fs_tmp');

before(() => fs.mkdirs(tmpDir));

after(done => {
    fs.rmdir(tmpDir);
    done();
});

it('exists()', () => {
    return fs.exists(tmpDir).then(exist => {
        exist.should.be.true;
    });
});

it('exists() - callback', callback => {
    fs.exists(tmpDir, (exist) => {
        exist.should.be.true;
        callback();
    });
});

it('mkdirs()', () => {
    const target = join(tmpDir, 'a', 'b', 'c');

    return fs.mkdirs(target).then(() => {
        return fs.exists(target);
    }).then(exist => {
        exist.should.be.true;
        return fs.rmdir(join(tmpDir, 'a'));
    });
});

it('mkdirs() - callback', callback => {
    const target = join(tmpDir, 'a', 'b', 'c');

    fs.mkdirs(target, err => {
        should.not.exist(err);

        fs.exists(target, exist => {
            exist.should.be.true;
            fs.rmdir(join(tmpDir, 'a'), callback);
        });
    });
});

it('mkdirsSync()', () => {
    const target = join(tmpDir, 'a', 'b', 'c');

    fs.mkdirsSync(target);

    return fs.exists(target).then(exist => {
        exist.should.be.true;
        return fs.rmdir(join(tmpDir, 'a'));
    });
});

it('writeFile()', () => {
    const target = join(tmpDir, 'a', 'b', 'test.txt');
    const body = 'foo';

    return fs.writeFile(target, body).then(() => {
        return fs.readFile(target);
    }).then(content => {
        content.should.eql(body);
        return fs.rmdir(join(tmpDir, 'a'));
    });
});

it('writeFile() - callback', callback => {
    const target = join(tmpDir, 'a', 'b', 'test.txt');
    const body = 'foo';

    fs.writeFile(target, body, err => {
        should.not.exist(err);

        fs.readFile(target, (_, content) => {
            content!.should.eql(body);
            fs.rmdir(join(tmpDir, 'a'), callback);
        });
    });
});

it('writeFileSync()', () => {
    const target = join(tmpDir, 'a', 'b', 'test.txt');
    const body = 'foo';

    fs.writeFileSync(target, body);

    return fs.readFile(target).then(content => {
        content.should.eql(body);
        return fs.rmdir(join(tmpDir, 'a'));
    });
});

it('appendFile()', () => {
    const target = join(tmpDir, 'a', 'b', 'test.txt');
    const body = 'foo';
    const body2 = 'bar';

    return fs.writeFile(target, body).then(() => {
        return fs.appendFile(target, body2);
    }).then(() => {
        return fs.readFile(target);
    }).then(content => {
        content.should.eql(body + body2);
        return fs.rmdir(join(tmpDir, 'a'));
    });
});

it('appendFile() - callback', callback => {
    const target = join(tmpDir, 'a', 'b', 'test.txt');
    const body = 'foo';
    const body2 = 'bar';

    fs.writeFile(target, body, () => {
        fs.appendFile(target, body2, err => {
            should.not.exist(err);

            fs.readFile(target, (_, content) => {
                content!.should.eql(body + body2);
                fs.rmdir(join(tmpDir, 'a'), callback);
            });
        });
    });
});

it('appendFileSync()', () => {
    const target = join(tmpDir, 'a', 'b', 'test.txt');
    const body = 'foo';
    const body2 = 'bar';

    return fs.writeFile(target, body).then(() => {
        fs.appendFileSync(target, body2);
        return fs.readFile(target);
    }).then(content => {
        content.should.eql(body + body2);
        return fs.rmdir(join(tmpDir, 'a'));
    });
});

it('copyFile()', () => {
    const src = join(tmpDir, 'test.txt');
    const dest = join(tmpDir, 'a', 'b', 'test.txt');
    const body = 'foo';

    return fs.writeFile(src, body).then(() => {
        return fs.copyFile(src, dest);
    }).then(() => {
        return fs.readFile(dest);
    }).then(content => {
        content.should.eql(body);

        return Promise.all([
            fs.unlink(src),
            fs.rmdir(join(tmpDir, 'a'))
        ]);
    });
});

it('copyFile() - callback', callback => {
    const src = join(tmpDir, 'test.txt');
    const dest = join(tmpDir, 'a', 'b', 'test.txt');
    const body = 'foo';

    fs.writeFile(src, body, err => {
        if (err) return callback(err);

        fs.copyFile(src, dest, err => {
            if (err) return callback(err);

            fs.readFile(dest, (err, content) => {
                if (err) return callback(err);
                content!.should.eql(body);

                Promise.all([
                    fs.unlink(src),
                    fs.rmdir(join(tmpDir, 'a'))
                ]).asCallback(callback);
            });
        });
    });
});

it('copyDir()', () => {
    const src = join(tmpDir, 'a');
    const dest = join(tmpDir, 'b');

    return createDummyFolder(src).then(() => {
        return fs.copyDir(src, dest);
    }).then(files => {
        files.should.have.members([
            'e.txt',
            'f.js',
            join('folder', 'h.txt'),
            join('folder', 'i.js')
        ]);

        return Promise.all([
            fs.readFile(join(dest, 'e.txt')),
            fs.readFile(join(dest, 'f.js')),
            fs.readFile(join(dest, 'folder', 'h.txt')),
            fs.readFile(join(dest, 'folder', 'i.js'))
        ]);
    }).then(result => {
        result.should.eql(['e', 'f', 'h', 'i']);
    }).then(() => {
        return Promise.all([
            fs.rmdir(src),
            fs.rmdir(dest)
        ]);
    });
});

it('copyDir() - callback', callback => {
    const src = join(tmpDir, 'a');
    const dest = join(tmpDir, 'b');

    createDummyFolder(src).then(() => {
        fs.copyDir(src, dest, (err, files) => {
            should.not.exist(err);
            files!.should.have.members([
                'e.txt',
                'f.js',
                join('folder', 'h.txt'),
                join('folder', 'i.js')
            ]);

            Promise.all([
                fs.readFile(join(dest, 'e.txt')),
                fs.readFile(join(dest, 'f.js')),
                fs.readFile(join(dest, 'folder', 'h.txt')),
                fs.readFile(join(dest, 'folder', 'i.js'))
            ]).then(result => {
                result.should.eql(['e', 'f', 'h', 'i']);
            }).then(() => {
                return Promise.all([
                    fs.rmdir(src),
                    fs.rmdir(dest)
                ]);
            }).asCallback(callback);
        });
    });
});

it('copyDir() - ignoreHidden off', () => {
    const src = join(tmpDir, 'a');
    const dest = join(tmpDir, 'b');

    return createDummyFolder(src).then(() => {
        return fs.copyDir(src, dest, { ignoreHidden: false });
    }).then(files => {
        files.should.have.members([
            join('.hidden', 'a.txt'),
            join('.hidden', 'b.js'),
            join('.hidden', 'c', 'd'),
            'e.txt',
            'f.js',
            '.g',
            join('folder', 'h.txt'),
            join('folder', 'i.js'),
            join('folder', '.j')
        ]);

        return Promise.all([
            fs.readFile(join(dest, '.hidden', 'a.txt')),
            fs.readFile(join(dest, '.hidden', 'b.js')),
            fs.readFile(join(dest, '.hidden', 'c', 'd')),
            fs.readFile(join(dest, 'e.txt')),
            fs.readFile(join(dest, 'f.js')),
            fs.readFile(join(dest, '.g')),
            fs.readFile(join(dest, 'folder', 'h.txt')),
            fs.readFile(join(dest, 'folder', 'i.js')),
            fs.readFile(join(dest, 'folder', '.j'))
        ]);
    }).then(result => {
        result.should.eql(['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    }).then(() => {
        return Promise.all([
            fs.rmdir(src),
            fs.rmdir(dest)
        ]);
    });
});

it('copyDir() - ignorePattern', () => {
    const src = join(tmpDir, 'a');
    const dest = join(tmpDir, 'b');

    return createDummyFolder(src).then(() => {
        return fs.copyDir(src, dest, { ignorePattern: /\.js/ });
    }).then(files => {
        files.should.have.members(['e.txt', join('folder', 'h.txt')]);

        return Promise.all([
            fs.readFile(join(dest, 'e.txt')),
            fs.readFile(join(dest, 'folder', 'h.txt'))
        ]);
    }).then(result => {
        result.should.eql(['e', 'h']);
    }).then(() => {
        return Promise.all([
            fs.rmdir(src),
            fs.rmdir(dest)
        ]);
    });
});

it('listDir()', () => {
    const target = join(tmpDir, 'test');

    return createDummyFolder(target).then(() => {
        return fs.listDir(target);
    }).then(files => {
        files.should.have.members([
            'e.txt',
            'f.js',
            join('folder', 'h.txt'),
            join('folder', 'i.js')
        ]);

        return fs.rmdir(target);
    });
});

it('listDir() - callback', callback => {
    const target = join(tmpDir, 'test');

    createDummyFolder(target).then(() => {
        fs.listDir(target, (err, files) => {
            if (err) return callback(err);

            files!.should.have.members([
                'e.txt',
                'f.js',
                join('folder', 'h.txt'),
                join('folder', 'i.js')
            ]);

            fs.rmdir(target, callback);
        });
    });
});

it('listDir() - ignoreHidden off', () => {
    const target = join(tmpDir, 'test');

    return createDummyFolder(target).then(() => {
        return fs.listDir(target, { ignoreHidden: false });
    }).then(files => {
        files.should.have.members([
            join('.hidden', 'a.txt'),
            join('.hidden', 'b.js'),
            join('.hidden', 'c', 'd'),
            'e.txt',
            'f.js',
            '.g',
            join('folder', 'h.txt'),
            join('folder', 'i.js'),
            join('folder', '.j')
        ]);

        return fs.rmdir(target);
    });
});

it('listDir() - ignorePattern', () => {
    const target = join(tmpDir, 'test');

    return createDummyFolder(target).then(() => {
        return fs.listDir(target, { ignorePattern: /\.js/ });
    }).then(files => {
        files.should.have.members(['e.txt', join('folder', 'h.txt')]);
        return fs.rmdir(target);
    });
});

it('listDirSync()', () => {
    const target = join(tmpDir, 'test');

    return createDummyFolder(target).then(() => {
        const files = fs.listDirSync(target);
        files.should.have.members([
            'e.txt',
            'f.js',
            join('folder', 'h.txt'),
            join('folder', 'i.js')
        ]);

        return fs.rmdir(target);
    });
});

it('listDirSync() - ignoreHidden off', () => {
    const target = join(tmpDir, 'test');

    return createDummyFolder(target).then(() => {
        const files = fs.listDirSync(target, { ignoreHidden: false });
        files.should.have.members([
            join('.hidden', 'a.txt'),
            join('.hidden', 'b.js'),
            join('.hidden', 'c', 'd'),
            'e.txt',
            'f.js',
            '.g',
            join('folder', 'h.txt'),
            join('folder', 'i.js'),
            join('folder', '.j')
        ]);

        return fs.rmdir(target);
    });
});

it('listDirSync() - ignorePattern', () => {
    const target = join(tmpDir, 'test');

    return createDummyFolder(target).then(() => {
        const files = fs.listDirSync(target, { ignorePattern: /\.js/ });
        files.should.have.members(['e.txt', join('folder', 'h.txt')]);
        return fs.rmdir(target);
    });
});

it('readFile()', () => {
    const target = join(tmpDir, 'test.txt');
    const body = 'test';

    return fs.writeFile(target, body).then(() => {
        return fs.readFile(target);
    }).then(content => {
        content.should.eql(body);
        return fs.unlink(target);
    });
});

it('readFile() - callback', callback => {
    const target = join(tmpDir, 'test.txt');
    const body = 'test';

    fs.writeFile(target, body, err => {
        if (err) return callback(err);

        fs.readFile(target, (err, content) => {
            if (err) return callback(err);

            content!.should.eql(body);

            fs.unlink(target).asCallback(callback);
        });
    });
});

it('readFile() - escape BOM', () => {
    const target = join(tmpDir, 'test.txt');
    const body = '\ufefffoo';

    return fs.writeFile(target, body).then(() => {
        return fs.readFile(target);
    }).then(content => {
        content.should.eql('foo');
        return fs.unlink(target);
    });
});

it('readFile() - escape Windows line ending', () => {
    const target = join(tmpDir, 'test.txt');
    const body = 'foo\r\nbar';

    return fs.writeFile(target, body).then(() => {
        return fs.readFile(target);
    }).then(content => {
        content.should.eql('foo\nbar');
        return fs.unlink(target);
    });
});

it('readFileSync()', () => {
    const target = join(tmpDir, 'test.txt');
    const body = 'test';

    return fs.writeFile(target, body).then(() => {
        fs.readFileSync(target).should.eql(body);
        return fs.unlink(target);
    });
});

it('readFileSync() - escape BOM', () => {
    const target = join(tmpDir, 'test.txt');
    const body = '\ufefffoo';

    return fs.writeFile(target, body).then(() => {
        fs.readFileSync(target).should.eql('foo');
        return fs.unlink(target);
    });
});

it('readFileSync() - escape Windows line ending', () => {
    const target = join(tmpDir, 'test.txt');
    const body = 'foo\r\nbar';

    return fs.writeFile(target, body).then(() => {
        fs.readFileSync(target).should.eql('foo\nbar');
        return fs.unlink(target);
    });
});

it('unlink()', () => {
    const target = join(tmpDir, 'test-unlink');

    return fs.writeFile(target, '').then(() => {
        return fs.exists(target);
    }).then(exist => {
        exist.should.eql(true);
        return fs.unlink(target);
    }).then(() => {
        return fs.exists(target);
    }).then(exist => {
        exist.should.eql(false);
    });
});

it('emptyDir()', () => {
    const target = join(tmpDir, 'test');

    return createDummyFolder(target).then(() => {
        return fs.emptyDir(target);
    }).then(files => {
        files.should.have.members([
            'e.txt',
            'f.js',
            join('folder', 'h.txt'),
            join('folder', 'i.js')
        ]);

        return [
            [join(target, '.hidden', 'a.txt'), true],
            [join(target, '.hidden', 'b.js'), true],
            [join(target, '.hidden', 'c', 'd'), true],
            [join(target, 'e.txt'), false],
            [join(target, 'f.js'), false],
            [join(target, '.g'), true],
            [join(target, 'folder', 'h.txt'), false],
            [join(target, 'folder', 'i.js'), false],
            [join(target, 'folder', '.j'), true]
        ];
    }).map((data: [string, boolean]) => {
        return fs.exists(data[0]).then(exist => {
            exist.should.eql(data[1]);
        });
    }).then(() => {
        return fs.rmdir(target);
    });
});

it('emptyDir() - callback', callback => {
    const target = join(tmpDir, 'test');

    createDummyFolder(target).then(() => {
        fs.emptyDir(target, (err, files) => {
            if (err) return callback(err);

            files!.should.have.members([
                'e.txt',
                'f.js',
                join('folder', 'h.txt'),
                join('folder', 'i.js')
            ]);
            const elements: Array<[string, boolean]> = [
                [join(target, '.hidden', 'a.txt'), true],
                [join(target, '.hidden', 'b.js'), true],
                [join(target, '.hidden', 'c', 'd'), true],
                [join(target, 'e.txt'), false],
                [join(target, 'f.js'), false],
                [join(target, '.g'), true],
                [join(target, 'folder', 'h.txt'), false],
                [join(target, 'folder', 'i.js'), false],
                [join(target, 'folder', '.j'), true]
            ];
            Promise.map(elements, data => {
                return fs.exists(data[0]).then(exist => {
                    exist.should.eql(data[1]);
                });
            }).then(() => {
                return fs.rmdir(target);
            }).asCallback(callback);
        });
    });
});

it('emptyDir() - ignoreHidden off', () => {
    const target = join(tmpDir, 'test');

    return createDummyFolder(target).then(() => {
        return fs.emptyDir(target, { ignoreHidden: false });
    }).then(files => {
        files.should.have.members([
            join('.hidden', 'a.txt'),
            join('.hidden', 'b.js'),
            join('.hidden', 'c', 'd'),
            'e.txt',
            'f.js',
            '.g',
            join('folder', 'h.txt'),
            join('folder', 'i.js'),
            join('folder', '.j')
        ]);

        return [
            [join(target, '.hidden', 'a.txt'), false],
            [join(target, '.hidden', 'b.js'), false],
            [join(target, '.hidden', 'c', 'd'), false],
            [join(target, 'e.txt'), false],
            [join(target, 'f.js'), false],
            [join(target, '.g'), false],
            [join(target, 'folder', 'h.txt'), false],
            [join(target, 'folder', 'i.js'), false],
            [join(target, 'folder', '.j'), false]
        ];
    }).map((data: [string, boolean]) => {
        return fs.exists(data[0]).then(exist => {
            exist.should.eql(data[1]);
        });
    }).then(() => {
        return fs.rmdir(target);
    });
});

it('emptyDir() - ignorePattern', () => {
    const target = join(tmpDir, 'test');

    return createDummyFolder(target).then(() => {
        return fs.emptyDir(target, { ignorePattern: /\.js/ });
    }).then(files => {
        files.should.have.members(['e.txt', join('folder', 'h.txt')]);

        return [
            [join(target, '.hidden', 'a.txt'), true],
            [join(target, '.hidden', 'b.js'), true],
            [join(target, '.hidden', 'c', 'd'), true],
            [join(target, 'e.txt'), false],
            [join(target, 'f.js'), true],
            [join(target, '.g'), true],
            [join(target, 'folder', 'h.txt'), false],
            [join(target, 'folder', 'i.js'), true],
            [join(target, 'folder', '.j'), true]
        ];
    }).map((data: [string, boolean]) => {
        return fs.exists(data[0]).then(exist => {
            exist.should.eql(data[1]);
        });
    }).then(() => {
        return fs.rmdir(target);
    });
});

it('emptyDir() - exclude', () => {
    const target = join(tmpDir, 'test');

    return createDummyFolder(target).then(() => {
        return fs.emptyDir(target, { exclude: ['e.txt', join('folder', 'i.js')] });
    }).then(files => {
        files.should.have.members(['f.js', join('folder', 'h.txt')]);

        return [
            [join(target, '.hidden', 'a.txt'), true],
            [join(target, '.hidden', 'b.js'), true],
            [join(target, '.hidden', 'c', 'd'), true],
            [join(target, 'e.txt'), true],
            [join(target, 'f.js'), false],
            [join(target, '.g'), true],
            [join(target, 'folder', 'h.txt'), false],
            [join(target, 'folder', 'i.js'), true],
            [join(target, 'folder', '.j'), true]
        ];
    }).map((data: [string, boolean]) => {
        return fs.exists(data[0]).then(exist => {
            exist.should.eql(data[1]);
        });
    }).then(() => {
        return fs.rmdir(target);
    });
});

it('emptyDirSync()', () => {
    const target = join(tmpDir, 'test');

    return createDummyFolder(target).then(() => {
        const files = fs.emptyDirSync(target);
        files.should.have.members([
            'e.txt',
            'f.js',
            join('folder', 'h.txt'),
            join('folder', 'i.js')
        ]);

        return [
            [join(target, '.hidden', 'a.txt'), true],
            [join(target, '.hidden', 'b.js'), true],
            [join(target, '.hidden', 'c', 'd'), true],
            [join(target, 'e.txt'), false],
            [join(target, 'f.js'), false],
            [join(target, '.g'), true],
            [join(target, 'folder', 'h.txt'), false],
            [join(target, 'folder', 'i.js'), false],
            [join(target, 'folder', '.j'), true]
        ];
    }).map((data: [string, boolean]) => {
        return fs.exists(data[0]).then(exist => {
            exist.should.eql(data[1]);
        });
    }).then(() => {
        return fs.rmdir(target);
    });
});

it('emptyDirSync() - ignoreHidden off', () => {
    const target = join(tmpDir, 'test');

    return createDummyFolder(target).then(() => {
        const files = fs.emptyDirSync(target, { ignoreHidden: false });
        files.should.have.members([
            join('.hidden', 'a.txt'),
            join('.hidden', 'b.js'),
            join('.hidden', 'c', 'd'),
            'e.txt',
            'f.js',
            '.g',
            join('folder', 'h.txt'),
            join('folder', 'i.js'),
            join('folder', '.j')
        ]);

        return [
            [join(target, '.hidden', 'a.txt'), false],
            [join(target, '.hidden', 'b.js'), false],
            [join(target, '.hidden', 'c', 'd'), false],
            [join(target, 'e.txt'), false],
            [join(target, 'f.js'), false],
            [join(target, '.g'), false],
            [join(target, 'folder', 'h.txt'), false],
            [join(target, 'folder', 'i.js'), false],
            [join(target, 'folder', '.j'), false]
        ];
    }).map((data: [string, boolean]) => {
        return fs.exists(data[0]).then(exist => {
            exist.should.eql(data[1]);
        });
    }).then(() => {
        return fs.rmdir(target);
    });
});

it('emptyDirSync() - ignorePattern', () => {
    const target = join(tmpDir, 'test');

    return createDummyFolder(target).then(() => {
        const files = fs.emptyDirSync(target, { ignorePattern: /\.js/ });
        files.should.have.members(['e.txt', join('folder', 'h.txt')]);

        return [
            [join(target, '.hidden', 'a.txt'), true],
            [join(target, '.hidden', 'b.js'), true],
            [join(target, '.hidden', 'c', 'd'), true],
            [join(target, 'e.txt'), false],
            [join(target, 'f.js'), true],
            [join(target, '.g'), true],
            [join(target, 'folder', 'h.txt'), false],
            [join(target, 'folder', 'i.js'), true],
            [join(target, 'folder', '.j'), true]
        ];
    }).map((data: [string, boolean]) => {
        return fs.exists(data[0]).then(exist => {
            exist.should.eql(data[1]);
        });
    }).then(() => {
        return fs.rmdir(target);
    });
});

it('emptyDirSync() - exclude', () => {
    const target = join(tmpDir, 'test');

    return createDummyFolder(target).then(() => {
        const files = fs.emptyDirSync(target, { exclude: ['e.txt', join('folder', 'i.js')] });
        files.should.have.members(['f.js', join('folder', 'h.txt')]);

        return [
            [join(target, '.hidden', 'a.txt'), true],
            [join(target, '.hidden', 'b.js'), true],
            [join(target, '.hidden', 'c', 'd'), true],
            [join(target, 'e.txt'), true],
            [join(target, 'f.js'), false],
            [join(target, '.g'), true],
            [join(target, 'folder', 'h.txt'), false],
            [join(target, 'folder', 'i.js'), true],
            [join(target, 'folder', '.j'), true]
        ];
    }).map((data: [string, boolean]) => {
        return fs.exists(data[0]).then(exist => {
            exist.should.eql(data[1]);
        });
    }).then(() => {
        return fs.rmdir(target);
    });
});

it('rmdir()', () => {
    const target = join(tmpDir, 'test');

    return createDummyFolder(target).then(() => {
        return fs.rmdir(target);
    }).then(() => {
        return fs.exists(target);
    }).then(exist => {
        exist.should.be.false;
    });
});

it('rmdir() - callback', callback => {
    const target = join(tmpDir, 'test');

    createDummyFolder(target).then(() => {
        fs.rmdir(target, err => {
            should.not.exist(err);

            fs.exists(target, exist => {
                exist.should.be.false;
                callback();
            });
        });
    });
});

it('rmdirSync()', () => {
    const target = join(tmpDir, 'test');

    return createDummyFolder(target).then(() => {
        fs.rmdirSync(target);
        return fs.exists(target);
    }).then(exist => {
        exist.should.be.false;
    });
});

import { FSWatcher } from 'chokidar';

it('watch()', () => {
    let watcher: FSWatcher;

    return fs.watch(tmpDir).then(watcher_ => {
        watcher = watcher_;

        return new Promise((resolve, reject) => {
            const path = join(tmpDir, 'test.txt');

            watcher.on('add', (path_) => {
                path_.should.eql(path);
                resolve();
            });

            fs.writeFile(path, 'test').catch(reject);
        });
    }).finally(() => {
        if (watcher) watcher.close();
    });
});

it('ensurePath() - file exists', () => {
    const target = join(tmpDir, 'test');

    return Promise.all([
        fs.writeFile(join(target, 'foo.txt'), ''),
        fs.writeFile(join(target, 'foo-1.txt'), ''),
        fs.writeFile(join(target, 'foo-2.md'), ''),
        fs.writeFile(join(target, 'bar.txt'), '')
    ]).then(() => {
        return fs.ensurePath(join(target, 'foo.txt'));
    }).then(path => {
        path.should.eql(join(target, 'foo-2.txt'));
        return fs.rmdir(target);
    });
});

it('ensurePath() - file not exist', () => {
    const target = join(tmpDir, 'foo.txt');

    return fs.ensurePath(target).then(path => {
        path.should.eql(target);
    });
});

it('ensurePath() - callback', callback => {
    const target = join(tmpDir, 'test');

    Promise.all([
        fs.writeFile(join(target, 'foo.txt'), ''),
        fs.writeFile(join(target, 'foo-1.txt'), ''),
        fs.writeFile(join(target, 'foo-2.md'), ''),
        fs.writeFile(join(target, 'bar.txt'), '')
    ]).then(() => {
        fs.ensurePath(join(target, 'foo.txt'), (err, path) => {
            should.not.exist(err);
            path!.should.eql(join(target, 'foo-2.txt'));
            fs.rmdir(target, callback);
        });
    });
});

it('ensurePathSync() - file exists', () => {
    const target = join(tmpDir, 'test');

    return Promise.all([
        fs.writeFile(join(target, 'foo.txt'), ''),
        fs.writeFile(join(target, 'foo-1.txt'), ''),
        fs.writeFile(join(target, 'foo-2.md'), ''),
        fs.writeFile(join(target, 'bar.txt'), '')
    ]).then(() => {
        const path = fs.ensurePathSync(join(target, 'foo.txt'));
        path.should.eql(join(target, 'foo-2.txt'));

        return fs.rmdir(target);
    });
});

it('ensurePathSync() - file not exist', () => {
    const target = join(tmpDir, 'foo.txt');
    const path = fs.ensurePathSync(target);

    path.should.eql(target);
});

it('ensureWriteStream()', () => {
    const target = join(tmpDir, 'foo', 'bar.txt');

    return fs.ensureWriteStream(target).then(stream => {
        stream.path.should.eql(target);
        stream.on('finish', () => {
            return fs.unlink(target);
        });
    });
});

it('ensureWriteStream() - callback', callback => {
    const target = join(tmpDir, 'foo', 'bar.txt');

    fs.ensureWriteStream(target, (err, stream) => {
        should.not.exist(err);
        stream!.path.should.eql(target);
        callback();
    });
});

it('ensureWriteStreamSync()', () => {
    const target = join(tmpDir, 'foo', 'bar.txt');
    const stream = fs.ensureWriteStreamSync(target);

    stream.path.should.eql(target);
    stream.on('finish', () => {
        return fs.rmdir(dirname(target));
    });
});
