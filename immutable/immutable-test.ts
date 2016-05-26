/// <reference path="./immutable.d.ts" />
/// <reference path="../node/node.d.ts" />

import * as Immutable from "immutable";
import * as assert from "assert";

() => {
  let obj = {a:1, b:2};
  let iObj1 = Immutable.fromJS(obj);
  let iObj2 = Immutable.fromJS(obj);
  let equal = Immutable.is(iObj1, iObj2)
  if(!equal) throw "Error while testing Immutable.is";

  let list = [1,2,3,4];
  let iList = Immutable.List(list);
  if(iList.size !== 4) throw "Error while testing Immutable.List";
  if(iList.get(0) !== 1) throw "Error while testing Immutable.List";

  let map = {a:1, b:1};
  let iMap = Immutable.Map<string, number>(map);
  if(iMap.size !== 2) throw "Error while testing Immutable.Map";
  if(iMap.get('a') !== 1) throw "Error while testing Immutable.Map";

  let Record = Immutable.Record({a:1, b:2});
  let rec1 = new Record();
  let rec2 = new Record({a:10});
  if(rec1.get('a') !== 1) throw "Error while testing Immutable.Record";
  if(rec2.get('a') !== 10) throw "Error while testing Immutable.Record";
}

() => {
  var map1: Immutable.Map<string, number>;
  map1 = Immutable.Map({a:1, b:2, c:3});
  var map2 = map1.set('b', 50);
  map1.get('b'); // 2
  map2.get('b'); // 50
}

() => {
  var map1 = Immutable.Map({a:1, b:2, c:3});
  var map2 = map1.set('b', 2);
  assert(map1.equals(map2) === true);
  var map3 = map1.set('b', 50);
  assert(map1.equals(map3) === false);
}

() => {
  var map1 = Immutable.Map({a:1, b:2, c:3});
  var clone = map1;
}

() => {
  var list1 = Immutable.List.of(1, 2);
  var list2 = list1.push(3, 4, 5);
  var list3 = list2.unshift(0);
  var list4 = list1.concat(list2, list3);
  assert(list1.size === 2);
  assert(list2.size === 5);
  assert(list3.size === 6);
  assert(list4.size === 13);
  assert(list4.get(0) === 1);

  var alpha = Immutable.Map({a:1, b:2, c:3, d:4});
  alpha.map((v, k) => k.toUpperCase()).join();
}

() => {
  var map1 = Immutable.Map({a:1, b:2, c:3, d:4});
  var map2:Immutable.Iterable<any, any> = Immutable.Map({c:10, a:20, t:30});
  var obj:{[key:string]:number} = {d:100, o:200, g:300};
  var map3 = map1.merge(obj);
  var map3 = map1.merge(map2);

  var myObject = {a:1,b:2,c:3};
  Immutable.Seq(myObject).map((x: number) => x * x).toObject();
}

() => {
  var obj = { 1: "one" };
  Object.keys(obj); // [ "1" ]
  obj["1"]; // "one"
  obj[1];   // "one"

  var map = Immutable.fromJS(obj);
  map.get("1"); // "one"
  map.get(1);   // undefined
}

() => {
  var deep = Immutable.Map({ a: 1, b: 2, c: Immutable.List.of(3, 4, 5) });
  deep.toObject() // { a: 1, b: 2, c: List [ 3, 4, 5 ] }
  deep.toArray() // [ 1, 2, List [ 3, 4, 5 ] ]
  deep.toJS() // { a: 1, b: 2, c: [ 3, 4, 5 ] }
  JSON.stringify(deep) // '{"a":1,"b":2,"c":[3,4,5]}'
}

() => {
  let foo: Immutable.Map<any, any>;
  // ES6
  foo.map(x => x * x);
  // ES3
  foo.map(function (x) { return x * x; });
}

() => {
  var nested = Immutable.fromJS({a:{b:{c:[3,4,5]}}});
  // Map { a: Map { b: Map { c: List [ 3, 4, 5 ] } } }

  var nested2 = nested.mergeDeep({a:{b:{d:6}}});
  // Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 6 } } }
  nested2.getIn(['a', 'b', 'd']); // 6

  var nested3 = nested2.updateIn(['a', 'b', 'd'], (value: any) => value + 1);
  // Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 7 } } }

  var nested4 = nested3.updateIn(['a', 'b', 'c'], (list: any) => list.push(6));
  // Map { a: Map { b: Map { c: List [ 3, 4, 5, 6 ], d: 7 } } }
}

() => {
  var oddSquares = Immutable.Seq.of(1,2,3,4,5,6,7,8)
    .filter(x => x % 2 === 0).map(x => x * x);

  var seq = Immutable.Map({a:1, b:1, c:1}).toSeq();

  //seq.flip().map(key => key.toUpperCase()).flip().toObject();
  // Map { A: 1, B: 1, C: 1 }

  Immutable.Range(1, Infinity)
    .skip(1000)
    .map(n => -n)
    .filter(n => n % 2 === 0)
    .take(2)
    .reduce((r, n) => r * n, 1);
  // 1006008
}

() => {
  var map1 = Immutable.Map({a:1, b:1, c:1});
  var map2 = Immutable.Map({a:1, b:1, c:1});
  assert(map1 !== map2); // two different instances
  assert(Immutable.is(map1, map2)); // have equivalent values
  assert(map1.equals(map2)); // alternatively use the equals method

  var list1 = Immutable.List.of(1,2,3);
  var list2 = list1.withMutations(function (list) {
    list.push(4).push(5).push(6);
  });
  assert(list1.size === 3);
  assert(list2.size === 6);
}
