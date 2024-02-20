import Instafeed = require("instafeed.js");

// $ExpectType Instafeed<InstafeedDefaultItem>
const feed = new Instafeed({ accessToken: "aa" });

// $ExpectType InstafeedState<InstafeedDefaultItem>
feed._state;

// $ExpectType InstafeedOptions<InstafeedDefaultItem>
feed._options;

// @ts-expect-error
new Instafeed("token");

// @ts-expect-error
new Instafeed({});
