import * as path from 'node:path';

path.normalize('/foo/bar//baz/asdf/quux/..');

path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// returns
// '/foo/bar/baz/asdf'

try {
    path.join('foo', 'bar');
} catch (error) { }

path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile');
// Is similar to:
//
// cd foo/bar
// cd /tmp/file/
// cd ..
//    cd a/../subfile
// pwd

path.resolve('/foo/bar', './baz');
// returns
//    '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// returns
//    '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// if currently in /home/myself/node, it returns
//    '/home/myself/node/wwwroot/static_files/gif/image.gif'

path.isAbsolute('/foo/bar'); // true
path.isAbsolute('/baz/..');  // true
path.isAbsolute('qux/');     // false
path.isAbsolute('.');        // false

path.isAbsolute('//server');  // true
path.isAbsolute('C:/foo/..'); // true
path.isAbsolute('bar\\baz');   // false
path.isAbsolute('.');         // false

path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
// returns
//    '..\\..\\impl\\bbb'

path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// returns
//    '../../impl/bbb'

path.dirname('/foo/bar/baz/asdf/quux');
// returns
//    '/foo/bar/baz/asdf'

path.basename('/foo/bar/baz/asdf/quux.html');
// returns
//    'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// returns
//    'quux'

path.extname('index.html');
// returns
//    '.html'

path.extname('index.coffee.md');
// returns
//    '.md'

path.extname('index.');
// returns
//    '.'

path.extname('index');
// returns
//    ''

'foo/bar/baz'.split(path.sep);
// returns
//        ['foo', 'bar', 'baz']

'foo\\bar\\baz'.split(path.sep);
// returns
//        ['foo', 'bar', 'baz']

// $ExpectType "folder\\file.png" | "folder/file.png"
const string = `folder${path.sep}file.png` as const; // tslint:disable-line:no-unnecessary-type-assertion

process.env['PATH']; // $ExpectType string | undefined

path.parse('/home/user/dir/file.txt');
// returns
//    {
//        root : "/",
//        dir : "/home/user/dir",
//        base : "file.txt",
//        ext : ".txt",
//        name : "file"
//    }

path.parse('C:\\path\\dir\\index.html');
// returns
//    {
//        root : "C:\",
//        dir : "C:\path\dir",
//        base : "index.html",
//        ext : ".html",
//        name : "index"
//    }

path.format({
    root: "/",
    dir: "/home/user/dir",
    base: "file.txt",
    ext: ".txt",
    name: "file"
});
// returns
//    '/home/user/dir/file.txt'

path.format({
    root: "/",
    dir: "/home/user/dir",
    ext: ".txt",
    name: "file"
});
// returns
//    '/home/user/dir/file.txt'

path.format({
    dir: "/home/user/dir",
    base: "file.txt"
});
// returns
//    '/home/user/dir/file.txt'

path.posix.format({
    root: "/",
    dir: "/home/user/dir",
    base: "file.txt",
    ext: ".txt",
    name: "file"
});
// returns
//    '/home/user/dir/file.txt'

path.posix.format({
    dir: "/home/user/dir",
    base: "file.txt"
});
// returns
//    '/home/user/dir/file.txt'

path.win32.format({
    root: "C:\\",
    dir: "C:\\home\\user\\dir",
    ext: ".txt",
    name: "file"
});
// returns
//    'C:\home\user\dir\file.txt'

path.win32.format({
    dir: "C:\\home\\user\\dir",
    base: "file.txt"
});
// returns
//    'C:\home\user\dir\file.txt'
