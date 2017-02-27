/// <reference path='index.d.ts' />

import Kinvey from 'kinvey-angular2-sdk';

Kinvey.initialize({
  appKey: 'foo',
  appSecret: 'bar'
})
  .then(function(activeUser: any) {
    // ...
  });

let user = new Kinvey.User();
user.login('', '')
  .then(function() {

  })
  .catch((error: Kinvey.KinveyBaseError) => {
    if (error instanceof Kinvey.KinveyError) {

    }
  })

// DataStore
const store = Kinvey.DataStore.collection<Kinvey.SyncStore>('books', Kinvey.DataStoreType.Sync);
store.find().subscribe((entities) => {
 console.log(entities);
}, (error) => {
 console.log(error);
}, () => {
 console.log('completed');
});

