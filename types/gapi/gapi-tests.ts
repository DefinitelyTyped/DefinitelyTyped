/// <reference types="gapi.people" />
/// <reference types="gapi.plus" />

/*
Examples taken from
https://developers.google.com/api-client-library/javascript/start/start-js
and
https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiloadlibraries-callbackorconfig
*/

{
  function start1() {
    // 2. Initialize the JavaScript client library.
    gapi.client.init({
      'apiKey': 'YOUR_API_KEY',
      'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
      // clientId and scope are optional if auth is not required.
      'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
      'scope': 'profile',
    }).then(function() {
      // 3. Initialize and make the API request.
      return gapi.client.people.people.get({
        resourceName: 'people/me',
        personFields: 'name'
      });
    }).then(function(response) {
      console.log(response.result);
    }, function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  };
  // 1. Load the JavaScript client library.
  gapi.load('client', start1);
}

{
  function start2() {
    // 2. Initialize the JavaScript client library.
    gapi.client.init({
      'apiKey': 'YOUR_API_KEY',
      // clientId and scope are optional if auth is not required.
      'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
      'scope': 'profile',
    }).then(function() {
      // 3. Initialize and make the API request.
      return gapi.client.request({
        'path': 'https://people.googleapis.com/v1/people/me',
      })
    }).then(function(response) {
      console.log(response.result);
    }, function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  };
  // 1. Load the JavaScript client library.
  gapi.load('client', start2);
}

{
  gapi.load('client', {
    callback: function() {
      // Handle gapi.client initialization.
      console.log('callback');
    },
    onerror: function() {
      // Handle loading error.
      console.log('gapi.client failed to load!');
    },
    timeout: 5000, // 5 seconds.
    ontimeout: function() {
      // Handle timeout.
      console.log('gapi.client could not load in a timely manner!');
    }
  });
}


/* Examples taken from https://developers.google.com/api-client-library/javascript/features/promises */

gapi.client.request({'path': '/plus/v1/people', 'params': {'query': 'John'}}).then(function(response) {
  // Handle response
}, function(reason) {
  // Handle error
});

gapi.client.load('plus', 'v1').then(function() {
  gapi.client.plus.people.search({'query': ''}).then(response => { });
});

var personFetcher = {
  results: [],

  // Why this: any? Check https://github.com/Microsoft/TypeScript/issues/10835

  fetch: function(this: any, name: string) {
    gapi.client.request({path: '/plus/v1/people', params:{query: name}}).then(function(this: any, response) {
      this.results.push(response.result);
    }, function(reason) {
      console.error(name, 'was not fetched:', reason.result.error.message);
    }, this);
  }
};
personFetcher.fetch('John');

gapi.client.request({
  'path': 'plus/v1/people',
  'params': {'query': name}
}).execute(function(resp, rawResp) {
  processResponse(resp);
});

gapi.client.request({
  'path': 'plus/v1/people',
  'params': {'query': name}
}).then(function(resp) {
  processResponse(resp.result);
});

function processResponse(response: any) {
  // Stub
}

gapi.auth.setToken({
  access_token: 'dummy-value',
  error: '',
  expires_in: '',
  state: '',
});
