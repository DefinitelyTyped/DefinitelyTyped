import hexToUuid = require('hex-to-uuid');

// $ExpectType string
hexToUuid('0xd3fd354067184687956bc8618a26e335');

// @ts-expect-error
hexToUuid();
