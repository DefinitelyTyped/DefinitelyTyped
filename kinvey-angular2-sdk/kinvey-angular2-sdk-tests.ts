/// <reference path='index.d.ts' />

import Kinvey from 'kinvey-angular2-sdk';

Kinvey.initialize({
  appKey: 'foo',
  appSecret: 'bar'
})
  .then(function(activeUser: any) {
    // ...
  });

const user = new Kinvey.User();
user.login('username', 'password')
  .then(function(user) {
    // ...
  });

// DataStore
const store = Kinvey.DataStore.collection<Kinvey.SyncStore>('books', Kinvey.DataStoreType.Sync);
store.find().subscribe((entities) => {
 // ...
});

