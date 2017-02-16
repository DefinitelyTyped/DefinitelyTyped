import Lowdb = require('lowdb');

Lowdb
let db = new Lowdb();

db.defaults({ 'someObject': {}, 'anotherObject': {} }).value();

db.get('someObject').set('foo' , 'bar').value();
db.get('anotherObject').set('foo' , 'bar').value();
db.set('singleValue', 'foo').value();

console.log(db.getState());
