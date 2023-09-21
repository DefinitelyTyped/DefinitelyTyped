import OAuth = require("./index");

// $ExpectType string
OAuth.getAuthorizationHeader('https://example.com', 'POST', 'foo', 'consumerKey', 'signingKey');
