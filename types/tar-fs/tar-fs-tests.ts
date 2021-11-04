import tar = require("tar-fs");
import fs = require("fs");
import path = require("path");

/*
 * Default test
 */
// packing a directory
tar.pack('./my-directory').pipe(fs.createWriteStream('my-tarball.tar'));

// extracting a directory
fs.createReadStream('my-other-tarball.tar').pipe(tar.extract('./my-other-directory'));

// extracting a directory and stripping the first level
fs.createReadStream('my-other-tarball.tar').pipe(tar.extract('./my-other-directory', { strip: 1 }));

/*
 * Ignore various files
 */
tar.pack('./my-directory', {
    ignore: (name) => {
        return path.extname(name) === '.bin'; // ignore .bin files when packing
    }
});

tar.extract('./my-other-directory', {
    ignore: (name) => {
        return path.extname(name) === '.bin'; // ignore .bin files inside the tarball when extracing
    }
});

tar.extract('./my-other-other-directory', {
    ignore: (_, header) => {
        // pass files & directories, ignore e.g. symlinks
        return header.type !== 'file' && header.type !== 'directory';
    }
});

/*
 * Specify which entries to pack
 */
tar.pack('./my-directory', {
    entries: ['file1', 'subdir/file2'], // only the specific entries will be packed
});

/*
 * Modify the headers by map
 */
tar.pack('./my-directory', {
    map: (header) => {
        header.name = 'prefixed/' + header.name;
        return header;
    }
});

tar.extract('./my-directory', {
    map: (header) => {
        header.name = 'another-prefix/' + header.name;
        return header;
    }
});

/*
 * Modify the headers by mapStream
 */
tar.pack('./my-directory', {
    mapStream: (fileStream, header) => {
        if (path.extname(header.name) === '.js') {
            return fileStream;
        }
        return fileStream;
    }
});

tar.extract('./my-directory', {
    mapStream: (fileStream, header) => {
        if (path.extname(header.name) === '.js') {
            return fileStream;
        }
        return fileStream;
    }
});

/*
 * The corresponding modes
 */
tar.extract('./my-directory', {
    dmode: parseInt("555", 8),
    fmode: parseInt("444", 8),
    readable: true,
    writable: true,
});

/*
 * The other options
 */
tar.pack('./my-directory', {
    strict: false,
    dereference: true,
});

/*
 * Return type of tar-stream
 */
tar.pack('./my-directory').entry({ name: 'generated-file.txt' }, '1234');
tar.pack('./my-directory').finalize();

/**
 * Interact with tar-stream and do multiple packs
 */
tar.pack('./my-directory', {
  finalize: false,
  finish: (parentPack) => {
    tar.pack('./other-directory', {
      pack: parentPack
    });
  }
});
