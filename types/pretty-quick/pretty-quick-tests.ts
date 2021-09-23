/// <reference types="node" />
import mri = require('mri');

import prettyQuick = require('pretty-quick');
const args = mri(process.argv.slice(2));

const prettyQuickResult = prettyQuick(process.cwd(), {
    ...args,
    onFoundSinceRevision: (scm, revision) => {
        scm; // $ExpectType string
        revision; // $ExpectType string
    },

    onFoundChangedFiles: changedFiles => {
        changedFiles; // $ExpectType string[]
    },

    onPartiallyStagedFile: file => {
        file; // $ExpectType string
    },

    onWriteFile: file => {
        file; // $ExpectType string
    },

    onCheckFile: (file, isFormatted) => {
        file; // $ExpectType string
        isFormatted; // $ExpectedType boolean
    },

    onExamineFile: file => {
        file; // $ExpectType string
    },
});

prettyQuickResult.success; // $ExpectType boolean
prettyQuickResult.errors; // $ExpectType string[]

if (prettyQuickResult.success) {
    prettyQuickResult.success; // $ExpectType true
} else {
    prettyQuickResult.success; // $ExpectType false
    process.exit(1);
}
