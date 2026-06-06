import mime = require("mime-types");

// $ExpectType string | false
mime.lookup("json"); // 'application/json'

// $ExpectType string | false
mime.lookup(".md"); // 'text/x-markdown'

// $ExpectType string | false
mime.lookup("file.html"); // 'text/html'

// $ExpectType string | false
mime.lookup("folder/file.js"); // 'application/javascript'

// $ExpectType string | false
mime.lookup("folder/.htaccess"); // false

// $ExpectType string | false
mime.lookup("cats"); // false

// $ExpectType string | false
mime.contentType("markdown"); // 'text/x-markdown; charset=utf-8'

// $ExpectType string | false
mime.contentType("file.json"); // 'application/json; charset=utf-8'

// $ExpectType string | false
mime.contentType(".json"); // 'application/json; charset=utf-8'

// $ExpectType string | false
mime.extension("application/octet-stream"); // 'bin'

// $ExpectType string | false
mime.charset("text/x-markdown"); // 'UTF-8'

// $ExpectType string | false
mime.charsets.lookup("text/x-markdown"); // 'UTF-8'

// $ExpectType string[]
mime.extensions["application/json"]; // ['.json']

// $ExpectType string
mime.types.json; // "application/json"

// @ts-expect-error
mime.lookup(5);
