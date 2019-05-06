import osenv = require("osenv");

osenv.hostname();
osenv.hostname(function (er, hostname) {})

osenv.home();
osenv.editor();
osenv.path();
osenv.prompt();
osenv.shell();
osenv.tmpdir();
osenv.user();