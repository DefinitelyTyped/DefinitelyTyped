import postcss, { Result } from 'postcss';
import lostgrid = require('lost');

const css = 'div { lost-column: 1/3 }';
postcss([lostgrid]).process(css);

// Import all lib functions
import lostAlign = require('lost/lib/lost-align');
import lostAtRule = require('lost/lib/lost-at-rule');
import lostCenter = require('lost/lib/lost-center');
import lostColumn = require('lost/lib/lost-column');
import lostFlexContainer = require('lost/lib/lost-flex-container');
import lgGutter = require('lost/lib/lg-gutter');
import lostMasonryColumn = require('lost/lib/lost-masonry-column');
import lostMasonryWrap = require('lost/lib/lost-masonry-wrap');
import lostMove = require('lost/lib/lost-move');
import lostOffset = require('lost/lib/lost-offset');
import lostRow = require('lost/lib/lost-row');
import lostUtility = require('lost/lib/lost-utility');
import lostVarsGutterLocal = require('lost/lib/lost-vars-gutter-local');
import lostVarsGutter = require('lost/lib/lost-vars-gutter');
import lostVars = require('lost/lib/lost-vars');
import lostWaffle = require('lost/lib/lost-waffle');

const libs = [
    lostAlign,
    lostAtRule,
    lostCenter,
    lostColumn,
    lostFlexContainer,
    lgGutter,
    lostMasonryColumn,
    lostMasonryWrap,
    lostMove,
    lostOffset,
    lostRow,
    lostUtility,
    lostVarsGutterLocal,
    lostVarsGutter,
    lostVars,
    lostWaffle,
];

const root = postcss.root();
declare const result: Result;

// Test that libs can be passed all 3 arguments
for (const lib of libs) {
    lib(root, {}, result);
}

// lib/core exports from version 9.0
// lg-logic
import { calcValue, validateUnit, parseLostProperty } from 'lost/lib/core/lg-logic';
calcValue('0');
calcValue('0', '0');
calcValue('0', '0', '0');
calcValue('0', '0', '0', '0');

validateUnit('abc', ['abc', 'def']);

parseLostProperty(root.nodes, 'type', 'decl');

// lg-new-block
import newBlock = require('lost/lib/core/lg-new-block');
newBlock(root, '*', ['a', 'b', 'c'], ['d', 'e', 'f']);

// lg-utilities
import {
    getColorValue,
    extractRgbSubstring,
    glueFractionMembers,
    hToD,
    safeHexToRgb,
    safeRgbToRgb,
} from 'lost/lib/core/lg-utilities';

getColorValue('abc');

extractRgbSubstring('255,255,255');

glueFractionMembers('abc');

hToD();
hToD(0);
hToD(0, 1);

safeHexToRgb('ffffff');

safeRgbToRgb('255,255,255');
