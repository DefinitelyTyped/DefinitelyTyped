import npmName = require('npm-name');

// $ExpectType Promise<boolean>
npmName('chalk');

npmName.many(['chalk', '@sindresorhus/is', 'abc123']).then(result => {
    // $ExpectType Map<"chalk" | "@sindresorhus/is" | "abc123", boolean>
    result;

    // $ExpectType boolean | undefined
    result.get('chalk');
});
