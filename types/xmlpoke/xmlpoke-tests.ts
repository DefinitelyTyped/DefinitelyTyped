import xmlpoke = require('xmlpoke');
import assert = require('assert');

let result: string;

// add with xpath, value
result = xmlpoke('<a/>', xml => xml.add('/a/b', 'c'));
assert.equal(result, '<a><b>c</b></a>');

// add with xpath, Transform
const addfn: XmlPoke.Transform = (node, value) => 'c';
result = xmlpoke('<a/>', xml => xml.add('/a/b', addfn));
assert.equal(result, '<a><b>c</b></a>');

// add with xpath, CDataValue
const cdataval: XmlPoke.CDataValue = new xmlpoke.CDataValue('c');
result = xmlpoke('<a/>', xml => xml.add('/a/b', cdataval));
assert.equal(result, '<a><b><![CDATA[c]]></b></a>');

// add with xpath, XMLVal
const xmlval = new xmlpoke.XmlString('<c/>');
result = xmlpoke('<a/>', xml => xml.add('/a/b', xmlval));
assert.equal(result, '<a><b><c/></b></a>');

// add with map
result = xmlpoke('<a/>', xml => xml.add({
    '/a/b': 'c'
}));
assert.equal(result, '<a><b>c</b></a>');

// set with xpath, value
result = xmlpoke('<a>b</a>', xml => xml.set('/a', 'c'));
assert.equal(result, '<a>c</a>');

// set with map
result = xmlpoke('<a>b</a>', xml => xml.set({
    '/a': 'c'
}));
assert.equal(result, '<a>c</a>');

// set with xpath that doesn't exist (no-op)
result = xmlpoke('<a><b>bval</b></a>', xml => xml.set('/a/c', 'cval'));
assert.equal(result, '<a><b>bval</b></a>');

// setOrAdd with xpath, value
result = xmlpoke('<a/>', xml => xml.setOrAdd('/a/b', 'c'));
assert.equal(result, '<a><b>c</b></a>');

// setOrAdd with map
result = xmlpoke('<a/>', xml => xml.setOrAdd({
    '/a/b': 'c'
}));
assert.equal(result, '<a><b>c</b></a>');

// setOrAdd with xpath that doesn't exist: add
result = xmlpoke('<a><b>bval</b></a>', xml => xml.setOrAdd('/a/c', 'cval'));
assert.equal(result, '<a><b>bval</b><c>cval</c></a>');

// remove
result = xmlpoke('<a><b/></a>', xml => xml.remove('//b'));
assert.equal(result, '<a/>');

// clear
result = xmlpoke('<a><b/></a>', xml => xml.clear('/a'));
assert.equal(result, '<a/>');

// withBasePath, addNamespace, errorOnNoMatches
result = xmlpoke('<test><x><![CDATA[hello]]></x></test>', xml =>
    xml.withBasePath('/test')
       .addNamespace('x', 'http://example.com/x')
       .errorOnNoMatches()
       .set('/x', (node, value) => {
            assert.equal(typeof node, 'object');
            assert.equal((node.constructor as any).name, 'Element');
            assert.equal(value, 'hello');
            return 'y';
       }));
assert.equal(result, '<test><x>y</x></test>');

// ensure
result = xmlpoke('</a>', xml => xml.ensure('a/b'));
assert.equal(result, '<a><b/></a>');
