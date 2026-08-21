import gitConfigPath = require("git-config-path");

gitConfigPath(); // $ExpectType string | null
gitConfigPath("global"); // $ExpectType string | null
