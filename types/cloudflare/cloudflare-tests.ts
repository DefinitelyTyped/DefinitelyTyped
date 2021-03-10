import Cloudflare = require('cloudflare');

// $ExpectType Cloudflare
const cf = new Cloudflare({ token: 'abvd' });

// $ExpectType Promise<object> || ResponseObjectPromise
cf.ips.browse();

// $ExpectError
cf.user.edit('asd');

const types: Cloudflare.RecordTypes = 'AAAA';
