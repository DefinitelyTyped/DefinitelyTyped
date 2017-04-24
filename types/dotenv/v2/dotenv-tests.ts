import dotenv = require('dotenv');

// typically, result will be an Object
const env = dotenv.config({
    silent: true
});
const dbUrl: string | null = !env ? null : env['DATABASE_URL'];

// ... but it might also be `false`
const result = dotenv.config({
    path: '.non-existing-env'
});

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
