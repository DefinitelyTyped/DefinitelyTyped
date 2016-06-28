// Tests for JSONEditorOnline type definitions
///<reference path="jsoneditoronline.d.ts" />

var container: HTMLElement;

var options:JSONEditorOptions = {
    "search": true
};
var editor:JSONEditor = new JSONEditor(container, options);
var json = {
    "Array": [1, 2, 3],
    "Boolean": true, 
    "Null": null, 
    "Number": 123, 
    "Object": {"a": "b", "c": "d"},
    "String": "Hello World"
};
editor.set(json);
editor.expandAll();
console.log(JSONEditor.getInternetExplorerVersion());

var jsonResult:any = editor.get();

var options2: JSONFormatterOptions = {
    indentation: 2
};
var formatter: JSONFormatter = new JSONFormatter(container, options);
var json2 = {
    "Array": [1, 2, 3],
    "Boolean": true, 
    "Null": null, 
    "Number": 123, 
    "Object": {"a": "b", "c": "d"},
    "String": "Hello World"
};
formatter.set(json2);

var jsonResult2:any = formatter.get();