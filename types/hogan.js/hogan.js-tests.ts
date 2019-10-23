import Hogan = require('hogan.js');

// $ExpectType HoganTemplate
const compiled = Hogan.compile("{{#if}}{{value}}{{/if}}");

// $ExpectType string
Hogan.compile("<%_foo%><%value%><%/foo%>", {
    asString: true,
    sectionTags: [{
        o: '_foo',
        c: 'foo'
    }],
    delimiters: '<% %>',
    disableLambda: true
});

// $ExpectType string
compiled.render({ value: "test" });

// $ExpectType Token[]
const scanned = Hogan.scan("{{#if}}{{value}}{{/if}}");

// $ExpectType Leaf[] || Tree
Hogan.parse(scanned);
