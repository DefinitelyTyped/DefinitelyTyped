import * as fetchJsonp from 'fetch-jsonp';

/* Taken from https://github.com/camsong/fetch-jsonp/blob/v1.0.2/README.md */

fetchJsonp('/users.jsonp')
  .then(response => response.json())
  .then(json => {
    console.log('parsed json', json);
  }).catch(ex => {
    console.log('parsing failed', ex);
  });

fetchJsonp('/users.jsonp', {
    jsonpCallback: 'custom_callback'
  })
  .then(response => response.json())
  .then(json => {
    console.log('parsed json', json);
  }).catch(ex => {
    console.log('parsing failed', ex);
  });

fetchJsonp('/users.jsonp', {
    timeout: 3000,
    jsonpCallback: 'custom_callback'
  })
  .then(response => response.json())
  .then(json => {
    console.log('parsed json', json);
  }).catch(ex => {
    console.log('parsing failed', ex);
  });

// Taken from https://github.com/camsong/fetch-jsonp/blob/v1.0.2/examples/index.html
const result = fetchJsonp('http://www.flickr.com/services/feeds/photos_public.gne?format=json', {
  jsonpCallback: 'jsoncallback',
  timeout: 3000
});
result.then(response => response.json())
.then(json => {
  document.body.innerHTML = JSON.stringify(json);
}).catch(ex => {
  document.body.innerHTML = 'failed:' + ex;
});
