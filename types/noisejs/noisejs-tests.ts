import Noise = require("noisejs");
var noise = new Noise(Math.random());

var simplex2_noise_val = noise.simplex2(0.1, 0.2);
var simplex3_noise_val = noise.simplex3(0.1, 0.2, 0.3);
var perlin2_noise_val = noise.perlin2(0.1, 0.2);
var perlin3_noise_val = noise.perlin3(0.1, 0.2, 0.3);

noise.seed(Math.random());
