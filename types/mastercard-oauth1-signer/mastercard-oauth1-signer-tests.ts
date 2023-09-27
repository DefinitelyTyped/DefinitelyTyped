import OAuth = require("mastercard-oauth1-signer");

// $ExpectType string
OAuth.getAuthorizationHeader("https://example.com", "POST", "foo", "consumerKey", "signingKey");
