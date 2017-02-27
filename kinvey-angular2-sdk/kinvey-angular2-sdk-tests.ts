/// <reference path='kinvey-angular2-sdk.d.ts' />

import Kinvey from 'kinvey-angular2-sdk';

Kinvey.initialize({
  appKey: 'foo',
  appSecret: 'bar'
})
  .then(function(activeUser) {
    // ...
  });
