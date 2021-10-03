import lsofi = require('lsofi');

// $ExpectType Promise<number | null>
const a = lsofi(3000);
