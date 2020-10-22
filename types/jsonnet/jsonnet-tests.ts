import Jsonnet = require('jsonnet');
var jsonnet = new Jsonnet();
var code = '{a:1}';
var result = jsonnet.eval(code);
console.log(result);
