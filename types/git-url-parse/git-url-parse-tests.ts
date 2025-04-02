import gitUrlParse = require("git-url-parse");

gitUrlParse("git@github.com:IonicaBizau/node-git-url-parse.git"); // $ExpectType GitUrl
gitUrlParse("git@github.com:IonicaBizau/node-git-url-parse.git").toString(); // $ExpectType string
gitUrlParse("git@github.com:IonicaBizau/node-git-url-parse.git").toString("git+ssh"); // $ExpectType string
gitUrlParse("git@github.com:IonicaBizau/node-git-url-parse.git").port; // $ExpectType string
gitUrlParse("git@github.com:IonicaBizau/node-git-url-parse.git").user; // $ExpectType string
gitUrlParse("git@github.com:IonicaBizau/node-git-url-parse.git").password; // $ExpectType string
gitUrlParse("git@github.com:IonicaBizau/node-git-url-parse.git").token; // $ExpectType string
gitUrlParse("git@github.com:IonicaBizau/node-git-url-parse.git").protocol; // $ExpectType Protocol

gitUrlParse.stringify(gitUrlParse("git@github.com:IonicaBizau/node-git-url-parse.git")); // $ExpectType string
gitUrlParse.stringify(gitUrlParse("git@github.com:IonicaBizau/node-git-url-parse.git"), "https"); // $ExpectType string
