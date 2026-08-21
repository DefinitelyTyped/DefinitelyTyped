import prettyQuick = require("pretty-quick");

const prettyQuickResult = prettyQuick("./cwd", {
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

    otherProp: "otherProp",
});

{
    prettyQuick("/sub-directory/", {
        since: "banana",
        onWriteFile: file => {},
        ignorePath: "/.ignorePath",
    });
}

prettyQuickResult.success; // $ExpectType boolean
prettyQuickResult.errors; // $ExpectType string[]

if (prettyQuickResult.success) {
    prettyQuickResult.success; // $ExpectType true
} else {
    prettyQuickResult.success; // $ExpectType false
}
