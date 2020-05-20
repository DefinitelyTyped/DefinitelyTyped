// run this in node

import tchecker = require("type-check");

var typeCheck = (i1:string,i2:any,i3?: TypeCheck.Options ) =>  {
  console.log(tchecker.typeCheck(i1,i2,i3));
  } ;
var parseType = (i1:string) =>  {
  var res = tchecker.parseType(i1);
   console.log(res);
   return res;
   } ;
var parsedTypeCheck= (i1:any,i2:any) =>  {
  var res =tchecker.parsedTypeCheck(i1,i2);
  console.log(res);
  return res;
   } ;
var TCVersion= () =>  { console.log(tchecker.VERSION);  } ;



console.log("===>testing typeCheck function");
typeCheck('Number', 1);               // true
typeCheck('Number', 2);               // true
typeCheck('Number', 'str');           // false
typeCheck('Error', new Error);        // true
typeCheck('Undefined', undefined);    // true

console.log("===>testing typeCheck function on Date");
typeCheck('Date', new Date());    // true
typeCheck('Date', new Date("invalid"));    // false

// Comment
typeCheck('count::Number', 1);        // true

// One type OR another type:
typeCheck('Number | String', 2);      // true
typeCheck('Number | String', 'str');  // true

// Wildcard, matches all types:
typeCheck('*', 2) // true

// Array, all elements of a single type:
typeCheck('[Number]', [1, 2, 3]);                // true
typeCheck('[Number]', [1, 'str', 3]);            // false

// Tuples, or fixed length arrays with elements of different types:
typeCheck('(String, Number)', ['str', 2]);       // true
typeCheck('(String, Number)', ['str']);          // false
typeCheck('(String, Number)', ['str', 2, 5]);    // false

// Object properties:
typeCheck('{x: Number, y: Boolean}', {x: 2, y: false});             // true
typeCheck('{x: Number, y: Boolean}',       {x: 2});                 // false
typeCheck('{x: Number, y: Maybe Boolean}', {x: 2});                 // true
typeCheck('{x: Number, y: Boolean}',      {x: 2, y: false, z: 3});  // false
typeCheck('{x: Number, y: Boolean, ...}', {x: 2, y: false, z: 3});  // true

// A particular type AND object properties:
typeCheck('RegExp{source: String, ...}', /re/i);          // true
typeCheck('RegExp{source: String, ...}', {source: 're'}); // false



console.log("===>testing custom types");
// Custom types:
var opt = <TypeCheck.Options> {customTypes:
  {Even: { typeOf: 'Number',
  validate: function(x:number) { console.log("=>testing even");  return x % 2 === 0; }
}}};
typeCheck('Even', 2, opt); // true


opt = <TypeCheck.Options> {customTypes:
{Odd : { typeOf: 'Number',
  validate: function(x:number) { console.log("=>testing odd");return x % 2 !== 0; }
}}};
typeCheck('Odd', 3, opt); // true


console.log("===>testing nested types");
// Nested:
var type = '{a: (String, [Number], {y: Array, ...}), b: Error{message: String, ...}}'
typeCheck(type, {a: ['hi', [1, 2, 3], {y: [1, 'ms']}], b: new Error('oh no')}); // true





console.log("===>testing parseType function");
// parseType(type);
var parsedType = parseType( 'Number'); // object
console.log("===>testing parsedTypeCheck function");
// parsedTypeCheck(parsedType, input, options);
parsedTypeCheck(parsedType, 2);       // true
