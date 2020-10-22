import fs = require('fs');
import mock = require('mock-fs');
import path = require('path');

import FileSystem = require('mock-fs/lib/filesystem');
import Item = require('mock-fs/lib/item');
import File = require('mock-fs/lib/file');
import Directory = require('mock-fs/lib/directory');
import SymbolicLink = require('mock-fs/lib/symlink');

// Allow empty call.
mock();

// Allow empty object.
mock({});

mock({
    'path/to/fake/dir': {
        'some-file.txt': 'file content here',
        'empty-dir': {
            /** empty directory */
        },
    },
    'path/to/some.png': Buffer.from([8, 6, 7, 5, 3, 0, 9]),
    'some/other/path': {
        /** another empty directory */
    },
});

mock({
    'path/to/file.txt': 'file content here',
});

mock({
    'path/to/real/file.txt': mock.load(path.resolve(__dirname, 'OTHER_FILES.txt')),
});

mock({
    'path/to/real/not-lazy/file.txt': mock.load(path.resolve(__dirname, 'OTHER_FILES.txt'), { lazy: false }),
});

mock({
    '/tmp': mock.load('/tmp/special_tmp_files', { lazy: false, recursive: false }),
});

mock({
    'OTHER_FILES.txt': mock.load(path.resolve(__dirname, 'OTHER_FILES.txt')),
});

mock.bypass(() => fs.readFileSync(path.resolve(__dirname, 'OTHER_FILES.txt')).toString());

mock({
    foo: mock.file({
        content: 'file content here',
        ctime: new Date(1),
        mtime: new Date(1),
    }),
});

// note that this could also be written as
// mock({'path/to/dir': { /** config */ }})
mock({
    path: {
        to: {
            dir: {
                file1: 'text content',
                file2: Buffer.from([1, 2, 3, 4]),
            },
        },
    },
});

mock({
    'some/dir': mock.directory({
        mode: parseInt('0755', 8),
        items: {
            file1: 'file one content',
            file2: Buffer.from([8, 6, 7, 5, 3, 0, 9]),
        },
    }),
});

mock({
    'some/dir': {
        'regular-file': 'file contents',
        'a-symlink': mock.symlink({
            path: 'regular-file',
        }),
    },
});

mock(
    {
        'path/to/file.txt': 'file content here',
    },
    {
        createTmp: true,
        createCwd: false,
    },
);

// Combined case to check nesting.
mock(
    {
        'path/to/fake/dir': {
            'some-file.txt': 'file content here',
            'some-other-file.txt': mock.file({
                content: 'apricot banana guava',
                mode: 0o766,
            }),
            'my-file.txt': mock.symlink({
                path: './some-file.txt',
            }),
            'empty-dir': {
                /** empty directory */
            },
        },
        'path/to/some.png': Buffer.from([8, 6, 7, 5, 3, 0, 9]),
        'some/other/path': {
            /** another empty directory */
        },
        dir: mock.directory({
            mode: parseInt('0755', 8),
            items: {
                'diary.txt': mock.symlink({
                    path: 'diary-2019.txt',
                }),
                'diary-2019.txt': 'Sunny Day in April',
            },
        }),
    },
    {
        createTmp: true,
        createCwd: false,
    },
);

// $ExpectType string[]
FileSystem.getPathParts('path/to/some/file.txt');

const item = new Item();

function checkItem(item: Item) {
    // $ExpectType boolean
    item.canExecute();
    // $ExpectType boolean
    item.canRead();
    // $ExpectType boolean
    item.canWrite();

    item.setATime(new Date());
    // $ExpectType Date
    item.getATime();

    item.setBirthtime(new Date());
    // $ExpectType Date
    item.getBirthtime();

    item.setCTime(new Date());
    // $ExpectType Date
    item.getCTime();

    item.setMTime(new Date());
    // $ExpectType Date
    item.getMTime();

    item.setATime(new Date());
    // $ExpectType Date
    item.getATime();

    item.setMode(0o777);
    // $ExpectType number
    item.getMode();

    item.setGid(2000);
    // $ExpectType number
    item.getGid();

    item.setUid(1000);
    // $ExpectType number
    item.getUid();

    // $ExpectType Stats
    item.getStats();
}

interface ExtendedItem extends Item {
    getStats(): Item.ExtendedStats;
}

function checkExtendedStats(item: ExtendedItem) {
    // $ExpectType ExtendedStats
    item.getStats();

    checkItem(item);
}

function checkFile(file: File) {
    file.setContent('ob la di, ob la da');

    // $ExpectType Buffer
    file.getContent();

    checkExtendedStats(file);
}

function checkDirectory(dir: Directory) {
    // $ExpectType File
    dir.addItem('foo', new File());
    // $ExpectType Directory
    dir.addItem('bar', new Directory());
    // $ExpectType SymbolicLink
    dir.addItem('baz', new SymbolicLink());

    // $ExpectType Item | null
    dir.getItem('foo');

    // $ExpectType Item
    dir.removeItem('baz');

    // $ExpectType string[]
    dir.list();

    checkExtendedStats(dir);
}

function checkSymlink(symlink: SymbolicLink) {
    symlink.setPath('./abc');

    // $ExpectType string
    symlink.getPath();

    checkExtendedStats(symlink);
}

checkFile(mock.file({})());
checkFile(new File());

checkDirectory(mock.directory({})());
checkDirectory(new Directory());

checkSymlink(mock.symlink({ path: 'blah' })());
checkSymlink(
    (() => {
        const symlink = new SymbolicLink();
        symlink.setPath('blaj');
        return symlink;
    })(),
);

mock.restore();
