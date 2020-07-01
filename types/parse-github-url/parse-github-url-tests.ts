import gh = require('parse-github-url');

gh('github:monkey/business'); // $ExpectType Result | null
