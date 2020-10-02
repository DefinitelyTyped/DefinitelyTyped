import * as yamlFront from 'yaml-front-matter';

const hello = yamlFront.loadFront('Hello World').__content;

const world = yamlFront.loadFront('Hello World', {
    contentKeyName: 'fileContents'
}).fileContents;

const input = `---
post: title one
anArray:
 - one
 - two
subObject:
 prop1: cool
 prop2: two
reg: !!js/regexp /pattern/gim
fun: !!js/function function() {  }
---
content
more`;

const results = yamlFront.loadFront(input);

console.log(JSON.stringify(results)); // "{"post":"title one","anArray":["one","two"],"subObject":{"obj1":"cool","obj2":"two"},"reg":{},"fun":[null],"__content":"\ncontent\nmore"}"
