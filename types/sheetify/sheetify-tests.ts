import * as sheetify from 'sheetify';

function done1(err: Error, css: string, prefix: string) {}
function done2(err: Error, css: string) {}
function done3(err: Error) {}

const test1 = sheetify('foobar');
const test2 = sheetify('foobar', {global: true});
const test3 = sheetify('foobar', 'beep.css', {global: true});
const test4 = sheetify('foobar', 'beep.css');
const test5 = sheetify('foobar', 'beep.css', {global: true}, done1);
const test6 = sheetify('foobar', 'beep.css', {global: true}, done2);
const test7 = sheetify('foobar', 'beep.css', {global: true}, done3);
const test8 = sheetify`
.test {
  border: 1px soild black;
}
`;

const prefix = sheetify.getPrefix('boop');
