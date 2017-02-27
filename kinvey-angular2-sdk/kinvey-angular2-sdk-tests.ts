/// <reference path='index.d.ts' />

import Kinvey from 'kinvey-angular2-sdk';

Kinvey.initialize({
  appKey: 'foo',
  appSecret: 'bar'
})
  .then(function(activeUser: any) {
    // ...
  });
