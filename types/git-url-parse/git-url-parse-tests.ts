import gitUrlParse = require('git-url-parse');

gitUrlParse("git@github.com:IonicaBizau/node-git-url-parse.git"); // $ExpectType GitUrl
gitUrlParse("git@github.com:IonicaBizau/node-git-url-parse.git").toString(); // $ExpectType string
gitUrlParse("git@github.com:IonicaBizau/node-git-url-parse.git").toString('git+ssh'); // $ExpectType string

gitUrlParse.stringify(gitUrlParse("git@github.com:IonicaBizau/node-git-url-parse.git")); // $ExpectType string
gitUrlParse.stringify(gitUrlParse("git@github.com:IonicaBizau/node-git-url-parse.git"), 'https'); // $ExpectType string
