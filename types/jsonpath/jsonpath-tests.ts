import jp = require('jsonpath');

var data: any;

// jp.query()
var authors = jp.query(data, '$..author');
var authors = jp.query(data, '$..author', 2);

// jp.paths()
var paths = jp.paths(data, '$..author');
var paths = jp.paths(data, '$..author', 2);

// jp.nodes()
var nodes = jp.nodes(data, '$..author');
var nodes = jp.nodes(data, '$..author', 2);

// jp.value()
var value = jp.value(data, '$.store..price');
jp.value(data, '$.store..price', 12.5);

// jp.parent()
var parent = jp.parent(data, '$.store..price');

// jp.apply()
var nodes = jp.apply(data, '$..author', (value: string) => { return value.toUpperCase() });

// jp.parse()
var path = jp.parse('$..author');

// jp.stringify()
var pathExpression = jp.stringify(['$', 'store', 'book', 0, 'author']);
