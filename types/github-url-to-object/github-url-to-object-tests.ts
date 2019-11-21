import gh = require('github-url-to-object');

gh('github:monkey/business'); // $ExpectType Result | null
gh('https://ghe.example.com:heroku/heroku-flags.git', {enterprise: true}); // $ExpectType Result | null
gh({url: 'git+https://github.com/monkey/business.git'}); // $ExpectType Result | null
