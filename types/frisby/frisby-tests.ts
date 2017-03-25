//Example from https://www.npmjs.com/package/frisby

import frisby = require('frisby');
 
var URL = 'http://localhost:3000/';
var URL_AUTH = 'http://username:password@localhost:3000/';
 
frisby.globalSetup({ // globalSetup is for ALL requests 
  request: {
    headers: { 'X-Auth-Token': 'fa8426a0-8eaf-4d22-8e13-7c1b16a9370c' }
  }
});
 
frisby.create('GET user johndoe')
  .get(URL + '/users/3.json')
  .expectStatus(200)
  .expectJSONTypes({
    id: Number,
    username: String,
    is_admin: Boolean
  })
  .expectJSON({
    id: 3,
    username: 'johndoe',
    is_admin: false
  })
  // 'afterJSON' automatically parses response body as JSON and passes it as an argument 
  .afterJSON(function(user) {
  	// You can use any normal jasmine-style assertions here 
  	expect(1+1).toEqual(2);
 
  	// Use data from previous result in next test 
    frisby.create('Update user')
      .put(URL_AUTH + '/users/' + user.id + '.json', {tags: ['jasmine', 'bdd']})
      .expectStatus(200)
    .toss();
  })
.toss();