import Lowdb = require('lowdb');

const db = new Lowdb('db.json');

db.defaults({ someObject: {}, anotherObject: {} }).write();

db.get('someObject').set('foo' , 'bar').write();
db.get('someObject.foo').value();

db.get('anotherObject').set('foo' , 'bar').write();
db.get('anotherObject.foo').value();

db.set('singleValue', 'foo').write();
db.get('singleValue').value();

console.log(db.getState());
