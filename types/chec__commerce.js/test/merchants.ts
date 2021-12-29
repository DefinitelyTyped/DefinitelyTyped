import Commerce = require('@chec/commerce.js');
import Merchant = require('@chec/commerce.js/types/merchant');

const commerce = new Commerce('{your_public_key}');

// List all categories
// $ExpectType Promise<Merchant>
commerce.merchants.about();

// From https://api.chec.io/v1/merchants
const merchants: Merchant.Merchant = {
    id: 17851,
    name: 'Commerce',
    description: '',
    status: 'active',
    country: 'CA',
    currency: {
        symbol: '$',
        code: 'USD',
    },
    support_email: 'andrew+ai@commercejs.com',
    logo: 'https://cdn.chec.io/merchants/17851/images/icon/9241ac5a755b6165cbd7abdb18562544920c167c5ec8743028c72|Commerce_logo_glasses.png',
    logo_shape: 'circle',
    cover: null,
    intercom: true,
    analytics: {
        google: {
            settings: {
                tracking_id: null,
                linked_domains: null,
            },
        },
    },
    has: {
        logo: true,
        cover: false,
        analytics: false,
        description: false,
    },
};
