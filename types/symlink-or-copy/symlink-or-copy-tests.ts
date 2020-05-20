import * as symlinkOrCopy from 'symlink-or-copy';

symlinkOrCopy.sync('src_dir/some_file.txt', 'dest_dir/some_file.txt');

symlinkOrCopy.canSymlink; // $ExpectType boolean
symlinkOrCopy.canSymlinkDirectory; // $ExpectType boolean
symlinkOrCopy.canSymlinkFile; // $ExpectType boolean
