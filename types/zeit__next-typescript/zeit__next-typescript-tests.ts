import withTypescript = require('@zeit/next-typescript');

withTypescript({}); // $ExpectType { [key: string]: any; }
