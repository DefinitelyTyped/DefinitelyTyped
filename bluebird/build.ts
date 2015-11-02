// Run this script to build multiple versions of the bluebird definition, intended for use in different environments.

/// <reference path="../node/node.d.ts" />
import fs = require('fs');
import path = require('path');


function stripLeadingWhitespace(str: string) {
    const leadingWhitespaceMatch = str.match(/^\n[ \t]*/);
    // Note: assuming that leadingWhitespaceMatch doesn't have any special regex characters like . or (
    return leadingWhitespaceMatch
        ? str.replace(new RegExp(leadingWhitespaceMatch[0], 'g'), '\n')
        : str;
}

function permutationComment(message) {
    return stripLeadingWhitespace(`
    /* --DECLARATION-PERMUTATION--
     *
     * ${message}
     */
    `);
}

const permutationCommentRegex = /\/\* --DECLARATION-PERMUTATION--[\s\S]*?\*\//;

var source = fs.readFileSync(path.join(__dirname, 'bluebird.d.ts'), 'utf8');

var code = source;

// Change the header comment
code = code.replace(permutationCommentRegex, permutationComment('This version of the definition creates a global `Promise` class.'));

// Replace `BluebirdPromise` with `Promise`
code = code.replace(/\bBluebirdPromise\b/g, 'Promise');

fs.writeFileSync('bluebird-global-es5.d.ts', code);
