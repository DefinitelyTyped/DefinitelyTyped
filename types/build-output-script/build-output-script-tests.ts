import buildOutputScript = require('build-output-script');

// $ExpectType string
buildOutputScript([{ address: '1LukeQU5jwebXbMLDVydeH4vFSobRV9rkj', value: 100000000 }]);
// $ExpectType string
buildOutputScript([
    { address: '1LukeQU5jwebXbMLDVydeH4vFSobRV9rkj', value: 100000000 },
    { address: '1BitcoinEaterAddressDontSendf59kuE', value: 100000000 },
]);
// @ts-expect-error
buildOutputScript([]);
