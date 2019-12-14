/// <reference types="../../../../codemirror/addon/edit/closebrackets" />

var myCodeMirror: CodeMirror.Editor = CodeMirror(document.body, {
    autoCloseBrackets: "()[]{}''\"\""
});

var myCodeMirror2: CodeMirror.Editor = CodeMirror(document.body, {
    autoCloseBrackets: true
});
