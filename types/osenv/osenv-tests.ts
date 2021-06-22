import osenv = require("osenv");

osenv.hostname();
osenv.hostname((er, hostname) => {});

osenv.home();
osenv.home((er, home) => {});

osenv.editor();
osenv.editor((er, editor) => {});

osenv.path();
osenv.path((er, path) => {});

osenv.prompt();
osenv.prompt((er, prompt) => {});

osenv.shell();
osenv.shell((er, shell) => {});

osenv.tmpdir();
osenv.tmpdir((er, tmpdir) => {});

osenv.user();
osenv.user((er, user) => {});
