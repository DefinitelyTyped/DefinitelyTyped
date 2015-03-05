/// <reference path="./json-path-processor.d.ts" />

import jpp = require('json-path-processor');

// I wanna update all product title 
function something(V: any) { return V; }
var data: any = jpp(data).each('product.title', (V) => {
  return something(V);
}).value();
 
// Ya, handle all product title and promotion description 
// almost all jpp methods are chainable 
function someUtilFunc(V: any) { return V; }
data = jpp(data).each('extra.promotion', (O) => {
  var someValue = 'hoge fuga';
  O.description = someValue;
  return O;
}).each('product.title', someUtilFunc).value();


function assignProductDefault(V: any) { return V ? V : 'default'; }
function changeProductDetail(V: any) { return '[' + V + ']'; }
// jpp play on the object reference so you even do not need to assign back! 
jpp(data).each('product', assignProductDefault);
jpp(data).each('product', changeProductDetail);
console.log(data);
 
// chaining is cool, right? 
jpp(data)
  .each('product', assignProductDefault)
  .each('product.title', changeProductDetail);
console.log(data);


// jpp(data) : create the JPP chainning object by data.
var J = jpp(['any', 'data', {or: {recursive: 'object'}}]);

// jpp(data, path) : a shortcut of jpp(data).value(path)
console.log(jpp({a: {b: 'OK'}}, 'a.b')); // will get 'OK'
console.log(jpp({a: {b: 'OK'}}, 'a.c.d')); // will get

// .value(path) : get value by JSON path. This method can not be chainned. When path is undefined or '' or '$', get whole data.
console.log(jpp([1, 3, 5]).value()); // will get [1, 3, 5]
console.log(jpp({a: {b: 'OK'}}).value('a.b')); // will get 'OK'
console.log(jpp({a: {b: 'OK'}}).value('a.c.d')); // will get

// .get(path) : get new JPP object by JSON path. All chainned methods on this is different from root object.
console.log(jpp({a: {b: 'OK'}}).get('a').get('b').value()); // will get 'OK'

// .set(path, value, create) : set new value by JSON path. When value is a function, execute the function with first argument as old value. the return value of the callback function will be assigned. When create exists, create new object by the JSON path, and create will be used as default value to be assigned when the callback function throws exception.
// will get {a: {b: 'OK', c:[1, 3]}} 
console.log(jpp({a: {b: 'OK', c: [1, 4]}}).set('a.c.1', 3).value());
// will get {a: {b: 'BAD', c:[1, 4]}} 
console.log(jpp({a: {b: 'OK', c: [1, 4]}}).set('a.b', 'BAD').value());
// will get {a: {b: 'OK', c:[1, 4]}} 
console.log(jpp({a: {b: 'OK', c: [1, 4]}}).set('a.b.c.d', 'OK?').value());
// set failed ... WE CAN NOT CONVERT ARRAY TO OBJECT 
console.log(jpp({a: {b: 'OK', c: [1, 4]}}).set('a.b.c.d', 'OK?', true).value());
// a.b.c[2 ~ 9] will become  ... ARRAY SIZE AUTO EXPEND IN JAVASCRIPT 
console.log(jpp({a: {b: 'OK', c: [1, 4]}}).set('a.c.10', 'OK?', true).value());

// .copy(from, to, skip) : copy value from one JSON path to another. When the JSON path not found, new object will be created. To prevent new object creation, pass skip as true as 3rd param.
// will get {a: {b: 'OK', c:[1, 4], d: 4}} 
console.log(jpp({a: {b: 'OK', c: [1, 4]}}).copy('a.c.1', 'a.d').value());

// .del(path) : delete a key by JSON path. When the path exists, last key will be deleted; when it do not exist, do nothing.
// will get {a: {b: 'OK', c: [1, 4]}} 
console.log(jpp({a: {b: 'OK', c: [1, 4]}}).del('a.b.c').value());
// will get {a: {b: {}} 
console.log(jpp({a: {b: {c: {d: 2, q: 1}}}}).del('a.b.c').value());

// .move(from, to) : move values from a path to another. when the origin path not found, do nothing.
// will get {a: {b: 'OK', d: [1, 4]}} 
console.log(jpp({a: {b: 'OK', c: [1, 4]}}).move('a.c', 'a.d').value());

// .range(path, args...) : Work like lodash.range() , create range and set the array into the path.
// will get {a: {b: 1, c: [0, 1, 2]}} 
console.log(jpp({a: {b: 1}}).range('a.c', 3).value());
// will get {a: {b: 1, c: [3, 4]}} 
console.log(jpp({a: {b: 1}}).range('a.c', 3, 5).value());
// will get {a: {b: 1, c: [2, 5, 8, 11]}} 
console.log(jpp({a: {b: 1}}).range('a.c', 2, 12, 3).value());

// .find(path, args...) : JPP wraped version of lodash.find() , return the value. This method can not be chainned.
// will get 3 
console.log(jpp({a: {b: [0, 3, 4]}}).find('a.b', function (O) {return O%2 > 0}));

// .findLast(path, args...) : JPP wraped version of lodash.findLast() , return the value. This method can not be chainned.
// will get 5 
console.log(jpp({a: {b: [1, 3, 4, 5]}}).find('a.b', function (O) {return O%2 > 0}));

// .each(path, function (value, key) {...}) : Works like Array.map(), the callback arguments are: value, index. The return value of callback will be assigned back to JPP object. You can apply second callback function for fallback when the path is not found or not array. When your callback return undefined or throws, the item in array will not be changed.
console.log(jpp({a: {b: [1, 3, 5]}}).each('a.b', function (V) {
    return V * 2;
}).value());  // will get {a: {b: [2, 6, 10]}} 
console.log(jpp({a: {b: [1, 3, 5]}}).each('a.b', function (V, I) { // I as index 
    return V * I;
}).value());  // will get {a: {b: [0 , 3, 10]}} 
// fallback when a.c is not array or not object or not found 
console.log(jpp({a: {b: [1, 3, 5]}}).each('a.c', function (V, I) {
    return V * I;
}, function (O) {
    return 'ERROR'
}).value());  // will get {a: {b: [1 , 3, 5], c: 'ERROR'}} 

// .forIn(path, function (value, key) {...}) : Works like for (I in O), the callback arguments are: value, key. The return value of callback will be assigned back to JPP object. You can apply second callback function for fallback when the path is not found or not object. When your callback return undefined or throws, the item in object will not be changed.
// will get {a: 'OK!', b: 'BAD!', length: '9!'}  
// forIn() will not think object with length property as array. 
console.log(jpp({a: 'OK', b: 'BAD', length: 9}).forIn('$', function (V, I) {
    return V + '!';
}).value()); 
// fallback when a.c is not array or not object or not found 
console.log(jpp({a: {b: [1, 3, 5]}}).forIn('a.c', function (V, I) {
    return V + I;
}, function (O) {
    return 'ERROR'
}).value());  // will get {a: {b: [1, 3, 5], c: 'ERROR'}} 

// .filter(path, function (value, key) {...}) : Works like Array.filter() but also works well on object. the callback are: value, index|key. The filtered result will be assigned back to JPP object.
// will get {a: {b: {c: [3, 5], d:5}}} 
console.log(jpp({a: {b: {c: [2, 3, 4, 5], d: 5}}}).filter('a.b.c', function (V) {
    return V % 2 > 0;
}).value()); 

// .concat(path, path, path ...) : search for all values by proviced JSON path, then concat all arraies into one. None array value will be skipped. When array size >= 1, assign the concated array back to first path. Or, do nothing.
// will get {a: {b: {c: [1, 3], d:5}, d: [1, 3, 1,3]}} 
console.log(jpp({a: {b: {c: [1, 3], d: 5}}}).concat('a.d', 'a.b.c', 'a.b.c').value());

