
import AssertionError = require('assertion-error');

var e: AssertionError;
var str: string;

function foo () {

}

e = new AssertionError(str);
e = new AssertionError(str, {a:1, b:2});
e = new AssertionError(str, {a:1, b:2}, foo);

