import sanitize = require("sanitize-s3-objectkey");

sanitize("foo/bar"); // $ExpectType string
sanitize(123, "/"); // $ExpectType string
