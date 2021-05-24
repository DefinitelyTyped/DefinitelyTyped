import Commerce = require('@chec/commerce.js');

const commerce = new Commerce('{your_public_key}');

const country = 'US';

commerce.services.localeListCountries().then(response => {});

commerce.services.localeListSubdivisions(country).then(response => {});
