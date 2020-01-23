import dotenvParseVariables = require('dotenv-parse-variables');

dotenvParseVariables({ a: 'b' });

dotenvParseVariables({ c: 'd', e: 'f' }, { assignToProcessEnv: true });

dotenvParseVariables({ g: 'h' }, { overrideProcessEnv: false });

dotenvParseVariables({ i: 'j' }, { assignToProcessEnv: false, overrideProcessEnv: true });
