import Porty = require("porty");

// @ts-expect-error
Porty.test();
// $ExpectType Promise<boolean>
Porty.test(1234);

Porty.find(); // $ExpectType Promise<number>
Porty.find({}); // $ExpectType Promise<number>
// $ExpectType Promise<number>
Porty.find({
    avoids: [12345],
    min: 12345,
    max: 54321,
    port: 12345,
});
Porty.find(12345, 54321, [12345]); // $ExpectType Promise<number>

Porty.get(); // $ExpectType Promise<number>
Porty.get({}); // $ExpectType Promise<number>
// $ExpectType Promise<number>
Porty.get({
    avoids: [12345],
    min: 12345,
    max: 54321,
    port: 12345,
});
Porty.get(12345, 54321, [12345]); // $ExpectType Promise<number>
