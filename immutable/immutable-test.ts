/// <reference path="./immutable.d.ts" />

import * as Immutable from "immutable";

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