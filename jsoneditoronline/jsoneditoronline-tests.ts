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

var jsonResult:JSON = editor.get(json);

var options2: JSONformatterOptions = {
    "indentation": 2
};
var formatter:JSONFormatter = new JSONFormatter(container, options);
var json2:JSON = {
    "Array": [1, 2, 3],
    "Boolean": true, 
    "Null": null, 
    "Number": 123, 
    "Object": {"a": "b", "c": "d"},
    "String": "Hello World"
};
formatter.set(json2);

var jsonResult2:JSON = formatter.get(json2);