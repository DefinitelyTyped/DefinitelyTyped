import * as JSON3 from "json3";

const obj = JSON3.parse('{ "a" : { "b" : [1, 2] } }');
const str = JSON3.stringify(obj, null, "\t");
console.log(str);
