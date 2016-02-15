/// <reference path="pouchdb" />

interface Person extends pouchdb.PouchDoc {
  name: string;
}

PouchDB.prefix = '';

const database: pouchdb.PouchApi<Person> =  new PouchDB<Person>('database.db', {
  adapter: 'websql'
});

database.put({
  name: 'monolith',
  _id: 'person1'
})
.then(update => {
  return database.get('person1')
})
.then(doc => {
  doc.name = 'viktor'
  return database.put(doc);
})
.then(update => {
  return database.get(update.id);
})
.then(doc => {
  return database.remove(doc);
});

