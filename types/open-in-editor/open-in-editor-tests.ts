import openInEditor = require("open-in-editor");

const editor = openInEditor.configure({}, function(err) {
    // $ExpectType Error
    err;
});

editor.open("path/to/file.js:3:10")
    .then(function() {
        // Success
    }, function(err) {
        // Error
    });

openInEditor.configure({
    editor: "code",
    cmd: "/path/to/editor/app",
    pattern: "-r -g {filename}:{line}:{column}",
    column: 1,
    line: 1,
});
