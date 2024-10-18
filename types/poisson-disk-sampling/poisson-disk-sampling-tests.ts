import PoissonDiskSampling = require("poisson-disk-sampling");

const p = new PoissonDiskSampling({
    shape: [600, 300, 200],
    minDistance: 20,
    maxDistance: 30,
    tries: 10,
});

p.fill(); // $ExpectType Point[]
