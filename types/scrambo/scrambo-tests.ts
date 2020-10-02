import Scrambo = require('scrambo');

(async () => {
    const scrambo = new Scrambo();
    scrambo.seed(15000);

    const originalType = scrambo.type();

    scrambo.type('minx').length(15).get();
    scrambo.type(originalType).get(5);
})();
