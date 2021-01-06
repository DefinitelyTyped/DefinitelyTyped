#!/usr/bin/env ts-node-script
/// <reference types="node"/>
import path = require('path');
import fs = require('fs');

import { BASE_INTRINSICS, LEGACY_ALIASES, BASE_INTRINSIC_DATA } from './intrinsics-data';
import { IntrinsicsWriter } from './intrinsics-writer';

const OUT_FILE_PATH = path.resolve(__dirname, '..', 'internal', 'intrinsics.d.ts');
const GENERATED_MARKER = '\n// ------------------------ >8 ------------------------';

const fileHead = (() => {
    let fh = fs.readFileSync(OUT_FILE_PATH, { encoding: 'utf-8' });

    const markerIndex = fh.indexOf(GENERATED_MARKER);
    if (markerIndex < 0) {
        throw new Error('Cannot find GENERATED_MARKER in internal/intrinsics.d.ts');
    }

    fh = fh.substring(0, markerIndex + GENERATED_MARKER.length);
    return fh;
})();

const outStream = fs.createWriteStream(OUT_FILE_PATH, { encoding: 'utf-8' });
outStream.write(fileHead);

new IntrinsicsWriter(outStream).printIntrinsics(
    {
        baseIntrinsics: BASE_INTRINSICS,
        baseIntrinsicData: BASE_INTRINSIC_DATA,
        legacyAliases: LEGACY_ALIASES,
    },
    {
        skipLegacyNested: true,
        nsWrapper: null,
    },
);

outStream.close();
