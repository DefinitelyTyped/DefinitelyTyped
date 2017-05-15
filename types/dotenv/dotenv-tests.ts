import dotenv = require('dotenv');

const env = dotenv.config();
const dbUrl: string | null = env.error || !env.parsed ? null : env.parsed['DATABASE_URL'];

dotenv.config({
    path: '.env'
});

dotenv.config({
    encoding: 'utf8'
});

const parsed = dotenv.parse("ENVIRONMENT=production\nDEBUG=no\n");
const debug: string = parsed['DEBUG'];

const parsedFromBuffer = dotenv.parse(new Buffer("JUSTICE=league\n"));
const justice: string = parsedFromBuffer['JUSTICE'];
