import { Cloudflare } from 'cloudflare';

// $ExpectType Cloudflare
const cf = new Cloudflare({ token: 'abvd' });

// $ExpectType Promise<Record<string, unknown>>
cf.ips.browse();

// $ExpectError
cf.user.edit('asd');
