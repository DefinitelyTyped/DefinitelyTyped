import pool = require("ndarray-scratch");

const x = pool.malloc([10, 10]);
pool.clone(x);

pool.ones([10, 10]);
pool.ones([10, 10], "double");

pool.zeros([10, 10]);

pool.eye([3, 4, 5]);

pool.free(x);
