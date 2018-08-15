/// <reference types="node" />

import fs = require('fs');
import Mode = require('stat-mode');

fs.stat('/bin/echo', (err, stat) => {
    if (err) throw err;

    const mode = new Mode(stat);
    // $ExpectType Mode
    mode;

    // $ExpectType boolean
    mode.isDirectory();
    mode.isDirectory(false);

    // $ExpectType boolean
    mode.isFIFO();
    mode.isFIFO(false);

    // $ExpectType boolean
    mode.isFile();
    mode.isFile(false);

    // $ExpectType boolean
    mode.isBlockDevice();
    mode.isBlockDevice(false);

    // $ExpectType boolean
    mode.isCharacterDevice();
    mode.isCharacterDevice(false);

    // $ExpectType boolean
    mode.isSocket();
    mode.isSocket(false);

    // $ExpectType boolean
    mode.isSymbolicLink();
    mode.isSymbolicLink(false);

    // $ExpectType Permissions
    mode.owner;
    // $ExpectType boolean
    mode.owner.read;
    // $ExpectType boolean
    mode.owner.write;
    // $ExpectType boolean
    mode.owner.execute;

    // $ExpectType Permissions
    mode.group;
    // $ExpectType boolean
    mode.group.read;
    // $ExpectType boolean
    mode.group.write;
    // $ExpectType boolean
    mode.group.execute;

    // $ExpectType Permissions
    mode.others;
    // $ExpectType boolean
    mode.others.read;
    // $ExpectType boolean
    mode.others.write;
    // $ExpectType boolean
    mode.others.execute;

    // $ExpectType boolean
    mode.setuid;
    // $ExpectType boolean
    mode.setgid;
    // $ExpectType boolean
    mode.sticky;

    // $ExpectType number
    mode.valueOf();
    mode.toString();
    // $ExpectType string
    mode.toOctal();
});
