import platform = require('platform');

const info = platform.parse(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.7.2; en; rv:2.0) Gecko/20100101 Firefox/4.0 Opera 11.52',
);

info.description; // $ExpectType string | undefined
info.layout; // $ExpectType string | undefined
info.manufacturer; // $ExpectType string | undefined
info.name; // $ExpectType string | undefined
info.os; // $ExpectType OperatingSystem | undefined
info.parse; // $ExpectType (ua?: string | object | undefined) => Platform
info.parse('Enigma OS'); // $ExpectType Platform
info.prerelease; // $ExpectType string | undefined
info.product; // $ExpectType string | undefined
info.toString; // $ExpectType () => string
info.ua; // $ExpectType string | undefined
info.version; // $ExpectType string | undefined
