import { Cloudflare } from 'cloudflare';

// $ExpectType Cloudflare
const cf = new Cloudflare({ token: 'abvd' });

// $ExpectType Promise<any>
cf.ips.browse();

// $ExpectError
cf.user.edit('asd');

(async () => {
    const ips = await cf.ips.browse();

    ips.acas.asdasd;
})();
