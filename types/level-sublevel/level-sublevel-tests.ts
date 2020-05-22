

import levelup = require('levelup');
import sublevel = require('level-sublevel');

var db = sublevel(levelup('./tmp/sublevel-example'));
var sub = db.sublevel('stuff');

db.put('foo', 'bar', err => {});

sub.put('foo', 'bar', err => {});

db.pre((ch, add) => {
    add({
        key: ''+Date.now(),
        value: ch.key,
        type: 'put',
        prefix: sub
    })
});

var sub1 = db.sublevel('SUB_1');
var sub2 = db.sublevel('SUM_2');

sub1.batch([
    { key: 'key', value: 'Value', type: 'put' },
    { key: 'key', value: 'Value', type: 'put', prefix: sub2 }
], err => {    if (err) throw err; });
