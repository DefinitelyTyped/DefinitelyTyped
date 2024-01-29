import proxymise = require("proxymise");

const c = {
    testC: () => Promise.resolve("proxymised"),
};

const b = {
    testB: () => Promise.resolve(c),
};

const a = {
    testA: () => Promise.resolve(b),
};

(async () => {
    const result = await proxymise(a).testA().testB().testC(); // $ExpectType Proxymise<string>
})();
