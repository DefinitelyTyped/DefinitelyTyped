

import {Key, KeySet, Path, PathSet, ref, atom, error, pathValue, pathInvalidation} from 'falcor-json-graph';

const stringKey: Key = "productsById";
const numberKey: Key = 10;
const booleanKey: Key = true;

const keySet01: KeySet = stringKey;
const keySet02: KeySet = [stringKey];
const KeySet03: KeySet = {from: 1, to: 10};
const KeySet04: KeySet = ["name", {from: 0, length: 10}];

const path0: Path =  ["productsById", "1234", "name"];
const path1: Path = [stringKey, numberKey, booleanKey];

const pathSet01: PathSet =  ["productsById", ["1234", "5678"], ["name", "price"]];
const pathSet02: PathSet =  ["products", [{from: 0, length: 10}, "length"], ["name", "price"]];

var ref01 = ref(['hoge']);
var ref02 = ref(['hoge'], {$expires: 1000});
console.log(ref02.$type, ref02.value, ref02.$expires);

var atom01 = atom('hoge');
var atom02 = atom('hoge', {$expires: 1000});
console.log(atom02.$type, atom02.value, atom02.$expires);

var err01 = error('some error!');
var err02 = error('some error!', {$expires: 1000});
console.log(err02.$type === 'error', ref02.value, ref02.$expires);

var pv01 = pathValue('hoge', 'FOO');
var pv02 = pathValue('hoge[0].bar', 'FOO');
var pv03 = pathValue('hoge[0...100].bar', 'FOO');
var pv04 = pathValue(['hoge', {from: 0, to: 100}, 'bar'], 'FOO');
console.log(pv04.path, pv04.value);

var ip01 = pathInvalidation('hoge');
console.log(ip01.path, ip01.invalidate);
