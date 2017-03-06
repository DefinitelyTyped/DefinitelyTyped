import Lowdb = require('lowdb');

const db = new Lowdb('db.json');

db.defaults({ someObject: {}, anotherObject: {} }).value();

db.get('someObject').set('foo' , 'bar').value();
db.get('anotherObject').set('foo' , 'bar').value();
db.set('singleValue', 'foo').value();

console.log(db.getState());
