import textr = require("textr");

textr();

textr()
    .use(() => { });

textr()
    .use(() => { })
    .use(() => { })
    .exec('hello');
