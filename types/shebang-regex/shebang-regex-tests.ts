import shebangRegex = require('shebang-regex');

const str = '#!/usr/bin/env node\nconsole.log("unicorns");';

shebangRegex.test(str);
