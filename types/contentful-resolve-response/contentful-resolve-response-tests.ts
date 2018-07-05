
import resolveResponse = require('contentful-resolve-response');

var response = {
  items: [
    {
      someValue: 'wow',
      someLink: {sys: {type: 'Link', linkType: 'Entry', id: 'suchId'}}
    }
  ],
  includes: {
    Entry: [
      {sys: {type: 'Entry', id: 'suchId'}, very: 'doge'}
    ]
  }
};

var items = resolveResponse(response)

console.log(items);
