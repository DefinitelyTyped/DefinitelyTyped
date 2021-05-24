import Commerce = require('@chec/commerce.js');

const commerce = new Commerce('{your_public_key}');

const token = 'checkout_token_id';
const country = 'US';

commerce.services.localeListCountries().then(response => {});

commerce.services.localeListShippingCountries(token).then(response => {});

commerce.services.localeListShippingSubdivisions(token, country).then(response => {});

commerce.services.localeListSubdivisions(country).then(response => {});
