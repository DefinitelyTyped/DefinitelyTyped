import parseCacheControl = require('parse-cache-control');

const header = parseCacheControl('must-revalidate, max-age=3600');

parseCacheControl('must-revalidate, max-age=3600'); // $ExpectType Header | null
