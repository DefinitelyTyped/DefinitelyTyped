// Type definitions for cli-color 2.0
// Project: https://github.com/medikoo/cli-color
// Definitions by: Joel Spadin <https://github.com/ChaosinaCan>
//                 OpportunityLiu <https://github.com/OpportunityLiu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import art = require('./art');
import bare = require('./bare');
import beep = require('./beep');
import columns = require('./columns');
import erase = require('./erase');
import move = require('./move');
import getStrippedLength = require('./get-stripped-length');
import slice = require('./slice');
import strip = require('./strip');
import throbber = require('./throbber');
import reset = require('./reset');
import windowSize = require('./window-size');

declare namespace clc {
    export type Format = bare.Format;
    export type ColumnOptions = columns.ColumnOptions;
    export type ColumnsOptions = columns.ColumnsOptions;
    export interface Color extends Format {

        readonly windowSize: typeof windowSize;
        readonly erase: typeof erase;
        readonly move: typeof move;
        readonly beep: typeof beep;
        readonly columns: typeof columns;
        readonly strip: typeof strip;
        readonly getStrippedLength: typeof getStrippedLength;
        readonly slice: typeof slice;
        readonly throbber: typeof throbber;
        readonly reset: typeof reset;
        readonly art: typeof art;
    }
}

declare const clc: clc.Color;
export = clc;
