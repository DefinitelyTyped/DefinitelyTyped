


import urlTemplate = require('url-template');

var emailUrl = urlTemplate.parse('/{email}/{folder}/{id}');

// Returns '/user@domain/test/42'
emailUrl.expand({
    email: 'user@domain',
    folder: 'test',
    id: 42
});
