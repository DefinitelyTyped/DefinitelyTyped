import uuidToHex = require('uuid-to-hex');

// $ExpectType string
uuidToHex('d3fd3540-6718-4687-956b-c8618a26e335');

// $ExpectType string
uuidToHex('d3fd3540-6718-4687-956b-c8618a26e335', true);

// @ts-expect-error
uuidToHex();
