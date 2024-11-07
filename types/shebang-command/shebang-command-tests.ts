import shebangCommand = require("shebang-command");

shebangCommand("#!/usr/bin/env node"); // $ExpectType string | null
shebangCommand(); // $ExpectType string | null
