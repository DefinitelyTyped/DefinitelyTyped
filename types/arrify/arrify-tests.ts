import arrify = require("arrify");

arrify(null);
arrify<number>(null);

arrify(undefined);
arrify<number>(undefined);

arrify(1);
arrify([2, 3]);

function test(val?: string | string[]) {
    arrify(val);
}
