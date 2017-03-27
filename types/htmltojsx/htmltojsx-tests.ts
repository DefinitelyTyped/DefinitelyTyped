import HTMLtoJSX = require("htmltojsx");
var converter = new HTMLtoJSX({
  createClass: true,
  outputClassName: 'AwesomeComponent'
});
var output = converter.convert('<div>Hello world!</div>');
