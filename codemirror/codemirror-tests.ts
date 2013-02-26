/// <reference path="codemirror.d.ts" />

var myCodeMirror = CodeMirror(document.body);

var myCodeMirror2 = CodeMirror(document.body, {
    value: "function myScript(){return 100;}\n",
    mode: "javascript"
});

var myTextArea;
var myCodeMirror3 = CodeMirror(function (elt) {
    myTextArea.parentNode.replaceChild(elt, myTextArea);
}, { value: myTextArea.value });

var myCodeMirror4 = CodeMirror.fromTextArea(myTextArea);