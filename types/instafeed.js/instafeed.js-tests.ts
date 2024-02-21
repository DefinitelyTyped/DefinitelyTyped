import Instafeed = require("instafeed.js");

// $ExpectType Instafeed<InstafeedDefaultItem>
new Instafeed({ accessToken: "aa" });

// @ts-expect-error
new Instafeed("token");

// @ts-expect-error
new Instafeed({});

// @ts-expect-error
new Instafeed();
