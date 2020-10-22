import withSourceMaps = require('@zeit/next-source-maps');

withSourceMaps({}); // $ExpectType { [key: string]: any; }
