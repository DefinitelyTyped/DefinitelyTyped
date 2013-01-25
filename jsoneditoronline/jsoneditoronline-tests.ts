// Tests for JSONEditorOnline type definitions
///<reference path="jsoneditoronline.d.ts" />

var options:JSONEditorOptions = {
    "search": true
};
var editor:JSONEditor = new JSONEditor(container, options);
var json:JSON = {
    "Array": [1, 2, 3],
    "Boolean": true, 
    "Null": null, 
    "Number": 123, 
    "Object": {"a": "b", "c": "d"},
    "String": "Hello World"
};
editor.set(json);
editor.expandAll();

var json2:JSON = editor.get(json);