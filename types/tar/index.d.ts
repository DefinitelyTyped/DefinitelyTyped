// Type definitions for tar 6.1
// Project: https://github.com/npm/node-tar
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>,
//                 Connor Peet <https://github.com/connor4312>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

// high-level commands
import create = require('./lib/create');
import replace = require('./lib/replace');
import list = require('./lib/list');
import update = require('./lib/update');
import extract = require('./lib/extract');

// classes
import Pack = require('./lib/pack');
import Unpack = require('./lib/unpack');
import Parse = require('./lib/parse');
import ReadEntry = require('./lib/read-entry');
import WriteEntry = require('./lib/write-entry');
import Header = require('./lib/header');
import Pax = require('./lib/pax');
import types = require('./lib/types');

declare namespace tar {
    export {
        create,
        create as c,
        replace,
        replace as r,
        list,
        list as t,
        update,
        update as u,
        extract,
        extract as x,
        Pack,
        Unpack,
        Parse,
        ReadEntry,
        WriteEntry,
        Header,
        Pax,
        types,
    };
}

interface Tar {
    create: typeof create;
    replace: typeof replace;
    list: typeof list;
    update: typeof update;
    extract: typeof extract;

    c: typeof create;
    r: typeof replace;
    t: typeof list;
    u: typeof update;
    x: typeof extract;

    Pack: typeof Pack;
    Unpack: typeof Unpack;
    Parse: typeof Parse;
    ReadEntry: typeof ReadEntry;
    WriteEntry: typeof WriteEntry;
    Header: typeof Header;
    Pax: typeof Pax;

    types: types;
}

declare const tar: Tar;

export = tar;
