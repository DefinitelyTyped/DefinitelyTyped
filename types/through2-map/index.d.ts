// Type definitions for through2-map 3.0
// Project: https://github.com/brycebaril/through2-map
// Definitions by: Lucas Hill <https://github.com/LucasHill>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import through2 = require('through2');
import stream = require('stream');

type MapCallback = (chunk: any, index: number) => void;

interface Through2MapOptions extends stream.DuplexOptions {
    wantStrings?: boolean;
}

declare function through2_map(options?: Through2MapOptions, fn?: MapCallback): through2.Through2Constructor;
declare function through2_map(fn?: MapCallback): through2.Through2Constructor;

declare namespace through2_map {
    function ctor(options?: Through2MapOptions, fn?: MapCallback): through2.Through2Constructor;
    function ctor(fn?: MapCallback): through2.Through2Constructor;

    function obj(options?: Through2MapOptions, fn?: MapCallback): through2.Through2Constructor;
    function obj(fn?: MapCallback): through2.Through2Constructor;

    function objCtor(options?: Through2MapOptions, fn?: MapCallback): through2.Through2Constructor;
    function objCtor(fn?: MapCallback): through2.Through2Constructor;
}

export = through2_map;
