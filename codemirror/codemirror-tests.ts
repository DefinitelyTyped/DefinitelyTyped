/// <reference path="codemirror.d.ts" />

var myCodeMirror: CodeMirror.Editor = CodeMirror(document.body);

var myCodeMirror2: CodeMirror.Editor = CodeMirror(document.body, {
    value: "function myScript(){return 100;}\n",
    mode: "javascript"
});

var myTextArea: HTMLTextAreaElement;
var myCodeMirror3: CodeMirror.Editor = CodeMirror(function (elt) {
    myTextArea.parentNode.replaceChild(elt, myTextArea);
}, { value: myTextArea.value });

var myCodeMirror4: CodeMirror.Editor = CodeMirror.fromTextArea(myTextArea);

var doc: CodeMirror.Doc = new CodeMirror.Doc('text');
var doc2: CodeMirror.Doc = CodeMirror(document.body).getDoc();
