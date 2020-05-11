/// <reference types="node" />
import Level = require('level-js');

const db = Level('bigData');
const dbClass = new Level('bigData');

db.put('hello', Buffer.from('world'), (err) => {
    if (err) throw err;
    db.get('hello', (err, value) => {
        if (err) throw err;
        console.log(value.toString());
    });
});

db.location;
db.prefix;
db.version;

db.destroy('bigData', (error) => console.log(error));

db.iterator();
db.iterator({keyAsBuffer: false});

db.createReadStream({gt: new Date('2019-01-01')});
