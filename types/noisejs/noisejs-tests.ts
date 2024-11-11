import Noise from "noisejs";

const noise = new Noise(Math.random());

// $ExpectType number
noise.simplex2(0.1, 0.2);
// $ExpectType number
noise.simplex3(0.1, 0.2, 0.3);
// $ExpectType number
noise.perlin2(0.1, 0.2);
// $ExpectType number
noise.perlin3(0.1, 0.2, 0.3);
// $ExpectType void
noise.seed(Math.random());
