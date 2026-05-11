import isValidDomain = require("is-valid-domain");

isValidDomain("example.com");
isValidDomain("foo.example.com", { subdomain: true });
isValidDomain("*.example.com", { wildcard: true });
